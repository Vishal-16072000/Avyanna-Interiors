function Services({ services }) {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Services</p>
      <h2 className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl">
        End-to-end interior solutions
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-zinc-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
