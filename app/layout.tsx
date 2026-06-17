import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Luiz Fernando Sant'Ana Bezerra — Desenvolvedor de Software",
  description:
    'Portfólio de Luiz Fernando Sant\'Ana Bezerra, desenvolvedor de software focado em aplicações web e mobile escaláveis, integração de APIs e boas práticas de UI/UX.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
