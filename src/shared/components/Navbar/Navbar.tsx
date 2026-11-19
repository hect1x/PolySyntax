import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbarContainer']}>
        <Link to="/" className={styles['navbarLogo']}>
          <span className={styles['logoIcon']}>✨</span>
          DailySyntax
        </Link>

        <ul className={styles['navMenu']}>
          <li className={styles['navItem']}>
            <Link to="/" className={styles['navLink']}>
              Home
            </Link>
          </li>
          <li className={styles['navItem']}>
            <Link to="/learn" className={styles['navLink']}>
              Learn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
