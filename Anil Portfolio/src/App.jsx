import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  const heroRef = useRef(null); 
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar
        onHome={() => scrollTo(heroRef)}   
        onAbout={() => scrollTo(aboutRef)}
        onProjects={() => scrollTo(projectsRef)}
        onExperience={() => scrollTo(experienceRef)}
        onSkills={() => scrollTo(skillsRef)}
        onCertificates={() => scrollTo(certificatesRef)}
        onContact={() => scrollTo(contactRef)}
      />

      <Hero ref={heroRef} />   

      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Certificates ref={certificatesRef} />
      <Contact ref={contactRef} />
    </>
  );
}
