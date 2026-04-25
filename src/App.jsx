import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MediaShowcase from './components/MediaShowcase'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WelcomeOverlay from './components/WelcomeOverlay'
import {
  navItems,
  portfolioItems,
  processSteps,
  services,
  showcaseMedia,
  stats,
  testimonials,
} from './data/content.js'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <WelcomeOverlay show={showWelcome} />

      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <Header navItems={navItems} />
        <main>
          <Hero stats={stats} startAnimation={!showWelcome} />
          <MediaShowcase media={showcaseMedia} />
          <Services services={services} />
          <Portfolio items={portfolioItems} />
          <Process processSteps={processSteps} />
          <Testimonials testimonials={testimonials} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
