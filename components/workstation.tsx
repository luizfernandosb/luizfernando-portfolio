'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { ProfileCard } from '@/components/profile-card'
import {
  OverviewPanel,
  StackPanel,
  ExperiencePanel,
  EducationPanel,
  ConnectPanel,
} from '@/components/panels'

type SectionId = 'overview' | 'stack' | 'experience' | 'education' | 'connect'

export function Workstation() {
  const { t } = useLanguage()
  const [active, setActive] = useState<SectionId>('overview')

  const sections: { id: SectionId; index: string; label: string }[] = [
    { id: 'overview', index: '01', label: t.commands.overview },
    { id: 'stack', index: '02', label: t.commands.stack },
    { id: 'experience', index: '03', label: t.commands.experience },
    { id: 'education', index: '04', label: t.commands.education },
    { id: 'connect', index: '05', label: t.commands.connect },
  ]

  const renderPanel = (id: SectionId) => {
    switch (id) {
      case 'overview':
        return <OverviewPanel onNavigate={(target) => setActive(target as SectionId)} />
      case 'stack':
        return <StackPanel />
      case 'experience':
        return <ExperiencePanel />
      case 'education':
        return <EducationPanel />
      case 'connect':
        return <ConnectPanel />
    }
  }

  const activeIndex = sections.find((s) => s.id === active)?.index ?? '01'

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* Sidebar de controle (desktop) */}
        <aside className="hidden flex-col gap-5 lg:flex">
          <nav className="border border-border bg-card">
            <p className="border-b border-border px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.ui.menu}
            </p>
            <ul>
              {sections.map((section) => {
                const isActive = section.id === active
                return (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => setActive(section.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex w-full items-center gap-3 border-l-2 px-4 py-3 text-left font-mono text-xs transition-colors ${
                        isActive
                          ? 'border-primary bg-secondary text-primary'
                          : 'border-transparent text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                      }`}
                    >
                      <span className="text-accent-foreground/60">{section.index}.</span>
                      <span className="flex-1 tracking-wide">{section.label}</span>
                      {isActive && (
                        <ChevronRight size={14} className="text-primary" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <ProfileCard />
        </aside>

        {/* Painel central dinâmico (desktop) */}
        <section className="hidden border border-border bg-background lg:block">
          <div className="flex items-center justify-between border-b border-border px-5 py-2.5 font-mono text-xs">
            <span className="text-muted-foreground">
              <span className="text-primary">~/</span>
              {active}
            </span>
            <span className="text-accent-foreground/60">
              {t.ui.sectionOf} {activeIndex}/05
            </span>
          </div>
          <div key={active} className="animate-panel p-6 md:p-8">
            {renderPanel(active)}
          </div>
        </section>

        {/* Accordion industrial (mobile) */}
        <div className="flex flex-col gap-3 lg:hidden">
          <ProfileCard />
          {sections.map((section) => {
            const isOpen = section.id === active
            return (
              <div key={section.id} className="border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? ('' as SectionId) : section.id)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left font-mono text-xs transition-colors ${
                    isOpen ? 'bg-secondary text-primary' : 'text-foreground'
                  }`}
                >
                  <span className="text-accent-foreground/60">{section.index}.</span>
                  <span className="flex-1 tracking-wide">{section.label}</span>
                  <ChevronRight
                    size={14}
                    className={`transition-transform ${
                      isOpen ? 'rotate-90 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="animate-panel border-t border-border p-5">
                    {renderPanel(section.id)}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
