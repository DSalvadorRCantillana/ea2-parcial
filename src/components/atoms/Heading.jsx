function Heading({ children, level = 2 }) {
    const Tag = `h${level}`
    const sizes = {
    1: 'text-4xl font-bold',
    2: 'text-2xl font-semibold',
    3: 'text-xl font-semibold',
    }

    return <Tag className={`text-slate-900 ${sizes[level]}`}>{children}</Tag>
}

export default Heading