import { useEffect, useState } from 'react'

function WelcomeOverlay({ show }) {
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    let frameId

    if (show) {
      // Delay to next frame so transition runs on first load.
      frameId = requestAnimationFrame(() => setAnimateIn(true))
    } else {
      setAnimateIn(false)
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [show])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="relative overflow-hidden px-6 py-4">
        <h1
          className={`px-2 text-center text-3xl font-semibold tracking-wide text-white transition-all duration-1000 sm:text-5xl ${
            animateIn
              ? 'translate-x-0 scale-100 opacity-100 blur-0'
              : '-translate-x-16 scale-95 opacity-0 blur-sm'
          }`}
        >
          Welcome to <span className="text-amber-600">Avyanna Interiors</span>
        </h1>
        <div
          className={`mx-auto mt-4 h-[2px] bg-amber-600 transition-all duration-1000 ${
            animateIn ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  )
}

export default WelcomeOverlay
