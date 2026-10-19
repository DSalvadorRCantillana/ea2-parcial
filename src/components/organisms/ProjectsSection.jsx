import { useEffect, useState } from 'react'
import Heading from '../atoms/Heading'
import ProjectCard from '../molecules/ProjectCard'
import { projects as projectsData } from '../../data/projects'

function ProjectsSection() {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setProjects(projectsData)
            setIsLoading(false)
        }, 800)

        return () => clearTimeout(timerId)
    }, [])

    return (
        <section id="proyectos" className="flex flex-col gap-6">
            <Heading level={2}>Desarrollos y proyectos</Heading>

            {isLoading && <p className="text-slate-500">Cargando proyectos...</p>}

            {!isLoading && projects.length === 0 && (
                <p className="text-slate-500">Aún no hay proyectos para mostrar.</p>
            )}

            {!isLoading && projects.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default ProjectsSection