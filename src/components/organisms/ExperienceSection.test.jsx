import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExperienceSection from './ExperienceSection'
import { experience } from '../../data/experience'

describe('ExperienceSection', () => {
    it('muestra el título y cada experiencia con empresa y cargo', () => {
        render(<ExperienceSection />)

        expect(screen.getByRole('heading', { name: /experiencia laboral/i })).toBeInTheDocument()

        experience.forEach(({ company, position }) => {
        expect(screen.getByText(company)).toBeInTheDocument()
        expect(screen.getByText(position)).toBeInTheDocument()
        })
    })
})