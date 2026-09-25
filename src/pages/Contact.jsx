import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ text: "", type: "" });
  const [sending, setSending] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSend = async () => {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: "Please fill in all required fields.", type: "err" });
      return;
    }
    setSending(true);
    setStatus({ text: "", type: "" });
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));

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
      } else {
        setStatus({ text: "Something went wrong — try emailing me directly.", type: "err" });
      }
    } catch {
      setSending(false);
      setStatus({ text: "Network error — try emailing me directly.", type: "err" });
    }
  };

  return (
    <section className="section pt-14">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build something together"
        subtitle="Tell me a bit about your project — what you're building, timeline, and budget if you have one. I typically reply within 24 hours."
      />

      <div className="grid md:grid-cols-[0.9fr_1.3fr] gap-6">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-paper2/60 p-8 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-medium text-sage mb-6">
              <span className="h-[7px] w-[7px] rounded-full bg-sage animate-pulse" />
              Available for freelance work
            </div>
            <p className="font-serif text-2xl leading-snug mb-4">Ready to start your project?</p>
            <p className="text-ink2 text-sm leading-relaxed">
              Open to freelance projects, collaborations and full-time opportunities. Let's talk about
              how I can help bring your website or web app to life.
            </p>

            {/* WHAT HAPPENS NEXT */}
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
              <div className="flex items-center justify-between">
                <span className="text-ink/40 text-xs uppercase">Email</span>
                <a href="mailto:anilbhukya1412@gmail.com" className="text-ink text-sm hover:text-clay transition-colors">
                  anilbhukya1412@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink/40 text-xs uppercase">Location</span>
                <span className="text-ink text-sm">Hyderabad, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink/40 text-xs uppercase">Working hours</span>
                <span className="text-ink text-sm">Mon–Sat, 10am–7pm IST</span>
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

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-line p-8 flex flex-col">
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
              placeholder="What are you looking to build?"
              className="w-full bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm mb-3 outline-none focus:border-clay transition-colors"
            />
            <textarea
              value={form.message}
              onChange={update("message")}
              rows={6}
              maxLength={600}
              placeholder="Tell me a bit about the project — goals, timeline, and budget if you have one."
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
  );
}