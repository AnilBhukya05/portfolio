import { Link } from "react-router-dom";
import LogoMark from "./LogoMark";

const EXPLORE = [
  ["About Me", "/about"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["Certifications", "/certifications"],
];

const NAV = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Contact", "/contact"],
];

const SOCIALS = [
  ["GitHub", "https://github.com/AnilBhukya05"],
  ["LinkedIn", "https://www.linkedin.com/in/anilbhukya05/"],
  ["Email", "mailto:anilbhukya1412@gmail.com"],
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 grid gap-12 sm:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark size={32} className="text-ink" />
            <p className="font-serif italic text-2xl">Anil Bhukya</p>
          </div>
          <p className="text-ink2 text-sm mt-3 max-w-xs leading-relaxed">
            Freelance web developer building clean, responsive websites and web apps for businesses and creators.
          </p>

          <div className="flex items-center gap-2 mt-5 text-xs font-medium text-sage">
            <span className="h-[7px] w-[7px] rounded-full bg-sage animate-pulse" />
            Available for freelance work
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-clay hover:gap-3 transition-all"
          >
            Start a project <span>→</span>
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-4">Navigate</p>
          <div className="flex flex-col gap-2.5">
            {NAV.map(([l, h]) => (
              <Link key={h} to={h} className="text-sm text-ink2 hover:text-clay transition-colors w-fit">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-4">About</p>
          <div className="flex flex-col gap-2.5">
            {EXPLORE.map(([l, h]) => (
              <Link key={h} to={h} className="text-sm text-ink2 hover:text-clay transition-colors w-fit">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 mb-4">Connect</p>
          <div className="flex flex-col gap-2.5">
            {SOCIALS.map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" className="text-sm text-ink2 hover:text-clay transition-colors w-fit">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-xs text-ink/40">
            © {new Date().getFullYear()} Anil Bhukya. Designed &amp; built by hand with React and Tailwind CSS.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-ink/50 hover:text-clay hover:border-clay hover:-translate-y-1 transition-all duration-300 shrink-0"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}