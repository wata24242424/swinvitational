// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'SW Invitational',
  description: 'ゴルフ仲間のためのWebアプリ',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen text-base font-sans">
        <header className="w-full px-6 py-4 border-b border-neutral-200">
          <div className="text-xl font-bold text-[color:var(--accent)]">SW Invitational</div>
        </header>
        <main className="max-w-4xl mx-auto p-4">
        <main className="pt-20">{children}</main> {/* ヘッダー分の余白 */}

          {children}
        </main>
      </body>
    </html>
  )
}
