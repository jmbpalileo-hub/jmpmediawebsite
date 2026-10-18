import { useCallback, useEffect, useMemo, useState } from 'react'
import { site } from '../data/site'
import { projects } from '../data/projects'
import { clipsOf } from './media'
import VideoModal from './VideoModal'

// Every clip of every project becomes one tile, in project order.
const posts = projects.flatMap((p) =>
  clipsOf(p.video).map((c, i) => ({
    key: `${p.slug}-${i}`,
    slug: p.slug,
    client: p.client,
    title: c.label || p.title,
    thumb: c.thumb || p.poster,
    vertical: !!c.vertical,
    tint: p.tint,
    video: c,
  }))
)

const tabs = [
  ['all', 'Posts'],
  ['films', 'Films'],
  ['reels', 'Reels'],
]

function TabIcon({ id }) {
  if (id === 'films')
    return <svg viewBox="0 0 24 24" aria-hidden><rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M10 9.5v5l4-2.5z" /></svg>
  if (id === 'reels')
    return <svg viewBox="0 0 24 24" aria-hidden><rect x="6" y="3" width="12" height="18" rx="1.5" /><path d="M10.5 9.5v5l4-2.5z" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden><rect x="4" y="4" width="16" height="16" /><path d="M4 9.33h16M4 14.67h16M9.33 4v16M14.67 4v16" /></svg>
}

export default function Gallery() {
  const [tab, setTab] = useState('all')
  const [client, setClient] = useState(null)
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    document.title = `${site.brandFull} — Gallery`
  }, [])

  const list = useMemo(
    () =>
      posts.filter(
        (p) =>
          (!client || p.slug === client) &&
          (tab === 'all' || (tab === 'reels' ? p.vertical : !p.vertical))
      ),
    [tab, client]
  )

  const years = new Date().getFullYear() - site.since

  return (
    <div className="ig">
      <header className="ig__top">
        <a href="/" className="nav__logo">
          <img src={site.logo.light} alt={site.brandFull} className="nav__logo-img" />
        </a>
        <a href="/" className="mono ig__back">Full site <span aria-hidden>→</span></a>
      </header>

      <main className="ig__wrap">
        <section className="ig__profile">
          <div className="ig__avatar" aria-hidden><span><img src={site.logo.dark} alt="" /></span></div>
          <div className="ig__info">
            <div className="ig__row">
              <h1 className="ig__handle">{site.gallery.handle}</h1>
              <a href={`mailto:${site.email}`} className="btn btn--solid ig__cta">Enquire</a>
            </div>
            <ul className="ig__stats">
              <li><b>{posts.length}</b> posts</li>
              <li><b>{projects.length}</b> clients</li>
              <li><b>{years}+</b> years</li>
            </ul>
            <div className="ig__bio">
              <p className="ig__name">{site.brandFull} · {site.director}</p>
              {site.gallery.bio.map((l) => <p key={l} className="muted">{l}</p>)}
            </div>
          </div>
        </section>

        <nav className="ig__highlights" aria-label="Filter by client">
          <button className={`ig__hl ${!client ? 'is-on' : ''}`} onClick={() => setClient(null)} aria-pressed={!client}>
            <span className="ig__hl-ring"><span className="ig__hl-all">All</span></span>
            <span className="ig__hl-label">Everything</span>
          </button>
          {projects.map((p) => (
            <button
              key={p.slug}
              className={`ig__hl ${client === p.slug ? 'is-on' : ''}`}
              onClick={() => setClient(client === p.slug ? null : p.slug)}
              aria-pressed={client === p.slug}
            >
              <span className="ig__hl-ring">
                {p.poster ? <img src={p.poster} alt="" loading="lazy" /> : <span style={{ background: p.tint }} />}
              </span>
              <span className="ig__hl-label">{p.client}</span>
            </button>
          ))}
        </nav>

        <div className="ig__tabs" role="tablist" aria-label="Post type">
          {tabs.map(([id, label]) => (
            <button key={id} role="tab" aria-selected={tab === id} className={`ig__tab mono ${tab === id ? 'is-on' : ''}`} onClick={() => setTab(id)}>
              <TabIcon id={id} /><span className="ig__tab-label">{label}</span>
            </button>
          ))}
        </div>

        {list.length ? (
          <ul className="ig__grid">
            {list.map((p) => (
              <li key={p.key}>
                <button className="ig__tile" onClick={() => setActive(p)} aria-label={`Play ${p.title} for ${p.client}`} style={{ '--tint': p.tint }}>
                  {p.thumb && <img src={p.thumb} alt="" loading="lazy" />}
                  <span className="ig__type" aria-hidden><TabIcon id={p.vertical ? 'reels' : 'films'} /></span>
                  <span className="ig__hover">
                    <span className="mono">{p.client}</span>
                    <span>{p.title}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="ig__empty mono muted">Nothing here yet.</p>
        )}
      </main>

      <VideoModal item={active} onClose={close} />
    </div>
  )
}
