function Testimonials({ testimonials }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Testimonials</p>
      <h2 className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl">What our clients say</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article key={testimonial.author} className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
            <p className="text-base leading-7 text-zinc-700">"{testimonial.quote}"</p>
            <p className="mt-5 text-sm font-semibold tracking-wide text-zinc-900">{testimonial.author}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
