function Portfolio({ items }) {
  return (
    <section id="portfolio" className="bg-zinc-100/70">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Featured Work</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl">
          Signature spaces crafted with detail
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <img src={item.image} alt={item.name} className="h-60 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-900">{item.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{item.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
