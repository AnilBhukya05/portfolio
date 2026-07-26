import { useRef, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

const AmbientBackground = lazy(() => import("./components/AmbientBackground"));

export default function App() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    certificates: useRef(null),
    contact: useRef(null),
  };
  const scrollTo = (r) => r.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Suspense fallback={null}>
        <AmbientBackground />
      </Suspense>
      <Navbar
        onHome={() => scrollTo(refs.home)}
        onAbout={() => scrollTo(refs.about)}
        onExperience={() => scrollTo(refs.experience)}
        onProjects={() => scrollTo(refs.projects)}
        onSkills={() => scrollTo(refs.skills)}
        onCertificates={() => scrollTo(refs.certificates)}
        onContact={() => scrollTo(refs.contact)}
      />
      <main className="relative z-10">
        <Home ref={refs.home} />
        <About ref={refs.about} />
        <Experience ref={refs.experience} />
        <Projects ref={refs.projects} />
        <Skills ref={refs.skills} />
        <Certificates ref={refs.certificates} />
        <Contact ref={refs.contact} />
      </main>
      <Footer />
    </div>
  );
}