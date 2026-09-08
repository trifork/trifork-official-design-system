---
name: trifork-brand-core
version: 1.3.0
updated: 2026-06-09
description: Trifork brand foundations: brand voice and tone of voice, Poppins typography, the ink/blue/orange palette, logo usage, spacing, iconography, components, and do/don't rules. The base every other Trifork skill builds on.
when_to_use: 'Use whenever you create or edit any Trifork artefact, or answer any question about Trifork brand: colour, logo usage, tone of voice, typography, spacing, icons, or components. Load this first for any Trifork work, including inside a Trifork project when Trifork is not named explicitly.'
---

# Trifork Brand Core

Brand foundations for every Trifork artefact: voice, type, colour, logo, spacing, iconography, and components. trifork-presentations and trifork-social-graphics build on this skill.

Source of truth: https://brand.trifork.com/system/  ·  Machine-readable index: https://brand.trifork.com/system/llms.txt
Prefer the live source when the web is reachable; use this bundle offline.

## Non-negotiable core

### Voice
- Calm, structured, expert. Trifork explains rather than sells.
- Use UK English: colour, organisation, centre.
- Use short, concrete sentences. Specifics beat adjectives.
- Use 'we' when speaking from inside Trifork and 'Trifork' externally.
- Say customers or partners, never clients.
- Say engagement or programme, not project. Say build or platform, not solution.
- Say the team, engineers, or consultants, never resources.
- Avoid exclamation marks, emoji, em dashes, and superlatives such as revolutionary, world-class, or cutting-edge.

### Capitalisation
- Use sentence case for headlines and titles.
- Use Title Case only for proper nouns and named offerings.
- Use ALL CAPS only for labels, such as eyebrow labels, slide labels, and section labels.

### Type
- Use Poppins only.
- Display and H1 use Regular 400.
- Medium 500 is for smaller headlines, labels, numeric callouts, and UI.
- Do not use bold or black weights. Rewrite the sentence instead.
- Use tight tracking on display and headline sizes only. Use default tracking elsewhere.

### Colour
- Use ink 950 (#2C3A42) for titles, body ink, and any title or paragraph text on a light background.
- Use orange 500 (#FF6600) sparingly: a slide label, one numeric callout, the wordmark dot, or a single button.
- Do not colour words inside a title or paragraph orange.
- Do not end a title with an orange period.
- Use icons in blue 900 (#3C4C54), never orange.
- Use white as a surface or on dark backgrounds. Do not use white as a slide background.

### Spacing and radius
- Use the 8 px grid for gaps, padding, and offsets.
- Use generous spacing between blocks: 48 to 80 px on slides.
- Use 8 to 24 px inside dense components.
- Use 12 px radius for elements up to 199 px wide and 24 px for larger elements.

### Iconography
- Use single-stroke, monochromatic, geometric line icons.
- Use a 24 x 24 grid, 2 px stroke, round caps, and round joins.
- Use blue 900 (#3C4C54) for icons. Do not tint icons orange.
- Use Streamline 3.0 Regular Line as the production source. The bundled SVGs are Lucide stand-ins with matching construction.

### Imagery
- Use real Trifork photography and hosted assets when possible.
- Do not use stock photography of strangers or handshake cliches.
- Check references/assets.md or the live imagery manifest before choosing photos.

### Wordmark
- When the Trifork name stands alone, use the logo asset.
- Use the dark logo on light backgrounds and the light logo on dark backgrounds.
- The wordmark has a fixed 495:52 (about 9.52:1) aspect ratio. Scale it by one dimension and let the other follow. Never stretch or squeeze it into a box of another ratio.
- Keep the wordmark flat with no shadow, and never recolour the orange dot.
- Type the name only inside running content, such as labels, titles, and sentences.
- Never typeset Trifork by itself as a standalone logo or corner mark.

## Always avoid
- White or any colour other than blue 100 or ink 950 as a slide background.
- Bold body copy.
- Orange tints on icons.
- Orange as emphasis inside a title or paragraph.
- Orange periods at the end of titles.
- ALL CAPS in titles or paragraph copy.
- A separator rule above a multi-column content row.
- Title or paragraph text on light backgrounds in any colour other than ink 950.
- Emoji, exclamation marks, superlatives, em dashes, stock-photo handshakes, Title Case headlines, and US spellings.
- The Trifork name set in plain type as a standalone logo or corner mark.

## Tokens

Link the hosted token sheet, or use the bundled copy offline:

```html
<link rel="stylesheet" href="https://brand.trifork.com/system/tokens.css">
```

Use --tf-* custom properties and utility classes: tf-display, tf-h1, tf-h2, tf-body, tf-caption, tf-label-spaced, tf-eyebrow.

## Asset fallback

1. Prefer hosted assets from https://brand.trifork.com/system/ when reachable.
2. Otherwise use the bundled files: assets/logo/*.svg, assets/icons/*.svg (assets/icons/index.json), assets/tokens.css.
3. Large photography is not bundled; use hosted URLs from assets/imagery/index.json, or fall back to an ink or light background.

## HTML graphics

When you produce a Trifork graphic as HTML, add a "Download asset" button outside the captured node:

```html
<div id="tf-asset"><!-- the graphic --></div>
<button id="tf-dl" style="font:500 14px/1 'Poppins',sans-serif;padding:12px 20px;border:none;border-radius:999px;background:#2C3A42;color:#fff;cursor:pointer">Download asset</button>
<script type="module">
  import { toPng } from "https://esm.sh/html-to-image@1.11.13";
  document.getElementById("tf-dl").onclick = async () => {
    const url = await toPng(document.getElementById("tf-asset"), { pixelRatio: 2, cacheBust: true });
    const a = document.createElement("a"); a.href = url; a.download = "trifork-asset.png"; a.click();
  };
</script>
```

## Bundled with this skill

References:
- references/index.md
- references/brand.md
- references/type.md
- references/colour.md
- references/spacing.md
- references/iconography.md
- references/components.md
- references/assets.md
- references/validation.md

Assets:
- assets/tokens.css
- assets/logo/Trifork_logo_RGB.svg
- assets/logo/Trifork_logo_neg_RGB.svg
- assets/icons/*.svg
- assets/icons/index.json
- assets/imagery/index.json

## Staying current

This is trifork-brand-core version 1.3.0, updated 2026-06-09. The hosted system is authoritative: https://brand.trifork.com/system/. If https://brand.trifork.com/system/skill/trifork-brand-core/version.json has a higher version, reinstall from https://brand.trifork.com/system/install/.
