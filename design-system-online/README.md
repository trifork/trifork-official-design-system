# Trifork Design System

A working design system for Trifork. covering brand voice, typography, colour, spacing, iconography, and a slide UI kit derived from the official Trifork Design Guide.

This system is for designers and developers building Trifork-branded artefacts: presentations, internal tools, web pages, and product mock-ups. Use these tokens, type roles, and slide patterns to produce work that is calm, confident, and recognisably Trifork.

---

## Index

- **[brand.html](brand.html)**, brand at a glance, voice, and content fundamentals.
- **[type.html](type.html)**, Poppins type scale and roles.
- **[colors.html](colors.html)**, primary palette, scales, and usage rules.
- **[spacing.html](spacing.html)**, 8 px grid, radii, and slide chrome.
- **[iconography.html](iconography.html)**, line-icon library and usage.
- **[components.html](components.html)**, slide components: labels, buttons, content blocks.
- **[slide-kit.html](slide-kit.html)**, full slide template kit (cover, agenda, content, data, customer cases, closing).
- **[social.html](social.html)**, social-post templates for LinkedIn (events with speakers, quotes, stats, job openings, news, case stories) with carousels and one-click image export.
- **[tokens.css](tokens.css)**, copy-paste design tokens.

---

## Content fundamentals

**Voice.** Calm, structured, expert. We are technologists and consultants, we do not sell, we explain. Sentences are short and concrete. We use UK English ("colour", "organisation", "centre"). We say *we*, not *Trifork* or *the company*, when speaking from the inside.

**Tone register.** Confident without being loud. We earn attention with precision, not adjectives. Avoid superlatives ("revolutionary", "cutting-edge", "world-class") and avoid emoji. Numbers are written as digits when they carry weight; spelled out when conversational.

**What we write about.** Software craftsmanship, applied AI, fintech, healthcare, aviation, rail, smart buildings, and the engineering practices behind them. We make complex domains feel orderly.

**Capitalisation.** Sentence case for headlines and titles. Title Case is reserved for proper nouns and named offerings. ALL CAPS is reserved strictly for **labels** (slide labels, eyebrow labels, section labels), and never appears in titles or paragraph copy.

**Punctuation.** Oxford comma. En-dashes for ranges, em-dashes for breaks. No exclamation marks except in genuine quotes. Single quotation marks for titles, double for direct quotes.

**Imagery.** Real photography from Trifork offices and engagements. People at work, architecture, on-site. Avoid stock-photo handshake clichés. Photography sits inside containers with `--tf-r-lg` (24 px) corners.

**Iconography.** Single-stroke line icons in `--tf-blue-900`. Stroke weight is uniform; corners are rounded. Icons sit at 64–96 px on slides and 24–32 px in dense UI. The set is intentionally restrained, pick one icon per idea and reuse it.

---

## Visual foundations

**Typeface.** Poppins, used in Regular (400) and Medium (500) only. Light is reserved for very large display use; we don't use bold or black weights, they break the calm register. Tracking is tight on display and headline sizes; default elsewhere.

**Colour.** A foundation of dark neutral (`--tf-ink-950`, `#2C3A42`) for titles, ink, and any text on a light background — always. Lower-contrast neutrals are reserved for metadata, captions, and chrome, never for titles or paragraph copy. The single warm accent (`--tf-orange-500`) is used sparingly — the slide label, a numeric callout, a single button. **Orange is never used as an emphasis colour inside a title or a paragraph**, and a title is never ended with an orange period. Slide backgrounds are restricted to exactly two values: `--tf-blue-100` (light, calm blue) for default slides and `--tf-ink-950` (dark neutral) for emphasis slides such as section starters and dark covers. White and any other colour are not used as a slide background.

**Title gap.** Every slide leaves at least 32 px of space between the title and the next element below it (lede paragraph, body, column stack, list, image card). On the 1920 × 1080 design target this is treated as a floor, not a target; most layouts use 50 px or more to keep the page calm. Paragraphs and content blocks never sit flush against the title.

**Line separators on slides.** Horizontal and vertical rules inside slide content take exactly two values: `--tf-blue-200` (`#C1D7E5`) on light slides and 30% white (`rgba(255, 255, 255, 0.3)`) on dark slides. No other rule colours appear in slide content.

**Image overlays.** Whenever an image carries an overlay (cover photos, large-image slides, image cards), the overlay is a flat tint of ink 950 at 90% opacity (`rgba(44, 58, 66, 0.9)`). No gradients, no other tints — the overlay is uniform across the image.

**Cards on slides.** Cards take exactly two fills. On a light (`--tf-blue-100`) slide, cards are white (`--tf-white`). On a dark (`--tf-ink-950`) slide, cards are 10% opaque black (`rgba(0, 0, 0, 0.1)`) — a subtle inset against the dark surface. No other card fills are used.

**Multi-column content.** When a slide places content in two, three, or four columns, columns never share a separator rule across their tops. The slide title and lede establish the grouping; the columns then stand on their own. A horizontal rule at the top of a column row reads as a header for the row and is reserved for tabular data, not content blocks.

**Layout.** Slides are 1920 × 1080 with an 80 px outer margin. The brand label sits top-left in orange caps with `0.16em` tracking (`--tf-tracking-label`); the page number and deck name sit bottom-left, flush with the content left edge, and the "Trifork•" wordmark sits bottom-right. Content lives on a 12-column grid with 32 px gutters, all aligned to a single left margin.

**Spacing.** Multiples of 8 px. Generous whitespace between blocks (48–80 px on slides). Inside dense components, 8–24 px.

**Corners.** 12 px radius for elements ≤ 199 px wide; 24 px for anything larger. Pills are full-radius and reserved for actions and tags.

**Depth.** The system is flat. We do not use drop shadows, glows, reflections, or bevels on cards, rules, images, text, or the logo — separation comes from colour, fill, and whitespace. The slide frame itself is also square, never rounded; corner radius only ever applies to elements placed on a slide (cards, images, chrome), never to the background or outer canvas. (The soft shadow and rounded corners on `.slide` in the slide-kit page are gallery chrome for the documentation view only; slides themselves are flat and square. If a slide is later placed inside a rounded container elsewhere, that rounding belongs to the container, not the template.)

**Logo.** The Trifork wordmark holds a fixed 495 : 52 (≈ 9.52 : 1) aspect ratio. Scale it by one dimension and let the other follow; never stretch or squeeze it into a box of another ratio. The negative wordmark is used on dark surfaces, the RGB wordmark on light; the orange dot is never recoloured.

**Rules.** Horizontal and vertical rules are used sparingly — to separate stacked rows in a list or table. They never sit under a title or sub-heading, never bridge the top of a multi-column row, and never act as a section divider between blocks. Colours follow the slide-separator rule above.

**Motion.** Restrained. 200–280 ms ease-out for hovers; 320–480 ms cubic-bezier for slide transitions. We don't bounce.

---

## Iconography

Trifork's icon language is monochromatic and linear. Strokes are uniform-weight, terminals are rounded, geometry favours the implied grid over flourish. Icons describe a concept (idea, network, growth) rather than a literal object whenever possible.

- Use icons to signpost, one per section, never as decoration.
- Render at 64 px on slides; 32 px in tables; 24 px in inline UI.
- Always in `--tf-blue-900`. Never tint with the orange accent.
- Pair with a short, tracked label or a sentence-case title; never both.

The reference set lives in [iconography.html](iconography.html). When a needed icon is missing, draw a new one in the same line style: 1.5–2 px stroke at 24 px artboard, rounded caps and joins, no fills, no gradients.

---

## How to use

1. Link `tokens.css` from your HTML.
2. Use the `--tf-*` custom properties for colour, type, spacing, and radius, do not hard-code values.
3. Apply the `tf-display`, `tf-h1`, `tf-h2`, `tf-body`, `tf-label-spaced` etc. utility classes for consistent type.
4. For slide work, start from a template in [slide-kit.html](slide-kit.html), the chrome (label, page number, wordmark) is already wired.
