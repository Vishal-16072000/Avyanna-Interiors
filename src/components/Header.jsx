import { useState } from 'react'
import logo from '../assets/logo.png'

function Header({ navItems }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide text-zinc-900 sm:text-xl">
          {/* AVYANNA <span className="text-amber-600">INTERIORS</span> */}
          <img src={logo} alt="Avyanna Interiors" className="h-12 w-auto sm:h-16" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-zinc-900">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="hidden rounded-full border border-amber-500/70 px-4 py-2 text-xs font-medium tracking-wide text-amber-700 transition hover:bg-amber-500 hover:text-white sm:text-sm md:inline-flex">
          Book Consultation
        </button>
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-700 transition hover:bg-zinc-100 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-zinc-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-1 transition hover:bg-zinc-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="mt-3 w-full rounded-full border border-amber-500/70 px-4 py-2 text-xs font-medium tracking-wide text-amber-700 transition hover:bg-amber-500 hover:text-white">
            Book Consultation
          </button>
        </div>
      ) : null}
    </header>
  )
}

export default Header
