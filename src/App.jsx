import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useRef } from "react"
function App() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <>
            <Header
                linkToAbout={() => scrollToSection(aboutRef)}
                linkToProjects={() => scrollToSection(projectsRef)}
                linkToContact={() => scrollToSection(contactRef)}
            />
            <Introduction />
            <About sectionRef={aboutRef} />
            <Projects sectionRef={projectsRef} />
            <Contact sectionRef={contactRef} />
            <Footer />
        </>
    ) 
}

export default App
