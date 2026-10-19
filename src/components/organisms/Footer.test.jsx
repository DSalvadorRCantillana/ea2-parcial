import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
    it('muestra el año actual calculado por código', () => {
        render(<Footer />)

        const currentYear = new Date().getFullYear()

        expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument()
    })
})