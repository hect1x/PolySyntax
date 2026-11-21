import { useState } from 'react'
import SyntaxCard, { SyntaxCardProps } from '@/shared/components/SyntaxCard/SyntaxCard'
import styles from './Learn.module.css'

const syntaxCards: SyntaxCardProps[] = [
  {
    title: 'Arrow Functions',
    snippets: [
      { language: 'JavaScript', code: 'const add = (a, b) => a + b' },
      { language: 'TypeScript', code: 'const add = (a: number, b: number): number => a + b' },
    ],
  },
  {
    title: 'Destructuring',
    snippets: [
      { language: 'JavaScript', code: 'const { name, age } = person' },
      { language: 'Python', code: 'name, age = person["name"], person["age"]' },
    ],
  },
  {
    title: 'Template Literals',
    snippets: [
      { language: 'JavaScript', code: 'const msg = `Hello, ${name}!`' },
      { language: 'Python', code: 'msg = f"Hello, {name}!"' },
    ],
  },
]

export default function Learn() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + syntaxCards.length) % syntaxCards.length)
  const next = () => setIndex((i) => (i + 1) % syntaxCards.length)

  return (
    <div className={styles['learn']}>
      <div className={styles['viewer']}>
        <button className={styles['arrow']} onClick={prev} aria-label="Previous">
          ←
        </button>

        <div className={styles['cardWrapper']}>
          <SyntaxCard key={syntaxCards[index].title} {...syntaxCards[index]} />
        </div>

        <button className={styles['arrow']} onClick={next} aria-label="Next">
          →
        </button>
      </div>

      <p className={styles['counter']}>{index + 1} / {syntaxCards.length}</p>
    </div>
  )
}
