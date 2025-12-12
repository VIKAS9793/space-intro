'use client'

import { motion } from 'framer-motion'

interface ContentOverlayProps {
    currentScene: number;
}

export function ContentOverlay({ currentScene }: ContentOverlayProps) {
    return (
        <div
            className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
            aria-live="polite"
            aria-atomic="true"
        >
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
                            AI Product Manager & Creative Technologist
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
                        <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                            THROUGH NEBULAS
                        </h2>
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
                        <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
                            SPIRAL GALAXIES
                        </h2>
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
                            <p className="font-medium">💠 At the center lies a supermassive black hole 4 million times the Sun&apos;s mass</p>
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
                        <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
                            SOLAR SYSTEMS
                        </h2>
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
                        <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
                            PLANET EARTH
                        </h2>
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
                            <p className="font-medium">🌊 71% of Earth&apos;s surface is covered by water</p>
                            <p className="font-medium">🛡️ Earth&apos;s magnetic field protects us from harmful solar radiation</p>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
