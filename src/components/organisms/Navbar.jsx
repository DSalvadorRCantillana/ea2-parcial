import { useState } from 'react'
import { profile } from '../../data/profile'

const navLinks = [
    { id: 'personal', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'estudios', label: 'Estudios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((previous) => !previous)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav
            aria-label="Navegación principal"
            className="relative mx-auto flex max-w-5xl items-center justify-between px-8 py-4"
        >
            <span className="font-bold text-indigo-600">{profile.name}</span>

            <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="menu-principal"
            className="font-medium text-slate-700 sm:hidden"
            >
            {isOpen ? 'Cerrar' : 'Menú'}
            </button>

            <ul
            id="menu-principal"
            className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-3 border-b border-slate-200 bg-white p-6 sm:static sm:flex sm:w-auto sm:flex-row sm:gap-6 sm:border-0 sm:p-0`}
            >
            {navLinks.map(({ id, label }) => (
                <li key={id}>
                <a
                    href={`#${id}`}
                    onClick={closeMenu}
                    className="font-medium text-slate-700 hover:text-indigo-600"
                >
                    {label}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        </header>
    )
}

export default Navbar