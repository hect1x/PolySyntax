import SyntaxCard from '@/shared/components/SyntaxCard/SyntaxCard'
import { SYNTAX_EXAMPLES } from '@/shared/const/syntaxes'
import styles from './Deck.module.css'

export default function Deck() {
  return (
    <div className={styles['deck']}>
      <h1>Deck</h1>
      <div className={styles['grid']}>
        {SYNTAX_EXAMPLES.map((card) => (
          <SyntaxCard key={card.title} {...card} mini />
        ))}
      </div>
    </div>
  )
}
