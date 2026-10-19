function ExternalLink({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
        >
            {children}
        </a>
    )
}

export default ExternalLink