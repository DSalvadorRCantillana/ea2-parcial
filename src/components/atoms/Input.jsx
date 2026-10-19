function Input({
    id,
    name,
    type = 'text',
    value,
    onChange,
    placeholder,
    multiline = false,
    hasError = false,
}) {
    const Element = multiline ? 'textarea' : 'input'
    const borderColor = hasError ? 'border-red-500' : 'border-slate-300'

    return (
    <Element
        id={id}
        name={name}
        type={multiline ? undefined : type}
        rows={multiline ? 4 : undefined}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={hasError}
        className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${borderColor}`}
    />
    )
}

export default Input