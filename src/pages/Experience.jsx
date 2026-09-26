import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import AnimatedCounter from "../components/AnimatedCounter";
import Magnetic from "../components/Magnetic";
import resumeFile from "../assets/resume.pdf";

const JOBS = [
  {
    role: "Frontend Developer",
    type: "Freelance",
    company: "Vyomanexgen",
    time: "Mar 2026",
    timeEnd: "Present",
    current: true,
    summary: "Built and shipped a production e-commerce platform end-to-end.",
    points: [
      "Built and shipped a production e-commerce platform with React.js and Tailwind CSS, end-to-end.",
      "Designed a scalable component library for catalogs, navigation and checkout, cutting future dev time.",
      "Delivered fully responsive, mobile-first UI across all screens and browsers.",
      "Optimized performance and accessibility for faster loads and stability.",
    ],
    tags: ["React.js", "Tailwind CSS", "E-commerce"],
    link: "https://www.cfourindia.com/",
  },
  {
    role: "Frontend Developer Intern",
    company: "Skyinten Technologies Pvt. Ltd. — Hyderabad",
    time: "Nov 2025",
    timeEnd: "Feb 2026",
    current: false,
    summary:
      "Converted Figma designs into pixel-perfect, accessible React components.",
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

const EDUCATION = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "CMR Engineering College, Hyderabad",
  time: "2021",
  timeEnd: "2025",
  points: [
    "Graduated with a CGPA of 8.68/10.",
    "Scored 95.22 percentile in Naukri Campus Young Turks, a national-level skill competition.",
    "Co-authored and published IEEE research on a face recognition attendance system (ICAISS 2025).",
  ],
};

const STATS = [
  { value: 1, suffix: "+", label: "Year of hands-on experience" },
  { value: 2, suffix: "", label: "Companies worked with" },
  { value: 2, suffix: "", label: "Production platform shipped" },
];

const STRENGTHS = [
  [
    "Clear communication",
    "I explain what I'm doing and why, in plain language — no jargon dumps.",
  ],
  [
    "Ownership",
    "If something breaks after launch, that's still my problem to fix, not just yours.",
  ],
  [
    "Adaptability",
    "Comfortable picking up a new API, design system or team's conventions quickly.",
  ],
  [
    "Reliability",
    "If I say Friday, I mean Friday — and I'll tell you early if something's slipping.",
  ],
];

const ALL_TAGS = [...new Set(JOBS.flatMap((j) => j.tags))];

function JobCard({ job, i, dimmed }) {
  const [expanded, setExpanded] = useState(i === 0);

  return (
    <Reveal delay={i * 0.1}>
      <motion.div
        animate={{ opacity: dimmed ? 0.35 : 1 }}
        transition={{ duration: 0.25 }}
        className="relative pl-9 text-left"
      >
        <span
          className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
            job.current ? "bg-clay border-clay" : "bg-paper border-ink/25"
          }`}
        />
        <div className="flex items-center gap-2 mb-2 text-xs font-medium text-clay">
          <span>{job.time}</span>
          <span className="text-ink/25">→</span>
          <span className={job.current ? "text-sage" : "text-ink2"}>
            {job.timeEnd}
          </span>
          {job.current && (
            <span className="ml-1 px-2 py-0.5 rounded-full bg-sage/10 text-sage text-[10px] uppercase tracking-wide">
              Current
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-line bg-white/50 p-7 sm:p-8 hover:border-clay/40 transition-colors">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="w-full text-left"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl">
                  {job.role}
                  {job.type && (
                    <span className="text-ink2 font-sans text-base font-normal">
                      {" "}
                      · {job.type}
                    </span>
                  )}
                </h3>
                <p className="text-ink2 text-sm mt-1">{job.company}</p>
              </div>
              <span
                className={`h-8 w-8 shrink-0 rounded-full border border-ink/15 flex items-center justify-center text-sm transition-transform duration-300 ${
                  expanded ? "rotate-45 border-clay text-clay" : "text-ink/40"
                }`}
              >
                +
              </span>
            </div>
            {!expanded && (
              <p className="text-ink2 text-sm mt-4 leading-relaxed">
                {job.summary}
              </p>
            )}
          </button>

          <div
            className="grid transition-all duration-300 ease-out"
            style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <ul className="space-y-2.5 mt-5 mb-1">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-ink2 leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-clay/70 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-5">
            {job.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium px-3 py-1 rounded-full bg-paper2 text-ink2"
              >
                {t}
              </span>
            ))}
            {job.link && (
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="ml-auto text-xs font-semibold px-4 py-1.5 rounded-full bg-ink text-paper hover:bg-clay transition-colors"
              >
                Visit site →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

function EducationCard({ i }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={i * 0.1}>
      <div className="relative pl-9 text-left">
        <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 bg-paper border-ink/25" />
        <div className="flex items-center gap-2 mb-2 text-xs font-medium text-clay">
          <span>{EDUCATION.time}</span>
          <span className="text-ink/25">→</span>
          <span className="text-ink2">{EDUCATION.timeEnd}</span>
        </div>
        <div className="rounded-3xl border border-line bg-paper2/40 p-7 sm:p-8 hover:border-clay/40 transition-colors">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="w-full text-left"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl">{EDUCATION.degree}</h3>
                <p className="text-ink2 text-sm mt-1">{EDUCATION.school}</p>
              </div>
              <span
                className={`h-8 w-8 shrink-0 rounded-full border border-ink/15 flex items-center justify-center text-sm transition-transform duration-300 ${
                  expanded ? "rotate-45 border-clay text-clay" : "text-ink/40"
                }`}
              >
                +
              </span>
            </div>
          </button>
          <div
            className="grid transition-all duration-300 ease-out"
            style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <ul className="space-y-2.5 mt-5">
                {EDUCATION.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-ink2 leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-clay/70 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const [activeTag, setActiveTag] = useState(null);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isDimmed = (job) => activeTag && !job.tags.includes(activeTag);

  return (
    <section className="section pt-14 flex flex-col items-center">
      <SectionHeading
        eyebrow="Where I've worked"
        title="Experience"
        align="center"
      />

      {/* STATS STRIP */}
      <Reveal>
        <div className="grid sm:grid-cols-3 gap-6 mb-14 max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-paper2/50 p-5 text-center"
            >
              <p className="font-serif text-3xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-ink2 text-xs mt-1 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* TAG FILTER */}
      <Reveal delay={0.05}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/40 mr-1">
            Filter by stack:
          </span>
          {ALL_TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(activeTag === t ? null : t)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                activeTag === t
                  ? "bg-ink text-paper border-ink"
                  : "border-line text-ink2 hover:border-clay hover:text-clay"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      {/* TIMELINE — jobs, then education */}
      <div ref={trackRef} className="w-full max-w-3xl mx-auto relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
        <motion.div
          className="absolute left-[7px] top-2 w-px bg-clay origin-top"
          style={{ height: lineHeight }}
        />
        <div className="space-y-10">
          {JOBS.map((job, i) => (
            <JobCard key={job.company} job={job} i={i} dimmed={isDimmed(job)} />
          ))}
          <EducationCard i={JOBS.length} />
        </div>
      </div>

      {/* BEYOND THE CODE */}
      <Reveal>
        <div className="w-full max-w-3xl mx-auto mt-16">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-6 text-center">
            Beyond the resume
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {STRENGTHS.map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-line p-5 text-left hover:border-clay/40 transition-colors"
              >
                <h4 className="font-serif text-base">{t}</h4>
                <p className="text-ink2 text-sm mt-1.5 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CERTIFICATIONS TEASER */}
      <Reveal delay={0.05}>
        <Link
          to="/certifications"
          className="w-full max-w-3xl mx-auto mt-8 rounded-2xl border border-line bg-paper2/40 p-5 flex items-center justify-between gap-4 hover:border-clay/40 hover:bg-white transition-all group"
        >
          <div>
            <p className="text-sm font-medium text-ink">
              Also published: IEEE research & certifications
            </p>
            <p className="text-ink2 text-xs mt-1">
              Deloitte, Google Cybersecurity, and more — see the full list
            </p>
          </div>
          <span className="h-9 w-9 shrink-0 rounded-full border border-ink/15 flex items-center justify-center text-sm group-hover:bg-clay group-hover:text-white group-hover:border-clay group-hover:rotate-45 transition-all duration-300">
            ↗
          </span>
        </Link>
      </Reveal>

      {/* RESUME CTA */}
      <Reveal>
        <div className="w-full max-w-3xl mx-auto mt-8 rounded-3xl border border-line bg-ink text-paper p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-2xl">Want the full picture?</h3>
            <p className="text-paper/60 text-sm mt-2">
              Download my resume for the complete rundown of my experience and
              education.
            </p>
          </div>
          <Magnetic strength={0.3}>
            <a
              href={resumeFile}
              download="Anil_Bhukya_Resume.pdf"
              className="btn-primary !bg-paper !text-ink hover:!bg-clay hover:!text-white shrink-0 whitespace-nowrap"
            >
              Download resume ↓
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
