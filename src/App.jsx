import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import LogoSection from "../sections/LogoSection.jsx";
import FeaturedCards from "../sections/FeaturedCards.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import TechStack from "../sections/TechStack.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";

const App = () => {
    return <main>
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <LogoSection />
            <FeaturedCards />
            <ExperienceSection />
            <TechStack />
            <Contact />
            <Footer />
        </>
    </main>;
};

export default App;