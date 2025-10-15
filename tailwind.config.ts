import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // MAANG-level design system following 8-point grid
      spacing: {
        '0.5': '2px',   // 0.5 * 4px = 2px
        '1': '4px',     // 1 * 4px = 4px  
        '2': '8px',     // 2 * 4px = 8px (base unit)
        '3': '12px',    // 3 * 4px = 12px
        '4': '16px',    // 4 * 4px = 16px
        '6': '24px',    // 6 * 4px = 24px
        '8': '32px',    // 8 * 4px = 32px
        '12': '48px',   // 12 * 4px = 48px
        '16': '64px',   // 16 * 4px = 64px
        '20': '80px',   // 20 * 4px = 80px
        '24': '96px',   // 24 * 4px = 96px
        '32': '128px',  // 32 * 4px = 128px
      },
      colors: {
        // Space-themed cosmic color palette
        cosmic: {
          50: '#f8fafc',   // Stellar white
          100: '#e1e7ef',  // Nebula mist
          200: '#cbd5e1',  // Asteroid belt
          300: '#94a3b8',  // Cosmic dust
          400: '#64748b',  // Deep space
          500: '#475569',  // Void
          600: '#334155',  // Dark matter
          700: '#1e293b',  // Black hole edge
          800: '#0f172a',  // Event horizon
          900: '#020617',  // Singularity
          950: '#000000'   // Absolute void
        },
        primary: {
          50: '#eff6ff',   // Starlight
          100: '#dbeafe',  // Aurora
          200: '#bfdbfe',  // Solar wind
          300: '#93c5fd',  // Plasma
          400: '#60a5fa',  // Ion trail
          500: '#3b82f6',  // Core fusion
          600: '#2563eb',  // Stellar core
          700: '#1d4ed8',  // Pulsar beam
          800: '#1e40af',  // Magnetosphere
          900: '#1e3a8a',  // Deep gravity
          950: '#172554'   // Collapsed star
        },
        accent: {
          50: '#fef7ff',   // Cosmic ray
          100: '#fce7f3',  // Solar flare
          200: '#fbcfe8',  // Pink nebula
          300: '#f9a8d4',  // Galaxy spiral
          400: '#f472b6',  // Pulsar glow
          500: '#ec4899',  // Supernova
          600: '#db2777',  // Red giant
          700: '#be185d',  // Crimson dwarf
          800: '#9d174d',  // Dark energy
          900: '#831843',  // Antimatter
          950: '#500724'   // Dark plasma
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        }
      },
      fontFamily: {
        // Typography hierarchy - max 2 fonts as per requirement
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Consistent type scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],    // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
      },
      animation: {
        // Micro-interactions and motion
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 1s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        // Elevation system like Material Design
        'elevation-1': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'elevation-2': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'elevation-3': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'elevation-4': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'elevation-5': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config