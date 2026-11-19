import { Link } from 'react-router-dom'
import Button from '@/shared/components/Button/Button'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles['home']}>
      <div className={styles['hero']}>
        <h1>Learn a New Syntax Every Day</h1>
        <p>
          Master programming languages and frameworks one snippet at a time.
          Hover to reveal explanations and deepen your understanding.
        </p>
        <Link to="/learn" style={{ textDecoration: 'none' }}>
          <Button type="primary">Start Learning</Button>
        </Link>
      </div>

      <div className={styles['features']}>
        <div className={styles['feature']}>
          <h3>📅 Daily Rotation</h3>
          <p>A new syntax snippet every day to keep your learning fresh</p>
        </div>
        <div className={styles['feature']}>
          <h3>🎯 Focused Learning</h3>
          <p>Short, digestible code examples with detailed explanations</p>
        </div>
        <div className={styles['feature']}>
          <h3>💾 Track Progress</h3>
          <p>Save your learning journey and revisit previously learned syntaxes</p>
        </div>
      </div>
    </div>
  )
}
