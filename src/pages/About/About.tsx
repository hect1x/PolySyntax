import { Link } from 'react-router-dom'
import Button from '@/shared/components/Button/Button'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles['about']}>
      <h1>How it works</h1>
      <p className={styles['lead']}>
        DailySyntax helps you pick up new programming syntax one snippet at a time.
      </p>

      <div className={styles['steps']}>
        <div className={styles['step']}>
          <span className={styles['stepNumber']}>1</span>
          <div>
            <h3>Browse the Learn page</h3>
            <p>Flip through syntax cards using the arrow buttons. Each card covers one concept.</p>
          </div>
        </div>
        <div className={styles['step']}>
          <span className={styles['stepNumber']}>2</span>
          <div>
            <h3>Switch languages</h3>
            <p>Each card can show the same concept across multiple languages. Use the tabs on the card to toggle between them.</p>
          </div>
        </div>
        <div className={styles['step']}>
          <span className={styles['stepNumber']}>3</span>
          <div>
            <h3>Save to your Library</h3>
            <p>Bookmark cards you want to revisit. Your library keeps them in one place for quick reference.</p>
          </div>
        </div>
      </div>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button type="primary">Start Learning</Button>
      </Link>
    </div>
  )
}
