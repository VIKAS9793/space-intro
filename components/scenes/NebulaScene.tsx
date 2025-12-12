'use client'

import { motion, useTransform } from 'framer-motion'
import type { SceneProps } from '@/types'

export function NebulaScene({ scrollYProgress }: SceneProps) {
    const nebulaScale = useTransform(scrollYProgress, [0.15, 0.4], [0.3, 3.5])
    const nebulaRotate = useTransform(scrollYProgress, [0.15, 0.4], [15, -45])
    const nebulaZ = useTransform(scrollYProgress, [0.15, 0.4], [-100, 150])
    const nebulaOpacity = useTransform(scrollYProgress, [0.14, 0.15, 0.4, 0.41], [0, 1, 1, 0])
    const bgZ = useTransform(scrollYProgress, [0.15, 0.4], [-50, 100])
    const bgScale = useTransform(scrollYProgress, [0.15, 0.4], [1.2, 1])
    const overlayZ = useTransform(scrollYProgress, [0.15, 0.4], [50, -50])
    const overlayOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.4], [0.3, 0.8, 0.4])

    return (
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
            aria-hidden="true"
        >
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=65&w=1920&h=1080&auto=format&fit=crop')`,
                    z: bgZ,
                    scale: bgScale
                }}
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30"
                style={{
                    z: overlayZ,
                    opacity: overlayOpacity
                }}
            />
        </motion.div>
    )
}
