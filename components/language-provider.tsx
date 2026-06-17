'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { dictionary, type Lang, type Dict } from '@/lib/i18n'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const toggle = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: dictionary[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
