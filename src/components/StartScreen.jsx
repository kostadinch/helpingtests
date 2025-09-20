import React, { useMemo, useState } from 'react'

export default function StartScreen({ onStart, tags = [] }) {
  const [allTopics, setAllTopics] = useState(true)
  const [picked, setPicked] = useState([])

  const sorted = useMemo(() => tags.slice().sort((a,b)=>a.localeCompare(b)), [tags])
  const toggleTag = (t) =>
    setPicked(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])

  const handleStart = () => {
    onStart({ selectedTags: allTopics ? [] : picked })
  }

  return (
    <div className="start-wrap">
      <div className="start-hero pretty-card">
        <div className="hero-left">
          <h1 className="hero-title">PAT Practise Test</h1>
          <p className="hero-tagline">40 random MCQs • 2 hours • A–E options • diagrams + LaTeX</p>

          <div className="hero-actions">
            <button type="button" className="primary start-btn" onClick={handleStart}>
              Start PAT Practise Test
            </button>
            <div className="hint">Default: all topics</div>
          </div>

          <div className="quick-features">
            <div className="qf-item">⏱️ Timed (2h)</div>
            <div className="qf-item">🧠 Randomised</div>
            <div className="qf-item">🖼️ Diagrams</div>
            <div className="qf-item">∑ KaTeX</div>
          </div>
        </div>

        <div className="hero-right">
          <div className="pretty-card inner">
            <h3 className="panel-title">Choose topics</h3>

            <label className="all-topics">
              <input
                type="checkbox"
                checked={allTopics}
                onChange={(e) => {
                  const v = e.target.checked
                  setAllTopics(v)
                  if (v) setPicked([])
                }}
              />
              <span>All topics</span>
            </label>

            <details open={!allTopics}>
              <summary className="panel-summary">Select specific tags</summary>
              <div className={`tag-choices ${allTopics ? 'disabled' : ''}`}>
                {sorted.length === 0 && (
                  <div className="muted">No tags yet. You can add tags in the Developer Panel (/?dev=1).</div>
                )}
                {sorted.map(t => {
                  const on = picked.includes(t)
                  return (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${on ? 'ok' : ''}`}
                      disabled={allTopics}
                      onClick={() => toggleTag(t)}
                      title={t}
                    >
                      {t}
                    </button>
                  )
                })}
                {!allTopics && picked.length > 0 && (
                  <button type="button" className="chip" onClick={() => setPicked([])}>clear</button>
                )}
              </div>
            </details>

            <div className="tiny-note">
              Tip: combine multiple tags (e.g., “kinematics” + “optics”).
            </div>
          </div>

          <div className="pretty-card inner">
            <h3 className="panel-title">About this test</h3>
            <ul className="about-list">
              <li><strong>No repeats:</strong> every paper samples unique questions.</li>
              <li><strong>Scoring:</strong> instant results with per-question review.</li>
              <li><strong>Images:</strong> add diagrams under <code>/public/pat</code>.</li>
              <li><strong>Math:</strong> author formulas with KaTeX.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
