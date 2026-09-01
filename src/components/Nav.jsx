import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/docs', label: 'API Docs' },
  { to: '/dns-records', label: 'DNS Records' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <img src="/favicon.png" alt="" className="nav__mark" />
          <span>Intent<span className="nav__brand-accent">-DNS</span></span>
        </Link>

        <nav className="nav__links">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className={({isActive}) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__cta">
          <a href="https://panel.dns.int.yt/?page=login" className="btn btn--ghost btn--sm">Log in</a>
          <a href="https://panel.dns.int.yt/?page=signup" className="btn btn--primary btn--sm">
            Get started for free
          </a>
        </div>

        <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className="nav__mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <div className="nav__mobile-cta">
            <a href="https://panel.dns.int.yt/?page=login" className="btn btn--ghost">Log in</a>
            <a href="https://panel.dns.int.yt/?page=signup" className="btn btn--primary">Get started for free</a>
          </div>
        </div>
      )}
    </header>
  )
}