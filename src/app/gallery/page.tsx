// src/app/gallery/page.tsx
'use client'

const dummyImages = [
  '/sample1.jpg',
  '/sample2.jpg',
  '/sample3.jpg',
  '/sample4.jpg',
  '/sample5.jpg',
  '/sample6.jpg',
]

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="card-title">ギャラリー</h2>
        <p className="text-sm text-neutral-600 mt-1">みんなの雰囲気が伝わる写真をまとめました📷</p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {dummyImages.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
            <img src={src} alt={`gallery-${i}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
