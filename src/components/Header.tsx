'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'TOP', href: '/' },
  { label: '組み合わせ', href: '/pairings' },
  { label: 'リーダーボード', href: '/leaderboard' },
  { label: '結果', href: '/results' },
  { label: 'フォトギャラリー', href: '/gallery' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-xl font-bold text-[color:var(--accent)]">
          SW Invitational
        </div>
        <ul className="flex space-x-4 text-sm font-medium">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:underline ${
                  pathname === href ? 'text-[color:var(--accent)]' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
