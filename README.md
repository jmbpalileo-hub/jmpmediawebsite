# JMP Media — Portfolio

Vite + React, single page, zero backend. Deploys to Vercel as-is.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → import repo. Framework auto-detects as Vite (also pinned in `vercel.json`).
3. Optional env var `VITE_FORM_ENDPOINT` (e.g. a Formspree URL). Without it, the contact form opens a pre-filled email.
4. Add your domain under Project → Settings → Domains.

## Add your videos — `src/data/projects.js`
Each project takes a `video` object:

| provider | value | notes |
|---|---|---|
| `vimeo` | `id: '123456789'` | Recommended. Clean player, no ads. |
| `youtube` | `id: 'abc123'` | Uses youtube-nocookie. |
| `drive` | `id: '<FILE_ID>'` | From `drive.google.com/file/d/<FILE_ID>/view`. Sharing must be "Anyone with the link". |
| `mp4` | `src: '/media/film.mp4'` | File in `public/media/`. Keep under ~20 MB each. |

Also per project: `poster` (still, `/media/name.jpg`), optional `preview` (short muted MP4 that plays on row hover).

## Edit copy, clients, services, hero reel — `src/data/site.js`
- `email` is a placeholder — **change before deploying**.
- `heroReel`: best as a 10–20s muted MP4 loop (`type: 'mp4'`) or Vimeo background (`type: 'vimeo'`).
- `showreel`: the full reel opened by "Watch reel".

## Structure
```
src/
  data/site.js        copy, contact, clients, services, hero reel
  data/projects.js    video list
  components/         Nav, Hero, Work, Sections (About/Clients/Services/Contact/Footer), VideoModal, media.js
  styles.css          all styling; tokens at the top (--accent etc.)
```
