import Heading from '../atoms/Heading'
import TimelineItem from '../molecules/TimelineItem'
import { experience } from '../../data/experience'

function ExperienceSection() {
    return (
        <section id="experiencia" className="flex flex-col gap-6">
            <Heading level={2}>Experiencia laboral</Heading>
            <ol>
                {experience.map(({ id, company, position, start, end, description }) => (
                    <TimelineItem
                        key={id}
                        title={position}
                        subtitle={company}
                        period={`${start} – ${end}`}
                        description={description}
                    />
                ))}
            </ol>
        </section>
    )
}

export default ExperienceSection