function MainTemplate({ header, footer, children }) {
    return (
        <div className="min-h-screen bg-slate-50">
        {header}
        <main className="mx-auto flex max-w-5xl flex-col gap-16 px-8 py-12">{children}</main>
        <div className="mx-auto max-w-5xl px-8">{footer}</div>
        </div>
    )
}

export default MainTemplate