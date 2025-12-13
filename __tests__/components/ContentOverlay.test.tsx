import { render, screen } from '@testing-library/react'
import { ContentOverlay } from '@/components/ContentOverlay'
import { describe, it, expect } from 'vitest'

describe('ContentOverlay', () => {
    it('renders content for initial scene (0)', () => {
        render(<ContentOverlay currentScene={0} />)
        expect(screen.getByText('SPACE INTRO')).toBeInTheDocument()
        expect(screen.getByText('AI Product Manager & Creative Technologist')).toBeInTheDocument()
    })

    it('renders content for Galaxy scene (2)', () => {
        render(<ContentOverlay currentScene={2} />)
        expect(screen.getByText('SPIRAL GALAXIES')).toBeInTheDocument()
    })

    it('renders nothing for unknown scene', () => {
        const { container } = render(<ContentOverlay currentScene={99} />)
        // The component renders the main div wrapper always, but with empty content inside if no scene matches?
        // Let's check the code: The wrapper div is always there.
        // Inside it checks {currentScene === 0 && ...}
        // So if scene 99, it renders wrapper div but no content.
        // container.firstChild is the wrapper div.
        expect(container.firstChild).toBeInTheDocument()
        // It should not contain any heading
        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    })
})
