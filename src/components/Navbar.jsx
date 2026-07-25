import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  ["Home", "onHome"],
  ["About", "onAbout"],
  ["Experience", "onExperience"],
  ["Projects", "onProjects"],
  ["Skills", "onSkills"],
  ["Certificates", "onCertificates"],
  ["Contact", "onContact"],
];

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const go = (fn) => {
    fn();
    setOpen(false);
  };

  return (
    <>
{/* Mobile toggle — asymmetric signature bars */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed top-5 left-5 z-[60] h-11 w-11 rounded-full flex items-center justify-center md:hidden transition-all duration-300 group"
        style={{
          background: "rgba(15,15,20,0.75)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        <div className="relative h-[16px] w-[18px] flex items-center justify-center">
          <span
            className="absolute h-[2px] rounded transition-all duration-300 group-hover:w-[18px]"
            style={{
              background: "#4fc3f7",
              width: open ? "18px" : "18px",
              top: open ? "7px" : "0px",
              transform: open ? "rotate(45deg)" : "none",
            }}
          />
          <span
            className="absolute h-[2px] rounded transition-all duration-300 group-hover:w-[18px]"
            style={{
              background: "#fff",
              width: open ? "18px" : "11px",
              top: "7px",
              left: open ? "0px" : "0px",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="absolute h-[2px] rounded transition-all duration-300 group-hover:w-[18px]"
            style={{
              background: "#fff",
              width: open ? "18px" : "14px",
              top: open ? "7px" : "14px",
              transform: open ? "rotate(-45deg)" : "none",
            }}
          />
        </div>
      </button>

      {/* Desktop sidebar */}
      <nav
        className="hidden md:flex fixed top-8 left-6 z-50 flex-col gap-1 p-3 rounded-2xl"
        style={{
          background: "rgba(10,10,14,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.65)",
        }}
      >
        {LINKS.map(([label, key]) => (
          <span
            key={label}
            onClick={() => go(props[key])}
            className="group relative pl-6 pr-5 py-2.5 rounded-xl text-sm cursor-pointer transition-all duration-200 hover:translate-x-1"
            style={{ color: "rgba(255,255,255,0.62)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.62)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"
              style={{ background: "#4fc3f7", boxShadow: "0 0 8px #4fc3f7" }}
            />
            {label}
          </span>
        ))}
      </nav>

      {/* Mobile fullscreen menu — numbered list style */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
            />
<motion.nav
              initial={{ clipPath: "circle(4% at 8% 5%)" }}
              animate={{ clipPath: "circle(150% at 8% 5%)" }}
              exit={{ clipPath: "circle(4% at 8% 5%)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex flex-col justify-center px-9 md:hidden"
              style={{ background: "rgba(8,8,12,0.98)" }}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/25 mb-7">
                Menu
              </span>
              <div className="flex flex-col">
                {LINKS.map(([label, key], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => go(props[key])}
                    className="group flex items-center gap-4 py-3 cursor-pointer"
                  >
                    <span className="font-mono text-[11px]" style={{ color: "rgba(79,195,247,0.55)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display text-xl font-medium transition-all duration-200"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                      onTouchStart={(e) => (e.currentTarget.style.color = "#4fc3f7")}
                    >
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}