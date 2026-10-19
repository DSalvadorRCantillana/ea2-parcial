import { describe, it, expect } from 'vitest'
import { validateContact } from './validateContact'

describe('validateContact', () => {
    it('devuelve un error por cada campo vacío', () => {
        const errors = validateContact({ name: '', email: '', message: '' })

        expect(errors.name).toBe('El nombre es obligatorio')
        expect(errors.email).toBe('El correo es obligatorio')
        expect(errors.message).toBeDefined()
    })

    it('rechaza un correo con formato inválido', () => {
        const errors = validateContact({
        name: 'Ana',
        email: 'correo-sin-arroba',
        message: 'Un mensaje suficientemente largo',
        })

        expect(errors.email).toBe('Ingresa un correo válido')
    })

    it('no devuelve errores cuando los datos son válidos', () => {
        const errors = validateContact({
        name: 'Ana',
        email: 'ana@correo.com',
        message: 'Un mensaje suficientemente largo',
        })

        expect(errors).toEqual({})
    })
})