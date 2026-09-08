/* =============================================================
   Trifork — Social Post components
   Layouts:  top | center | bottom (vertical anchor of the title)
   Types:    event | quote | stat | job | news | case (+ generic 'default')
   ============================================================= */

export const FORMATS = {
  "1:1":    { w: 1200, h: 1200, label: "Square",    ratio: "1 : 1",    use: "Feed default. Works in carousels and on mobile." },
  "4:5":    { w: 1200, h: 1500, label: "Portrait",  ratio: "4 : 5",    use: "Maximum vertical real-estate in the feed." },
  "1.91:1": { w: 1200, h: 627,  label: "Landscape", ratio: "1.91 : 1", use: "Link previews, article shares, event headers." },
  "9:16":   { w: 1080, h: 1920, label: "Story",     ratio: "9 : 16",   use: "Vertical mobile stories and reels." },
};

export const TITLE_SIZES = {
  "1:1":    [156, 128, 104, 88, 72, 60, 52],
  "4:5":    [156, 132, 108, 92, 76, 64, 54],
  "1.91:1": [96,  80,  68,  56, 48, 42, 38],
  "9:16":   [184, 156, 128, 104, 84, 72, 62],
};
export const TITLE_BREAKPOINTS = [18, 36, 56, 80, 110, 160];

export function pickTitleSize(text, format, override) {
  if (override != null) return override;
  const sizes = TITLE_SIZES[format] || TITLE_SIZES["1:1"];
  const len = (text || "").length;
  for (let i = 0; i < TITLE_BREAKPOINTS.length; i++) {
    if (len <= TITLE_BREAKPOINTS[i]) return sizes[i];
  }
  return sizes[sizes.length - 1];
}

export function paddingFor(format) {
  if (format === "1.91:1") return 64;
  if (format === "9:16") return 96;
  return 96;
}

const PHOTO_OVERLAY = "rgba(44, 58, 66, 0.90)";

function Eyebrow({ children, color = "orange", size }) {
  if (!children) return null;
  const c = color === "white" ? "#FFFFFF"
          : color === "ink"   ? "var(--tf-ink-950)"
          :                     "var(--tf-orange-500)";
  return (
    <div style={{
      font: `500 ${size || 24}px/1.1 var(--tf-font)`,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: c,
    }}>{children}</div>
  );
}

function Title({ text, format, color, sizeOverride, weight = 400, align = "left" }) {
  if (!text) return null;
  const size = pickTitleSize(text, format, sizeOverride);
  return (
    <h2 style={{
      margin: 0,
      font: `${weight} ${size}px/1.08 var(--tf-font)`,
      letterSpacing: "-0.02em",
      color: color || "var(--tf-white)",
      textWrap: "pretty",
      textAlign: align,
    }}>{text}</h2>
  );
}

function Body({ text, format, color }) {
  if (!text) return null;
  const fs = format === "1.91:1" ? 26 : format === "9:16" ? 44 : 36;
  return (
    <p style={{
      margin: 0,
      font: `400 ${fs}px/1.45 var(--tf-font)`,
      color: color || "var(--tf-white)",
      maxWidth: "92%",
      textWrap: "pretty",
    }}>{text}</p>
  );
}

function Meta({ items, color, format }) {
  if (!items || !items.filter(Boolean).length) return null;
  const fs = format === "1.91:1" ? 24 : format === "9:16" ? 40 : 30;
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      gap: format === "1.91:1" ? 8 : 14,
      font: `500 ${fs}px/1.3 var(--tf-font)`,
      color: color || "var(--tf-white)",
    }}>
      {items.filter(Boolean).map((m, i) => <span key={i}>{m}</span>)}
    </div>
  );
}

function MetaRows({ rows, color, format }) {
  if (!rows || !rows.filter(r => r && (r.label || r.value)).length) return null;
  const fs = format === "1.91:1" ? 26 : format === "9:16" ? 44 : 36;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: format === "1.91:1" ? 10 : 16 }}>
      {rows.filter(r => r && (r.label || r.value)).map((r, i) => (
        <div key={i} style={{ display: "flex", gap: format === "1.91:1" ? 28 : 48, alignItems: "baseline" }}>
          <span style={{ font: `500 ${fs}px/1.25 var(--tf-font)`, color: color || "var(--tf-white)", minWidth: format === "1.91:1" ? 160 : 230 }}>{r.label}</span>
          <span style={{ font: `400 ${fs}px/1.25 var(--tf-font)`, color: color || "var(--tf-white)" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function PositionsList({ items, color, format }) {
  if (!items || !items.filter(Boolean).length) return null;
  const fs = format === "1.91:1" ? 26 : format === "9:16" ? 46 : 38;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: format === "1.91:1" ? 16 : 28 }}>
      {items.filter(Boolean).map((p, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: format === "1.91:1" ? 18 : 28, alignItems: "start" }}>
          <span style={{ font: `500 ${fs}px/1.3 var(--tf-font)`, color: "var(--tf-orange-500)" }}>›</span>
          <span style={{ font: `400 ${fs}px/1.3 var(--tf-font)`, color: color || "var(--tf-white)", textWrap: "pretty" }}>{p}</span>
        </div>
      ))}
    </div>
  );
}

function Avatar({ name, src, size = 96, onDark = true }) {
  if (!src) return null;
  const ring = onDark ? "rgba(255,255,255,0.18)" : "rgba(44,58,66,0.12)";
  return (
    <img src={src} alt={name || ""} style={{
      width: size, height: size, borderRadius: "50%", objectFit: "cover",
      display: "block", flexShrink: 0, boxShadow: `0 0 0 1px ${ring}`,
    }} />
  );
}

const TRIFORK_PATHS = [
  { d: "m0 .133h62.132v12.51h-22.912v37.8h-16.306v-37.8h-22.914z", t: "translate(0 1)" },
  { d: "m85.567 25.873h26.954c4.406 0 6.023-1.668 6.023-5.283v-1.664c0-4.451-2.352-5.283-7.492-5.283h-25.485zm-16.304-24.74h49.207c12.558 0 15.937 5.906 15.937 14.941v3.196c0 6.744-1.615 10.701-9.109 12.371v.138c4.848.834 8.889 2.852 8.889 11.119v8.545h-16.304v-6.043c0-5.281-1.616-7.021-6.686-7.021h-25.63v13.064h-16.304z" },
  { d: "m146.312 51.444h16.302v-50.311h-16.302z" },
  { d: "m174.513 1.133h55.523v12.092h-39.217v9.384h37.382v11.672h-37.382v17.162h-16.306z" },
  { d: "m255.453 28.998c0 7.297 1.616 10.078 9.327 10.078h20.857c7.715 0 9.327-2.781 9.327-10.078v-5.418c0-6.254-1.612-10.076-10.204-10.076h-19.098c-8.593 0-10.209 3.822-10.209 10.076zm-16.742-10.213c0-14.732 8.738-18.205 23.428-18.205h26.143c14.689 0 23.429 3.473 23.429 18.205v15.008c0 14.734-8.74 18.207-23.429 18.207h-26.143c-14.69 0-23.428-3.473-23.428-18.207z" },
  { d: "m337.866 25.873h26.951c4.41 0 6.021-1.668 6.021-5.283v-1.664c0-4.451-2.35-5.283-7.488-5.283h-25.484zm-16.307-24.74h49.206c12.563 0 15.938 5.906 15.938 14.941v3.196c0 6.744-1.615 10.701-9.105 12.371v.138c4.847.834 8.888 2.852 8.888 11.119v8.545h-16.308v-6.043c0-5.281-1.615-7.021-6.682-7.021h-25.63v13.064h-16.307z" },
  { d: "m397.728 1.133h16.299v18.486h7.643l20.56-18.486h22.182l-28.789 24.601 32.168 25.709h-23.063l-23.501-19.314h-7.2v19.314h-16.299z" },
];
function Logo({ negative = true, format }) {
  const h = format === "1.91:1" ? 28 : format === "9:16" ? 48 : 36;
  const fill = negative ? "#FFFFFF" : "#2C3A42";
  return (
    <svg height={h} width={h * (495 / 52)} viewBox="0 0 495 52" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0 }} aria-label="Trifork">
      <g fillRule="evenodd">
        {TRIFORK_PATHS.map((p, i) => <path key={i} d={p.d} fill={fill} transform={p.t} />)}
        <path d="m478.816 51.444h15.422v-14.176h-15.422z" fill="#FF6600" />
      </g>
    </svg>
  );
}

export function SocialPost(props) {
  const {
    format = "1:1",
    layout = "bottom",
    bg = "ink",
    photoSrc, photoPos = "center",
    eyebrow, eyebrowColor,
    title = "", titleSizeOverride, titleColor,
    body,
    meta = [],
    metaRows,
    positions,
    metaColor,
    showLogo = false,
    variant = "default",
    statNumber, statUnit, statLabel, statColor = "orange",
    quoteAttribution,
    speakers,
    scale = 1,
  } = props;

  const dims = FORMATS[format] || FORMATS["1:1"];
  const pad = paddingFor(format);

  const isDarkText = bg === "light";
  const surfaceText = isDarkText ? "var(--tf-ink-950)" : "var(--tf-white)";
  const _eyebrowColor = eyebrowColor || (bg === "photo" ? "white" : "orange");
  const _titleColor   = titleColor   || surfaceText;
  const _metaColor    = metaColor    || surfaceText;
  const onDark = bg !== "light";

  let bgStyle = {};
  if (bg === "ink")   bgStyle = { background: "var(--tf-ink-950)" };
  if (bg === "light") bgStyle = { background: "var(--tf-blue-100)" };
  if (bg === "photo") bgStyle = { background: "#0e1518" };

  const scaleWrap = {
    width: dims.w * scale, height: dims.h * scale, overflow: "hidden", display: "block",
    background: bg === "light" ? "var(--tf-blue-100)" : "var(--tf-ink-950)",
  };
  const inner = { transform: `scale(${scale})`, transformOrigin: "0 0", width: dims.w, height: dims.h };
  const wrapperStyle = { position: "relative", width: dims.w, height: dims.h, overflow: "hidden", ...bgStyle, fontFamily: "var(--tf-font)" };

  const common = {
    format, layout, pad, eyebrow, eyebrowColor: _eyebrowColor,
    title, titleColor: _titleColor, titleSizeOverride,
    body, meta, metaRows, positions, metaColor: _metaColor,
    showLogo, bg, onDark,
  };

  let content;
  if (variant === "quote") {
    content = <QuoteContent {...common} attribution={quoteAttribution} />;
  } else if (variant === "stat") {
    content = <StatContent {...common} number={statNumber} unit={statUnit} label={statLabel} statColor={statColor} />;
  } else if (variant === "event") {
    content = <EventContent {...common} speakers={speakers} />;
  } else {
    content = <DefaultContent {...common} variant={variant} />;
  }

  return (
    <div style={scaleWrap}>
      <div style={inner}>
        <div style={wrapperStyle}>
          {bg === "photo" && photoSrc && (
            <>
              <img src={photoSrc} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: photoPos, display: "block" }} alt="" />
              <div style={{ position: "absolute", inset: 0, background: PHOTO_OVERLAY }} />
            </>
          )}
          {content}
        </div>
      </div>
    </div>
  );
}

function Frame({ pad, top, middle, bottom, justify }) {
  return (
    <div style={{
      position: "absolute", inset: 0, padding: pad, boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>
      <div>{top}</div>
      {/* paddingBottom is deliberately larger than paddingTop: when layout
          is "bottom" the content hugs this edge, so this is the effective
          gap between the title block and the meta/logo row beneath it and
          needs real breathing room, not just a slack value. */}
      <div style={{
        flex: 1, minHeight: 0, display: "flex", flexDirection: "column",
        justifyContent: justify, paddingTop: 32, paddingBottom: 40,
      }}>{middle}</div>
      <div>{bottom}</div>
    </div>
  );
}

const JUSTIFY = { top: "flex-start", center: "center", bottom: "flex-end" };

// Never render more than one logo on a card, and place it in the corner
// that balances the title's weight: when the title is anchored to the
// bottom (where it visually crowds the meta/logo row already), put the
// logo up top instead; for "top" or "center" anchors (where the title sits
// away from the bottom edge), keep the logo in its usual bottom corner.
function logoSlots(showLogo, layout) {
  const logoAtTop = showLogo && layout === "bottom";
  return { logoAtTop, logoAtBottom: showLogo && !logoAtTop };
}

function DefaultContent({ format, layout, pad, eyebrow, eyebrowColor, title, titleColor, titleSizeOverride, body, meta, metaRows, positions, metaColor, showLogo, onDark }) {
  const ebSize = format === "1.91:1" ? 16 : format === "9:16" ? 32 : 24;
  const { logoAtTop, logoAtBottom } = logoSlots(showLogo, layout);
  const top = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <Eyebrow color={eyebrowColor} size={ebSize}>{eyebrow}</Eyebrow>
      {logoAtTop ? <Logo negative={onDark} format={format} /> : null}
    </div>
  );

  const middle = (
    <div style={{ display: "flex", flexDirection: "column", gap: format === "1.91:1" ? 24 : 40 }}>
      <Title text={title} format={format} color={titleColor} sizeOverride={titleSizeOverride} />
      <Body text={body} format={format} color={metaColor} />
      {positions && positions.length ? <PositionsList items={positions} color={metaColor} format={format} /> : null}
    </div>
  );

  const bottom = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {metaRows && metaRows.length ? <MetaRows rows={metaRows} color={metaColor} format={format} /> : null}
        <Meta items={meta} color={metaColor} format={format} />
      </div>
      {logoAtBottom ? <Logo negative={onDark} format={format} /> : null}
    </div>
  );

  return <Frame pad={pad} justify={JUSTIFY[layout] || "flex-end"} top={top} middle={middle} bottom={bottom} />;
}

function EventContent({ format, layout, pad, eyebrow, eyebrowColor, title, titleColor, titleSizeOverride, meta, metaRows, metaColor, showLogo, onDark, speakers }) {
  const ebSize = format === "1.91:1" ? 16 : format === "9:16" ? 32 : 24;
  const hasSpeakers = speakers && speakers.filter(s => s && s.name).length > 0;
  const isLandscape = format === "1.91:1";
  const { logoAtTop, logoAtBottom } = logoSlots(showLogo, layout);

  const top = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <Eyebrow color={eyebrowColor} size={ebSize}>{eyebrow}</Eyebrow>
      {logoAtTop ? <Logo negative={onDark} format={format} /> : null}
    </div>
  );

  if (hasSpeakers && isLandscape) {
    return (
      <div style={{ position: "absolute", inset: 0, padding: pad, boxSizing: "border-box", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
          <Eyebrow color={eyebrowColor} size={ebSize}>{eyebrow}</Eyebrow>
          <Title text={title} format={format} color={titleColor} sizeOverride={titleSizeOverride} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <MetaRows rows={metaRows} color={metaColor} format={format} />
            <Meta items={meta} color={metaColor} format={format} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
          <SpeakerList speakers={speakers} format={format} color={metaColor} onDark={onDark} compact />
          {showLogo ? <div style={{ marginTop: 8 }}><Logo negative={onDark} format={format} /></div> : null}
        </div>
      </div>
    );
  }

  const middle = (
    <div style={{ display: "flex", flexDirection: "column", gap: format === "1.91:1" ? 24 : 40 }}>
      <Title text={title} format={format} color={titleColor} sizeOverride={titleSizeOverride} />
      {hasSpeakers ? <SpeakerList speakers={speakers} format={format} color={metaColor} onDark={onDark} /> : null}
    </div>
  );

  const bottom = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <MetaRows rows={metaRows} color={metaColor} format={format} />
        <Meta items={meta} color={metaColor} format={format} />
      </div>
      {logoAtBottom ? <Logo negative={onDark} format={format} /> : null}
    </div>
  );

  return <Frame pad={pad} justify={JUSTIFY[layout] || "flex-end"} top={top} middle={middle} bottom={bottom} />;
}

function SpeakerList({ speakers, format, color, onDark, compact }) {
  const list = speakers.filter(s => s && s.name);
  if (!list.length) return null;
  const av = format === "1.91:1" ? 92 : format === "9:16" ? 150 : 120;
  const nameFs = format === "1.91:1" ? 28 : format === "9:16" ? 46 : 36;
  const roleFs = format === "1.91:1" ? 20 : format === "9:16" ? 32 : 26;
  const coFs   = format === "1.91:1" ? 15 : format === "9:16" ? 26 : 20;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: compact ? 28 : 32 }}>
      {list.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Avatar name={s.name} src={s.avatar} size={av} onDark={onDark} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {s.company ? <div style={{ font: `500 ${coFs}px/1 var(--tf-font)`, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tf-orange-500)", marginBottom: 4 }}>{s.company}</div> : null}
            <div style={{ font: `500 ${nameFs}px/1.15 var(--tf-font)`, color: color }}>{s.name}</div>
            {s.role ? <div style={{ font: `400 ${roleFs}px/1.2 var(--tf-font)`, color: color, opacity: 0.72 }}>{s.role}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function QuoteContent({ format, layout, pad, eyebrow, eyebrowColor, title, titleColor, titleSizeOverride, attribution, metaColor, showLogo, onDark }) {
  const ebSize = format === "1.91:1" ? 16 : format === "9:16" ? 32 : 24;
  const qSize = pickTitleSize(title, format, titleSizeOverride);
  const markSize = qSize * 1.5;
  const { logoAtTop, logoAtBottom } = logoSlots(showLogo, layout);
  const hasAttribution = attribution && (attribution.name || attribution.role);

  const top = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <Eyebrow color={eyebrowColor} size={ebSize}>{eyebrow}</Eyebrow>
      {logoAtTop ? <Logo negative={onDark} format={format} /> : null}
    </div>
  );

  const middle = (
    <div>
      <div style={{ font: `400 ${markSize}px/0.62 var(--tf-font)`, color: "var(--tf-orange-500)", marginBottom: -markSize * 0.16, marginLeft: -markSize * 0.04, letterSpacing: "-0.04em" }}>“</div>
      <div style={{ font: `400 ${qSize}px/1.12 var(--tf-font)`, color: titleColor, letterSpacing: "-0.02em", textWrap: "pretty" }}>{title}</div>
    </div>
  );

  const attributionBlock = hasAttribution ? (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      {attribution.avatar ? <Avatar name={attribution.name} src={attribution.avatar} size={format === "1.91:1" ? 64 : 96} onDark={onDark} /> : null}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {attribution.name ? <div style={{ font: `500 ${format === "1.91:1" ? 26 : 34}px/1.2 var(--tf-font)`, color: metaColor }}>{attribution.name}</div> : null}
        {attribution.role ? <div style={{ font: `400 ${format === "1.91:1" ? 20 : 26}px/1.25 var(--tf-font)`, color: metaColor, opacity: 0.72 }}>{attribution.role}</div> : null}
      </div>
    </div>
  ) : null;

  // Attribution and the balanced-bottom logo share this row (space-between
  // pushes the logo to the far right even when there's no attribution).
  const bottom = hasAttribution || logoAtBottom ? (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
      {attributionBlock || <div />}
      {logoAtBottom ? <Logo negative={onDark} format={format} /> : null}
    </div>
  ) : null;

  return <Frame pad={pad} justify={JUSTIFY[layout] || "center"} top={top} middle={middle} bottom={bottom} />;
}

function statColorValue(statColor, bg) {
  const dark = bg !== "light";
  if (statColor === "blue")    return dark ? "#A1C4D7" : "#3C4C54";
  if (statColor === "neutral") return dark ? "#FFFFFF" : "#2C3A42";
  return "#FF6600";
}
function StatContent({ format, layout, pad, eyebrow, eyebrowColor, number, unit, label, statColor, titleColor, metaColor, meta, showLogo, bg, onDark }) {
  const ebSize = format === "1.91:1" ? 16 : format === "9:16" ? 32 : 24;
  const numSize = format === "1.91:1" ? 230 : format === "9:16" ? 460 : format === "4:5" ? 420 : 380;
  const unitSize = numSize * 0.30;
  const labelSize = format === "1.91:1" ? 30 : format === "9:16" ? 56 : 42;
  const figColor = statColorValue(statColor, bg);
  const { logoAtTop, logoAtBottom } = logoSlots(showLogo, layout);

  const top = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <Eyebrow color={eyebrowColor} size={ebSize}>{eyebrow}</Eyebrow>
      {logoAtTop ? <Logo negative={onDark} format={format} /> : null}
    </div>
  );

  const middle = (
    <div style={{ display: "flex", flexDirection: "column", gap: format === "1.91:1" ? 16 : 28 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
        <span style={{ font: `400 ${numSize}px/0.92 var(--tf-font)`, color: figColor, letterSpacing: "-0.04em" }}>{number}</span>
        {unit ? <span style={{ font: `400 ${unitSize}px/1 var(--tf-font)`, color: figColor, letterSpacing: "-0.02em" }}>{unit}</span> : null}
      </div>
      {label ? <div style={{ font: `400 ${labelSize}px/1.25 var(--tf-font)`, color: titleColor, maxWidth: "88%", textWrap: "pretty" }}>{label}</div> : null}
    </div>
  );

  const bottom = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
      <Meta items={meta} color={metaColor} format={format} />
      {logoAtBottom ? <Logo negative={onDark} format={format} /> : null}
    </div>
  );

  return <Frame pad={pad} justify={JUSTIFY[layout] || "center"} top={top} middle={middle} bottom={bottom} />;
}
