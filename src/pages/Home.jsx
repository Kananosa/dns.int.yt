import { Link } from 'react-router-dom'
import DnsTerminal from '../components/DnsTerminal'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

const RECORD_TYPES = [
  { type: 'A', desc: 'Point a hostname to an IPv4 address' },
  { type: 'AAAA', desc: 'Point a hostname to an IPv6 address' },
  { type: 'CNAME', desc: 'Alias one hostname to another' },
  { type: 'ALIAS', desc: 'CNAME flattening at the zone apex — root domains that just work' },
  { type: 'MX', desc: 'Route mail for your domain' },
  { type: 'TXT', desc: 'Verification, SPF, DMARC, and arbitrary text' },
  { type: 'SRV', desc: 'Service discovery records' },
  { type: 'NS', desc: 'Delegate subzones to other nameservers' },
  { type: 'CAA', desc: 'Restrict which CAs can issue certs for your domain' },
]

const FEATURES = [
  {
    icon: 'fa-layer-group',
    title: '1,000 records per domain',
    body: 'Every plan — including free — ships with 5x the record headroom of most managed DNS providers.',
  },
  {
    icon: 'fa-shuffle',
    title: 'ALIAS flattening at the apex',
    body: 'Point your root domain at anything, not just an IP. Recursor-side flattening means it resolves like an A record.',
  },
  {
    icon: 'fa-code',
    title: 'Full REST API',
    body: 'Every action in the dashboard has an API equivalent. Automate zone creation, record edits, and lookups.',
  },
  {
    icon: 'fa-diagram-project',
    title: 'Anycast nameserver pair',
    body: 'dns1.int.yt and dns2.int.yt answer from the nearest edge, so lookups resolve fast wherever your users are.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Built on PowerDNS',
    body: 'Authoritative server v5.1.4 with Recursor v4.9.3 underneath — the same engine trusted by large-scale operators.',
  },
  {
    icon: 'fa-heart',
    title: 'Non-profit, no catch',
    body: 'Fiscally sponsored by Hack Club, a 501(c)(3). No ads, no data resale, no artificial record caps to force an upgrade.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Enterprise Anycast DNS, Free"
        description="Free authoritative DNS hosting with 1,000 records per domain, ALIAS flattening, and a full REST API. Anycast nameservers on PowerDNS. No credit card required."
        keywords="free DNS hosting, DNS records, ALIAS record, anycast DNS, PowerDNS, DNS API, free DNS provider"
        path="/"
      />
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="pill pill--blue">
              <span className="pill-dot" /> PowerDNS v5.1.4 · Recursor v4.9.3
            </div>
            <h1>
              DNS hosting that gives you<br />
              <span className="hero__gold">1,000 records</span> where others give 200
            </h1>
            <p className="hero__sub">
              Intent-DNS is authoritative anycast DNS for developers — ALIAS flattening,
              a full REST API, and a record ceiling that doesn't force you into a paid tier
              the moment your zone gets busy. Free forever, no card required.
            </p>
            <div className="hero__cta">
              <a href="https://panel.dns.int.yt/?page=signup" className="btn btn--primary btn--lg">
                <i className="fa-solid fa-bolt" /> Start for free — 20 domains
              </a>
              <Link to="/docs" className="btn btn--ghost btn--lg">
                <i className="fa-solid fa-book" /> Read the API docs
              </Link>
            </div>
            <div className="hero__trust">
              <span><i className="fa-solid fa-check" /> No credit card</span>
              <span><i className="fa-solid fa-check" /> dns1 &amp; dns2 anycast</span>
              <span><i className="fa-solid fa-check" /> 501(c)(3) non-profit</span>
            </div>
          </div>

          <div className="hero__visual">
            <DnsTerminal />
          </div>
        </div>
      </section>

      {/* ===== Comparison strip ===== */}
      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="compare-strip">
              <div className="compare-strip__label">
                <i className="fa-solid fa-scale-balanced" />
                <span>Record limits, compared</span>
              </div>
              <div className="compare-strip__bars">
                <CompareBar name="Cloudflare Free" value={200} max={1000} />
                <CompareBar name="Most DNS hosts" value={100} max={1000} />
                <CompareBar name="Intent-DNS Free" value={1000} max={1000} highlight />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="section--tight">
        <div className="container stats-row">
          <Reveal className="stat"><StatItem to={1000} suffix="" label="DNS records per domain, every plan" /></Reveal>
          <Reveal className="stat" delay={80}><StatItem to={20} suffix="" label="Free domain slots to start" /></Reveal>
          <Reveal className="stat" delay={160}><StatItem to={2} suffix="" label="Anycast nameservers, dns1 &amp; dns2" /></Reveal>
          <Reveal className="stat" delay={240}><StatItem to={0} prefix="$" suffix="" label="Cost to get started" /></Reveal>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Everything a production zone needs</h2>
              <p>No feature walls between free and paid. Every plan gets the same engine, the same API, and the same record types — only the ceilings move.</p>
            </div>
          </Reveal>

          <div className="feature-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="feature-card card">
                  <div className="feature-card__icon"><i className={`fa-solid ${f.icon}`} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Record types ===== */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Every record type you'd expect from an enterprise provider</h2>
              <p>Including ALIAS — apex-level CNAME flattening most free providers hold back entirely.</p>
            </div>
          </Reveal>

          <div className="record-grid">
            {RECORD_TYPES.map((r, i) => (
              <Reveal key={r.type} delay={i * 35}>
                <div className="record-chip">
                  <span className={`record-chip__type ${r.type === 'ALIAS' ? 'is-highlight' : ''}`}>{r.type}</span>
                  <span className="record-chip__desc">{r.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== int.yt integration ===== */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="intyt-banner card">
              <div className="intyt-banner__copy">
                <div className="pill pill--gold"><i className="fa-solid fa-link" /> Works with int.yt</div>
                <h2>Already have a free int.yt subdomain?</h2>
                <p>
                  int.yt subdomains and Intent-DNS accounts are separate — your subdomain is
                  claimed through the int.yt panel, DNS records are managed here. Connecting
                  the two is one step: point your subdomain's nameservers to{' '}
                  <code>dns1.int.yt</code> and <code>dns2.int.yt</code>, then manage every
                  record for it from your Intent-DNS dashboard.
                </p>
                <div className="intyt-banner__cta">
                  <a href="https://int.yt" target="_blank" rel="noreferrer" className="btn btn--ghost">
                    Get a free int.yt subdomain
                  </a>
                  <a href="https://panel.dns.int.yt/?page=signup" className="btn btn--primary">
                    Create your DNS account
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="section final-cta">
        <div className="container">
          <Reveal>
            <div className="final-cta__inner">
              <h2>Point your domain at something that scales with you</h2>
              <p>Free plan gives you 20 domains and 1,000 records each. No trial period, no downgrade trap.</p>
              <div className="final-cta__buttons">
                <a href="https://panel.dns.int.yt/?page=signup" className="btn btn--primary btn--lg">
                  <i className="fa-solid fa-rocket" /> Create your free account
                </a>
                <a href="https://discord.gg/SZEYNP4qBc" target="_blank" rel="noreferrer" className="btn btn--ghost btn--lg">
                  <i className="fa-brands fa-discord" /> Join the Discord
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function StatItem({ to, prefix, suffix, label }) {
  return (
    <div>
      <div className="stat__num"><Counter to={to} prefix={prefix} suffix={suffix} /></div>
      <div className="stat__label" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  )
}

function CompareBar({ name, value, max, highlight }) {
  const pct = (value / max) * 100
  return (
    <div className={`compare-bar ${highlight ? 'is-highlight' : ''}`}>
      <div className="compare-bar__head">
        <span>{name}</span>
        <span className="compare-bar__value">{value.toLocaleString()} records</span>
      </div>
      <div className="compare-bar__track">
        <div className="compare-bar__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}