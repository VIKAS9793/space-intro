'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
    { value: '5+', label: 'Light-Years Experience' },
    { value: '100+', label: 'Missions Completed' },
    { value: '50+', label: 'Successful Launches' }
]

export function AboutSection() {
    return (
        <section
            className="relative py-32 bg-black text-white overflow-hidden"
            style={{ contentVisibility: 'auto' }}
            aria-labelledby="about-heading"
        >
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=65&w=1920&h=1080&auto=format&fit=crop"
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    sizes="100vw"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
            </div>

            <div className="relative max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        whileHover={{ scale: 1.02, rotateY: 5, z: 30 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <h2 id="about-heading" className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Mission Commander
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                            With 5+ years exploring the digital cosmos, I specialize in creating
                            stellar user experiences that guide users through complex interfaces
                            with the precision of a space navigation system.
                        </p>

                        <div className="grid grid-cols-3 gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20, z: -50 }}
                                    whileInView={{ opacity: 1, y: 0, z: 0 }}
                                    whileHover={{ scale: 1.1, z: 30, rotateY: 10 }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: 15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        whileHover={{ scale: 1.05, rotateY: -5, z: 50 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-96"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=65&w=1200&h=1200&auto=format&fit=crop"
                            alt="Black hole in deep space"
                            fill
                            className="object-cover rounded-3xl shadow-2xl"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
