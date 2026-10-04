import { useEffect } from 'react'
import { SITE_URL, pageTitle } from '../data/site.js'

const OG_IMAGE = `${SITE_URL}/og.png`

/**
 * Per-page document metadata.
 *
 * Pages are prerendered to static HTML at build time (scripts/prerender.mjs),
 * which is what crawlers and link unfurlers actually read. This component
 * exists for client-side navigation between routes, so the title and canonical
 * stay correct after a soft navigation — it is a mirror of the static tags,
 * never the only source of them.
 */
export default function Seo({ title, description, path = '/' }) {
  const fullTitle = pageTitle(title)

  useEffect(() => {
    document.title = fullTitle

    setMeta('description', description)

    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', `${SITE_URL}${path}`, 'property')

    setCanonical(`${SITE_URL}${path}`)
  }, [fullTitle, description, path])

  return null
}

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

export { OG_IMAGE }
