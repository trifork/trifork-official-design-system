"use client";

/* =============================================================
   Trifork — Social Post playground (carousel + export)
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as htmlToImage from "html-to-image";
import JSZip from "jszip";

import { SocialPost, FORMATS } from "./SocialPost";
import { BLANK, CARD_TYPES, PHOTOS } from "./presets";

function uid() { return Math.random().toString(36).slice(2, 9); }
function fileToDataURL(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

function blankPage(type) {
  return { id: uid(), ...JSON.parse(JSON.stringify(BLANK[type] || BLANK.event)) };
}

/* ---------- shareable-link encoding ----------
   The playground state is encoded into a single `post` query param as
   base64url(JSON). An LLM (or the Copy-link button) can construct
   /social/playground/?post=<base64url> to deep-link a pre-filled post.
   Payload shape: { format?: "1:1"|"4:5"|"1.91:1"|"9:16", pages: [page, ...] }
   A bare page object or a bare array of pages is also accepted. */
function encodeBase64Url(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function decodeBase64Url(s) {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/* Content fields are emptied before overlaying the payload, so a deep-link
   reproduces exactly what was supplied rather than blending with the sample
   content baked into the BLANK templates. Structural fields (layout, bg,
   photoPos, eyebrowColor, statColor, showLogo) keep their template defaults. */
const CONTENT_KEYS = [
  "eyebrow", "title", "body", "meta", "metaRows", "positions", "speakers",
  "statNumber", "statUnit", "statLabel", "quoteName", "quoteRole", "quoteAvatar",
  "photoSrc",
];

/* Accept a few shapes and normalise to the playground's internal page model. */
function normalisePage(input, type) {
  const variant = input.variant || type || "event";
  const skeleton = JSON.parse(JSON.stringify(BLANK[variant] || BLANK.event));
  for (const k of CONTENT_KEYS) {
    if (Array.isArray(skeleton[k])) skeleton[k] = [];
    else if (typeof skeleton[k] === "string") skeleton[k] = "";
  }
  const merged = { ...skeleton, ...input, variant };
  // Tolerate the SocialPost prop shape for quote attribution.
  if (input.quoteAttribution) {
    merged.quoteName = input.quoteAttribution.name ?? merged.quoteName;
    merged.quoteRole = input.quoteAttribution.role ?? merged.quoteRole;
    merged.quoteAvatar = input.quoteAttribution.avatar ?? merged.quoteAvatar;
    delete merged.quoteAttribution;
  }
  return { id: uid(), ...merged };
}

function statePayload(format, pages) {
  // Strip ids and uploaded data-URL images (too large / not shareable by link).
  const clean = pages.map(({ id, ...p }) => {
    const c = { ...p };
    if (typeof c.photoSrc === "string" && c.photoSrc.startsWith("data:")) c.photoSrc = "";
    if (typeof c.quoteAvatar === "string" && c.quoteAvatar.startsWith("data:")) c.quoteAvatar = "";
    return c;
  });
  return { format, pages: clean };
}

function pageToProps(page, format) {
  return {
    format,
    layout: page.layout,
    bg: page.bg,
    photoSrc: page.bg === "photo" ? page.photoSrc : undefined,
    photoPos: page.photoPos,
    eyebrow: page.eyebrow,
    eyebrowColor: page.eyebrowColor === "auto" ? undefined : page.eyebrowColor,
    title: page.title,
    body: page.body,
    meta: page.meta || [],
    metaRows: page.metaRows || [],
    positions: page.positions || [],
    variant: page.variant,
    statNumber: page.statNumber,
    statUnit: page.statUnit,
    statLabel: page.statLabel,
    statColor: page.statColor,
    quoteAttribution: page.variant === "quote"
      ? { name: page.quoteName, role: page.quoteRole, avatar: page.quoteAvatar || undefined }
      : undefined,
    speakers: page.variant === "event" ? page.speakers : undefined,
    showLogo: page.showLogo,
  };
}

async function renderAndCapture(props, dims) {
  const holder = document.createElement("div");
  holder.style.cssText = `position:fixed;left:-100000px;top:0;width:${dims.w}px;height:${dims.h}px;z-index:-1;`;
  document.body.appendChild(holder);
  const root = createRoot(holder);
  await new Promise((res) => {
    root.render(<SocialPost {...props} scale={1} />);
    requestAnimationFrame(() => requestAnimationFrame(res));
  });
  await Promise.all([...holder.querySelectorAll("img")].map((img) =>
    (img.complete && img.naturalWidth) ? Promise.resolve() : new Promise((r) => { img.onload = img.onerror = r; })
  ));
  if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (_) {} }
  await new Promise((r) => setTimeout(r, 160));
  const node = holder.firstChild;
  const blob = await htmlToImage.toBlob(node, {
    width: dims.w, height: dims.h, pixelRatio: 1, cacheBust: true,
    backgroundColor: props.bg === "light" ? "#D5E5ED" : "#2C3A42",
  });
  root.unmount();
  holder.remove();
  return blob;
}

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 1000);
}

export function Playground() {
  const [format, setFormat] = useState("1:1");
  const [pages, setPages] = useState(() => [blankPage("event")]);
  const [sel, setSel] = useState(0);
  const [busy, setBusy] = useState("");
  const [linkMsg, setLinkMsg] = useState("");

  // Hydrate from a ?post= shareable link on first mount (client-side only,
  // so the static export's prerendered default doesn't cause a hydration
  // mismatch). Malformed payloads are ignored — the default post stays.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = new URLSearchParams(window.location.search).get("post");
    if (!raw) return;
    try {
      const decoded = JSON.parse(decodeBase64Url(raw));
      let inPages, inFormat;
      if (Array.isArray(decoded)) { inPages = decoded; }
      else if (decoded && Array.isArray(decoded.pages)) { inPages = decoded.pages; inFormat = decoded.format; }
      else if (decoded && typeof decoded === "object") { inPages = [decoded]; inFormat = decoded.format; }
      if (inFormat && FORMATS[inFormat]) setFormat(inFormat);
      if (inPages && inPages.length) {
        setPages(inPages.map((p) => normalisePage(p)));
        setSel(0);
      }
    } catch (_) { /* ignore malformed link */ }
  }, []);

  const dims = FORMATS[format];
  const page = pages[Math.min(sel, pages.length - 1)];

  const updatePage = (patch) => setPages((ps) => ps.map((p, i) => i === sel ? { ...p, ...patch } : p));
  const setField = (k) => (e) => {
    const v = e && e.target ? (e.target.type === "checkbox" ? e.target.checked : e.target.value) : e;
    updatePage({ [k]: v });
  };

  const addPage = () => {
    const np = { ...JSON.parse(JSON.stringify(page)), id: uid() };
    setPages((ps) => { const n = [...ps]; n.splice(sel + 1, 0, np); return n; });
    setSel(sel + 1);
  };
  const delPage = () => {
    if (pages.length <= 1) return;
    setPages((ps) => ps.filter((_, i) => i !== sel));
    setSel(Math.max(0, sel - 1));
  };
  const move = (dir) => {
    const j = sel + dir;
    if (j < 0 || j >= pages.length) return;
    setPages((ps) => { const n = [...ps]; const [it] = n.splice(sel, 1); n.splice(j, 0, it); return n; });
    setSel(j);
  };
  const changeType = (e) => {
    const t = e.target.value;
    setPages((ps) => ps.map((p, i) => i === sel ? { id: p.id, ...JSON.parse(JSON.stringify(BLANK[t])) } : p));
  };

  const stageRef = useRef(null);
  const [scale, setScale] = useState(0.45);
  useEffect(() => {
    if (!stageRef.current) return;
    const PAD = 64;
    const recalc = () => {
      if (!stageRef.current) return;
      const w = stageRef.current.clientWidth - PAD;
      const h = stageRef.current.clientHeight - PAD;
      const s = Math.min(w / dims.w, h / dims.h);
      setScale(s > 0 ? s : 0.4);
    };
    recalc();
    const obs = new ResizeObserver(recalc);
    if (stageRef.current.parentElement) obs.observe(stageRef.current.parentElement);
    return () => obs.disconnect();
  }, [format, dims.w, dims.h]);

  const downloadOne = async () => {
    try {
      setBusy("Rendering…");
      const blob = await renderAndCapture(pageToProps(page, format), dims);
      downloadBlob(blob, `trifork-${page.variant}-${sel + 1}.png`);
      setBusy("");
    } catch (err) { setBusy(""); alert("Could not generate image: " + err.message); }
  };
  const downloadAll = async () => {
    try {
      setBusy("Rendering 1/" + pages.length + "…");
      if (pages.length === 1) {
        const blob = await renderAndCapture(pageToProps(pages[0], format), dims);
        downloadBlob(blob, `trifork-${pages[0].variant}.png`);
        setBusy("");
        return;
      }
      const zip = new JSZip();
      for (let i = 0; i < pages.length; i++) {
        setBusy("Rendering " + (i + 1) + "/" + pages.length + "…");
        const blob = await renderAndCapture(pageToProps(pages[i], format), dims);
        zip.file(`page-${String(i + 1).padStart(2, "0")}.png`, blob);
      }
      setBusy("Zipping…");
      const out = await zip.generateAsync({ type: "blob" });
      downloadBlob(out, "trifork-carousel.zip");
      setBusy("");
    } catch (err) { setBusy(""); alert("Could not generate images: " + err.message); }
  };

  const copyLink = async () => {
    try {
      const payload = encodeBase64Url(JSON.stringify(statePayload(format, pages)));
      const base = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
      const url = `${base}?post=${payload}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setLinkMsg("Link copied");
      } else {
        window.prompt("Shareable link", url);
      }
      setTimeout(() => setLinkMsg(""), 2000);
    } catch (err) { setLinkMsg(""); alert("Could not build link: " + err.message); }
  };

  const props = pageToProps(page, format);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
        <PgGroup label="Format" inline>
          <Segmented options={Object.entries(FORMATS).map(([k, f]) => ({ value: k, label: f.ratio }))} value={format} onChange={setFormat} />
        </PgGroup>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {busy ? <span style={{ font: "500 13px/1 var(--tf-font)", color: "var(--tf-text-body)" }}>{busy}</span> : null}
          <button onClick={copyLink} disabled={!!busy} style={btnGhost} title="Copy a link that re-opens this post in the playground">
            {linkMsg || "Copy link"}
          </button>
          <button onClick={downloadOne} disabled={!!busy} style={btnGhost}>Download page</button>
          <button onClick={downloadAll} disabled={!!busy} style={btnSolid}>{pages.length > 1 ? `Download all (${pages.length})` : "Download"}</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 360px", gap: 32, alignItems: "start" }}>
        <div>
          <div ref={stageRef} style={{ background: "var(--tf-bg-soft)", borderRadius: 24, padding: 32, height: 600, display: "flex", justifyContent: "center", alignItems: "center", boxSizing: "border-box", overflow: "hidden", position: "relative" }}>
            {pages.length > 1 ? (
              <>
                <button onClick={() => setSel(Math.max(0, sel - 1))} disabled={sel === 0} style={{ ...navBtn, left: 16 }}>‹</button>
                <button onClick={() => setSel(Math.min(pages.length - 1, sel + 1))} disabled={sel === pages.length - 1} style={{ ...navBtn, right: 16 }}>›</button>
              </>
            ) : null}
            <div style={{ boxShadow: "0 10px 30px rgba(20,30,38,0.12)", borderRadius: 6, overflow: "hidden" }}>
              <SocialPost {...props} scale={scale} />
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 16, alignItems: "center", flexWrap: "wrap" }}>
            {pages.map((p, i) => {
              const tScale = 76 / FORMATS[format].w;
              return (
                <button key={p.id} onClick={() => setSel(i)} title={`Page ${i + 1}`} style={{ padding: 0, border: i === sel ? "2px solid var(--tf-orange-500)" : "2px solid transparent", borderRadius: 8, background: "none", cursor: "pointer", lineHeight: 0, position: "relative" }}>
                  <div style={{ borderRadius: 6, overflow: "hidden", opacity: i === sel ? 1 : 0.6 }}>
                    <SocialPost {...pageToProps(p, format)} scale={tScale} />
                  </div>
                  <span style={{ position: "absolute", top: 2, left: 4, font: "500 10px/1 var(--tf-font)", color: "var(--tf-white)", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>{i + 1}</span>
                </button>
              );
            })}
            <button onClick={addPage} title="Add page" style={addBtn}>＋</button>
          </div>
          {pages.length > 1 ? (
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button onClick={() => move(-1)} disabled={sel === 0} style={miniBtn}>← Move left</button>
              <button onClick={() => move(1)} disabled={sel === pages.length - 1} style={miniBtn}>Move right →</button>
              <button onClick={delPage} style={{ ...miniBtn, color: "var(--tf-orange-700)" }}>Delete page</button>
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <PgGroup label={`Page ${sel + 1} of ${pages.length} · type`}>
            <select value={page.variant} onChange={changeType} style={inputStyle}>
              {CARD_TYPES.map((t) => <option key={t.id} value={t.variant}>{t.label}</option>)}
            </select>
          </PgGroup>

          <PgGroup label="Layout (title anchor)">
            <Segmented options={[{ value: "top", label: "Top" }, { value: "center", label: "Center" }, { value: "bottom", label: "Bottom" }]} value={page.layout} onChange={(v) => updatePage({ layout: v })} />
          </PgGroup>

          <PgGroup label="Background">
            <Segmented options={[{ value: "ink", label: "Ink" }, { value: "light", label: "Light" }, { value: "photo", label: "Photo" }]} value={page.bg} onChange={(v) => updatePage({ bg: v })} />
          </PgGroup>

          {page.bg === "photo" ? (
            <PgGroup label="Photo">
              <PhotoPicker value={page.photoSrc} onChange={(v) => updatePage({ photoSrc: v })} />
            </PgGroup>
          ) : null}

          <PgGroup label="Eyebrow">
            <input value={page.eyebrow} onChange={setField("eyebrow")} style={inputStyle} />
            {page.bg === "photo" ? null : (
              <div style={{ marginTop: 8 }}>
                <Segmented small options={[{ value: "auto", label: "Auto" }, { value: "orange", label: "Orange" }, { value: "white", label: "White" }, { value: "ink", label: "Ink" }]} value={page.eyebrowColor} onChange={(v) => updatePage({ eyebrowColor: v })} />
              </div>
            )}
          </PgGroup>

          {page.variant === "quote" ? (
            <>
              <PgGroup label="Quote"><textarea value={page.title} onChange={setField("title")} rows={3} style={{ ...inputStyle, resize: "vertical" }} /></PgGroup>
              <PgGroup label="Attribution — name"><input value={page.quoteName || ""} onChange={setField("quoteName")} style={inputStyle} /></PgGroup>
              <PgGroup label="Attribution — role"><input value={page.quoteRole || ""} onChange={setField("quoteRole")} style={inputStyle} /></PgGroup>
              <PgGroup label="Attribution — photo (optional)">
                <AvatarUpload value={page.quoteAvatar} onChange={(v) => updatePage({ quoteAvatar: v })} />
              </PgGroup>
            </>
          ) : page.variant === "stat" ? (
            <>
              <PgGroup label="Number"><input value={page.statNumber || ""} onChange={setField("statNumber")} style={inputStyle} /></PgGroup>
              <PgGroup label="Unit (optional)"><input value={page.statUnit || ""} onChange={setField("statUnit")} style={inputStyle} /></PgGroup>
              <PgGroup label="Figure colour">
                <Segmented options={[{ value: "orange", label: "Orange" }, { value: "blue", label: "Blue" }, { value: "neutral", label: "Neutral" }]} value={page.statColor || "orange"} onChange={(v) => updatePage({ statColor: v })} />
              </PgGroup>
              <PgGroup label="Label"><textarea value={page.statLabel || ""} onChange={setField("statLabel")} rows={2} style={{ ...inputStyle, resize: "vertical" }} /></PgGroup>
            </>
          ) : (
            <>
              <PgGroup label={page.variant === "job" ? "Hook title" : "Title"}><textarea value={page.title} onChange={setField("title")} rows={2} style={{ ...inputStyle, resize: "vertical" }} /></PgGroup>
              {(page.variant === "job" || page.variant === "case" || page.variant === "default") ? (
                <PgGroup label="Body (optional)"><textarea value={page.body || ""} onChange={setField("body")} rows={3} style={{ ...inputStyle, resize: "vertical" }} /></PgGroup>
              ) : null}
            </>
          )}

          {page.variant === "job" ? (
            <PgGroup label="Open positions">
              <ListEditor items={page.positions} onChange={(v) => updatePage({ positions: v })} placeholder="Role title" />
            </PgGroup>
          ) : null}

          {page.variant === "event" ? (
            <PgGroup label="Speakers (optional)">
              <SpeakerEditor items={page.speakers || []} onChange={(v) => updatePage({ speakers: v })} />
            </PgGroup>
          ) : null}

          {(page.variant === "news" || page.variant === "event") ? (
            <PgGroup label="Detail rows (label · value)">
              <RowEditor rows={page.metaRows || []} onChange={(v) => updatePage({ metaRows: v })} />
            </PgGroup>
          ) : null}

          {page.variant !== "quote" ? (
            <PgGroup label="Meta lines">
              <input value={(page.meta && page.meta[0]) || ""} onChange={(e) => updatePage({ meta: [e.target.value, (page.meta && page.meta[1]) || ""] })} style={inputStyle} placeholder="e.g. 20 February, Aarhus" />
              <input value={(page.meta && page.meta[1]) || ""} onChange={(e) => updatePage({ meta: [(page.meta && page.meta[0]) || "", e.target.value] })} style={{ ...inputStyle, marginTop: 8 }} placeholder="e.g. 15:30–17:30" />
            </PgGroup>
          ) : null}

          <PgGroup label="">
            <label style={{ display: "flex", alignItems: "center", gap: 8, font: "400 14px/1.4 var(--tf-font)", color: "var(--tf-text)" }}>
              <input type="checkbox" checked={page.showLogo} onChange={setField("showLogo")} /> Show Trifork logo
            </label>
          </PgGroup>
        </div>
      </div>
    </div>
  );
}

function ListEditor({ items, onChange, placeholder }) {
  const set = (i, v) => onChange(items.map((it, j) => j === i ? v : it));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", gap: 6 }}>
          <input value={it} onChange={(e) => set(i, e.target.value)} style={inputStyle} placeholder={placeholder} />
          <button onClick={() => onChange(items.filter((_, j) => j !== i))} style={xBtn}>×</button>
        </div>
      ))}
      <button onClick={() => onChange([...items, ""])} style={miniBtn}>＋ Add</button>
    </div>
  );
}
function RowEditor({ rows, onChange }) {
  const set = (i, k, v) => onChange(rows.map((r, j) => j === i ? { ...r, [k]: v } : r));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "flex", gap: 6 }}>
          <input value={r.label} onChange={(e) => set(i, "label", e.target.value)} style={{ ...inputStyle, flex: "0 0 110px" }} placeholder="Label" />
          <input value={r.value} onChange={(e) => set(i, "value", e.target.value)} style={inputStyle} placeholder="Value" />
          <button onClick={() => onChange(rows.filter((_, j) => j !== i))} style={xBtn}>×</button>
        </div>
      ))}
      <button onClick={() => onChange([...rows, { label: "", value: "" }])} style={miniBtn}>＋ Add row</button>
    </div>
  );
}
function SpeakerEditor({ items, onChange }) {
  const set = (i, k, v) => onChange(items.map((s, j) => j === i ? { ...s, [k]: v } : s));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((s, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6, padding: 10, background: "var(--tf-ink-50)", borderRadius: 10 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <input value={s.name} onChange={(e) => set(i, "name", e.target.value)} style={inputStyle} placeholder="Name" />
            <button onClick={() => onChange(items.filter((_, j) => j !== i))} style={xBtn}>×</button>
          </div>
          <input value={s.role} onChange={(e) => set(i, "role", e.target.value)} style={inputStyle} placeholder="Role" />
          <input value={s.company} onChange={(e) => set(i, "company", e.target.value)} style={inputStyle} placeholder="Company (orange label)" />
          <AvatarUpload value={s.avatar} onChange={(v) => set(i, "avatar", v)} />
        </div>
      ))}
      <button onClick={() => onChange([...items, { name: "", role: "", company: "" }])} style={miniBtn}>＋ Add speaker</button>
    </div>
  );
}

function PhotoPicker({ value, onChange }) {
  const isUploaded = value && value.startsWith("data:");
  return (
    <div style={{ display: "flex", gap: 6 }}>
      <select value={isUploaded ? "__uploaded" : (value || "")} onChange={(e) => { if (e.target.value !== "__uploaded") onChange(e.target.value); }} style={inputStyle}>
        {isUploaded ? <option value="__uploaded">Uploaded image</option> : null}
        {PHOTOS.filter((p) => p.src).map((p) => <option key={p.src} value={p.src}>{p.label}</option>)}
      </select>
      <label style={{ ...miniBtn, display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
        Upload
        <input type="file" accept="image/*" style={{ display: "none" }} onChange={async (e) => { const f = e.target.files[0]; if (f) onChange(await fileToDataURL(f)); e.target.value = ""; }} />
      </label>
    </div>
  );
}
function AvatarUpload({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {value ? <img src={value} alt="" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} /> : <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, border: "1px dashed var(--tf-rule-strong)" }} />}
      <label style={{ ...miniBtn, display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
        {value ? "Replace photo" : "Upload photo"}
        <input type="file" accept="image/*" style={{ display: "none" }} onChange={async (e) => { const f = e.target.files[0]; if (f) onChange(await fileToDataURL(f)); e.target.value = ""; }} />
      </label>
      {value ? <button onClick={() => onChange("")} style={{ ...xBtn, width: 36 }}>×</button> : null}
    </div>
  );
}

const inputStyle = { width: "100%", font: "400 14px/1.4 var(--tf-font)", padding: "10px 12px", border: "1px solid var(--tf-rule-strong)", borderRadius: 8, background: "var(--tf-white)", color: "var(--tf-text)", boxSizing: "border-box", outline: "none" };
const btnSolid = { font: "500 14px/1 var(--tf-font)", padding: "12px 20px", borderRadius: 999, border: "none", background: "var(--tf-ink-950)", color: "var(--tf-white)", cursor: "pointer" };
const btnGhost = { font: "500 14px/1 var(--tf-font)", padding: "12px 20px", borderRadius: 999, border: "1px solid var(--tf-rule-strong)", background: "var(--tf-white)", color: "var(--tf-text)", cursor: "pointer" };
const miniBtn = { font: "500 13px/1 var(--tf-font)", padding: "9px 14px", borderRadius: 999, border: "1px solid var(--tf-rule-strong)", background: "var(--tf-white)", color: "var(--tf-text-body)", cursor: "pointer" };
const xBtn = { font: "500 16px/1 var(--tf-font)", width: 38, flexShrink: 0, borderRadius: 8, border: "1px solid var(--tf-rule-strong)", background: "var(--tf-white)", color: "var(--tf-text-body)", cursor: "pointer" };
const navBtn = { position: "absolute", top: "50%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", border: "none", background: "var(--tf-white)", boxShadow: "0 2px 10px rgba(20,30,38,0.18)", font: "400 22px/1 var(--tf-font)", color: "var(--tf-ink-950)", cursor: "pointer", zIndex: 2 };
const addBtn = { width: 48, height: 48, borderRadius: 8, border: "1.5px dashed var(--tf-rule-strong)", background: "var(--tf-white)", font: "400 22px/1 var(--tf-font)", color: "var(--tf-text-body)", cursor: "pointer", flexShrink: 0 };

function PgGroup({ label, children, inline }) {
  return (
    <div style={inline ? { display: "flex", alignItems: "center", gap: 12 } : {}}>
      {label ? <div style={{ font: "500 11px/1 var(--tf-font)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--tf-text-muted)", marginBottom: inline ? 0 : 8 }}>{label}</div> : null}
      <div style={inline ? {} : {}}>{children}</div>
    </div>
  );
}
function Segmented({ options, value, onChange, small }) {
  return (
    <div style={{ display: "inline-flex", borderRadius: 999, padding: 3, background: "var(--tf-ink-50)", gap: 2, flexWrap: "wrap" }}>
      {options.map((o) => {
        const active = o.value === value;
        return <button key={o.value} onClick={() => onChange(o.value)} style={{ font: `500 ${small ? 12 : 13}px/1 var(--tf-font)`, padding: small ? "6px 11px" : "8px 14px", borderRadius: 999, border: "none", background: active ? "var(--tf-ink-950)" : "transparent", color: active ? "var(--tf-white)" : "var(--tf-text-body)", cursor: "pointer", transition: "all 160ms ease-out" }}>{o.label}</button>;
      })}
    </div>
  );
}
