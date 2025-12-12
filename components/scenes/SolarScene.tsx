'use client'

import { motion, useTransform } from 'framer-motion'
import type { SceneProps } from '@/types'

export function SolarScene({ scrollYProgress }: SceneProps) {
    const solarScale = useTransform(scrollYProgress, [0.55, 0.8], [0.15, 2.5])
    const solarRotateY = useTransform(scrollYProgress, [0.55, 0.8], [-30, 30])
    const solarZ = useTransform(scrollYProgress, [0.55, 0.8], [-300, 50])
    const solarOpacity = useTransform(scrollYProgress, [0.54, 0.55, 0.8, 0.81], [0, 1, 1, 0])
    const bgZ = useTransform(scrollYProgress, [0.55, 0.8], [-150, 40])
    const bgScale = useTransform(scrollYProgress, [0.55, 0.67, 0.8], [1.5, 1, 1.2])
    const overlayZ = useTransform(scrollYProgress, [0.55, 0.8], [30, -60])
    const overlayOpacity = useTransform(scrollYProgress, [0.55, 0.67, 0.8], [0.5, 0.8, 0.4])

    return (
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
            aria-hidden="true"
        >
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                    z: bgZ,
                    scale: bgScale
                }}
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-500/25 via-yellow-500/10 to-transparent"
                style={{
                    z: overlayZ,
                    opacity: overlayOpacity
                }}
            />
        </motion.div>
    )
}
