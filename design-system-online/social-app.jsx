/* =============================================================
   Trifork — Social Posts: gallery, anatomy, showcases  (v2)
   ============================================================= */

function PostFrame({ scale, children, dims }) {
  return (
    <div style={{ width: dims.w * scale, height: dims.h * scale, boxShadow: '0 8px 24px rgba(20,30,38,0.10), 0 1px 0 rgba(20,30,38,0.04)', borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
      {children}
    </div>
  );
}

function GalleryCard({ variant }) {
  const dims = FORMATS[variant.props.format || '1:1'];
  const scale = dims.h > dims.w ? 220 / dims.h : 240 / dims.w;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 24, background: 'var(--tf-bg-soft)', borderRadius: 24, alignItems: 'center' }}>
      <PostFrame scale={scale} dims={dims}><SocialPost {...variant.props} scale={scale} /></PostFrame>
      <div style={{ font: '500 13px/1.3 var(--tf-font)', color: 'var(--tf-text-body)', textAlign: 'center' }}>{variant.label}</div>
    </div>
  );
}

function TemplateRow({ preset }) {
  return (
    <div style={{ padding: '48px 0', borderTop: '1px solid var(--tf-rule)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 48, alignItems: 'start' }}>
        <div>
          <div className="tf-label-spaced" style={{ marginBottom: 12 }}>{preset.type.toUpperCase()}</div>
          <h3 style={{ font: '500 28px/1.2 var(--tf-font)', margin: '0 0 12px', letterSpacing: '-0.01em' }}>{preset.name}</h3>
          <p style={{ font: '400 15px/1.55 var(--tf-font)', color: 'var(--tf-text-body)', margin: 0, maxWidth: 280 }}>{preset.blurb}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {preset.variants.map((v, i) => <GalleryCard key={i} variant={v} />)}
        </div>
      </div>
    </div>
  );
}

function Gallery() { return <div>{TEMPLATE_PRESETS.map((p, i) => <TemplateRow key={i} preset={p} />)}</div>; }

/* ---------- Carousel example ---------- */
function CarouselShowcase() {
  const ex = CAROUSEL_EXAMPLE;
  const dims = FORMATS[ex.format];
  const scale = 200 / dims.w;
  return (
    <div>
      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 12 }}>
        {ex.pages.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', flexShrink: 0 }}>
            <PostFrame scale={scale} dims={dims}><SocialPost {...p} format={ex.format} scale={scale} /></PostFrame>
            <div style={{ font: '500 12px/1 var(--tf-font)', color: 'var(--tf-text-muted)' }}>{String(i + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Anatomy ---------- */
function AnatomyDiagram() {
  const props = { format: '1:1', layout: 'bottom', bg: 'ink', eyebrow: 'UPCOMING PRESENTATION', title: 'Q4 and Annual Report 2025', meta: ['27 Feb 2026', '11:00–12:00 (CEST)'], variant: 'news', showLogo: true };
  const SCALE = 0.42;
  const dims = FORMATS['1:1'];
  const dotStyle = { position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: 'var(--tf-orange-500)', border: '2px solid var(--tf-white)', boxShadow: '0 0 0 1px var(--tf-orange-500)' };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
      <div style={{ position: 'relative', width: dims.w * SCALE, height: dims.h * SCALE }}>
        <PostFrame scale={SCALE} dims={dims}><SocialPost {...props} scale={SCALE} /></PostFrame>
        <div style={{ ...dotStyle, top: 84, left: 84 }} />
        <div style={{ ...dotStyle, top: 84, right: 60 }} />
        <div style={{ ...dotStyle, bottom: 150, left: 84 }} />
        <div style={{ ...dotStyle, bottom: 90, left: 84 }} />
      </div>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <AnatomyItem n="01" name="Eyebrow label" desc="ALL CAPS, Poppins Medium, tracking 0.16em. Orange on dark / light; white over photo. Names the post type — never a sentence." />
        <AnatomyItem n="02" name="Logo (optional)" desc="Off by default — the LinkedIn avatar already brands the post. Add the wordmark only when a post may travel out of feed context. Placement is automatic and never doubled: it sits in the corner opposite the title's anchor for visual balance." />
        <AnatomyItem n="03" name="Title" desc="Sentence case, Poppins Regular. Tracking −0.02em. Auto-sizes to text length within tier steps. Anchored top, center or bottom." />
        <AnatomyItem n="04" name="Metadata" desc="Date, time, location, roles, key/value rows. Poppins Medium, smaller scale. Always pinned to the bottom edge." />
      </ol>
    </div>
  );
}
function AnatomyItem({ n, name, desc }) {
  return (
    <li style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 12 }}>
      <div style={{ font: '500 13px/1 var(--tf-font)', color: 'var(--tf-orange-500)', paddingTop: 4 }}>{n}</div>
      <div>
        <div style={{ font: '500 18px/1.3 var(--tf-font)', color: 'var(--tf-text)', marginBottom: 6 }}>{name}</div>
        <div style={{ font: '400 15px/1.55 var(--tf-font)', color: 'var(--tf-text-body)' }}>{desc}</div>
      </div>
    </li>
  );
}

/* ---------- Layouts (top / center / bottom) ---------- */
function LayoutsShowcase() {
  const SCALE = 0.22;
  const dims = FORMATS['1:1'];
  const base = { format: '1:1', bg: 'ink', variant: 'news', eyebrow: 'EYEBROW', title: 'A single clear title.', meta: ['Metadata'] };
  const items = [
    { layout: 'top', name: 'Top', desc: 'Title sits directly under the eyebrow. Best for longer headlines and list-led pages where reading starts at the top.' },
    { layout: 'center', name: 'Center', desc: 'Title centred in the canvas. The calm, editorial choice — quotes and single statements.' },
    { layout: 'bottom', name: 'Bottom', desc: 'Title flush to the bottom, metadata beneath it. Leaves the upper canvas open for a photo to breathe.' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {items.map((it) => (
        <div key={it.layout} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <PostFrame scale={SCALE} dims={dims}><SocialPost {...base} layout={it.layout} scale={SCALE} /></PostFrame>
          <div>
            <div style={{ font: '500 18px/1.3 var(--tf-font)', color: 'var(--tf-text)', marginBottom: 4 }}>{it.name}</div>
            <div style={{ font: '400 14px/1.55 var(--tf-font)', color: 'var(--tf-text-body)', maxWidth: 300 }}>{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Formats ---------- */
function FormatsShowcase() {
  const SCALE = { '1:1': 0.20, '4:5': 0.18, '1.91:1': 0.26, '9:16': 0.14 };
  const sample = {
    '1:1':    { eyebrow: 'JOIN US', title: 'AI Enablement: Boost your business.', meta: ['20 Feb', 'Aarhus'], variant: 'event' },
    '4:5':    { eyebrow: 'JOIN US', title: 'AI Enablement: Boost your business.', meta: ['20 Feb', 'Aarhus'], variant: 'event' },
    '1.91:1': { eyebrow: 'INSIGHTS', title: 'Notes from the rail platform team.', meta: ['Engineering', '8 min'], variant: 'case' },
    '9:16':   { eyebrow: 'UPCOMING', title: 'Q4 and Annual Report 2025.', meta: ['27 Feb 2026', '11:00 CEST'], variant: 'news' },
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, alignItems: 'end' }}>
      {Object.entries(FORMATS).map(([key, f]) => {
        const scale = SCALE[key];
        const props = { ...sample[key], format: key, layout: 'bottom', bg: 'ink' };
        return (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', padding: 24, borderRadius: 24, background: 'var(--tf-bg-soft)' }}>
            <PostFrame scale={scale} dims={f}><SocialPost {...props} scale={scale} /></PostFrame>
            <div style={{ textAlign: 'center' }}>
              <div style={{ font: '500 16px/1.3 var(--tf-font)', color: 'var(--tf-text)' }}>{f.label}</div>
              <div style={{ font: '400 13px/1.4 var(--tf-font)', color: 'var(--tf-text-body)', marginTop: 4 }}>{f.ratio} · {f.w}×{f.h}</div>
              <div style={{ font: '400 13px/1.5 var(--tf-font)', color: 'var(--tf-text-body)', marginTop: 8, maxWidth: 200 }}>{f.use}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Backgrounds ---------- */
function BackgroundsShowcase() {
  const SCALE = 0.22;
  const dims = FORMATS['1:1'];
  const items = [
    { label: 'Ink (dark)', token: '--tf-ink-950', desc: 'Default for announcements and copy-led posts. Orange eyebrow over dark reads as confident, not loud.', props: { format: '1:1', layout: 'bottom', bg: 'ink', variant: 'news', eyebrow: 'PRESS RELEASE', title: 'Trifork acquires Aalto Code.', meta: ['Copenhagen', '04 June 2026'] } },
    { label: 'Light (blue-100)', token: '--tf-blue-100', desc: 'Calm, editorial. Title and metadata in ink-950. Use when the message is reflective rather than urgent.', props: { format: '1:1', layout: 'center', bg: 'light', variant: 'quote', eyebrow: 'IN THEIR WORDS', title: 'Three patterns we keep returning to.', quoteAttribution: { name: 'H. Bøgh', role: 'Director of Engineering' } } },
    { label: 'Photo + flat overlay', token: 'ink-950 · flat tint', desc: 'Real photography under a flat ink-950 overlay (no gradients). White eyebrow, white title.', props: { format: '1:1', layout: 'bottom', bg: 'photo', variant: 'case', photoSrc: 'assets/imagery/trifork-vision-pro.png', eyebrow: 'PRESS RELEASE', eyebrowColor: 'white', title: 'Trifork partners with Loft Dynamics.', meta: ['26 May 2026'] } },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <PostFrame scale={SCALE} dims={dims}><SocialPost {...it.props} scale={SCALE} /></PostFrame>
          <div>
            <div style={{ font: '500 18px/1.3 var(--tf-font)', color: 'var(--tf-text)', marginBottom: 4 }}>{it.label}</div>
            <code style={{ font: '400 12px/1.4 ui-monospace, Menlo, monospace', color: 'var(--tf-text-body)' }}>{it.token}</code>
            <div style={{ font: '400 14px/1.55 var(--tf-font)', color: 'var(--tf-text-body)', marginTop: 8, maxWidth: 320 }}>{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Title sizing ---------- */
function TitleSizingDemo() {
  const SCALE = 0.22;
  const dims = FORMATS['1:1'];
  const cases = [
    { len: 'Short', text: 'Calm software.', sizeTier: 'Tier 1 · 156px' },
    { len: 'Medium', text: 'Trifork partners with Loft Dynamics.', sizeTier: 'Tier 3 · 104px' },
    { len: 'Long', text: 'Trifork partners with Loft Dynamics to scale qualified pilot training on Apple Vision Pro across European carriers.', sizeTier: 'Tier 6 · 60px' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {cases.map((c, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <PostFrame scale={SCALE} dims={dims}><SocialPost format="1:1" layout="bottom" bg="ink" variant="news" eyebrow="EXAMPLE" title={c.text} scale={SCALE} /></PostFrame>
          <div>
            <div style={{ font: '500 14px/1.3 var(--tf-font)', color: 'var(--tf-text)' }}>{c.len} · {c.text.length} chars</div>
            <div style={{ font: '400 13px/1.4 var(--tf-font)', color: 'var(--tf-text-body)', marginTop: 4 }}>{c.sizeTier}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Mount ---------- */
function mount(id, El) { const n = document.getElementById(id); if (n) ReactDOM.createRoot(n).render(<El />); }
mount('mount-playground',  Playground);
mount('mount-anatomy',     AnatomyDiagram);
mount('mount-layouts',     LayoutsShowcase);
mount('mount-formats',     FormatsShowcase);
mount('mount-backgrounds', BackgroundsShowcase);
mount('mount-sizing',      TitleSizingDemo);
mount('mount-gallery',     Gallery);
mount('mount-carousel',    CarouselShowcase);

Object.assign(window, { Gallery, CarouselShowcase, AnatomyDiagram, LayoutsShowcase, FormatsShowcase, BackgroundsShowcase, TitleSizingDemo });
