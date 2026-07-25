export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      {label && (
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">{title}</h2>
      {subtitle && (
        <p className="text-white/50 max-w-xl mx-auto mt-3 text-sm">{subtitle}</p>
      )}
    </div>
  );
}