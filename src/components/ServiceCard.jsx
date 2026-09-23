export default function ServiceCard({ number, title, description, points }) {
  return (
    <div className="group rounded-3xl border border-line p-8 h-full hover:border-clay/40 hover:bg-white transition-all duration-300">
      <span className="font-serif italic text-4xl text-clay/30 group-hover:text-clay/60 transition-colors">{number}</span>
      <h3 className="font-serif text-xl mt-4">{title}</h3>
      <p className="text-ink2 text-sm mt-3 leading-relaxed">{description}</p>
      {points && (
        <ul className="mt-5 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-ink2">
              <span className="mt-2 h-1 w-1 rounded-full bg-clay shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}