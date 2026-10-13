import { useMemo, useRef, useState } from 'react'
import { categories, projects } from '../data/projects'
import { clipsOf, hasVideo } from './media'

function Frame({ p, className = '' }) {
  return p.poster ? (
    <img className={`frame ${className}`} src={p.poster} alt="" loading="lazy" />
  ) : (
    <div className={`frame frame--empty ${className}`} style={{ '--tint': p.tint }} aria-hidden>
      <span className="mono">{p.client}</span>
    </div>
  )
}

function Row({ p, i, onOpen }) {
  const vid = useRef(null)
  const playable = hasVideo(p.video)
  const count = clipsOf(p.video).length
  const hover = (on) => {
    if (!vid.current) return
    on ? vid.current.play().catch(() => {}) : vid.current.pause()
  }
  return (
    <article className="row" style={{ '--tint': p.tint }} onMouseEnter={() => hover(true)} onMouseLeave={() => hover(false)}>
      <div className="row__bg" aria-hidden>
        {p.poster ? <img src={p.poster} alt="" loading="lazy" /> : <div className="row__bg-fill" />}
        {p.preview && <video ref={vid} src={p.preview} muted loop playsInline preload="none" />}
      </div>
      <div className="grain" aria-hidden />

      <span className="row__index mono"><i className="dot" />{String(i + 1).padStart(2, '0')}</span>
      <span className="row__meta mono"><span className="muted">Client</span> {p.client}</span>
      {p.year && <span className="row__meta row__meta--year mono"><span className="muted">Year</span> {p.year}</span>}

      <button className="row__thumb" onClick={() => onOpen(p)} aria-label={`Play ${p.title} for ${p.client}`}>
        <Frame p={p} />
        <span className="row__view">
          <span className="mono">{!playable ? 'Coming soon' : count > 1 ? `Play ${count} films` : 'Play film'}</span>
          <span className="mono muted">/{p.slug}</span>
          <span className="row__view-btn" aria-hidden>{playable ? '▶' : '›'}</span>
        </span>
      </button>

      <div className="row__body">
        <h3 className="row__title">{p.title}</h3>
        {p.summary && <p className="row__summary mono">{p.summary}</p>}
        <i className="dot dot--light" />
      </div>
      <ul className="row__roles mono">
        <li className="muted">{p.category}</li>
        {p.roles.map((r) => <li key={r}>{r}</li>)}
      </ul>
    </article>
  )
}

export default function Work({ onOpen }) {
  const [cat, setCat] = useState('All')
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat])
  const used = new Set(projects.map((p) => p.category))

  return (
    <section className="work" id="work">
      <div className="work__head">
        <div className="filters" role="tablist" aria-label="Filter work">
          {categories.filter((c) => c === 'All' || used.has(c)).map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={`chip mono ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="work__title">
          <h2><span className="muted">Selected</span><br />Films.</h2>
          <p className="mono">Each film shows how I approach<br /><b>story, image and the final cut.</b></p>
        </div>
        <a href="#work-list" className="mono work__explore">Explore work ↓</a>
      </div>
      <div id="work-list">
        {list.map((p, i) => <Row key={p.slug} p={p} i={i} onOpen={onOpen} />)}
      </div>
    </section>
  )
}
