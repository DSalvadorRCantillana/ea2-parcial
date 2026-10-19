import MainTemplate from '../templates/MainTemplate'
import Navbar from '../components/organisms/Navbar'
import ProfileSection from '../components/organisms/ProfileSection'
import ExperienceSection from '../components/organisms/ExperienceSection'
import EducationSection from '../components/organisms/EducationSection'
import ProjectsSection from '../components/organisms/ProjectsSection'
import ContactSection from '../components/organisms/ContactSection'
import Footer from '../components/organisms/Footer'

function HomePage() {
    return (
        <MainTemplate header={<Navbar />} footer={<Footer />}>
        <ProfileSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
        </MainTemplate>
    )
}

export default HomePage