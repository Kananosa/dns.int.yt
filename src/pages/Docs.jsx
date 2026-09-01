import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

export default function Docs() {
  return (
    <section className="docs-redirect">
      <Seo
        title="API Docs"
        description="Intent-DNS REST API reference — automate domain registration and DNS record management with a full API on every plan, including free."
        keywords="DNS API, REST API DNS, DNS automation"
        path="/docs"
      />
      <div className="container">
        <Reveal>
          <div className="docs-redirect__card card">
            <div className="docs-redirect__icon">
              <i className="fa-solid fa-book" />
            </div>
            <div className="pill pill--blue"><span className="pill-dot" /> REST API</div>
            <h1>Our API docs live on the dashboard</h1>
            <p>
              Full endpoint reference, request/response shapes, and auth details are kept
              up to date at <code>panel.dns.int.yt</code> — right alongside the account
              that actually uses them.
            </p>
            <div className="docs-redirect__cta">
              <a href="https://panel.dns.int.yt/api-docs.php" className="btn btn--primary btn--lg">
                <i className="fa-solid fa-arrow-up-right-from-square" /> Open API docs
              </a>
              <a href="https://panel.dns.int.yt/?page=signup" className="btn btn--ghost btn--lg">
                Create an account
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}