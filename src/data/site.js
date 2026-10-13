// ─────────────────────────────────────────────────────────────
// SITE CONFIG — edit copy, contact and the hero reel here.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: 'JMP',
  brandFull: 'JMP Media',
  director: 'JM Palileo',
  city: 'Brisbane',
  timezone: 'Australia/Brisbane',
  since: 2018,

  // TODO: replace with your real business email before deploying
  email: 'hello@jmpmedia.com.au',
  instagram: 'https://instagram.com/',
  vimeo: 'https://vimeo.com/',
  linkedin: 'https://linkedin.com/',

  tagline: ['Real moments.', 'Framed with intent.', 'Cut to move people.'],

  intro:
    'Brisbane-based video production for brands, hospitality and events. Eight years of commercial work across Australia and the Philippines.',

  aboutLead:
    'A one-director studio that treats every brief like a film. Concept, camera and cut — handled by the same hands, so nothing gets lost between them.',
  aboutLeft:
    'I started shooting commercial work in Cebu, filming for hotels, car dealers and sportswear launches. That taught me to work fast without making it look fast.',
  aboutRight:
    'Now in Brisbane, I build brand films, event recaps and social content for teams who want honest images instead of stock-looking ones.',

  // Hero background reel. Best option: a 10–20s muted MP4 in /public/media.
  // type: 'mp4' | 'vimeo' | 'youtube' | 'none'
  heroReel: {
    type: 'none',
    src: '', // e.g. '/media/showreel-loop.mp4'  or Vimeo ID '123456789'
    poster: '', // e.g. '/media/showreel-poster.jpg'
  },

  // Full showreel opened by "Watch Reel". Same format as a project's `video`.
  showreel: { provider: 'drive', id: '' },

  // /gallery — the Instagram-style grid you can send to clients.
  gallery: {
    handle: 'jmp.media',
    bio: ['Video production · Brisbane & Cebu', 'Brand films, commercials, events and reels.'],
  },

  clients: [
    'Nike Philippines',
    'Shell Philippines',
    'Shangri-La Mactan',
    'Toyota Cebu',
    'NuStar Resort',
    'Gold’s Gym',
    'Fox Homes',
    'Pets Society',
    'Light of Hope PH',
    'Childlink',
    'U&I Global',
    'Sol Beauty',
    'Mooink',
    'Gojip',
    'Amoroso',
  ],

  services: [
    {
      title: 'Brand Films',
      blurb: 'Story-led pieces for launches, about pages and campaigns.',
      deliverables: ['Concept & script', 'Direction', '60–180s hero cut'],
    },
    {
      title: 'Commercials',
      blurb: 'Short-form spots for broadcast, paid social and pre-roll.',
      deliverables: ['6s / 15s / 30s cuts', 'Colour grade', 'Sound mix'],
    },
    {
      title: 'Events',
      blurb: 'Expos, launches and conferences, turned into recaps people finish.',
      deliverables: ['Multi-cam coverage', 'Same-week recap', 'Social cut-downs'],
    },
    {
      title: 'Social Content',
      blurb: 'Vertical-first content systems built from one shoot day.',
      deliverables: ['9:16 series', 'Caption-safe edits', 'Monthly retainers'],
    },
  ],
}
