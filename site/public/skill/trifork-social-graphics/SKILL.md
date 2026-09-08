---
name: trifork-social-graphics
version: 1.3.0
updated: 2026-06-09
description: Trifork social and event graphics: LinkedIn and event post formats, aspect ratios (1:1, 4:5, 1.91:1, 9:16), image style, short-copy rules, the six post variants (event, quote, stat, job, news, case), carousels, and PNG and zip export conventions.
when_to_use: 'Use whenever you create or edit a social post, LinkedIn graphic, event card, quote card, stat card, job post, or carousel in a Trifork context.'
---

# Trifork Social Graphics

Trifork social and event graphics for LinkedIn and events. Built on trifork-brand-core.

Source of truth: https://brand.trifork.com/system/social/  ·  https://brand.trifork.com/system/llms.txt

## Brand essentials (from trifork-brand-core)

This skill is self-contained, but trifork-brand-core holds the full brand reference. Load it for anything beyond the rules below.

- Voice: calm, structured, expert. UK English. Short, concrete sentences. No exclamation marks, superlatives, em dashes, or emoji.
- Type: Poppins Regular 400 and Medium 500 only, never bold. Sentence case for titles; ALL CAPS only for labels.
- Colour: ink 950 (#2C3A42) for titles and body on light. Orange 500 (#FF6600) is a sparing accent and a list or label marker, never phrase emphasis. Icons in blue 900 (#3C4C54).
- Logo: use the wordmark asset, keep its 495:52 (about 9.52:1) ratio, never stretch, retype, or recolour it. Negative logo on dark, RGB on light.
- Everything is flat: no drop shadows. Tokens are bundled at assets/tokens.css.

## Social (non-negotiable)
- A post contains one eyebrow, one title or body block, metadata, and an optional logo.
- Use one of three vertical title anchors: top, center, or bottom.
- Use backgrounds ink, light, or photo only.
- Photo posts use a flat ink 950 overlay at 90 percent opacity.
- Use ALL CAPS only for the eyebrow.
- Use sentence case for titles.
- Do not put orange inside the title.
- Do not use gradients.
- Do not use emoji or exclamation marks.
- Logo is off by default because LinkedIn already shows the company avatar.
- After creating a social graphic, provide a playground link with base64url-encoded JSON.

## Formats and aspect ratios
- 1:1 (1200x1200): Feed default and carousels
- 4:5 (1200x1500): Portrait feed format
- 1.91:1 (1200x627): Landscape link and event format
- 9:16 (1080x1920): Vertical mobile format

## Post variants

One eyebrow, one title or body block, metadata, and an optional logo. Variants: event, quote, stat, job, news, case. Vertical anchor: top, center, bottom. Background: ink, light, photo.

## Short copy

- Eyebrow: ALL CAPS, one short label.
- Title: sentence case, one idea; let the title size scale down as length grows (see references/social.md).
- Metadata: up to two short lines, or structured rows.
- No orange inside the title; no emoji or exclamation marks.

## Export conventions

- Build to the exact pixel size for the format; export PNG at 2x where possible.
- For an HTML graphic, add a "Download asset" button outside the captured node.
- After creating a post, give the user an "Open in the Trifork playground" link: https://brand.trifork.com/system/social/playground/?post=<base64url-JSON>. The payload must validate against schemas/social-post.schema.json.
- Carousels export as a numbered PNG set (zip).

## Bundled with this skill

References:
- references/index.md
- references/social.md
- references/validation.md

Schemas:
- schemas/social-post.schema.json

Assets:
- assets/tokens.css
- assets/logo/Trifork_logo_RGB.svg
- assets/logo/Trifork_logo_neg_RGB.svg
- assets/icons/*.svg
- assets/icons/index.json
- assets/imagery/index.json

## Staying current

This is trifork-social-graphics version 1.3.0, updated 2026-06-09. The hosted system is authoritative: https://brand.trifork.com/system/. If https://brand.trifork.com/system/skill/trifork-social-graphics/version.json has a higher version, reinstall from https://brand.trifork.com/system/install/.
