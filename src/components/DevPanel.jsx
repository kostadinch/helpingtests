import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { QUESTION_BANK } from '../data/questions'
import QuestionCard from './QuestionCard'

const LS_KEY = 'pat_question_overrides_v1'

// helpers
const pretty = (obj) => JSON.stringify(obj, null, 2)
function download(filename, text) {
  const blob = new Blob([text], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
function validateQuestion(q) {
  const errs = []
  if (!q || typeof q !== 'object') { errs.push('Not an object'); return errs }
  if (!q.id) errs.push('Missing id')
  if (!q.year) errs.push('Missing year')
  if (!q.options || !Array.isArray(q.options) || q.options.length < 2) errs.push('Need options[] (>=2)')
  if (!q.correct) errs.push('Missing correct')
  const idx = q.correct ? (q.correct.charCodeAt(0) - 65) : -1
  if (q.correct && (idx < 0 || idx >= (q.options?.length || 0))) errs.push('correct letter out of range')
  return errs
}

/* ---------- Row component ---------- */
function DevRow({ item, indexInAll, onSave, onDelete }) {
  const [text, setText] = useState(pretty(item))
  const [parsed, setParsed] = useState(item)
  const [parseErr, setParseErr] = useState('')
  const [showPreview, setShowPreview] = useState(true)
  const [tempAnswer, setTempAnswer] = useState(null) // interactive preview
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    setText(pretty(item))
    setParsed(item)
    setParseErr('')
    setTempAnswer(null)
  }, [item])

  const errs = validateQuestion(parsed)
  const hasErr = !!parseErr || errs.length > 0

  const handleChange = (val) => {
    setText(val)
    try {
      const j = JSON.parse(val)
      setParsed(j)
      setParseErr('')
    } catch (e) {
      setParseErr(e.message)
    }
  }

  const saveRow = () => {
    try {
      const j = JSON.parse(text)
      onSave(indexInAll, j)
    } catch (e) {
      alert('Invalid JSON: ' + e.message)
    }
  }

  const addTag = () => {
    const t = newTag.trim()
    if (!t) return
    const next = { ...parsed, tags: Array.from(new Set([...(parsed.tags || []), t])) }
    setParsed(next)
    setText(pretty(next))
    setNewTag('')
  }

  return (
    <div className={`dev-card ${hasErr ? 'has-error' : ''}`}>
      <div className="dev-head">
        <div className="dev-id">
          <strong>{parsed?.id || item.id}</strong>
          <span className="muted"> · {parsed?.year || item.year}</span>
          {errs.length > 0 && <span className="tag bad">errors: {errs.length}</span>}
          {parseErr && <span className="tag bad">parse error</span>}
        </div>
        <div className="dev-actions">
          <button onClick={() => setShowPreview(s => !s)}>
            {showPreview ? 'Hide preview' : 'Show preview'}
          </button>
          <button onClick={saveRow} className="primary">Save row</button>
          <button onClick={() => onDelete(indexInAll)}>Delete</button>
        </div>
      </div>

      <div className="dev-grid">
        <div className="dev-editor">
          <textarea
            className="dev-json"
            rows={12}
            spellCheck={false}
            value={text}
            onChange={(e) => handleChange(e.target.value)}
          />
          {(parseErr || errs.length > 0) && (
            <ul className="dev-errors">
              {parseErr && <li>Parse: {parseErr}</li>}
              {errs.map((e, k) => <li key={k}>Schema: {e}</li>)}
            </ul>
          )}
        </div>

        {showPreview && (
          <div className="dev-preview">
            <div className="dev-preview-bar">
              <span>Preview</span>
              <span className="muted"> (interactive — select an option to check layout)</span>
            </div>
            <QuestionCard
              q={{ ...parsed, number: 1 }}
              value={tempAnswer}
              onChange={(label) => setTempAnswer(label)}
              readOnly={false}
            />

            <div className="dev-tags-row">
              <input
                className="dev-tag-input"
                placeholder="add tag (e.g., kinematics)"
                value={newTag}
                onChange={(e)=>setNewTag(e.target.value)}
                onKeyDown={(e)=>{ if (e.key==='Enter') { e.preventDefault(); addTag() }}}
              />
              <button onClick={addTag}>Add tag</button>
            </div>
            {(parsed.tags || []).length > 0 && (
              <div className="tag-grid small" style={{marginTop:'.35rem'}}>
                {(parsed.tags || []).map(t => <span key={t} className="chip muted">{t}</span>)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------- Main Dev Panel ---------- */
export default function DevPanel({ onExit }) {
  // load overrides or default bank
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) return JSON.parse(raw)
    } catch {}
    return QUESTION_BANK
  })

  const [query, setQuery] = useState('')
  const [year, setYear] = useState('all')
  const [status, setStatus] = useState('')
  const [tagFilter, setTagFilter] = useState([]) // array of selected tags

  // years present
  const years = useMemo(() => {
    const s = new Set()
    items.forEach(q => q?.year && s.add(q.year))
    return Array.from(s).sort()
  }, [items])

  // discover all tags
  const allTags = useMemo(() => {
    const s = new Set()
    items.forEach(q => (q.tags || []).forEach(t => s.add(t)))
    return Array.from(s).sort((a,b)=>a.localeCompare(b))
  }, [items])

  // filtering
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return items.filter(q => {
      if (year !== 'all' && String(q.year) !== String(year)) return false
      if (tagFilter.length && !(q.tags || []).some(t => tagFilter.includes(t))) return false
      if (!needle) return true
      const hay =
        (q.id || '') + ' ' +
        (q.year || '') + ' ' +
        (q.stem || '') + ' ' +
        (q.stemHtml || '') + ' ' +
        (Array.isArray(q.stemParts) ? q.stemParts.map(p => (typeof p === 'string' ? p : p.math || '')).join(' ') : '') +
        ' ' + (q.options || []).map(o => o.text || o.math || o.html || '').join(' ') +
        ' ' + (q.tags || []).join(' ')
      return hay.toLowerCase().includes(needle)
    })
  }, [items, year, query, tagFilter])

  // duplicate id check
  const duplicateIds = useMemo(() => {
    const seen = new Map()
    const dups = new Set()
    items.forEach((q) => {
      if (!q?.id) return
      if (seen.has(q.id)) dups.add(q.id)
      else seen.set(q.id, true)
    })
    return dups
  }, [items])

  // mutations
  const updateItem = useCallback((idx, newJson) => {
    setItems(prev => {
      const next = [...prev]
      next[idx] = newJson
      return next
    })
  }, [])

  const removeItem = useCallback((idx) => {
    setItems(prev => prev.filter((_, i) => i !== idx))
  }, [])

  const addBlank = () => {
    const yearGuess = years[0] || new Date().getFullYear()
    setItems(prev => [
      {
        id: `custom-${Date.now()}`,
        year: yearGuess,
        marks: 2,
        stem: 'New question…',
        options: [{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }],
        correct: 'A',
        tags: []
      },
      ...prev
    ])
  }

  const saveOverrides = () => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(items))
      setStatus('Saved overrides to localStorage ✓')
      setTimeout(() => setStatus(''), 1500)
    } catch (e) {
      setStatus('Failed saving overrides: ' + e.message)
    }
  }

  const resetOverrides = () => {
    localStorage.removeItem(LS_KEY)
    setItems(QUESTION_BANK)
    setStatus('Cleared overrides; reloaded original bank')
    setTimeout(() => setStatus(''), 1500)
  }

  const exportJson = () => {
    download('question_bank_overrides.json', JSON.stringify(items, null, 2))
  }

  const totalErrs = useMemo(() => {
    let n = 0
    items.forEach(q => { n += validateQuestion(q).length })
    return n
  }, [items])

  return (
    <div className="container">
      <div className="dev-toolbar">
        <h2>Developer Panel — Question Bank</h2>
        <div className="spacer" />
        <button onClick={addBlank}>+ Add</button>
        <button onClick={saveOverrides} className="primary">Save Overrides</button>
        <button onClick={exportJson}>Export JSON</button>
        <button onClick={resetOverrides}>Reset</button>
        <button onClick={onExit}>Exit</button>
      </div>

      <div className="dev-filters">
        <input
          className="dev-search"
          placeholder="Search id, year, stem, options…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="all">All years</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>

        <div className="dev-tags">
          <details>
            <summary>Filter by tags</summary>
            <div className="tag-grid" style={{marginTop:'.35rem'}}>
              {allTags.length === 0 && <span className="muted">No tags yet</span>}
              {allTags.map(t => {
                const on = tagFilter.includes(t)
                return (
                  <button
                    key={t}
                    type="button"
                    className={`chip ${on ? 'ok' : ''}`}
                    onClick={() =>
                      setTagFilter(prev => on ? prev.filter(x=>x!==t) : [...prev, t])
                    }
                  >
                    {t}
                  </button>
                )
              })}
              {tagFilter.length > 0 && (
                <button className="chip" onClick={()=>setTagFilter([])}>clear</button>
              )}
            </div>
          </details>
        </div>

        <div className="dev-meta" style={{marginLeft:'auto'}}>
          <span>Total: {items.length}</span>
          <span>Shown: {filtered.length}</span>
          <span className={duplicateIds.size ? 'bad' : ''}>Duplicate IDs: {duplicateIds.size}</span>
          <span className={totalErrs ? 'bad' : 'ok'}>Validation errors: {totalErrs}</span>
        </div>
      </div>

      <div className="dev-list">
        {filtered.map((q) => {
          const idx = items.indexOf(q) // index in full array
          return (
            <DevRow
              key={q.id + '-' + idx}
              item={q}
              indexInAll={idx}
              onSave={updateItem}
              onDelete={removeItem}
            />
          )
        })}
      </div>

      {status && <div className="dev-status">{status}</div>}

      <p className="muted" style={{marginTop:'1rem'}}>
        Tip: Edits are stored in <code>localStorage</code> as overrides. Use <strong>Export JSON</strong> to commit them into your repo later.
      </p>
    </div>
  )
}
