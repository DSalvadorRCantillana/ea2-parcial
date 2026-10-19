import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar', () => {
    it('muestra los enlaces a todas las secciones', () => {
        render(<Navbar />)

        expect(screen.getByRole('link', { name: 'Experiencia' })).toHaveAttribute('href', '#experiencia')
        expect(screen.getByRole('link', { name: 'Contacto' })).toHaveAttribute('href', '#contacto')
    })

    it('abre y cierra el menú con el botón', async () => {
        const user = userEvent.setup()
        render(<Navbar />)

        const toggle = screen.getByRole('button', { name: /menú/i })
        expect(toggle).toHaveAttribute('aria-expanded', 'false')

        await user.click(toggle)
        expect(toggle).toHaveAttribute('aria-expanded', 'true')

        await user.click(toggle)
        expect(toggle).toHaveAttribute('aria-expanded', 'false')
    })
})