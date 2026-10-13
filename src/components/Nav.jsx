import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { projects } from '../data/projects'

function useLocalTime(tz) {
  const fmt = () =>
    new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: tz })
  const [t, setT] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 30000)
    return () => clearInterval(id)
  }, [])
  return t
}

export default function Nav() {
  const time = useLocalTime(site.timezone)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const links = [
    ['Work', '#work', `(${projects.length})`],
    ['Studio', '#about'],
    ['Services', '#services'],
    ['Contact', '#contact'],
  ]

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav__bar">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          {site.brand}<sup>®</sup> <span className="nav__logo-sub">Media</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map(([label, href, count]) => (
            <a key={href} href={href} className="mono">
              {label} {count && <span className="muted">{count}</span>}
            </a>
          ))}
        </nav>
        <span className="nav__time mono">
          {time} <span className="muted">{site.city.toUpperCase()}</span>
        </span>
        <a href="#contact" className="btn btn--bar">
          <span className="mono">Start a project</span>
          <span className="mono muted">/Available</span>
          <span className="btn__arrow" aria-hidden>→</span>
        </a>
        <button className="nav__burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      <div className="nav__sheet" hidden={!open}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href={`mailto:${site.email}`} className="mono nav__sheet-mail">{site.email}</a>
      </div>
    </header>
  )
}
