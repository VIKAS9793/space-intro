'use client'

import { useEffect, useState, useMemo, memo } from 'react'
import type { ParticleData } from '@/types'

interface ParticleFieldProps {
    count?: number;
}

// Memoized static particle component - no Framer Motion overhead
const Particle = memo(function Particle({
    particle,
    animationDelay
}: {
    particle: ParticleData;
    animationDelay: number;
}) {
    return (
        <div
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: particle.left,
                top: particle.top,
                opacity: 0.7,
                animationDelay: `${animationDelay}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
            }}
        />
    )
})

export function ParticleField({ count = 50 }: ParticleFieldProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Generate particles only once using useMemo
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => {
            const depth = Math.random() * 400 - 200
            const size = depth > 0 ? 2 + (depth / 100) : 1
            return {
                id: i,
                data: {
                    depth,
                    size: Math.max(1, Math.min(size, 4)), // Clamp size
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'none' // Remove expensive blur filter
                },
                delay: Math.random() * 3
            }
        })
    }, [count])

    // Don't render until mounted (SSR safety)
    if (!mounted) return null

    return (
        <div className="absolute inset-0" aria-hidden="true">
            {particles.map(({ id, data, delay }) => (
                <Particle key={id} particle={data} animationDelay={delay} />
            ))}
        </div>
    )
}
