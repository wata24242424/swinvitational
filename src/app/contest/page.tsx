'use client'

import { useState } from 'react'

export default function ContestPage() {
  const [form, setForm] = useState({
    name: '',
    score: '',
    car: 'いいえ',
    pickup: '',
    note: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('応募を受け付けました！\n' + JSON.stringify(form, null, 2))
    // TODO: 実際にはAPI経由で保存する
    setForm({ name: '', score: '', car: 'いいえ', pickup: '', note: '' })
  }

  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="card-title">コンペ応募フォーム</h2>
        <p className="text-sm text-neutral-600 mt-1">下記のフォームからエントリーできます</p>
      </section>

      <form onSubmit={handleSubmit} className="space-y-4 card">
        <div>
          <label className="block text-sm font-medium mb-1">名前 *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">平均スコア</label>
          <input
            name="score"
            type="number"
            value={form.score}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">クルマを出せる？</label>
          <select
            name="car"
            value={form.car}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2 text-sm"
          >
            <option value="はい">はい</option>
            <option value="いいえ">いいえ</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">ピックアップしてほしい場所</label>
          <input
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">その他</label>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2 text-sm"
            rows={3}
          />
        </div>

        <button type="submit" className="btn btn-primary">応募する</button>
      </form>
    </div>
  )
}
