export const validateContact = ({ name, email, message }) => {
    const errors = {}

    if (!name.trim()) {
    errors.name = 'El nombre es obligatorio'
    }

    if (!email.trim()) {
    errors.email = 'El correo es obligatorio'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Ingresa un correo válido'
    }

    if (message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    return errors
}