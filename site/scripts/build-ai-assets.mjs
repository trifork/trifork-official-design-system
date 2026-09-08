import { copyFile, cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import JSZip from "jszip";
import sharp from "sharp";

import { brandSystem as ds } from "../content/brand-system.mjs";
import {
  canonicalSlideTemplates,
  hostedSlideAssetPaths,
  renderSlideDocument,
  renderSlidePreviewSvg,
  skillSlideAssetPaths,
  slideTemplateCss,
  slideTemplateManifest,
  slideTemplates,
} from "../content/slide-templates.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const publicDir = join(root, "public");
const llmsDir = join(publicDir, "llms");
const schemasDir = join(publicDir, "schemas");
const skillsRoot = join(publicDir, "skill");                 // container for the three skills
const slideTemplatesDir = join(publicDir, "templates", "slides");  // hosted slide templates
const slideVisualsDir = join(publicDir, "visuals", "slide-kit");   // hosted full-size previews
const stagingDir = join(root, ".skill-staging");             // not served; copied into skills
const stagingSlideTemplatesDir = join(stagingDir, "slide-templates");
const stagingSlidePreviewsDir = join(stagingDir, "slide-previews");
const skillDirOf = (name) => join(skillsRoot, name);
const site = ds.siteUrl;

const GENERATED = "Generated from content/brand-system.mjs. Do not edit by hand.";

async function ensureDirs() {
  await rm(slideTemplatesDir, { recursive: true, force: true });
  await rm(slideVisualsDir, { recursive: true, force: true });
  await rm(stagingDir, { recursive: true, force: true });
  await rm(skillsRoot, { recursive: true, force: true });
  await mkdir(llmsDir, { recursive: true });
  await mkdir(schemasDir, { recursive: true });
  await mkdir(skillsRoot, { recursive: true });
  await mkdir(slideTemplatesDir, { recursive: true });
  await mkdir(slideVisualsDir, { recursive: true });
  await mkdir(join(publicDir, "assets", "icons"), { recursive: true });
  await mkdir(join(publicDir, "assets", "imagery"), { recursive: true });
  await mkdir(stagingSlideTemplatesDir, { recursive: true });
  await mkdir(stagingSlidePreviewsDir, { recursive: true });
}

function table(rows) {
  return rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
}

function bullets(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function assetUrl(path) {
  return `${site}/${path}`;
}

function htmlIndex(title, links) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    body{font:16px/1.5 system-ui,sans-serif;margin:40px;color:#2C3A42;background:#D5E5ED}
    main{max-width:760px}
    a{color:#2C3A42}
    li{margin:8px 0}
  </style>
</head>
<body>
  <main>
    <h1>${title}</h1>
    <p>Generated index for static hosting. Use the exact files below.</p>
    <ul>
      ${links.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join("\n      ")}
    </ul>
  </main>
</body>
</html>`;
}

function pageLinks() {
  return [
    ["Brand", `${site}/brand/`, "Voice, editorial principles, naming, and wordmark rules."],
    ["Type", `${site}/type/`, "Poppins roles, weights, scale, and usage."],
    ["Colour", `${site}/colors/`, "Ink, blue, orange, and usage rules."],
    ["Spacing", `${site}/spacing/`, "8 px scale, radii, and slide chrome."],
    ["Iconography", `${site}/iconography/`, "Line icon rules and the icon set."],
    ["Components", `${site}/components/`, "Slide-level UI patterns."],
    ["Slide kit", `${site}/slide-kit/`, "Master slide layouts on the 1920 x 1080 canvas."],
    ["Social", `${site}/social/`, "LinkedIn post system and templates."],
    ["Social playground", `${site}/social/playground/`, "Build, deep-link, and export posts."],
    ["Use with AI", `${site}/install/`, "Install the skill or use the machine-readable files."],
  ];
}

function llmsTxt() {
  return `# ${ds.name}

> Source of truth: ${site}/
> Tokens: ${site}/tokens.css
> Skills: ${site}/skill/skills.json (trifork-brand-core, trifork-presentations, trifork-social-graphics)
> Install guide: ${site}/install/
> Generated: ${ds.updated}

${ds.description}

---

## Core Rules

### Voice
${bullets(ds.voice)}

### Capitalisation
${bullets(ds.capitalisation)}

### Type
${bullets(ds.type.rules)}

### Colour
${bullets(ds.colors.rules)}

### Slides
${bullets(ds.slides.rules)}

### Spacing And Radius
${bullets(ds.spacing.rules)}

### Iconography
${bullets(ds.iconography.rules)}

### Imagery
- Use real photography from Trifork offices and engagements.
- Do not use stock photography of strangers or handshake cliches.
- Check ${site}/assets/imagery/index.json before choosing a hosted image.

### Wordmark
${bullets(ds.wordmark.rules)}

---

## Tokens

Link the token sheet directly:

\`\`\`html
<link rel="stylesheet" href="${site}/tokens.css">
\`\`\`

${table([
  ["Token", "Value", "Role"],
  ["---", "---", "---"],
  ...ds.colors.tokens,
])}

### Type Scale
${table([
  ["Token", "Value", "Role"],
  ["---", "---", "---"],
  ...ds.type.scale,
])}

### Spacing
${table([
  ["Token", "Value"],
  ["---", "---"],
  ...ds.spacing.scale,
])}

### Radii
${table([
  ["Token", "Value", "Role"],
  ["---", "---", "---"],
  ...ds.spacing.radii.map(([token, value, role = ""]) => [token, value, role]),
])}

---

## Machine-Readable Files

- Full LLM index: ${site}/llms/index.md
- Brand: ${site}/llms/brand.md
- Type: ${site}/llms/type.md
- Colour: ${site}/llms/colour.md
- Spacing: ${site}/llms/spacing.md
- Iconography: ${site}/llms/iconography.md
- Components: ${site}/llms/components.md
- Slides: ${site}/llms/slides.md
- Slide visual templates: ${site}/llms/slide-kit-visual.md
- Social: ${site}/llms/social.md
- Assets: ${site}/llms/assets.md
- Validation: ${site}/llms/validation.md
- Social post schema: ${site}/schemas/social-post.schema.json
- Slide schema: ${site}/schemas/slide.schema.json
- Slide template manifest: ${site}/templates/slides/index.json
- Slide template CSS: ${site}/templates/slides/trifork-slide.css
- Icon manifest: ${site}/assets/icons/index.json
- Imagery manifest: ${site}/assets/imagery/index.json

---

## Pages

${pageLinks().map(([label, url, desc]) => `- [${label}](${url}) - ${desc}`).join("\n")}

---

## Use With AI Tools

- Install the skills from ${site}/install/: trifork-brand-core (foundation), trifork-presentations, and trifork-social-graphics. Each is self-contained; brand-core is the base.
- In dedicated Trifork projects, add ${site}/skill/trifork-brand-core/CLAUDE.md so the brand is always loaded.
- For tools without skill support, paste this file or ${site}/llms/index.md into the tool instructions.
- The skill prefers live files from this site when online and falls back to the bundled references when offline.

---

## Always Avoid

${bullets(ds.alwaysAvoid)}

---

## Generating Artefacts

- HTML graphics must include a "Download asset" button outside the captured node.
- Social posts must include an "Open in the Trifork playground" link.
- Social playground links use: ${site}/social/playground/?post=<payload>
- The payload is base64url-encoded JSON shaped as { "format": "1:1", "pages": [page] }.
- Validate social payloads against ${site}/schemas/social-post.schema.json.
- Validate slide specifications against ${site}/schemas/slide.schema.json.
`;
}

function llmsIndex() {
  return `# ${ds.name} - LLM Index

${GENERATED}

Use these exact files when you need more detail than /llms.txt. Load only the file that matches the artefact you are creating.

## Recommended Loading

- Any task: start with ${site}/llms.txt.
- Slides or presentations: load slides.md, slide-kit-visual.md, type.md, colour.md, spacing.md, and assets.md.
- Social graphics: load social.md, colour.md, type.md, and assets.md.
- Icons or diagrams: load iconography.md, colour.md, and assets.md.
- Documents or copy: load brand.md and type.md.

## Files

- brand.md - voice, vocabulary, naming, wordmark.
- type.md - Poppins roles and scale.
- colour.md - palette and usage.
- spacing.md - grid, radii, and slide spacing.
- iconography.md - icon construction and manifest.
- components.md - buttons, tags, cards, callouts, quotes, lists, and chrome.
- slides.md - slide rules and layout contract.
- slide-kit-visual.md - visual exemplars, HTML templates, preview PNGs, and template slots.
- social.md - LinkedIn post rules and payload contract.
- assets.md - logos, icons, imagery, tokens, and hosted asset rules.
- validation.md - checklist and linter expectations.
`;
}

function brandMd() {
  return `# Brand

${GENERATED}

## Voice
${bullets(ds.voice)}

## Capitalisation
${bullets(ds.capitalisation)}

## Vocabulary

- Customers or partners, never clients.
- Engagement or programme, not project.
- Build or platform, not solution.
- The team, engineers, or consultants, never resources.

## Wordmark
${bullets(ds.wordmark.rules)}

Assets:
- Dark logo: ${assetUrl(ds.wordmark.darkLogo)}
- Light logo: ${assetUrl(ds.wordmark.lightLogo)}

## Always Avoid
${bullets(ds.alwaysAvoid)}
`;
}

function typeMd() {
  return `# Type

${GENERATED}

## Family

Use Poppins only.

## Rules
${bullets(ds.type.rules)}

## Scale
${table([
  ["Token", "Value", "Role"],
  ["---", "---", "---"],
  ...ds.type.scale,
])}

## Implementation

Link ${site}/tokens.css and use the tf utility classes when creating HTML:

- .tf-display
- .tf-h1
- .tf-h2
- .tf-h3
- .tf-lead
- .tf-body
- .tf-caption
- .tf-label-spaced
- .tf-eyebrow
`;
}

function colourMd() {
  return `# Colour

${GENERATED}

## Rules
${bullets(ds.colors.rules)}

## Tokens
${table([
  ["Token", "Value", "Role"],
  ["---", "---", "---"],
  ...ds.colors.tokens,
])}

## Slide Backgrounds

- Light slide: --tf-blue-100 (#D5E5ED).
- Dark slide: --tf-ink-950 (#2C3A42).
- Never use white as a slide background.

## Photo Overlay

Use a flat overlay only:

\`\`\`css
background: rgba(44, 58, 66, 0.90);
\`\`\`

No gradients, no fades, and no other tints.
`;
}

function spacingMd() {
  return `# Spacing

${GENERATED}

## Rules
${bullets(ds.spacing.rules)}

## Scale
${table([
  ["Token", "Value"],
  ["---", "---"],
  ...ds.spacing.scale,
])}

## Radii
${table([
  ["Token", "Value", "Role"],
  ["---", "---", "---"],
  ...ds.spacing.radii.map(([token, value, role = ""]) => [token, value, role]),
])}

## Slide Canvas

- Width: ${ds.slides.dimensions.width}px.
- Height: ${ds.slides.dimensions.height}px.
- Outer margin: ${ds.slides.dimensions.outerMargin}px.
- Minimum title gap: 32px.
`;
}

function iconographyMd() {
  return `# Iconography

${GENERATED}

## Rules
${bullets(ds.iconography.rules)}

## Icon Manifest

Use ${site}/assets/icons/index.json for filenames, names, and tags.

${table([
  ["File", "Name", "Tags"],
  ["---", "---", "---"],
  ...ds.iconography.icons.map((icon) => [icon.file, icon.name, icon.tags.join(", ")]),
])}
`;
}

function componentsMd() {
  return `# Components

${GENERATED}

## Buttons

- Pill radius.
- Orange fill is reserved for the single most important action on a page.
- Orange ghost is the default action style.
- Blue 900 fill is available on light backgrounds.

## Tags

- Pill shape.
- 13 px Medium.
- Keep them quiet and below body type in visual weight.

## Numeric Callouts

- Use Regular weight.
- Use ink 950 by default.
- Reserve orange 500 for one hero figure per slide.

## Cards

- White on light slides.
- rgba(0, 0, 0, 0.10) on dark slides.
- No other card fills on slides.

## Quotes

- Quote text uses blue 900 or the surface text colour.
- Orange is allowed only for the quote glyph in the social quote template.

## Slide Chrome

- Top-left label in orange tracked caps.
- Footer carries page number, slash, deck name, and logo.
- Do not use dividing rules as slide chrome.
`;
}

function slidesMd() {
  return `# Slides

${GENERATED}

## Contract

- Canvas: ${ds.slides.dimensions.width} x ${ds.slides.dimensions.height}.
- Outer margin: ${ds.slides.dimensions.outerMargin}px.
- Allowed backgrounds: blue 100 and ink 950 only.
- Standard photo overlay: rgba(44, 58, 66, 0.90).

## Rules
${bullets(ds.slides.rules)}

## Layout IDs
${bullets(ds.slides.layouts)}

## Visual Templates

Rules alone are not enough for slide work. Start from the canonical HTML templates and keep their CSS:

- Template manifest: ${site}/templates/slides/index.json
- Template CSS: ${site}/templates/slides/trifork-slide.css
- Preview images: ${site}/visuals/slide-kit/<layout-id>.png
- Detailed visual reference: ${site}/llms/slide-kit-visual.md

Replace only elements marked with data-slot. Preserve canvas size, chrome, logo placement, spacing, and colour tokens.

## Validation

Validate generated slide specs against ${site}/schemas/slide.schema.json.
`;
}

function slideKitVisualMd() {
  const rows = canonicalSlideTemplates.map((template) => [
    template.layoutId,
    `${site}/templates/slides/${template.id}.html`,
    `${site}/visuals/slide-kit/${template.id}.png`,
    template.slots.join(", "),
  ]);

  return `# Slide Kit Visual Reference

${GENERATED}

## Principle

For Trifork slides, do not invent a layout from prose rules. Start from one of the canonical HTML templates, keep the supplied CSS, and replace only named data-slot content.

## Generation Order

1. Choose the layout id that matches the requested slide.
2. Open the matching HTML template from ${site}/templates/slides/.
3. Keep the linked CSS and the slide DOM structure.
4. Replace text, imagery, and repeated rows only inside data-slot elements.
5. Check the matching preview PNG before returning the result.
6. If hosted photography cannot load, keep the slide structure and use the ink or light background rather than inventing stock imagery.

## Hosted Files

- Manifest: ${site}/templates/slides/index.json
- CSS: ${site}/templates/slides/trifork-slide.css
- Preview directory: ${site}/visuals/slide-kit/

## Offline Skill Files

- Templates: assets/slide-templates/*.html
- CSS: assets/slide-templates/trifork-slide.css
- Compact previews: assets/slide-previews/*.png
- Logos: assets/logo/*.svg
- Tokens: assets/tokens.css

## Canonical Templates

${table([
  ["Layout", "Template", "Preview", "Slots"],
  ["---", "---", "---", "---"],
  ...rows,
])}

## Hard Constraints

- Canvas remains 1920 x 1080.
- Do not change the slide class names or the Trifork slide CSS.
- Do not redraw or type the Trifork wordmark. Use the logo asset already in the template, and keep its 495:52 (about 9.52:1) aspect ratio, never stretched or squeezed.
- Photo overlays stay flat rgba(44, 58, 66, 0.90).
- Do not add gradients, decorative blobs, stock imagery, drop shadows, or white slide backgrounds. Slides are flat.
- Columns (icons, images, numbers) scale from two to five; lists use an orange numeral or an orange dash marker, never dots or ticks.
`;
}

function socialMd() {
  const formats = Object.entries(ds.social.formats).map(([id, f]) => [
    id,
    `${f.width}x${f.height}`,
    f.use,
  ]);
  return `# Social

${GENERATED}

## Rules
${bullets(ds.social.rules)}

## Formats
${table([
  ["ID", "Size", "Use"],
  ["---", "---", "---"],
  ...formats,
])}

## Payload Shape

\`\`\`json
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
\`\`\`

Encode the JSON as base64url and append it to:

${site}/social/playground/?post=<payload>

Validate payloads against ${site}/schemas/social-post.schema.json.
`;
}

function assetsMd() {
  return `# Assets

${GENERATED}

## Asset Resolution Order

1. Use hosted URLs from ${site}/ when the web is reachable and the output will be viewed with network access.
2. If the web is unavailable, blocked by sandboxing, or the output must work offline, use the bundled skill files instead.
3. For standalone HTML graphics, inline the bundled SVG logo or copy the bundled asset next to the output. Do not depend on a network fetch for the logo.
4. For CSS tokens, use ${site}/tokens.css online and bundled assets/tokens.css offline.
5. For social playground deep links, photoSrc must be a hosted https URL. Local files and data URLs are not shareable by link, so use ink or light backgrounds when hosted imagery is unavailable.

## Tokens

- ${site}/tokens.css
- Bundled fallback: assets/tokens.css

## Logos

- Dark logo: ${assetUrl(ds.wordmark.darkLogo)}
- Light logo: ${assetUrl(ds.wordmark.lightLogo)}
- Bundled dark logo: assets/logo/Trifork_logo_RGB.svg
- Bundled light logo: assets/logo/Trifork_logo_neg_RGB.svg

## Icons

- Manifest: ${site}/assets/icons/index.json
- Exact SVG URLs are listed in the manifest. Do not rely on directory browsing.
- Bundled fallback: assets/icons/index.json and assets/icons/*.svg

## Slide Templates

- Manifest: ${site}/templates/slides/index.json
- CSS: ${site}/templates/slides/trifork-slide.css
- Hosted previews: ${site}/visuals/slide-kit/<layout-id>.png
- Bundled fallback: assets/slide-templates/*.html, assets/slide-templates/trifork-slide.css, and assets/slide-previews/*.png
- Large photography is hosted only. If hosted photography cannot load, keep the template layout and use ink or light backgrounds.

## Imagery

- Manifest: ${site}/assets/imagery/index.json
- Exact image URLs are listed in the manifest. Do not rely on directory browsing.
- Do not use imagery where "allowed" is false in the manifest.
- Bundled fallback: assets/imagery/index.json. Large photography files are not bundled into the skill zip.

${table([
  ["File", "Label", "Kind", "Allowed"],
  ["---", "---", "---", "---"],
  ...ds.imagery.map((image) => [image.file, image.label, image.kind, String(image.allowed)]),
])}
`;
}

function validationMd() {
  return `# Validation

${GENERATED}

Before returning Trifork-branded work, check:

${bullets([
  "The artefact uses Poppins Regular 400 and Medium 500 only.",
  "Titles and paragraph text on light backgrounds use ink 950.",
  "Orange is not used inside a title or paragraph.",
  "Icons use blue 900 and are never orange.",
  "Slides use blue 100 or ink 950 backgrounds only.",
  "Photo overlays are flat rgba(44, 58, 66, 0.90).",
  "There is no gradient overlay.",
  "Slide titles have at least 32 px gap before the next element.",
  "Multi-column content has no horizontal rule across the top.",
  "Standalone Trifork marks use logo assets.",
  "Copy uses UK English, no emoji, no exclamation marks, no superlatives, and no em dashes.",
  "Social posts include a playground link.",
  "HTML graphics include a Download asset button outside the captured node.",
])}

Run locally:

\`\`\`sh
npm run lint:brand
\`\`\`
`;
}

function frontmatter(skill) {
  return `---
name: ${skill.name}
version: ${ds.version}
updated: ${ds.updated}
description: ${skill.description}
when_to_use: '${skill.whenToUse}'
---`;
}

function essentialsBlock() {
  return `## Brand essentials (from trifork-brand-core)

This skill is self-contained, but trifork-brand-core holds the full brand reference. Load it for anything beyond the rules below.

- Voice: calm, structured, expert. UK English. Short, concrete sentences. No exclamation marks, superlatives, em dashes, or emoji.
- Type: Poppins Regular 400 and Medium 500 only, never bold. Sentence case for titles; ALL CAPS only for labels.
- Colour: ink 950 (#2C3A42) for titles and body on light. Orange 500 (#FF6600) is a sparing accent and a list or label marker, never phrase emphasis. Icons in blue 900 (#3C4C54).
- Logo: use the wordmark asset, keep its 495:52 (about 9.52:1) ratio, never stretch, retype, or recolour it. Negative logo on dark, RGB on light.
- Everything is flat: no drop shadows. Tokens are bundled at assets/tokens.css.`;
}

function bundledList(skill) {
  const refs = ["references/index.md", ...skill.references.map((r) => `references/${r}`)];
  const schemas = skill.schemas.map((s) => `schemas/${s}`);
  const assets = [];
  if (skill.assets.includes("tokens")) assets.push("assets/tokens.css");
  if (skill.assets.includes("logo")) assets.push("assets/logo/Trifork_logo_RGB.svg", "assets/logo/Trifork_logo_neg_RGB.svg");
  if (skill.assets.includes("icons")) assets.push("assets/icons/*.svg", "assets/icons/index.json");
  if (skill.assets.includes("imagery")) assets.push("assets/imagery/index.json");
  if (skill.slides) assets.push("assets/slide-templates/*.html", "assets/slide-templates/trifork-slide.css", "assets/slide-templates/index.json", "assets/slide-previews/*.png");
  return `## Bundled with this skill

References:
${bullets(refs)}
${schemas.length ? `\nSchemas:\n${bullets(schemas)}\n` : ""}
Assets:
${bullets(assets)}`;
}

function stayingCurrent(skill) {
  return `## Staying current

This is ${skill.name} version ${ds.version}, updated ${ds.updated}. The hosted system is authoritative: ${site}/. If ${site}/skill/${skill.name}/version.json has a higher version, reinstall from ${site}/install/.`;
}

function brandCoreSkillMd(skill) {
  return `${frontmatter(skill)}

# ${skill.title}

Brand foundations for every Trifork artefact: voice, type, colour, logo, spacing, iconography, and components. trifork-presentations and trifork-social-graphics build on this skill.

Source of truth: ${site}/  ·  Machine-readable index: ${site}/llms.txt
Prefer the live source when the web is reachable; use this bundle offline.

## Non-negotiable core

### Voice
${bullets(ds.voice)}

### Capitalisation
${bullets(ds.capitalisation)}

### Type
${bullets(ds.type.rules)}

### Colour
${bullets(ds.colors.rules)}

### Spacing and radius
${bullets(ds.spacing.rules)}

### Iconography
${bullets(ds.iconography.rules)}

### Imagery
- Use real Trifork photography and hosted assets when possible.
- Do not use stock photography of strangers or handshake cliches.
- Check references/assets.md or the live imagery manifest before choosing photos.

### Wordmark
${bullets(ds.wordmark.rules)}

## Always avoid
${bullets(ds.alwaysAvoid)}

## Tokens

Link the hosted token sheet, or use the bundled copy offline:

\`\`\`html
<link rel="stylesheet" href="${site}/tokens.css">
\`\`\`

Use --tf-* custom properties and utility classes: tf-display, tf-h1, tf-h2, tf-body, tf-caption, tf-label-spaced, tf-eyebrow.

## Asset fallback

1. Prefer hosted assets from ${site}/ when reachable.
2. Otherwise use the bundled files: assets/logo/*.svg, assets/icons/*.svg (assets/icons/index.json), assets/tokens.css.
3. Large photography is not bundled; use hosted URLs from assets/imagery/index.json, or fall back to an ink or light background.

## HTML graphics

When you produce a Trifork graphic as HTML, add a "Download asset" button outside the captured node:

\`\`\`html
<div id="tf-asset"><!-- the graphic --></div>
<button id="tf-dl" style="font:500 14px/1 'Poppins',sans-serif;padding:12px 20px;border:none;border-radius:999px;background:#2C3A42;color:#fff;cursor:pointer">Download asset</button>
<script type="module">
  import { toPng } from "https://esm.sh/html-to-image@1.11.13";
  document.getElementById("tf-dl").onclick = async () => {
    const url = await toPng(document.getElementById("tf-asset"), { pixelRatio: 2, cacheBust: true });
    const a = document.createElement("a"); a.href = url; a.download = "trifork-asset.png"; a.click();
  };
</script>
\`\`\`

${bundledList(skill)}

${stayingCurrent(skill)}`;
}

function presentationsSkillMd(skill) {
  return `${frontmatter(skill)}

# ${skill.title}

The Trifork slide system: a ${ds.slides.dimensions.width} x ${ds.slides.dimensions.height} slide kit, storytelling structure, and pitch, agenda, and case-study formats. Built on trifork-brand-core.

Source of truth: ${site}/slide-kit/  ·  ${site}/llms.txt

${essentialsBlock()}

## Slides (non-negotiable)
${bullets(ds.slides.rules)}

## Visual templates

Do not invent a layout from prose. Start from a canonical template, keep its CSS and DOM, and replace only data-slot content.

- assets/slide-templates/index.json, manifest of every layout and its slots
- assets/slide-templates/trifork-slide.css, the slide stylesheet (do not edit)
- assets/slide-templates/<layout-id>.html, the template to copy
- assets/slide-previews/<layout-id>.png, preview to check against
- Detailed reference: references/slide-kit-visual.md

Layout ids: ${ds.slides.layouts.join(", ")}.

## Storytelling structure

Default narrative for a Trifork deck; drop sections that do not apply:

1. Cover (cover-card or cover-split).
2. Agenda (agenda or agenda-list) for decks over about eight slides.
3. Context or problem: text-slide, statement, or title-content.
4. Section starters (section-start) between major parts.
5. Approach or what we do: two-columns, columns-icons, columns-numbered, or card-grid.
6. Product or capability detail: card-grid-icons, columns-images, or content and image (split-content, split-image).
7. Evidence: numeric-callouts, customer-case, quote.
8. Close: closing or closing-logo.

Format recipes:
- Product pitch: cover-split, statement (the one-line value), columns-numbered (how it works), card-grid-icons (capabilities), numeric-callouts (proof), quote, closing.
- Agenda or overview: cover-card, agenda-list, a section-start per part, two-columns, closing.
- Customer case study: cover-card, customer-case, split-content (approach), numeric-callouts (outcomes), quote, closing.

## Variety and visuals

- Vary the layout from slide to slide; do not repeat the same layout back to back. A deck of identical bullet slides reads as unfinished.
- Keep it visual: include image-based slides so a photographic or visual slide lands every few slides, not just text. Reach for cover-card or cover-photo, image-slide, columns-images, content and image splits, and customer-case.
- Let content breathe. Titles, ledes, and content flow vertically with a consistent gap, so a wrapped title pushes the rest down rather than colliding with it.

## Into Figma

These templates import cleanly into Figma (via the Figma MCP or an HTML-to-design importer) when you keep the output as the skill emits it:

- Build each slide on the fixed ${ds.slides.dimensions.width} x ${ds.slides.dimensions.height} frame; the bundled template documents already do this. Sizes use cqw, which only resolves to the right pixels against that fixed canvas, so do not drop a slide into an unsized container.
- Photo overlays and quote marks are real elements (an .overlay div, literal quotation marks), not CSS ::after pseudo-elements, so they import as their own layers. Do not convert them back to ::before or ::after.
- Use reachable image URLs. An importer can only pull a photo that actually loads; a blocked URL imports as an empty frame, so prefer hosted assets that resolve.
- Keep the data-slot attributes; importers use them to name layers.
- Fonts are Poppins Regular and Medium (a Google font Figma provides). Colours, radii, and letter-spacing are plain values that resolve on render. Keep the deck flat (no shadows) so it maps to clean Figma layers.

## Workflow

1. Pick the layout id that matches the slide.
2. Copy its HTML template; keep the CSS and structure.
3. Replace only data-slot content. Validate the spec against schemas/slide.schema.json.
4. Check the preview PNG. If hosted photography cannot load, keep the layout and use an ink or light background.
5. Run references/validation.md before returning.

${bundledList(skill)}

${stayingCurrent(skill)}`;
}

function socialSkillMd(skill) {
  const formats = Object.entries(ds.social.formats).map(([id, f]) => `- ${id} (${f.width}x${f.height}): ${f.use}`).join("\n");
  return `${frontmatter(skill)}

# ${skill.title}

Trifork social and event graphics for LinkedIn and events. Built on trifork-brand-core.

Source of truth: ${site}/social/  ·  ${site}/llms.txt

${essentialsBlock()}

## Social (non-negotiable)
${bullets(ds.social.rules)}

## Formats and aspect ratios
${formats}

## Post variants

One eyebrow, one title or body block, metadata, and an optional logo. Variants: ${ds.social.variants.join(", ")}. Vertical anchor: ${ds.social.layouts.join(", ")}. Background: ${ds.social.backgrounds.join(", ")}.

## Short copy

- Eyebrow: ALL CAPS, one short label.
- Title: sentence case, one idea; let the title size scale down as length grows (see references/social.md).
- Metadata: up to two short lines, or structured rows.
- No orange inside the title; no emoji or exclamation marks.

## Export conventions

- Build to the exact pixel size for the format; export PNG at 2x where possible.
- For an HTML graphic, add a "Download asset" button outside the captured node.
- After creating a post, give the user an "Open in the Trifork playground" link: ${site}/social/playground/?post=<base64url-JSON>. The payload must validate against schemas/social-post.schema.json.
- Carousels export as a numbered PNG set (zip).

${bundledList(skill)}

${stayingCurrent(skill)}`;
}

function skillMdFor(skill) {
  if (skill.name === "trifork-presentations") return presentationsSkillMd(skill);
  if (skill.name === "trifork-social-graphics") return socialSkillMd(skill);
  return brandCoreSkillMd(skill);
}

function perSkillIndexMd(skill) {
  const lines = skill.references.map((r) => `- references/${r}`);
  return `# ${skill.title} — references

${GENERATED}

Files bundled with this skill:
${lines.join("\n")}

Full live system: ${site}/llms.txt`;
}

function claudeMd() {
  return `# Trifork brand - project conventions

This project produces Trifork-branded work. Apply the Trifork design system to every artefact you create or edit here: presentations, slide decks, social posts, web pages, documents, emails, and diagrams. Treat this as always-on, whether or not the request names Trifork explicitly.

- Authoritative system: ${site}/llms.txt
- Full reference and assets: ${site}/
- Tokens: ${site}/tokens.css
- Offline bundled tokens: assets/tokens.css when installed as a skill
- Slide templates: ${site}/templates/slides/index.json
- Offline slide templates: assets/slide-templates/*.html and assets/slide-previews/*.png when installed as a skill

## Non-negotiable core

- Voice: calm, structured, expert. UK English. Short, concrete sentences. No exclamation marks, superlatives, em dashes, or emoji.
- Type: Poppins Regular 400 and Medium 500 only. Sentence case for titles and headings. ALL CAPS only for labels.
- Colour: ink 950 (#2C3A42) for titles and body on light backgrounds. Orange 500 (#FF6600) is a sparing accent only, never phrase emphasis. Icons use blue 900 (#3C4C54).
- Slides: 1920 x 1080. Backgrounds are only blue 100 (#D5E5ED) or ink 950 (#2C3A42), never white. Photo overlays are flat rgba(44, 58, 66, 0.90). Keep at least 32 px below titles. Use an 80 px outer margin.
- Slide generation: start from the canonical HTML template for the chosen layout. Preserve the CSS and DOM structure. Replace only data-slot content.
- Wordmark: standalone Trifork marks are always logo assets, never typed plain text.
- Asset fallback: use hosted assets when reachable. If network or sandboxing blocks access, use bundled skill files such as assets/logo/Trifork_logo_RGB.svg, assets/logo/Trifork_logo_neg_RGB.svg, assets/icons/index.json, and assets/tokens.css.
- Spacing: 8 px grid. Radii are 12 px for elements up to 199 px wide, 24 px for larger surfaces, and pill for actions and tags.
- Imagery: real Trifork photography. No stock handshakes.

## When generating output

- HTML graphics get a "Download asset" button outside the captured node.
- Social posts link to ${site}/social/playground/?post=<base64url-JSON>.

For detailed rules, load ${site}/llms/index.md or the exact relevant file listed there.
`;
}

function socialSchema() {
  const page = {
    type: "object",
    additionalProperties: false,
    required: ["variant", "layout", "bg"],
    properties: {
      variant: { enum: ds.social.variants },
      layout: { enum: ds.social.layouts },
      bg: { enum: ds.social.backgrounds },
      eyebrow: { type: "string" },
      title: { type: "string" },
      body: { type: "string" },
      meta: { type: "array", maxItems: 2, items: { type: "string" } },
      metaRows: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["label", "value"],
          properties: { label: { type: "string" }, value: { type: "string" } },
        },
      },
      positions: { type: "array", items: { type: "string" } },
      speakers: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["name"],
          properties: {
            name: { type: "string" },
            role: { type: "string" },
            company: { type: "string" },
            avatar: { type: "string", format: "uri" },
          },
        },
      },
      statNumber: { type: "string" },
      statUnit: { type: "string" },
      statLabel: { type: "string" },
      statColor: { enum: ["orange", "blue", "neutral"] },
      quoteName: { type: "string" },
      quoteRole: { type: "string" },
      quoteAvatar: { type: "string", format: "uri" },
      photoSrc: { type: "string", format: "uri" },
      photoPos: { type: "string" },
      eyebrowColor: { enum: ["auto", "orange", "white", "ink"] },
      showLogo: { type: "boolean" },
    },
  };

  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: `${site}/schemas/social-post.schema.json`,
    title: "Trifork social post payload",
    type: "object",
    additionalProperties: false,
    required: ["format", "pages"],
    properties: {
      format: { enum: Object.keys(ds.social.formats) },
      pages: { type: "array", minItems: 1, items: page },
    },
  };
}

function slideSchema() {
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: `${site}/schemas/slide.schema.json`,
    title: "Trifork slide specification",
    type: "object",
    additionalProperties: false,
    required: ["layout", "background"],
    properties: {
      layout: { enum: ds.slides.layouts },
      background: { enum: ds.slides.backgrounds.map((bg) => bg.id) },
      width: { const: ds.slides.dimensions.width },
      height: { const: ds.slides.dimensions.height },
      outerMargin: { const: ds.slides.dimensions.outerMargin },
      label: { type: "string" },
      title: { type: "string" },
      lede: { type: "string" },
      body: { type: "string" },
      page: { type: "string" },
      deckName: { type: "string" },
      photoSrc: { type: "string", format: "uri" },
      photoOverlay: { const: "rgba(44, 58, 66, 0.90)" },
      showLogo: { type: "boolean" },
      columns: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            title: { type: "string" },
            body: { type: "string" },
            icon: { type: "string" },
          },
        },
      },
      cards: { type: "array", items: { type: "object" } },
      metrics: { type: "array", items: { type: "object" } },
    },
  };
}

function iconManifest() {
  return {
    generatedFrom: "content/brand-system.mjs",
    updated: ds.updated,
    source: "Lucide stand-ins for Streamline 3.0 Regular Line",
    color: "#3C4C54",
    stroke: "2px",
    icons: ds.iconography.icons.map((icon) => ({
      ...icon,
      url: `${site}/assets/icons/${icon.file}`,
    })),
  };
}

function imageryManifest() {
  return {
    generatedFrom: "content/brand-system.mjs",
    updated: ds.updated,
    rule: "Use real Trifork photography. Do not use items where allowed is false in final work.",
    images: ds.imagery.map((image) => ({
      ...image,
      url: `${site}/assets/imagery/${image.file}`,
    })),
  };
}

const references = {
  "index.md": llmsIndex,
  "brand.md": brandMd,
  "type.md": typeMd,
  "colour.md": colourMd,
  "spacing.md": spacingMd,
  "iconography.md": iconographyMd,
  "components.md": componentsMd,
  "slides.md": slidesMd,
  "slide-kit-visual.md": slideKitVisualMd,
  "social.md": socialMd,
  "assets.md": assetsMd,
  "validation.md": validationMd,
};

async function writeText(path, text) {
  await writeFile(path, text.trimEnd() + "\n");
}

async function writeJson(path, value) {
  await writeFile(path, JSON.stringify(value, null, 2) + "\n");
}

function mimeTypeFor(path) {
  if (path.endsWith(".svg")) return "image/svg+xml";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  return "application/octet-stream";
}

async function dataUri(path) {
  const data = await readFile(path);
  return `data:${mimeTypeFor(path)};base64,${data.toString("base64")}`;
}

async function previewImageDataUri(path) {
  const data = await sharp(path)
    .resize(1920, 1080, { fit: "cover" })
    .jpeg({ quality: 72 })
    .toBuffer();
  return `data:image/jpeg;base64,${data.toString("base64")}`;
}

async function previewAssetResolver() {
  const logoDark = await dataUri(join(publicDir, "assets", "logo", "Trifork_logo_RGB.svg"));
  const logoLight = await dataUri(join(publicDir, "assets", "logo", "Trifork_logo_neg_RGB.svg"));
  const images = new Map();

  for (const image of ds.imagery) {
    const path = join(publicDir, "assets", "imagery", image.file);
    if (existsSync(path)) images.set(image.file, await previewImageDataUri(path));
  }

  return {
    logo: (variant) => (variant === "light" ? logoLight : logoDark),
    image: (file) => images.get(file),
  };
}

async function writeSlideTemplateAssets() {
  const pageCss = await readFile(join(root, "app", "slide-kit", "slide-kit.css"), "utf8");
  const css = slideTemplateCss(pageCss);
  const manifest = slideTemplateManifest(site);
  const hostedPaths = hostedSlideAssetPaths(site);
  const skillPaths = skillSlideAssetPaths(site);
  const previewAssets = await previewAssetResolver();

  await writeText(join(slideTemplatesDir, "trifork-slide.css"), css);
  await writeText(join(stagingSlideTemplatesDir, "trifork-slide.css"), css);
  await writeJson(join(slideTemplatesDir, "index.json"), manifest);
  await writeJson(join(stagingSlideTemplatesDir, "index.json"), manifest);
  await writeJson(join(stagingSlidePreviewsDir, "index.json"), {
    generatedFrom: "content/slide-templates.mjs",
    updated: ds.updated,
    previews: slideTemplates.map((template) => ({
      id: template.id,
      layoutId: template.layoutId,
      canonical: template.canonical,
      file: `${template.id}.png`,
      sourceTemplate: `../slide-templates/${template.id}.html`,
    })),
  });

  for (const template of slideTemplates) {
    await writeText(join(slideTemplatesDir, `${template.id}.html`), renderSlideDocument(template, hostedPaths));
    await writeText(join(stagingSlideTemplatesDir, `${template.id}.html`), renderSlideDocument(template, skillPaths));

    const svg = renderSlidePreviewSvg(template, previewAssets);
    const full = await sharp(Buffer.from(svg)).png().toBuffer();
    await writeFile(join(slideVisualsDir, `${template.id}.png`), full);

    const compact = await sharp(full).resize(960, 540).png().toBuffer();
    await writeFile(join(stagingSlidePreviewsDir, `${template.id}.png`), compact);
  }
}

async function writeGeneratedFiles() {
  await writeText(join(publicDir, "llms.txt"), llmsTxt());

  // Hosted machine-readable reference (the live site and llms.txt consumers).
  for (const [name, make] of Object.entries(references)) {
    await writeText(join(llmsDir, name), make());
  }

  const icons = iconManifest();
  const imagery = imageryManifest();

  await writeJson(join(schemasDir, "social-post.schema.json"), socialSchema());
  await writeJson(join(schemasDir, "slide.schema.json"), slideSchema());
  await writeJson(join(publicDir, "assets", "icons", "index.json"), icons);
  await writeJson(join(publicDir, "assets", "imagery", "index.json"), imagery);

  await writeSlideTemplateAssets();

  // Hosted index.html listings.
  await writeText(join(llmsDir, "index.html"), htmlIndex("Trifork LLM files", [
    { href: "index.md", label: "index.md" },
    ...Object.keys(references).filter((name) => name !== "index.md").map((name) => ({ href: name, label: name })),
  ]));
  await writeText(join(schemasDir, "index.html"), htmlIndex("Trifork schemas", [
    { href: "social-post.schema.json", label: "social-post.schema.json" },
    { href: "slide.schema.json", label: "slide.schema.json" },
  ]));
  await writeText(join(publicDir, "templates", "index.html"), htmlIndex("Trifork templates", [
    { href: "slides/", label: "slides/" },
  ]));
  await writeText(join(slideTemplatesDir, "index.html"), htmlIndex("Trifork slide templates", [
    { href: "index.json", label: "index.json" },
    { href: "trifork-slide.css", label: "trifork-slide.css" },
    ...slideTemplates.map((template) => ({ href: `${template.id}.html`, label: `${template.id}.html` })),
  ]));
  await writeText(join(publicDir, "visuals", "index.html"), htmlIndex("Trifork visuals", [
    { href: "slide-kit/", label: "slide-kit/" },
  ]));
  await writeText(join(slideVisualsDir, "index.html"), htmlIndex("Trifork slide kit visuals", [
    ...slideTemplates.map((template) => ({ href: `${template.id}.png`, label: `${template.id}.png` })),
  ]));
  await writeText(join(publicDir, "assets", "icons", "index.html"), htmlIndex("Trifork icon assets", [
    { href: "index.json", label: "index.json" },
    ...ds.iconography.icons.map((icon) => ({ href: icon.file, label: icon.file })),
  ]));
  await writeText(join(publicDir, "assets", "imagery", "index.html"), htmlIndex("Trifork imagery assets", [
    { href: "index.json", label: "index.json" },
    ...ds.imagery.map((image) => ({ href: image.file, label: image.file })),
  ]));

  // The three focused, self-contained skills.
  const built = [];
  for (const skill of ds.skills) built.push(await buildOneSkill(skill));

  await writeJson(join(skillsRoot, "skills.json"), {
    generatedFrom: "content/brand-system.mjs",
    updated: ds.updated,
    version: ds.version,
    skills: ds.skills.map((s) => ({
      name: s.name,
      title: s.title,
      description: s.description,
      whenToUse: s.whenToUse,
      skill: `${s.name}/SKILL.md`,
      zip: `${s.name}.zip`,
    })),
  });
  await writeText(join(skillsRoot, "index.html"), htmlIndex("Trifork skills", [
    { href: "skills.json", label: "skills.json" },
    ...ds.skills.flatMap((s) => [
      { href: `${s.name}/SKILL.md`, label: `${s.name}/SKILL.md` },
      { href: `${s.name}.zip`, label: `${s.name}.zip` },
    ]),
  ]));

  return built;
}

const schemaBuilders = {
  "slide.schema.json": slideSchema,
  "social-post.schema.json": socialSchema,
};

async function buildOneSkill(skill) {
  const dir = skillDirOf(skill.name);
  const refsDir = join(dir, "references");
  const assetsDir = join(dir, "assets");
  await mkdir(refsDir, { recursive: true });
  await mkdir(assetsDir, { recursive: true });

  await writeText(join(dir, "SKILL.md"), skillMdFor(skill));
  await writeJson(join(dir, "version.json"), {
    name: skill.name,
    version: ds.version,
    updated: ds.updated,
    generatedFrom: "content/brand-system.mjs",
  });
  if (skill.claudeMd) await writeText(join(dir, "CLAUDE.md"), claudeMd());

  await writeText(join(refsDir, "index.md"), perSkillIndexMd(skill));
  for (const name of skill.references) {
    await writeText(join(refsDir, name), references[name]());
  }

  if (skill.schemas.length) {
    await mkdir(join(dir, "schemas"), { recursive: true });
    for (const name of skill.schemas) {
      await writeJson(join(dir, "schemas", name), schemaBuilders[name]());
    }
  }

  if (skill.assets.includes("tokens")) {
    await copyFile(join(publicDir, "tokens.css"), join(assetsDir, "tokens.css"));
  }
  if (skill.assets.includes("logo")) {
    await mkdir(join(assetsDir, "logo"), { recursive: true });
    await copyFile(join(publicDir, "assets", "logo", "Trifork_logo_RGB.svg"), join(assetsDir, "logo", "Trifork_logo_RGB.svg"));
    await copyFile(join(publicDir, "assets", "logo", "Trifork_logo_neg_RGB.svg"), join(assetsDir, "logo", "Trifork_logo_neg_RGB.svg"));
  }
  if (skill.assets.includes("icons")) {
    await mkdir(join(assetsDir, "icons"), { recursive: true });
    await writeJson(join(assetsDir, "icons", "index.json"), iconManifest());
    for (const icon of ds.iconography.icons) {
      await copyFile(join(publicDir, "assets", "icons", icon.file), join(assetsDir, "icons", icon.file));
    }
  }
  if (skill.assets.includes("imagery")) {
    await mkdir(join(assetsDir, "imagery"), { recursive: true });
    await writeJson(join(assetsDir, "imagery", "index.json"), imageryManifest());
  }
  if (skill.slides) {
    await cp(stagingSlideTemplatesDir, join(assetsDir, "slide-templates"), { recursive: true });
    await cp(stagingSlidePreviewsDir, join(assetsDir, "slide-previews"), { recursive: true });
  }

  return { name: skill.name, bytes: await zipSkill(skill, dir) };
}

async function addDirToZip(zipFolder, baseDir, rel = "") {
  const entries = await readdir(join(baseDir, rel), { withFileTypes: true });
  for (const entry of entries) {
    const r = rel ? join(rel, entry.name) : entry.name;
    if (entry.isDirectory()) {
      await addDirToZip(zipFolder, baseDir, r);
    } else {
      zipFolder.file(r, await readFile(join(baseDir, r)));
    }
  }
}

async function zipSkill(skill, dir) {
  const zip = new JSZip();
  const folder = zip.folder(skill.name);
  await addDirToZip(folder, dir);
  const buf = await zip.generateAsync({ type: "nodebuffer" });
  await writeFile(join(skillsRoot, `${skill.name}.zip`), buf);
  return buf.length;
}

await ensureDirs();
const built = await writeGeneratedFiles();

console.log(`Wrote AI assets for ${ds.name} ${ds.version}`);
for (const entry of built) console.log(`Built ${entry.name} skill (${entry.bytes} bytes)`);
