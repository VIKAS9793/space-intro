'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const socialLinks = [
    {
        href: 'mailto:vikassahani17@gmail.com',
        label: 'vikassahani17@gmail.com',
        color: 'blue',
        icon: (
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
        )
    },
    {
        href: 'https://github.com/VIKAS9793',
        label: 'github.com/VIKAS9793',
        color: 'purple',
        icon: (
            <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        )
    },
    {
        href: 'https://www.linkedin.com/in/vikas-sahani-727420358',
        label: 'linkedin.com/in/vikas-sahani-727420358',
        color: 'cyan',
        icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    }
]

export function ContactSection() {
    return (
        <section
            className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white"
            style={{ contentVisibility: 'auto' }}
            aria-labelledby="contact-heading"
        >
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=65&w=3840&h=2160&auto=format&fit=crop"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={false}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/90" />

            <div className="relative max-w-5xl mx-auto px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50, z: -100 }}
                    whileInView={{ opacity: 1, y: 0, z: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <h2 id="contact-heading" className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Ready for Launch?
                    </h2>
                    <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Let&apos;s embark on an extraordinary journey through digital space together
                    </p>

                    <motion.nav
                        className="flex flex-col items-center space-y-6 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        aria-label="Contact links"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                {link.icon}
                                <span className={`text-lg text-white group-hover:text-${link.color}-300 transition-colors`}>
                                    {link.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm mt-8"
                    >
                        © 2025 VIKAS SAHANI. All rights reserved.
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
