function MediaShowcase({ media }) {
  const isYoutubeShorts = (source) => source?.toLowerCase().includes('youtube.com/shorts/')

  const getYoutubeEmbedUrl = (source) => {
    const videoIdMatch = source?.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    )
    const youtubeVideoId = videoIdMatch?.[1]

    return youtubeVideoId
      ? `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&rel=0&modestbranding=1`
      : null
  }

  const renderMedia = (source, options = {}) => {
    const { mobile = false } = options
    const mediaSource = typeof source === 'string' ? source.toLowerCase() : ''
    const youtubeEmbedUrl = getYoutubeEmbedUrl(source)
    const isImage = ['.gif', '.png', '.jpg', '.jpeg', '.webp'].some((ext) =>
      mediaSource.includes(ext),
    )

    if (isImage) {
      return (
        <img
          className="h-full min-h-72 w-full object-cover"
          src={source}
          alt="Interior motion showcase"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      )
    }

    if (youtubeEmbedUrl) {
      const wrapperClass =
        mobile && isYoutubeShorts(source)
          ? 'aspect-[9/16] w-full max-w-sm mx-auto bg-black'
          : 'aspect-video w-full bg-black'

      return (
        <div className={wrapperClass}>
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
      )
    }

    return (
      <video
        className="h-full min-h-72 w-full object-cover"
        src={source}
        autoPlay
        muted
        loop
        playsInline
      />
    )
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="">
        <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:col-span-2">
          <div className="md:hidden">{renderMedia(media.mobileVideo || media.video, { mobile: true })}</div>
          <div className="hidden md:block">{renderMedia(media.video)}</div>
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
