import React, { useState } from 'react'
import QuestionCard from './QuestionCard'

const patLabel = (q) => {
  if (q?.id) {
    const m = String(q.id).match(/^(\d{4})-(\d+)/)
    if (m) return `${m[1]} Q${Number(m[2])}`
  }
  return q?.year ? String(q.year) : ''
}

export default function Results({ paper, answers, totals, onRestart }) {
  // compute totals if not passed
  const computed = (() => {
    let score = 0, marks = 0, correct = 0, incorrect = 0, skipped = 0
    for (const q of paper?.questions ?? []) {
      const m = q.marks ?? 2
      marks += m
      const picked = answers?.[q.id]
      if (!q.correct) { skipped += m; continue }
      if (picked === q.correct) { score += m; correct++ }
      else if (picked) { incorrect++ }
    }
    return { score, marks, correct, incorrect, skipped }
  })()

  const t = totals || computed
  const percent = t.marks ? Math.round((t.score / t.marks) * 100) : 0
  const totalQs = paper?.questions?.length ?? 0

  // track which questions are expanded
  const [open, setOpen] = useState(new Set())
  const toggle = (id) =>
    setOpen(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <div className="container">
      <div className="scorecard">
        <div className="score-left">
          <div className="score-line">
            <span className="score">{t.score}</span>
            <span className="outof">/ {t.marks}</span>
          </div>
          <div className="percent">{percent}%</div>
          {t.skipped > 0 && (
            <div className="note">
              {t.skipped} marks not graded (missing keys). Edit in <code>src/data/questions.js</code>.
            </div>
          )}
        </div>

        <div className="score-right">
          <div className="bar">
            <div className="bar-fill" style={{ width: `${(t.score / (t.marks || 1)) * 100}%` }} />
          </div>
          <div className="chips">
            <span className="chip ok">Correct: {t.correct ?? '—'}</span>
            <span className="chip bad">Incorrect: {t.incorrect ?? '—'}</span>
            <span className="chip muted">Total Qs: {totalQs}</span>
          </div>
          <div className="actions">
            <button className="primary" onClick={onRestart}>Start a New Test</button>
          </div>
        </div>
      </div>

      <div className="review-wrap">
        <h3 className="review-title">Review answers</h3>
        <ol className="review">
          {paper.questions.map((q, i) => {
            const picked = answers[q.id] || '—'
            const correct = q.correct || '—'
            const ok = q.correct && picked === q.correct
            const isOpen = open.has(q.id)
            const source = patLabel(q)

            return (
              <li key={q.id} className={`review-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="review-row as-button"
                  onClick={() => toggle(q.id)}
                  aria-expanded={isOpen}
                  title={source || undefined}
                >
                  <span className="qidx">Q{i + 1} [{q.marks || 2}]</span>
                  <span className="qsrc">{source}</span>
                  <span className={ok ? 'ok' : (q.correct ? 'bad' : 'muted')}>
                    Your answer: {picked} | Correct: {correct}
                  </span>
                  <span className="chev" aria-hidden>▾</span>
                </button>

                {isOpen && (
                  <div className="review-question">
                    <QuestionCard
                      q={{ ...q, number: i + 1 }}
                      value={answers[q.id]}
                      onChange={() => {}}
                      readOnly
                    />
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
