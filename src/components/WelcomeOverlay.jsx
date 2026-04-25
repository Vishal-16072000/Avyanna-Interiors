function WelcomeOverlay({ show }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <h1
        className={`px-4 text-center text-3xl font-semibold tracking-wide text-white transition-all duration-700 sm:text-5xl ${
          show ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
      >
        Welcome to <span className="text-amber-600">Avyanna Interiors</span>
      </h1>
    </div>
  )
}

export default WelcomeOverlay
