import Link from "next/link";
import PageHeader from "../_components/PageHeader";
import {
  AnatomyDiagram, LayoutsShowcase, FormatsShowcase, BackgroundsShowcase,
  TitleSizingDemo, CarouselShowcase, Gallery,
} from "./_lib/Showcases";
import "./social.css";

export const metadata = {
  title: "Social · Trifork Design System",
  description: "LinkedIn social-post system: anatomy, formats, backgrounds, 6 templates × 3 layouts, rules.",
};

export default function SocialPage() {
  return (
    <>
      <PageHeader label="SOCIAL POSTS" />
      <div className="tf-page social-page">
        <section className="tf-section">
          <h1 className="intro-title">
            A small kit of templates for LinkedIn — events, releases, cases, and the occasional pull quote.
          </h1>
          <p className="lead">
            Social posts use the same restrained palette and Poppins type as everything else in the
            system. The grammar is narrower: one eyebrow, one title, one or two lines of metadata,
            and a flat background. There is no orange in the title, no gradient over the photo, no
            exclamation marks anywhere.
          </p>
          <Link href="/social/playground" className="social-playground-cta">
            Open playground →
          </Link>
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Anatomy</div>
            <h2 className="tf-section-title">Four parts, in fixed positions.</h2>
            <p className="lead">
              A post is an eyebrow, a title, a metadata block, and an optional logo. Every layout
              and card type in this kit is a rearrangement of those four pieces — nothing else.
            </p>
          </div>
          <AnatomyDiagram />
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Formats</div>
            <h2 className="tf-section-title">Four canvases.</h2>
            <p className="lead">
              Pick the format that fits the channel. Same content adapts; the title’s size-tier and
              the inner padding adjust automatically.
            </p>
          </div>
          <FormatsShowcase />
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Backgrounds</div>
            <h2 className="tf-section-title">Three modes. No others.</h2>
            <p className="lead">
              Ink for announcements, light for reflection, photo for the moments that earn one.
              Photo always sits under a flat ink-950 overlay (no gradients) — enough to keep white
              text legible while the image still reads.
            </p>
          </div>
          <BackgroundsShowcase />
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Eyebrow</div>
            <h2 className="tf-section-title">The eyebrow names the post type.</h2>
            <p className="lead">
              ALL CAPS, Poppins Medium, tracking 0.16em. Two to four words at most. Use the same
              eyebrow text consistently across a campaign so the audience learns the signal.
            </p>
          </div>
          <div className="rules">
            <div className="rule"><span className="n">A</span><div><b>Orange on ink and light surfaces.</b><p>Default eyebrow colour. Same orange as the rest of the design system — <code>--tf-orange-500</code>.</p></div></div>
            <div className="rule"><span className="n">B</span><div><b>White over photos.</b><p>When the post sits over a photograph with the standard 90% ink overlay, the eyebrow flips to white. Orange would compete with the image; white sits cleanly.</p></div></div>
            <div className="rule"><span className="n">C</span><div><b>One eyebrow per post.</b><p>Never two eyebrows stacked. If the post needs to carry two signals (e.g. “CASE · AVIATION”), separate them with an interpunct, not a line break.</p></div></div>
            <div className="rule"><span className="n">D</span><div><b>Never use the eyebrow for content.</b><p>“WE’RE HIRING SENIOR ENGINEERS IN AARHUS” is not an eyebrow — that’s a title. The eyebrow names what the post is, not what it says.</p></div></div>
          </div>
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Title sizing</div>
            <h2 className="tf-section-title">Auto-fit, in tiers.</h2>
            <p className="lead">
              Titles drop one size tier per length band. Tier 1 (largest) for short, punchy lines;
              Tier 6 (smallest) for editorial-length sentences. The tiers are predefined per format
              so a designer never types a font size.
            </p>
          </div>
          <TitleSizingDemo />
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Layouts</div>
            <h2 className="tf-section-title">Title top, center, or bottom.</h2>
            <p className="lead">
              Three vertical anchors — that is the whole layout system. The eyebrow always pins to
              the top-left and metadata always to the bottom; the layout only decides where the
              title sits between them.
            </p>
          </div>
          <LayoutsShowcase />
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Always avoid</div>
            <h2 className="tf-section-title">The short list of don’ts.</h2>
          </div>
          <div className="rules">
            <div className="rule"><span className="n">×</span><div><b>Orange anywhere inside the title.</b><p>No orange words, no orange full stops. Orange is reserved for the eyebrow, the quote glyph, the stat number, list markers, and speaker company labels.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>Gradients on photo overlays.</b><p>The overlay is a flat ink-950 tint, edge to edge. Never a fade.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>ALL CAPS in the title.</b><p>Sentence case only. Capitals are for the eyebrow and proper nouns.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>Multiple eyebrows or sub-titles.</b><p>One label, one title. If you need more, write a shorter title or split into two posts.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>Emoji and exclamation marks.</b><p>The post tone is calm and confident. Specifics over adjectives. No “!”, no “🚀”.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>Title Case headlines.</b><p>“AI Enablement: Boost Your Business” → “AI Enablement: Boost your business.” Sentence case throughout.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>Stock-photo handshakes.</b><p>Real photography from Trifork offices and engagements. People at work, architecture, on-site.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>The logo by default.</b><p>LinkedIn already shows the company avatar above the post. Add the wordmark only when the post will be reposted out of feed context.</p></div></div>
            <div className="rule"><span className="n">×</span><div><b>Two logos on one graphic.</b><p>Never more than one wordmark per card. Placement is automatic — it sits opposite the title’s vertical anchor for visual balance, not a corner you choose.</p></div></div>
          </div>
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Carousels</div>
            <h2 className="tf-section-title">One story, swiped across pages.</h2>
            <p className="lead">
              LinkedIn carousels let a post unfold over several frames. Keep one idea per page,
              hold the format constant across the set, and open with a hook page that earns the
              swipe. Build them in the playground and export the whole set at once.
            </p>
          </div>
          <CarouselShowcase />
        </section>

        <section className="tf-section">
          <div className="section-head">
            <div className="section-eyebrow">Card types</div>
            <h2 className="tf-section-title">Six post types, three variations each.</h2>
            <p className="lead">
              Event, quote, single stat, job opening, news, and case story. A starting point, not a
              cage — mix layout, background, and treatment freely; the rules above keep the result
              coherent.
            </p>
          </div>
          <Gallery />
        </section>
      </div>
    </>
  );
}
