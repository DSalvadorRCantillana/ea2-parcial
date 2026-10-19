import { profile } from '../../data/profile'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
            <p>
                © {currentYear} {profile.name}. Todos los derechos reservados.
            </p>
            <p>
                {profile.email} · {profile.location}
            </p>
        </footer>
    )
}

export default Footer