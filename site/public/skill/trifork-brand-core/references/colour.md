# Colour

Generated from content/brand-system.mjs. Do not edit by hand.

## Rules
- Use ink 950 (#2C3A42) for titles, body ink, and any title or paragraph text on a light background.
- Use orange 500 (#FF6600) sparingly: a slide label, one numeric callout, the wordmark dot, or a single button.
- Do not colour words inside a title or paragraph orange.
- Do not end a title with an orange period.
- Use icons in blue 900 (#3C4C54), never orange.
- Use white as a surface or on dark backgrounds. Do not use white as a slide background.

## Tokens
| Token | Value | Role |
| --- | --- | --- |
| --tf-ink-950 | #2C3A42 | Titles, body ink, dark slide background |
| --tf-ink-800 | #566168 | Body text where lower contrast is explicitly allowed |
| --tf-ink-500 | #959CA0 | Muted text, captions, metadata, chrome |
| --tf-ink-100 | #EAEBEC | Rules and dividers |
| --tf-blue-900 | #3C4C54 | Icons and secondary ink |
| --tf-blue-200 | #C1D7E5 | Slide separator on light slides |
| --tf-blue-100 | #D5E5ED | Light slide background |
| --tf-blue-50 | #EAF2F6 | Soft web background |
| --tf-orange-500 | #FF6600 | Single accent |
| --tf-white | #FFFFFF | White surface and text on dark backgrounds |

## Slide Backgrounds

- Light slide: --tf-blue-100 (#D5E5ED).
- Dark slide: --tf-ink-950 (#2C3A42).
- Never use white as a slide background.

## Photo Overlay

Use a flat overlay only:

```css
background: rgba(44, 58, 66, 0.90);
```

No gradients, no fades, and no other tints.
