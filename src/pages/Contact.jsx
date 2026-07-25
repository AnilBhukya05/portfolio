import { forwardRef, useState } from "react";
import Reveal from "../components/Reveal";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/AnilBhukya05", icon: "⌥" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anilbhukya05/", icon: "in" },
  { label: "Email", href: "mailto:anilbhukya1412@gmail.com", icon: "✉" },
];

const Contact = forwardRef((_, ref) => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ text: "", type: "" });
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState(null);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSend = async () => {
    const { name, email, subject, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: "Fill all fields", type: "err" });
      return;
    }
    setSending(true);
    setStatus({ text: "", type: "" });
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("subject", subject);
    data.append("message", message);

    try {
      const res = await fetch("https://formspree.io/f/xqedloev", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSending(false);
      if (res.ok) {
        setStatus({ text: "✓ Sent!", type: "ok" });
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus({ text: "", type: "" }), 3000);
      } else {
        setStatus({ text: "✕ Failed", type: "err" });
      }
    } catch {
      setSending(false);
      setStatus({ text: "✕ Error", type: "err" });
    }
  };

  const field = (name) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
    style: {
      borderColor: focused === name ? "#4fc3f7" : "rgba(255,255,255,0.1)",
      boxShadow: focused === name ? "0 0 0 3px rgba(79,195,247,0.12)" : "none",
    },
  });

  return (
    <section ref={ref} id="contact" className="section">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-3 mb-10">
          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent">Transmission ready</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">
              Let's <em className="italic font-normal text-white/40">connect.</em>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.3fr] gap-6">
          {/* LEFT — visual identity panel */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 via-white/[0.02] to-accent2/10 p-8 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, #4fc3f7, transparent)" }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-green-400 mb-6">
                  <span className="h-[7px] w-[7px] rounded-full bg-green-400 animate-pulse" />
                  Available for work
                </div>
                <p className="font-display text-2xl font-bold leading-snug mb-4">
                  Ready to build something great?
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Open to freelance projects, collaborations, and full-time opportunities.
                  Let's discuss how I can add value to your team.
                </p>
              </div>

              <div className="relative mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/40 text-xs font-mono uppercase">Email</span>
                  <span className="text-white/75 text-sm">anilbhukya1412@gmail.com</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/40 text-xs font-mono uppercase">Location</span>
                  <span className="text-white/75 text-sm">Hyderabad, India</span>
                </div>

                <div className="flex gap-3 pt-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.label}
                      className="flex-1 aspect-square rounded-xl flex items-center justify-center text-lg font-semibold border border-white/10 bg-white/[0.03] hover:bg-accent hover:text-black hover:border-accent hover:-translate-y-1 transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  {...field("name")}
                  className="bg-white/5 border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                />
                <input
                  value={form.email}
                  onChange={update("email")}
                  type="email"
                  placeholder="Email address"
                  {...field("email")}
                  className="bg-white/5 border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                />
              </div>
              <input
                value={form.subject}
                onChange={update("subject")}
                placeholder="Subject"
                {...field("subject")}
                className="w-full bg-white/5 border rounded-xl px-4 py-3 text-sm mb-3 outline-none transition-all duration-200"
              />
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={6}
                maxLength={500}
                placeholder="Your message"
                {...field("message")}
                className="w-full bg-white/5 border rounded-xl px-4 py-3 text-sm resize-none outline-none transition-all duration-200"
              />
              <p className="text-right font-mono text-[10px] text-white/25 mt-1 mb-5">{form.message.length}/500</p>

              <button
                onClick={handleSend}
                disabled={sending}
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-accent to-accent2 text-black hover:shadow-[0_16px_40px_rgba(79,195,247,0.35)] hover:-translate-y-0.5 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message →"
                )}
              </button>

              <div className="flex items-center justify-between mt-4">
                <span
                  className={`font-mono text-[11px] tracking-wider uppercase ${
                    status.type === "ok" ? "text-green-400" : status.type === "err" ? "text-red-400" : "text-white/0"
                  }`}
                >
                  {status.text}
                </span>
                <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                  Encrypted · Formspree · 2026
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
});

export default Contact;