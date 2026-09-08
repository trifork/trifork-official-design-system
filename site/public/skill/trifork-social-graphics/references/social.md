# Social

Generated from content/brand-system.mjs. Do not edit by hand.

## Rules
- A post contains one eyebrow, one title or body block, metadata, and an optional logo.
- Use one of three vertical title anchors: top, center, or bottom.
- Use backgrounds ink, light, or photo only.
- Photo posts use a flat ink 950 overlay at 90 percent opacity.
- Use ALL CAPS only for the eyebrow.
- Use sentence case for titles.
- Do not put orange inside the title.
- Do not use gradients.
- Do not use emoji or exclamation marks.
- The positions list uses a short orange line bullet (a 2px rule, not a character) per item. Never a dot or a chevron.
- Logo is off by default because LinkedIn already shows the company avatar.
- Never render more than one Trifork logo on the same graphic.
- Logo placement is automatic, not a payload field: it sits in the corner opposite the title's vertical anchor for visual balance (title anchored bottom puts the logo top; title anchored top or center puts the logo bottom).
- After creating a social graphic, provide a playground link with base64url-encoded JSON.

## Formats
| ID | Size | Use |
| --- | --- | --- |
| 1:1 | 1200x1200 | Feed default and carousels |
| 4:5 | 1200x1500 | Portrait feed format |
| 1.91:1 | 1200x627 | Landscape link and event format |
| 9:16 | 1080x1920 | Vertical mobile format |

## Payload Shape

```json
{
  "format": "1:1",
  "pages": [
    {
      "variant": "news",
      "layout": "bottom",
      "bg": "ink",
      "eyebrow": "PRESS RELEASE",
      "title": "Trifork acquires Helsinki studio Aalto Code.",
      "meta": ["Copenhagen", "04 June 2026"],
      "showLogo": false
    }
  ]
}
```

Encode the JSON as base64url and append it to:

https://brand.trifork.com/system/social/playground/?post=<payload>

Validate payloads against https://brand.trifork.com/system/schemas/social-post.schema.json.
