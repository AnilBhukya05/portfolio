import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const HIGHLIGHTS = [
  "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS",
  "Component-based architecture & pixel-perfect UI",
  "REST API integration & mobile-first design",
  "Agile workflows & cross-browser optimization",
];

const WHY = [
  ["Direct communication", "No account managers or middlemen — you work with me directly, start to finish."],
  ["Clean, maintainable code", "Every project is built to be easy to hand off, extend or maintain later."],
  ["Fast turnaround", "Clear scope, regular updates, and no disappearing acts."],
  ["Support after launch", "I stick around to fix bugs, add features or make tweaks post-launch."],
];

export default function About() {
  return (
    <>
      <section className="section pt-14">
        <SectionHeading eyebrow="About me" title="The developer behind the screen" />
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
          <Reveal>
            <div className="space-y-5 text-ink2 leading-relaxed">
              <p className="text-xl font-serif text-ink leading-snug">
                I'm Anil Bhukya, a frontend developer who turns ideas into fast, production-ready websites
                and web applications.
              </p>
              <p>
                I build scalable web applications with clean, reusable component architecture and
                mobile-first UI, following modern Agile practices. Every project starts with understanding
                what your users and your business actually need — not just making something that looks nice.
              </p>
              <p>
                I completed my internship at <b className="text-ink font-medium">Skyinten Technologies</b>,
                and I'm currently working as a <b className="text-ink font-medium">Freelance Frontend Developer</b> with{" "}
                <b className="text-ink font-medium">Vyomanexgen</b>, where I built a production e-commerce
                platform end-to-end. I graduated from <b className="text-ink font-medium">CMR Engineering College</b>{" "}
                with a B.Tech in Computer Science.
              </p>
              <p>
                Outside of client work, you'll find me at events, behind a camera, or editing video — I like
                building things people actually enjoy using.
              </p>
              <a href="mailto:anilbhukya1412@gmail.com" className="inline-block text-clay font-medium hover:underline">
                anilbhukya1412@gmail.com →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-paper2/60 border border-line p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-5">Core focus</p>
              <ul className="space-y-3.5">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-clay shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-line">
                {[["8.68", "CGPA / 10"], ["95.22%", "Naukri Young Turks"]].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-serif text-2xl">{v}</p>
                    <p className="text-ink2 text-[11px] mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <SectionHeading eyebrow="Why clients work with me" title="What working together looks like" />
        <div className="grid sm:grid-cols-2 gap-6">
          {WHY.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="rounded-2xl border border-line p-6 hover:border-clay/40 transition-colors">
                <h3 className="font-serif text-lg">{t}</h3>
                <p className="text-ink2 text-sm mt-2 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary">Let's talk about your project →</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}