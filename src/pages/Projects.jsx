import { forwardRef } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";

const PROJECTS = [
  {
    title: "JobX Portal",
    description:
      "A centralized job aggregation platform pulling opportunities from multiple job portals into a single, unified search experience.",
    tags: ["React.js", "Tailwind CSS", "Job Search"],
    image: project1,
    link: "https://jobxportal.vercel.app/",
  },
  {
    title: "Quiz Application",
    description:
    "A dynamic quiz app with API-driven questions, category/difficulty filtering, countdown timer, and live score tracking.",
    tags: ["React JS", "Web Design"],
    image: project3,
    link: "https://anil-react-quiz.vercel.app/",
  },
  {
    title: "Face Recognition Attendance System",
    description:
    "A real-time attendance system using facial recognition, published as IEEE research at ICAISS 2025 (KNN algorithm).",
    tags: ["Computer Vision", "Published — IEEE ICAISS 2025"],
    image: project2,
    link: "https://github.com/AnilBhukya05/Face-Recognition-Based-Attendance-System",
  },
  {
    title: "Recipe Finder App",
    description:
      "A responsive recipe discovery tool with live API-based search, category filtering, and a clean mobile-first interface.",
    tags: ["Web Development", "API Integration"],
    image: project4,
    link: "https://github.com/AnilBhukya05/Recipe-Finder-App",
  },
];

const Projects = forwardRef((_, ref) => (
  <section
    ref={ref}
    id="projects"
    style={{
      padding: "96px 24px",
      maxWidth: "1000px",
      margin: "0 auto",
    }}
  >
    <SectionHeading label="What I've built" title="Projects" />
    <div>
      {PROJECTS.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.06}>
          <ProjectCard
            {...p}
            index={String(i + 1).padStart(2, "0")}
            reverse={i % 2 === 1}
          />
        </Reveal>
      ))}
    </div>
  </section>
));

export default Projects;