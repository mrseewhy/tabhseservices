import AboutSection from "../components/AboutSection"
import Clients from "../components/Clients"
import Contact from "../components/Contact"
import CTA from "../components/CTA"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyUs from "../components/WhyUs"

const Home = () => {
    return (
        <div>
            <Hero />
            <Clients />
            <AboutSection />
            <Services />
            <WhyUs />
            <CTA />
            <Contact />
        </div>
    )
}

export default Home