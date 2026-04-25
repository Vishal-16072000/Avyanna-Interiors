function Process({ processSteps }) {
  return (
    <section id="process" className="bg-zinc-100/70">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Our Process</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl">
          A transparent journey from idea to handover
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold tracking-widest text-amber-600">{item.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
