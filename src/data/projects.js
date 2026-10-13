// ─────────────────────────────────────────────────────────────
// PROJECTS — one entry per client. Order here = order on the site.
//
// video: a single video, or a list of clips (the player shows tabs).
//   'drive'   → id: Google Drive file ID             (file must be "Anyone with the link")
//               from https://drive.google.com/file/d/<THIS_PART>/view
//   'vimeo'   → id: '123456789'
//   'youtube' → id: 'dQw4w9WgXcQ'
//   'mp4'     → src: '/media/my-film.mp4'            (file in /public/media)
//   vertical: true   → plays in a 9:16 player (Reels / TikTok cuts)
//   label: '...'     → tab name when there are several clips
//
// Source folder: drive.google.com/drive/folders/1rP8FpKNronXmDhZfI5os3_Hqxz2OY3-8
//
// poster: still image shown on the row + as background ('/media/name.jpg').
//         If left empty, a tinted placeholder frame is used.
// preview: optional short muted MP4 loop that plays on hover (desktop).
// year / summary: optional — hidden when empty.
// ─────────────────────────────────────────────────────────────

export const categories = ['All', 'Brand Film', 'Commercial', 'Event', 'Social']

const drive = (id, extra = {}) => ({ provider: 'drive', id, ...extra })

export const projects = [
  {
    slug: 'nike-ph',
    client: 'Nike Philippines',
    title: 'Nike Store Grand Opening',
    category: 'Event',
    year: 2023,
    summary: 'Coverage of a new Nike store opening.',
    roles: ['Direction', 'Camera', 'Edit'],
    tint: '#3a2a1f',
    poster: '/media/nike.jpg',
    preview: '',
    video: drive('11aLSQIkM0-Y321s_fvEyRyQZL37Jj_Cy'),
  },
  {
    slug: 'light-of-hope',
    client: 'Light of Hope PH',
    title: 'Keep Sharing the Light',
    category: 'Brand Film',
    year: '',
    summary: 'Impact films for a solar nonprofit bringing power to off-grid homes and schools.',
    roles: ['Direction', 'Camera', 'Edit'],
    tint: '#2a3020',
    poster: '/media/loh-catena.jpg',
    preview: '',
    video: [
      drive('1ZBLTtkslIz0PUNfVraLe0zvgaZqzXOG6', { label: 'Catena Impact' }),
      drive('1G_L4OfCwxHvQwOFwMaxtcwIWomQ-EP2l', { label: 'Pulangbato' }),
    ],
  },
  {
    slug: 'fox-homes',
    client: 'Fox Homes',
    title: 'Airbnb and Properties',
    category: 'Brand Film',
    year: 2023,
    summary: 'Property films for a collection of treehouses, villas, cabins and beach stays.',
    roles: ['Direction', 'Camera', 'Edit'],
    tint: '#2e2a1c',
    poster: '/media/fox-homes.jpg',
    preview: '',
    video: [
      drive('1hGZgG8R1BgLVIVwhvtM2jC4AYdY02qgY', { label: 'Treehouse de Valentine' }),
      drive('1lBF7fbM81JeBHDqcxLmimOYAerRK2zDW', { label: '150 Peakway' }),
      drive('1MHGjjRcvbPmyYHDeVqGRSdpDdvPJTov2', { label: 'Old Country Stone House' }),
      drive('10IGZ_NnF4Eyq7YaStRwg0J0oKPJ0Nr8u', { label: 'Monte Alto Villas' }),
      drive('1QJNr-WYxCJD7amEMEgcPcpY0WHPzhAC8', { label: 'Gray Rock Cabins' }),
      drive('1oM5XEvdwwE4vjVeNfYrravjEy6-dVKdD', { label: 'Playa Norte' }),
      drive('1WI_H2Jzhn3tva-994Ts4n9Z3-ED1GtKJ', { label: 'Reefside' }),
      drive('1WKjqTOeSqGCyFtRmcHU2j85U8CnCFKbV', { label: 'Palalong Paint & Sip' }),
    ],
  },
  {
    slug: 'toyota-cebu',
    client: 'Toyota Cebu',
    title: 'Toyota Services',
    category: 'Commercial',
    year: 2021,
    summary: 'A dealership film on Toyota’s service offering.',
    roles: ['Camera', 'Edit', 'Colour'],
    tint: '#2b2b33',
    poster: '/media/toyota.jpg',
    preview: '',
    video: drive('11D0h4g5PWKEgnbnMCDticqVocBe4tX32'),
  },
  {
    slug: 'shangri-la-mactan',
    client: 'Shangri-La Mactan',
    title: 'Acqua, Chi & Tea of Spring',
    category: 'Social',
    year: 2022,
    summary: 'Vertical films for the resort’s restaurant, spa and seasonal tea service.',
    roles: ['Concept', 'Direction', 'Colour'],
    tint: '#1f3330',
    poster: '/media/shangri-la-chi.jpg',
    preview: '',
    video: [
      drive('1tlv_AFAOyffx-Tjq8l09fxtwvqNbVhEM', { label: 'Chi Spa', vertical: true }),
      drive('1jrWjcCOEDn8niKBzfYD46r3YK6_LTFZM', { label: 'Acqua', vertical: true }),
      drive('1huf-G7ImvqH5pnAQ6cgUBYguAlUHD-zM', { label: 'Tea of Spring', vertical: true }),
    ],
  },
  {
    slug: 'pets-society',
    client: 'Pets Society',
    title: 'Veterinary Feature',
    category: 'Brand Film',
    year: '2023–24',
    summary: 'A feature on the vet team, plus reels for grooming, spa and boarding.',
    roles: ['Direction', 'Camera', 'Edit'],
    tint: '#1f302c',
    poster: '/media/pets-society.jpg',
    preview: '',
    video: [
      drive('1GTS8yGGYW6i_S2qhI9ETp9Z5Oqh_uB89', { label: 'Veterinary Feature' }),
      drive('1LOFYB-iG7GxAvCnV-ZHr5D53thvP-1vL', { label: 'Dog Spa', vertical: true }),
      drive('1QOovjTmqLBhmBF06CGiuNUztfUjO1dzr', { label: 'Cat Salon', vertical: true }),
      drive('1VWrWJPI1ZDfRWw9WqqBtUGLVgj3SJbKe', { label: 'Dog Boarding', vertical: true }),
      drive('1jzwEfpyjBcY_eBynpcVb3b9dpLVedr6Q', { label: 'Cat Boarding', vertical: true }),
    ],
  },
  {
    slug: 'shell',
    client: 'Shell Philippines',
    title: 'Green Station Concept Video',
    category: 'Commercial',
    year: 2020,
    summary: 'Concept film for Shell’s green fuel station.',
    roles: ['Camera', 'Edit'],
    tint: '#332b1a',
    poster: '/media/shell.jpg',
    preview: '',
    video: drive('1MymLaUijbkSynkUG6w4V1gI6TT0k9Dn5'),
  },
  {
    slug: 'nustar',
    client: 'NuStar Resort',
    title: 'Sinulog Festival Celebration',
    category: 'Event',
    year: 2023,
    summary: 'NuStar’s celebration of Cebu’s Sinulog Festival.',
    roles: ['Direction', 'Edit'],
    tint: '#20202a',
    poster: '/media/nustar.jpg',
    preview: '',
    video: drive('1I3jjPB9uApKpQEBIU2rZyMAXxxXHgaZd'),
  },
  {
    slug: 'childlink',
    client: 'Childlink',
    title: 'Educational Campaign Video',
    category: 'Brand Film',
    year: '',
    summary: '',
    roles: ['Camera', 'Edit'],
    tint: '#1f2a33',
    poster: '/media/childlink.jpg',
    preview: '',
    video: drive('1btaSjgwasbZR4LTtFscPUzjy0eU9IPjD'),
  },
  {
    slug: 'golds-gym',
    client: 'Gold’s Gym',
    title: 'Showcase & Form Guides',
    category: 'Social',
    year: '2023–24',
    summary: 'A vertical gym tour and a series of exercise tutorials.',
    roles: ['Camera', 'Edit'],
    tint: '#2f2b16',
    poster: '/media/golds-gym.jpg',
    preview: '',
    video: [
      drive('155ME3f4iQm8FQyqfJbQ7HhCxrGvrxVga', { label: 'Gym Showcase', vertical: true }),
      drive('1So6K2-VpO2rHcZptunglZb1Iv7NxoeeW', { label: 'Deadlift', vertical: true }),
      drive('1i5fO0QMj0xvjzoY2AM5s2V7_Wrlh79wJ', { label: 'Squat', vertical: true }),
      drive('1i7HJvyPWvUfjYEK9T3dLwqNnu1u56Lxq', { label: 'Pull Up', vertical: true }),
      drive('1u_oxRc1vRbilkNLyYOqT5sFSWP-0WzNm', { label: 'Box Jump', vertical: true }),
      drive('1aJtOHvBwwnwHzTn4YvnSrygNq8i9_U9U', { label: 'Plank Pull Through', vertical: true }),
    ],
  },
  {
    slug: 'sol-beauty',
    client: 'Sol Beauty',
    title: 'Lashes, Nails & Shop',
    category: 'Social',
    year: '',
    summary: 'Short vertical series for a beauty studio’s socials.',
    roles: ['Camera', 'Edit'],
    tint: '#33241c',
    poster: '/media/sol-shop.jpg',
    preview: '',
    video: [
      drive('1scfzWbFgWbZYr-7Vm4ZHq1nHufooSkQN', { label: 'Shop', vertical: true }),
      drive('1TFhRVTSoNIfa1U65zLG09hwrHkTTybjw', { label: 'Lashes', vertical: true }),
      drive('1Q4foVfPQdeTJUALiV2Crz7JI1ScpBftt', { label: 'Manicure', vertical: true }),
    ],
  },
  {
    slug: 'amoroso',
    client: 'Amoroso',
    title: 'Gelato and Dishes Feature',
    category: 'Social',
    year: '',
    summary: '',
    roles: ['Camera', 'Edit'],
    tint: '#2e1f22',
    poster: '/media/amoroso-1.jpg',
    preview: '',
    video: [
      drive('1EK0pmAv7nq4p82sfldfNAewXBepxpAvG', { label: 'Part 1', vertical: true }),
      drive('1g3Av86DbxEznLE2ATjKA2YGj2W_Rutg1', { label: 'Part 2', vertical: true }),
    ],
  },
]
