# Trifork brand - project conventions

This project produces Trifork-branded work. Apply the Trifork design system to every artefact you create or edit here: presentations, slide decks, social posts, web pages, documents, emails, and diagrams. Treat this as always-on, whether or not the request names Trifork explicitly.

- Authoritative system: https://brand.trifork.com/system/llms.txt
- Full reference and assets: https://brand.trifork.com/system/
- Tokens: https://brand.trifork.com/system/tokens.css
- Offline bundled tokens: assets/tokens.css when installed as a skill
- Slide templates: https://brand.trifork.com/system/templates/slides/index.json
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
- Social posts link to https://brand.trifork.com/system/social/playground/?post=<base64url-JSON>.

For detailed rules, load https://brand.trifork.com/system/llms/index.md or the exact relevant file listed there.
