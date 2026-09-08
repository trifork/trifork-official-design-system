import PageHeader from "../_components/PageHeader";
import "./iconography.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

export const metadata = {
  title: "Iconography · Trifork Design System",
  description:
    "Single-stroke, monochromatic, geometric icons drawn to one stroke weight on a 24×24 grid.",
};

const ICONS = [
  { file: "ai.svg", name: "AI" },
  { file: "arrow.svg", name: "Direction" },
  { file: "box.svg", name: "Package" },
  { file: "build.svg", name: "Build" },
  { file: "cloud-network.svg", name: "Cloud network" },
  { file: "compass.svg", name: "Compass" },
  { file: "deal.svg", name: "Deal" },
  { file: "graph.svg", name: "Graph" },
  { file: "lightbulb.svg", name: "Idea" },
  { file: "mobile-fintech.svg", name: "Mobile fintech" },
  { file: "rocket.svg", name: "Launch" },
  { file: "run.svg", name: "Run" },
  { file: "settings.svg", name: "Settings" },
  { file: "smart-home.svg", name: "Smart home" },
  { file: "software.svg", name: "Software" },
  { file: "sprint.svg", name: "Sprint" },
  { file: "switch.svg", name: "Switch" },
  { file: "trophy.svg", name: "Outcome" },
  { file: "watch.svg", name: "Watch" },
];

export default function IconographyPage() {
  return (
    <>
      <PageHeader label="ICONOGRAPHY" />
      <div className="tf-page iconography-page">
        <section className="tf-section">
          <h2 className="tf-section-title">A line, evenly drawn.</h2>
          <p className="lead">
            Single-stroke, monochromatic, geometric. Every icon is drawn to <b>one stroke weight</b> on a 24 × 24 grid — the library is curated so apparent line weight stays constant across the set, regardless of subject. Icons are set in <b>Neutral 950</b>, never tinted with the orange accent.
          </p>

          <p className="lead" style={{ fontSize: "15px", color: "var(--tf-text-muted)", borderLeft: "2px solid var(--tf-orange-500)", paddingLeft: "16px", maxWidth: "820px" }}>
            <b>A note on source.</b> The Trifork icon system is built on <b>Streamline 3.0 Regular Line</b>. Streamline is a paid commercial library — its SVGs cannot be embedded directly in this design system file, so the specimens below use <b>Lucide</b> stand-ins (ISC licensed, drawn to the same 24 × 24 grid, 2 px stroke, round caps and joins). When you author a real deck, replace each tile with its Streamline equivalent; the geometry rules below apply identically to both.
          </p>

          <div className="weight-callout">
            <div className="number">2 px</div>
            <p><b>The standard.</b> Streamline 3.0 Regular Line is drawn to a 2 px stroke on a 24 × 24 grid with round caps and round joins. The Lucide stand-ins shown here use the same construction — that single rule is what keeps stroke weight uniform across the library, no matter the subject.</p>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">The library — specimen set</h2>
          <p className="lead">
            Nineteen Lucide stand-ins, all drawn on a 24 × 24 grid at 2 px stroke. Every tile renders at the same display size, with the same caps and joins, so apparent weight stays constant across the set. In production decks, swap each for its Streamline 3.0 Regular Line equivalent.
          </p>

          <div className="grid">
            {ICONS.map((icon) => (
              <div key={icon.file} className="tile">
                <div className="icon">
                  <img src={`${basePath}/assets/icons/${icon.file}`} alt="" />
                </div>
                <div className="name">{icon.name}</div>
              </div>
            ))}
            <div className="tile" style={{ background: "transparent", border: "1px dashed var(--tf-rule-strong)" }}>
              <div className="icon" style={{ opacity: 0.35, fontSize: "28px", color: "var(--tf-text-muted)" }}>+</div>
              <div className="name" style={{ color: "var(--tf-text-muted)" }}>Request an icon</div>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Sizes</h2>
          <p className="lead">Render at 64 px on slides, 32 px in tables, 24 px in inline UI. Below 24 px, prefer text. Stroke weight reads consistent across all sizes because the artboard scales, not the line.</p>
          <div className="sizes">
            <div className="size-demo">
              <img src={`${basePath}/assets/icons/ai.svg`} width="96" height="96" alt="" />
              <small>96 · hero</small>
            </div>
            <div className="size-demo">
              <img src={`${basePath}/assets/icons/ai.svg`} width="64" height="64" alt="" />
              <small>64 · slide</small>
            </div>
            <div className="size-demo">
              <img src={`${basePath}/assets/icons/ai.svg`} width="48" height="48" alt="" />
              <small>48</small>
            </div>
            <div className="size-demo">
              <img src={`${basePath}/assets/icons/ai.svg`} width="32" height="32" alt="" />
              <small>32 · table</small>
            </div>
            <div className="size-demo">
              <img src={`${basePath}/assets/icons/ai.svg`} width="24" height="24" alt="" />
              <small>24 · UI</small>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Usage</h2>
          <div className="pair">
            <div>
              <h4 style={{ color: "var(--tf-accent)" }}>Do</h4>
              <div className="demo">
                <img src={`${basePath}/assets/icons/ai.svg`} alt="" />
                <div className="text">Distributed by design</div>
              </div>
              <p>One icon, one idea. Set in Neutral 950, paired with a short statement at H4 size. Stroke weight matches the rest of the library.</p>
            </div>
            <div>
              <h4 style={{ color: "var(--tf-ink-500)" }}>Don’t</h4>
              <div className="demo">
                <img src={`${basePath}/assets/icons/ai.svg`} alt="" style={{ filter: "invert(48%) sepia(99%) saturate(2654%) hue-rotate(2deg) brightness(105%) contrast(105%)" }} />
                <div className="text">🚀 Distributed by design!</div>
              </div>
              <p>Don’t tint icons with the orange accent. Don’t pair icons with emoji. Don’t mix in icons from another library — their stroke weight will not match.</p>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Drawing new icons</h2>
          <ul className="tf-body" style={{ maxWidth: "820px", paddingLeft: "20px", marginTop: 0 }}>
            <li><b>Source from Streamline 3.0 Regular Line first.</b> Trifork holds a Streamline licence; the regular-line set is the canonical source for any new icon.</li>
            <li>Drawn on a <b>24 × 24</b> grid, <b>2 px stroke</b>, round caps, round joins. Don’t mix in icons from sets with a different stroke standard — the weight will not match.</li>
            <li>No fills, no gradients, no shadows. Use <code>stroke="currentColor"</code> so colour is controlled by CSS, and set every icon in <b>Neutral 950</b>.</li>
            <li>Geometry favours an implied grid — cardinal directions, 45° diagonals, simple arcs.</li>
            <li>Choose a concept, not a literal object. “Idea” is a lightbulb; “outcome” is a trending chart; “growth” is a sparkline.</li>
            <li>Submit via pull request to <code>assets/icons/</code>. One-word filename, kebab-case.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
