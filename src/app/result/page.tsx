'use client'

import { useState } from 'react'

const dummyResults = [
  { name: 'たかし', strokes: 85, handicap: 10 },
  { name: 'ゆうこ', strokes: 92, handicap: 20 },
  { name: 'しょうた', strokes: 88, handicap: 15 },
]

export default function ResultsPage() {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState('')

  const netScore = (strokes: number, handicap: number) => strokes - handicap

  const winner = dummyResults
    .map(player => ({
      ...player,
      net: netScore(player.strokes, player.handicap),
    }))
    .sort((a, b) => a.net - b.net)[0]

  const handleAddComment = () => {
    if (newComment.trim() === '') return
    setComments(prev => [...prev, newComment])
    setNewComment('')
  }

  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="card-title">コンペ結果</h2>
        <p className="text-sm text-neutral-600 mt-1">みんなのスコアと優勝者、ハンディキャップ結果です</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dummyResults.map((player, i) => (
          <div key={i} className="card">
            <h3 className="text-lg font-semibold">{player.name}</h3>
            <p className="text-sm">打数: {player.strokes}</p>
            <p className="text-sm">ハンディキャップ: {player.handicap}</p>
            <p className="text-sm font-bold">ネットスコア: {netScore(player.strokes, player.handicap)}</p>
            {player.name === winner.name && (
              <span className="inline-block mt-2 text-green-600 font-bold">🏆 優勝！</span>
            )}
          </div>
        ))}
      </div>

      <section className="card space-y-4">
        <h3 className="card-title">みんなのコメント</h3>
        <ul className="space-y-2">
          {comments.length === 0 && <p className="text-sm text-neutral-400">まだコメントはありません。</p>}
          {comments.map((c, i) => (
            <li key={i} className="text-sm border-b pb-1">{c}</li>
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            className="w-full rounded-lg border px-3 py-2 text-sm"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder="感想を投稿..."
          />
          <button onClick={handleAddComment} className="btn btn-primary">投稿</button>
        </div>
      </section>
    </div>
  )
}
