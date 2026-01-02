import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daily Briefing - Dashboard Personnel',
  description: 'Application de briefing quotidien - Dashboard personnel avec emails, calendrier et données de santé',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
