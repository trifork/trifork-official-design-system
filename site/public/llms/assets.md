# Assets

Generated from content/brand-system.mjs. Do not edit by hand.

## Asset Resolution Order

1. Use hosted URLs from https://brand.trifork.com/system/ when the web is reachable and the output will be viewed with network access.
2. If the web is unavailable, blocked by sandboxing, or the output must work offline, use the bundled skill files instead.
3. For standalone HTML graphics, inline the bundled SVG logo or copy the bundled asset next to the output. Do not depend on a network fetch for the logo.
4. For CSS tokens, use https://brand.trifork.com/system/tokens.css online and bundled assets/tokens.css offline.
5. For social playground deep links, photoSrc must be a hosted https URL. Local files and data URLs are not shareable by link, so use ink or light backgrounds when hosted imagery is unavailable.

## Tokens

- https://brand.trifork.com/system/tokens.css
- Bundled fallback: assets/tokens.css

## Logos

- Dark logo: https://brand.trifork.com/system/assets/logo/Trifork_logo_RGB.svg
- Light logo: https://brand.trifork.com/system/assets/logo/Trifork_logo_neg_RGB.svg
- Bundled dark logo: assets/logo/Trifork_logo_RGB.svg
- Bundled light logo: assets/logo/Trifork_logo_neg_RGB.svg

## Icons

- Manifest: https://brand.trifork.com/system/assets/icons/index.json
- Exact SVG URLs are listed in the manifest. Do not rely on directory browsing.
- Bundled fallback: assets/icons/index.json and assets/icons/*.svg

## Slide Templates

- Manifest: https://brand.trifork.com/system/templates/slides/index.json
- CSS: https://brand.trifork.com/system/templates/slides/trifork-slide.css
- Hosted previews: https://brand.trifork.com/system/visuals/slide-kit/<layout-id>.png
- Bundled fallback: assets/slide-templates/*.html, assets/slide-templates/trifork-slide.css, and assets/slide-previews/*.png
- Large photography is hosted only. If hosted photography cannot load, keep the template layout and use ink or light backgrounds.

## Imagery

- Manifest: https://brand.trifork.com/system/assets/imagery/index.json
- Exact image URLs are listed in the manifest. Do not rely on directory browsing.
- Do not use imagery where "allowed" is false in the manifest.
- Bundled fallback: assets/imagery/index.json. Large photography files are not bundled into the skill zip.

| File | Label | Kind | Allowed |
| --- | --- | --- | --- |
| trifork-aarhus-1.jpg | Aarhus building | real Trifork photography | true |
| trifork-aarhus-2.jpg | Aarhus office | real Trifork photography | true |
| trifork-aarhus-3.jpg | Aarhus interior | real Trifork photography | true |
| trifork-aarhus-4.jpg | Aarhus exterior | real Trifork photography | true |
| trifork-people-1.jpg | People at work | real Trifork photography | true |
| trifork-stock-1.jpg | Speaker placeholder | placeholder | false |
| trifork-vision-pro.png | Vision Pro case image | product/case imagery | true |
