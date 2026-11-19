import { create } from 'zustand'
import { lightTheme, darkTheme, type Theme } from '@/theme/colors'

type ThemeMode = 'light' | 'dark'

interface ThemeState {
  mode: ThemeMode
  theme: Theme
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

const applyTheme = (mode: ThemeMode, theme: Theme) => {
  const root = document.documentElement
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value)
  })
  document.documentElement.setAttribute('data-theme', mode)
  localStorage.setItem('theme-mode', mode)
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
  const initialTheme = initialMode === 'light' ? lightTheme : darkTheme

  // Apply initial theme
  applyTheme(initialMode, initialTheme)

  return {
    mode: initialMode,
    theme: initialTheme,

    setTheme: (mode: ThemeMode) => {
      set(() => {
        const theme = mode === 'light' ? lightTheme : darkTheme
        applyTheme(mode, theme)
        return { mode, theme }
      })
    },

    toggleTheme: () => {
      set(({ mode: currentMode }) => {
        const newMode = currentMode === 'light' ? 'dark' : 'light'
        const theme = newMode === 'light' ? lightTheme : darkTheme
        applyTheme(newMode, theme)
        return { mode: newMode, theme }
      })
    },
  }
})

