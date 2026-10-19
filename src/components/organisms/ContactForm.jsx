import { useState, useEffect } from 'react'
import Button from '../atoms/Button'
import FormField from '../molecules/FormField'
import { validateContact } from '../../utils/validateContact'

const initialValues = { name: '', email: '', message: '' }

function ContactForm() {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSent, setIsSent] = useState(false)

    useEffect(() => {
        if (!isSent) return

        const timerId = setTimeout(() => setIsSent(false), 4000)

        return () => clearTimeout(timerId)
    }, [isSent])

    const handleChange = (event) => {
    const { name, value } = event.target
    setValues((previous) => ({ ...previous, [name]: value }))
    setIsSent(false)
    }

    const handleSubmit = (event) => {
    event.preventDefault()
    const newErrors = validateContact(values)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
        setIsSent(true)
        setValues(initialValues)
    }
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            

            <FormField
                id="name"
                name="name"
                label="Nombre"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
            />
            <FormField
                id="email"
                name="email"
                type="email"
                label="Correo"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
            />
            <FormField
                id="message"
                name="message"
                label="Mensaje"
                multiline
                value={values.message}
                onChange={handleChange}
                error={errors.message}
            />

            <Button type="submit">Enviar mensaje</Button>

            {isSent && (
                <p role="status" className="text-green-700">
                ¡Mensaje enviado correctamente!
                </p>
            )}
        </form>
    )
}

export default ContactForm