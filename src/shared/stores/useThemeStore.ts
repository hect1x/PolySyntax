import { create } from 'zustand'
import { lightTheme, darkTheme, type Theme } from '@/theme/colors'

type ThemeMode = 'light' | 'dark'

interface ThemeState {
  mode: ThemeMode
  theme: Theme
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>((set) => {
  // Initialize theme from localStorage or system preference
  const getInitialMode = (): ThemeMode => {
    const saved = localStorage.getItem('theme-mode')
    if (saved === 'light' || saved === 'dark') return saved

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  }

  const initialMode = getInitialMode()

  return {
    mode: initialMode,
    theme: initialMode === 'light' ? lightTheme : darkTheme,

    setTheme: (mode: ThemeMode) => {
      set(() => {
        const theme = mode === 'light' ? lightTheme : darkTheme

        // Update CSS variables
        const root = document.documentElement
        Object.entries(theme).forEach(([key, value]) => {
          root.style.setProperty(`--color-${key}`, value)
        })

        // Update document attribute
        document.documentElement.setAttribute('data-theme', mode)

        // Persist to localStorage
        localStorage.setItem('theme-mode', mode)

        return { mode, theme }
      })
    },

    toggleTheme: () => {
      set(({ mode: currentMode }) => {
        const newMode = currentMode === 'light' ? 'dark' : 'light'
        const theme = newMode === 'light' ? lightTheme : darkTheme

        // Update CSS variables
        const root = document.documentElement
        Object.entries(theme).forEach(([key, value]) => {
          root.style.setProperty(`--color-${key}`, value)
        })

        // Update document attribute
        document.documentElement.setAttribute('data-theme', newMode)

        // Persist to localStorage
        localStorage.setItem('theme-mode', newMode)

        return { mode: newMode, theme }
      })
    },
  }
})

