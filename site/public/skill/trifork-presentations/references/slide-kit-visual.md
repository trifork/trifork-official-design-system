# Slide Kit Visual Reference

Generated from content/brand-system.mjs. Do not edit by hand.

## Principle

For Trifork slides, do not invent a layout from prose rules. Start from one of the canonical HTML templates, keep the supplied CSS, and replace only named data-slot content.

## Generation Order

1. Choose the layout id that matches the requested slide.
2. Open the matching HTML template from https://brand.trifork.com/system/templates/slides/.
3. Keep the linked CSS and the slide DOM structure.
4. Replace text, imagery, and repeated rows only inside data-slot elements.
5. Check the matching preview PNG before returning the result.
6. If hosted photography cannot load, keep the slide structure and use the ink or light background rather than inventing stock imagery.

## Hosted Files

- Manifest: https://brand.trifork.com/system/templates/slides/index.json
- CSS: https://brand.trifork.com/system/templates/slides/trifork-slide.css
- Preview directory: https://brand.trifork.com/system/visuals/slide-kit/

## Offline Skill Files

- Templates: assets/slide-templates/*.html
- CSS: assets/slide-templates/trifork-slide.css
- Compact previews: assets/slide-previews/*.png
- Logos: assets/logo/*.svg
- Tokens: assets/tokens.css

## Canonical Templates

| Layout | Template | Preview | Slots |
| --- | --- | --- | --- |
| cover-card | https://brand.trifork.com/system/templates/slides/cover-card.html | https://brand.trifork.com/system/visuals/slide-kit/cover-card.png | photo, logo, title, deck, year, summary |
| cover-split | https://brand.trifork.com/system/templates/slides/cover-split.html | https://brand.trifork.com/system/visuals/slide-kit/cover-split.png | logo, label, title, lede, photo, deck, year |
| separator | https://brand.trifork.com/system/templates/slides/separator.html | https://brand.trifork.com/system/visuals/slide-kit/separator.png | label, title, lede, footer, logo |
| separator-dark | https://brand.trifork.com/system/templates/slides/separator-dark.html | https://brand.trifork.com/system/visuals/slide-kit/separator-dark.png | label, title, lede, footer, logo |
| separator-photo | https://brand.trifork.com/system/templates/slides/separator-photo.html | https://brand.trifork.com/system/visuals/slide-kit/separator-photo.png | photo, label, title, lede, footer, logo |
| agenda | https://brand.trifork.com/system/templates/slides/agenda.html | https://brand.trifork.com/system/visuals/slide-kit/agenda.png | label, title, agendaItems, footer, logo |
| section-start | https://brand.trifork.com/system/templates/slides/section-start.html | https://brand.trifork.com/system/visuals/slide-kit/section-start.png | label, sectionNumber, title, body, footer, logo |
| title-bullets | https://brand.trifork.com/system/templates/slides/title-bullets.html | https://brand.trifork.com/system/visuals/slide-kit/title-bullets.png | label, title, lede, bullets, footer, logo |
| text-slide | https://brand.trifork.com/system/templates/slides/text-slide.html | https://brand.trifork.com/system/visuals/slide-kit/text-slide.png | label, title, body, footer, logo |
| image-slide | https://brand.trifork.com/system/templates/slides/image-slide.html | https://brand.trifork.com/system/visuals/slide-kit/image-slide.png | photo, caption, footer, logo |
| numeric-callouts | https://brand.trifork.com/system/templates/slides/numeric-callouts.html | https://brand.trifork.com/system/visuals/slide-kit/numeric-callouts.png | label, title, lede, groupLabel, metrics, footer, logo |
| two-columns | https://brand.trifork.com/system/templates/slides/two-columns.html | https://brand.trifork.com/system/visuals/slide-kit/two-columns.png | label, title, lede, columns, footer, logo |
| card-grid | https://brand.trifork.com/system/templates/slides/card-grid.html | https://brand.trifork.com/system/visuals/slide-kit/card-grid.png | label, title, lede, cards, footer, logo |
| quote | https://brand.trifork.com/system/templates/slides/quote.html | https://brand.trifork.com/system/visuals/slide-kit/quote.png | label, quote, portrait, name, role, footer, logo |
| customer-case | https://brand.trifork.com/system/templates/slides/customer-case.html | https://brand.trifork.com/system/visuals/slide-kit/customer-case.png | label, title, photo, metadata, lede, footer, logo |
| columns-icons | https://brand.trifork.com/system/templates/slides/columns-icons.html | https://brand.trifork.com/system/visuals/slide-kit/columns-icons.png | label, title, lede, columns, footer, logo |
| columns-images | https://brand.trifork.com/system/templates/slides/columns-images.html | https://brand.trifork.com/system/visuals/slide-kit/columns-images.png | label, title, lede, columns, footer, logo |
| columns-numbered | https://brand.trifork.com/system/templates/slides/columns-numbered.html | https://brand.trifork.com/system/visuals/slide-kit/columns-numbered.png | label, title, columns, footer, logo |
| card-grid-icons | https://brand.trifork.com/system/templates/slides/card-grid-icons.html | https://brand.trifork.com/system/visuals/slide-kit/card-grid-icons.png | label, title, lede, cards, footer, logo |
| split-content | https://brand.trifork.com/system/templates/slides/split-content.html | https://brand.trifork.com/system/visuals/slide-kit/split-content.png | label, title, lede, bullets, photo, footer, logo |
| split-image | https://brand.trifork.com/system/templates/slides/split-image.html | https://brand.trifork.com/system/visuals/slide-kit/split-image.png | photo, label, title, lede, bullets, footer, logo |
| title-content | https://brand.trifork.com/system/templates/slides/title-content.html | https://brand.trifork.com/system/visuals/slide-kit/title-content.png | label, title, body, footer, logo |
| statement | https://brand.trifork.com/system/templates/slides/statement.html | https://brand.trifork.com/system/visuals/slide-kit/statement.png | label, statement, lede, footer, logo |
| agenda-list | https://brand.trifork.com/system/templates/slides/agenda-list.html | https://brand.trifork.com/system/visuals/slide-kit/agenda-list.png | agendaItems, footer, logo |
| closing | https://brand.trifork.com/system/templates/slides/closing.html | https://brand.trifork.com/system/visuals/slide-kit/closing.png | photo, title, role, name, contact, logo |
| closing-logo | https://brand.trifork.com/system/templates/slides/closing-logo.html | https://brand.trifork.com/system/visuals/slide-kit/closing-logo.png | photo, logo |

## Hard Constraints

- Canvas remains 1920 x 1080.
- Do not change the slide class names or the Trifork slide CSS.
- Do not redraw or type the Trifork wordmark. Use the logo asset already in the template, and keep its 495:52 (about 9.52:1) aspect ratio, never stretched or squeezed.
- Photo overlays stay flat rgba(44, 58, 66, 0.90).
- Do not add gradients, decorative blobs, stock imagery, drop shadows, or white slide backgrounds. Slides are flat.
- Columns (icons, images, numbers) scale from two to five; lists use an orange numeral or an orange dash marker, never dots or ticks.
