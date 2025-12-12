'use client'

import { motion, useTransform } from 'framer-motion'
import type { SceneProps } from '@/types'

export function GalaxyScene({ scrollYProgress }: SceneProps) {
    const galaxyScale = useTransform(scrollYProgress, [0.35, 0.6], [0.2, 3])
    const galaxyRotate = useTransform(scrollYProgress, [0.35, 0.6], [30, 360])
    const galaxyZ = useTransform(scrollYProgress, [0.35, 0.6], [-200, 100])
    const galaxyOpacity = useTransform(scrollYProgress, [0.34, 0.35, 0.6, 0.61], [0, 1, 1, 0])
    const bgZ = useTransform(scrollYProgress, [0.35, 0.6], [-100, 80])
    const bgScale = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [1.3, 1, 1.1])
    const overlayZ = useTransform(scrollYProgress, [0.35, 0.6], [60, -80])
    const overlayRotateZ = useTransform(scrollYProgress, [0.35, 0.6], [-15, 45])
    const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0.4, 0.7, 0.3])

    return (
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
            aria-hidden="true"
        >
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=65&w=3840&h=2160&auto=format&fit=crop')`,
                    z: bgZ,
                    scale: bgScale
                }}
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-cyan-500/20"
                style={{
                    z: overlayZ,
                    rotateZ: overlayRotateZ,
                    opacity: overlayOpacity
                }}
            />
        </motion.div>
    )
}
