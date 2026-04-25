function MediaShowcase({ media }) {
  const mediaSource = typeof media.video === 'string' ? media.video.toLowerCase() : ''
  const videoIdMatch = media.video?.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  )
  const youtubeVideoId = videoIdMatch?.[1]
  const youtubeEmbedUrl = youtubeVideoId
    ? `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&rel=0&modestbranding=1`
    : null
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
          ) : youtubeEmbedUrl ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={youtubeEmbedUrl}
                title="Interior motion showcase"
                loading="eager"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
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
