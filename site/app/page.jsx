import Link from "next/link";
import PageHeader from "./_components/PageHeader";
import "./page.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

const SECTIONS = [
  { href: "/brand", group: "Foundations", title: "Brand", sub: "Voice, editorial principles, naming" },
  { href: "/type", group: "Foundations", title: "Type", sub: "Poppins scale & roles" },
  { href: "/colors", group: "Foundations", title: "Colour", sub: "Three ramps, one accent" },
  { href: "/spacing", group: "Foundations", title: "Spacing", sub: "8 px scale, radii, slide chrome" },
  { href: "/iconography", group: "Foundations", title: "Iconography", sub: "Line icons, single 2 px stroke" },
  { href: "/components", group: "Patterns", title: "Components", sub: "Buttons, tags, callouts, cards" },
  { href: "/slide-kit", group: "Patterns", title: "Slide kit", sub: "Master slide layouts" },
  { href: "/social", group: "Patterns", title: "Social", sub: "LinkedIn templates & rules" },
  { href: "/social/playground", group: "Tools", title: "Playground", sub: "Build & export posts" },
  { href: "/install", group: "Tools", title: "Use with AI", sub: "Install the skill for Claude" },
];

const RAMP_BLUE = ["#3C4C54","#5B717F","#7997A9","#88AABE","#97BDD3","#A1C4D7","#ACCADC","#C1D7E5","#D5E5ED","#EAF2F6"];
const RAMP_ORANGE = ["#662900","#993D00","#CC5200","#E55C00","#FF6600","#FF751A","#FF8533","#FFA366","#FFD1B2","#FFE8D9"];
const RAMP_INK = ["#2C3A42","#414E55","#566168","#6B757B","#80898E","#959CA0","#ABB0B3","#C0C4C6","#D5D8D9","#EAEBEC","#F4F5F6"];

export default function Home() {
  return (
    <>
      <PageHeader label="SYSTEM" />
      <div className="tf-page home">
        <section className="tf-section home-hero">
          <p className="tf-eyebrow">Trifork brand system</p>
          <h1 className="home-hero__title">A calm, considered design system for technology work.</h1>
          <p className="home-hero__lead">
            Trifork builds software for industries where reliability matters: finance, healthcare,
            aviation, smart buildings. This system is the visual and editorial language behind that
            work. Tokens, type roles, colour rules, and slide templates, all derived from the
            official Trifork Design Guide.
          </p>
          <div className="home-hero__cta">
            <a className="home-hero__btn home-hero__btn--primary" href={`${basePath}/tokens.css`}>
              tokens.css
            </a>
            <a className="home-hero__btn" href={`${basePath}/llms.txt`}>
              llms.txt
            </a>
            <Link className="home-hero__btn" href="/brand">
              Read the brand →
            </Link>
          </div>
        </section>

        <section className="tf-section">
          <p className="tf-eyebrow">Sections</p>
          <h2 className="tf-section-title">Where to go.</h2>
          <div className="home-grid">
            {SECTIONS.map((s) => (
              <Link key={s.href} className="home-card" href={s.href}>
                <div className="home-card__group">{s.group}</div>
                <div className="home-card__title">{s.title}</div>
                <div className="home-card__sub">{s.sub}</div>
                <div className="home-card__arrow">→</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="tf-section">
          <p className="tf-eyebrow">Foundations at a glance</p>
          <h2 className="tf-section-title">Colour.</h2>
          <p className="home-lead">
            A neutral spine carries titles, body, and chrome. A blue ramp gives calm, atmospheric
            backgrounds. Orange is the brand voice, used once per slide, never as wallpaper.
          </p>
          <div className="home-ramps">
            <div className="home-ramp" aria-label="Ink ramp">
              <div className="home-ramp__label">Ink · neutral spine</div>
              <div className="home-ramp__row">
                {RAMP_INK.map((c, i) => (
                  <span key={c} className="home-ramp__sw" style={{ background: c }} title={`ink-${i === 10 ? 50 : (10 - i) * 100 + (i === 0 ? -50 : 0)}`} />
                ))}
              </div>
            </div>
            <div className="home-ramp">
              <div className="home-ramp__label">Blue · atmospheric backgrounds</div>
              <div className="home-ramp__row">
                {RAMP_BLUE.map((c) => (
                  <span key={c} className="home-ramp__sw" style={{ background: c }} />
                ))}
              </div>
            </div>
            <div className="home-ramp">
              <div className="home-ramp__label">Orange · accent, used sparingly</div>
              <div className="home-ramp__row">
                {RAMP_ORANGE.map((c) => (
                  <span key={c} className="home-ramp__sw" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Type.</h2>
          <p className="home-lead">
            Poppins, used in Regular (400) and Medium (500) only. Display and H1 sit in Regular,
            large type carries itself.
          </p>
          <div className="home-type">
            <div className="home-type__row">
              <span className="home-type__meta">Display · 96</span>
              <span className="home-type__demo" style={{ font: "400 56px/1.05 var(--tf-font)", letterSpacing: "-0.02em" }}>The work explains itself.</span>
            </div>
            <div className="home-type__row">
              <span className="home-type__meta">H2 · 40</span>
              <span className="home-type__demo" style={{ font: "500 32px/1.2 var(--tf-font)", letterSpacing: "-0.01em" }}>Calm. Structured. Expert.</span>
            </div>
            <div className="home-type__row">
              <span className="home-type__meta">Body · 20</span>
              <span className="home-type__demo" style={{ font: "400 18px/1.55 var(--tf-font)", color: "var(--tf-text-body)" }}>
                Specifics over adjectives. UK English. Short sentences.
              </span>
            </div>
            <div className="home-type__row">
              <span className="home-type__meta">Label · 13</span>
              <span className="home-type__demo tf-label-spaced">SECTION LABEL</span>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Spacing.</h2>
          <p className="home-lead">
            Multiples of 8 px. Generous whitespace between blocks (48–80 px on slides). Inside dense
            components, 8–24 px.
          </p>
          <div className="home-spacing">
            {[4, 8, 16, 24, 32, 48, 64, 80].map((n) => (
              <div key={n} className="home-spacing__cell">
                <div className="home-spacing__box" style={{ width: n, height: n }} />
                <div className="home-spacing__label">{n} px</div>
              </div>
            ))}
          </div>
        </section>

        <section className="tf-section">
          <p className="tf-eyebrow">For tooling</p>
          <h2 className="tf-section-title">Read by humans and machines.</h2>
          <div className="home-tooling">
            <div className="home-tooling__card">
              <h3 className="home-tooling__title">tokens.css</h3>
              <p className="home-tooling__body">
                Every colour, type size, spacing step, and radius as CSS custom properties. Link it
                directly from any Trifork artefact.
              </p>
              <code className="home-tooling__code">
                {`<link rel="stylesheet" href="https://brand.trifork.com/system/tokens.css">`}
              </code>
            </div>
            <div className="home-tooling__card">
              <h3 className="home-tooling__title">llms.txt</h3>
              <p className="home-tooling__body">
                A plain-text manifest of the system, written for agents and MCP tools. Names the
                rules, tokens, and where each topic lives.
              </p>
              <code className="home-tooling__code">
                {`curl https://brand.trifork.com/system/llms.txt`}
              </code>
            </div>
            <div className="home-tooling__card">
              <h3 className="home-tooling__title">AI skill</h3>
              <p className="home-tooling__body">
                Install the brand as a skill for Claude, so generated work follows it automatically.
              </p>
              <Link className="home-hero__btn" href="/install" style={{ marginTop: "auto" }}>
                Use with AI →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
