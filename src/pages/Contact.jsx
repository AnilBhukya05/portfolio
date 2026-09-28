import { useState, useEffect } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Magnetic from "../components/Magnetic";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/AnilBhukya05",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.13-.02-2.04-3.2.7-3.88-1.35-3.88-1.35-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anilbhukya05/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.6v1.7h.05c.5-.9 1.8-1.9 3.7-1.9 4 0 4.65 2.6 4.65 6v6.2h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:anilbhukya1412@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.5 6.5 8.5 6.2 8.5-6.2" />
      </svg>
    ),
  },
];

const STEPS = [
  ["You reach out", "Fill in the form, or email me directly with a bit about your project."],
  ["I reply within 24h", "I'll ask a few questions if needed, or send a rough plan and timeline."],
  ["We hop on a quick call", "A short call to align on scope, budget and next steps before we start."],
];

const PROJECT_TYPES = ["Business website", "Landing page", "Web application", "E-commerce store", "Redesign", "Something else"];
const BUDGETS = ["Small (landing page)", "Medium (multi-page site)", "Large (web app / store)", "Not sure yet"];

const CHANNELS = [
  {
    title: "Email",
    value: "anilbhukya1412@gmail.com",
    desc: "Best for project briefs, files and anything detailed.",
    href: "mailto:anilbhukya1412@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "in/anilbhukya05",
    desc: "Best for quick intros, collaborations and job opportunities.",
    href: "https://www.linkedin.com/in/anilbhukya05/",
  },
  {
    title: "GitHub",
    value: "AnilBhukya05",
    desc: "Best for seeing how I write and structure code.",
    href: "https://github.com/AnilBhukya05",
  },
];

const FAQS = [
  ["What should I include in my first message?", "A line or two on what you're building, who it's for, and roughly when you need it. A budget range helps, but it's fine to say you're not sure yet."],
  ["Do you take small projects?", "Yes. A single landing page or a redesign of one section is a perfectly good place to start."],
  ["Can we talk on a call before deciding?", "Of course. After your first message I'm happy to set up a short call so you can see how I work before committing to anything."],
  ["Which time zones can you work with?", "I'm based in India (IST), but I work with clients in other time zones and can overlap with your working hours for calls."],
];

function useHyderabadTime() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value, 10);
  const online = weekday !== "Sun" && hour >= 10 && hour < 19;

  return { time, online };
}

function ContactFaq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line rounded-3xl border border-line overflow-hidden bg-white/50">
      {FAQS.map(([q, a], i) => (
        <div key={q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-paper2/50 transition-colors"
          >
            <span className={`font-medium text-sm sm:text-base ${open === i ? "text-clay" : "text-ink"}`}>{q}</span>
            <span
              className={`h-7 w-7 rounded-full border flex items-center justify-center text-sm shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45 border-clay text-clay" : "border-ink/15 text-ink/40"
              }`}
            >
              +
            </span>
          </button>
          <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}>
            <div className="overflow-hidden">
              <p className="text-ink2 text-sm leading-relaxed px-6 pb-5">{a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState({ text: "", type: "" });
  const [sending, setSending] = useState(false);
  const { time, online } = useHyderabadTime();

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSend = async () => {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: "Please fill in your name, email and message.", type: "err" });
      return;
    }
    setSending(true);
    setStatus({ text: "", type: "" });
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append("project_type", projectType || "Not specified");
    data.append("budget", budget || "Not specified");

    try {
      const res = await fetch("https://formspree.io/f/xqedloev", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSending(false);
      if (res.ok) {
        setStatus({ text: "Thanks! I'll get back to you within a day.", type: "ok" });
        setForm({ name: "", email: "", subject: "", message: "" });
        setProjectType("");
        setBudget("");
      } else {
        setStatus({ text: "Something went wrong. Try emailing me directly.", type: "err" });
      }
    } catch {
      setSending(false);
      setStatus({ text: "Network error. Try emailing me directly.", type: "err" });
    }
  };

  const chip = (active) =>
    `px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
      active ? "bg-ink text-paper border-ink" : "border-line text-ink2 hover:border-clay hover:text-clay"
    }`;

  return (
    <>
      <section className="section pt-14 pb-10">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something together"
          subtitle="Tell me a bit about your project: what you're building, timeline, and budget if you have one. I typically reply within 24 hours."
        />

        <div className="grid md:grid-cols-[0.9fr_1.3fr] gap-6">
          {/* LEFT INFO CARD */}
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-paper2/60 p-8 flex flex-col">
              <div className={`flex items-center gap-2 text-xs font-medium mb-6 ${online ? "text-sage" : "text-ink2"}`}>
                <span className={`h-[7px] w-[7px] rounded-full ${online ? "bg-sage animate-pulse" : "bg-ink/30"}`} />
                {online ? "Available now" : "Offline right now, I'll reply next working day"}
              </div>
              <p className="font-serif text-2xl leading-snug mb-4">Ready to start your project?</p>
              <p className="text-ink2 text-sm leading-relaxed">
                Open to freelance projects, collaborations and full-time opportunities. Let's talk about
                how I can help bring your website or web app to life.
              </p>

              <div className="mt-8 pt-8 border-t border-line space-y-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">What happens next</p>
                {STEPS.map(([t, d], i) => (
                  <div key={t} className="flex gap-3.5">
                    <span className="h-6 w-6 shrink-0 rounded-full bg-clay/10 text-clay text-xs font-semibold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{t}</p>
                      <p className="text-ink2 text-xs mt-0.5 leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-line space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink/40 text-xs uppercase">Email</span>
                  <a href="mailto:anilbhukya1412@gmail.com" className="text-ink text-sm hover:text-clay transition-colors break-all text-right">
                    anilbhukya1412@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink/40 text-xs uppercase">Location</span>
                  <span className="text-ink text-sm">Hyderabad, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink/40 text-xs uppercase">Local time</span>
                  <span className="text-ink text-sm">{time} IST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink/40 text-xs uppercase">Working hours</span>
                  <span className="text-ink text-sm">Mon-Sat, 10am-7pm IST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink/40 text-xs uppercase">Response time</span>
                  <span className="text-ink text-sm">Within 24 hours</span>
                </div>
              </div>

              <div className="flex gap-3 pt-6 mt-auto">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    className="flex-1 h-12 rounded-xl flex items-center justify-center border border-line bg-white text-ink/70 hover:bg-ink hover:text-paper hover:-translate-y-1 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-line p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-3">What do you need?</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {PROJECT_TYPES.map((t) => (
                  <button key={t} type="button" onClick={() => setProjectType(projectType === t ? "" : t)} className={chip(projectType === t)}>
                    {t}
                  </button>
                ))}
              </div>

              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-3">Rough size of the project</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {BUDGETS.map((b) => (
                  <button key={b} type="button" onClick={() => setBudget(budget === b ? "" : b)} className={chip(budget === b)}>
                    {b}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm outline-none focus:border-clay transition-colors"
                />
                <input
                  value={form.email}
                  onChange={update("email")}
                  type="email"
                  placeholder="Email address"
                  className="bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm outline-none focus:border-clay transition-colors"
                />
              </div>
              <input
                value={form.subject}
                onChange={update("subject")}
                placeholder="Project title or subject (optional)"
                className="w-full bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm mb-3 outline-none focus:border-clay transition-colors"
              />
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={6}
                maxLength={600}
                placeholder="Tell me a bit about the project: goals, timeline, and anything else that helps."
                className="w-full bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm resize-none outline-none focus:border-clay transition-colors"
              />
              <p className="text-right text-[11px] text-ink/30 mt-1 mb-5">{form.message.length}/600</p>

              <button onClick={handleSend} disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
                {sending ? "Sending..." : "Send message →"}
              </button>

              {status.text && (
                <p className={`text-sm mt-4 ${status.type === "ok" ? "text-sage" : "text-clay"}`}>{status.text}</p>
              )}

              <div className="mt-auto pt-6 flex items-center justify-center gap-2 text-xs text-ink2">
                <span>Prefer email?</span>
                <a href="mailto:anilbhukya1412@gmail.com" className="font-medium text-clay hover:underline">
                  Write to me directly →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OTHER WAYS TO REACH ME */}
      <section className="section pt-6 pb-10">
        <SectionHeading eyebrow="Other ways" title="Pick whatever's easiest for you" />
        <div className="grid sm:grid-cols-3 gap-5">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block h-full rounded-3xl border border-line p-7 hover:border-clay/40 hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-xl">{c.title}</h3>
                  <span className="h-8 w-8 rounded-full border border-ink/15 flex items-center justify-center text-sm text-ink/40 group-hover:bg-clay group-hover:text-white group-hover:border-clay group-hover:rotate-45 transition-all duration-300">
                    ↗
                  </span>
                </div>
                <p className="text-clay text-sm mt-3 break-all">{c.value}</p>
                <p className="text-ink2 text-sm mt-3 leading-relaxed">{c.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-6 pb-10">
        <SectionHeading eyebrow="Before you reach out" title="Quick answers" align="center" />
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <ContactFaq />
          </Reveal>
        </div>
      </section>

      {/* CLOSING BAND */}
      <section className="px-6 sm:px-10 pb-24 pt-4">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-ink text-paper px-8 sm:px-16 py-16 text-center">
            <p className="eyebrow !text-clay2">Still not sure?</p>
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight mt-2">
              Just say hello. No pressure, no pitch.
            </h2>
            <p className="text-paper/60 mt-4 max-w-lg mx-auto text-sm">
              Even a one-line message is enough to start. I'll take it from there.
            </p>
            <Magnetic>
              <a
                href="mailto:anilbhukya1412@gmail.com"
                className="btn-primary !bg-paper !text-ink hover:!bg-clay hover:!text-white mt-8 inline-flex whitespace-nowrap"
              >
                Email me directly →
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}