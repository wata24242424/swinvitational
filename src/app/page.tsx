import Image from "next/image";

// src/app/page.tsx
'use client'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="card-title">ようこそ！SW Invitationalへ</h2>
        <p className="text-sm text-neutral-600 mt-1">
          ゴルフコンペをもっと楽しく。参加者の管理、ギャラリー、結果分析をまとめてサポートします。
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="card-title">次回コンペ</h3>
          <p className="text-sm text-neutral-600">2025年10月20日（仮）</p>
        </div>
        <div className="card">
          <h3 className="card-title">応募者数</h3>
          <p className="text-2xl font-bold text-[color:var(--accent)]">18人</p>
        </div>
        <div className="card">
          <h3 className="card-title">ギャラリー写真</h3>
          <p className="text-2xl font-bold text-[color:var(--accent)]">64枚</p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-4">
        <a href="/contest" className="btn btn-primary">コンペに応募する</a>
        <a href="/gallery" className="btn btn-outline">ギャラリーを見る</a>
      </section>
    </div>
  )
}
