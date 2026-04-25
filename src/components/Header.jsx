function Header({ navItems }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide text-zinc-900 sm:text-xl">
          {/* AVYANNA <span className="text-amber-600">INTERIORS</span> */}
          <img src="./src/assets/logo.png" alt="Avyanna Interiors" className="h-18 w-30" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-zinc-900">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="rounded-full border border-amber-500/70 px-4 py-2 text-xs font-medium tracking-wide text-amber-700 transition hover:bg-amber-500 hover:text-white sm:text-sm">
          Book Consultation
        </button>
      </div>
    </header>
  )
}

export default Header
