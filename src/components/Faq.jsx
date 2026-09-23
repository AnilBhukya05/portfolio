import { useState } from "react";

const FAQS = [
  ["How does pricing work?", "Every project is scoped individually based on pages, features and timeline — I'll send a clear quote before any work starts, so there are no surprises."],
  ["How many revisions do I get?", "Enough to get it right. We agree on rounds of feedback upfront, and I stay flexible for reasonable changes along the way."],
  ["Will I own the code and design?", "Yes. Once the project is paid for, the code, assets and design are fully yours."],
  ["What if I need changes after launch?", "I offer ongoing support and maintenance — from quick fixes to new features, whenever you need them."],
  ["Do you work with clients outside India?", "Yes, I work remotely with clients anywhere, communicating over email, calls or whatever tool works best for you."],
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-line rounded-3xl border border-line overflow-hidden bg-white/50">
      {FAQS.map(([q, a], i) => (
        <div key={q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-paper2/50 transition-colors"
          >
            <span className={`font-medium ${open === i ? "text-clay" : "text-ink"}`}>{q}</span>
            <span
              className={`h-7 w-7 rounded-full border border-ink/15 flex items-center justify-center text-sm shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45 border-clay text-clay" : "text-ink/40"
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