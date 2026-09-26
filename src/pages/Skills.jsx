import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend Development",
    note: "The stack I reach for on almost every project — this is where I'm fastest and most comfortable.",
    skills: [
      { name: "React.js", level: 3 },
      { name: "JavaScript (ES6+)", level: 3 },
      { name: "HTML5 & CSS3", level: 3 },
      { name: "Tailwind CSS", level: 3 },
    ],
  },
  {
    id: "ui",
    label: "UI Engineering",
    note: "This is the part of the job I actually enjoy most — turning a design file into something that feels right on every screen.",
    skills: [
      { name: "Responsive / Mobile-first Design", level: 3 },
      { name: "Figma to Code", level: 2 },
      { name: "Component Architecture", level: 3 },
      { name: "Micro-interactions & Motion", level: 2 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    note: "The everyday tooling that keeps a freelance project organized between me and a client.",
    skills: [
      { name: "Git & GitHub", level: 3 },
      { name: "REST API Integration", level: 2 },
      { name: "Vite", level: 2 },
      { name: "Agile / Scrum", level: 2 },
    ],
  },
];

const LEVEL_LABEL = { 1: "Learning", 2: "Comfortable", 3: "Daily driver" };
const LEVEL_COLOR = { 1: "text-ink/40", 2: "text-sage", 3: "text-clay" };
const LEARNING = ["TypeScript", "Next.js", "Node.js backend basics"];

function SkillChip({ name, level }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 hover:border-clay/50 hover:bg-white transition-all duration-200">
      <span className="text-sm text-ink">{name}</span>
      <div className="flex items-center gap-2 shrink-0">
        <span className={`text-[11px] font-medium ${LEVEL_COLOR[level]}`}>
          {LEVEL_LABEL[level]}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3].map((d) => (
            <span
              key={d}
              className={`h-1.5 w-1.5 rounded-full ${d <= level ? "bg-clay" : "bg-line"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const category = CATEGORIES.find((c) => c.id === active);

  return (
    <section className="section pt-14">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills & tools"
        subtitle="Not a checklist — this is genuinely how I'd rank my own comfort with each, in my own words."
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              active === c.id
                ? "bg-ink text-paper border-ink"
                : "border-line text-ink2 hover:border-clay hover:text-clay"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <Reveal key={category.id}>
        <div className="rounded-3xl border border-line p-7 sm:p-9">
          <p className="text-ink2 text-sm leading-relaxed mb-7 max-w-xl">
            {category.note}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {category.skills.map((s) => (
              <SkillChip key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-3xl border border-line bg-paper2/50 p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-4">
            Currently exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {LEARNING.map((t) => (
              <span
                key={t}
                className="text-sm font-medium px-4 py-2 rounded-full bg-white border border-line text-ink2"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-ink2 text-sm mt-4 leading-relaxed">
            I like keeping one foot outside my comfort zone — these are the
            things I'm actively picking up next.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
