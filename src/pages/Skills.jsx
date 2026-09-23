import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const GROUPS = [
  {
    title: "Frontend Development",
    color: "bg-clay",
    items: [["React.js", 90], ["JavaScript (ES6+)", 88], ["HTML5 & CSS3", 92], ["Tailwind CSS", 90]],
  },
  {
    title: "UI Engineering",
    color: "bg-sage",
    items: [["Responsive / Mobile-first Design", 90], ["Figma to Code", 85], ["Component Architecture", 87]],
  },
  {
    title: "Tools & Workflow",
    color: "bg-clay2",
    items: [["Git & GitHub", 85], ["REST API Integration", 82], ["Vite", 80], ["Agile / Scrum", 78]],
  },
];

export default function Skills() {
  return (
    <section className="section pt-14">
      <SectionHeading eyebrow="What I work with" title="Skills & tools" subtitle="The core stack I use to design, build and ship websites and web apps." />
      <div className="grid md:grid-cols-3 gap-8">
        {GROUPS.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.1}>
            <div className="rounded-3xl border border-line p-7 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className={`h-2 w-2 rounded-full ${g.color}`} />
                <h3 className="font-serif text-lg">{g.title}</h3>
              </div>
              <div className="space-y-5">
                {g.items.map(([name, pct]) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-ink2">{name}</span>
                      <span className="text-ink/40 text-xs">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-paper2 overflow-hidden">
                      <div className={`h-full rounded-full ${g.color}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}