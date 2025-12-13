import { render, waitFor } from '@testing-library/react'
import { ParticleField } from '@/components/ParticleField'
import { describe, it, expect } from 'vitest'

describe('ParticleField', () => {
    it('renders particles after mounting', async () => {
        const { container } = render(<ParticleField count={10} />)

        await waitFor(() => {
            expect(container.firstChild).toBeInTheDocument()
        })

        // Check if children count is correct (container -> div -> 10 particles)
        const wrapper = container.firstChild
        expect(wrapper?.childNodes).toHaveLength(10)
    })
})
