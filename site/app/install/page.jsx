import { readFileSync } from "node:fs";
import { join } from "node:path";
import PageHeader from "../_components/PageHeader";
import "./install.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

// Read the generated skills manifest so the page always lists the skills and
// version it was built with.
let skillVersion = { version: "1.0.0", updated: "" };
let skills = [];
try {
  const list = JSON.parse(
    readFileSync(join(process.cwd(), "public/skill/skills.json"), "utf8")
  );
  skills = list.skills || [];
  skillVersion = { version: list.version, updated: list.updated };
} catch (_) { /* fall back to default */ }

export const metadata = {
  title: "Use with AI · Trifork Design System",
  description: "Install the Trifork design system as a skill in Claude, or point any AI tool at the machine-readable index, so generated work follows the brand automatically.",
};

export default function InstallPage() {
  return (
    <>
      <PageHeader label="USE WITH AI" />
      <div className="tf-page install-page">
        <section className="tf-section">
          <p className="tf-eyebrow">For AI tools</p>
          <h1 className="install-title">Let your AI follow the Trifork brand.</h1>
          <p className="install-lead">
            Install this system once and your assistant applies Trifork’s voice, type, colour,
            spacing, and layout rules to everything it makes — slides, social posts, web pages,
            documents. The skill carries the stable core rules with it and pulls the full reference
            and assets from this site when it needs them.
          </p>
          <p className="install-body">
            The system ships as three focused skills. Install <b>trifork-brand-core</b> as the
            foundation, then add the ones you need. Each skill is self-contained and works on its own.
          </p>
          <ul className="install-skills">
            {skills.map((s) => (
              <li key={s.name}>
                <a className={`install-btn ${s.name === "trifork-brand-core" ? "install-btn--primary" : ""}`} href={`${basePath}/skill/${s.zip}`} download>
                  Download {s.title} (.zip)
                </a>
                <span className="install-skill-desc">{s.description}</span>
              </li>
            ))}
          </ul>
          <div className="install-cta">
            <a className="install-btn" href={`${basePath}/skill/skills.json`}>
              View skills.json
            </a>
            <a className="install-btn" href={`${basePath}/llms.txt`}>
              View llms.txt
            </a>
          </div>
          <p className="install-version">
            Skills version <b>{skillVersion.version}</b>
            {skillVersion.updated ? <> · updated {skillVersion.updated}</> : null} ·{" "}
            <a href={`${basePath}/skill/skills.json`}>skills.json</a>
          </p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Claude Code (CLI)</h2>
          <p className="install-body">
            Unzip the skill into your skills directory. Use the personal location to apply it across
            all projects, or the project location to scope it to one repository. Claude Code
            discovers it automatically — no restart needed.
          </p>
          <ol className="install-steps">
            <li>
              <b>Personal (all projects)</b>
              <pre className="install-code">{`mkdir -p ~/.claude/skills && cd ~/.claude/skills
for s in trifork-brand-core trifork-presentations trifork-social-graphics; do
  curl -L https://brand.trifork.com/system/skill/$s.zip -o $s.zip
  unzip -o $s.zip && rm $s.zip
done`}</pre>
            </li>
            <li>
              <b>Project (this repo only)</b>
              <p className="install-note">
                Unzip into <code>.claude/skills/</code> at your project root and commit it, so the
                whole team gets it.
              </p>
            </li>
          </ol>
          <p className="install-body">
            The result is one folder per skill, e.g.{" "}
            <code>~/.claude/skills/trifork-brand-core/SKILL.md</code>. Ask for anything Trifork-branded
            and the right skill activates; or invoke one directly with{" "}
            <code>/trifork-presentations</code> or <code>/trifork-social-graphics</code>.
          </p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Claude Desktop app</h2>
          <p className="install-body">
            Upload the zip — no unzipping needed.
          </p>
          <ol className="install-steps install-steps--plain">
            <li>Download the skill zip (button at the top of this page).</li>
            <li>Open the Claude desktop app and go to <b>Settings → Customize → Skills</b>.</li>
            <li>Click <b>+</b>, choose <b>Upload a skill</b>, and select the zip.</li>
            <li>Toggle the skill on in the list.</li>
          </ol>
          <p className="install-note">
            Custom skills run in Claude Code and the Claude desktop app. The browser version of
            claude.ai does not currently support uploaded skills — use the desktop app or the CLI.
          </p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Any other AI tool</h2>
          <p className="install-body">
            Point the tool at the machine-readable index. It is a single plain-text file that
            summarises the rules, tokens, and where each topic lives.
          </p>
          <pre className="install-code">{`https://brand.trifork.com/system/llms.txt`}</pre>
          <p className="install-body">
            Most tools that accept a system prompt, custom instructions, or a rules file will follow
            it if you paste the URL (or its contents) and ask them to apply the Trifork brand. For
            assistants that can browse, just say: “Follow the Trifork design system at
            brand.trifork.com/system.”
          </p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">In a dedicated Trifork project</h2>
          <p className="install-body">
            A skill is <i>model-invoked</i> — the assistant decides when it’s relevant, so it won’t
            fire on every request (especially when you don’t say “Trifork” explicitly). If a whole
            project is Trifork work and you want the brand applied to <i>everything</i> — every
            presentation, document, and post — add the brand block to the project’s{" "}
            <code>CLAUDE.md</code>. That file is always loaded into context, so it doesn’t depend on
            the assistant choosing to reach for the skill.
          </p>
          <div className="install-cta">
            <a className="install-btn install-btn--primary" href={`${basePath}/skill/trifork-brand-core/CLAUDE.md`} download>
              Download CLAUDE.md block
            </a>
          </div>
          <p className="install-note">
            Drop it at your project root as <code>CLAUDE.md</code> (or paste its contents into an
            existing one). It carries the non-negotiable core inline and points to this site for the
            full system. Use it <i>alongside</i> the skill — the skill stays useful as the portable,
            cross-project version.
          </p>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Keeping it current</h2>
          <p className="install-body">
            The installed skill is a cached copy — but it’s built to stay current without you
            babysitting it. Two mechanisms do the work:
          </p>
          <ol className="install-steps install-steps--plain">
            <li>
              <b>Rules are read live.</b> At the start of a Trifork task the skill fetches{" "}
              <code>llms.txt</code> from this site, which is always the authoritative, current
              version — so even an old installed copy applies today’s rules whenever your assistant
              can reach the web. The embedded rules are the offline fallback.
            </li>
            <li>
              <b>It tells you when it’s behind.</b> Each skill carries a version and can check{" "}
              <code>{`${basePath}/skill/skills.json`}</code>. If this site has a newer version, the
              assistant will let you know and point you back here to re-download. You only need to
              re-download when the <i>core</i> rules change — the detailed reference and assets are
              always live.
            </li>
          </ol>
          <p className="install-note">
            Current published version: <b>{skillVersion.version}</b>
            {skillVersion.updated ? <> (updated {skillVersion.updated})</> : null}. Re-downloading is
            just the steps above — unzip over the old folder, or re-upload in the desktop app.
          </p>
        </section>

        <section className="tf-section">
          <p className="tf-eyebrow">Coming later</p>
          <h2 className="tf-section-title">MCP server</h2>
          <p className="install-body">
            A hosted MCP server is the most automatic option: connect it once and the design system
            is available to any MCP-capable assistant as live tools and resources, with no file to
            download or keep in sync. This is a planned enhancement, not yet available. For now, the
            skill and <code>llms.txt</code> above cover the same ground with a one-time setup.
          </p>
        </section>
      </div>
    </>
  );
}
