import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProfileSection from './ProfileSection'
import { profile } from '../../data/profile'

describe('ProfileSection', () => {
    it('muestra el nombre, el cargo, la descripción y la foto', () => {
        render(<ProfileSection />)

        expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
        expect(screen.getByText(profile.role)).toBeInTheDocument()
        expect(screen.getByText(profile.description)).toBeInTheDocument()
        expect(screen.getByRole('img', { name: `Fotografía de ${profile.name}` })).toBeInTheDocument()
    })
})