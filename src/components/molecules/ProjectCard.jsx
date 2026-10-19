import Heading from '../atoms/Heading'
import ExternalLink from '../atoms/ExternalLink'

function ProjectCard({ title, description, image, repoUrl }) {
    return (
        <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img src={image} alt={`Vista previa de ${title}`} className="h-40 w-full object-cover" />
            <div className="flex flex-col gap-2 p-4">
                <Heading level={3}>{title}</Heading>
                <p className="text-slate-600">{description}</p>
                <ExternalLink href={repoUrl}>Ver repositorio →</ExternalLink>
            </div>
        </article>
    )
}

export default ProjectCard