function Avatar({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="h-40 w-40 shrink-0 rounded-full border-4 border-indigo-100 object-cover shadow-md"
        />
    )
}

export default Avatar