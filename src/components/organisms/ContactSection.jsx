import Heading from '../atoms/Heading'
import SocialLinks from '../molecules/SocialLinks'
import ContactForm from './ContactForm'
import { socials } from '../../data/socials'

function ContactSection() {
    return (
        <section id="contacto" className="flex flex-col gap-6">
            <Heading level={2}>Contacto</Heading>
            <p className="text-slate-600">
                ¿Quieres trabajar conmigo o tienes alguna pregunta? Escríbeme o encuéntrame en mis redes.
            </p>
            <SocialLinks links={socials} />
            <div className="max-w-md">
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactSection