export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-serif text-3xl sm:text-[40px] leading-tight">{title}</h2>
      {subtitle && <p className="text-ink2 mt-4 leading-relaxed">{subtitle}</p>}
    </div>
  );
}