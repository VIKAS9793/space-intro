import { render, screen } from '@testing-library/react'
import { ProgressBar } from '@/components/ProgressBar'
import { describe, it, expect } from 'vitest'
import { MotionValue } from 'framer-motion'

// Mock MotionValue
const createMockMotionValue = (initial: number) => {
    const listeners = new Set<(v: number) => void>()
    return {
        get: () => initial,
        getVelocity: () => 0,
        on: (event: string, callback: (v: number) => void) => {
            listeners.add(callback)
            return () => listeners.delete(callback)
        },
        set: (v: number) => {
            initial = v
            listeners.forEach(cb => cb(v))
        },
        // Add other necessary methods if needed by framer-motion internals
        onChange: (callback: (v: number) => void) => {
            listeners.add(callback)
            return () => listeners.delete(callback)
        },
        attach: () => { },
        stop: () => { },
        isAnimating: () => false,
    } as unknown as MotionValue<number>
}

describe('ProgressBar', () => {
    it('renders correctly', () => {
        const mockProgress = createMockMotionValue(0.5)
        render(<ProgressBar scrollYProgress={mockProgress} />)

        // Check for the progressbar role
        const progressBar = screen.getByRole('progressbar')
        expect(progressBar).toBeInTheDocument()
    })

    // Testing exact style width with MotionValue is tricky in JSDOM because 
    // framer-motion handles the style update via RS/animation loop using RAFs.
    // We verified it renders. We can assume Framer Motion works.
})
