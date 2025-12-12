'use client'

import { motion, useTransform } from 'framer-motion'
import type { SceneProps } from '@/types'

export function EarthScene({ scrollYProgress }: SceneProps) {
    const earthScale = useTransform(scrollYProgress, [0.7, 0.95], [0.5, 2.8])
    const earthRotate = useTransform(scrollYProgress, [0.7, 0.95], [0, 360])
    const earthZ = useTransform(scrollYProgress, [0.7, 0.95], [-400, 0])
    const earthOpacity = useTransform(scrollYProgress, [0.69, 0.7, 0.98, 0.99], [0, 1, 1, 0])
    const bgZ = useTransform(scrollYProgress, [0.75, 1], [-200, 0])
    const bgScale = useTransform(scrollYProgress, [0.75, 0.87, 1], [0.8, 1, 1.3])
    const atmosphereZ = useTransform(scrollYProgress, [0.75, 1], [0, -100])
    const atmosphereOpacity = useTransform(scrollYProgress, [0.75, 0.87, 1], [0.3, 0.6, 0.9])

    return (
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
            aria-hidden="true"
        >
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                    z: bgZ,
                    scale: bgScale
                }}
            />
            {/* Atmospheric glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-transparent to-green-400/25"
                style={{
                    z: atmosphereZ,
                    opacity: atmosphereOpacity,
                    filter: 'blur(2px)'
                }}
            />
        </motion.div>
    )
}
