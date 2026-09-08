# Type

Generated from content/brand-system.mjs. Do not edit by hand.

## Family

Use Poppins only.

## Rules
- Use Poppins only.
- Display and H1 use Regular 400.
- Medium 500 is for smaller headlines, labels, numeric callouts, and UI.
- Do not use bold or black weights. Rewrite the sentence instead.
- Use tight tracking on display and headline sizes only. Use default tracking elsewhere.

## Scale
| Token | Value | Role |
| --- | --- | --- |
| --tf-fs-display | 96px | Cover title, Regular 400 |
| --tf-fs-h1 | 72px | Section title, Regular 400 |
| --tf-fs-h2 | 40px | Slide title, Medium 500 |
| --tf-fs-h3 | 28px | Small headline, Medium 500 |
| --tf-fs-lead | 28px | Slide deck lede |
| --tf-fs-body | 20px | Body floor for slides |
| --tf-fs-caption | 16px | Caption |
| --tf-fs-label | 13px | Tracked label, Medium 500 |

## Implementation

Link https://brand.trifork.com/system/tokens.css and use the tf utility classes when creating HTML:

- .tf-display
- .tf-h1
- .tf-h2
- .tf-h3
- .tf-lead
- .tf-body
- .tf-caption
- .tf-label-spaced
- .tf-eyebrow
