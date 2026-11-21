import { useState } from 'react'
import styles from './SyntaxCard.module.css'

export interface Snippet {
  language: string
  code: string
}

export interface SyntaxCardProps {
  title: string
  snippets: Snippet[]
}

export default function SyntaxCard({ title, snippets }: SyntaxCardProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const active = snippets[activeIndex]

  return (
    <div className={styles['card']}>
      <div className={styles['cardHeader']}>
        <h2 className={styles['title']}>{title}</h2>
        <div className={styles['languageTabs']}>
          {snippets.map((snippet, i) => (
            <button
              key={snippet.language}
              className={`${styles['tab']} ${i === activeIndex ? styles['tabActive'] : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              {snippet.language}
            </button>
          ))}
        </div>
      </div>

      <div className={styles['codeBlock']}>
        <code>{active.code}</code>
      </div>
    </div>
  )
}
