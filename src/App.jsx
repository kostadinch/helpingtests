import React, { useMemo, useState } from 'react'
import StartScreen from './components/StartScreen'
import TestRunner from './components/TestRunner'
import Results from './components/Results'
import DevPanel from './components/DevPanel'
import { buildRandomPaper, QUESTION_BANK } from './data/questions'

export default function App() {
  const [paper, setPaper] = useState(null)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Dev panel via ?dev=1 (optional)
  const search = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const canDev = import.meta.env.VITE_ENABLE_DEV !== '0'
  const devMode = canDev && search?.get('dev') === '1'
  if (devMode) {
    return <DevPanel onExit={() => { search.delete('dev'); window.location.search = search.toString() }} />
  }

  // collect all tags for StartScreen
  const allTags = useMemo(() => {
    const s = new Set()
    QUESTION_BANK.forEach(q => (q.tags || []).forEach(t => s.add(t)))
    return Array.from(s).sort((a,b)=>a.localeCompare(b))
  }, [])

  // IMPORTANT: accept an object { selectedTags } (can be undefined)
  const startNew = (opts = {}) => {
    const selectedTags = Array.isArray(opts.selectedTags) ? opts.selectedTags : []
    const generated = buildRandomPaper(40, {
      includeTags: selectedTags // [] means no filter (all topics)
    })

    // If the filter returns 0 (not enough tagged items), fall back to all
    if (!generated.questions?.length) {
      const fallback = buildRandomPaper(40) // no filter
      setPaper(fallback)
    } else {
      setPaper(generated)
    }

    setAnswers({})
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onSubmit = () => { setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const onRestart = () => { setPaper(null); setAnswers({}); setSubmitted(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  if (!paper) return <StartScreen onStart={startNew} tags={allTags} />

  if (submitted) {
    return <Results paper={paper} answers={answers} onRestart={onRestart} />
  }

  return (
    <TestRunner
      paper={paper}
      answers={answers}
      setAnswers={setAnswers}
      onSubmit={onSubmit}
      onQuit={onRestart}
    />
  )
}
