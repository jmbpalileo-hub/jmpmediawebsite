import { useState } from 'react'
import { site } from '../data/site'
import { projects } from '../data/projects'

export function About() {
  const strip = projects.slice(0, 5)
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div>
          <span className="label mono"><i className="dot" />About the studio</span>
          <h2 className="about__h">Meet JM<br /><span className="muted">from JMP.</span></h2>
          <a href="#contact" className="btn btn--pill">Work with me <span aria-hidden>→</span></a>
        </div>
        <div>
          <p className="about__lead">{site.aboutLead}</p>
          <div className="about__cols">
            <p>{site.aboutLeft}</p>
            <p>{site.aboutRight}</p>
          </div>
          <dl className="stats">
            <div><dt className="mono muted">Years</dt><dd>{new Date().getFullYear() - site.since}+</dd></div>
            <div><dt className="mono muted">Brands</dt><dd>{site.clients.length}+</dd></div>
            <div><dt className="mono muted">Based</dt><dd>BNE</dd></div>
          </dl>
        </div>
      </div>
      <div className="strip" aria-hidden>
        {strip.map((p, i) =>
          p.poster ? <img key={p.slug} src={p.poster} alt="" loading="lazy" className={`strip__i strip__i--${i}`} />
            : <div key={p.slug} className={`strip__i strip__i--${i} frame--empty`} style={{ '--tint': p.tint }} />
        )}
      </div>
    </section>
  )
}

export function Clients() {
  const doubled = [...site.clients, ...site.clients]
  return (
    <section className="clients" aria-label="Clients">
      <span className="label mono"><i className="dot" />Trusted by</span>
      <div className="marquee">
        <div className="marquee__track">
          {doubled.map((c, i) => <span key={i} className="marquee__item" aria-hidden={i >= site.clients.length}>{c}<i className="dot" /></span>)}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services__head">
        <span className="label mono"><i className="dot" />What I make</span>
        <h2 className="mega">Services</h2>
      </div>
      <ol className="svc">
        {site.services.map((s, i) => (
          <li key={s.title} className="svc__row">
            <span className="mono muted">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p className="muted">{s.blurb}</p>
            <ul className="mono">{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            <a href="#contact" className="mono svc__cta">Book <span aria-hidden>→</span></a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Contact() {
  const [state, setState] = useState('idle')
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  const submit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    if (!endpoint) {
      const body = `Name: ${data.name}\nBudget: ${data.budget}\n\n${data.message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry — ' + data.name)}&body=${encodeURIComponent(body)}`
      return
    }
    setState('sending')
    try {
      const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      setState(r.ok ? 'sent' : 'error')
      if (r.ok) e.target.reset()
    } catch { setState('error') }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__top">
        <h2 className="mega">Let’s make<br /><span className="accent">something.</span></h2>
        <p className="mono muted">Booking projects from<br />{new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}</p>
      </div>
      <form className="form" onSubmit={submit}>
        <label><span className="mono muted">Name</span><input name="name" required autoComplete="name" /></label>
        <label><span className="mono muted">Email</span><input name="email" type="email" required autoComplete="email" /></label>
        <label><span className="mono muted">Budget</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Under $3k</option><option>$3k – $8k</option><option>$8k – $20k</option><option>$20k+</option>
          </select>
        </label>
        <label className="form__wide"><span className="mono muted">Tell me about the project</span><textarea name="message" rows="4" required /></label>
        <div className="form__foot">
          <button className="btn btn--solid" disabled={state === 'sending'}>
            {state === 'sending' ? 'Sending…' : 'Send enquiry'} <span aria-hidden>→</span>
          </button>
          <p className="mono muted" role="status">
            {state === 'sent' && 'Thanks — I’ll reply within 48 hours.'}
            {state === 'error' && `Something broke. Email ${site.email} directly.`}
          </p>
        </div>
      </form>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wordmark" aria-hidden>JMP MEDIA</div>
      <div className="footer__row mono">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span className="footer__social">
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.vimeo} target="_blank" rel="noreferrer">Vimeo</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </span>
        <span className="muted">© {new Date().getFullYear()} {site.brandFull} · {site.city}, AU</span>
      </div>
    </footer>
  )
}
