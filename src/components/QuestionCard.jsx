import React from 'react'
import { InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

/** Make a label like "2008 Q13" from q.id (e.g., "2008-13") */
const patLabel = (q) => {
  if (q?.id) {
    const m = String(q.id).match(/^(\d{4})-(\d+)/)
    if (m) return `${m[1]} Q${Number(m[2])}`
  }
  return q?.year ? String(q.year) : ''
}

/** Normalize small fractions and ensure display style where appropriate */
const normalizeMath = (s) => {
  if (!s) return s
  let out = String(s)
  // Prefer display-style fractions so they read well in options/stems
  out = out.replaceAll('\\tfrac', '\\dfrac')
  // Only prefix displaystyle for multi-part expressions; single symbols look fine as-is
  const needsDisplay = /\\frac|\\dfrac|\\sqrt|\\sum|\\int|\\left|\\right/.test(out)
  if (needsDisplay && !out.trim().startsWith('\\displaystyle')) {
    out = '\\displaystyle ' + out
  }
  return out
}

export default function QuestionCard({ q, value, onChange, readOnly = false }) {
  const meta = patLabel(q)

  return (
    <div className="question-card">
      {/* Header meta */}
      <div className="qmeta">
        <span className="qnum">Question {q.number}</span>
        {meta && <span className="qtag">{meta}</span>}
        <span className="qmarks">[{q.marks || 2} marks]</span>
      </div>

      {/* Optional topic tags */}
      {Array.isArray(q.tags) && q.tags.length > 0 && (
        <div className="qtags">
          {q.tags.map(tag => (
            <span key={tag} className="chip muted">{tag}</span>
          ))}
        </div>
      )}

      {/* Stem */}
      <div className="stem">
        {q.stem && <p>{q.stem}</p>}

        {Array.isArray(q.stemParts) && q.stemParts.length > 0 && (
          <p>
            {q.stemParts.map((part, i) =>
              typeof part === 'string'
                ? <React.Fragment key={i}>{part}</React.Fragment>
                : <InlineMath key={i} math={normalizeMath(part.math)} />
            )}
          </p>
        )}

        {q.stemHtml && (
          <div dangerouslySetInnerHTML={{ __html: q.stemHtml }} />
        )}

        {/* Single diagram */}
        {q.image && (
          <div className="qimage">
            <img src={q.image} alt={q.imageAlt || 'diagram'} />
          </div>
        )}

        {/* Multiple assets (screenshots/figures) */}
        {Array.isArray(q.assets) && q.assets.length > 0 && (
          <div className="qassets">
            {q.assets.map((src, i) => (
              <div className="qasset" key={src + i}>
                <img src={src} alt={q.imageAlt || `diagram ${i + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="options">
        {q.options.map((opt, idx) => {
          const label = String.fromCharCode(65 + idx)

          // Only render math when explicitly provided OR when the question opts in
          const useMath = typeof opt.math === 'string' || (q.forceMathOptions === true && typeof opt.text === 'string')
          const mathStr = useMath ? normalizeMath(opt.math || opt.text) : null

          return (
            <label
              key={label}
              className={`option ${readOnly ? 'readonly' : ''}`}
            >
              <input
                type="radio"
                name={`q${q.id}`}
                value={label}
                checked={value === label}
                onChange={() => !readOnly && onChange(label)}
                disabled={readOnly}
                aria-label={`Choose option ${label}`}
              />

              {mathStr ? (
                <InlineMath math={mathStr} />
              ) : opt.html ? (
                <span dangerouslySetInnerHTML={{ __html: opt.html }} />
              ) : (
                <span>{opt.text}</span>
              )}
            </label>
          )
        })}
      </div>
    </div>
  )
}
