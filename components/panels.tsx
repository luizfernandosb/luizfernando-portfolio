'use client'

import { Mail, GraduationCap, Award } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const TECHNOLOGIES = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'VueJS',
  'React Native',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'Prisma',
  'MongoDB',
  'PostgreSQL',
]

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function PanelHeading({ code, title }: { code: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs text-primary">{code}</p>
      <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-foreground text-balance md:text-3xl">
        {title}
      </h2>
    </div>
  )
}

export function OverviewPanel({ onNavigate }: { onNavigate: (id: string) => void }) {
  const { t } = useLanguage()
  return (
    <div>
      <PanelHeading code={t.about.code} title={t.hero.role} />
      <h1 className="mb-5 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-4xl">
        {t.hero.name}
      </h1>
      <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
        <p className="text-pretty">{t.hero.summary}</p>
        <p className="text-pretty">{t.about.p1}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => onNavigate('experience')}
          className="retro-btn border border-accent bg-primary px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-primary-foreground"
        >
          [ {t.hero.cta1.replace(' ', '_').toUpperCase()} ]
        </button>
        <button
          type="button"
          onClick={() => onNavigate('connect')}
          className="retro-btn border border-border bg-card px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-foreground hover:text-primary"
        >
          [ {t.hero.cta2.toUpperCase()} ]
        </button>
      </div>
    </div>
  )
}

export function StackPanel() {
  const { t } = useLanguage()
  return (
    <div>
      <PanelHeading code={t.tech.code} title={t.tech.title} />
      <p className="mb-6 font-mono text-xs text-muted-foreground">
        {t.tech.subtitle}
      </p>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {TECHNOLOGIES.map((tech, i) => (
          <li key={tech}>
            <span className="flex cursor-default items-center gap-2 border border-border bg-card px-3 py-2.5 font-mono text-xs text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <span className="text-accent-foreground/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExperiencePanel() {
  const { t } = useLanguage()
  return (
    <div>
      <PanelHeading code={t.experience.code} title={t.experience.title} />
      <ol className="relative ml-2 border-l border-border">
        {t.experience.items.map((item, index) => (
          <li key={item.company} className="relative pb-8 pl-8 last:pb-0">
            <span
              className={`absolute -left-[7px] top-1.5 h-3 w-3 border-2 ${
                index === 0 ? 'border-primary bg-primary' : 'border-accent bg-background'
              }`}
              aria-hidden="true"
            />
            <div className="border border-border bg-card p-5 transition-colors hover:border-primary/60">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {item.company}
                </h3>
                <span className="font-mono text-xs text-primary">{item.period}</span>
              </div>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-accent-foreground">
                {item.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function EducationPanel() {
  const { t } = useLanguage()
  return (
    <div>
      <PanelHeading code={t.education.code} title={t.education.title} />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-primary" />
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {t.education.degreeLabel}
            </span>
          </div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            {t.education.degree.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.education.degree.place}
          </p>
          <span className="mt-4 inline-block border border-accent px-2.5 py-1 font-mono text-xs text-primary">
            {t.education.degree.status}
          </span>
        </div>

        <div className="border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Award size={18} className="text-primary" />
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {t.education.coursesLabel}
            </span>
          </div>
          <ul className="space-y-4">
            {t.education.courses.map((course) => (
              <li key={course.name} className="border-l-2 border-accent pl-3">
                <p className="text-sm font-medium text-foreground">{course.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{course.place}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ConnectPanel() {
  const { t } = useLanguage()
  const socials = [
    {
      label: 'GitHub',
      handle: 'github.com/luizfernandosb',
      href: 'https://github.com/luizfernandosb',
      icon: GithubIcon,
    },
    {
      label: 'LinkedIn',
      handle: 'linkedin.com/in/luizfsb',
      href: 'https://linkedin.com/in/luizfsb',
      icon: LinkedinIcon,
    },
    {
      label: 'E-mail',
      handle: 'luiiz.fernandoo@icloud.com',
      href: 'mailto:luiiz.fernandoo@icloud.com',
      icon: Mail,
    },
  ]

  return (
    <div>
      <PanelHeading code={t.contact.code} title={t.contact.title} />
      <p className="mb-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        {t.contact.subtitle}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((social) => {
          const Icon = social.icon
          const isExternal = social.href.startsWith('http')
          return (
            <a
              key={social.label}
              href={social.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="border border-border p-2 text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {social.label}
                </span>
                <span className="block truncate text-sm text-foreground transition-colors group-hover:text-primary">
                  {social.handle}
                </span>
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
