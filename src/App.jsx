import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import TechStack from "../sections/TechStack.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";
import CapabilitiesSection from "../sections/CapablitiesSection.jsx";

const App = () => {
    return <main>
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <CapabilitiesSection />
            <ExperienceSection />
            <TechStack />
            <Contact />
            <Footer />
        </>
    </main>;
};

export default App;