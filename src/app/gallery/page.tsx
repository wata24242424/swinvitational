"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const dummyImages = [
  "/sample1.jpg",
  "/sample2.jpg",
  "/sample3.jpg",
  "/sample4.jpg",
  "/sample5.jpg",
  "/sample6.jpg",
];

const getRandomSize = () => {
  const sizes = ["row-span-1", "row-span-2"];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

export default function GalleryPage() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    // 画像シャッフル（毎回ランダム表示）
    const shuffled = [...dummyImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">フォトギャラリー</h1>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {shuffledImages.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-md break-inside-avoid">
            <Image
              src={src}
              alt={`gallery-${i}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
