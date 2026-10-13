# CLAUDE.md — JMP Media portfolio

**What:** Portfolio site for JMP Media (JM Palileo, video producer, Brisbane). Rebrand from paliportfolio.com.
**Stack:** Vite + React 18, plain CSS (no Tailwind), deployed on Vercel. No router — single page with anchors.

## Design direction
- Dark editorial, cinematic. References: "Martin de Astrox" (giant split wordmark hero), HANZA case-study rows (blurred full-bleed bg + inset thumb + mono meta in 3-col grid), Ascend Studios (client strip), Jack Evans (huge section words).
- Type: Inter Tight Variable (display, tight negative tracking), JetBrains Mono uppercase 11px for labels.
- Palette tokens in `src/styles.css :root`: ink #0d0d0c, paper #ecebe6, accent #ff4a1c. Accent used sparingly (CTAs, dots).
- Light sections (About, Work header, Contact) alternate with dark to give rhythm.

## Rules
- All content lives in `src/data/`. Components never hardcode copy.
- Video providers resolved in `components/media.js` — add new providers there only.
- Respect `prefers-reduced-motion`. No horizontal scroll at 390px.
- Keep bundle lean: no animation libraries unless justified.
