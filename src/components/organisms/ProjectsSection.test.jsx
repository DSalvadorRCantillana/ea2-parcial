import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'
import { projects } from '../../data/projects'

describe('ProjectsSection', () => {
    it('muestra "Cargando" al inicio y luego todas las tarjetas', async () => {
        render(<ProjectsSection />)

        expect(screen.getByText(/cargando proyectos/i)).toBeInTheDocument()

        const cards = await screen.findAllByRole('article', {}, { timeout: 3000 })

        expect(cards).toHaveLength(projects.length)
        expect(screen.queryByText(/cargando proyectos/i)).not.toBeInTheDocument()
    })

    it('cada proyecto tiene un enlace a su repositorio', async () => {
        render(<ProjectsSection />)

        const links = await screen.findAllByRole('link', { name: /ver repositorio/i }, { timeout: 3000 })

        links.forEach((link, index) => {
        expect(link).toHaveAttribute('href', projects[index].repoUrl)
        })
    })
})