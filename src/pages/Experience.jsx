import { forwardRef } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const JOBS = [
  {
    role: "Frontend Developer",
    type: "Freelance",
    company: "Vyomanexgen",
    time: "Apr 2026",
    timeEnd: "Present",
    current: true,
    points: [
      "Built and shipped a production e-commerce platform with React.js and Tailwind CSS, end-to-end.",
      "Designed a scalable component library for catalogs, navigation and checkout, cutting future dev time.",
      "Delivered fully responsive, mobile-first UI across all screens and browsers.",
      "Optimized performance and accessibility for faster loads and stability.",
    ],
    tags: ["React.js", "Tailwind CSS", "E-commerce"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Skyinten Technologies Pvt. Ltd. — Hyderabad",
    time: "Nov 2025",
    timeEnd: "Feb 2026",
    current: false,
    points: [
      "Developed responsive React.js interfaces using reusable components and modern JS.",
      "Converted Figma designs into pixel-perfect, accessible UI components.",
      "Integrated REST APIs for dynamic data rendering.",
      "Collaborated in Agile workflows to ship feature enhancements.",
    ],
    tags: ["React.js", "Figma-to-Code", "REST API"],
    link: "https://www.skyinten.com/",
  },
];

const Experience = forwardRef((_, ref) => (
  <section ref={ref} id="experience" className="section">
    <SectionHeading label="Where I've worked" title="Experience" />

    <div className="max-w-3xl mx-auto relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-white/15 to-transparent" />

      <div className="space-y-14">
        {JOBS.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.12}>
            <div className="relative pl-8 sm:pl-10">
              {/* Node marker */}
              <span
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] sm:h-[19px] sm:w-[19px] rounded-full border-2 ${
                  job.current
                    ? "bg-accent border-accent shadow-[0_0_16px_rgba(79,195,247,0.7)]"
                    : "bg-ink border-white/30"
                }`}
              />

              {/* Date */}
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent tracking-wide">
                <span>{job.time}</span>
                <span className="text-white/25">→</span>
                <span className={job.current ? "text-green-400" : "text-white/50"}>
                  {job.timeEnd}
                </span>
                {job.current && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 text-[10px] uppercase tracking-widest">
                    Current
                  </span>
                )}
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.015] border border-white/10 p-6 sm:p-8 hover:border-accent/40 transition-all duration-300">
                <h3 className="font-display text-xl font-bold">
                  {job.role}
                  {job.type && <span className="text-white/40 font-normal"> · {job.type}</span>}
                </h3>
                <p className="text-white/45 text-sm mt-1 mb-5">{job.company}</p>

                <ul className="space-y-2.5 mb-6">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent/70 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/8 border border-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto text-xs font-semibold px-4 py-1.5 rounded-full bg-accent text-black hover:bg-accent2 hover:translate-x-1 transition-all"
                    >
                      Visit Site →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
));

export default Experience;