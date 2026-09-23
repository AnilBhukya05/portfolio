import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/AnilBhukya05", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anilbhukya05/", icon: "in" },
  { label: "Email", href: "mailto:anilbhukya1412@gmail.com", icon: "@" },
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
          <div className="h-full rounded-3xl border border-line bg-paper2/60 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-sage mb-6">
                <span className="h-[7px] w-[7px] rounded-full bg-sage animate-pulse" />
                Available for freelance work
              </div>
              <p className="font-serif text-2xl leading-snug mb-4">Ready to start your project?</p>
              <p className="text-ink2 text-sm leading-relaxed">
                Open to freelance projects, collaborations and full-time opportunities. Let's talk about how
                I can help bring your website or web app to life.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="text-ink/40 text-xs uppercase">Email</span>
                <span className="text-ink text-sm">anilbhukya1412@gmail.com</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="text-ink/40 text-xs uppercase">Location</span>
                <span className="text-ink text-sm">Hyderabad, India</span>
              </div>
              <div className="flex gap-3 pt-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className="flex-1 aspect-square rounded-xl flex items-center justify-center text-sm font-semibold border border-line bg-white hover:bg-ink hover:text-paper hover:-translate-y-1 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-line p-8">
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <input value={form.name} onChange={update("name")} placeholder="Your name" className="bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm outline-none focus:border-clay transition-colors" />
              <input value={form.email} onChange={update("email")} type="email" placeholder="Email address" className="bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm outline-none focus:border-clay transition-colors" />
            </div>
            <input value={form.subject} onChange={update("subject")} placeholder="What are you looking to build?" className="w-full bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm mb-3 outline-none focus:border-clay transition-colors" />
            <textarea value={form.message} onChange={update("message")} rows={6} maxLength={600} placeholder="Tell me a bit about the project..." className="w-full bg-paper2/50 border border-line rounded-xl px-4 py-3.5 text-sm resize-none outline-none focus:border-clay transition-colors" />
            <p className="text-right text-[11px] text-ink/30 mt-1 mb-5">{form.message.length}/600</p>

            <button onClick={handleSend} disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
              {sending ? "Sending..." : "Send message →"}
            </button>

            {status.text && (
              <p className={`text-sm mt-4 ${status.type === "ok" ? "text-sage" : "text-clay"}`}>{status.text}</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}