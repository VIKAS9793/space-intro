'use client'

import { motion } from 'framer-motion'

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-8" role="navigation" aria-label="Main navigation">
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
                        <p className="text-blue-300 text-sm">AI Product Manager</p>
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
    )
}
