import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <img src="/favicon.png" alt="" className="footer__mark" />
            <span>Intent<span className="nav__brand-accent">-DNS</span></span>
          </div>
          <p className="footer__tagline">
            Authoritative anycast DNS hosting, free forever. Part of the Intent project,
            fiscally sponsored by Hack Club, a 501(c)(3) non-profit.
          </p>
          <div className="footer__social">
            <a href="https://discord.gg/SZEYNP4qBc" aria-label="Discord" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord" /></a>
            <a href="https://github.com/intentfreedomain/FreeDomain" aria-label="GitHub" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a>
            <a href="mailto:admin@int.yt" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Product</h4>
          <Link to="/pricing">Pricing</Link>
          <Link to="/docs">API Docs</Link>
          <Link to="/dns-records">DNS Records</Link>
          <a href="https://panel.dns.int.yt/?page=signup">Dashboard</a>
        </div>

        <div className="footer__col">
          <h4>Infrastructure</h4>
          <span className="footer__static">dns1.int.yt</span>
          <span className="footer__static">dns2.int.yt</span>
          <span className="footer__static">PowerDNS v5.1.4</span>
          <span className="footer__static">Recursor v4.9.3</span>
        </div>

        <div className="footer__col">
          <h4>Community</h4>
          <a href="https://discord.gg/SZEYNP4qBc" target="_blank" rel="noreferrer">Discord</a>
          <a href="mailto:admin@int.yt">admin@int.yt</a>
          <a href="https://int.yt" target="_blank" rel="noreferrer">int.yt — free subdomains</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>Intent-DNS © 2026 · Enterprise Anycast DNS Platform</span>
        <span className="footer__status">
          <span className="status-dot" /> All systems operational
        </span>
      </div>
    </footer>
  )
}