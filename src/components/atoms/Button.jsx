function Button({ children, onClick, type = 'button', variant = 'primary' }) {
    const styles = {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        secondary: 'border border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-50',
    }

    return (
    <button
        type={type}
        onClick={onClick}
        className={`rounded-lg px-5 py-2 font-medium transition-colors ${styles[variant]}`}
    >
        {children}
    </button>
    )
}

export default Button