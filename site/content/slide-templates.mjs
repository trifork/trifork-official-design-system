const WIDTH = 1920;
const HEIGHT = 1080;
const HOSTED_SITE = "https://brand.trifork.com/system";
const DECK = "Capital markets, 2025";

const LOGO_DARK = "Trifork_logo_RGB.svg";
const LOGO_LIGHT = "Trifork_logo_neg_RGB.svg";

const C = {
  ink: "#2C3A42",
  ink800: "#566168",
  ink500: "#959CA0",
  ink100: "#EAEBEC",
  blue900: "#3C4C54",
  blue200: "#C1D7E5",
  blue100: "#D5E5ED",
  orange: "#FF6600",
  white: "#FFFFFF",
};

function cleanBase(base) {
  return String(base || "").replace(/\/$/, "");
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value = "") {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function escapeXml(value = "") {
  return escapeHtml(value).replace(/'/g, "&apos;");
}

function attrs(values) {
  return Object.entries(values)
    .filter(([, value]) => value !== false && value !== undefined && value !== null)
    .map(([key, value]) => (value === true ? key : `${key}="${escapeAttr(value)}"`))
    .join(" ");
}

function hosted(path) {
  return `${HOSTED_SITE}/${path}`;
}

export function webSlideAssetPaths(basePath = "/system") {
  const base = cleanBase(basePath);
  return {
    tokensHref: `${base}/tokens.css`,
    templateCssHref: "trifork-slide.css",
    logo: (file) => `${base}/assets/logo/${file}`,
    image: (file) => `${base}/assets/imagery/${file}`,
  };
}

export function hostedSlideAssetPaths(site = HOSTED_SITE) {
  const base = cleanBase(site);
  return {
    tokensHref: "../../tokens.css",
    templateCssHref: "trifork-slide.css",
    logo: (file) => `${base}/assets/logo/${file}`,
    image: (file) => `${base}/assets/imagery/${file}`,
  };
}

export function skillSlideAssetPaths(site = HOSTED_SITE) {
  const base = cleanBase(site);
  return {
    tokensHref: "../tokens.css",
    templateCssHref: "trifork-slide.css",
    logo: (file) => `../logo/${file}`,
    image: (file) => `${base}/assets/imagery/${file}`,
  };
}

function label(text) {
  return `<div class="s-label" data-slot="label">${escapeHtml(text)}</div>`;
}

function foot(page, name = DECK) {
  return `<div class="s-foot" data-slot="footer"><span class="page">${escapeHtml(page)}</span><span class="sep">/</span><span class="deck">${escapeHtml(name)}</span></div>`;
}

function logo(paths, dark = false) {
  const file = dark ? LOGO_LIGHT : LOGO_DARK;
  return `<div class="s-logo" data-slot="logo"><img src="${escapeAttr(paths.logo(file))}" alt="Trifork"></div>`;
}

function chrome(paths, page, name = DECK, dark = false) {
  return `${foot(page, name)}${logo(paths, dark)}`;
}

function photo(paths, file, className, overlay = false, slot = "photo") {
  // The ink overlay is a real element (not a CSS ::after) so it imports into
  // Figma and other design tools as its own layer.
  const overlayEl = overlay ? `<div class="overlay" aria-hidden="true"></div>` : "";
  return `<div class="${escapeAttr(className)}" data-slot="${escapeAttr(slot)}" data-offline-fallback="Large photography is hosted only. If this image cannot load, keep the layout and use the ink or light background."><img src="${escapeAttr(paths.image(file))}" alt="" onerror="this.style.display='none'">${overlayEl}</div>`;
}

function list(items, renderItem) {
  return items.map(renderItem).join("");
}

// Generic single-stroke line icon placeholder (blue 900 via currentColor).
// Replace with a real icon from assets/icons in production decks.
function lineIcon() {
  return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="19" r="11"></circle><path d="M18 36h12M20 41h8"></path></svg>`;
}

function thumb(paths, file) {
  return `<div class="thumb"><img src="${escapeAttr(paths.image(file))}" alt="" onerror="this.style.display='none'"></div>`;
}

const common = {
  deckName: DECK,
  width: WIDTH,
  height: HEIGHT,
  outerMargin: 80,
};

export const slideTemplates = [
  {
    id: "cover-card",
    layoutId: "cover-card",
    canonical: true,
    metaTitle: "01, Cover",
    code: ".slide.cover-card",
    slideClass: "slide cover-card",
    background: "light",
    usesHostedPhotography: true,
    slots: ["photo", "logo", "title", "deck", "year", "summary"],
    description: "Primary cover with a large rounded photo card and no standard footer.",
    preview: {
      title: "Banking infrastructure that holds.",
      lede: "How we re-platformed Nordic Bank's settlement engine across twelve currencies.",
      image: "trifork-people-1.jpg",
    },
    render(paths) {
      return `
        <div class="slide-inner">
          <div class="photo-card" data-slot="photo" data-offline-fallback="Large photography is hosted only. If this image cannot load, keep the ink card and overlay.">
            <img src="${escapeAttr(paths.image("trifork-people-1.jpg"))}" alt="" onerror="this.style.display='none'">
            <div class="overlay" aria-hidden="true"></div>
            <div class="card-mark" data-slot="logo"><img src="${escapeAttr(paths.logo(LOGO_LIGHT))}" alt="Trifork"></div>
            <h1 data-slot="title">Banking infrastructure that holds.</h1>
          </div>
          <div class="lower-left" data-slot="deck"><span>Capital markets</span><span class="sep">/</span><span>2025</span></div>
          <p class="lower-right" data-slot="summary">How we re-platformed Nordic Bank's settlement engine across twelve currencies, fourteen months from kickoff, without a single missed settlement window.</p>
        </div>`;
    },
  },
  {
    id: "cover-split",
    layoutId: "cover-split",
    canonical: true,
    metaTitle: "02, Cover, split",
    code: ".slide.cover-split",
    slideClass: "slide cover-split",
    background: "light",
    usesHostedPhotography: true,
    slots: ["logo", "label", "title", "lede", "photo", "deck", "year"],
    description: "Split cover with top-left wordmark, centred left copy, and a photo bleeding from the right.",
    preview: {
      label: "CAPITAL MARKETS",
      title: "Banking infrastructure that holds.",
      lede: "How we re-platformed Nordic Bank's settlement engine.",
      image: "trifork-aarhus-4.jpg",
    },
    render(paths) {
      return `
        <div class="slide-inner">
          ${logo(paths)}
          <div class="left-col">
            <div class="label-block" data-slot="label">CAPITAL MARKETS</div>
            <h1 data-slot="title">Banking infrastructure that holds.</h1>
            <p class="lede" data-slot="lede">How we re-platformed Nordic Bank's settlement engine, fourteen months from kickoff, without a single missed window.</p>
          </div>
          ${photo(paths, "trifork-aarhus-4.jpg", "image-card")}
          <div class="lower-left" data-slot="deck"><span>Capital markets</span><span class="sep">/</span><span>2025</span></div>
        </div>`;
    },
  },
  {
    id: "separator",
    layoutId: "separator",
    canonical: true,
    metaTitle: "03, Separator",
    code: ".slide.separator",
    slideClass: "slide separator",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "footer", "logo"],
    description: "Light section separator with large centred title and standard slide chrome.",
    preview: { label: "SECTION", title: "Architecture.", lede: "Distributed by design, and the trade-offs we made along the way." },
    render(paths) {
      return `
        <div class="slide-inner">
          <div class="label-block" data-slot="label">SECTION</div>
          <h1 data-slot="title">Architecture.</h1>
          <p class="lede" data-slot="lede">Distributed by design, and the trade-offs we made along the way.</p>
          ${chrome(paths, "03")}
        </div>`;
    },
  },
  {
    id: "separator-dark",
    layoutId: "separator-dark",
    canonical: true,
    metaTitle: "03b, Separator, dark",
    code: ".slide.separator.on-dark",
    slideClass: "slide separator on-dark",
    background: "dark",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "footer", "logo"],
    description: "Dark section separator with large centred title and standard slide chrome.",
    preview: { label: "SECTION", title: "Migration.", lede: "The four-week production slice, and what it forced to the surface." },
    render(paths) {
      return `
        <div class="slide-inner">
          <div class="label-block" data-slot="label">SECTION</div>
          <h1 data-slot="title">Migration.</h1>
          <p class="lede" data-slot="lede">The four-week production slice, and what it forced to the surface.</p>
          ${chrome(paths, "03", DECK, true)}
        </div>`;
    },
  },
  {
    id: "separator-photo",
    layoutId: "separator-photo",
    canonical: true,
    metaTitle: "03c, Separator, photo",
    code: ".slide.separator.on-dark",
    slideClass: "slide separator on-dark",
    background: "dark",
    usesHostedPhotography: true,
    slots: ["photo", "label", "title", "lede", "footer", "logo"],
    description: "Photo section separator with flat 90 percent ink overlay and standard slide chrome.",
    preview: { label: "SECTION", title: "Outcomes.", lede: "What we measured, and what we would do differently next time.", image: "trifork-aarhus-1.jpg" },
    render(paths) {
      return `
        <div class="slide-inner">
          ${photo(paths, "trifork-aarhus-1.jpg", "photo-bg", true)}
          <div class="label-block" data-slot="label">SECTION</div>
          <h1 data-slot="title">Outcomes.</h1>
          <p class="lede" data-slot="lede">What we measured, and what we would do differently next time.</p>
          ${chrome(paths, "03", DECK, true)}
        </div>`;
    },
  },
  {
    id: "agenda",
    layoutId: "agenda",
    canonical: true,
    metaTitle: "04, Agenda",
    code: ".slide.agenda",
    slideClass: "slide agenda",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "agendaItems", "footer", "logo"],
    description: "Agenda layout with title on the left and numbered agenda rows on the right.",
    preview: {
      label: "AGENDA",
      title: "What we'll cover.",
      items: ["Where we started", "Architecture", "Migration", "Operating model", "Outcomes"],
    },
    render(paths) {
      const items = [
        "Where we started, the legacy settlement engine",
        "Architecture: distributed by design",
        "Migration: the four-week production slice",
        "Operating model and handover",
        "Outcomes and what we would do differently",
      ];
      return `
        <div class="slide-inner">
          ${label("AGENDA")}
          <h2 data-slot="title">What we'll cover.</h2>
          <ol data-slot="agendaItems">
            ${list(items, (item, index) => `<li><b>${String(index + 1).padStart(2, "0")}</b><span>${escapeHtml(item)}</span></li>`)}
          </ol>
          ${chrome(paths, "04")}
        </div>`;
    },
  },
  {
    id: "section-start",
    layoutId: "section-start",
    canonical: true,
    metaTitle: "05, Section starter",
    code: ".slide.section-start",
    slideClass: "slide section-start on-dark",
    background: "dark",
    usesHostedPhotography: false,
    slots: ["label", "sectionNumber", "title", "body", "footer", "logo"],
    description: "Dark section starter with large orange section number.",
    preview: { label: "SECTION", number: "02", title: "Architecture: distributed by design.", lede: "Why we picked partition tolerance over a tighter consistency model." },
    render(paths) {
      return `
        <div class="slide-inner">
          ${label("SECTION")}
          <div class="num" data-slot="sectionNumber">02</div>
          <h1 data-slot="title">Architecture: distributed by design.</h1>
          <p data-slot="body">Why we picked partition tolerance over a tighter consistency model, and the trade-offs we made along the way.</p>
          ${chrome(paths, "05", DECK, true)}
        </div>`;
    },
  },
  {
    id: "title-bullets",
    layoutId: "title-bullets",
    canonical: true,
    metaTitle: "06, Title, description and bullets",
    code: ".slide.title-bullets",
    slideClass: "slide title-bullets",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "bullets", "footer", "logo"],
    description: "Title, lede, and four structured bullet rows with orange dash markers.",
    preview: {
      label: "APPROACH",
      title: "Production-shaped from week one.",
      lede: "We replaced an eleven-year-old settlement engine without taking down the bank.",
      bullets: ["A production-shaped slice shipped in four weeks.", "Every late-cycle question surfaced early.", "The architecture carried real traffic.", "The bank's own SREs joined on-call."],
    },
    render(paths) {
      const bullets = [
        "A production-shaped slice shipped in four weeks: one instrument type, end to end, on the new platform.",
        "Every late-cycle question surfaced early: observability, runbook ownership, key rotation, the regulatory event log.",
        "By month three the architecture was no longer hypothetical; it was carrying real, regulator-visible traffic.",
        "The bank's own SREs joined the on-call rotation ten weeks before handover.",
      ];
      return `
        <div class="slide-inner">
          ${label("APPROACH")}
          <div class="flow">
            <h2 data-slot="title">Production-shaped from week one.</h2>
            <p class="lede" data-slot="lede">We replaced an eleven-year-old settlement engine without taking down the bank's ability to settle in any of twelve currencies.</p>
            <ul class="s-bullets block" data-slot="bullets">
              ${list(bullets, (item) => `<li><span class="dash" aria-hidden="true"></span><span>${escapeHtml(item)}</span></li>`)}
            </ul>
          </div>
          ${chrome(paths, "06")}
        </div>`;
    },
  },
  {
    id: "text-slide",
    layoutId: "text-slide",
    canonical: true,
    metaTitle: "07, Title and body",
    code: ".slide.text-slide",
    slideClass: "slide text-slide",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "body", "footer", "logo"],
    description: "Editorial text slide with title and three body paragraphs.",
    preview: { label: "APPROACH", title: "Production-shaped from week one.", paragraphs: ["The legacy engine had run unchanged for eleven years.", "We chose to ship a production-shaped slice within four weeks.", "That early slice forced every late-cycle question to the surface."] },
    render(paths) {
      const paragraphs = [
        "The legacy engine had run unchanged for eleven years, every change had become a quarterly programme. Our brief was to replace it without taking down the bank's ability to settle in any of twelve currencies.",
        "We chose to ship a production-shaped slice within four weeks: a single instrument type, end to end, on the new platform. Not a prototype, not a parallel run, a real path through the regulator-facing audit trail.",
        "That early slice forced every late-cycle question to the surface early: observability, runbook ownership, key rotation, and the regulatory event log. By month three, the new architecture was no longer hypothetical.",
      ];
      return `
        <div class="slide-inner">
          ${label("APPROACH")}
          <div class="flow">
            <h2 data-slot="title">Production-shaped from week one.</h2>
            <div class="body block" data-slot="body">
              ${list(paragraphs, (item) => `<p>${escapeHtml(item)}</p>`)}
            </div>
          </div>
          ${chrome(paths, "07")}
        </div>`;
    },
  },
  {
    id: "image-slide",
    layoutId: "image-slide",
    canonical: true,
    metaTitle: "08, Large image",
    code: ".slide.image-slide",
    slideClass: "slide image-slide on-dark",
    background: "dark",
    usesHostedPhotography: true,
    slots: ["photo", "caption", "footer", "logo"],
    description: "Full-bleed image slide with flat 90 percent ink overlay, caption, and dark chrome.",
    preview: { title: "The platform team, mid-rebuild, autumn 2024.", image: "trifork-aarhus-2.jpg" },
    render(paths) {
      return `
        <div class="slide-inner">
          ${photo(paths, "trifork-aarhus-2.jpg", "frame", true)}
          <div class="caption" data-slot="caption">The platform team, mid-rebuild, autumn 2024.</div>
          ${chrome(paths, "08", DECK, true)}
        </div>`;
    },
  },
  {
    id: "numeric-callouts",
    layoutId: "numeric-callouts",
    canonical: true,
    metaTitle: "09, Numeric callouts",
    code: ".slide.nums",
    slideClass: "slide nums",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "groupLabel", "metrics", "footer", "logo"],
    description: "Four-column metric slide with large Regular-weight numbers.",
    preview: {
      label: "OUTCOMES",
      title: "What we measured.",
      lede: "Four numbers the operating team agreed to before kickoff.",
      metrics: [["14", "Weeks to first production slice."], ["3x", "Throughput at peak window."], ["99.99", "% uptime over four quarters."], ["-42", "% on-call interruptions."]],
    },
    render(paths) {
      const metrics = [
        ["14", "Weeks to first production slice. From kickoff to a regulator-visible audit trail."],
        ["3x", "Throughput at peak window. Measured against the legacy benchmark."],
        ["99.99", "% uptime over four quarters, across both EU and UK regions."],
        ["-42", "% on-call interruptions year over year, after handover."],
      ];
      return `
        <div class="slide-inner">
          ${label("OUTCOMES")}
          <div class="flow">
            <h2 data-slot="title">What we measured.</h2>
            <p class="lede" data-slot="lede">Four numbers the operating team agreed to before kickoff. All four moved in the right direction by the end of quarter four.</p>
            <div class="group-label" data-slot="groupLabel">IMPORTANT NUMBERS</div>
            <div class="grid block" data-slot="metrics">
              ${list(metrics, ([number, text]) => `<div class="item"><div class="num">${escapeHtml(number)}</div><div class="label">${escapeHtml(text)}</div></div>`)}
            </div>
          </div>
          ${chrome(paths, "09")}
        </div>`;
    },
  },
  {
    id: "two-columns",
    layoutId: "two-columns",
    canonical: true,
    metaTitle: "10, Two columns",
    code: ".slide.two-col",
    slideClass: "slide two-col",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "columns", "footer", "logo"],
    description: "Two-column content slide with a title and lede above the columns.",
    preview: { label: "APPROACH", title: "How we worked.", lede: "Two principles that shaped every architecture review and sprint plan.", columns: ["Distributed by design", "Built to be operated"] },
    render(paths) {
      const columns = [
        ["Distributed by design", ["Every service was multi-region from day one. Cross-region failover ran continuously in pre-production; we never built it as a feature.", "The trade-off, eventual consistency on read paths, was negotiated with the operations desk before the first line of code."]],
        ["Built to be operated", ["Observability, runbooks, and on-call tooling were part of the brief. Every feature merged with its alerts, dashboards, and SLO already wired in.", "By handover, the bank's own SREs had been on rotation for ten weeks alongside our team."]],
      ];
      return `
        <div class="slide-inner">
          ${label("APPROACH")}
          <div class="flow">
            <h2 data-slot="title">How we worked.</h2>
            <p class="lede" data-slot="lede">Two principles that shaped every architecture review and every sprint plan.</p>
            <div class="cols block" data-slot="columns">
              ${list(columns, ([title, paragraphs]) => `<div class="col"><h3>${escapeHtml(title)}</h3>${list(paragraphs, (item) => `<p>${escapeHtml(item)}</p>`)}</div>`)}
            </div>
          </div>
          ${chrome(paths, "10")}
        </div>`;
    },
  },
  {
    id: "card-grid",
    layoutId: "card-grid",
    canonical: true,
    metaTitle: "11, Card grid",
    code: ".slide.cards-slide",
    slideClass: "slide cards-slide",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "cards", "footer", "logo"],
    description: "Six-card capability grid on a light slide.",
    preview: { label: "CAPABILITIES", title: "What we bring.", cards: ["Software craftsmanship", "Applied AI", "Fintech", "Smart buildings", "Trifork Labs", "Platform engineering"] },
    render(paths) {
      const cards = [
        ["Software craftsmanship", "Long-running engineering teams that own systems through their full lifecycle, not just the build phase."],
        ["Applied AI", "Models that ship to production where they meet real users, measured against business outcomes."],
        ["Fintech", "Regulated payments, settlement, and capital-markets platforms across the Nordic and DACH regions."],
        ["Smart buildings", "Building-management systems for healthcare estates, public infrastructure, and commercial portfolios."],
        ["Trifork Labs", "An incubator for ventures we co-build with our customers, backed by the same engineering bench."],
        ["Platform engineering", "Internal developer platforms for organisations operating dozens of regulated services."],
      ];
      return `
        <div class="slide-inner">
          ${label("CAPABILITIES")}
          <div class="flow">
            <h2 data-slot="title">What we bring.</h2>
            <p class="lede" data-slot="lede">Six capabilities that show up across every long-running engagement we run.</p>
            <div class="grid block" data-slot="cards">
              ${list(cards, ([title, body]) => `<div class="card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></div>`)}
            </div>
          </div>
          ${chrome(paths, "11")}
        </div>`;
    },
  },
  {
    id: "quote",
    layoutId: "quote",
    canonical: true,
    metaTitle: "12, Quote",
    code: ".slide.quote-slide",
    slideClass: "slide quote-slide is-long",
    background: "light",
    usesHostedPhotography: true,
    slots: ["label", "quote", "portrait", "name", "role", "footer", "logo"],
    description: "Customer quote with attribution. Portrait is optional — omit the .portrait element for name and role alone. Size scales with length: default class for short quotes, .is-long for medium, .is-very-long for long.",
    preview: { label: "CUSTOMER VOICE", title: "Trifork's team understood our regulatory environment from the first workshop.", image: "trifork-people-1.jpg" },
    render(paths) {
      return `
        <div class="slide-inner">
          ${label("CUSTOMER VOICE")}
          <div class="quote-block" data-slot="quote"><q>“Trifork's team understood our regulatory environment from the first workshop. We shipped the first release a quarter ahead of plan, and the platform now belongs to us, not to a vendor.”</q></div>
          <div class="attr" data-slot="attribution">
            <div class="portrait" data-slot="portrait"><img src="${escapeAttr(paths.image("trifork-people-1.jpg"))}" alt="" onerror="this.style.display='none'"></div>
            <div class="who"><b data-slot="name">Mette Lindholm</b><span data-slot="role">Head of Platform, Nordic Bank</span></div>
          </div>
          ${chrome(paths, "12")}
        </div>`;
    },
  },
  {
    id: "quote-long",
    layoutId: "quote",
    canonical: false,
    metaTitle: "12b, Quote, long variant",
    code: ".slide.quote-slide.is-very-long",
    slideClass: "slide quote-slide is-very-long",
    background: "light",
    usesHostedPhotography: true,
    slots: ["label", "quote", "portrait", "name", "role", "footer", "logo"],
    description: "Longest quote tier (.is-very-long), sized down for a long quote. Portrait is optional — omit the .portrait element to show name and role alone.",
    preview: { label: "CUSTOMER VOICE", title: "What I value about Trifork is that they shipped a platform our own engineers could run.", image: "trifork-people-1.jpg" },
    render(paths) {
      return `
        <div class="slide-inner">
          ${label("CUSTOMER VOICE")}
          <div class="quote-block" data-slot="quote"><q>“What I value about Trifork is not just that they shipped the platform on schedule, it is that they shipped a platform our own engineers could pick up and run with on day one. The runbooks were written, the alerts were tuned, and the operating model was already proven by the time the contract closed. That is a different kind of engagement, and it is the only kind that survives a regulator's stress test.”</q></div>
          <div class="attr" data-slot="attribution">
            <div class="portrait" data-slot="portrait"><img src="${escapeAttr(paths.image("trifork-people-1.jpg"))}" alt="" onerror="this.style.display='none'"></div>
            <div class="who"><b data-slot="name">Mette Lindholm</b><span data-slot="role">Head of Platform, Nordic Bank</span></div>
          </div>
          ${chrome(paths, "12")}
        </div>`;
    },
  },
  {
    id: "customer-case",
    layoutId: "customer-case",
    canonical: true,
    metaTitle: "13, Customer case",
    code: ".slide.case-slide",
    slideClass: "slide case-slide",
    background: "light",
    usesHostedPhotography: true,
    slots: ["label", "title", "photo", "metadata", "lede", "footer", "logo"],
    description: "Customer case slide with image, metadata rows, and case lede.",
    preview: { label: "CASE STUDY", title: "Nordic Bank, settlement.", image: "trifork-aarhus-3.jpg", rows: ["Industry", "Engagement", "Stack", "Outcome"] },
    render(paths) {
      const rows = [
        ["Industry", "Capital markets"],
        ["Engagement", "14 months, platform team of 11"],
        ["Stack", "Kubernetes, Kafka, PostgreSQL, OpenTelemetry"],
        ["Outcome", "Settlement engine replaced; ops handed to in-house SREs"],
      ];
      return `
        <div class="slide-inner">
          ${label("CASE STUDY")}
          <h2 data-slot="title">Nordic Bank, settlement.</h2>
          ${photo(paths, "trifork-aarhus-3.jpg", "photo")}
          <div class="meta" data-slot="metadata">
            ${list(rows, ([key, value]) => `<div class="row"><div class="key">${escapeHtml(key)}</div><div class="val">${escapeHtml(value)}</div></div>`)}
            <p class="lede" data-slot="lede">A long engagement with a regulated customer. The platform now runs without us, exactly as we designed it to.</p>
          </div>
          ${chrome(paths, "13")}
        </div>`;
    },
  },
  {
    id: "columns-icons",
    layoutId: "columns-icons",
    canonical: true,
    metaTitle: "14, Columns — icons",
    code: ".slide.columns",
    slideClass: "slide columns",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "columns", "footer", "logo"],
    description: "Two to five columns, each with a line icon, a Medium title, and body copy. Set the count with style=\"--cols:N\" on .grid (default 4).",
    preview: {
      label: "CAPABILITIES",
      title: "How we help.",
      lede: "Practice areas, each with a long-running engineering team and a production track record.",
      columns: ["Software craftsmanship", "Applied AI", "Cloud operations", "Cyber protection"],
    },
    render(paths) {
      const cols = [
        ["Software craftsmanship", "Long-running teams that own systems through their full lifecycle, not just the build."],
        ["Applied AI", "Models that ship to production, measured against real business outcomes."],
        ["Cloud operations", "Managed infrastructure across AWS, Azure and GCP with 24/7 SRE support."],
        ["Cyber protection", "Security engineering and continuous monitoring for regulated environments."],
      ];
      return `
        <div class="slide-inner">
          ${label("CAPABILITIES")}
          <div class="flow">
            <h2 data-slot="title">How we help.</h2>
            <p class="lede" data-slot="lede">Practice areas, each with a long-running engineering team and a production track record.</p>
            <div class="grid block" data-slot="columns" style="--cols:4">
              ${list(cols, ([h, p]) => `<div class="col"><div class="ico">${lineIcon()}</div><h3>${escapeHtml(h)}</h3><p>${escapeHtml(p)}</p></div>`)}
            </div>
          </div>
          ${chrome(paths, "14")}
        </div>`;
    },
  },
  {
    id: "columns-images",
    layoutId: "columns-images",
    canonical: true,
    metaTitle: "15, Columns — images",
    code: ".slide.columns",
    slideClass: "slide columns",
    background: "light",
    usesHostedPhotography: true,
    slots: ["label", "title", "lede", "columns", "footer", "logo"],
    description: "Column layout with a rounded image above each Medium title and body. Two to five columns via style=\"--cols:N\".",
    preview: {
      label: "ENGAGEMENTS",
      title: "Where we work.",
      lede: "A cross-section of the regulated industries we build production systems for.",
      columns: ["Capital markets", "Healthcare", "Public sector", "Industry"],
    },
    render(paths) {
      const cols = [
        ["trifork-aarhus-1.jpg", "Capital markets", "Settlement and payments platforms across the Nordic and DACH regions."],
        ["trifork-people-1.jpg", "Healthcare", "Clinical platforms built to the strictest data and compliance standards."],
        ["trifork-aarhus-3.jpg", "Public sector", "Citizen-facing services with auditability and sovereignty at the core."],
        ["trifork-stock-1.jpg", "Industry", "Connected systems from sensors to cloud data pipelines."],
      ];
      return `
        <div class="slide-inner">
          ${label("ENGAGEMENTS")}
          <div class="flow">
            <h2 data-slot="title">Where we work.</h2>
            <p class="lede" data-slot="lede">A cross-section of the regulated industries we build production systems for.</p>
            <div class="grid block" data-slot="columns" style="--cols:4">
              ${list(cols, ([img, h, p]) => `<div class="col">${thumb(paths, img)}<h3>${escapeHtml(h)}</h3><p>${escapeHtml(p)}</p></div>`)}
            </div>
          </div>
          ${chrome(paths, "15")}
        </div>`;
    },
  },
  {
    id: "columns-numbered",
    layoutId: "columns-numbered",
    canonical: true,
    metaTitle: "16, Columns — numbered",
    code: ".slide.columns",
    slideClass: "slide columns",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "columns", "footer", "logo"],
    description: "Column layout with a large orange step number above each Medium title and body. Two to five columns via style=\"--cols:N\".",
    preview: {
      label: "HOW IT WORKS",
      title: "From kickoff to handover.",
      columns: ["Discover", "Shape", "Build", "Operate"],
    },
    render(paths) {
      const cols = [
        ["Discover", "We map the regulatory environment and the constraints before a line of code."],
        ["Shape", "A production-shaped slice in four weeks surfaces every late-cycle question early."],
        ["Build", "Long-running teams deliver with observability and runbooks wired in from day one."],
        ["Operate", "Your own engineers take the rotation; the platform runs without us."],
      ];
      return `
        <div class="slide-inner">
          ${label("HOW IT WORKS")}
          <div class="flow">
            <h2 data-slot="title">From kickoff to handover.</h2>
            <div class="grid block" data-slot="columns" style="--cols:4">
              ${list(cols, ([h, p], i) => `<div class="col"><div class="n">${String(i + 1).padStart(2, "0")}</div><h3>${escapeHtml(h)}</h3><p>${escapeHtml(p)}</p></div>`)}
            </div>
          </div>
          ${chrome(paths, "16")}
        </div>`;
    },
  },
  {
    id: "card-grid-icons",
    layoutId: "card-grid-icons",
    canonical: true,
    metaTitle: "17, Card grid — icons",
    code: ".slide.cards-slide.has-icons",
    slideClass: "slide cards-slide has-icons",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "lede", "cards", "footer", "logo"],
    description: "White cards with an optional line icon, a Medium title, and body copy. Card count is flexible via style=\"--cols:N\".",
    preview: {
      label: "WHAT IT DELIVERS",
      title: "Built for regulated work.",
      lede: "Three capabilities that show up across every long-running engagement.",
      cards: ["End-to-end encryption", "EU data sovereignty", "Backup communication"],
    },
    render(paths) {
      const cards = [
        ["End-to-end encryption", "Every message and file is protected in transit. Only intended recipients can read it."],
        ["EU data sovereignty", "Hosted in the EU and GDPR aligned. No data leaves European jurisdiction."],
        ["Backup communication", "An independent channel that stays available when primary systems fail."],
      ];
      return `
        <div class="slide-inner">
          ${label("WHAT IT DELIVERS")}
          <div class="flow">
            <h2 data-slot="title">Built for regulated work.</h2>
            <p class="lede" data-slot="lede">Three capabilities that show up across every long-running engagement.</p>
            <div class="grid block" data-slot="cards" style="--cols:3">
              ${list(cards, ([h, p]) => `<div class="card"><div class="ico">${lineIcon()}</div><h3>${escapeHtml(h)}</h3><p>${escapeHtml(p)}</p></div>`)}
            </div>
          </div>
          ${chrome(paths, "17")}
        </div>`;
    },
  },
  {
    id: "split-content",
    layoutId: "split-content",
    canonical: true,
    metaTitle: "18, Content + image",
    code: ".slide.split",
    slideClass: "slide split",
    background: "light",
    usesHostedPhotography: true,
    slots: ["label", "title", "lede", "bullets", "photo", "footer", "logo"],
    description: "Content on the left (lede plus an orange-dash list), a rounded image bleeding down the right.",
    preview: {
      label: "APPROACH",
      title: "Production-shaped from week one.",
      lede: "We replace legacy systems without taking down the ability to operate.",
      bullets: ["A real path through the regulator-facing audit trail", "Observability and runbooks wired in early", "Your SREs on rotation before handover"],
      image: "trifork-aarhus-2.jpg",
    },
    render(paths) {
      const items = [
        "A production slice ships in four weeks: one instrument type, end to end, on the new platform.",
        "Observability, runbook ownership, and key rotation are forced to the surface early, not late.",
        "By handover, your own SREs have been on rotation alongside our team for weeks.",
      ];
      return `
        <div class="slide-inner">
          ${label("APPROACH")}
          <div class="flow">
            <h2 data-slot="title">Production-shaped from week one.</h2>
            <div class="body block">
              <p class="lede" data-slot="lede">We replace legacy systems without taking down the ability to operate in any of twelve currencies.</p>
              <ul class="dash-list" data-slot="bullets">
                ${list(items, (t) => `<li><span class="dash"></span><span>${escapeHtml(t)}</span></li>`)}
              </ul>
            </div>
          </div>
          ${photo(paths, "trifork-aarhus-2.jpg", "figure")}
          ${chrome(paths, "18")}
        </div>`;
    },
  },
  {
    id: "split-image",
    layoutId: "split-image",
    canonical: true,
    metaTitle: "19, Image + content",
    code: ".slide.split.is-reversed",
    slideClass: "slide split is-reversed",
    background: "light",
    usesHostedPhotography: true,
    slots: ["photo", "label", "title", "lede", "bullets", "footer", "logo"],
    description: "Mirror of content + image: a rounded image bleeds down the left, content sits on the right.",
    preview: {
      label: "OUTCOMES",
      title: "Communication that gets things done.",
      lede: "From first message to full accountability.",
      bullets: ["Reduce compliance risk with tracked, acknowledged workflows", "Stay aligned during outages on an independent channel", "Maintain full audit trails on every message that matters"],
      image: "trifork-aarhus-4.jpg",
    },
    render(paths) {
      const items = [
        "Reduce compliance risk by distributing policies through tracked, acknowledged workflows.",
        "Keep teams aligned during outages with an independent, always-available backup channel.",
        "Maintain full audit trails on who received, read, and confirmed every message that matters.",
      ];
      return `
        <div class="slide-inner">
          ${photo(paths, "trifork-aarhus-4.jpg", "figure")}
          ${label("OUTCOMES")}
          <div class="flow">
            <h2 data-slot="title">Communication that gets things done.</h2>
            <div class="body block">
              <p class="lede" data-slot="lede">From first message to full accountability, structured execution, not just chat.</p>
              <ul class="dash-list" data-slot="bullets">
                ${list(items, (t) => `<li><span class="dash"></span><span>${escapeHtml(t)}</span></li>`)}
              </ul>
            </div>
          </div>
          ${chrome(paths, "19")}
        </div>`;
    },
  },
  {
    id: "title-content",
    layoutId: "title-content",
    canonical: true,
    metaTitle: "20, Title + content",
    code: ".slide.title-content",
    slideClass: "slide title-content",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "title", "body", "footer", "logo"],
    description: "A large title held on the left against running body copy on the right. For a single substantive point with explanation.",
    preview: {
      label: "CONTEXT",
      title: "Why partition tolerance, and what it cost us.",
      paragraphs: ["The legacy engine had run unchanged for eleven years.", "We chose availability over a tighter consistency model — negotiated with the operations desk first."],
    },
    render(paths) {
      return `
        <div class="slide-inner">
          ${label("CONTEXT")}
          <h2 data-slot="title">Why partition tolerance, and what it cost us.</h2>
          <div class="body" data-slot="body">
            <p>The legacy engine had run unchanged for eleven years; every change had become a quarterly project. The brief was to replace it without taking down the bank's ability to settle.</p>
            <p>We chose partition tolerance over a tighter consistency model. The trade-off, eventual consistency on read paths, was negotiated with the operations desk before the first line of code.</p>
          </div>
          ${chrome(paths, "20")}
        </div>`;
    },
  },
  {
    id: "statement",
    layoutId: "statement",
    canonical: true,
    metaTitle: "21, Large statement",
    code: ".slide.statement",
    slideClass: "slide statement",
    background: "light",
    usesHostedPhotography: false,
    slots: ["label", "statement", "lede", "footer", "logo"],
    description: "A single centred statement with a supporting line. The one layout where text is centred.",
    preview: {
      label: "POINT OF VIEW",
      title: "Software that ships, then keeps shipping.",
      lede: "The only kind of engagement that survives a regulator's stress test.",
    },
    render(paths) {
      return `
        <div class="slide-inner">
          ${label("POINT OF VIEW")}
          <div class="block">
            <h2 data-slot="statement">Software that ships, then keeps shipping.</h2>
            <p class="lede" data-slot="lede">The only kind of engagement that survives a regulator's stress test.</p>
          </div>
          ${chrome(paths, "21")}
        </div>`;
    },
  },
  {
    id: "agenda-list",
    layoutId: "agenda-list",
    canonical: true,
    metaTitle: "22, Agenda — list",
    code: ".slide.agenda-list",
    slideClass: "slide agenda-list",
    background: "light",
    usesHostedPhotography: false,
    slots: ["agendaItems", "footer", "logo"],
    description: "A larger, header-free agenda: orange step numbers beside section titles, filling the slide. No rules.",
    preview: {
      items: ["Where we started", "Architecture", "Migration", "Operating model", "Outcomes"],
    },
    render(paths) {
      const items = [
        "Where we started, the legacy settlement engine",
        "Architecture: distributed by design",
        "Migration: the four-week production slice",
        "Operating model and handover",
        "Outcomes and what we'd do differently",
      ];
      return `
        <div class="slide-inner">
          <ol data-slot="agendaItems">
            ${list(items, (t, i) => `<li><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${escapeHtml(t)}</span></li>`)}
          </ol>
          ${chrome(paths, "22")}
        </div>`;
    },
  },
  {
    id: "closing",
    layoutId: "closing",
    canonical: true,
    metaTitle: "23, Closing",
    code: ".slide.closing",
    slideClass: "slide closing on-dark",
    background: "dark",
    usesHostedPhotography: true,
    slots: ["photo", "title", "role", "name", "contact", "logo"],
    description: "Photo-backed thank-you slide with contact details and bottom-right wordmark.",
    preview: { title: "Thank you.", image: "trifork-aarhus-2.jpg", role: "PARTNER", name: "Anna Bjerg" },
    render(paths) {
      return `
        <div class="slide-inner">
          ${photo(paths, "trifork-aarhus-2.jpg", "photo-bg", true)}
          <h1 data-slot="title">Thank you.</h1>
          <div class="person" data-slot="contact">
            <div class="role" data-slot="role">PARTNER</div>
            <div class="name" data-slot="name">Anna Bjerg</div>
            <div class="contact"><span>anna.bjerg@trifork.com</span><span>+45 12 34 56 78</span></div>
          </div>
          ${logo(paths, true)}
        </div>`;
    },
  },
  {
    id: "closing-logo",
    layoutId: "closing-logo",
    canonical: true,
    metaTitle: "23b, Closing, logo only",
    code: ".slide.closing-logo",
    slideClass: "slide closing-logo on-dark",
    background: "dark",
    usesHostedPhotography: true,
    slots: ["photo", "logo"],
    description: "Photo-backed final slide with centred negative Trifork wordmark.",
    preview: { image: "trifork-aarhus-2.jpg" },
    render(paths) {
      return `
        <div class="slide-inner">
          ${photo(paths, "trifork-aarhus-2.jpg", "photo-bg", true)}
          <div class="mark" data-slot="logo"><img src="${escapeAttr(paths.logo(LOGO_LIGHT))}" alt="Trifork"></div>
        </div>`;
    },
  },
];

export const canonicalSlideTemplates = slideTemplates.filter((template) => template.canonical);

export function getSlideTemplate(id) {
  const template = slideTemplates.find((item) => item.id === id);
  if (!template) throw new Error(`Unknown slide template: ${id}`);
  return template;
}

export function renderSlideHtml(templateOrId, paths = webSlideAssetPaths()) {
  const template = typeof templateOrId === "string" ? getSlideTemplate(templateOrId) : templateOrId;
  const inner = template.render(paths).trim();
  return `<div class="${escapeAttr(template.slideClass)}" data-template-id="${escapeAttr(template.id)}" data-layout-id="${escapeAttr(template.layoutId)}">${inner}</div>`;
}

export function renderSlideDocument(templateOrId, paths = hostedSlideAssetPaths()) {
  const template = typeof templateOrId === "string" ? getSlideTemplate(templateOrId) : templateOrId;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=${WIDTH}, initial-scale=1">
  <title>Trifork slide template: ${escapeHtml(template.id)}</title>
  <link rel="stylesheet" href="${escapeAttr(paths.tokensHref)}">
  <link rel="stylesheet" href="${escapeAttr(paths.templateCssHref)}">
</head>
<body class="slide-template-document">
  <main class="slide-kit-page" aria-label="Trifork slide template ${escapeAttr(template.id)}">
    ${renderSlideHtml(template, paths)}
  </main>
</body>
</html>`;
}

export function slideTemplateManifest(site = HOSTED_SITE) {
  const base = cleanBase(site);
  return {
    generatedFrom: "content/slide-templates.mjs",
    updated: "2026-06-09",
    canvas: { width: WIDTH, height: HEIGHT, outerMargin: 80 },
    css: `${base}/templates/slides/trifork-slide.css`,
    rule: "Start from these templates. Preserve the structure and CSS. Replace only named data-slot content.",
    templates: slideTemplates.map((template) => ({
      id: template.id,
      layoutId: template.layoutId,
      canonical: template.canonical,
      title: template.metaTitle,
      code: template.code,
      background: template.background,
      description: template.description,
      slots: template.slots,
      usesHostedPhotography: template.usesHostedPhotography,
      offlineFallback: template.usesHostedPhotography
        ? "Large photography is hosted only. If hosted images cannot load, keep the layout, logo, typography, and ink or light background."
        : "Fully usable offline with bundled tokens, logos, and CSS.",
      templateUrl: `${base}/templates/slides/${template.id}.html`,
      previewUrl: `${base}/visuals/slide-kit/${template.id}.png`,
    })),
  };
}

function wrapLines(text, maxChars) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function textBlock(text, x, y, { size, fill = C.ink, weight = 400, lineHeight = 1.15, maxChars = 28, maxLines = 4 }) {
  const lines = wrapLines(text, maxChars).slice(0, maxLines);
  return `<text x="${x}" y="${y}" font-family="Poppins, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">
    ${lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : size * lineHeight}">${escapeXml(line)}</tspan>`).join("")}
  </text>`;
}

function rect(x, y, w, h, fill, options = {}) {
  const extra = attrs({
    rx: options.rx,
    opacity: options.opacity,
    stroke: options.stroke,
    "stroke-width": options.strokeWidth,
  });
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"${extra ? ` ${extra}` : ""}/>`;
}

function line(x1, y1, x2, y2, stroke = C.blue200, width = 2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}"/>`;
}

function svgImage(assets, file, x, y, w, h, options = {}) {
  const href = assets?.image?.(file);
  if (!href) return rect(x, y, w, h, options.fallback || C.ink, { rx: options.rx || 0 });
  const id = `clip-${file.replace(/[^a-z0-9]/gi, "-")}-${x}-${y}`;
  const clip = options.rx
    ? `<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${options.rx}"/></clipPath>`
    : "";
  const clipAttr = options.rx ? ` clip-path="url(#${id})"` : "";
  return `${clip}<image href="${escapeAttr(href)}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice"${clipAttr}/>`;
}

function svgLogo(assets, dark, x, y, w) {
  const href = assets?.logo?.(dark ? "light" : "dark");
  if (!href) return rect(x, y, w, 24, dark ? C.white : C.ink, { opacity: 0.9 });
  return `<image href="${escapeAttr(href)}" x="${x}" y="${y}" width="${w}" height="${Math.round(w / 8.2)}" preserveAspectRatio="xMidYMid meet"/>`;
}

function footer(page, dark = false) {
  const fill = dark ? "rgba(255,255,255,0.62)" : C.ink800;
  return `${textBlock(`${page} / ${DECK}`, 80, 1012, { size: 18, fill, maxChars: 40, maxLines: 1 })}`;
}

function standardChrome(assets, page, dark = false) {
  return `${footer(page, dark)}${svgLogo(assets, dark, 1660, 982, 180)}`;
}

function baseSvg(bg, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="${bg}"/>
    ${body}
  </svg>`;
}

export function renderSlidePreviewSvg(templateOrId, assets = {}) {
  const template = typeof templateOrId === "string" ? getSlideTemplate(templateOrId) : templateOrId;
  const p = template.preview || {};
  const dark = template.background === "dark";
  const bg = dark ? C.ink : C.blue100;
  const titleFill = dark ? C.white : C.ink;
  const bodyFill = dark ? "rgba(255,255,255,0.82)" : C.ink800;
  const rule = dark ? "rgba(255,255,255,0.3)" : C.blue200;

  switch (template.id) {
    case "cover-card":
      return baseSvg(C.blue100, `
        ${svgImage(assets, p.image, 64, 64, 1792, 690, { rx: 76, fallback: C.ink })}
        ${rect(64, 64, 1792, 690, C.ink, { rx: 76, opacity: 0.9 })}
        ${svgLogo(assets, true, 1570, 138, 210)}
        ${textBlock(p.title, 140, 600, { size: 132, fill: C.white, maxChars: 26, maxLines: 2, lineHeight: 1.02 })}
        ${textBlock("Capital markets / 2025", 80, 1010, { size: 18, fill: C.ink800, maxChars: 30, maxLines: 1 })}
        ${textBlock(p.lede, 1035, 960, { size: 30, fill: C.ink800, maxChars: 50, maxLines: 3, lineHeight: 1.3 })}
      `);
    case "cover-split":
      return baseSvg(C.blue100, `
        ${svgLogo(assets, false, 80, 80, 190)}
        ${textBlock(p.label, 80, 390, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 510, { size: 92, fill: C.ink, maxChars: 19, maxLines: 3, lineHeight: 1.06 })}
        ${textBlock(p.lede, 145, 800, { size: 31, fill: C.ink800, maxChars: 36, maxLines: 3 })}
        ${svgImage(assets, p.image, 976, 0, 944, 1000, { rx: 0, fallback: C.ink })}
        ${textBlock("Capital markets / 2025", 80, 1010, { size: 18, fill: C.ink800, maxChars: 30, maxLines: 1 })}
      `);
    case "separator":
    case "separator-dark":
    case "separator-photo": {
      const photo = template.id === "separator-photo"
        ? `${svgImage(assets, p.image, 0, 0, WIDTH, HEIGHT, { fallback: C.ink })}${rect(0, 0, WIDTH, HEIGHT, C.ink, { opacity: 0.9 })}`
        : "";
      return baseSvg(bg, `
        ${photo}
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 535, { size: 136, fill: titleFill, maxChars: 24, maxLines: 2, lineHeight: 1 })}
        ${textBlock(p.lede, 80, 710, { size: 31, fill: bodyFill, maxChars: 56, maxLines: 2 })}
        ${standardChrome(assets, "03", dark)}
      `);
    }
    case "agenda":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 235, { size: 78, fill: C.ink, maxChars: 20, maxLines: 2 })}
        ${list(p.items, (item, index) => `${line(920, 210 + index * 96, 1760, 210 + index * 96, C.blue200, 2)}${textBlock(String(index + 1).padStart(2, "0"), 920, 270 + index * 96, { size: 34, fill: C.orange, maxChars: 2, maxLines: 1 })}${textBlock(item, 1035, 270 + index * 96, { size: 34, fill: C.ink, maxChars: 32, maxLines: 1 })}`)}
        ${line(920, 210 + p.items.length * 96, 1760, 210 + p.items.length * 96, C.blue200, 2)}
        ${standardChrome(assets, "04")}
      `);
    case "section-start":
      return baseSvg(C.ink, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.number, 80, 360, { size: 220, fill: C.orange, maxChars: 2, maxLines: 1 })}
        ${textBlock(p.title, 80, 660, { size: 92, fill: C.white, maxChars: 34, maxLines: 2, lineHeight: 1.05 })}
        ${textBlock(p.lede, 145, 820, { size: 31, fill: bodyFill, maxChars: 58, maxLines: 2 })}
        ${standardChrome(assets, "05", true)}
      `);
    case "title-bullets":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 34, maxLines: 2 })}
        ${textBlock(p.lede, 145, 360, { size: 31, fill: C.ink800, maxChars: 58, maxLines: 2 })}
        ${list(p.bullets, (item, index) => `${line(145, 475 + index * 88, 205, 475 + index * 88, C.orange, 4)}${textBlock(item, 240, 485 + index * 88, { size: 30, fill: C.ink800, maxChars: 66, maxLines: 1 })}`)}
        ${standardChrome(assets, "06")}
      `);
    case "text-slide":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 34, maxLines: 2 })}
        ${list(p.paragraphs, (item, index) => textBlock(item, 145, 350 + index * 118, { size: 28, fill: C.ink800, maxChars: 78, maxLines: 2, lineHeight: 1.32 }))}
        ${standardChrome(assets, "07")}
      `);
    case "image-slide":
      return baseSvg(C.ink, `
        ${svgImage(assets, p.image, 0, 0, WIDTH, HEIGHT, { fallback: C.ink })}
        ${rect(0, 0, WIDTH, HEIGHT, C.ink, { opacity: 0.9 })}
        ${textBlock(p.title, 80, 880, { size: 42, fill: C.white, maxChars: 70, maxLines: 2 })}
        ${standardChrome(assets, "08", true)}
      `);
    case "numeric-callouts":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 2 })}
        ${textBlock(p.lede, 145, 360, { size: 31, fill: C.ink800, maxChars: 58, maxLines: 2 })}
        ${textBlock("IMPORTANT NUMBERS", 145, 560, { size: 18, fill: C.orange, weight: 500, maxChars: 30, maxLines: 1 })}
        ${list(p.metrics, ([number, text], index) => `${textBlock(number, 145 + index * 390, 690, { size: 90, fill: C.ink, maxChars: 8, maxLines: 1 })}${textBlock(text, 145 + index * 390, 750, { size: 22, fill: C.ink800, maxChars: 24, maxLines: 3 })}`)}
        ${standardChrome(assets, "09")}
      `);
    case "two-columns":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 2 })}
        ${textBlock(p.lede, 145, 360, { size: 31, fill: C.ink800, maxChars: 60, maxLines: 2 })}
        ${textBlock(p.columns[0], 145, 535, { size: 34, fill: C.ink, weight: 500, maxChars: 28, maxLines: 1 })}
        ${textBlock("Every service was multi-region from day one. Cross-region failover ran continuously.", 145, 610, { size: 25, fill: C.ink800, maxChars: 44, maxLines: 3 })}
        ${textBlock(p.columns[1], 930, 535, { size: 34, fill: C.ink, weight: 500, maxChars: 28, maxLines: 1 })}
        ${textBlock("Observability, runbooks, and on-call tooling were part of the brief.", 930, 610, { size: 25, fill: C.ink800, maxChars: 44, maxLines: 3 })}
        ${standardChrome(assets, "10")}
      `);
    case "card-grid":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 2 })}
        ${list(p.cards, (card, index) => {
          const col = index % 3;
          const row = Math.floor(index / 3);
          const x = 80 + col * 590;
          const y = 445 + row * 195;
          return `${rect(x, y, 535, 150, C.white, { rx: 20 })}${textBlock(card, x + 30, y + 55, { size: 28, fill: C.ink, weight: 500, maxChars: 24, maxLines: 1 })}${textBlock("Long-running engineering capability with clear ownership.", x + 30, y + 100, { size: 20, fill: C.ink800, maxChars: 42, maxLines: 2 })}`;
        })}
        ${standardChrome(assets, "11")}
      `);
    case "quote":
    case "quote-long":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 22, maxLines: 1 })}
        ${textBlock(`"${p.title}"`, 80, 560, { size: template.id === "quote-long" ? 55 : 66, fill: C.ink, maxChars: template.id === "quote-long" ? 54 : 46, maxLines: 4, lineHeight: 1.22 })}
        ${svgImage(assets, p.image, 80, 860, 58, 58, { rx: 29, fallback: C.blue200 })}
        ${textBlock("Mette Lindholm", 162, 890, { size: 23, fill: C.ink, weight: 500, maxChars: 24, maxLines: 1 })}
        ${textBlock("Head of Platform, Nordic Bank", 162, 925, { size: 19, fill: C.ink800, maxChars: 40, maxLines: 1 })}
        ${standardChrome(assets, "12")}
      `);
    case "customer-case":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 2 })}
        ${svgImage(assets, p.image, 80, 330, 805, 604, { rx: 22, fallback: C.ink })}
        ${list(p.rows, (row, index) => `${line(960, 350 + index * 95, 1760, 350 + index * 95, C.blue200)}${textBlock(row.toUpperCase(), 960, 398 + index * 95, { size: 16, fill: C.ink500, weight: 500, maxChars: 14, maxLines: 1 })}${textBlock(index === 0 ? "Capital markets" : index === 1 ? "14 months" : index === 2 ? "Kubernetes, Kafka" : "Engine replaced", 1120, 402 + index * 95, { size: 28, fill: C.ink, maxChars: 34, maxLines: 1 })}`)}
        ${line(960, 350 + p.rows.length * 95, 1760, 350 + p.rows.length * 95, C.blue200)}
        ${textBlock("A long engagement with a regulated customer. The platform now runs without us.", 960, 795, { size: 27, fill: C.ink800, maxChars: 52, maxLines: 3 })}
        ${standardChrome(assets, "13")}
      `);
    case "closing":
      return baseSvg(C.ink, `
        ${svgImage(assets, p.image, 0, 0, WIDTH, HEIGHT, { fallback: C.ink })}
        ${rect(0, 0, WIDTH, HEIGHT, C.ink, { opacity: 0.9 })}
        ${textBlock(p.title, 80, 570, { size: 150, fill: C.white, maxChars: 18, maxLines: 1 })}
        ${textBlock(p.role, 80, 810, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.name, 80, 865, { size: 36, fill: C.white, maxChars: 24, maxLines: 1 })}
        ${textBlock("anna.bjerg@trifork.com   +45 12 34 56 78", 80, 925, { size: 22, fill: "rgba(255,255,255,0.7)", maxChars: 60, maxLines: 1 })}
        ${svgLogo(assets, true, 1660, 982, 180)}
      `);
    case "closing-logo":
      return baseSvg(C.ink, `
        ${svgImage(assets, p.image, 0, 0, WIDTH, HEIGHT, { fallback: C.ink })}
        ${rect(0, 0, WIDTH, HEIGHT, C.ink, { opacity: 0.9 })}
        ${svgLogo(assets, true, 820, 506, 280)}
      `);
    case "columns-icons":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 1 })}
        ${textBlock(p.lede, 145, 360, { size: 31, fill: C.ink800, maxChars: 70, maxLines: 2 })}
        ${list(p.columns, (h, i) => {
          const x = 145 + i * 430;
          return `<circle cx="${x + 24}" cy="600" r="22" fill="none" stroke="${C.blue900}" stroke-width="3"/>${textBlock(h, x, 705, { size: 30, fill: C.ink, weight: 500, maxChars: 18, maxLines: 2 })}${textBlock("Long-running engineering capability with clear ownership.", x, 775, { size: 20, fill: C.ink800, maxChars: 26, maxLines: 4 })}`;
        })}
        ${standardChrome(assets, "14")}
      `);
    case "columns-images":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 1 })}
        ${textBlock(p.lede, 145, 360, { size: 31, fill: C.ink800, maxChars: 70, maxLines: 2 })}
        ${list(p.columns, (h, i) => {
          const x = 145 + i * 430;
          const file = ["trifork-aarhus-1.jpg", "trifork-people-1.jpg", "trifork-aarhus-3.jpg", "trifork-stock-1.jpg"][i];
          return `${svgImage(assets, file, x, 560, 380, 250, { rx: 16, fallback: C.blue200 })}${textBlock(h, x, 870, { size: 30, fill: C.ink, weight: 500, maxChars: 18, maxLines: 1 })}${textBlock("Production systems for regulated industries.", x, 915, { size: 20, fill: C.ink800, maxChars: 26, maxLines: 3 })}`;
        })}
        ${standardChrome(assets, "15")}
      `);
    case "columns-numbered":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 1 })}
        ${list(p.columns, (h, i) => {
          const x = 145 + i * 430;
          return `${textBlock(String(i + 1).padStart(2, "0"), x, 650, { size: 92, fill: C.orange, maxChars: 2, maxLines: 1 })}${textBlock(h, x, 730, { size: 30, fill: C.ink, weight: 500, maxChars: 18, maxLines: 1 })}${textBlock("Body copy describing the step.", x, 778, { size: 20, fill: C.ink800, maxChars: 26, maxLines: 3 })}`;
        })}
        ${standardChrome(assets, "16")}
      `);
    case "card-grid-icons":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 78, fill: C.ink, maxChars: 30, maxLines: 1 })}
        ${textBlock(p.lede, 145, 360, { size: 31, fill: C.ink800, maxChars: 64, maxLines: 2 })}
        ${list(p.cards, (c, i) => {
          const x = 80 + i * 600;
          const y = 445;
          return `${rect(x, y, 545, 455, C.white, { rx: 24 })}<circle cx="${x + 62}" cy="${y + 82}" r="26" fill="none" stroke="${C.blue900}" stroke-width="3"/>${textBlock(c, x + 42, y + 210, { size: 30, fill: C.ink, weight: 500, maxChars: 22, maxLines: 1 })}${textBlock("Capability description for this card.", x + 42, y + 258, { size: 22, fill: C.ink800, maxChars: 34, maxLines: 4 })}`;
        })}
        ${standardChrome(assets, "17")}
      `);
    case "split-content":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 250, { size: 72, fill: C.ink, maxChars: 18, maxLines: 2 })}
        ${textBlock(p.lede, 145, 470, { size: 30, fill: C.ink800, maxChars: 34, maxLines: 2 })}
        ${list(p.bullets, (b, i) => `${line(145, 590 + i * 120, 205, 590 + i * 120, C.orange, 4)}${textBlock(b, 240, 600 + i * 120, { size: 26, fill: C.ink800, maxChars: 34, maxLines: 2 })}`)}
        ${svgImage(assets, p.image, 1010, 80, 830, 920, { rx: 28, fallback: C.blue200 })}
        ${standardChrome(assets, "18")}
      `);
    case "split-image":
      return baseSvg(C.blue100, `
        ${svgImage(assets, p.image, 80, 80, 830, 920, { rx: 28, fallback: C.blue200 })}
        ${textBlock(p.label, 1010, 250, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 1010, 345, { size: 64, fill: C.ink, maxChars: 22, maxLines: 2 })}
        ${textBlock(p.lede, 1010, 540, { size: 28, fill: C.ink800, maxChars: 32, maxLines: 2 })}
        ${list(p.bullets, (b, i) => `${line(1010, 650 + i * 120, 1070, 650 + i * 120, C.orange, 4)}${textBlock(b, 1105, 660 + i * 120, { size: 24, fill: C.ink800, maxChars: 34, maxLines: 2 })}`)}
        ${standardChrome(assets, "19")}
      `);
    case "title-content":
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${textBlock(p.title, 80, 320, { size: 92, fill: C.ink, maxChars: 16, maxLines: 3, lineHeight: 1.04 })}
        ${list(p.paragraphs, (t, i) => textBlock(t, 1010, 270 + i * 280, { size: 28, fill: C.ink800, maxChars: 42, maxLines: 6, lineHeight: 1.35 }))}
        ${standardChrome(assets, "20")}
      `);
    case "statement": {
      const titleLines = wrapLines(p.title, 24);
      const ledeLines = wrapLines(p.lede, 52);
      const titleTop = 470;
      const titleSvg = `<text x="960" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="78" font-weight="400" fill="${C.ink}">${titleLines.map((l, i) => `<tspan x="960" y="${titleTop + i * 88}">${escapeXml(l)}</tspan>`).join("")}</text>`;
      const ledeTop = titleTop + titleLines.length * 88 + 36;
      const ledeSvg = `<text x="960" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="30" font-weight="400" fill="${C.ink800}">${ledeLines.map((l, i) => `<tspan x="960" y="${ledeTop + i * 42}">${escapeXml(l)}</tspan>`).join("")}</text>`;
      return baseSvg(C.blue100, `
        ${textBlock(p.label, 80, 96, { size: 18, fill: C.orange, weight: 500, maxChars: 20, maxLines: 1 })}
        ${titleSvg}
        ${ledeSvg}
        ${standardChrome(assets, "21")}
      `);
    }
    case "agenda-list":
      return baseSvg(C.blue100, `
        ${list(p.items, (t, i) => `${textBlock(String(i + 1).padStart(2, "0"), 80, 240 + i * 135, { size: 26, fill: C.orange, maxChars: 2, maxLines: 1 })}${textBlock(t, 180, 255 + i * 135, { size: 58, fill: C.ink, maxChars: 40, maxLines: 1 })}`)}
        ${standardChrome(assets, "22")}
      `);
    default:
      return baseSvg(bg, `${textBlock(template.metaTitle, 80, 180, { size: 72, fill: titleFill, maxChars: 36 })}${standardChrome(assets, "00", dark)}`);
  }
}

export function slideTemplateCss(pageCss) {
  return `${pageCss.trim()}

/* Standalone 1920 x 1080 template document mode. */
.slide-template-document {
  margin: 0;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: var(--tf-ink-100);
}

.slide-template-document .slide-kit-page {
  width: 1920px;
  min-width: 1920px;
  max-width: none;
  margin: 0;
  padding: 0;
}

.slide-template-document .slide-kit-page .slide {
  width: 1920px;
  height: 1080px;
  border-radius: 0;
  box-shadow: none;
}
`;
}

export const slideTemplateCommon = common;
