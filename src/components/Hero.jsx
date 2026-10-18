import { site } from '../data/site'
import { projects } from '../data/projects'
import { hasVideo } from './media'

function Reel() {
  const r = site.heroReel
  const still = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (r.type === 'mp4' && r.src && still && r.poster)
    return <img className="hero__reel" src={r.poster} alt="" />
  if (r.type === 'mp4' && r.src)
    return <video className="hero__reel" src={r.src} poster={r.poster || undefined} autoPlay muted loop playsInline preload="metadata" />
  if (r.type === 'vimeo' && r.src)
    return (
      <iframe
        className="hero__reel hero__reel--iframe"
        src={`https://player.vimeo.com/video/${r.src}?background=1&autoplay=1&loop=1&muted=1&dnt=1`}
        title="Showreel loop" allow="autoplay; fullscreen" tabIndex={-1}
      />
    )
  if (r.type === 'youtube' && r.src)
    return (
      <iframe
        className="hero__reel hero__reel--iframe"
        src={`https://www.youtube-nocookie.com/embed/${r.src}?autoplay=1&mute=1&loop=1&playlist=${r.src}&controls=0&modestbranding=1`}
        title="Showreel loop" allow="autoplay" tabIndex={-1}
      />
    )
  return <div className="hero__reel hero__reel--fallback" aria-hidden />
}

export default function Hero({ onPlayReel }) {
  const year = new Date().getFullYear()
  return (
    <section className="hero" id="top">
      <Reel />
      <div className="hero__shade" aria-hidden />
      <div className="grain" aria-hidden />

      <h1 className="hero__title" aria-label={site.brandFull}>
        <span className="hero__line hero__line--1">JMP</span>
        <span className="hero__mark" aria-hidden>
          <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" /><circle cx="20" cy="20" r="6" /><line x1="20" y1="2" x2="20" y2="38" /><line x1="2" y1="20" x2="38" y2="20" /></svg>
        </span>
        <span className="hero__line hero__line--2">MEDIA</span>
      </h1>

      <div className="hero__left">
        <p className="hero__tag">
          {site.tagline.map((l) => <span key={l}>{l}</span>)}
        </p>
        <div className="hero__intro">
          <div className="hero__who">
            <span className="hero__avatar" aria-hidden>JM</span>
            <span>
              {site.director}
              <span className="mono muted">Director / DP / Editor</span>
            </span>
          </div>
          <p className="muted">{site.intro}</p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--solid">Start a project <span aria-hidden>→</span></a>
            {hasVideo(site.showreel) && (
              <button className="btn btn--ghost" onClick={onPlayReel}>
                <span className="play" aria-hidden>▶</span> Watch reel
              </button>
            )}
          </div>
        </div>
      </div>

      <a href="#work" className="hero__card">
        <span className="mono">Selected work</span>
        <span className="hero__card-arrow" aria-hidden>↘</span>
        <span className="pill mono">{String(projects.length).padStart(2, '0')}+</span>
        <span className="mono muted hero__card-years">©{site.since} — {year}</span>
      </a>
    </section>
  )
}
