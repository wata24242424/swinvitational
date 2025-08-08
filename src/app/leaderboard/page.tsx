"use client";

import { useEffect, useState } from "react";

type Player = {
  id: number;
  name: string;
  scores: number[];
  total: number;
};

const dummyData: Player[] = [
  {
    id: 1,
    name: "山田 太郎",
    scores: [4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3],
    total: 72,
  },
  // 他のプレイヤーも追加
];

export default function LeaderboardPage() {
  const [players, setPlayers] = useState<Player[]>(dummyData);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">リーダーボード</h1>
      <div className="overflow-auto rounded-xl border">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">名前</th>
              {[...Array(18)].map((_, i) => (
                <th key={i} className="p-2">{i + 1}H</th>
              ))}
              <th className="p-2">合計</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="border-t">
                <td className="p-2 font-semibold">{player.name}</td>
                {player.scores.map((score, i) => (
                  <td key={i} className="p-2 text-center">{score}</td>
                ))}
                <td className="p-2 font-bold text-center">{player.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
