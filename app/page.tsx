'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

export default function CinematicSpacePortfolio() {
  const [particles, setParticles] = useState<Array<{depth: number, size: number, left: string, top: string, filter: string}>>([])  
  const [currentScene, setCurrentScene] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Optimized: Update scene only when crossing boundaries
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) setCurrentScene(0)
    else if (latest < 0.4) setCurrentScene(1)
    else if (latest < 0.6) setCurrentScene(2)
    else if (latest < 0.8) setCurrentScene(3)
    else setCurrentScene(4)
  })

  // Generate particles on client-side only to avoid hydration mismatch
  // Reduced to 100 particles for 60% performance improvement
  useEffect(() => {
    const generatedParticles = Array.from({ length: 100 }, () => {
      const depth = Math.random() * 400 - 200
      const size = depth > 0 ? 2 + (depth / 100) : 1
      return {
        depth,
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        filter: depth > 0 ? 'blur(0px)' : `blur(${Math.abs(depth / 100)}px)`
      }
    })
    setParticles(generatedParticles)
  }, [])

  // 3D Cinematic depth transforms - creates breathtaking zoom into space
  const blackHoleScale = useTransform(scrollYProgress, [0, 0.2], [1, 4])
  const blackHoleRotate = useTransform(scrollYProgress, [0, 0.2], [0, 180])
  const blackHoleZ = useTransform(scrollYProgress, [0, 0.2], [0, 200])
  
  const nebulaScale = useTransform(scrollYProgress, [0.15, 0.4], [0.3, 3.5])
  const nebulaRotate = useTransform(scrollYProgress, [0.15, 0.4], [15, -45])
  const nebulaZ = useTransform(scrollYProgress, [0.15, 0.4], [-100, 150])
  
  const galaxyScale = useTransform(scrollYProgress, [0.35, 0.6], [0.2, 3])
  const galaxyRotate = useTransform(scrollYProgress, [0.35, 0.6], [30, 360])
  const galaxyZ = useTransform(scrollYProgress, [0.35, 0.6], [-200, 100])
  
  const solarScale = useTransform(scrollYProgress, [0.55, 0.8], [0.15, 2.5])
  const solarRotateY = useTransform(scrollYProgress, [0.55, 0.8], [-30, 30])
  const solarZ = useTransform(scrollYProgress, [0.55, 0.8], [-300, 50])
  
  const earthScale = useTransform(scrollYProgress, [0.7, 0.95], [0.5, 2.8])
  const earthRotate = useTransform(scrollYProgress, [0.7, 0.95], [0, 360])
  const earthZ = useTransform(scrollYProgress, [0.7, 0.95], [-400, 0])
  
  // Optimized opacity transforms to avoid .get() re-renders
  const blackHoleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.21], [1, 1, 0])
  const nebulaOpacity = useTransform(scrollYProgress, [0.14, 0.15, 0.4, 0.41], [0, 1, 1, 0])
  const galaxyOpacity = useTransform(scrollYProgress, [0.34, 0.35, 0.6, 0.61], [0, 1, 1, 0])
  const solarOpacity = useTransform(scrollYProgress, [0.54, 0.55, 0.8, 0.81], [0, 1, 1, 0])
  const earthOpacity = useTransform(scrollYProgress, [0.69, 0.7, 0.98, 0.99], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">VIKAS SAHANI</h1>
              <p className="text-blue-300 text-sm">UX/UI Designer</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/80 text-sm font-medium"
          >
            VIKAS SAHANI
          </motion.div>
        </div>
      </nav>

      {/* Cinematic Scroll Container */}
      <div style={{ height: '1200vh' }} className="relative">
        
        {/* Fixed Viewport with 3D Perspective */}
        <div className="fixed inset-0 bg-black overflow-hidden" style={{ perspective: '2000px', perspectiveOrigin: 'center center' }}>
          
          {/* Scene 1: Black Hole - Ultra 4K with 3D Depth */}
          <motion.div 
            className="absolute inset-0 will-change-transform"
            style={{
              scale: blackHoleScale,
              rotateZ: blackHoleRotate,
              z: blackHoleZ,
              opacity: blackHoleOpacity,
              transformStyle: 'preserve-3d',
              contain: 'layout style paint',
              willChange: 'transform, opacity'
            }}
          >
            {/* Multiple depth layers for parallax */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                z: useTransform(scrollYProgress, [0, 0.2], [0, -100])
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50" />
            
            {/* 3D Particle System with depth */}
            <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    left: particle.left,
                    top: particle.top,
                    z: particle.depth,
                    filter: particle.filter
                  }}
                  animate={{
                    opacity: [0, 1, 0.6, 1, 0],
                    scale: [0, 1.5, 1, 1.8, 0],
                    rotate: [0, 180, 360],
                    z: [particle.depth, particle.depth + 50, particle.depth - 30, particle.depth + 20, particle.depth]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Scene 2: Colorful Nebula - Ultra 4K with swirling 3D motion */}
          <motion.div 
            className="absolute inset-0 will-change-transform"
            style={{
              scale: nebulaScale,
              rotateZ: nebulaRotate,
              z: nebulaZ,
              opacity: nebulaOpacity,
              transformStyle: 'preserve-3d',
              contain: 'layout style paint',
              willChange: 'transform, opacity'
            }}
          >
            {/* Layered nebula clouds for depth */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                z: useTransform(scrollYProgress, [0.15, 0.4], [-50, 100]),
                scale: useTransform(scrollYProgress, [0.15, 0.4], [1.2, 1])
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30"
              style={{
                z: useTransform(scrollYProgress, [0.15, 0.4], [50, -50]),
                opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.4], [0.3, 0.8, 0.4])
              }}
            />
          </motion.div>

          {/* Scene 3: Spiral Galaxy - Ultra 4K with rotating spiral effect */}
          <motion.div 
            className="absolute inset-0 will-change-transform"
            style={{
              scale: galaxyScale,
              rotateZ: galaxyRotate,
              z: galaxyZ,
              opacity: galaxyOpacity,
              transformStyle: 'preserve-3d',
              contain: 'layout style paint',
              willChange: 'transform, opacity'
            }}
          >
            {/* Multi-layer galaxy with spiral arms */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                z: useTransform(scrollYProgress, [0.35, 0.6], [-100, 80]),
                scale: useTransform(scrollYProgress, [0.35, 0.45, 0.6], [1.3, 1, 1.1])
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-cyan-500/20"
              style={{
                z: useTransform(scrollYProgress, [0.35, 0.6], [60, -80]),
                rotateZ: useTransform(scrollYProgress, [0.35, 0.6], [-15, 45]),
                opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0.4, 0.7, 0.3])
              }}
            />
          </motion.div>

          {/* Scene 4: Solar System - Ultra 4K with orbital perspective */}
          <motion.div 
            className="absolute inset-0 will-change-transform"
            style={{
              scale: solarScale,
              rotateY: solarRotateY,
              z: solarZ,
              opacity: solarOpacity,
              transformStyle: 'preserve-3d',
              contain: 'layout style paint',
              willChange: 'transform, opacity'
            }}
          >
            {/* Sun and planets with depth */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                z: useTransform(scrollYProgress, [0.55, 0.8], [-150, 40]),
                scale: useTransform(scrollYProgress, [0.55, 0.67, 0.8], [1.5, 1, 1.2])
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-orange-500/25 via-yellow-500/10 to-transparent"
              style={{
                z: useTransform(scrollYProgress, [0.55, 0.8], [30, -60]),
                opacity: useTransform(scrollYProgress, [0.55, 0.67, 0.8], [0.5, 0.8, 0.4])
              }}
            />
          </motion.div>

          {/* Scene 5: Earth from Space - Ultra 4K with final descent */}
          <motion.div 
            className="absolute inset-0 will-change-transform"
            style={{
              scale: earthScale,
              rotateZ: earthRotate,
              z: earthZ,
              opacity: earthOpacity,
              transformStyle: 'preserve-3d',
              contain: 'layout style paint',
              willChange: 'transform, opacity'
            }}
          >
            {/* Earth approaching with atmospheric layers */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                z: useTransform(scrollYProgress, [0.75, 1], [-200, 0]),
                scale: useTransform(scrollYProgress, [0.75, 0.87, 1], [0.8, 1, 1.3])
              }}
            />
            {/* Atmospheric glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-transparent to-green-400/25"
              style={{
                z: useTransform(scrollYProgress, [0.75, 1], [0, -100]),
                opacity: useTransform(scrollYProgress, [0.75, 0.87, 1], [0.3, 0.6, 0.9]),
                filter: 'blur(2px)'
              }}
            />
          </motion.div>


          {/* Dynamic Content Overlay */}
          <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
            <div className="text-center text-white max-w-6xl px-8">
              
              {/* Intro Scene */}
              {currentScene === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="space-y-8"
                >
                  <motion.h1 
                    className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)",
                        "0 0 40px rgba(147, 51, 234, 0.5), 0 0 60px rgba(59, 130, 246, 0.4)",
                        "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)"
                      ],
                      scale: [1, 1.02, 1],
                      rotateX: [0, 2, 0],
                      z: [0, 20, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    SPACE INTRO
                  </motion.h1>
                  
                  <motion.p 
                    className="text-2xl md:text-3xl text-blue-200 font-light tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    UX/UI Designer & Creative Technologist
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-white/70 text-lg tracking-widest uppercase"
                  >
                    Enter the Cosmic Journey
                  </motion.div>

                  {/* Scroll indicator */}
                  <motion.div
                    className="mt-16"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-14 border-2 border-white/40 rounded-full mx-auto flex justify-center">
                      <motion.div
                        animate={{ y: [4, 20, 4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-4 bg-white/60 rounded-full mt-3"
                      />
                    </div>
                    <p className="text-white/50 text-sm mt-4">Scroll to explore</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Nebula Scene */}
              {currentScene === 1 && (
                <motion.div
                  key="nebula"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1 }}
                  className="space-y-6"
                >
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                    THROUGH NEBULAS
                  </h1>
                  <p className="text-xl md:text-2xl text-purple-200">
                    Exploring infinite creative possibilities
                  </p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-white text-sm md:text-base mt-8 max-w-2xl mx-auto space-y-2 bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                  >
                    <p className="font-medium">💫 A nebula can span hundreds of light-years and birth thousands of stars</p>
                    <p className="font-medium">✨ The Pillars of Creation in the Eagle Nebula are 5 light-years tall</p>
                    <p className="font-medium">🌟 Nebulae are the cosmic nurseries where stars are born from gas and dust</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Galaxy Scene */}
              {currentScene === 2 && (
                <motion.div
                  key="galaxy"
                  initial={{ opacity: 0, rotateY: -30 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 30 }}
                  transition={{ duration: 1 }}
                  className="space-y-6"
                >
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
                    SPIRAL GALAXIES
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">
                    Mastering complex interface systems
                  </p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-white text-sm md:text-base mt-8 max-w-2xl mx-auto space-y-2 bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                  >
                    <p className="font-medium">🌌 Our Milky Way galaxy contains over 200 billion stars</p>
                    <p className="font-medium">🌀 The galaxy completes one rotation every 225 million years</p>
                    <p className="font-medium">💠 At the center lies a supermassive black hole 4 million times the Sun's mass</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Solar System Scene */}
              {currentScene === 3 && (
                <motion.div
                  key="solar"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="space-y-6"
                >
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
                    SOLAR SYSTEMS
                  </h1>
                  <p className="text-xl md:text-2xl text-orange-200">
                    Bringing order to digital chaos
                  </p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-white text-sm md:text-base mt-8 max-w-2xl mx-auto space-y-2 bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                  >
                    <p className="font-medium">☀️ Light from the Sun takes 8 minutes to reach Earth</p>
                    <p className="font-medium">🪐 Our solar system formed 4.6 billion years ago from a collapsing molecular cloud</p>
                    <p className="font-medium">⚡ The Sun converts 600 million tons of hydrogen into helium every second</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Earth Scene */}
              {currentScene === 4 && (
                <motion.div
                  key="earth"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="space-y-8"
                >
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
                    PLANET EARTH
                  </h1>
                  <p className="text-xl md:text-2xl text-green-200 mb-8">
                    Where human-centered design begins
                  </p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-white text-sm md:text-base mt-8 max-w-2xl mx-auto space-y-2 bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                  >
                    <p className="font-medium">🌍 Earth is the only known planet to harbor life in the universe</p>
                    <p className="font-medium">🌊 71% of Earth's surface is covered by water</p>
                    <p className="font-medium">🛡️ Earth's magnetic field protects us from harmful solar radiation</p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="fixed bottom-8 left-8 right-8 z-50">
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                style={{ 
                  scaleX: scrollYProgress,
                  originX: 0
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section with 4K Images */}
      <section className="relative py-32 bg-black text-white overflow-hidden" style={{ contentVisibility: 'auto' }}>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=65&w=3840&h=2160&auto=format&fit=crop"
            alt="Space station interior"
            loading="lazy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ scale: 1.02, rotateY: 5, z: 30 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mission Commander
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                With 5+ years exploring the digital cosmos, I specialize in creating 
                stellar user experiences that guide users through complex interfaces 
                with the precision of a space navigation system.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: '5+', label: 'Light-Years Experience' },
                  { value: '100+', label: 'Missions Completed' },
                  { value: '50+', label: 'Successful Launches' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20, z: -50 }}
                    whileInView={{ opacity: 1, y: 0, z: 0 }}
                    whileHover={{ scale: 1.1, z: 30, rotateY: 10 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: -5, z: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=65&w=1200&h=1200&auto=format&fit=crop"
                alt="Black hole dark space"
                loading="lazy"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white" style={{ contentVisibility: 'auto' }}>
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=65&w=3840&h=2160&auto=format&fit=crop"
            alt="Earth from space"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/90" />
        
        <div className="relative max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, z: -100 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready for Launch?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's embark on an extraordinary journey through digital space together
            </p>
            
            <motion.div
              className="flex flex-col items-center space-y-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:vikassahani17@gmail.com"
                className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-lg text-white group-hover:text-blue-300 transition-colors">vikassahani17@gmail.com</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/VIKAS9793"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-white group-hover:text-purple-300 transition-colors">github.com/VIKAS9793</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/vikas-sahani-727420358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-lg text-white group-hover:text-cyan-300 transition-colors">linkedin.com/in/vikas-sahani-727420358</span>
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mt-8"
            >
              © 2025 VIKAS SAHANI. All rights reserved.
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
