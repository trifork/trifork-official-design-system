---
name: trifork-presentations
version: 1.3.0
updated: 2026-06-09
description: Trifork presentation and slide system: the 1920x1080 slide kit (covers, agenda, columns, cards, content and image splits, large statement, quote, customer case, closing), storytelling structure, and agenda, case-study, and product-pitch formats for PowerPoint and Google Slides.
when_to_use: 'Use whenever you create or edit a presentation, slide deck, pitch, keynote, or .pptx in a Trifork context, including building a product pitch, an agenda, or a customer case-study deck.'
---

# Trifork Presentations

The Trifork slide system: a 1920 x 1080 slide kit, storytelling structure, and pitch, agenda, and case-study formats. Built on trifork-brand-core.

Source of truth: https://brand.trifork.com/system/slide-kit/  ·  https://brand.trifork.com/system/llms.txt

## Brand essentials (from trifork-brand-core)

This skill is self-contained, but trifork-brand-core holds the full brand reference. Load it for anything beyond the rules below.

- Voice: calm, structured, expert. UK English. Short, concrete sentences. No exclamation marks, superlatives, em dashes, or emoji.
- Type: Poppins Regular 400 and Medium 500 only, never bold. Sentence case for titles; ALL CAPS only for labels.
- Colour: ink 950 (#2C3A42) for titles and body on light. Orange 500 (#FF6600) is a sparing accent and a list or label marker, never phrase emphasis. Icons in blue 900 (#3C4C54).
- Logo: use the wordmark asset, keep its 495:52 (about 9.52:1) ratio, never stretch, retype, or recolour it. Negative logo on dark, RGB on light.
- Everything is flat: no drop shadows. Tokens are bundled at assets/tokens.css.

## Slides (non-negotiable)
- Slide backgrounds are only blue 100 (#D5E5ED) or ink 950 (#2C3A42). Never white.
- The slide frame itself is square, never rounded. Corner radius is reserved for elements placed on the slide (cards, images, chrome) and never applied to the slide background or outer canvas. If a slide is later placed inside a rounded container (a browser gallery, a device frame), that rounding belongs to the container, not the template.
- Photo overlays are flat ink 950 at 90 percent opacity: rgba(44, 58, 66, 0.90). No gradients and no other tints.
- Cards are white on light slides and rgba(0, 0, 0, 0.10) on dark slides.
- Line separators are blue 200 (#C1D7E5) on light slides and rgba(255, 255, 255, 0.30) on dark slides. Use rules sparingly, only to separate stacked list or table rows.
- Slides are flat: no drop shadows, glows, or bevels on cards, rules, images, text, or the logo. Separation comes from colour, fill, and whitespace.
- Keep at least 32 px between a slide title and the next element below it.
- Do not put a horizontal rule across the top of, or between, a multi-column content row, and never put a rule under a title or sub-heading.
- Lists use one of two markers: an orange Medium numeral (01, 02, 03) or a short orange dash rule. Body text stays ink (white on dark). Do not use dots, ticks, arrows, or emoji, and never colour list body text orange.
- Columns scale from two to five (five only when copy is short). Each column may carry a line icon, a rounded image, or an orange step number above its title.
- Use an 80 px outer margin on a 1920 x 1080 canvas; titles, label, and footer sit at the 80 px margin, while ledes, columns, and body indent to 144 px.
- Title and body type scale with slide width: cover title ~5.5%, slide title ~4.2%, lede ~1.5%, body ~1.25%, card/stat label ~1%, chrome label ~0.75% (8 pt floor). Slide titles read clearly smaller than the cover.
- The slide label sits top-left in orange tracked caps, Poppins Medium (500), 0.16em tracking. Never bold (700) anywhere.
- The footer carries the page number, a slash, and the slide name at bottom-left. The Trifork logo anchors bottom-right.
- Cover slides carry the deck name and year bottom-left, set slightly larger than the content footer, and never show a page number.
- Title, lede, and content flow vertically: when a title wraps to more than one line, the description and the content below start beneath it with a consistent gap, never overlapping or crammed against it. Leave generous space between blocks; content should never feel cramped.
- Use a variety of layouts across a deck and avoid repeating the same layout on consecutive slides.
- Keep decks visual: use image-based slides (cover-card or cover-photo, image-slide, columns-images, content and image splits, customer-case) so a photographic or visual slide appears every few slides, not only text.
- Use the logo asset for the standalone Trifork wordmark; keep its 495:52 (about 9.52:1) aspect ratio. Scale by one dimension and let the other follow. Never stretch, squeeze, retype, or recolour it.
- Eyebrow and label text (slide label, footer, section numbers, group labels, stat numbers, table-row keys, role labels) is single-line: never wrap it. In the HTML templates this is `white-space: nowrap`; when exporting to PPTX, size the text box to the content instead of letting the exporter guess a width and wrap it.
- Rounded photo containers (cover photo card, split image card, case-study photo, figure, portrait, thumb) carry `data-om-raster` in the HTML templates. Preserve this marker: it tells PPTX export to embed the container as a flattened image so the corner radius survives, instead of falling back to a native rectangle shape.

## Visual templates

Do not invent a layout from prose. Start from a canonical template, keep its CSS and DOM, and replace only data-slot content.

- assets/slide-templates/index.json, manifest of every layout and its slots
- assets/slide-templates/trifork-slide.css, the slide stylesheet (do not edit)
- assets/slide-templates/<layout-id>.html, the template to copy
- assets/slide-previews/<layout-id>.png, preview to check against
- Detailed reference: references/slide-kit-visual.md

Layout ids: cover-card, cover-split, separator, separator-dark, separator-photo, agenda, section-start, title-bullets, text-slide, image-slide, numeric-callouts, two-columns, card-grid, quote, customer-case, columns-icons, columns-images, columns-numbered, card-grid-icons, split-content, split-image, title-content, statement, agenda-list, closing, closing-logo.

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

- Build each slide on the fixed 1920 x 1080 frame; the bundled template documents already do this. Sizes use cqw, which only resolves to the right pixels against that fixed canvas, so do not drop a slide into an unsized container.
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

## Bundled with this skill

References:
- references/index.md
- references/slides.md
- references/slide-kit-visual.md
- references/validation.md

Schemas:
- schemas/slide.schema.json

Assets:
- assets/tokens.css
- assets/logo/Trifork_logo_RGB.svg
- assets/logo/Trifork_logo_neg_RGB.svg
- assets/icons/*.svg
- assets/icons/index.json
- assets/imagery/index.json
- assets/slide-templates/*.html
- assets/slide-templates/trifork-slide.css
- assets/slide-templates/index.json
- assets/slide-previews/*.png

## Staying current

This is trifork-presentations version 1.3.0, updated 2026-06-09. The hosted system is authoritative: https://brand.trifork.com/system/. If https://brand.trifork.com/system/skill/trifork-presentations/version.json has a higher version, reinstall from https://brand.trifork.com/system/install/.
