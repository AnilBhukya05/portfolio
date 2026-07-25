const LINKS = [
  ["GitHub", "https://github.com/AnilBhukya05"],
  ["LinkedIn", "https://www.linkedin.com/in/anilbhukya05/"],
  ["Email", "mailto:anilbhukya1412@gmail.com"],
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-white/10 mt-10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-white">Anil Bhukya</p>
          <p className="text-white/40 text-xs mt-1">Frontend Developer · React.js Developer</p>
        </div>

        <div className="flex items-center gap-6">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-white/50 text-sm hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={scrollTop}
          className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>

      <div className="border-t border-white/5 py-5 text-center">
        <p className="font-mono text-[11px] tracking-widest text-white/25 uppercase">
          © {new Date().getFullYear()} Anil Bhukya — Built with React, Tailwind &amp; Three.js
        </p>
      </div>
    </footer>
  );
}