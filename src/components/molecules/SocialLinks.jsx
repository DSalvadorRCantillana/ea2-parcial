import LinkButton from '../atoms/LinkButton'

function SocialLinks({ links }) {
    return (
        <ul className="flex flex-wrap gap-3">
            {links.map(({ id, label, url }) => (
                <li key={id}>
                    <LinkButton href={url}>{label}</LinkButton>
                </li>
            ))}
        </ul>
    )
}

export default SocialLinks