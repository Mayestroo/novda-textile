'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'en' | 'ru' | 'uz'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'uz',
  setLanguage: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('uz')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved === 'en' || saved === 'ru' || saved === 'uz') {
      setLanguageState(saved)
    } else {
      setLanguageState('uz')
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
