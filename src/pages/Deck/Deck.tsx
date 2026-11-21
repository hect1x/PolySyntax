import styles from './Deck.module.css'

export default function Deck() {
  return (
    <div className={styles['library']}>
      <h1>Deck</h1>
      <p className={styles['empty']}>No saved cards yet. Head to <a href="/">Learn</a> and bookmark cards to see them here.</p>
    </div>
  )
}
