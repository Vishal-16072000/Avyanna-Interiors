function MediaShowcase({ media }) {
  const mediaSource = typeof media.video === 'string' ? media.video.toLowerCase() : ''
  const isImage = ['.gif', '.png', '.jpg', '.jpeg', '.webp'].some((ext) =>
    mediaSource.includes(ext),
  )

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="">
        <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:col-span-2">
          {isImage ? (
            <img
              className="h-full min-h-72 w-full object-cover"
              src={media.video}
              alt="Interior motion showcase"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          ) : (
            <video
              className="h-full min-h-72 w-full object-cover"
              src={media.video}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </article>
        {/* <div className="grid gap-6">
          {media.images.map((image, index) => (
            <article key={image} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <img
                src={image}
                alt={`Interior showcase ${index + 1}`}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
            </article>
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default MediaShowcase
