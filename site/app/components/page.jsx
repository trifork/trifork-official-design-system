import PageHeader from "../_components/PageHeader";
import "./components.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

export const metadata = {
  title: "Components · Trifork Design System",
  description: "Buttons, tags, callouts, cards, quotes, lists, and slide chrome.",
};

export default function ComponentsPage() {
  return (
    <>
      <PageHeader label="COMPONENTS" />
      <div className="tf-page components-page">
        <section className="tf-section">
          <h2 className="tf-section-title">Buttons</h2>
          <p className="lead">Pill-shaped, lowercase or sentence-case. Use the orange ghost as the default, primary fill is reserved for the single most important action on a page.</p>
          <div className="specimen">
            <div className="row">
              <a className="btn btn--primary">Get in touch <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              <a className="btn btn--ghost">Download deck</a>
              <a className="btn btn--ink">Read the case</a>
              <a className="btn btn--ink-ghost">Learn more</a>
            </div>
          </div>
          <p className="meta">Variants: <b>--primary</b> (orange fill, white text, one per screen), <b>--ghost</b> (orange outline, used as default action), <b>--ink</b> (blue 900 fill on light backgrounds), <b>--ink-ghost</b> (blue 900 outline).</p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Tags & chips</h2>
          <div className="specimen">
            <div className="row">
              <span className="tag">Fintech</span>
              <span className="tag">Healthcare</span>
              <span className="tag">Aviation</span>
              <span className="tag tag--accent"><span className="dot"></span>Live</span>
              <span className="tag tag--ink">Featured</span>
            </div>
          </div>
          <p className="meta">Pills, 13 px medium. Stay below 24 px tall, they should never compete with body type for weight.</p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Numeric callouts</h2>
          <p className="lead">Big numbers carry outcomes. Set Regular weight in <b>Neutral 950</b> by default — the size does the work, the colour stays calm. Reserve <b>Orange 500</b> for one hero figure per slide, the way the wordmark dot is reserved.</p>
          <div className="specimen">
            <div className="callout-row">
              <div className="callout">
                <div className="num">14</div>
                <div className="label">Weeks to launch</div>
                <div className="desc">From kickoff to production for a regulated bank.</div>
              </div>
              <div className="callout">
                <div className="num">3×</div>
                <div className="label">Throughput gain</div>
                <div className="desc">After re-platforming on Kubernetes.</div>
              </div>
              <div className="callout">
                <div className="num">99.99</div>
                <div className="label">Uptime target met</div>
                <div className="desc">Across the last four quarters.</div>
              </div>
              <div className="callout">
                <div className="num is-accent">12</div>
                <div className="label">Countries served</div>
                <div className="desc">From a single platform team. Orange is reserved for one number per slide.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Cards</h2>
          <div className="specimen">
            <div className="card-row">
              <div className="card">
                <div className="icon"><img src={`${basePath}/assets/icons/cloud-network.svg`} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
                <h3>Distributed by design</h3>
                <p>We build systems that are partition-tolerant from day one, because regulated workloads can’t tolerate single points of failure.</p>
              </div>
              <div className="card">
                <div className="icon"><img src={`${basePath}/assets/icons/ai.svg`} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
                <h3>Applied AI, not theatre</h3>
                <p>We ship models into production where they meet real users, measured against business outcomes, not benchmarks.</p>
              </div>
              <div className="card">
                <div className="icon"><img src={`${basePath}/assets/icons/build.svg`} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
                <h3>Built to be operated</h3>
                <p>Observability, runbooks, and on-call tooling are part of the brief, not an afterthought once the platform is live.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Quote</h2>
          <p className="lead">Set in <b>Blue 900</b>, never orange. The mark is large, drawn in <b>Blue 700</b>. If we have a portrait of the speaker, set it in a 48 px circle before the name; if not, the line stands alone.</p>
          <div className="specimen">
            <div className="quote">
              <div className="mark">“</div>
              <q>Trifork’s team understood our regulatory environment from the first workshop. We shipped the first release a quarter ahead of plan.</q>
              <div className="attr">
                <div className="avatar" style={{ backgroundImage: `url('${basePath}/assets/imagery/trifork-people-1.jpg')` }}></div>
                <div className="who">
                  <b>Mette Lindholm</b>
                  <span>Head of Platform, Nordic Bank</span>
                </div>
              </div>
            </div>
          </div>
          <p className="meta">Variant without portrait: omit the <code>.avatar</code> — the name and title sit alone, no circle placeholder.</p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Numbered list</h2>
          <div className="specimen">
            <ol className="bullets">
              <li><span className="num">01</span><span className="text">Workshop the problem with the operating team, not the executive sponsor.</span></li>
              <li><span className="num">02</span><span className="text">Build the smallest production-shaped slice possible. Ship it within four weeks.</span></li>
              <li><span className="num">03</span><span className="text">Measure against the metric the business actually moves on.</span></li>
              <li><span className="num">04</span><span className="text">Hand over the runbook before the celebration.</span></li>
            </ol>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Slide chrome</h2>
          <p className="lead">The two markings that bracket every slide. Top-left is the tracked label, set in <b>Orange 500</b> following the type system’s <code>.tf-label-spaced</code> rules: 13 px Medium, 0.16em tracking, uppercase. Bottom-left holds the page number with the deck name close beside it, separated by a thin slash — the page number aligns flush with the slide’s content left edge. Small Trifork wordmark anchors the bottom-right. No dividing rules.</p>
          <div className="specimen" style={{ background: "var(--tf-blue-100)", border: "1px solid var(--tf-rule)", padding: "40px", gap: 0 }}>
            <div className="tf-label-spaced">CASE STUDY</div>
            <div style={{ flex: 1, minHeight: "180px", display: "flex", alignItems: "center", color: "var(--tf-text-muted)", fontSize: "14px" }}>— slide content —</div>
            <div className="footer-chrome">
              <div className="left">
                <span className="page">12</span>
                <span className="slash">/</span>
                <span className="deck">Capital markets · 2025</span>
              </div>
              <img src={`${basePath}/assets/logo/Trifork_logo_RGB.svg`} alt="Trifork" />
            </div>
          </div>
          <p className="meta">Page number is two characters wide and sits flush with the slide’s left content margin. The slash and deck name follow at a tight 10 px gap, reading as a single line.</p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Photo container</h2>
          <p className="lead">Photography sits in 24 px-cornered containers, full-bleed inside the frame. Keep aspect ratios honest, don’t stretch.</p>
          <div className="specimen" style={{ background: "var(--tf-white)", border: "1px solid var(--tf-rule)" }}>
            <div className="photo"><img src={`${basePath}/assets/imagery/trifork-aarhus-1.jpg`} alt="Trifork Aarhus office" /></div>
          </div>
        </section>
      </div>
    </>
  );
}
