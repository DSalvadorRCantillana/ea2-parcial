import Heading from '../atoms/Heading'
import TimelineItem from '../molecules/TimelineItem'
import { education } from '../../data/education'

function EducationSection() {
    return (
        <section id="estudios" className="flex flex-col gap-6">
            <Heading level={2}>Estudios</Heading>
            <ol>
                {education.map(({ id, institution, title, year }) => (
                    <TimelineItem key={id} title={title} subtitle={institution} period={year} />
                ))}
            </ol>
        </section>
    )
}

export default EducationSection