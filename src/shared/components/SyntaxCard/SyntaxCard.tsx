import { useState } from 'react'
import styles from './SyntaxCard.module.css'

export interface Snippet {
  language: string
  code: string
}

export interface SyntaxCardProps {
  title: string
  snippets: Snippet[]
  mini?: boolean
}

export default function SyntaxCard({ title, snippets, mini = false }: SyntaxCardProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const active = snippets[activeIndex]

  return (
    <div className={`${styles['card']} ${mini ? styles['cardMini'] : ''}`}>
      <div className={styles['cardHeader']}>
        <h2 className={`${styles['title']} ${mini ? styles['titleMini'] : ''}`}>{title}</h2>
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

      <div className={`${styles['codeBlock']} ${mini ? styles['codeBlockMini'] : ''}`}>
        <code>{active.code}</code>
      </div>
    </div>
  )
}
