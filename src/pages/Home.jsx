import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import profile from "../assets/profile.webp";
import resumeFile from "../assets/resume.pdf";
import project1 from "../assets/project1.webp";
import project3 from "../assets/project3.webp";

const STACK = ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "Git & GitHub", "Figma to Code", "Responsive Design", "Vite"];

const SERVICES = [
  { title: "Website Development", desc: "Custom, responsive websites built from scratch with modern React." },
  { title: "Web Applications", desc: "Dynamic dashboards, tools and portals with clean, reusable code." },
  { title: "E-commerce Stores", desc: "Product catalogs, carts and checkout flows that convert." },
];

export default function Home() {
  const cardRef = useRef(null);

  const onMove = (e) => {
    if (window.innerWidth < 1024 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rY = (x / rect.width - 0.5) * 14;
    const rX = (y / rect.height - 0.5) * -14;
    cardRef.current.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
  };
  const reset = () => cardRef.current && (cardRef.current.style.transform = "rotateX(0) rotateY(0)");

  return (
    <>
      <section className="section pt-8 sm:pt-14 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
            Freelance Web Developer · Based in Hyderabad, India
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-serif text-[38px] sm:text-6xl leading-[1.08] mt-2"
          >
            I build websites that feel <em className="text-clay not-italic font-serif italic">crafted</em>, not templated.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-ink2 mt-6 max-w-lg leading-relaxed"
          >
            Hi, I'm Anil — a frontend developer who partners with businesses, startups and creators to
            design and ship fast, responsive websites and web apps that actually move the needle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="flex flex-wrap gap-4 mt-9"
          >
            <Link to="/contact" className="btn-primary">Let's work together →</Link>
            <Link to="/work" className="btn-outline">See my work</Link>
          </motion.div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-14 pt-8 border-t border-line">
            {[["9+", "Months freelancing & internship"], ["4", "Projects shipped"], ["8.68", "CGPA"]].map(([v, l]) => (
              <div key={l}>
                <p className="font-serif text-3xl">{v}</p>
                <p className="text-ink2 text-xs mt-1 max-w-[130px] leading-snug">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end [perspective:1400px]">
          <div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={reset}
            className="w-[280px] sm:w-[320px] rounded-[2rem] bg-white border border-line p-4 shadow-soft transition-transform duration-200 [transform-style:preserve-3d]"
          >
            <img src={profile} alt="Anil Bhukya" className="w-full rounded-2xl object-cover aspect-[4/5]" />
            <div className="flex items-center justify-between mt-4 px-1">
              <div>
                <p className="font-semibold text-sm">Anil Bhukya</p>
                <p className="text-ink2 text-xs">Frontend & React Developer</p>
              </div>
              <a
                href={resumeFile}
                download="Anil_Bhukya_Resume.pdf"
                className="h-9 w-9 rounded-full bg-paper2 flex items-center justify-center text-sm hover:bg-clay hover:text-white transition-colors"
                title="Download CV"
              >
                ⭳
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-paper2/60 py-5 overflow-hidden">
        <div className="flex gap-10 w-max animate-marquee">
          {[...STACK, ...STACK].map((s, i) => (
            <span key={i} className="text-ink/35 font-serif italic text-lg whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <SectionHeading eyebrow="What I do" title="Services built around your business goals" />
            <Link to="/services" className="text-sm font-medium text-clay hover:underline shrink-0">
              View all services →
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="rounded-3xl border border-line p-7 h-full hover:border-clay/40 hover:bg-white transition-all">
                <h3 className="font-serif text-lg">{s.title}</h3>
                <p className="text-ink2 text-sm mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <SectionHeading eyebrow="Selected work" title="A few things I've recently built" />
            <Link to="/work" className="text-sm font-medium text-clay hover:underline shrink-0">
              View full portfolio →
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-7">
          <Reveal>
            <ProjectCard
              index="01"
              title="JobX Portal"
              description="A centralized job aggregation platform pulling opportunities from multiple job portals into one unified search experience."
              tags={["React.js", "Tailwind CSS"]}
              image={project1}
              link="https://jobxportal.vercel.app/"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ProjectCard
              index="02"
              title="Quiz Application"
              description="A dynamic quiz app with API-driven questions, difficulty filters, a countdown timer and live scoring."
              tags={["React.js", "Web Design"]}
              image={project3}
              link="https://anil-react-quiz.vercel.app/"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 sm:px-10 pb-24">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-ink text-paper px-8 sm:px-16 py-16 text-center">
            <p className="eyebrow !text-clay2">Got a project in mind?</p>
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight mt-2">
              Let's build something your users will love.
            </h2>
            <Link to="/contact" className="btn-primary !bg-paper !text-ink hover:!bg-clay hover:!text-white mt-9 inline-flex">
              Start the conversation →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}