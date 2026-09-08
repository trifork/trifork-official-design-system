/* @ds-bundle: {"format":3,"namespace":"OFFICIALTriforkDesignSystemDONTEDIT_019dd3","components":[],"sourceHashes":{"social-app.jsx":"a9863f42d523","social-playground.jsx":"203d8ea3735b","social-presets.jsx":"42366234deca","social-templates.jsx":"3a3079a62bdd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OFFICIALTriforkDesignSystemDONTEDIT_019dd3 = window.OFFICIALTriforkDesignSystemDONTEDIT_019dd3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// social-app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* =============================================================
   Trifork — Social Posts: gallery, anatomy, showcases  (v2)
   ============================================================= */

function PostFrame({
  scale,
  children,
  dims
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: dims.w * scale,
      height: dims.h * scale,
      boxShadow: '0 8px 24px rgba(20,30,38,0.10), 0 1px 0 rgba(20,30,38,0.04)',
      borderRadius: 6,
      overflow: 'hidden',
      flexShrink: 0
    }
  }, children);
}
function GalleryCard({
  variant
}) {
  const dims = FORMATS[variant.props.format || '1:1'];
  const scale = dims.h > dims.w ? 220 / dims.h : 240 / dims.w;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 24,
      background: 'var(--tf-bg-soft)',
      borderRadius: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PostFrame, {
    scale: scale,
    dims: dims
  }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, variant.props, {
    scale: scale
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1.3 var(--tf-font)',
      color: 'var(--tf-text-body)',
      textAlign: 'center'
    }
  }, variant.label));
}
function TemplateRow({
  preset
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0',
      borderTop: '1px solid var(--tf-rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tf-label-spaced",
    style: {
      marginBottom: 12
    }
  }, preset.type.toUpperCase()), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '500 28px/1.2 var(--tf-font)',
      margin: '0 0 12px',
      letterSpacing: '-0.01em'
    }
  }, preset.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.55 var(--tf-font)',
      color: 'var(--tf-text-body)',
      margin: 0,
      maxWidth: 280
    }
  }, preset.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, preset.variants.map((v, i) => /*#__PURE__*/React.createElement(GalleryCard, {
    key: i,
    variant: v
  })))));
}
function Gallery() {
  return /*#__PURE__*/React.createElement("div", null, TEMPLATE_PRESETS.map((p, i) => /*#__PURE__*/React.createElement(TemplateRow, {
    key: i,
    preset: p
  })));
}

/* ---------- Carousel example ---------- */
function CarouselShowcase() {
  const ex = CAROUSEL_EXAMPLE;
  const dims = FORMATS[ex.format];
  const scale = 200 / dims.w;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      overflowX: 'auto',
      paddingBottom: 12
    }
  }, ex.pages.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PostFrame, {
    scale: scale,
    dims: dims
  }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, p, {
    format: ex.format,
    scale: scale
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--tf-font)',
      color: 'var(--tf-text-muted)'
    }
  }, String(i + 1).padStart(2, '0'))))));
}

/* ---------- Anatomy ---------- */
function AnatomyDiagram() {
  const props = {
    format: '1:1',
    layout: 'bottom',
    bg: 'ink',
    eyebrow: 'UPCOMING PRESENTATION',
    title: 'Q4 and Annual Report 2025',
    meta: ['27 Feb 2026', '11:00–12:00 (CEST)'],
    variant: 'news',
    showLogo: true
  };
  const SCALE = 0.42;
  const dims = FORMATS['1:1'];
  const dotStyle = {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: 'var(--tf-orange-500)',
    border: '2px solid var(--tf-white)',
    boxShadow: '0 0 0 1px var(--tf-orange-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: dims.w * SCALE,
      height: dims.h * SCALE
    }
  }, /*#__PURE__*/React.createElement(PostFrame, {
    scale: SCALE,
    dims: dims
  }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, props, {
    scale: SCALE
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...dotStyle,
      top: 84,
      left: 84
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...dotStyle,
      top: 84,
      right: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...dotStyle,
      bottom: 150,
      left: 84
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...dotStyle,
      bottom: 90,
      left: 84
    }
  })), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(AnatomyItem, {
    n: "01",
    name: "Eyebrow label",
    desc: "ALL CAPS, Poppins Medium, tracking 0.16em. Orange on dark / light; white over photo. Names the post type \u2014 never a sentence."
  }), /*#__PURE__*/React.createElement(AnatomyItem, {
    n: "02",
    name: "Logo (optional)",
    desc: "Off by default \u2014 the LinkedIn avatar already brands the post. Add the wordmark only when a post may travel out of feed context."
  }), /*#__PURE__*/React.createElement(AnatomyItem, {
    n: "03",
    name: "Title",
    desc: "Sentence case, Poppins Regular. Tracking \u22120.02em. Auto-sizes to text length within tier steps. Anchored top, center or bottom."
  }), /*#__PURE__*/React.createElement(AnatomyItem, {
    n: "04",
    name: "Metadata",
    desc: "Date, time, location, roles, key/value rows. Poppins Medium, smaller scale. Always pinned to the bottom edge."
  })));
}
function AnatomyItem({
  n,
  name,
  desc
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1 var(--tf-font)',
      color: 'var(--tf-orange-500)',
      paddingTop: 4
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px/1.3 var(--tf-font)',
      color: 'var(--tf-text)',
      marginBottom: 6
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.55 var(--tf-font)',
      color: 'var(--tf-text-body)'
    }
  }, desc)));
}

/* ---------- Layouts (top / center / bottom) ---------- */
function LayoutsShowcase() {
  const SCALE = 0.22;
  const dims = FORMATS['1:1'];
  const base = {
    format: '1:1',
    bg: 'ink',
    variant: 'news',
    eyebrow: 'EYEBROW',
    title: 'A single clear title.',
    meta: ['Metadata']
  };
  const items = [{
    layout: 'top',
    name: 'Top',
    desc: 'Title sits directly under the eyebrow. Best for longer headlines and list-led pages where reading starts at the top.'
  }, {
    layout: 'center',
    name: 'Center',
    desc: 'Title centred in the canvas. The calm, editorial choice — quotes and single statements.'
  }, {
    layout: 'bottom',
    name: 'Bottom',
    desc: 'Title flush to the bottom, metadata beneath it. Leaves the upper canvas open for a photo to breathe.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.layout,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(PostFrame, {
    scale: SCALE,
    dims: dims
  }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, base, {
    layout: it.layout,
    scale: SCALE
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px/1.3 var(--tf-font)',
      color: 'var(--tf-text)',
      marginBottom: 4
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.55 var(--tf-font)',
      color: 'var(--tf-text-body)',
      maxWidth: 300
    }
  }, it.desc)))));
}

/* ---------- Formats ---------- */
function FormatsShowcase() {
  const SCALE = {
    '1:1': 0.20,
    '4:5': 0.18,
    '1.91:1': 0.26,
    '9:16': 0.14
  };
  const sample = {
    '1:1': {
      eyebrow: 'JOIN US',
      title: 'AI Enablement: Boost your business.',
      meta: ['20 Feb', 'Aarhus'],
      variant: 'event'
    },
    '4:5': {
      eyebrow: 'JOIN US',
      title: 'AI Enablement: Boost your business.',
      meta: ['20 Feb', 'Aarhus'],
      variant: 'event'
    },
    '1.91:1': {
      eyebrow: 'INSIGHTS',
      title: 'Notes from the rail platform team.',
      meta: ['Engineering', '8 min'],
      variant: 'case'
    },
    '9:16': {
      eyebrow: 'UPCOMING',
      title: 'Q4 and Annual Report 2025.',
      meta: ['27 Feb 2026', '11:00 CEST'],
      variant: 'news'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24,
      alignItems: 'end'
    }
  }, Object.entries(FORMATS).map(([key, f]) => {
    const scale = SCALE[key];
    const props = {
      ...sample[key],
      format: key,
      layout: 'bottom',
      bg: 'ink'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'center',
        padding: 24,
        borderRadius: 24,
        background: 'var(--tf-bg-soft)'
      }
    }, /*#__PURE__*/React.createElement(PostFrame, {
      scale: scale,
      dims: f
    }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, props, {
      scale: scale
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 16px/1.3 var(--tf-font)',
        color: 'var(--tf-text)'
      }
    }, f.label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/1.4 var(--tf-font)',
        color: 'var(--tf-text-body)',
        marginTop: 4
      }
    }, f.ratio, " \xB7 ", f.w, "\xD7", f.h), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/1.5 var(--tf-font)',
        color: 'var(--tf-text-body)',
        marginTop: 8,
        maxWidth: 200
      }
    }, f.use)));
  }));
}

/* ---------- Backgrounds ---------- */
function BackgroundsShowcase() {
  const SCALE = 0.22;
  const dims = FORMATS['1:1'];
  const items = [{
    label: 'Ink (dark)',
    token: '--tf-ink-950',
    desc: 'Default for announcements and copy-led posts. Orange eyebrow over dark reads as confident, not loud.',
    props: {
      format: '1:1',
      layout: 'bottom',
      bg: 'ink',
      variant: 'news',
      eyebrow: 'PRESS RELEASE',
      title: 'Trifork acquires Aalto Code.',
      meta: ['Copenhagen', '04 June 2026']
    }
  }, {
    label: 'Light (blue-100)',
    token: '--tf-blue-100',
    desc: 'Calm, editorial. Title and metadata in ink-950. Use when the message is reflective rather than urgent.',
    props: {
      format: '1:1',
      layout: 'center',
      bg: 'light',
      variant: 'quote',
      eyebrow: 'IN THEIR WORDS',
      title: 'Three patterns we keep returning to.',
      quoteAttribution: {
        name: 'H. Bøgh',
        role: 'Director of Engineering'
      }
    }
  }, {
    label: 'Photo + flat overlay',
    token: 'ink-950 · flat tint',
    desc: 'Real photography under a flat ink-950 overlay (no gradients). White eyebrow, white title.',
    props: {
      format: '1:1',
      layout: 'bottom',
      bg: 'photo',
      variant: 'case',
      photoSrc: 'assets/imagery/trifork-vision-pro.png',
      eyebrow: 'PRESS RELEASE',
      eyebrowColor: 'white',
      title: 'Trifork partners with Loft Dynamics.',
      meta: ['26 May 2026']
    }
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(PostFrame, {
    scale: SCALE,
    dims: dims
  }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, it.props, {
    scale: SCALE
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px/1.3 var(--tf-font)',
      color: 'var(--tf-text)',
      marginBottom: 4
    }
  }, it.label), /*#__PURE__*/React.createElement("code", {
    style: {
      font: '400 12px/1.4 ui-monospace, Menlo, monospace',
      color: 'var(--tf-text-body)'
    }
  }, it.token), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.55 var(--tf-font)',
      color: 'var(--tf-text-body)',
      marginTop: 8,
      maxWidth: 320
    }
  }, it.desc)))));
}

/* ---------- Title sizing ---------- */
function TitleSizingDemo() {
  const SCALE = 0.22;
  const dims = FORMATS['1:1'];
  const cases = [{
    len: 'Short',
    text: 'Calm software.',
    sizeTier: 'Tier 1 · 156px'
  }, {
    len: 'Medium',
    text: 'Trifork partners with Loft Dynamics.',
    sizeTier: 'Tier 3 · 104px'
  }, {
    len: 'Long',
    text: 'Trifork partners with Loft Dynamics to scale qualified pilot training on Apple Vision Pro across European carriers.',
    sizeTier: 'Tier 6 · 60px'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(PostFrame, {
    scale: SCALE,
    dims: dims
  }, /*#__PURE__*/React.createElement(SocialPost, {
    format: "1:1",
    layout: "bottom",
    bg: "ink",
    variant: "news",
    eyebrow: "EXAMPLE",
    title: c.text,
    scale: SCALE
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.3 var(--tf-font)',
      color: 'var(--tf-text)'
    }
  }, c.len, " \xB7 ", c.text.length, " chars"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.4 var(--tf-font)',
      color: 'var(--tf-text-body)',
      marginTop: 4
    }
  }, c.sizeTier)))));
}

/* ---------- Mount ---------- */
function mount(id, El) {
  const n = document.getElementById(id);
  if (n) ReactDOM.createRoot(n).render(/*#__PURE__*/React.createElement(El, null));
}
mount('mount-playground', Playground);
mount('mount-anatomy', AnatomyDiagram);
mount('mount-layouts', LayoutsShowcase);
mount('mount-formats', FormatsShowcase);
mount('mount-backgrounds', BackgroundsShowcase);
mount('mount-sizing', TitleSizingDemo);
mount('mount-gallery', Gallery);
mount('mount-carousel', CarouselShowcase);
Object.assign(window, {
  Gallery,
  CarouselShowcase,
  AnatomyDiagram,
  LayoutsShowcase,
  FormatsShowcase,
  BackgroundsShowcase,
  TitleSizingDemo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "social-app.jsx", error: String((e && e.message) || e) }); }

// social-playground.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* =============================================================
   Trifork — Social Post playground (carousel + export)  (v2)
   ============================================================= */

/* ---------- helpers ---------- */
function uid() {
  return Math.random().toString(36).slice(2, 9);
}
function fileToDataURL(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}
const BLANK = {
  event: {
    variant: 'event',
    layout: 'bottom',
    bg: 'photo',
    photoSrc: 'assets/imagery/trifork-stock-1.jpg',
    photoPos: '60% 35%',
    eyebrow: 'JOIN US',
    eyebrowColor: 'auto',
    title: 'AI Enablement: Boost your business with artificial intelligence',
    body: '',
    meta: ['20 February, Aarhus', '15:30–17:30'],
    metaRows: [],
    positions: [],
    speakers: [{
      name: 'Sune Lundorff',
      role: 'Head of Department',
      company: 'OK'
    }],
    showLogo: false
  },
  quote: {
    variant: 'quote',
    layout: 'center',
    bg: 'light',
    photoSrc: '',
    photoPos: 'center',
    eyebrow: 'THE USER WHISPERER',
    eyebrowColor: 'auto',
    title: 'Keeping a relentless focus on users, workflows and real-life needs throughout delivery.',
    meta: [],
    metaRows: [],
    positions: [],
    quoteName: 'Amanda Pedersen',
    quoteRole: 'Senior Product Designer, Trifork',
    quoteAvatar: '',
    showLogo: false
  },
  stat: {
    variant: 'stat',
    layout: 'center',
    bg: 'ink',
    photoSrc: '',
    photoPos: 'center',
    eyebrow: 'TRIFORK IN 2025',
    eyebrowColor: 'auto',
    statNumber: '+11',
    statUnit: '%',
    statLabel: 'Revenue growth, year on year.',
    statColor: 'orange',
    meta: ['Annual report 2025'],
    metaRows: [],
    positions: [],
    showLogo: false
  },
  job: {
    variant: 'job',
    layout: 'top',
    bg: 'ink',
    photoSrc: '',
    photoPos: 'center',
    eyebrow: 'JOIN US',
    eyebrowColor: 'auto',
    title: 'We are hiring',
    body: '',
    meta: [],
    metaRows: [],
    positions: ['Senior Software Engineer, AI-augmented development', 'Senior Backend Developer, Digital Health', 'Senior Digital Health Architect (HL7 FHIR)'],
    showLogo: false
  },
  news: {
    variant: 'news',
    layout: 'bottom',
    bg: 'photo',
    photoSrc: 'assets/imagery/trifork-aarhus-1.jpg',
    photoPos: 'center',
    eyebrow: '5 MAY 2026',
    eyebrowColor: 'auto',
    title: 'Q1 Report 2026',
    body: '',
    meta: [],
    metaRows: [{
      label: 'Report',
      value: '07:00 (CEST)'
    }, {
      label: 'Webcast',
      value: '11:00–12:00 (CEST)'
    }],
    positions: [],
    showLogo: false
  },
  case: {
    variant: 'case',
    layout: 'bottom',
    bg: 'photo',
    photoSrc: 'assets/imagery/trifork-vision-pro.png',
    photoPos: 'center',
    eyebrow: 'CASE · AVIATION',
    eyebrowColor: 'auto',
    title: 'Cutting recurrent-training cost by 38% for a European carrier.',
    body: '',
    meta: ['Read the case'],
    metaRows: [],
    positions: [],
    showLogo: false
  }
};
function blankPage(type) {
  return {
    id: uid(),
    ...JSON.parse(JSON.stringify(BLANK[type] || BLANK.event))
  };
}
function pageToProps(page, format) {
  return {
    format,
    layout: page.layout,
    bg: page.bg,
    photoSrc: page.bg === 'photo' ? page.photoSrc : undefined,
    photoPos: page.photoPos,
    eyebrow: page.eyebrow,
    eyebrowColor: page.eyebrowColor === 'auto' ? undefined : page.eyebrowColor,
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
    quoteAttribution: page.variant === 'quote' ? {
      name: page.quoteName,
      role: page.quoteRole,
      avatar: page.quoteAvatar || undefined
    } : undefined,
    speakers: page.variant === 'event' ? page.speakers : undefined,
    showLogo: page.showLogo
  };
}

/* ---------- offscreen render + capture ---------- */
async function renderAndCapture(props, dims) {
  if (typeof htmlToImage === 'undefined') throw new Error('html-to-image not loaded');
  const holder = document.createElement('div');
  holder.style.cssText = `position:fixed;left:-100000px;top:0;width:${dims.w}px;height:${dims.h}px;z-index:-1;`;
  document.body.appendChild(holder);
  const root = ReactDOM.createRoot(holder);
  await new Promise(res => {
    root.render(/*#__PURE__*/React.createElement(SocialPost, _extends({}, props, {
      scale: 1
    })));
    requestAnimationFrame(() => requestAnimationFrame(res));
  });
  await Promise.all([...holder.querySelectorAll('img')].map(img => img.complete && img.naturalWidth ? Promise.resolve() : new Promise(r => {
    img.onload = img.onerror = r;
  })));
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (e) {}
  }
  await new Promise(r => setTimeout(r, 160));
  const node = holder.firstChild;
  const blob = await htmlToImage.toBlob(node, {
    width: dims.w,
    height: dims.h,
    pixelRatio: 1,
    cacheBust: true,
    backgroundColor: props.bg === 'light' ? '#D5E5ED' : '#2C3A42'
  });
  root.unmount();
  holder.remove();
  return blob;
}
function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 1000);
}

/* =============================================================
   Playground
   ============================================================= */
function Playground() {
  const [format, setFormat] = React.useState('1:1');
  const [pages, setPages] = React.useState(() => [blankPage('event')]);
  const [sel, setSel] = React.useState(0);
  const [busy, setBusy] = React.useState('');
  const dims = FORMATS[format];
  const page = pages[Math.min(sel, pages.length - 1)];
  const updatePage = patch => setPages(ps => ps.map((p, i) => i === sel ? {
    ...p,
    ...patch
  } : p));
  const setField = k => e => {
    const v = e && e.target ? e.target.type === 'checkbox' ? e.target.checked : e.target.value : e;
    updatePage({
      [k]: v
    });
  };
  const addPage = () => {
    const np = {
      ...JSON.parse(JSON.stringify(page)),
      id: uid()
    };
    setPages(ps => {
      const n = [...ps];
      n.splice(sel + 1, 0, np);
      return n;
    });
    setSel(sel + 1);
  };
  const delPage = () => {
    if (pages.length <= 1) return;
    setPages(ps => ps.filter((_, i) => i !== sel));
    setSel(Math.max(0, sel - 1));
  };
  const move = dir => {
    const j = sel + dir;
    if (j < 0 || j >= pages.length) return;
    setPages(ps => {
      const n = [...ps];
      const [it] = n.splice(sel, 1);
      n.splice(j, 0, it);
      return n;
    });
    setSel(j);
  };
  const changeType = e => {
    const t = e.target.value;
    setPages(ps => ps.map((p, i) => i === sel ? {
      id: p.id,
      ...JSON.parse(JSON.stringify(BLANK[t]))
    } : p));
  };

  /* live preview scaling */
  const stageRef = React.useRef(null);
  const [scale, setScale] = React.useState(0.45);
  React.useEffect(() => {
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
  }, [format]);
  const downloadOne = async () => {
    try {
      setBusy('Rendering…');
      const blob = await renderAndCapture(pageToProps(page, format), dims);
      downloadBlob(blob, `trifork-${page.variant}-${sel + 1}.png`);
      setBusy('');
    } catch (err) {
      setBusy('');
      alert('Could not generate image: ' + err.message);
    }
  };
  const downloadAll = async () => {
    try {
      setBusy('Rendering 1/' + pages.length + '…');
      if (pages.length === 1) {
        const blob = await renderAndCapture(pageToProps(pages[0], format), dims);
        downloadBlob(blob, `trifork-${pages[0].variant}.png`);
        setBusy('');
        return;
      }
      if (typeof JSZip === 'undefined') throw new Error('JSZip not loaded');
      const zip = new JSZip();
      for (let i = 0; i < pages.length; i++) {
        setBusy('Rendering ' + (i + 1) + '/' + pages.length + '…');
        const blob = await renderAndCapture(pageToProps(pages[i], format), dims);
        zip.file(`page-${String(i + 1).padStart(2, '0')}.png`, blob);
      }
      setBusy('Zipping…');
      const out = await zip.generateAsync({
        type: 'blob'
      });
      downloadBlob(out, 'trifork-carousel.png.zip'.replace('.png', ''));
      setBusy('');
    } catch (err) {
      setBusy('');
      alert('Could not generate images: ' + err.message);
    }
  };
  const props = pageToProps(page, format);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(PgGroup, {
    label: "Format",
    inline: true
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: Object.entries(FORMATS).map(([k, f]) => ({
      value: k,
      label: f.ratio
    })),
    value: format,
    onChange: setFormat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, busy ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--tf-font)',
      color: 'var(--tf-text-body)'
    }
  }, busy) : null, /*#__PURE__*/React.createElement("button", {
    onClick: downloadOne,
    disabled: !!busy,
    style: btnGhost
  }, "Download page"), /*#__PURE__*/React.createElement("button", {
    onClick: downloadAll,
    disabled: !!busy,
    style: btnSolid
  }, pages.length > 1 ? `Download all (${pages.length})` : 'Download'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 360px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      background: 'var(--tf-bg-soft)',
      borderRadius: 24,
      padding: 32,
      height: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative'
    }
  }, pages.length > 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel(Math.max(0, sel - 1)),
    disabled: sel === 0,
    style: {
      ...navBtn,
      left: 16
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel(Math.min(pages.length - 1, sel + 1)),
    disabled: sel === pages.length - 1,
    style: {
      ...navBtn,
      right: 16
    }
  }, "\u203A")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      boxShadow: '0 10px 30px rgba(20,30,38,0.12)',
      borderRadius: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, props, {
    scale: scale
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, pages.map((p, i) => {
    const tScale = 76 / FORMATS[format].w;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => setSel(i),
      title: `Page ${i + 1}`,
      style: {
        padding: 0,
        border: i === sel ? '2px solid var(--tf-orange-500)' : '2px solid transparent',
        borderRadius: 8,
        background: 'none',
        cursor: 'pointer',
        lineHeight: 0,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 6,
        overflow: 'hidden',
        opacity: i === sel ? 1 : 0.6
      }
    }, /*#__PURE__*/React.createElement(SocialPost, _extends({}, pageToProps(p, format), {
      scale: tScale
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 2,
        left: 4,
        font: '500 10px/1 var(--tf-font)',
        color: 'var(--tf-white)',
        textShadow: '0 1px 2px rgba(0,0,0,0.6)'
      }
    }, i + 1));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addPage,
    title: "Add page",
    style: addBtn
  }, "\uFF0B")), pages.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => move(-1),
    disabled: sel === 0,
    style: miniBtn
  }, "\u2190 Move left"), /*#__PURE__*/React.createElement("button", {
    onClick: () => move(1),
    disabled: sel === pages.length - 1,
    style: miniBtn
  }, "Move right \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: delPage,
    style: {
      ...miniBtn,
      color: 'var(--tf-orange-700)'
    }
  }, "Delete page")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PgGroup, {
    label: `Page ${sel + 1} of ${pages.length} · type`
  }, /*#__PURE__*/React.createElement("select", {
    value: page.variant,
    onChange: changeType,
    style: inputStyle
  }, CARD_TYPES.map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.variant
  }, t.label)))), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Layout (title anchor)"
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'top',
      label: 'Top'
    }, {
      value: 'center',
      label: 'Center'
    }, {
      value: 'bottom',
      label: 'Bottom'
    }],
    value: page.layout,
    onChange: v => updatePage({
      layout: v
    })
  })), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Background"
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'ink',
      label: 'Ink'
    }, {
      value: 'light',
      label: 'Light'
    }, {
      value: 'photo',
      label: 'Photo'
    }],
    value: page.bg,
    onChange: v => updatePage({
      bg: v
    })
  })), page.bg === 'photo' ? /*#__PURE__*/React.createElement(PgGroup, {
    label: "Photo"
  }, /*#__PURE__*/React.createElement(PhotoPicker, {
    value: page.photoSrc,
    onChange: v => updatePage({
      photoSrc: v
    })
  })) : null, /*#__PURE__*/React.createElement(PgGroup, {
    label: "Eyebrow"
  }, /*#__PURE__*/React.createElement("input", {
    value: page.eyebrow,
    onChange: setField('eyebrow'),
    style: inputStyle
  }), page.bg === 'photo' ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    small: true,
    options: [{
      value: 'auto',
      label: 'Auto'
    }, {
      value: 'orange',
      label: 'Orange'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'ink',
      label: 'Ink'
    }],
    value: page.eyebrowColor,
    onChange: v => updatePage({
      eyebrowColor: v
    })
  }))), page.variant === 'quote' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PgGroup, {
    label: "Quote"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: page.title,
    onChange: setField('title'),
    rows: 3,
    style: {
      ...inputStyle,
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Attribution \u2014 name"
  }, /*#__PURE__*/React.createElement("input", {
    value: page.quoteName,
    onChange: setField('quoteName'),
    style: inputStyle
  })), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Attribution \u2014 role"
  }, /*#__PURE__*/React.createElement("input", {
    value: page.quoteRole,
    onChange: setField('quoteRole'),
    style: inputStyle
  })), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Attribution \u2014 photo (optional)"
  }, /*#__PURE__*/React.createElement(AvatarUpload, {
    value: page.quoteAvatar,
    onChange: v => updatePage({
      quoteAvatar: v
    })
  }))) : page.variant === 'stat' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PgGroup, {
    label: "Number"
  }, /*#__PURE__*/React.createElement("input", {
    value: page.statNumber,
    onChange: setField('statNumber'),
    style: inputStyle
  })), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Unit (optional)"
  }, /*#__PURE__*/React.createElement("input", {
    value: page.statUnit,
    onChange: setField('statUnit'),
    style: inputStyle
  })), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Figure colour"
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'orange',
      label: 'Orange'
    }, {
      value: 'blue',
      label: 'Blue'
    }, {
      value: 'neutral',
      label: 'Neutral'
    }],
    value: page.statColor || 'orange',
    onChange: v => updatePage({
      statColor: v
    })
  })), /*#__PURE__*/React.createElement(PgGroup, {
    label: "Label"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: page.statLabel,
    onChange: setField('statLabel'),
    rows: 2,
    style: {
      ...inputStyle,
      resize: 'vertical'
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PgGroup, {
    label: page.variant === 'job' ? 'Hook title' : 'Title'
  }, /*#__PURE__*/React.createElement("textarea", {
    value: page.title,
    onChange: setField('title'),
    rows: 2,
    style: {
      ...inputStyle,
      resize: 'vertical'
    }
  })), page.variant === 'job' || page.variant === 'case' || page.variant === 'default' ? /*#__PURE__*/React.createElement(PgGroup, {
    label: "Body (optional)"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: page.body || '',
    onChange: setField('body'),
    rows: 3,
    style: {
      ...inputStyle,
      resize: 'vertical'
    }
  })) : null), page.variant === 'job' ? /*#__PURE__*/React.createElement(PgGroup, {
    label: "Open positions"
  }, /*#__PURE__*/React.createElement(ListEditor, {
    items: page.positions,
    onChange: v => updatePage({
      positions: v
    }),
    placeholder: "Role title"
  })) : null, page.variant === 'event' ? /*#__PURE__*/React.createElement(PgGroup, {
    label: "Speakers (optional)"
  }, /*#__PURE__*/React.createElement(SpeakerEditor, {
    items: page.speakers || [],
    onChange: v => updatePage({
      speakers: v
    })
  })) : null, page.variant === 'news' || page.variant === 'event' ? /*#__PURE__*/React.createElement(PgGroup, {
    label: "Detail rows (label \xB7 value)"
  }, /*#__PURE__*/React.createElement(RowEditor, {
    rows: page.metaRows || [],
    onChange: v => updatePage({
      metaRows: v
    })
  })) : null, page.variant !== 'quote' ? /*#__PURE__*/React.createElement(PgGroup, {
    label: "Meta lines"
  }, /*#__PURE__*/React.createElement("input", {
    value: page.meta && page.meta[0] || '',
    onChange: e => updatePage({
      meta: [e.target.value, page.meta && page.meta[1] || '']
    }),
    style: inputStyle,
    placeholder: "e.g. 20 February, Aarhus"
  }), /*#__PURE__*/React.createElement("input", {
    value: page.meta && page.meta[1] || '',
    onChange: e => updatePage({
      meta: [page.meta && page.meta[0] || '', e.target.value]
    }),
    style: {
      ...inputStyle,
      marginTop: 8
    },
    placeholder: "e.g. 15:30\u201317:30"
  })) : null, /*#__PURE__*/React.createElement(PgGroup, {
    label: ""
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '400 14px/1.4 var(--tf-font)',
      color: 'var(--tf-text)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: page.showLogo,
    onChange: setField('showLogo')
  }), " Show Trifork logo")))));
}

/* ---------- list editors ---------- */
function ListEditor({
  items,
  onChange,
  placeholder
}) {
  const set = (i, v) => onChange(items.map((it, j) => j === i ? v : it));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: it,
    onChange: e => set(i, e.target.value),
    style: inputStyle,
    placeholder: placeholder
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(items.filter((_, j) => j !== i)),
    style: xBtn
  }, "\xD7"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange([...items, '']),
    style: miniBtn
  }, "\uFF0B Add"));
}
function RowEditor({
  rows,
  onChange
}) {
  const set = (i, k, v) => onChange(rows.map((r, j) => j === i ? {
    ...r,
    [k]: v
  } : r));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: r.label,
    onChange: e => set(i, 'label', e.target.value),
    style: {
      ...inputStyle,
      flex: '0 0 110px'
    },
    placeholder: "Label"
  }), /*#__PURE__*/React.createElement("input", {
    value: r.value,
    onChange: e => set(i, 'value', e.target.value),
    style: inputStyle,
    placeholder: "Value"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(rows.filter((_, j) => j !== i)),
    style: xBtn
  }, "\xD7"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange([...rows, {
      label: '',
      value: ''
    }]),
    style: miniBtn
  }, "\uFF0B Add row"));
}
function SpeakerEditor({
  items,
  onChange
}) {
  const set = (i, k, v) => onChange(items.map((s, j) => j === i ? {
    ...s,
    [k]: v
  } : s));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 10,
      background: 'var(--tf-ink-50)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: s.name,
    onChange: e => set(i, 'name', e.target.value),
    style: inputStyle,
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(items.filter((_, j) => j !== i)),
    style: xBtn
  }, "\xD7")), /*#__PURE__*/React.createElement("input", {
    value: s.role,
    onChange: e => set(i, 'role', e.target.value),
    style: inputStyle,
    placeholder: "Role"
  }), /*#__PURE__*/React.createElement("input", {
    value: s.company,
    onChange: e => set(i, 'company', e.target.value),
    style: inputStyle,
    placeholder: "Company (orange label)"
  }), /*#__PURE__*/React.createElement(AvatarUpload, {
    value: s.avatar,
    onChange: v => set(i, 'avatar', v)
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange([...items, {
      name: '',
      role: '',
      company: ''
    }]),
    style: miniBtn
  }, "\uFF0B Add speaker"));
}

/* ---------- photo / avatar uploaders ---------- */
function PhotoPicker({
  value,
  onChange
}) {
  const isUploaded = value && value.startsWith('data:');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: isUploaded ? '__uploaded' : value || '',
    onChange: e => {
      if (e.target.value !== '__uploaded') onChange(e.target.value);
    },
    style: inputStyle
  }, isUploaded ? /*#__PURE__*/React.createElement("option", {
    value: "__uploaded"
  }, "Uploaded image") : null, PHOTOS.filter(p => p.src).map(p => /*#__PURE__*/React.createElement("option", {
    key: p.src,
    value: p.src
  }, p.label))), /*#__PURE__*/React.createElement("label", {
    style: {
      ...miniBtn,
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    }
  }, "Upload", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: async e => {
      const f = e.target.files[0];
      if (f) onChange(await fileToDataURL(f));
      e.target.value = '';
    }
  })));
}
function AvatarUpload({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, value ? /*#__PURE__*/React.createElement("img", {
    src: value,
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      objectFit: 'cover',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      flexShrink: 0,
      border: '1px dashed var(--tf-rule-strong)'
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      ...miniBtn,
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    }
  }, value ? 'Replace photo' : 'Upload photo', /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: async e => {
      const f = e.target.files[0];
      if (f) onChange(await fileToDataURL(f));
      e.target.value = '';
    }
  })), value ? /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(''),
    style: {
      ...xBtn,
      width: 36
    }
  }, "\xD7") : null);
}

/* ---------- small controls ---------- */
const inputStyle = {
  width: '100%',
  font: '400 14px/1.4 var(--tf-font)',
  padding: '10px 12px',
  border: '1px solid var(--tf-rule-strong)',
  borderRadius: 8,
  background: 'var(--tf-white)',
  color: 'var(--tf-text)',
  boxSizing: 'border-box',
  outline: 'none'
};
const btnSolid = {
  font: '500 14px/1 var(--tf-font)',
  padding: '12px 20px',
  borderRadius: 999,
  border: 'none',
  background: 'var(--tf-ink-950)',
  color: 'var(--tf-white)',
  cursor: 'pointer'
};
const btnGhost = {
  font: '500 14px/1 var(--tf-font)',
  padding: '12px 20px',
  borderRadius: 999,
  border: '1px solid var(--tf-rule-strong)',
  background: 'var(--tf-white)',
  color: 'var(--tf-text)',
  cursor: 'pointer'
};
const miniBtn = {
  font: '500 13px/1 var(--tf-font)',
  padding: '9px 14px',
  borderRadius: 999,
  border: '1px solid var(--tf-rule-strong)',
  background: 'var(--tf-white)',
  color: 'var(--tf-text-body)',
  cursor: 'pointer'
};
const xBtn = {
  font: '500 16px/1 var(--tf-font)',
  width: 38,
  flexShrink: 0,
  borderRadius: 8,
  border: '1px solid var(--tf-rule-strong)',
  background: 'var(--tf-white)',
  color: 'var(--tf-text-body)',
  cursor: 'pointer'
};
const navBtn = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 44,
  height: 44,
  borderRadius: '50%',
  border: 'none',
  background: 'var(--tf-white)',
  boxShadow: '0 2px 10px rgba(20,30,38,0.18)',
  font: '400 22px/1 var(--tf-font)',
  color: 'var(--tf-ink-950)',
  cursor: 'pointer',
  zIndex: 2
};
const addBtn = {
  width: 48,
  height: 48,
  borderRadius: 8,
  border: '1.5px dashed var(--tf-rule-strong)',
  background: 'var(--tf-white)',
  font: '400 22px/1 var(--tf-font)',
  color: 'var(--tf-text-body)',
  cursor: 'pointer',
  flexShrink: 0
};
function PgGroup({
  label,
  children,
  inline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: inline ? {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    } : {}
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--tf-font)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--tf-text-muted)',
      marginBottom: inline ? 0 : 8
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: inline ? {} : {}
  }, children));
}
function Segmented({
  options,
  value,
  onChange,
  small
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      borderRadius: 999,
      padding: 3,
      background: 'var(--tf-ink-50)',
      gap: 2,
      flexWrap: 'wrap'
    }
  }, options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      onClick: () => onChange(o.value),
      style: {
        font: `500 ${small ? 12 : 13}px/1 var(--tf-font)`,
        padding: small ? '6px 11px' : '8px 14px',
        borderRadius: 999,
        border: 'none',
        background: active ? 'var(--tf-ink-950)' : 'transparent',
        color: active ? 'var(--tf-white)' : 'var(--tf-text-body)',
        cursor: 'pointer',
        transition: 'all 160ms ease-out'
      }
    }, o.label);
  }));
}
Object.assign(window, {
  Playground
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "social-playground.jsx", error: String((e && e.message) || e) }); }

// social-presets.jsx
try { (() => {
/* =============================================================
   Trifork — Social Post presets & sample data  (v2)
   ============================================================= */

const PHOTOS = [{
  src: '',
  label: 'None'
}, {
  src: 'assets/imagery/trifork-aarhus-1.jpg',
  label: 'Aarhus — building'
}, {
  src: 'assets/imagery/trifork-aarhus-2.jpg',
  label: 'Aarhus — office'
}, {
  src: 'assets/imagery/trifork-aarhus-3.jpg',
  label: 'Aarhus — interior'
}, {
  src: 'assets/imagery/trifork-aarhus-4.jpg',
  label: 'Aarhus — exterior'
}, {
  src: 'assets/imagery/trifork-people-1.jpg',
  label: 'People'
}, {
  src: 'assets/imagery/trifork-stock-1.jpg',
  label: 'Speaker'
}, {
  src: 'assets/imagery/trifork-vision-pro.png',
  label: 'Vision Pro'
}];

/* ---------- The six card types ---------- */
const CARD_TYPES = [{
  id: 'event',
  label: 'Event',
  variant: 'event',
  blurb: 'Date and time lead. Eyebrow signals the action ("JOIN US"). Speakers optional — list them inline.'
}, {
  id: 'quote',
  label: 'Quote',
  variant: 'quote',
  blurb: 'Short, attributed. The open-quote glyph is the only ornamental orange permitted. Avatar optional.'
}, {
  id: 'stat',
  label: 'Single stat',
  variant: 'stat',
  blurb: 'One number, one label. Orange is reserved for the figure; nothing else competes with it.'
}, {
  id: 'job',
  label: 'Job opening',
  variant: 'job',
  blurb: 'A hook title plus the open roles. Pairs naturally with a "why work with us" body page in a carousel.'
}, {
  id: 'news',
  label: 'News',
  variant: 'news',
  blurb: 'One announcement. Key/value rows carry the practical detail (report time, webcast, location).'
}, {
  id: 'case',
  label: 'Case story',
  variant: 'case',
  blurb: 'Customer context up front. Usually photo-backed; the eyebrow names the sector or client.'
}];

/* ---------- Gallery presets: 3 variations per type ---------- */
const TEMPLATE_PRESETS = [{
  type: 'event',
  name: 'Event',
  blurb: CARD_TYPES[0].blurb,
  variants: [{
    label: 'Bottom · photo',
    props: {
      format: '1:1',
      layout: 'bottom',
      bg: 'photo',
      variant: 'event',
      photoSrc: 'assets/imagery/trifork-stock-1.jpg',
      photoPos: '60% 35%',
      eyebrow: 'JOIN US',
      eyebrowColor: 'white',
      title: 'AI Enablement: Boost your business with artificial intelligence',
      meta: ['20 February, Aarhus', '15:30–17:30']
    }
  }, {
    label: 'Center · with speakers',
    props: {
      format: '1:1',
      layout: 'center',
      bg: 'ink',
      variant: 'event',
      eyebrow: 'JOIN US',
      title: 'Enhanced customer experiences, powered by AI',
      meta: ['30 April 2026, Aarhus'],
      speakers: [{
        name: 'Jens Peter Hedegård',
        role: 'Vice President',
        company: 'Trifork'
      }, {
        name: 'Sune Louis Lundorff',
        role: 'Department Manager',
        company: 'OK'
      }]
    }
  }, {
    label: 'Landscape · speakers',
    props: {
      format: '1.91:1',
      layout: 'center',
      bg: 'light',
      variant: 'event',
      eyebrow: 'WEBINAR',
      title: 'Enhanced customer experiences, powered by AI',
      metaRows: [{
        label: 'Date',
        value: '30 April 2026'
      }, {
        label: 'Where',
        value: 'Sankt Knuds Torv 9, Aarhus'
      }],
      speakers: [{
        name: 'Per Balsløw Østergaard',
        role: 'Sr. Project Manager',
        company: 'Krifa'
      }, {
        name: 'Jens Peter Hedegård',
        role: 'Vice President',
        company: 'Trifork'
      }]
    }
  }]
}, {
  type: 'quote',
  name: 'Quote',
  blurb: CARD_TYPES[1].blurb,
  variants: [{
    label: 'Center · light',
    props: {
      format: '1:1',
      layout: 'center',
      bg: 'light',
      variant: 'quote',
      eyebrow: 'THE USER WHISPERER',
      title: 'Keeping a relentless focus on users, workflows and real-life needs throughout delivery.',
      quoteAttribution: {
        name: 'Amanda Pedersen',
        role: 'Senior Product Designer, Trifork'
      }
    }
  }, {
    label: 'Center · ink',
    props: {
      format: '1:1',
      layout: 'center',
      bg: 'ink',
      variant: 'quote',
      eyebrow: 'IN THEIR WORDS',
      title: 'They tell us where the system will fail in three years, not just where it works today.',
      quoteAttribution: {
        name: 'Maja Vestergaard',
        role: 'CTO, Nordic Air'
      }
    }
  }, {
    label: 'Bottom · photo',
    props: {
      format: '4:5',
      layout: 'bottom',
      bg: 'photo',
      variant: 'quote',
      photoSrc: 'assets/imagery/trifork-people-1.jpg',
      photoPos: 'center 25%',
      eyebrow: 'FROM THE FLOOR',
      title: 'The best architecture review is the one your junior can read on the train home.',
      quoteAttribution: {
        name: 'Sara K. Lindqvist',
        role: 'Principal Engineer'
      }
    }
  }]
}, {
  type: 'stat',
  name: 'Single stat',
  blurb: CARD_TYPES[2].blurb,
  variants: [{
    label: 'Orange · ink',
    props: {
      format: '1:1',
      layout: 'center',
      bg: 'ink',
      variant: 'stat',
      statColor: 'orange',
      eyebrow: 'TRIFORK IN 2025',
      statNumber: '+11',
      statUnit: '%',
      statLabel: 'Revenue growth, year on year.',
      meta: ['Annual report 2025']
    }
  }, {
    label: 'Blue · light',
    props: {
      format: '1:1',
      layout: 'center',
      bg: 'light',
      variant: 'stat',
      statColor: 'blue',
      eyebrow: 'BCG, 2024',
      statNumber: '81',
      statUnit: '%',
      statLabel: 'of business leaders see significant potential in generative AI.'
    }
  }, {
    label: 'Neutral · photo',
    props: {
      format: '4:5',
      layout: 'bottom',
      bg: 'photo',
      variant: 'stat',
      statColor: 'neutral',
      photoSrc: 'assets/imagery/trifork-aarhus-4.jpg',
      eyebrow: 'WE ARE',
      statNumber: '1,247',
      statLabel: 'Engineers, designers and consultants across 11 countries.',
      meta: ['May 2026']
    }
  }]
}, {
  type: 'job',
  name: 'Job opening',
  blurb: CARD_TYPES[3].blurb,
  variants: [{
    label: 'Top · ink',
    props: {
      format: '1:1',
      layout: 'top',
      bg: 'ink',
      variant: 'job',
      eyebrow: 'JOIN US',
      title: 'We are hiring',
      positions: ['Senior Software Engineer, AI-augmented development', 'Senior Backend Developer, Digital Health', 'Senior Digital Health Architect (HL7 FHIR)']
    }
  }, {
    label: 'Bottom · photo',
    props: {
      format: '4:5',
      layout: 'bottom',
      bg: 'photo',
      variant: 'job',
      photoSrc: 'assets/imagery/trifork-people-1.jpg',
      photoPos: 'center 20%',
      eyebrow: 'JOIN US',
      eyebrowColor: 'white',
      title: 'We’re growing in Digital Health'
    }
  }, {
    label: 'Center · light',
    props: {
      format: '1:1',
      layout: 'center',
      bg: 'light',
      variant: 'job',
      eyebrow: 'WHY WORK WITH US?',
      body: 'You’ll work on meaningful challenges in a complex healthcare domain, alongside strong technical experts who value quality and deep understanding, in a culture driven by trust, curiosity, and collaboration.'
    }
  }]
}, {
  type: 'news',
  name: 'News',
  blurb: CARD_TYPES[4].blurb,
  variants: [{
    label: 'Bottom · photo',
    props: {
      format: '1:1',
      layout: 'bottom',
      bg: 'photo',
      variant: 'news',
      photoSrc: 'assets/imagery/trifork-aarhus-1.jpg',
      eyebrow: '5 MAY 2026',
      eyebrowColor: 'white',
      title: 'Q1 Report 2026',
      metaRows: [{
        label: 'Report',
        value: '07:00 (CEST)'
      }, {
        label: 'Webcast',
        value: '11:00–12:00 (CEST)'
      }]
    }
  }, {
    label: 'Bottom · ink',
    props: {
      format: '1:1',
      layout: 'bottom',
      bg: 'ink',
      variant: 'news',
      eyebrow: 'PRESS RELEASE',
      title: 'Trifork acquires Helsinki studio Aalto Code.',
      meta: ['Copenhagen', '04 June 2026']
    }
  }, {
    label: 'Top · light',
    props: {
      format: '1:1',
      layout: 'top',
      bg: 'light',
      variant: 'news',
      eyebrow: 'ANNOUNCEMENT',
      title: 'Half-year results — record bookings in healthcare and aviation.',
      meta: ['Q2 2026']
    }
  }]
}, {
  type: 'case',
  name: 'Case story',
  blurb: CARD_TYPES[5].blurb,
  variants: [{
    label: 'Bottom · photo',
    props: {
      format: '1:1',
      layout: 'bottom',
      bg: 'photo',
      variant: 'case',
      photoSrc: 'assets/imagery/trifork-vision-pro.png',
      eyebrow: 'CASE · AVIATION',
      eyebrowColor: 'white',
      title: 'Cutting recurrent-training cost by 38% for a European carrier.',
      meta: ['Read the case']
    }
  }, {
    label: 'Top · light',
    props: {
      format: '1:1',
      layout: 'top',
      bg: 'light',
      variant: 'case',
      eyebrow: 'CASE · HEALTHCARE',
      title: 'A digital pathway for stroke patients, deployed across 14 hospitals.',
      body: 'Built with Region Midtjylland over 18 months.',
      meta: ['Region Midtjylland']
    }
  }, {
    label: 'Center · ink',
    props: {
      format: '4:5',
      layout: 'center',
      bg: 'ink',
      variant: 'case',
      eyebrow: 'CASE · RAIL',
      title: 'Training the next generation of rail employees.',
      body: 'How Apple Vision Pro reshapes immersive training in railway operations.'
    }
  }]
}];

/* ---------- Carousel example: a job-opening swipe sequence ---------- */
const CAROUSEL_EXAMPLE = {
  name: 'Job opening carousel',
  blurb: 'Five square pages designed to be swiped left-to-right in a single LinkedIn post.',
  format: '1:1',
  pages: [{
    format: '1:1',
    layout: 'bottom',
    bg: 'photo',
    variant: 'job',
    photoSrc: 'assets/imagery/trifork-people-1.jpg',
    photoPos: 'center 20%',
    eyebrow: 'JOIN US',
    eyebrowColor: 'white',
    title: 'We’re growing in Digital Health'
  }, {
    format: '1:1',
    layout: 'center',
    bg: 'light',
    variant: 'job',
    eyebrow: 'WHY WORK WITH US?',
    body: 'You’ll work on meaningful challenges in a complex healthcare domain, alongside strong technical experts who value quality and deep understanding.'
  }, {
    format: '1:1',
    layout: 'top',
    bg: 'ink',
    variant: 'job',
    eyebrow: 'OPEN ROLES',
    title: 'We are hiring',
    positions: ['Senior Software Engineer, AI-augmented development', 'Senior Backend Developer, Digital Health', 'Digital Health Delivery Lead']
  }, {
    format: '1:1',
    layout: 'bottom',
    bg: 'photo',
    variant: 'case',
    photoSrc: 'assets/imagery/trifork-aarhus-3.jpg',
    eyebrow: 'LIFE AT TRIFORK',
    eyebrowColor: 'white',
    title: 'Built on craft, shipped with care.'
  }, {
    format: '1:1',
    layout: 'center',
    bg: 'light',
    variant: 'default',
    eyebrow: 'INTERESTED?',
    title: 'Let’s have a conversation.',
    showLogo: true
  }]
};
Object.assign(window, {
  PHOTOS,
  CARD_TYPES,
  TEMPLATE_PRESETS,
  CAROUSEL_EXAMPLE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "social-presets.jsx", error: String((e && e.message) || e) }); }

// social-templates.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* =============================================================
   Trifork — Social Post components  (v2)
   -------------------------------------------------------------
   Layouts:  top | center | bottom   (vertical anchor of the title block)
   Types:    event | quote | stat | job | news | case  (+ generic 'default')
   Eyebrow is always pinned top-left. Meta/attribution sits at the bottom.
   Internal layout is built at true pixel size; a wrapper scales via
   CSS transform so the same component renders crisply at any display size.
   ============================================================= */

/* ---------- Format sizing ---------- */
const FORMATS = {
  '1:1': {
    w: 1200,
    h: 1200,
    label: 'Square',
    ratio: '1 : 1',
    use: 'Feed default. Works in carousels and on mobile.'
  },
  '4:5': {
    w: 1200,
    h: 1500,
    label: 'Portrait',
    ratio: '4 : 5',
    use: 'Maximum vertical real-estate in the feed.'
  },
  '1.91:1': {
    w: 1200,
    h: 627,
    label: 'Landscape',
    ratio: '1.91 : 1',
    use: 'Link previews, article shares, event headers.'
  },
  '9:16': {
    w: 1080,
    h: 1920,
    label: 'Story',
    ratio: '9 : 16',
    use: 'Vertical mobile stories and reels.'
  }
};

/* ---------- Title sizing tiers (auto-fit by character count) ---------- */
const TITLE_SIZES = {
  '1:1': [156, 128, 104, 88, 72, 60, 52],
  '4:5': [156, 132, 108, 92, 76, 64, 54],
  '1.91:1': [96, 80, 68, 56, 48, 42, 38],
  '9:16': [184, 156, 128, 104, 84, 72, 62]
};
const TITLE_BREAKPOINTS = [18, 36, 56, 80, 110, 160]; // char counts

function pickTitleSize(text, format, override) {
  if (override != null) return override;
  const sizes = TITLE_SIZES[format] || TITLE_SIZES['1:1'];
  const len = (text || '').length;
  for (let i = 0; i < TITLE_BREAKPOINTS.length; i++) {
    if (len <= TITLE_BREAKPOINTS[i]) return sizes[i];
  }
  return sizes[sizes.length - 1];
}
function paddingFor(format) {
  if (format === '1.91:1') return 64;
  if (format === '9:16') return 96;
  return 96; // 1:1 and 4:5
}

/* Flat ink-950 overlay — brand rule, no gradients. Tuned so the photo
   still reads while white text stays legible. */
const PHOTO_OVERLAY = 'rgba(44, 58, 66, 0.66)';

/* ---------- Eyebrow ---------- */
function Eyebrow({
  children,
  color = 'orange',
  size
}) {
  if (!children) return null;
  const c = color === 'white' ? '#FFFFFF' : color === 'ink' ? 'var(--tf-ink-950)' : 'var(--tf-orange-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 ${size || 24}px/1.1 var(--tf-font)`,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: c
    }
  }, children);
}

/* ---------- Title ---------- */
function Title({
  text,
  format,
  color,
  sizeOverride,
  weight = 400,
  align = 'left'
}) {
  if (!text) return null;
  const size = pickTitleSize(text, format, sizeOverride);
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `${weight} ${size}px/1.08 var(--tf-font)`,
      letterSpacing: '-0.02em',
      color: color || 'var(--tf-white)',
      textWrap: 'pretty',
      textAlign: align
    }
  }, text);
}

/* ---------- Body paragraph ---------- */
function Body({
  text,
  format,
  color
}) {
  if (!text) return null;
  const fs = format === '1.91:1' ? 26 : format === '9:16' ? 44 : 36;
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: `400 ${fs}px/1.45 var(--tf-font)`,
      color: color || 'var(--tf-white)',
      maxWidth: '92%',
      textWrap: 'pretty'
    }
  }, text);
}

/* ---------- Meta (inline strings) ---------- */
function Meta({
  items,
  color,
  format
}) {
  if (!items || !items.filter(Boolean).length) return null;
  const fs = format === '1.91:1' ? 24 : format === '9:16' ? 40 : 30;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: format === '1.91:1' ? 8 : 14,
      font: `500 ${fs}px/1.3 var(--tf-font)`,
      color: color || 'var(--tf-white)'
    }
  }, items.filter(Boolean).map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m)));
}

/* ---------- Meta rows (key / value, e.g. Report 07:00) ---------- */
function MetaRows({
  rows,
  color,
  format
}) {
  if (!rows || !rows.filter(r => r && (r.label || r.value)).length) return null;
  const fs = format === '1.91:1' ? 26 : format === '9:16' ? 44 : 36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: format === '1.91:1' ? 10 : 16
    }
  }, rows.filter(r => r && (r.label || r.value)).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: format === '1.91:1' ? 28 : 48,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 ${fs}px/1.25 var(--tf-font)`,
      color: color || 'var(--tf-white)',
      minWidth: format === '1.91:1' ? 160 : 230
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${fs}px/1.25 var(--tf-font)`,
      color: color || 'var(--tf-white)'
    }
  }, r.value))));
}

/* ---------- Positions list (job openings) ---------- */
function PositionsList({
  items,
  color,
  format
}) {
  if (!items || !items.filter(Boolean).length) return null;
  const fs = format === '1.91:1' ? 26 : format === '9:16' ? 46 : 38;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: format === '1.91:1' ? 16 : 28
    }
  }, items.filter(Boolean).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: format === '1.91:1' ? 18 : 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 ${fs}px/1.3 var(--tf-font)`,
      color: 'var(--tf-orange-500)'
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${fs}px/1.3 var(--tf-font)`,
      color: color || 'var(--tf-white)',
      textWrap: 'pretty'
    }
  }, p))));
}

/* ---------- Avatar (photo only — no avatar when there's no photo) ---------- */
function Avatar({
  name,
  src,
  size = 96,
  onDark = true
}) {
  if (!src) return null;
  const ring = onDark ? 'rgba(255,255,255,0.18)' : 'rgba(44,58,66,0.12)';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      objectFit: 'cover',
      display: 'block',
      flexShrink: 0,
      boxShadow: `0 0 0 1px ${ring}`
    }
  });
}

/* ---------- Logo (inlined SVG so exports never need to fetch) ---------- */
const TRIFORK_PATHS = [{
  d: 'm0 .133h62.132v12.51h-22.912v37.8h-16.306v-37.8h-22.914z',
  t: 'translate(0 1)'
}, {
  d: 'm85.567 25.873h26.954c4.406 0 6.023-1.668 6.023-5.283v-1.664c0-4.451-2.352-5.283-7.492-5.283h-25.485zm-16.304-24.74h49.207c12.558 0 15.937 5.906 15.937 14.941v3.196c0 6.744-1.615 10.701-9.109 12.371v.138c4.848.834 8.889 2.852 8.889 11.119v8.545h-16.304v-6.043c0-5.281-1.616-7.021-6.686-7.021h-25.63v13.064h-16.304z'
}, {
  d: 'm146.312 51.444h16.302v-50.311h-16.302z'
}, {
  d: 'm174.513 1.133h55.523v12.092h-39.217v9.384h37.382v11.672h-37.382v17.162h-16.306z'
}, {
  d: 'm255.453 28.998c0 7.297 1.616 10.078 9.327 10.078h20.857c7.715 0 9.327-2.781 9.327-10.078v-5.418c0-6.254-1.612-10.076-10.204-10.076h-19.098c-8.593 0-10.209 3.822-10.209 10.076zm-16.742-10.213c0-14.732 8.738-18.205 23.428-18.205h26.143c14.689 0 23.429 3.473 23.429 18.205v15.008c0 14.734-8.74 18.207-23.429 18.207h-26.143c-14.69 0-23.428-3.473-23.428-18.207z'
}, {
  d: 'm337.866 25.873h26.951c4.41 0 6.021-1.668 6.021-5.283v-1.664c0-4.451-2.35-5.283-7.488-5.283h-25.484zm-16.307-24.74h49.206c12.563 0 15.938 5.906 15.938 14.941v3.196c0 6.744-1.615 10.701-9.105 12.371v.138c4.847.834 8.888 2.852 8.888 11.119v8.545h-16.308v-6.043c0-5.281-1.615-7.021-6.682-7.021h-25.63v13.064h-16.307z'
}, {
  d: 'm397.728 1.133h16.299v18.486h7.643l20.56-18.486h22.182l-28.789 24.601 32.168 25.709h-23.063l-23.501-19.314h-7.2v19.314h-16.299z'
}];
function Logo({
  negative = true,
  format
}) {
  const h = format === '1.91:1' ? 28 : format === '9:16' ? 48 : 36;
  const fill = negative ? '#FFFFFF' : '#2C3A42';
  return /*#__PURE__*/React.createElement("svg", {
    height: h,
    width: h * (495 / 52),
    viewBox: "0 0 495 52",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: 'block',
      flexShrink: 0
    },
    "aria-label": "Trifork"
  }, /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, TRIFORK_PATHS.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p.d,
    fill: fill,
    transform: p.t
  })), /*#__PURE__*/React.createElement("path", {
    d: "m478.816 51.444h15.422v-14.176h-15.422z",
    fill: "#FF6600"
  })));
}

/* =============================================================
   SocialPost (master)
   ============================================================= */
function SocialPost(props) {
  const {
    format = '1:1',
    layout = 'bottom',
    bg = 'ink',
    photoSrc,
    photoPos = 'center',
    eyebrow,
    eyebrowColor,
    title = '',
    titleSizeOverride,
    titleColor,
    body,
    meta = [],
    metaRows,
    positions,
    metaColor,
    showLogo = false,
    variant = 'default',
    statNumber,
    statUnit,
    statLabel,
    statColor = 'orange',
    quoteAttribution,
    speakers,
    scale = 1
  } = props;
  const dims = FORMATS[format] || FORMATS['1:1'];
  const pad = paddingFor(format);
  const isDarkText = bg === 'light';
  const surfaceText = isDarkText ? 'var(--tf-ink-950)' : 'var(--tf-white)';
  const _eyebrowColor = eyebrowColor || (bg === 'photo' ? 'white' : 'orange');
  const _titleColor = titleColor || surfaceText;
  const _metaColor = metaColor || surfaceText;
  const onDark = bg !== 'light';
  let bgStyle = {};
  if (bg === 'ink') bgStyle = {
    background: 'var(--tf-ink-950)'
  };
  if (bg === 'light') bgStyle = {
    background: 'var(--tf-blue-100)'
  };
  if (bg === 'photo') bgStyle = {
    background: '#0e1518'
  };
  const scaleWrap = {
    width: dims.w * scale,
    height: dims.h * scale,
    overflow: 'hidden',
    display: 'block',
    background: bg === 'light' ? 'var(--tf-blue-100)' : 'var(--tf-ink-950)'
  };
  const inner = {
    transform: `scale(${scale})`,
    transformOrigin: '0 0',
    width: dims.w,
    height: dims.h
  };
  const wrapperStyle = {
    position: 'relative',
    width: dims.w,
    height: dims.h,
    overflow: 'hidden',
    ...bgStyle,
    fontFamily: 'var(--tf-font)'
  };
  const common = {
    format,
    layout,
    pad,
    eyebrow,
    eyebrowColor: _eyebrowColor,
    title,
    titleColor: _titleColor,
    titleSizeOverride,
    body,
    meta,
    metaRows,
    positions,
    metaColor: _metaColor,
    showLogo,
    bg,
    onDark
  };
  let content;
  if (variant === 'quote') {
    content = /*#__PURE__*/React.createElement(QuoteContent, _extends({}, common, {
      attribution: quoteAttribution
    }));
  } else if (variant === 'stat') {
    content = /*#__PURE__*/React.createElement(StatContent, _extends({}, common, {
      number: statNumber,
      unit: statUnit,
      label: statLabel,
      statColor: statColor
    }));
  } else if (variant === 'event') {
    content = /*#__PURE__*/React.createElement(EventContent, _extends({}, common, {
      speakers: speakers
    }));
  } else {
    content = /*#__PURE__*/React.createElement(DefaultContent, _extends({}, common, {
      variant: variant
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: scaleWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, bg === 'photo' && photoSrc && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: photoPos,
      display: 'block'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: PHOTO_OVERLAY
    }
  })), content)));
}

/* ---------- Shared frame: eyebrow top, anchored middle, meta bottom ---------- */
function Frame({
  pad,
  top,
  middle,
  bottom,
  justify
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: pad,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", null, top), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justify,
      paddingTop: 32,
      paddingBottom: 24
    }
  }, middle), /*#__PURE__*/React.createElement("div", null, bottom));
}
const JUSTIFY = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};

/* ---------- DefaultContent (default | case | job | news) ---------- */
function DefaultContent({
  format,
  layout,
  pad,
  eyebrow,
  eyebrowColor,
  title,
  titleColor,
  titleSizeOverride,
  body,
  meta,
  metaRows,
  positions,
  metaColor,
  showLogo,
  bg,
  onDark,
  variant
}) {
  const ebSize = format === '1.91:1' ? 16 : format === '9:16' ? 32 : 24;
  const top = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: eyebrowColor,
    size: ebSize
  }, eyebrow), showLogo && layout !== 'bottom' ? /*#__PURE__*/React.createElement(Logo, {
    negative: onDark,
    format: format
  }) : null);
  const middle = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: format === '1.91:1' ? 24 : 40
    }
  }, /*#__PURE__*/React.createElement(Title, {
    text: title,
    format: format,
    color: titleColor,
    sizeOverride: titleSizeOverride
  }), /*#__PURE__*/React.createElement(Body, {
    text: body,
    format: format,
    color: metaColor
  }), positions && positions.length ? /*#__PURE__*/React.createElement(PositionsList, {
    items: positions,
    color: metaColor,
    format: format
  }) : null);
  const bottom = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, metaRows && metaRows.length ? /*#__PURE__*/React.createElement(MetaRows, {
    rows: metaRows,
    color: metaColor,
    format: format
  }) : null, /*#__PURE__*/React.createElement(Meta, {
    items: meta,
    color: metaColor,
    format: format
  })), showLogo ? /*#__PURE__*/React.createElement(Logo, {
    negative: onDark,
    format: format
  }) : null);
  return /*#__PURE__*/React.createElement(Frame, {
    pad: pad,
    justify: JUSTIFY[layout] || 'flex-end',
    top: top,
    middle: middle,
    bottom: bottom
  });
}

/* ---------- EventContent (title + date/time, optional speakers) ---------- */
function EventContent({
  format,
  layout,
  pad,
  eyebrow,
  eyebrowColor,
  title,
  titleColor,
  titleSizeOverride,
  meta,
  metaRows,
  metaColor,
  showLogo,
  bg,
  onDark,
  speakers
}) {
  const ebSize = format === '1.91:1' ? 16 : format === '9:16' ? 32 : 24;
  const hasSpeakers = speakers && speakers.filter(s => s && s.name).length > 0;
  const isLandscape = format === '1.91:1';
  const top = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: eyebrowColor,
    size: ebSize
  }, eyebrow), showLogo && layout !== 'bottom' ? /*#__PURE__*/React.createElement(Logo, {
    negative: onDark,
    format: format
  }) : null);

  /* Landscape with speakers: title+meta left column, speakers right column */
  if (hasSpeakers && isLandscape) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        padding: pad,
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 56
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: eyebrowColor,
      size: ebSize
    }, eyebrow), /*#__PURE__*/React.createElement(Title, {
      text: title,
      format: format,
      color: titleColor,
      sizeOverride: titleSizeOverride
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(MetaRows, {
      rows: metaRows,
      color: metaColor,
      format: format
    }), /*#__PURE__*/React.createElement(Meta, {
      items: meta,
      color: metaColor,
      format: format
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(SpeakerList, {
      speakers: speakers,
      format: format,
      color: metaColor,
      onDark: onDark,
      compact: true
    }), showLogo ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      negative: onDark,
      format: format
    })) : null));
  }
  const middle = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: format === '1.91:1' ? 24 : 40
    }
  }, /*#__PURE__*/React.createElement(Title, {
    text: title,
    format: format,
    color: titleColor,
    sizeOverride: titleSizeOverride
  }), hasSpeakers ? /*#__PURE__*/React.createElement(SpeakerList, {
    speakers: speakers,
    format: format,
    color: metaColor,
    onDark: onDark
  }) : null);
  const bottom = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MetaRows, {
    rows: metaRows,
    color: metaColor,
    format: format
  }), /*#__PURE__*/React.createElement(Meta, {
    items: meta,
    color: metaColor,
    format: format
  })), showLogo ? /*#__PURE__*/React.createElement(Logo, {
    negative: onDark,
    format: format
  }) : null);
  return /*#__PURE__*/React.createElement(Frame, {
    pad: pad,
    justify: JUSTIFY[layout] || 'flex-end',
    top: top,
    middle: middle,
    bottom: bottom
  });
}

/* ---------- SpeakerList ---------- */
function SpeakerList({
  speakers,
  format,
  color,
  onDark,
  compact
}) {
  const list = speakers.filter(s => s && s.name);
  if (!list.length) return null;
  const av = format === '1.91:1' ? 92 : format === '9:16' ? 150 : 120;
  const nameFs = format === '1.91:1' ? 28 : format === '9:16' ? 46 : 36;
  const roleFs = format === '1.91:1' ? 20 : format === '9:16' ? 32 : 26;
  const coFs = format === '1.91:1' ? 15 : format === '9:16' ? 26 : 20;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: compact ? 28 : 32
    }
  }, list.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: s.name,
    src: s.avatar,
    size: av,
    onDark: onDark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, s.company ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 ${coFs}px/1 var(--tf-font)`,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--tf-orange-500)',
      marginBottom: 4
    }
  }, s.company) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 ${nameFs}px/1.15 var(--tf-font)`,
      color: color
    }
  }, s.name), s.role ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 ${roleFs}px/1.2 var(--tf-font)`,
      color: color,
      opacity: 0.72
    }
  }, s.role) : null))));
}

/* ---------- QuoteContent ---------- */
function QuoteContent({
  format,
  layout,
  pad,
  eyebrow,
  eyebrowColor,
  title,
  titleColor,
  titleSizeOverride,
  attribution,
  metaColor,
  showLogo,
  bg,
  onDark
}) {
  const ebSize = format === '1.91:1' ? 16 : format === '9:16' ? 32 : 24;
  const qSize = pickTitleSize(title, format, titleSizeOverride);
  const markSize = qSize * 1.5;
  const top = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: eyebrowColor,
    size: ebSize
  }, eyebrow), showLogo ? /*#__PURE__*/React.createElement(Logo, {
    negative: onDark,
    format: format
  }) : null);
  const middle = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 ${markSize}px/0.62 var(--tf-font)`,
      color: 'var(--tf-orange-500)',
      marginBottom: -markSize * 0.16,
      marginLeft: -markSize * 0.04,
      letterSpacing: '-0.04em'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 ${qSize}px/1.12 var(--tf-font)`,
      color: titleColor,
      letterSpacing: '-0.02em',
      textWrap: 'pretty'
    }
  }, title));
  const bottom = attribution && (attribution.name || attribution.role) ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, attribution.avatar ? /*#__PURE__*/React.createElement(Avatar, {
    name: attribution.name,
    src: attribution.avatar,
    size: format === '1.91:1' ? 64 : 96,
    onDark: onDark
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, attribution.name ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 ${format === '1.91:1' ? 26 : 34}px/1.2 var(--tf-font)`,
      color: metaColor
    }
  }, attribution.name) : null, attribution.role ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 ${format === '1.91:1' ? 20 : 26}px/1.25 var(--tf-font)`,
      color: metaColor,
      opacity: 0.72
    }
  }, attribution.role) : null)) : null;
  return /*#__PURE__*/React.createElement(Frame, {
    pad: pad,
    justify: JUSTIFY[layout] || 'center',
    top: top,
    middle: middle,
    bottom: bottom
  });
}

/* ---------- StatContent ---------- */
function statColorValue(statColor, bg) {
  const dark = bg !== 'light';
  if (statColor === 'blue') return dark ? '#A1C4D7' : '#3C4C54';
  if (statColor === 'neutral') return dark ? '#FFFFFF' : '#2C3A42';
  return '#FF6600'; /* orange */
}
function StatContent({
  format,
  layout,
  pad,
  eyebrow,
  eyebrowColor,
  number,
  unit,
  label,
  statColor,
  titleColor,
  metaColor,
  meta,
  showLogo,
  bg,
  onDark
}) {
  const ebSize = format === '1.91:1' ? 16 : format === '9:16' ? 32 : 24;
  const numSize = format === '1.91:1' ? 230 : format === '9:16' ? 460 : format === '4:5' ? 420 : 380;
  const unitSize = numSize * 0.30;
  const labelSize = format === '1.91:1' ? 30 : format === '9:16' ? 56 : 42;
  const figColor = statColorValue(statColor, bg);
  const top = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: eyebrowColor,
    size: ebSize
  }, eyebrow), showLogo && layout !== 'bottom' ? /*#__PURE__*/React.createElement(Logo, {
    negative: onDark,
    format: format
  }) : null);
  const middle = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: format === '1.91:1' ? 16 : 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${numSize}px/0.92 var(--tf-font)`,
      color: figColor,
      letterSpacing: '-0.04em'
    }
  }, number), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${unitSize}px/1 var(--tf-font)`,
      color: figColor,
      letterSpacing: '-0.02em'
    }
  }, unit) : null), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 ${labelSize}px/1.25 var(--tf-font)`,
      color: titleColor,
      maxWidth: '88%',
      textWrap: 'pretty'
    }
  }, label) : null);
  const bottom = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    items: meta,
    color: metaColor,
    format: format
  }), showLogo ? /*#__PURE__*/React.createElement(Logo, {
    negative: onDark,
    format: format
  }) : null);
  return /*#__PURE__*/React.createElement(Frame, {
    pad: pad,
    justify: JUSTIFY[layout] || 'center',
    top: top,
    middle: middle,
    bottom: bottom
  });
}

/* ---------- Expose globals ---------- */
Object.assign(window, {
  SocialPost,
  Eyebrow,
  Title,
  Body,
  Meta,
  MetaRows,
  PositionsList,
  Avatar,
  SpeakerList,
  Logo,
  FORMATS,
  TITLE_SIZES,
  TITLE_BREAKPOINTS,
  pickTitleSize,
  paddingFor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "social-templates.jsx", error: String((e && e.message) || e) }); }

})();
