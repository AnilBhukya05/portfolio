import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Estimator from "../components/Estimator";
import Faq from "../components/Faq";

const SERVICES = [
  {
    number: "01",
    title: "Website Design & Development",
    description: "Custom, responsive websites built from scratch — no bloated templates.",
    points: ["Mobile-first, pixel-perfect layouts", "Built with React.js & Tailwind CSS", "SEO-friendly structure & fast load times"],
  },
  {
    number: "02",
    title: "Web Applications",
    description: "Interactive dashboards, tools and internal portals for your workflows.",
    points: ["REST API integration", "Reusable component architecture", "Forms, filters, real-time UI"],
  },
  {
    number: "03",
    title: "E-commerce Websites",
    description: "Full storefronts — catalog, cart and checkout, built to convert.",
    points: ["Product catalog & category pages", "Cart, checkout & responsive UI", "Performance-focused, scalable structure"],
  },
  {
    number: "04",
    title: "Website Redesign & Optimization",
    description: "Give an outdated or slow site a modern, fast, mobile-friendly rebuild.",
    points: ["UI/UX modernization", "Speed & accessibility improvements", "Cross-browser & cross-device fixes"],
  },
  {
    number: "05",
    title: "Landing Pages & Portfolios",
    description: "Sharp, focused single-page sites for personal brands and launches.",
    points: ["Conversion-focused layout", "Custom animations & interactions", "Quick turnaround"],
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description: "Ongoing help after launch — because a website is never really done.",
    points: ["Bug fixes & content updates", "New feature additions", "Performance monitoring"],
  },
];

const STEPS = [
  ["Discovery", "We talk through your goals, audience and must-haves before anything gets built.", "A short call or written brief where we nail down scope, timeline and budget."],
  ["Design", "Wireframes and UI direction so you know exactly what's coming, before I write code.", "You'll see a layout and style direction to approve before development starts."],
  ["Development", "I build it in React with clean, responsive, production-ready code.", "Regular check-ins so you can see progress along the way, not just a big reveal at the end."],
  ["Review", "You test it, I refine it — as many rounds as it takes to get it right.", "We go through the site together and I fix anything that's off."],
  ["Launch", "I deploy it and stick around for support, tweaks and future updates.", "Your site goes live, and I'm still around if anything needs adjusting."],
];

const TRUST = ["Remote-friendly, worldwide", "Replies within 24 hours", "Fixed-scope quotes upfront", "Support after launch"];

function ProcessStepper() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex items-center mb-10 overflow-x-auto pb-2 -mx-1 px-1">
        {STEPS.map((s, i) => (
          <div key={s[0]} className="flex items-center shrink-0">
            <button
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                active === i ? "bg-ink text-paper" : "text-ink2 hover:text-ink"
              }`}
            >
              <span
                className={`h-5 w-5 rounded-full flex items-center justify-center text-[11px] transition-colors ${
                  active === i ? "bg-clay text-white" : "bg-paper2 text-ink/50"
                }`}
              >
                {i + 1}
              </span>
              {s[0]}
            </button>
            {i < STEPS.length - 1 && <span className="w-6 sm:w-10 h-px bg-line mx-1" />}
          </div>
        ))}
      </div>

      <Reveal key={active}>
        <div className="rounded-3xl border border-line bg-white/50 p-8 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start">
          <span className="font-serif italic text-5xl text-clay/40">0{active + 1}</span>
          <div>
            <h3 className="font-serif text-2xl">{STEPS[active][0]}</h3>
            <p className="text-ink2 mt-2 leading-relaxed">{STEPS[active][1]}</p>
            <p className="text-ink/50 text-sm mt-3 italic">{STEPS[active][2]}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="section pt-14 pb-10">
        <SectionHeading
          eyebrow="Services"
          title="Websites and web apps, built the right way"
          subtitle="Whether you need a brand-new site, an existing one rebuilt, or ongoing development support — here's how I can help."
        />
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {TRUST.map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-ink2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <SectionHeading eyebrow="How it works" title="A simple, transparent process" />
        <ProcessStepper />
      </section>

      <section className="section pt-0">
        <Reveal>
          <Estimator />
        </Reveal>
      </section>

      <section className="section pt-0">
        <SectionHeading eyebrow="Questions?" title="Frequently asked" align="center" />
        <Reveal>
          <Faq />
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 pb-24">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-ink text-paper px-8 sm:px-16 py-16 text-center">
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight">Have a project brief already?</h2>
            <p className="text-paper/60 mt-4 max-w-lg mx-auto">
              Send it over and I'll get back to you with a plan and rough timeline — usually within a day.
            </p>
            <Link to="/contact" className="btn-primary !bg-paper !text-ink hover:!bg-clay hover:!text-white mt-8 inline-flex">
              Get in touch →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}