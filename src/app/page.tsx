// src/app/page.tsx
'use client'
import Link from 'next/link'

export default function Home() {
  const eventUrl = typeof window !== 'undefined' ? window.location.href : ''

  const copyUrl = () => {
    navigator.clipboard.writeText(eventUrl)
    alert('URLをコピーしました！')
  }

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-8">
      <section className="card">
        <h1 className="card-title text-2xl mb-4">SW Invitational</h1>
        <ul className="space-y-2 text-lg">
          <li><strong>📅 開催日時：</strong>2025年10月12日（日）10:00〜</li>
          <li><strong>📍 開催場所：</strong>カレドニアン・ゴルフクラブ</li>
          <li><strong>💰 会費：</strong>20,000円（昼食・パーティー込）</li>
          <li><strong>🚗 アクセス：</strong>車推奨（無料駐車場あり）</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-4">
          <button className="btn btn-outline" onClick={copyUrl}>🔗 URLをコピー</button>
          <a 
            className="btn btn-outline"
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=SW+Invitational&dates=20251011T230000Z/20251012T030000Z&details=コンペ詳細はこちら&location=カレドニアン・ゴルフクラブ&sf=true"
            target="_blank" rel="noopener noreferrer"
          >
            📆 Googleカレンダーに追加
          </a>
          <Link href="/apply" className="btn btn-primary">エントリーする</Link>
        </div>
      </section>
    </main>
  )
}
