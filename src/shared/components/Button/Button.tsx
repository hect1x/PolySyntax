import { ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonType = 'submit' | 'delete' | 'edit' | 'view' | 'primary' | 'secondary'

interface ButtonProps {
  type?: ButtonType
  onClick?: () => void
  disabled?: boolean
  children: ReactNode
  className?: string
}

export default function Button({
  type = 'primary',
  onClick,
  disabled = false,
  children,
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`${styles['btn']} ${styles[`btn${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
