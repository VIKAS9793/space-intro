import type { Metadata } from 'next'
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
    default: 'Space Intro - UX/UI Designer & Creative Technologist',
    template: '%s | Space Intro'
  },
  description: 'Embark on a cosmic journey through innovative design and cutting-edge technology. Exploring the universe of user experience with stellar creativity and interstellar precision.',
  keywords: ['UX Designer', 'Frontend Developer', 'Creative Technologist', 'Portfolio', 'React', 'Next.js', 'Design Systems', 'User Experience'],
  authors: [{ name: 'Portfolio Owner', url: 'https://portfolio.com' }],
  creator: 'Portfolio Owner',
  publisher: 'Portfolio Owner',
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
    url: 'https://space-intro.com',
    title: 'Space Intro - UX/UI Designer & Creative Technologist',
    description: 'Embark on a cosmic journey through innovative design and cutting-edge technology.',
    siteName: 'Space Intro',
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
    title: 'Space Intro - UX/UI Designer & Creative Technologist',
    description: 'Embark on a cosmic journey through innovative design and cutting-edge technology.',
    images: ['https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0ea5e9' },
  ],
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
              name: 'Portfolio Owner',
              jobTitle: 'UX Engineer & Creative Technologist',
              description: 'Crafting exceptional digital experiences through innovative design and cutting-edge technology.',
              url: 'https://portfolio.com',
              sameAs: [
                'https://linkedin.com/in/portfolio',
                'https://github.com/portfolio',
                'https://dribbble.com/portfolio',
              ],
              knowsAbout: [
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
        <div id="root" className="min-h-screen bg-white">
          {children}
        </div>
        
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