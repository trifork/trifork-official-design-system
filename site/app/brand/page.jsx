import PageHeader from "../_components/PageHeader";
import "./brand.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

export const metadata = {
  title: "Brand · Trifork Design System",
  description: "Trifork brand voice, editorial principles, naming, and wordmark rules.",
};

export default function BrandPage() {
  return (
    <>
      <PageHeader label="BRAND" />
      <div className="tf-page brand-page">
        <section className="tf-section">
          <h2 className="tf-section-title">A calm, considered technology brand.</h2>
          <p className="tf-lead" style={{ maxWidth: "880px" }}>
            Trifork builds software for industries where reliability matters: finance, healthcare,
            aviation, smart buildings. Our brand reflects that. Ordered, precise, quietly
            confident. We let the work speak.
          </p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Voice</h2>
          <div className="grid-2">
            <div>
              <p className="voice-quote">
                We are technologists and consultants. We do not sell, we explain.
              </p>
            </div>
            <div>
              <ul className="bare">
                <li><span>Register</span><span>Calm, structured, expert</span></li>
                <li><span>Person</span><span>“We” when inside, “Trifork” externally</span></li>
                <li><span>Locale</span><span>UK English (colour, organisation)</span></li>
                <li><span>Sentences</span><span>Short. Concrete.</span></li>
                <li><span>Adjectives</span><span>Sparse, never superlative</span></li>
                <li><span>Punctuation</span><span>Oxford comma. No em-dashes. No exclamations.</span></li>
                <li><span>People we work with</span><span>Partners or customers, never “clients”</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Editorial principles</h2>
          <div className="grid-3" style={{ marginTop: "32px" }}>
            <div>
              <h3 className="tf-h4" style={{ margin: "0 0 12px" }}>Earn attention with precision.</h3>
              <p className="tf-body-sm" style={{ margin: 0 }}>
                A specific number, a named technology, a real customer outcome. Specifics outperform
                adjectives every time.
              </p>
            </div>
            <div>
              <h3 className="tf-h4" style={{ margin: "0 0 12px" }}>Make the complex feel orderly.</h3>
              <p className="tf-body-sm" style={{ margin: 0 }}>
                Our subjects, distributed systems and regulated industries, are inherently dense. We
                sequence ideas so a reader always knows where they are.
              </p>
            </div>
            <div>
              <h3 className="tf-h4" style={{ margin: "0 0 12px" }}>Show our hands.</h3>
              <p className="tf-body-sm" style={{ margin: 0 }}>
                Photography is of real Trifork people, in real workspaces. We don’t dress up our
                offices and we don’t use stock imagery of strangers.
              </p>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Voice, in practice</h2>
          <div className="pair" style={{ marginTop: "24px" }}>
            <div>
              <h4 style={{ color: "var(--tf-accent)" }}>We write</h4>
              <p>
                “We rebuilt the customer’s settlement engine on Kubernetes over fourteen months.
                Throughput tripled; the on-call rotation halved.”
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--tf-ink-400)" }}>We avoid</h4>
              <p>
                “We’re proud to have partnered with a leading bank to deliver a revolutionary,
                world-class settlement platform that’s transforming financial services!”
              </p>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Naming</h2>
          <ul className="bare">
            <li><span>Wordmark</span><span>Trifork (the dot in the wordmark is the orange accent)</span></li>
            <li><span>Sub-brands</span><span>Trifork [Domain]. For example, Trifork Smart Building, Trifork Labs</span></li>
            <li><span>Products</span><span>Title Case, no Trifork prefix in body copy after first mention</span></li>
            <li><span>Capitalisation</span><span>Sentence case for headlines and slide titles</span></li>
          </ul>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">The wordmark</h2>
          <p className="tf-body" style={{ maxWidth: "760px", marginTop: 0 }}>
            Whenever the Trifork name stands on its own — a logo in a corner, a sign-off, a
            standalone mark — it is always the logo, never set in type. Use the dark logo on light
            backgrounds and the light (negative) logo on dark. The name typed in a plain typeface as
            a standalone mark is not the brand and must not be used.
          </p>
          <p className="tf-body" style={{ maxWidth: "760px" }}>
            The name appears in type only when it sits inside running content — a label, a title, or
            a sentence (“Trifork builds software for industries where reliability matters”). There it
            is words on a line, not a mark.
          </p>
          <div className="pair" style={{ marginTop: "24px" }}>
            <div>
              <h4 style={{ color: "var(--tf-accent)" }}>We use — the logo, standalone</h4>
              <div className="wordmark-demo wordmark-demo--light">
                <img src={`${basePath}/assets/logo/Trifork_logo_RGB.svg`} alt="Trifork logo, dark" />
              </div>
              <div className="wordmark-demo wordmark-demo--dark">
                <img src={`${basePath}/assets/logo/Trifork_logo_neg_RGB.svg`} alt="Trifork logo, light" />
              </div>
            </div>
            <div>
              <h4 style={{ color: "var(--tf-ink-400)" }}>We avoid — the name typed as a mark</h4>
              <div className="wordmark-demo wordmark-demo--wrong">
                <span>Trifork</span>
              </div>
              <p style={{ margin: "12px 0 0" }}>
                Standalone, in a corner, or as a sign-off — never the word in a plain typeface. Use
                the logo instead.
              </p>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Vocabulary</h2>
          <ul className="bare">
            <li><span>The people we serve</span><span>“Customers” for commercial relationships, “partners” for joint ventures and Trifork Labs collaborations. Never “clients”.</span></li>
            <li><span>The work itself</span><span>“Engagement” or “programme”, not “project”. “Build” or “platform”, not “solution”.</span></li>
            <li><span>Our people</span><span>“The team”, “engineers”, “consultants”. Never “resources”.</span></li>
            <li><span>Punctuation</span><span>No em-dashes. Use commas, colons, or new sentences instead.</span></li>
          </ul>
        </section>
      </div>
    </>
  );
}
