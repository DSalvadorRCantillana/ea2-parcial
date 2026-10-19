import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
    it('muestra los tres campos y el botón de envío', () => {
        render(<ContactForm />)

        expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
        expect(screen.getByLabelText('Correo')).toBeInTheDocument()
        expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument()
    })

    it('muestra errores de validación si se envía vacío', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole('button', { name: /enviar mensaje/i }))

        expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument()
        expect(screen.getByText('El correo es obligatorio')).toBeInTheDocument()
        expect(screen.queryByText(/mensaje enviado correctamente/i)).not.toBeInTheDocument()
    })

    it('muestra un error si el correo no es válido', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.type(screen.getByLabelText('Nombre'), 'Ana')
        await user.type(screen.getByLabelText('Correo'), 'correo-sin-arroba')
        await user.type(screen.getByLabelText('Mensaje'), 'Un mensaje suficientemente largo')
        await user.click(screen.getByRole('button', { name: /enviar mensaje/i }))

        expect(screen.getByText('Ingresa un correo válido')).toBeInTheDocument()
    })

    it('envía el formulario con datos válidos y lo limpia', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.type(screen.getByLabelText('Nombre'), 'Ana')
        await user.type(screen.getByLabelText('Correo'), 'ana@correo.com')
        await user.type(screen.getByLabelText('Mensaje'), 'Un mensaje suficientemente largo')
        await user.click(screen.getByRole('button', { name: /enviar mensaje/i }))

        expect(await screen.findByText(/mensaje enviado correctamente/i)).toBeInTheDocument()
        expect(screen.getByLabelText('Nombre')).toHaveValue('')
    })
})