'use client'

import { useState } from 'react'

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: '',
    score: '',
    car: '',
    pickup: '',
    comment: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        alert('応募完了！ありがとうございます！')
        setForm({ name: '', score: '', car: '', pickup: '', comment: '' })
      } else {
        alert('送信に失敗しました')
      }
    } catch (err) {
      console.error(err)
      alert('エラーが発生しました')
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">コンペ応募フォーム</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="名前"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="score"
          placeholder="平均スコア"
          value={form.score}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="car"
          placeholder="車出せる？（はい／いいえ）"
          value={form.car}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="pickup"
          placeholder="ピックアップしてほしい場所"
          value={form.pickup}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="comment"
          placeholder="その他"
          value={form.comment}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="btn btn-primary w-full">送信</button>
      </form>
    </div>
  )
}
