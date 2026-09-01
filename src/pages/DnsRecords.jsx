import { useState } from 'react'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

const RECORDS = [
  { type: 'A', name: '@', content: '203.0.113.42', ttl: '3600', desc: 'Maps a hostname directly to an IPv4 address.' },
  { type: 'AAAA', name: '@', content: '2606:4700::1', ttl: '3600', desc: 'Maps a hostname directly to an IPv6 address.' },
  { type: 'ALIAS', name: '@', content: 'cname.target.com', ttl: '3600', desc: 'CNAME-like flattening at the zone apex — works where a real CNAME can\'t.' },
  { type: 'CNAME', name: 'www', content: 'yourdomain.int.yt', ttl: '3600', desc: 'Aliases a subdomain to another hostname.' },
  { type: 'MX', name: '@', content: '10 mail.provider.com', ttl: '3600', desc: 'Routes inbound email with priority ordering.' },
  { type: 'TXT', name: '@', content: 'v=spf1 include:_spf... -all', ttl: '3600', desc: 'Free-form text — SPF, DKIM, domain verification.' },
  { type: 'SRV', name: '_service._tcp', content: '10 5 5060 target.com', ttl: '3600', desc: 'Advertises a service\'s host and port for discovery.' },
  { type: 'NS', name: 'sub', content: 'ns1.otherprovider.com', ttl: '86400', desc: 'Delegates a subzone to a different set of nameservers.' },
  { type: 'CAA', name: '@', content: '0 issue "letsencrypt.org"', ttl: '3600', desc: 'Restricts which certificate authorities may issue for your domain.' },
]

export default function DnsRecords() {
  const [active, setActive] = useState(RECORDS[2]) // ALIAS by default — the headline feature

  return (
    <>
      <Seo
        title="DNS Records — A, AAAA, ALIAS, CNAME, MX, TXT, SRV, NS, CAA"
        description="Every DNS record type explained with live examples: A, AAAA, CNAME, ALIAS (apex flattening), MX, TXT, SRV, NS, and CAA. 1,000 records per domain, free."
        keywords="DNS record types, ALIAS record, A record, CNAME record, MX record, TXT record, SRV record, CAA record"
        path="/dns-records"
      />
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <div className="pill pill--gold"><i className="fa-solid fa-layer-group" /> 1,000 records per domain</div>
            <h1>Full record type support, no exceptions</h1>
            <p className="page-hero__sub">
              Click a record type to see how it looks in a real zone file. Everything here
              is available on the free plan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="records-explorer">
            <div className="records-explorer__list">
              {RECORDS.map(r => (
                <button
                  key={r.type}
                  className={`records-explorer__item ${active.type === r.type ? 'is-active' : ''}`}
                  onClick={() => setActive(r)}
                >
                  <span className={`record-chip__type ${r.type === 'ALIAS' ? 'is-highlight' : ''}`}>{r.type}</span>
                  <span>{r.desc}</span>
                </button>
              ))}
            </div>

            <div className="records-explorer__preview card">
              <div className="records-explorer__preview-head">
                <span className={`record-chip__type ${active.type === 'ALIAS' ? 'is-highlight' : ''}`}>{active.type}</span>
                <span className="pill pill--green"><span className="pill-dot" /> Active</span>
              </div>
              <table className="zone-table">
                <thead>
                  <tr><th>Name</th><th>Type</th><th>Content</th><th>TTL</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="zone-mono">{active.name}</td>
                    <td className="zone-mono">{active.type}</td>
                    <td className="zone-mono zone-mono--content">{active.content}</td>
                    <td className="zone-mono">{active.ttl}</td>
                  </tr>
                </tbody>
              </table>
              <p className="records-explorer__desc">{active.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Anycast infra ===== */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Backed by anycast nameservers</h2>
              <p>Two nameservers, one authoritative engine, answering from wherever's closest.</p>
            </div>
          </Reveal>

          <div className="ns-grid">
            <Reveal>
              <div className="ns-card card">
                <div className="ns-card__dot" />
                <h3>dns1.int.yt</h3>
                <p>Primary anycast nameserver</p>
                <span className="pill pill--green"><span className="pill-dot" /> Online</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="ns-card card">
                <div className="ns-card__dot" />
                <h3>dns2.int.yt</h3>
                <p>Secondary anycast nameserver</p>
                <span className="pill pill--green"><span className="pill-dot" /> Online</span>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="stack-note card">
              <i className="fa-solid fa-microchip" />
              <div>
                <strong>Running PowerDNS v5.1.4</strong> for authoritative answers, with
                <strong> Recursor v4.9.3</strong> handling ALIAS flattening and recursive lookups.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <Reveal>
            <div className="final-cta__inner">
              <h2>Set up your first zone</h2>
              <p>20 free domains, 1,000 records each. Point your nameservers and you're live.</p>
              <div className="final-cta__buttons">
                <a href="https://panel.dns.int.yt/?page=signup" className="btn btn--primary btn--lg">
                  <i className="fa-solid fa-bolt" /> Start for free
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}