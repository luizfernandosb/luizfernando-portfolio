'use client'

import { Clock } from '@/components/clock'
import { LanguageToggle } from '@/components/language-toggle'
import { useLanguage } from '@/components/language-provider'

export function StatusBar() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="truncate font-bold tracking-tight text-foreground">
            LUIZ FERNANDO
            <span className="mx-1.5 text-accent">//</span>
            <span className="text-primary">{t.hero.role.toUpperCase()}</span>
          </span>
          <span
            className="blink h-3.5 w-1.5 shrink-0 bg-primary"
            aria-hidden="true"
          />
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-2 border border-border px-2 py-1 font-mono text-xs sm:flex">
            <span className="text-muted-foreground">{t.ui.clockLabel}</span>
            <Clock />
          </div>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
