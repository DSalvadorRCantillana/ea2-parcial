import Avatar from '../atoms/Avatar'
import Heading from '../atoms/Heading'
import { profile } from '../../data/profile'

function ProfileSection() {
    const { name, role, description, photo } = profile

    return (
        <section
            id="personal"
            className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left"
        >
            <Avatar src={photo} alt={`Fotografía de ${name}`} />
            <div className="flex flex-col gap-2">
                <Heading level={1}>{name}</Heading>
                <p className="text-lg font-medium text-indigo-600">{role}</p>
                <p className="max-w-xl text-slate-600">{description}</p>
            </div>
        </section>
    )
}

export default ProfileSection