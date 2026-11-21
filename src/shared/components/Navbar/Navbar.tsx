import { Link } from 'react-router-dom'
import { useThemeStore } from '@/shared/stores/useThemeStore'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { mode, toggleTheme } = useThemeStore()

  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbarContainer']}>
        <Link to="/" className={styles['navbarLogo']}>
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

        <div className={styles['navToggleWrapper']}>
          <button
            onClick={toggleTheme}
            className={styles['themeToggle']}
            aria-label="Toggle theme"
            title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}
