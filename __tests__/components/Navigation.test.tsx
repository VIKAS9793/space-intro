import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/Navigation'
import { describe, it, expect } from 'vitest'

describe('Navigation', () => {
    it('renders correctly', () => {
        render(<Navigation />)
        expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

    it('renders branding and title', () => {
        render(<Navigation />)

        // Check for Name
        expect(screen.getAllByText('VIKAS SAHANI')[0]).toBeInTheDocument()

        // Check for Title
        expect(screen.getByText('AI Product Manager')).toBeInTheDocument()

        // Check for Logo
        expect(screen.getByText('V')).toBeInTheDocument()
    })
})
