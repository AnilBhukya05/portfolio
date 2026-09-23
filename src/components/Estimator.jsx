import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const TYPES = [
  { id: "landing", label: "Landing Page", base: [4, 7] },
  { id: "business", label: "Business Website", base: [10, 16] },
  { id: "webapp", label: "Web Application", base: [21, 35] },
  { id: "ecommerce", label: "E-commerce Store", base: [28, 42] },
];

const EXTRAS = [
  { id: "cms", label: "Edit content yourself (no code needed)", days: [3, 5] },
  { id: "api", label: "Third-party integrations (payments, APIs)", days: [4, 7] },
  { id: "animation", label: "Custom animations & interactions", days: [3, 6] },
  { id: "multilang", label: "Multi-language support", days: [4, 6] },
];

function fmtWeeks(days) {
  const w = days / 7;
  return w < 1 ? `${days}d` : `${Math.round(w * 10) / 10}w`;
}

export default function Estimator() {
  const [type, setType] = useState(TYPES[1].id);
  const [extras, setExtras] = useState([]);

  const toggleExtra = (id) =>
    setExtras((e) => (e.includes(id) ? e.filter((x) => x !== id) : [...e, id]));

  const range = useMemo(() => {
    const t = TYPES.find((x) => x.id === type);
    let [min, max] = t.base;
    extras.forEach((id) => {
      const ex = EXTRAS.find((e) => e.id === id);
      min += ex.days[0];
      max += ex.days[1];
    });
    return [min, max];
  }, [type, extras]);

  return (
    <div className="rounded-3xl border border-line bg-white/60 p-7 sm:p-9">
      <span className="eyebrow">Not sure where to start?</span>
      <h3 className="font-serif text-2xl sm:text-3xl leading-snug mb-8">Get a rough timeline estimate</h3>

      <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-3">What are you building?</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setType(t.id)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all ${
              type === t.id ? "bg-ink text-paper border-ink" : "border-line text-ink2 hover:border-clay hover:text-clay"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-3">Anything extra? (optional)</p>
      <div className="grid sm:grid-cols-2 gap-2.5 mb-9">
        {EXTRAS.map((ex) => (
          <button
            key={ex.id}
            onClick={() => toggleExtra(ex.id)}
            className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl border text-sm transition-all ${
              extras.includes(ex.id) ? "border-clay bg-clay/10 text-ink" : "border-line text-ink2 hover:border-clay/40"
            }`}
          >
            <span
              className={`h-4 w-4 rounded-md border flex items-center justify-center shrink-0 text-[10px] transition-colors ${
                extras.includes(ex.id) ? "bg-clay border-clay text-white" : "border-ink/20"
              }`}
            >
              {extras.includes(ex.id) && "✓"}
            </span>
            {ex.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl bg-paper2/70 border border-line p-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink/40 mb-1">Estimated timeline</p>
          <p className="font-serif text-3xl">
            {fmtWeeks(range[0])} – {fmtWeeks(range[1])}
          </p>
          <p className="text-ink2 text-xs mt-1">Rough estimate — the exact scope and quote comes after a quick call.</p>
        </div>
        <Link to="/contact" className="btn-primary shrink-0">
          Get an exact quote →
        </Link>
      </div>
    </div>
  );
}