function Hero({ stats }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(217,119,6,0.16),transparent_38%),radial-gradient(circle_at_88%_10%,rgba(15,23,42,0.08),transparent_34%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-zinc-200 px-4 py-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
            Luxury. Functionality. Personality.
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Premium interiors with a fresh, timeless feel.
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-600 sm:text-lg">
            Avyanna Interiors creates refined spaces for modern homes and work environments with
            thoughtful design and detail-led execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700">
              Start Your Project
            </button>
            <button className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-zinc-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-zinc-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
