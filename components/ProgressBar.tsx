'use client'

import { motion, MotionValue } from 'framer-motion'

interface ProgressBarProps {
    scrollYProgress: MotionValue<number>;
}

export function ProgressBar({ scrollYProgress }: ProgressBarProps) {
    return (
        <div className="fixed bottom-8 left-8 right-8 z-50" role="progressbar" aria-label="Page scroll progress">
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
    )
}
