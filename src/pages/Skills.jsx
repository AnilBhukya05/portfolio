import { forwardRef } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SkillsOrbit from "../components/SkillsOrbit";

const LEGEND = [
  { title: "Frontend Development", color: "#4fc3f7" },
  { title: "UI Engineering", color: "#7c5cff" },
  { title: "Software Development", color: "#34d399" },
  { title: "Tools & Technologies", color: "#fbbf24" },
];

const Skills = forwardRef((_, ref) => (
  <section ref={ref} id="skills" className="section">
    <SectionHeading
      label="What I work with"
      title="Skills"
      subtitle="Hover any node to see the skill. Grouped into orbiting rings by category."
    />

    <Reveal>
      <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
        <SkillsOrbit />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-6 py-6 border-t border-white/5">
          {LEGEND.map((l) => (
            <div key={l.title} className="flex items-center gap-2 text-xs text-white/50 font-mono">
              <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
              {l.title}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
));

export default Skills;