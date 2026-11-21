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
    </div>
  )
}
