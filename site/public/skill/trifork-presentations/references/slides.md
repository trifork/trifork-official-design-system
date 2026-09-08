# Slides

Generated from content/brand-system.mjs. Do not edit by hand.

## Contract

- Canvas: 1920 x 1080.
- Outer margin: 80px.
- Allowed backgrounds: blue 100 and ink 950 only.
- Standard photo overlay: rgba(44, 58, 66, 0.90).

## Rules
- Slide backgrounds are only blue 100 (#D5E5ED) or ink 950 (#2C3A42). Never white.
- The slide frame itself is square, never rounded. Corner radius is reserved for elements placed on the slide (cards, images, chrome) and never applied to the slide background or outer canvas. If a slide is later placed inside a rounded container (a browser gallery, a device frame), that rounding belongs to the container, not the template.
- Photo overlays are flat ink 950 at 90 percent opacity: rgba(44, 58, 66, 0.90). No gradients and no other tints.
- Cards are white on light slides and rgba(0, 0, 0, 0.10) on dark slides.
- Line separators are blue 200 (#C1D7E5) on light slides and rgba(255, 255, 255, 0.30) on dark slides. Use rules sparingly, only to separate stacked list or table rows.
- Slides are flat: no drop shadows, glows, or bevels on cards, rules, images, text, or the logo. Separation comes from colour, fill, and whitespace.
- Keep at least 32 px between a slide title and the next element below it.
- Do not put a horizontal rule across the top of, or between, a multi-column content row, and never put a rule under a title or sub-heading.
- Lists use one of two markers: an orange Medium numeral (01, 02, 03) or a short orange line bullet (a 2px rule, not a character). Body text stays ink (white on dark). Do not use dots, ticks, chevrons, arrows, or emoji as a bullet, and never colour list body text orange.
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

## Layout IDs
- cover-card
- cover-split
- separator
- separator-dark
- separator-photo
- agenda
- section-start
- title-bullets
- text-slide
- image-slide
- numeric-callouts
- two-columns
- card-grid
- quote
- customer-case
- columns-icons
- columns-images
- columns-numbered
- card-grid-icons
- split-content
- split-image
- title-content
- statement
- agenda-list
- closing
- closing-logo

## Visual Templates

Rules alone are not enough for slide work. Start from the canonical HTML templates and keep their CSS:

- Template manifest: https://brand.trifork.com/system/templates/slides/index.json
- Template CSS: https://brand.trifork.com/system/templates/slides/trifork-slide.css
- Preview images: https://brand.trifork.com/system/visuals/slide-kit/<layout-id>.png
- Detailed visual reference: https://brand.trifork.com/system/llms/slide-kit-visual.md

Replace only elements marked with data-slot. Preserve canvas size, chrome, logo placement, spacing, and colour tokens.

## Validation

Validate generated slide specs against https://brand.trifork.com/system/schemas/slide.schema.json.
