'use client'

import { useLanguage } from '@/components/language-provider'

export function ProfileCard() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center border border-border bg-card p-5 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-accent">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/luiz-profile.jpeg"
          alt="Luiz Fernando"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-4 font-mono text-xs text-foreground">
        {t.ui.status}
        <span className="blink ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-primary align-middle" />
      </p>
      <p className="mt-1 font-mono text-[11px] text-muted-foreground">
        {t.hero.location}
      </p>
    </div>
  )
}
