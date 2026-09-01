import { useEffect } from 'react'

const SITE_NAME = 'Intent-DNS'
const SITE_URL = 'https://dns.int.yt'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`

/**
 * Sets document title + meta tags for the current page. Runs client-side
 * (this is a Vite SPA, not SSR), so search engines that execute JS will
 * pick these up on render; crawlers that don't render JS fall back to
 * whatever is in index.html's <head>, which mirrors the homepage's tags.
 */
export default function Seo({ title, description, path = '/', keywords }) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — Enterprise Anycast DNS, Free`
    document.title = fullTitle

    setMeta('description', description)
    setMeta('keywords', keywords)

    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', `${SITE_URL}${path}`, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('og:image', DEFAULT_IMAGE, 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', DEFAULT_IMAGE)

    setCanonical(`${SITE_URL}${path}`)
  }, [title, description, path, keywords])

  return null
}

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}