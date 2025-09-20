import React, { useMemo, useState } from 'react'
import QuestionCard from './QuestionCard'
import Navigator from './Navigator'
import Timer from './Timer'

export default function TestRunner({ paper, answers, setAnswers, onSubmit, onQuit }) {
    const [current, setCurrent] = useState(1)
    const [showNav, setShowNav] = useState(false) // NEW: toggle navigator
    const total = paper.questions.length

    const q = useMemo(() => paper.questions[current - 1], [paper, current])

    const goNext = () => setCurrent(c => Math.min(total, c + 1))
    const goPrev = () => setCurrent(c => Math.max(1, c - 1))

    const onPick = (label) => setAnswers(prev => ({ ...prev, [q.id]: label, [current]: label }))

    return (
        <div className="layout">
            <div className="left">
                <div className="toolbar">
                    <button onClick={onQuit}>Quit</button>
                    <div className="toolbar-right">
                        <button onClick={() => setShowNav(s => !s)} aria-expanded={showNav}>
                            {showNav ? 'Hide Navigator' : 'Show Navigator'}
                        </button>
                        <Timer seconds={2 * 60 * 60} onExpire={onSubmit} />
                    </div>
                </div>

                <QuestionCard q={{ ...q, number: current }} value={answers[q.id]} onChange={onPick} />

                <div className="paging">
                    <button onClick={goPrev} disabled={current === 1}>Previous</button>
                    <button onClick={goNext} disabled={current === total}>Next</button>
                    <button className="primary" onClick={onSubmit}>Submit</button>
                </div>
            </div>

            {/* Navigator appears only when toggled */}
            {showNav && (
                <div className="right">
                    <Navigator
                        total={total}
                        current={current}
                        goTo={(n) => setCurrent(n)}
                        answers={answers}
                        getQuestion={(n) => paper.questions[n - 1]}
                    />

                </div>
            )}
        </div>
    )
}
