'use client'

import { motion, useTransform } from 'framer-motion'
import { ParticleField } from '@/components/ParticleField'
import type { SceneProps } from '@/types'

export function BlackHoleScene({ scrollYProgress }: SceneProps) {
    const blackHoleScale = useTransform(scrollYProgress, [0, 0.2], [1, 4])
    const blackHoleRotate = useTransform(scrollYProgress, [0, 0.2], [0, 180])
    const blackHoleZ = useTransform(scrollYProgress, [0, 0.2], [0, 200])
    const blackHoleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.21], [1, 1, 0])
    const bgZ = useTransform(scrollYProgress, [0, 0.2], [0, -100])

    return (
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
            aria-hidden="true"
        >
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=65&w=1920&h=1080&auto=format&fit=crop')`,
                    z: bgZ
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50" />
            <ParticleField count={100} />
        </motion.div>
    )
}
