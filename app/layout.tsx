import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SchemaLog — Auto-generate database migration changelogs',
  description: 'Monitor database schema changes and automatically generate human-readable changelogs for your stakeholders. Built for development teams at growing startups.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d707f63d-f7e0-402d-91c8-a57e5ee85fb9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
