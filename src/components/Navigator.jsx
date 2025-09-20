export default function Navigator({ total, current, goTo, answers, getQuestion }) {
  return (
    <div className="navigator">
      <h3>Navigator</h3>
      <div className="grid">
        {Array.from({ length: total }, (_, i) => {
          const idx = i + 1
          const answered = answers[idx] != null
          // getQuestion is optional; if provided, we read the id to show a tooltip
          const q = typeof getQuestion === 'function' ? getQuestion(idx) : null
          const tip = q?.id ? q.id.replace(/^(\d{4})-(\d+)/, (_, y, n) => `${y} Q${Number(n)}`) : `Question ${idx}`
          return (
            <button
              key={idx}
              className={`navbtn ${idx === current ? 'active' : ''} ${answered ? 'answered' : ''}`}
              onClick={() => goTo(idx)}
              title={tip}
              aria-label={`Go to ${tip}`}
            >
              {idx}
            </button>
          )
        })}
      </div>
    </div>
  )
}
