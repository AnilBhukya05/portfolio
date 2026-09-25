import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    description: "A centralized job aggregation platform pulling opportunities from multiple job portals into a single, unified search experience.",
    tags: ["React.js", "Tailwind CSS", "Job Search"],
    image: project1,
    link: "https://jobxportal.vercel.app/",
    category: "Web App",
    status: "Live",
  },
  {
    title: "E-commerce Platform — Vyomanexgen",
    description: "End-to-end freelance build for a live e-commerce brand — product catalog, cart, checkout flow and a reusable component system, currently in production.",
    tags: ["React.js", "Tailwind CSS", "E-commerce", "Freelance"],
    link: "https://www.cfourindia.com/",
    category: "Client Work",
    status: "Confidential client",
  },
  {
    title: "Frontend Development — Skyinten Technologies",
    description: "Built responsive, pixel-perfect interfaces from Figma designs during a frontend internship, integrating REST APIs for dynamic data rendering.",
    tags: ["React.js", "Figma-to-Code", "REST API"],
    link: "https://www.skyinten.com/",
    category: "Client Work",
    status: "Internship",
  },
  {
    title: "Quiz Application",
    description: "A dynamic quiz app with API-driven questions, category/difficulty filtering, countdown timer, and live score tracking.",
    tags: ["React.js", "Web Design"],
    image: project3,
    link: "https://anil-react-quiz.vercel.app/",
    category: "Web App",
    status: "Live",
  },
  {
    title: "Face Recognition Attendance System",
    description: "A real-time attendance system using facial recognition, published as IEEE research at ICAISS 2025 (KNN algorithm).",
    tags: ["Computer Vision", "Published — IEEE 2025"],
    image: project2,
    link: "https://github.com/AnilBhukya05/Face-Recognition-Based-Attendance-System",
    category: "Research",
    status: "Published",
  },
  {
    title: "Recipe Finder App",
    description: "A responsive recipe discovery tool with live API-based search, category filtering, and a clean mobile-first interface.",
    tags: ["React.js", "API Integration"],
    image: project4,
    link: "https://github.com/AnilBhukya05/Recipe-Finder-App",
    category: "Website",
    status: "Open Source",
  },
];

const FEATURED = PROJECTS[0];
const FILTERS = ["All", "Client Work", "Web App", "Website", "Research"];

function countFor(f) {
  return f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const isAll = filter === "All";
  const base = isAll ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  // Spotlight only replaces itself out of the grid when we're on "All" — in a
  // specific filter, JobX Portal shows as a normal card like everything else.
  const list = isAll ? base.filter((p) => p.title !== FEATURED.title) : base;

  return (
    <>
      <section className="section pt-14 pb-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Things I've designed & built"
          subtitle="A mix of freelance client work, personal builds and research — all built with clean, responsive React front-ends."
        />
      </section>

      {/* FEATURED SPOTLIGHT — only shown in the unfiltered "All" view */}
      {isAll && (
        <section className="section pt-0 pb-16">
          <Reveal>
            <a
              href={FEATURED.link}
              target="_blank"
              rel="noreferrer"
              className="group grid lg:grid-cols-2 gap-0 rounded-[2rem] border border-line bg-white/60 overflow-hidden hover:shadow-soft transition-all duration-500"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-clay text-white text-[11px] font-semibold tracking-wide uppercase">
                  Featured
                </span>
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <span className="eyebrow">{FEATURED.category}</span>
                <h3 className="font-serif text-3xl sm:text-4xl leading-tight mb-4 flex items-center gap-3">
                  {FEATURED.title}
                  <span className="h-9 w-9 shrink-0 rounded-full border border-ink/15 flex items-center justify-center text-sm group-hover:bg-clay group-hover:text-white group-hover:border-clay group-hover:rotate-45 transition-all duration-300">
                    ↗
                  </span>
                </h3>
                <p className="text-ink2 leading-relaxed mb-6 max-w-md">{FEATURED.description}</p>
                <div className="flex flex-wrap gap-2">
                  {FEATURED.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-3 py-1 rounded-full bg-paper2 text-ink2">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        </section>
      )}

      {/* FILTERED GRID */}
      <section className="section pt-0">
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === f ? "bg-ink text-paper border-ink" : "border-line text-ink2 hover:border-clay hover:text-clay"
              }`}
            >
              {f}
              <span
                className={`text-[10px] h-4 min-w-4 px-1 rounded-full flex items-center justify-center ${
                  filter === f ? "bg-white/20 text-paper" : "bg-paper2 text-ink/40"
                }`}
              >
                {countFor(f)}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard {...p} index={String(i + 1).padStart(2, "0")} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <p className="text-ink2 text-center py-16">No projects in this category yet.</p>
        )}
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 pt-4 pb-24">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-ink text-paper px-8 sm:px-16 py-16 text-center">
            <p className="eyebrow !text-clay2">Like what you see?</p>
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight mt-2">
              Your project could be next on this list.
            </h2>
            <Link to="/contact" className="btn-primary !bg-paper !text-ink hover:!bg-clay hover:!text-white mt-9 inline-flex">
              Let's build it →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}