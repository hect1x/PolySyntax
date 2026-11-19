import { Outlet } from 'react-router-dom'
import Navbar from '@/shared/components/Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles['layout']}>
      <Navbar />
      <main className={styles['main']}>
        <div className={styles['container']}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
