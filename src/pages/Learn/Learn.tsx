import { useState } from 'react'
import SyntaxCard from '@/shared/components/SyntaxCard/SyntaxCard'
import { SYNTAX_EXAMPLES } from '@/shared/const/syntaxes'
import styles from './Learn.module.css'

export default function Learn() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + SYNTAX_EXAMPLES.length) % SYNTAX_EXAMPLES.length)
  const next = () => setIndex((i) => (i + 1) % SYNTAX_EXAMPLES.length)

  return (
    <div className={styles['learn']}>
      <div className={styles['viewer']}>
        <button className={styles['arrow']} onClick={prev} aria-label="Previous">
          ←
        </button>

        <div className={styles['cardWrapper']}>
          <SyntaxCard key={SYNTAX_EXAMPLES[index].title} {...SYNTAX_EXAMPLES[index]} />
        </div>

        <button className={styles['arrow']} onClick={next} aria-label="Next">
          →
        </button>
      </div>

      <p className={styles['counter']}>{index + 1} / {SYNTAX_EXAMPLES.length}</p>
    </div>
  )
}
