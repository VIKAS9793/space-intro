'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { ParticleData } from '@/types'

interface ParticleFieldProps {
    count?: number;
}

export function ParticleField({ count = 100 }: ParticleFieldProps) {
    const [particles, setParticles] = useState<ParticleData[]>([])

    useEffect(() => {
        const generatedParticles = Array.from({ length: count }, () => {
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
    }, [count])

    return (
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }} aria-hidden="true">
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
    )
}
