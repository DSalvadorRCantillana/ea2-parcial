function LinkButton({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-indigo-600 bg-white px-5 py-2 font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
        >
            {children}
        </a>
    )
}

export default LinkButton