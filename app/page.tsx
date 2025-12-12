'use client'

import { useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import {
  Navigation,
  ProgressBar,
  ContentOverlay,
  AboutSection,
  ContactSection,
  BlackHoleScene,
  NebulaScene,
  GalaxyScene,
  SolarScene,
  EarthScene
} from '@/components'

export default function CinematicSpacePortfolio() {
  const [currentScene, setCurrentScene] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Update scene only when crossing boundaries (optimized)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) setCurrentScene(0)
    else if (latest < 0.4) setCurrentScene(1)
    else if (latest < 0.6) setCurrentScene(2)
    else if (latest < 0.8) setCurrentScene(3)
    else setCurrentScene(4)
  })

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Cinematic Scroll Container */}
      <div style={{ height: '1200vh' }} className="relative">

        {/* Fixed Viewport with 3D Perspective */}
        <div
          className="fixed inset-0 bg-black overflow-hidden"
          style={{ perspective: '2000px', perspectiveOrigin: 'center center' }}
          role="region"
          aria-label="Cosmic journey through space"
        >
          {/* Space Scenes */}
          <BlackHoleScene scrollYProgress={scrollYProgress} />
          <NebulaScene scrollYProgress={scrollYProgress} />
          <GalaxyScene scrollYProgress={scrollYProgress} />
          <SolarScene scrollYProgress={scrollYProgress} />
          <EarthScene scrollYProgress={scrollYProgress} />

          {/* Dynamic Content Overlay */}
          <ContentOverlay currentScene={currentScene} />

          {/* Progress Bar */}
          <ProgressBar scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
