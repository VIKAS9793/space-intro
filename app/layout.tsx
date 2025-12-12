import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Font optimization with variable font support
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500', '600', '700', '800'],
})

// MAANG-level SEO optimization
export const metadata: Metadata = {
  title: {
    default: 'VIKAS SAHANI - AI Product Manager & Creative Technologist',
    template: '%s | VIKAS SAHANI'
  },
  description: 'Embark on a cosmic journey through innovative design and cutting-edge technology. AI Product Manager crafting stellar user experiences with precision and creativity.',
  keywords: ['AI Product Manager', 'UX Designer', 'Frontend Developer', 'Creative Technologist', 'Portfolio', 'React', 'Next.js', 'Design Systems'],
  authors: [{ name: 'VIKAS SAHANI', url: 'https://space-intro.netlify.app/' }],
  creator: 'VIKAS SAHANI',
  publisher: 'VIKAS SAHANI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://space-intro.netlify.app/',
    title: 'VIKAS SAHANI - AI Product Manager & Creative Technologist',
    description: 'Embark on a cosmic journey through innovative design and cutting-edge technology.',
    siteName: 'VIKAS SAHANI Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Space Intro - Cosmic journey through design and technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIKAS SAHANI - AI Product Manager & Creative Technologist',
    description: 'Embark on a cosmic journey through innovative design and cutting-edge technology.',
    images: ['https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0ea5e9' },
    ],
  },
}

// Viewport configuration (Next.js 15+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0ea5e9' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Performance optimization hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />

        {/* Structured data for enhanced SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'VIKAS SAHANI',
              jobTitle: 'AI Product Manager & Creative Technologist',
              description: 'Crafting exceptional digital experiences through innovative design and cutting-edge technology.',
              url: 'https://space-intro.netlify.app/',
              sameAs: [
                'https://www.linkedin.com/in/vikas-sahani-727420358',
                'https://github.com/VIKAS9793',
              ],
              knowsAbout: [
                'AI Product Management',
                'UX/UI Design',
                'Frontend Development',
                'Design Systems',
                'React',
                'Next.js',
                'TypeScript',
                'Creative Technology'
              ]
            }),
          }}
        />

        {/* Analytics and tracking (placeholder) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-primary"
        >
          Skip to main content
        </a>

        {/* Main application container */}
        <main id="main-content" className="min-h-screen bg-black">
          {children}
        </main>

        {/* Service Worker registration for PWA capabilities */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js');
                  });
                }
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}