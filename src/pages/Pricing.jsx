import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    tagline: 'For personal projects and side builds',
    domains: '20 domain slots',
    records: '1,000 DNS records / domain',
    features: [
      'Full REST API access',
      'All record types incl. ALIAS',
      'dns1 & dns2 anycast nameservers',
      'Dashboard + API management',
    ],
    cta: 'Start for free',
    href: 'https://panel.dns.int.yt/?page=signup',
    highlight: false,
  },
  {
    name: 'Paid',
    price: '$1',
    period: '/month',
    tagline: 'For freelancers managing client domains',
    domains: '100 domain slots',
    records: '1,000 DNS records / domain',
    features: [
      'Everything in Free',
      '5x the domain capacity',
      'Priority support in Discord',
      'Same anycast infrastructure',
    ],
    cta: 'Get in touch',
    href: '#buy',
    highlight: true,
  },
  {
    name: 'Unlimited',
    price: '$4',
    period: '/month',
    tagline: 'For agencies and platforms at scale',
    domains: 'Unlimited domain slots',
    records: 'Unlimited DNS records',
    features: [
      'Everything in Paid',
      'No domain or record ceiling',
      'Built for reseller workloads',
      'Priority support in Discord',
    ],
    cta: 'Get in touch',
    href: '#buy',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Free plan: 20 domains, 1,000 DNS records each. Paid plan $1/mo for 100 domains. Unlimited plan $4/mo for unlimited domains and records. No feature walls."
        keywords="DNS pricing, free DNS plan, cheap DNS hosting, DNS record limits"
        path="/pricing"
      />
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <div className="pill pill--blue"><span className="pill-dot" /> Simple, honest pricing</div>
            <h1>Pricing that doesn't punish growth</h1>
            <p className="page-hero__sub">
              Every tier — including free — gets 1,000 DNS records per domain. You're
              only ever paying for more domain slots, never for features held hostage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className={`plan-card card ${p.highlight ? 'is-highlight' : ''}`}>
                  {p.highlight && <div className="plan-card__badge">Most popular</div>}
                  <h3>{p.name}</h3>
                  <p className="plan-card__tagline">{p.tagline}</p>
                  <div className="plan-card__price">
                    <span className="plan-card__price-num">{p.price}</span>
                    <span className="plan-card__price-period">{p.period}</span>
                  </div>

                  <div className="plan-card__limits">
                    <div><i className="fa-solid fa-globe" /> {p.domains}</div>
                    <div><i className="fa-solid fa-layer-group" /> {p.records}</div>
                  </div>

                  <ul className="plan-card__features">
                    {p.features.map(f => (
                      <li key={f}><i className="fa-solid fa-check" /> {f}</li>
                    ))}
                  </ul>

                  <a
                    href={p.href}
                    className={`btn btn--block ${p.highlight ? 'btn--gold' : 'btn--ghost'}`}
                    {...(p.href.startsWith('http') ? { target: '_self' } : {})}
                  >
                    {p.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How to buy ===== */}
      <section id="buy" className="section">
        <div className="container">
          <Reveal>
            <div className="buy-panel card">
              <div className="buy-panel__icon"><i className="fa-solid fa-bag-shopping" /></div>
              <h2>Want the Paid or Unlimited plan?</h2>
              <p>
                Upgrades are handled directly by the team — no automated checkout yet.
                Join the Discord or email us and we'll get your account upgraded.
              </p>
              <div className="buy-panel__cta">
                <a href="https://discord.gg/SZEYNP4qBc" target="_blank" rel="noreferrer" className="btn btn--primary">
                  <i className="fa-brands fa-discord" /> Join Discord to upgrade
                </a>
                <a href="mailto:admin@int.yt" className="btn btn--ghost">
                  <i className="fa-solid fa-envelope" /> admin@int.yt
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Comparison table ===== */}
      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Plan comparison</h2>
              <p>Side by side, in full.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="table-wrap card">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Free</th>
                    <th>Paid</th>
                    <th>Unlimited</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Domain slots</td>
                    <td>20</td>
                    <td>100</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>DNS records per domain</td>
                    <td>1,000</td>
                    <td>1,000</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>REST API access</td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                  </tr>
                  <tr>
                    <td>ALIAS record support</td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                  </tr>
                  <tr>
                    <td>Anycast (dns1 / dns2)</td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                    <td><i className="fa-solid fa-check table-check" /></td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>$0</td>
                    <td>$1 / mo</td>
                    <td>$4 / mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}