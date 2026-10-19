import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import EducationSection from './EducationSection'
import { education } from '../../data/education'

describe('EducationSection', () => {
    it('muestra el título y cada estudio con institución y título', () => {
        render(<EducationSection />)

        expect(screen.getByRole('heading', { name: /estudios/i })).toBeInTheDocument()

        education.forEach(({ institution, title }) => {
        expect(screen.getByText(institution)).toBeInTheDocument()
        expect(screen.getByText(title)).toBeInTheDocument()
        })
    })
})