import { useEffect, useState, useRef } from 'react'

const SEQUENCE = [
  { type: 'cmd', text: 'dig yourdomain.int.yt ALIAS +short' },
  { type: 'out', text: 'flattened → 76.76.21.21', delay: 300 },
  { type: 'out', text: 'resolved via dns1.int.yt in 8ms', delay: 120, dim: true },
  { type: 'gap' },
  { type: 'cmd', text: 'curl api.dns.int.yt/v1/records -H "Authorization: Bearer $KEY"' },
  { type: 'json', lines: [
    '{',
    '  "domain": "yourdomain.int.yt",',
    '  "records": 847,',
    '  "limit": 1000,',
    '  "status": "active",',
    '  "anycast": ["dns1.int.yt", "dns2.int.yt"]',
    '}',
  ]},
]

const TYPE_SPEED = 22

export default function DnsTerminal() {
  const [lines, setLines] = useState([])
  const [cursorVisible, setCursorVisible] = useState(true)
  const runningRef = useRef(false)

  useEffect(() => {
    if (runningRef.current) return
    runningRef.current = true

    let cancelled = false
    const cursorInterval = setInterval(() => setCursorVisible(v => !v), 500)

    async function run() {
      while (!cancelled) {
        setLines([])
        await sleep(500)

        for (const step of SEQUENCE) {
          if (cancelled) return

          if (step.type === 'gap') {
            setLines(prev => [...prev, { type: 'gap', id: Math.random() }])
            await sleep(400)
            continue
          }

          if (step.type === 'cmd') {
            const id = Math.random()
            setLines(prev => [...prev, { type: 'cmd', text: '', id }])
            for (let i = 1; i <= step.text.length; i++) {
              if (cancelled) return
              const partial = step.text.slice(0, i)
              setLines(prev => prev.map(l => l.id === id ? { ...l, text: partial } : l))
              await sleep(TYPE_SPEED)
            }
            await sleep(200)
            continue
          }

          if (step.type === 'out') {
            await sleep(step.delay || 0)
            setLines(prev => [...prev, { type: 'out', text: step.text, dim: step.dim, id: Math.random() }])
            continue
          }

          if (step.type === 'json') {
            await sleep(250)
            for (const l of step.lines) {
              if (cancelled) return
              setLines(prev => [...prev, { type: 'json', text: l, id: Math.random() }])
              await sleep(60)
            }
            continue
          }
        }

        await sleep(3200)
      }
    }

    run()
    return () => { cancelled = true; runningRef.current = false; clearInterval(cursorInterval) }
  }, [])

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--gold" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">zsh — dns.int.yt</span>
      </div>
      <div className="terminal__body">
        {lines.map((l, i) => (
          <div key={l.id ?? i} className={`terminal__line terminal__line--${l.type}`}>
            {l.type === 'cmd' && <><span className="terminal__prompt">$</span> {l.text}</>}
            {l.type === 'out' && <span className={l.dim ? 'terminal__dim' : ''}>{l.text}</span>}
            {l.type === 'json' && <span className="terminal__json">{l.text}</span>}
            {l.type === 'gap' && <>&nbsp;</>}
          </div>
        ))}
        <span className={`terminal__cursor ${cursorVisible ? 'is-visible' : ''}`}>▊</span>
      </div>
    </div>
  )
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
