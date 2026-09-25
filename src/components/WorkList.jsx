import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function WorkList({ items }) {
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);
  const lastX = useRef(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotate = useMotionValue(0);
  const springRotate = useSpring(rotate, { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);

    const delta = px - lastX.current;
    lastX.current = px;
    rotate.set(Math.max(-18, Math.min(18, delta * 1.4)));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setHovered(null)}
      className="relative"
    >
      {items.map((item, i) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHovered(i)}
          className="group relative flex items-center justify-between gap-6 border-b border-line py-8 sm:py-10"
        >
          <div className="flex items-baseline gap-5 min-w-0">
            <span
              className={`font-serif italic text-sm shrink-0 transition-colors duration-300 ${
                hovered === i ? "text-clay" : "text-ink/30"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`font-serif text-3xl sm:text-5xl leading-none truncate transition-all duration-300 ${
                hovered === i ? "text-clay translate-x-2" : "text-ink"
              } ${hovered !== null && hovered !== i ? "opacity-30" : "opacity-100"}`}
            >
              {item.title}
            </h3>
          </div>

          <div className="hidden sm:flex flex-wrap gap-2 shrink-0">
            {item.tags.slice(0, 2).map((t) => (
              <span key={t} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-paper2 text-ink2">
                {t}
              </span>
            ))}
          </div>

          <span
            className={`h-10 w-10 shrink-0 rounded-full border flex items-center justify-center text-sm transition-all duration-300 ${
              hovered === i
                ? "bg-clay text-white border-clay rotate-45"
                : "border-ink/15 text-ink/40"
            }`}
          >
            ↗
          </span>

          {/* mobile fallback preview since there's no cursor to follow */}
          <div
            className={`sm:hidden absolute -bottom-1 left-9 right-14 rounded-xl overflow-hidden transition-all duration-300 ${
              hovered === i ? "h-24 opacity-100 mt-2" : "h-0 opacity-0"
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-24 object-cover" />
          </div>
        </a>
      ))}

      {/* FLOATING CURSOR PREVIEW — desktop only */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              x: springX,
              y: springY,
              rotate: springRotate,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="hidden sm:block absolute top-0 left-0 w-[260px] h-[190px] rounded-2xl overflow-hidden pointer-events-none shadow-soft border-4 border-white z-20"
          >
            <img
              src={items[hovered].image}
              alt={items[hovered].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}