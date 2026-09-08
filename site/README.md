# Trifork Design System Site

This repository builds the Trifork brand and design system site hosted at:

```text
https://brand.trifork.com/system/
```

The site is a static Next.js export. It is designed for two audiences:

- People reading the design system in the browser.
- AI assistants and LLM tools that need stable, machine-readable brand rules.

## Build

Run:

```sh
npm run build
```

That single command does everything needed for publishing:

1. Generates AI-facing assets from `content/brand-system.mjs`.
2. Runs the brand linter.
3. Builds and exports the Next.js site to `out/`.
4. Removes `.DS_Store` files from `out/`.

To publish, upload the contents of `out/` to the server path that serves
`https://brand.trifork.com/system/`.

The base path is configured in `next.config.mjs` and defaults to `/system`.
If this site ever moves, set `NEXT_PUBLIC_BASE_PATH` before building.

## Source Of Truth

The canonical machine-readable brand data lives in:

```text
content/brand-system.mjs
```

Change this file when you update core rules, tokens, slide constraints, social
payload rules, icon metadata, imagery metadata, or skill version details.

The canonical slide HTML templates live in:

```text
content/slide-templates.mjs
```

The slide-kit page, hosted HTML templates, slide template manifest, and AI skill
slide templates all use this shared source. Update it when a slide layout,
template slot, visual preview, or slide example changes.

Do not hand-edit generated files unless you are debugging. They are regenerated
by `npm run build:ai`.

## Generated Public Files

`scripts/build-ai-assets.mjs` writes:

```text
public/llms.txt
public/llms/*.md
public/llms/index.html
public/schemas/social-post.schema.json
public/schemas/slide.schema.json
public/schemas/index.html
public/templates/slides/index.json
public/templates/slides/trifork-slide.css
public/templates/slides/*.html
public/visuals/slide-kit/*.png
public/assets/icons/index.json
public/assets/icons/index.html
public/assets/imagery/index.json
public/assets/imagery/index.html
public/skill/SKILL.md
public/skill/CLAUDE.md
public/skill/references/*.md
public/skill/references/index.html
public/skill/schemas/*.json
public/skill/schemas/index.html
public/skill/assets/*
public/skill/assets/slide-templates/*
public/skill/assets/slide-previews/*
public/skill/version.json
public/skill/trifork-design-system-skill.zip
```

These files are copied into `out/` by Next during the static export, so uploading
`out/` updates the website, the LLM docs, the schemas, the asset manifests, and
the downloadable skill at the same time.

Static hosting does not provide automatic directory listings. Use exact files
such as `/llms/index.md`, `/assets/icons/index.json`, and
`/skill/references/slides.md`. The build also writes lightweight `index.html`
files for convenience when a browser or crawler opens a folder URL.

## AI Surfaces

Use these URLs from AI tools:

```text
https://brand.trifork.com/system/llms.txt
https://brand.trifork.com/system/llms/index.md
https://brand.trifork.com/system/skill/trifork-design-system-skill.zip
https://brand.trifork.com/system/skill/CLAUDE.md
https://brand.trifork.com/system/schemas/social-post.schema.json
https://brand.trifork.com/system/schemas/slide.schema.json
```

The skill zip contains:

- `SKILL.md`, the trigger and core workflow.
- `CLAUDE.md`, for always-on project conventions.
- `references/*.md`, one reference per design-system area.
- `schemas/*.json`, social and slide contracts.
- `assets/tokens.css`, logos, icon SVGs, icon manifest, and imagery manifest.
- `assets/slide-templates/*.html`, deterministic slide layouts for AI output.
- `assets/slide-previews/*.png`, compact visual exemplars for offline use.

Large photography files are not bundled into the skill. The skill points to the
hosted imagery manifest and hosted image URLs instead.

The same support files are also published under `/skill/` so the hosted raw
`SKILL.md` has resolvable relative paths, not only the zip package.

Agents should use hosted assets when network access is available. If network
access is blocked by sandboxing, they should fall back to the bundled skill
files, especially `assets/logo/Trifork_logo_RGB.svg`,
`assets/logo/Trifork_logo_neg_RGB.svg`, `assets/icons/*.svg`, and
`assets/tokens.css`. For standalone HTML, inline or copy the bundled logo rather
than depending on a remote fetch.

## Visual Slide Templates

LLMs should not generate Trifork slides from prose rules alone. For slide work,
load:

```text
https://brand.trifork.com/system/llms/slide-kit-visual.md
https://brand.trifork.com/system/templates/slides/index.json
```

Each hosted template is available at:

```text
https://brand.trifork.com/system/templates/slides/<layout-id>.html
```

Each full-size visual preview is available at:

```text
https://brand.trifork.com/system/visuals/slide-kit/<layout-id>.png
```

The installed skill contains matching offline templates and compact previews in
`assets/slide-templates/` and `assets/slide-previews/`. The templates mark
replaceable areas with `data-slot`; AI tools should preserve the supplied CSS
and DOM structure and replace only those slot contents.

Two attributes in the template markup exist purely for PPTX export and must be
preserved (never removed or added elsewhere without matching the CSS):

- `white-space: nowrap` on eyebrow/label elements (`.s-label`, `.label-block`,
  footer text, section numbers, `.nums .num`, `.case-slide .meta .key`,
  `.closing .role`) — keeps these single-line so the exporter sizes the text
  box to the content instead of guessing a width and wrapping it.
- `data-om-raster` on rounded photo containers (`.photo-card`, `.image-card`,
  `.case-slide .photo`, `.figure`, `.portrait`, `.thumb`) — tells the exporter
  to embed the container as a flattened image so the corner radius survives,
  instead of falling back to a native rectangle shape.

Preview PNGs are generated during `npm run build` from the shared slide template
source and resized for the skill package. The build does not require browser
automation or network access.

## Brand Lint

Run:

```sh
npm run lint:brand
```

The linter checks that:

- Generated LLM docs avoid banned editorial patterns.
- The social photo overlay is the canonical `rgba(44, 58, 66, 0.90)`.
- The colour page does not reintroduce white as a slide background.
- Schemas and manifests exist and include canonical values.
- The stock placeholder image is marked as disallowed in the imagery manifest.
- The generated skill files and version metadata are in sync.
- Every canonical slide layout has a hosted template, hosted preview, skill
  template, skill preview, and manifest entry.

`npm run build` runs this automatically before the Next build.

## Updating The Brand System

1. Edit `content/brand-system.mjs`.
2. Edit `content/slide-templates.mjs` if slide examples, slots, templates, or
   visual previews need to change.
3. If the browser pages need matching copy or visual changes, edit the relevant
   files under `app/`.
4. Run `npm run build`.
5. Review the generated files under `public/` if the AI-facing contract changed.
6. Upload `out/` to the server.

When the skill's offline core changes, bump `version` in
`content/brand-system.mjs`. The generator writes `public/skill/version.json`, and
installed skills can compare their bundled version against that hosted file.

## Social Playground Links

The social playground accepts a base64url-encoded JSON payload:

```text
https://brand.trifork.com/system/social/playground/?post=<payload>
```

Payloads should validate against:

```text
public/schemas/social-post.schema.json
```

Shape:

```json
{
  "format": "1:1",
  "pages": [
    {
      "variant": "news",
      "layout": "bottom",
      "bg": "ink",
      "eyebrow": "PRESS RELEASE",
      "title": "Trifork acquires Helsinki studio Aalto Code.",
      "meta": ["Copenhagen", "04 June 2026"],
      "showLogo": false
    }
  ]
}
```

## Project Scripts

```text
npm run dev         Start local Next dev server.
npm run build:ai    Generate LLM docs, schemas, slide templates, previews, skill files, and zip.
npm run lint:brand  Run brand consistency checks.
npm run build       Generate AI assets, lint, and export the static site.
npm run postbuild   Remove macOS metadata files from the export.
npm run start       Start Next in production mode.
```
