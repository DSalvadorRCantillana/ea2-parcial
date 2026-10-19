function Label({ htmlFor, children }) {
    return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700">
        {children}
    </label>
    )
}

export default Label