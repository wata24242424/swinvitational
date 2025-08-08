"use client";

import { useEffect, useState } from "react";

type PlayerResult = {
  id: number;
  name: string;
  scores: number[];
  handicap?: number;
};

export default function ResultPage() {
  const [players, setPlayers] = useState<PlayerResult[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const res = await fetch("/api/scores");
      const data = await res.json();
      setPlayers(data);
    };
    fetchScores();
  }, []);

  const calculateTotal = (scores: number[]) => scores.reduce((sum, s) => sum + s, 0);

  const sorted = [...players].map(player => {
    const total = calculateTotal(player.scores);
    const net = player.handicap ? total - player.handicap : total;
    return { ...player, total, net };
  }).sort((a, b) => a.net - b.net); // ネットスコア順で並び替え

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">コンペ結果</h1>
      <div className="overflow-auto rounded-xl border">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">順位</th>
              <th className="p-2 text-left">名前</th>
              <th className="p-2 text-right">グロス</th>
              <th className="p-2 text-right">ハンディ</th>
              <th className="p-2 text-right">ネット</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p, i) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{p.name}</td>
                <td className="p-2 text-right">{p.total}</td>
                <td className="p-2 text-right">{p.handicap ?? "-"}</td>
                <td className="p-2 text-right font-semibold">{p.net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
