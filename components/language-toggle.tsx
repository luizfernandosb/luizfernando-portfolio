'use client'

import { useLanguage } from '@/components/language-provider'

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="flex items-center gap-2 border border-border px-2 py-1 font-mono text-xs"
      role="group"
      aria-label="Language selector"
    >
      <span className="hidden text-accent-foreground/70 sm:inline">
        {t.ui.sysLang}:
      </span>
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
        className={`px-1.5 py-0.5 transition-colors ${
          lang === 'pt'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-primary'
        }`}
      >
        PT-BR
      </button>
      <span className="text-accent" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-1.5 py-0.5 transition-colors ${
          lang === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-primary'
        }`}
      >
        EN
      </button>
    </div>
  )
}
