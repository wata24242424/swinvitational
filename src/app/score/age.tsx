'use client'

import { useState } from 'react'

export default function ScorePage() {
  const [form, setForm] = useState({ name: '', hole: 1, strokes: 0 })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: name === 'hole' || name === 'strokes' ? Number(value) : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('送信中...')

    const res = await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('スコアを保存しました！')
      setForm({ name: '', hole: 1, strokes: 0 })
    } else {
      setStatus('エラーが発生しました')
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">スコア入力</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="名前"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="hole"
          type="number"
          placeholder="ホール番号"
          value={form.hole}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="strokes"
          type="number"
          placeholder="打数"
          value={form.strokes}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <button type="submit" className="btn btn-primary w-full">保存</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  )
}
