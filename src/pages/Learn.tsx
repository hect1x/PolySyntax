import { useState } from 'react'
import Button from '@/shared/components/Button/Button'
import styles from './Learn.module.css'

interface Syntax {
  id: number
  title: string
  code: string
  explanation: string
  language: string
}

const syntaxExamples: Syntax[] = [
  {
    id: 1,
    title: 'Arrow Functions',
    code: 'const add = (a, b) => a + b',
    explanation:
      'Concise function syntax in JavaScript. Automatically returns the expression if no braces.',
    language: 'JavaScript',
  },
  {
    id: 2,
    title: 'Destructuring',
    code: 'const { name, age } = person',
    explanation:
      'Extract properties from objects. Makes accessing nested data cleaner and more readable.',
    language: 'JavaScript',
  },
  {
    id: 3,
    title: 'Template Literals',
    code: 'const msg = `Hello, ${name}!`',
    explanation:
      'Use backticks for string interpolation. Much cleaner than concatenation with +.',
    language: 'JavaScript',
  },
]

export default function Learn() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)

  const current = syntaxExamples[currentIndex]

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % syntaxExamples.length)
    setIsRevealed(false)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + syntaxExamples.length) % syntaxExamples.length
    )
    setIsRevealed(false)
  }

  return (
    <div className={styles['learn']}>
      <div className={styles['syntaxCard']}>
        <div className={styles['cardHeader']}>
          <span className={styles['languageTag']}>{current.language}</span>
          <span className={styles['counter']}>
            {currentIndex + 1} / {syntaxExamples.length}
          </span>
        </div>

        <h2 className={styles['syntaxTitle']}>{current.title}</h2>

        <div className={styles['codeBlock']}>
          <code>{current.code}</code>
        </div>

        <div
          className={`${styles['explanation']} ${isRevealed ? styles['revealed'] : ''}`}
          onClick={() => setIsRevealed(!isRevealed)}
        >
          <p>
            {isRevealed ? current.explanation : 'Hover or click to reveal explanation'}
          </p>
        </div>

        <div className={styles['controls']}>
          <Button onClick={handlePrev} type="secondary">
            ← Previous
          </Button>
          <Button onClick={handleNext} type="primary">
            Next →
          </Button>
        </div>
      </div>
    </div>
  )
}
