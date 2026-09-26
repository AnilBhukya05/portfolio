import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LogoMark from "./LogoMark";

const PRIMARY = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
];

const ABOUT_GROUP = [
  ["About Me", "/about", "Who I am & how I work"],
  ["Experience", "/experience", "Where I've worked"],
  ["Skills", "/skills", "Tools & technologies"],
  ["Certifications", "/certifications", "Courses & achievements"],
];

const ABOUT_PATHS = ABOUT_GROUP.map(([, to]) => to);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  const isAboutActive = ABOUT_PATHS.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const openAbout = () => {
    clearTimeout(closeTimer.current);
    setAboutOpen(true);
  };
  const closeAboutDelayed = () => {
    closeTimer.current = setTimeout(() => setAboutOpen(false), 150);
  };

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
        <header
          className={`max-w-6xl mx-auto rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-white/60 bg-paper/60 backdrop-blur-xl shadow-soft"
              : "border-white/30 bg-paper/35 backdrop-blur-lg"
          }`}
          style={{
            boxShadow: scrolled
              ? "0 8px 32px rgba(34,31,26,0.10), inset 0 1px 0 rgba(255,255,255,0.5)"
              : "inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          <div className="px-5 sm:px-7 h-16 sm:h-[68px] flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => setOpen(false)}
            >
              <LogoMark
                size={36}
                className="text-ink group-hover:text-clay transition-colors duration-300"
              />
              <span className="font-semibold tracking-tight">Anil Bhukya</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-clay bg-white/60"
                      : "text-ink/65 hover:text-ink hover:bg-white/40"
                  }`
                }
              >
                Home
              </NavLink>

              <div
                className="relative"
                onMouseEnter={openAbout}
                onMouseLeave={closeAboutDelayed}
              >
                <button
                  onClick={() => setAboutOpen((o) => !o)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                    isAboutActive || aboutOpen
                      ? "text-clay bg-white/60"
                      : "text-ink/65 hover:text-ink hover:bg-white/40"
                  }`}
                >
                  About
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M1 3l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-white/60 bg-paper/70 backdrop-blur-xl shadow-soft p-2 overflow-hidden"
                    >
                      {ABOUT_GROUP.map(([label, to, desc]) => (
                        <NavLink
                          key={to}
                          to={to}
                          onClick={() => setAboutOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-xl transition-colors ${
                              isActive ? "bg-white/70" : "hover:bg-white/50"
                            }`
                          }
                        >
                          <p
                            className={`text-sm font-medium ${pathname === to ? "text-clay" : "text-ink"}`}
                          >
                            {label}
                          </p>
                          <p className="text-ink2 text-xs mt-0.5">{desc}</p>
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {PRIMARY.slice(1).map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                      isActive
                        ? "text-clay bg-white/60"
                        : "text-ink/65 hover:text-ink hover:bg-white/40"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="btn-primary !py-2.5 !px-5 !text-[13px]"
              >
                Start a project →
              </Link>
            </div>

            {/* MOBILE MENU BUTTON — inlined, centered X morph */}
            <motion.button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.88 }}
              className="lg:hidden relative h-10 w-10 flex items-center justify-center"
            >
              <span className="relative w-6 h-5">
                <motion.span
                  animate={
                    open
                      ? { top: 9, width: 20, rotate: 45 }
                      : { top: 2, width: 24, rotate: 0 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="absolute left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-ink"
                />
                <motion.span
                  animate={
                    open
                      ? { opacity: 0, width: 0 }
                      : { opacity: 1, width: 16, top: 9 }
                  }
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-clay"
                />
                <motion.span
                  animate={
                    open
                      ? { top: 9, width: 20, rotate: -45 }
                      : { top: 16, width: 12, rotate: 0 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="absolute left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-ink"
                />
              </span>
            </motion.button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-paper/85 backdrop-blur-xl lg:hidden pt-28 px-8 overflow-y-auto pb-10"
          >
            <div className="flex flex-col">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-4 border-b border-line text-2xl font-serif ${isActive ? "text-clay" : "text-ink"}`
                }
              >
                Home
              </NavLink>

              <div className="border-b border-line">
                <button
                  onClick={() => setMobileAboutOpen((o) => !o)}
                  className={`w-full flex items-center justify-between py-4 text-2xl font-serif ${
                    isAboutActive ? "text-clay" : "text-ink"
                  }`}
                >
                  About
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 10 10"
                    className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M1 3l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pb-4 pl-4">
                        {ABOUT_GROUP.map(([label, to]) => (
                          <NavLink
                            key={to}
                            to={to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `py-2.5 text-base ${isActive ? "text-clay font-medium" : "text-ink2"}`
                            }
                          >
                            {label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {PRIMARY.slice(1).map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-4 border-b border-line text-2xl font-serif ${isActive ? "text-clay" : "text-ink"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8 w-full justify-center"
            >
              Start a project →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
