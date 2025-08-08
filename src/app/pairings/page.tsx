// src/app/pairings/page.tsx
export default function PairingsPage() {
  const dummyPairings = [
    {
      group: 1,
      time: '09:00',
      players: ['佐藤 太郎', '鈴木 花子', '田中 一郎'],
    },
    {
      group: 2,
      time: '09:10',
      players: ['山田 次郎', '高橋 三郎', '伊藤 美咲'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">組み合わせ</h1>

      <div className="grid gap-6">
        {dummyPairings.map((group) => (
          <div
            key={group.group}
            className="card transition hover:scale-[1.01] hover:shadow-lg duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="card-title">第{group.group}組</h2>
              <span className="text-sm text-gray-500">スタート: {group.time}</span>
            </div>
            <ul className="space-y-1">
              {group.players.map((player, index) => (
                <li key={index} className="text-neutral-700">
                  ・{player}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
