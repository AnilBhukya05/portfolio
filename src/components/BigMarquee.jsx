export default function BigMarquee({ text, className = "" }) {
  const repeated = Array(6).fill(text);
  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div className="inline-flex animate-marquee-fast">
        {repeated.map((w, i) => (
          <span
            key={i}
            className="font-serif italic text-[13vw] sm:text-[6vw] leading-none px-6"
            style={{ WebkitTextStroke: "1.5px #221F1A", color: "transparent" }}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}