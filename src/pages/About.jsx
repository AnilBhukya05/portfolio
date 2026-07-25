import { forwardRef } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const STATS = [
  { label: "CGPA", value: "8.68", suffix: "/10" },
  { label: "Naukri Young Turks Percentile", value: "95.22", suffix: "%" },
  { label: "Months Experience", value: "9", suffix: "+" },
  { label: "Projects Shipped", value: "4", suffix: "" },
];

const HIGHLIGHTS = [
  "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS",
  "Component-based architecture & pixel-perfect UI",
  "REST API integration & mobile-first design",
  "Agile development & cross-browser optimization",
];

const About = forwardRef((_, ref) => (
  <section ref={ref} id="about" className="section">
    <SectionHeading label="Get to know me" title="About Me" />

    <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 max-w-5xl mx-auto">
      {/* LEFT — Narrative */}
      <Reveal>
        <div className="h-full rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <p className="font-display text-2xl sm:text-3xl font-bold leading-snug mb-6">
              Frontend Developer turning{" "}
              <span className="text-accent">ideas</span> into fast,{" "}
              <span className="text-accent2">production-ready</span> interfaces.
            </p>

            <p className="text-white/60 text-[15px] leading-relaxed mb-4">
              I'm <b className="text-white font-medium">Anil Bhukya</b>, focused on building
              scalable web applications with clean, reusable component architecture and
              pixel-perfect, mobile-first UI — following modern Agile practices.
            </p>

            <p className="text-white/60 text-[15px] leading-relaxed">
              I completed my internship at{" "}
              <b className="text-white font-medium">Skyinten Technologies</b>, and I'm currently
              working as a <b className="text-white font-medium">Freelance Frontend Developer</b>{" "}
              at <b className="text-white font-medium">Vyomanexgen</b>. Graduated from{" "}
              <b className="text-white font-medium">CMR Engineering College</b> with a B.Tech in
              Computer Science.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
            <span className="text-white/40 text-sm">
              Outside of tech: events, photography, video editing.
            </span>
            <a
              href="mailto:anilbhukya1412@gmail.com"
              className="text-accent text-sm font-medium hover:text-accent2 transition-colors"
            >
              anilbhukya1412@gmail.com →
            </a>
          </div>
        </div>
      </Reveal>

      {/* RIGHT — Stats + Highlights */}
      <div className="flex flex-col gap-6">
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-display text-2xl font-bold text-white">
                  {s.value}
                  <span className="text-accent text-lg">{s.suffix}</span>
                </p>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
              Core Focus
            </p>
            <ul className="space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-white/65">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
));

export default About;