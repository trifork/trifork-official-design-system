import PageHeader from "../_components/PageHeader";
import "./type.css";

export const metadata = {
  title: "Type · Trifork Design System",
  description: "Poppins scale and roles — display, headings, body, captions and labels.",
};

export default function TypePage() {
  return (
    <>
      <PageHeader label="TYPE" />
      <div className="tf-page type-page">
        <section className="tf-section">
          <p className="tf-eyebrow" style={{ margin: "0 0 16px" }}>Poppins</p>
          <h2 className="tf-section-title" style={{ margin: "0 0 24px" }}>A geometric sans, set quietly.</h2>
          <p className="tf-lead" style={{ maxWidth: "880px", margin: "0 0 32px" }}>
            We use Poppins in Regular (400), Medium (500), and Italic (400). Display and H1 sit in Regular — large type carries itself. Medium is reserved for smaller headlines, labels and UI. Italic is editorial only, used sparingly for citations and captions.
          </p>
          <div className="alphabet">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789, & · /
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Weights & styles</h2>
          <div className="weights">
            <div>
              <div className="label">Regular · 400</div>
              <div className="demo" style={{ fontWeight: 400 }}>Aa</div>
              <p className="tf-body-sm" style={{ margin: "12px 0 0" }}>Display, H1, body, lead, captions. The default voice.</p>
            </div>
            <div>
              <div className="label">Medium · 500</div>
              <div className="demo" style={{ fontWeight: 500 }}>Aa</div>
              <p className="tf-body-sm" style={{ margin: "12px 0 0" }}>Smaller headlines (H2, H3), labels, numeric callouts, button text.</p>
            </div>
            <div>
              <div className="label">Italic · 400</div>
              <div className="demo" style={{ fontWeight: 400, fontStyle: "italic" }}>Aa</div>
              <p className="tf-body-sm" style={{ margin: "12px 0 0" }}>Sparingly — citations, photo captions, the occasional editorial pull. Never on headlines.</p>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Roles</h2>

          <div className="row">
            <div className="meta">
              <b>Display</b>
              96 / 100<br />
              Regular · -0.02em<br />
              <code>.tf-display</code>
            </div>
            <div className="specimen-display">Software craft, applied.</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>H1, Section title</b>
              72 / 80<br />
              Regular · -0.02em<br />
              <code>.tf-h1</code>
            </div>
            <div className="specimen-h1">Banking infrastructure that holds.</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>H2, Slide title</b>
              40 / 48<br />
              Medium · -0.01em<br />
              <code>.tf-h2</code>
            </div>
            <div className="specimen-h2">What we built for SimCorp.</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>H3, Small headline</b>
              28 / 35<br />
              Medium<br />
              <code>.tf-h3</code>
            </div>
            <div className="specimen-h3">Distributed by design</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>Lead</b>
              28 / 38<br />
              Regular<br />
              <code>.tf-lead</code>
            </div>
            <div className="specimen-lead">A short paragraph that introduces a section without restating the title. Sentence case, concrete language, no superlatives.</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>Body</b>
              20 / 31<br />
              Regular<br />
              <code>.tf-body</code>
            </div>
            <div className="specimen-body">Body copy is set at 20 px on slides, large enough to read from the back of a workshop room, small enough to allow a real argument on the page. We avoid orphaned lines and use the Oxford comma.</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>Caption</b>
              16 / 22<br />
              Regular<br />
              <code>.tf-caption</code>
            </div>
            <div className="specimen-caption">Photo · Trifork Aarhus, autumn 2024</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>Italic</b>
              Inherits role size<br />
              Regular italic<br />
              <code>em, .tf-italic</code>
            </div>
            <div style={{ font: "italic 400 28px/1.35 var(--tf-font)", color: "var(--tf-text-body)", maxWidth: "720px" }}>An aside set in italic — for citations, photo credits, footnotes. The cursive shapes give us a quieter register than weight ever could.</div>
          </div>

          <div className="row">
            <div className="meta">
              <b>Label</b>
              13 px · 0.16em tracking<br />
              Medium · always uppercase<br />
              Orange (default) or blue 900<br />
              <code>.tf-label-spaced</code>
            </div>
            <div>
              <div className="specimen-label" style={{ marginBottom: "16px" }}>SECTION LABEL</div>
              <div className="specimen-label blue">SECTION LABEL</div>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Rules</h2>
          <ul className="tf-body" style={{ maxWidth: "840px", paddingLeft: "20px", marginTop: "16px" }}>
            <li>Headlines are sentence case. Title Case is reserved for proper nouns.</li>
            <li>Display and H1 are Regular — never Medium. At those sizes the weight reads loud.</li>
            <li>Medium is for smaller headlines (H2, H3), labels, buttons and numeric callouts.</li>
            <li>Tracking is tight (-0.02em) on display and H1; -0.01em on H2; default elsewhere.</li>
            <li>Never bold body copy for emphasis, re-write the sentence instead.</li>
            <li>Never set type smaller than 13 px on screen, or 24 px on a 1920 × 1080 slide.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
