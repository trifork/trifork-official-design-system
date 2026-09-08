import PageHeader from "../_components/PageHeader";
import "./colors.css";

export const metadata = {
  title: "Colour · Trifork Design System",
  description: "Three ramps — neutral, blue, orange — and a single accent, used sparingly.",
};

export default function ColorsPage() {
  return (
    <>
      <PageHeader label="COLOUR" />
      <div className="tf-page colors-page">
        <section className="tf-section">
          <h2 className="tf-section-title">Three ramps. One accent.</h2>
          <p className="lead">A neutral spine carries titles, body and chrome. A blue ramp gives calm, atmospheric backgrounds — never compete-with-content territory. Orange is the brand voice, used once per slide, never as wallpaper.</p>

          <div className="hero-pair">
            <div className="big ink">
              <div className="meta-row"><b>Foundation</b><span>Neutral 950</span></div>
              <div>
                <div className="name">Trifork ink</div>
                <div className="meta-row" style={{ marginTop: "8px" }}><span>#2C3A42</span><span>RGB 44 · 58 · 66</span></div>
              </div>
            </div>
            <div className="stack">
              <div className="accent">
                <div className="meta-row"><b>Accent</b><span>Orange 500</span></div>
                <div>
                  <div className="name" style={{ fontSize: "22px" }}>Trifork orange</div>
                  <div className="meta-row" style={{ marginTop: "6px" }}><span>#FF6600</span></div>
                </div>
              </div>
              <div className="canvas">
                <div className="meta-row"><b>Canvas</b><span>Blue 100</span></div>
                <div>
                  <div className="name" style={{ fontSize: "22px" }}>Sky tint</div>
                  <div className="meta-row" style={{ marginTop: "6px" }}><span>#D5E5ED</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Scales</h2>

          <div className="scale">
            <div>
              <p className="sub">11 steps</p>
              <h3>Neutral</h3>
              <p>The default voice. 950 anchors titles and ink, 800 sets body, 100/50 are rules and surfaces. Use this scale before reaching for blue.</p>
            </div>
            <div className="ramp r-11">
              <div className="sw" style={{ background: "#2C3A42", color: "#fff" }}><span className="step">950</span><span className="hex">#2C3A42</span></div>
              <div className="sw" style={{ background: "#414E55", color: "#fff" }}><span className="step">900</span><span className="hex">#414E55</span></div>
              <div className="sw" style={{ background: "#566168", color: "#fff" }}><span className="step">800</span><span className="hex">#566168</span></div>
              <div className="sw" style={{ background: "#6B757B", color: "#fff" }}><span className="step">700</span><span className="hex">#6B757B</span></div>
              <div className="sw" style={{ background: "#80898E", color: "#fff" }}><span className="step">600</span><span className="hex">#80898E</span></div>
              <div className="sw" style={{ background: "#959CA0", color: "#fff" }}><span className="step">500</span><span className="hex">#959CA0</span></div>
              <div className="sw" style={{ background: "#ABB0B3", color: "#2C3A42" }}><span className="step">400</span><span className="hex">#ABB0B3</span></div>
              <div className="sw" style={{ background: "#C0C4C6", color: "#2C3A42" }}><span className="step">300</span><span className="hex">#C0C4C6</span></div>
              <div className="sw" style={{ background: "#D5D8D9", color: "#2C3A42" }}><span className="step">200</span><span className="hex">#D5D8D9</span></div>
              <div className="sw" style={{ background: "#EAEBEC", color: "#2C3A42" }}><span className="step">100</span><span className="hex">#EAEBEC</span></div>
              <div className="sw" style={{ background: "#F4F5F6", color: "#2C3A42" }}><span className="step">50</span><span className="hex">#F4F5F6</span></div>
            </div>
          </div>

          <div className="scale">
            <div>
              <p className="sub">10 steps</p>
              <h3>Blue</h3>
              <p>Atmospheric, never primary. 100/50 are calm slide canvases; 800/900 are reserved for diagrams, technical illustrations and section starters where ink would feel too neutral.</p>
            </div>
            <div className="ramp r-10">
              <div className="sw" style={{ background: "#3C4C54", color: "#fff" }}><span className="step">900</span><span className="hex">#3C4C54</span></div>
              <div className="sw" style={{ background: "#5B717F", color: "#fff" }}><span className="step">800</span><span className="hex">#5B717F</span></div>
              <div className="sw" style={{ background: "#7997A9", color: "#fff" }}><span className="step">700</span><span className="hex">#7997A9</span></div>
              <div className="sw" style={{ background: "#88AABE", color: "#fff" }}><span className="step">600</span><span className="hex">#88AABE</span></div>
              <div className="sw" style={{ background: "#97BDD3", color: "#2C3A42" }}><span className="step">500</span><span className="hex">#97BDD3</span></div>
              <div className="sw" style={{ background: "#A1C4D7", color: "#2C3A42" }}><span className="step">400</span><span className="hex">#A1C4D7</span></div>
              <div className="sw" style={{ background: "#ACCADC", color: "#2C3A42" }}><span className="step">300</span><span className="hex">#ACCADC</span></div>
              <div className="sw" style={{ background: "#C1D7E5", color: "#2C3A42" }}><span className="step">200</span><span className="hex">#C1D7E5</span></div>
              <div className="sw" style={{ background: "#D5E5ED", color: "#2C3A42" }}><span className="step">100</span><span className="hex">#D5E5ED</span></div>
              <div className="sw" style={{ background: "#EAF2F6", color: "#2C3A42" }}><span className="step">50</span><span className="hex">#EAF2F6</span></div>
            </div>
          </div>

          <div className="scale">
            <div>
              <p className="sub">10 steps</p>
              <h3>Orange</h3>
              <p>Accent only. 500 is the brand voice — the dot in the wordmark, one number, one underline. 50/100 are permitted as soft fills behind illustration. The dark end (700–900) is for type set on orange backgrounds.</p>
            </div>
            <div className="ramp r-10">
              <div className="sw" style={{ background: "#662900", color: "#fff" }}><span className="step">900</span><span className="hex">#662900</span></div>
              <div className="sw" style={{ background: "#993D00", color: "#fff" }}><span className="step">800</span><span className="hex">#993D00</span></div>
              <div className="sw" style={{ background: "#CC5200", color: "#fff" }}><span className="step">700</span><span className="hex">#CC5200</span></div>
              <div className="sw" style={{ background: "#E55C00", color: "#fff" }}><span className="step">600</span><span className="hex">#E55C00</span></div>
              <div className="sw" style={{ background: "#FF6600", color: "#fff" }}><span className="step">500</span><span className="hex">#FF6600</span></div>
              <div className="sw" style={{ background: "#FF751A", color: "#fff" }}><span className="step">400</span><span className="hex">#FF751A</span></div>
              <div className="sw" style={{ background: "#FF8533", color: "#fff" }}><span className="step">300</span><span className="hex">#FF8533</span></div>
              <div className="sw" style={{ background: "#FFA366", color: "#2C3A42" }}><span className="step">200</span><span className="hex">#FFA366</span></div>
              <div className="sw" style={{ background: "#FFD1B2", color: "#2C3A42" }}><span className="step">100</span><span className="hex">#FFD1B2</span></div>
              <div className="sw" style={{ background: "#FFE8D9", color: "#2C3A42" }}><span className="step">50</span><span className="hex">#FFE8D9</span></div>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Usage</h2>
          <div className="usage">
            <div>
              <h4><span className="chip" style={{ background: "#FF6600" }}></span>Orange 500, sparingly</h4>
              <p>The slide label, one numeric callout, the dot in the wordmark, or a single underline. Never as a large fill behind body copy. Never tinting iconography.</p>
            </div>
            <div>
              <h4><span className="chip" style={{ background: "#2C3A42" }}></span>Neutral 950, anchor</h4>
              <p>All titles, all icons, primary body emphasis. Used as a full-bleed background for cover slides and section starters.</p>
            </div>
            <div>
              <h4><span className="chip" style={{ background: "#566168" }}></span>Neutral 800, body</h4>
              <p>Body text on white surfaces where lower contrast is intentional. Titles and slide paragraphs stay in ink 950 on light backgrounds.</p>
            </div>
            <div>
              <h4><span className="chip" style={{ background: "#D5E5ED" }}></span>Blue 100, calm canvas</h4>
              <p>Background for content slides that need a softer feel than white. Never paired with orange 500 as a flat fill, too high-contrast.</p>
            </div>
            <div>
              <h4><span className="chip" style={{ background: "#FFE8D9" }}></span>Orange 50, soft fill</h4>
              <p>Permitted behind illustration, callout cards, or framing devices where a warm tone reads better than blue.</p>
            </div>
            <div>
              <h4><span className="chip" style={{ background: "#FFFFFF", borderColor: "#ddd" }}></span>White, surface only</h4>
              <p>Use white for cards and page surfaces. Never use white as a slide background.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
