# Trifork Design System, usage skill

When designing for Trifork, use this design system as the source of truth. The full reference lives in `README.md` and the linked HTML pages.

## Quick rules

- **Type:** Poppins, Regular (400) and Medium (500) only. Never bold (700) or any heavier weight — there is no bold Poppins in the brand and faux-bold breaks the calm register. Map weights by role: **titles, ledes, body, list text, stat numbers → Regular (400); labels, sub-headings, card titles, eyebrow → Medium (500).** Sentence case. Tight tracking on display sizes only.
- **Type sizing:** never eyeball point sizes. Slide type is scaled as a fraction of slide width — see the table in *Building a presentation*. Slide titles are markedly smaller than the cover title (≈3.6% of width vs ≈5.5%); ledes and body are smaller again. Oversized titles/body are the most common way a deck stops looking like Trifork.
- **Capitals:** ALL CAPS is reserved for labels (eyebrow labels, slide labels, section labels). Never in titles, headings, or paragraph copy.
- **Title gap:** at least 32 px between a slide title and the next element below it (lede, body, columns, list, image). On the 1920 × 1080 design target every slide in the kit clears this; never sit a paragraph or content block flush under a title.
- **Line separators on slides:** blue 200 (`--tf-blue-200`, `#C1D7E5`) on light slides; 30% white (`rgba(255, 255, 255, 0.3)`) on dark slides. No other rule colours inside slide content. Use rules sparingly — only to separate stacked list/table rows. Never put a rule under a title or sub-heading (that reads as an AI accent line), and never use a full-width rule as a section divider between blocks.
- **No shadows.** The system is flat. Cards, lines, images, the logo, and text carry no drop shadow, glow, or bevel. (The soft `box-shadow` on `.slide` in `slide-kit.html` is gallery chrome for the documentation page only — it is not part of any slide and must never be reproduced inside a deck.)
- **Square slide frame.** The slide background/outer canvas is never rounded — only individual elements on a slide (cards, images, chrome) take a corner radius. (The `border-radius` on `.slide` in `slide-kit.html` is the same gallery chrome as the shadow above: it lifts the thumbnail off the documentation page and must never be reproduced inside a deck. If a slide is embedded in a rounded container elsewhere, that rounding belongs to the container, not the template.)
- **Image overlays:** any dark overlay over an image uses ink 950 at 90% opacity (`rgba(44, 58, 66, 0.9)`), flat — no gradients, no other tints.
- **Cards on slides:** white surface (`--tf-white`) on light slides; 10% opaque black (`rgba(0, 0, 0, 0.1)`) on dark slides. No other card fills.
- **Slide backgrounds:** only two colours. Light slides use `--tf-blue-100` (#D5E5ED). Dark slides use `--tf-ink-950` (#2C3A42). Never white. Never any other colour.
- **Colour:** Foundation `#2C3A42` (ink 950, dark neutral) for titles, ink, and any text on a light background. Accent `#FF6600` (orange 500) used sparingly, slide label, one numeric callout, the wordmark dot, a single button.
- **Text on light backgrounds** always sits in ink 950 (`--tf-ink-950`, #2C3A42). Lower-contrast neutrals are reserved for metadata, captions, and chrome, never for titles or paragraph copy.
- **Orange is not an emphasis tool.** Never colour part of a title or a phrase in a paragraph orange to draw the eye. Use weight, position, or a separate label instead.
- **Title endings.** Sentence-case titles end with a black full stop (or none). Never end a title with an orange period.
- **Multi-column slides** never use a horizontal rule above the columns, and no vertical rules between them either. Columns stand on their own; the title and lede establish the grouping. (A divider between a lede and a stat row is still a rule above a column row — don't.)
- **Lists** use the numbered-list pattern: a Medium orange `01 02 03…` numeral in the left column, body text in ink, and a thin separator rule above each item (blue 200 on light, 30% white on dark). Never use orange dashes, dots, ticks, or any decorative glyph as a bullet marker — that is orange used as decoration, which the system forbids. See `.bullets` in `components.html`.
- **Photography** is part of the identity, not optional. Use real photos from `assets/imagery/` on the cover, the closing, and at least one content slide. Any dark overlay is flat ink 950 at 90% (`rgba(44, 58, 66, 0.9)`). A deck with no imagery does not read as Trifork.
- **Spacing:** 8 px base unit. Slide outer margin is 80 px on a 1920 × 1080 canvas.
- **Radii:** 12 px ≤ 199 px wide; 24 px > 200 px wide; pill for actions.
- **Icons:** monochromatic line icons in blue 900, never tinted with orange.
- **Logo:** the Trifork wordmark has a fixed aspect ratio of **495 : 52 (≈ 9.52 : 1)**. Place it by setting one dimension and letting the other follow that ratio — never free-resize it into an arbitrary box, which squeezes the wordmark. Use the negative (white) logo on dark slides, the RGB logo on light. Keep the orange dot; never recolour it.
- **Voice:** UK English, sentences short, no emoji, no superlatives. Specifics over adjectives.

## How to start a new artefact

1. Link `tokens.css`.
2. Use the utility classes (`tf-display`, `tf-h1`, `tf-h2`, `tf-h3`, `tf-h4`, `tf-lead`, `tf-body`, `tf-caption`, `tf-label-spaced`, `tf-eyebrow`).
3. For slides, copy a template from `slide-kit.html`, the chrome (label, page number, wordmark) is already wired.
4. Photography from `assets/imagery/`, icons from `assets/icons/`, logo from `assets/logo/Trifork_logo_RGB.svg`.

## Building a presentation (PPTX)

`slide-kit.html` is the source of truth for slides. When generating a `.pptx`, reproduce those layouts — do not invent new ones. The kit's sizes are expressed as a fraction of slide width (`cqw` = 1% of width), which is resolution-independent. Convert to points with `pt = (fraction/100) × slide_width_inches × 72`.

**Canvas.** Author at the standard 16:9 widescreen size, **13.333 in × 7.5 in**. (The older 10 in × 5.625 in canvas is also valid — the fractions below still apply, but recompute the points.)

**Type scale** (the fraction is canonical; points shown for the 13.333 in canvas):

| Role | Fraction of width | pt @ 13.333 in | Weight |
|---|---|---|---|
| Cover / display title | 5.5% | 53 | Regular |
| Large photo-card cover title | 6% | 58 | Regular |
| Section-starter number | 12% | 115 | Regular |
| Section-starter title (h1) | 5% | 48 | Regular |
| Slide title (h2) | 3.6% | 35 | Regular |
| Agenda title | 4% | 38 | Regular |
| Quote | 3% | 29 | Regular |
| Image caption | 2.2% | 21 | Regular |
| Big stat number | 5% | 48 | Regular |
| Two-column sub-head (h3) | 1.6% | 15 | Medium |
| Card title (h3) | 1.4% | 13 | Medium |
| Lede / body | 1.25% | 12 | Regular |
| Two-column body | 1.15% | 11 | Regular |
| Card body, stat label | 1% | 10 | Regular |
| Chrome label, group label, footer | 0.75–0.85% | 8 (floor) | Medium |

Keep chrome (eyebrow label, footer) at an **8 pt floor** for legibility even if the fraction computes smaller. Slide titles must read as clearly smaller than the cover title — never set a content-slide title at 40 pt+.

**Weights.** Titles, ledes, body, list text and stat numbers are Regular (400). Labels, sub-headings and card titles are Medium (500). Never apply bold (700) — set the run to Poppins Medium instead.

**Layout & grid.** One content left edge per deck. The eyebrow label, title, lede, columns, cards, list and footer all align to the *same* left margin — never indent the lede or a content block away from the title above it. Outer margin is 80 px on the 1920-reference grid (≈4% of width); slide chrome (label top-left, page number bottom-left, wordmark bottom-right) sits slightly tighter at ≈2.6% of width.

**Covers.** Use one of the kit covers only: `.cover` (ink title on blue 100), `.cover-photo`, `.cover-card`, or `.cover-split`. Do not invent a floating dark panel on a light slide.

**Closing.** Photo background + flat 90% ink-950 overlay, large title, then a person stack (Medium orange role label / name / contact). Negative (white) wordmark. **No page number, no footer, and no separator rule** on the closing slide.

**Lists.** Numbered pattern only (orange Medium numeral + ink text + thin top rule per item). No dash/dot/tick markers. See *Lists* in Quick rules.

**Cards.** White fill on light slides, 10% black on dark slides. Corner radius is `--tf-r-md` **12 px** for slide cards — set it explicitly; do not leave PowerPoint's default rounded-rectangle radius, which is far too round.

**Separators.** Blue 200 (`#C1D7E5`) on light slides, 30% white (`rgba(255,255,255,0.3)`) on dark slides — these two values only. No other rule colour, and none above/between columns or under headings.

**Effects.** Flat throughout. Do not apply drop shadows, glows, reflections or bevels to any shape, line, card, image or the logo. If the generator carries a shadow over from the kit's gallery CSS, strip it.

**Logo.** Place the wordmark at the 495 : 52 (≈9.52 : 1) ratio — set the width, then derive height = width ÷ 9.52 (e.g. a 0.78 in wide mark is ~0.082 in tall). Never let it land in a box of a different ratio; a squeezed Trifork mark is an immediate brand failure. Negative logo on dark slides, RGB on light.

**Fonts.** Embed `Poppins-Regular`, `Poppins-Medium` and `Poppins-Italic` in the `.pptx` (PowerPoint *Save → embed fonts*, or set `embedTrueTypeFonts`). Without embedding, recipients without Poppins installed see a substitute and the identity collapses.

**Footer.** Page number + deck name + year, separated by thin slashes (e.g. `3  /  Tiris Messenger  /  2026`), set in a muted neutral, flush with the content left edge. The Trifork wordmark sits bottom-right; its dot is the only orange in the chrome.

**Export markers.** Keep two markup attributes intact when generating a `.pptx` from these templates, or reproduce their effect manually if authoring from scratch: eyebrow/label text (slide label, footer, section numbers) is single-line (`white-space: nowrap`) so its text box sizes to the content instead of an exporter-guessed width that wraps it; rounded photo containers (cover photo card, split image card, case-study photo, figure, portrait, thumb) carry `data-om-raster` so the exporter embeds them as a flattened image with the rounding intact, instead of flattening to a native rectangle shape.

## Files

| File | What it is |
|---|---|
| `tokens.css` | Design tokens, colours, type, spacing, radii. Link this from every artefact. |
| `README.md` | Overview, content fundamentals, visual foundations. |
| `brand.html` | Brand voice, editorial principles, naming. |
| `type.html` | Type scale and roles. |
| `colors.html` | Palette and usage rules. |
| `spacing.html` | 8 px scale, radii, slide chrome. |
| `iconography.html` | Icon library and drawing rules. |
| `components.html` | Buttons, tags, callouts, cards, quote, slide chrome. |
| `slide-kit.html` | Twelve master slide layouts. |
| `social.html` | LinkedIn social-post system: rules, anatomy, layouts (title top/center/bottom), six card types (event, quote, stat, job, news, case), carousels, and a live playground with PNG/zip export. |

## Always avoid

- White or any other colour as a slide background. Slide backgrounds are exclusively `--tf-blue-100` (light) or `--tf-ink-950` (dark).
- Bold weight body copy, re-write the sentence instead.
- Orange tints on icons or as a flat fill behind body copy.
- Orange as an emphasis colour inside a title or a paragraph (no orange phrases, no orange periods at the end of titles).
- ALL CAPS in titles or paragraph copy. Capitals are for labels only.
- A separator rule across the top of a multi-column content row.
- Text on a light background set in any colour other than ink 950 (titles & paragraphs). Caption/meta tones are still permitted for captions and chrome.
- Emoji, exclamation marks, superlatives, stock-photo handshakes.
- Title Case headlines (reserved for proper nouns).
- US spellings.
- Bold (700) anywhere — use Medium (500) for emphasis weight.
- Orange dashes, dots, or ticks as list bullets; use the numbered list.
- Oversized type — slide titles at 40 pt+, ledes/body inflated past the scale table.
- A deck with no photography, or an invented cover (e.g. a floating dark panel on a light slide).
- Indenting a lede or content block away from the title's left edge.
- Vertical or horizontal rules separating columns / stat callouts.
- Default PowerPoint card rounding instead of the explicit 12 px radius.
- Shipping a `.pptx` without the Poppins fonts embedded.
- Drop shadows, glows or bevels on cards, lines, images, text, or the logo — the system is flat.
- Rounding the slide background/outer canvas — the slide frame is always square; corner radius belongs only to elements placed on the slide.
- Rules under titles/sub-headings or full-width divider rules between content blocks.
- Stretching or squeezing the logo off its 495 : 52 (≈9.52 : 1) aspect ratio.
