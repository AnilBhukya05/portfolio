import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300 });
  const springY = useSpring(y, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setVisible(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(!!e.target.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ width: hovering ? 46 : 10, height: hovering ? 46 : 10 }}
        transition={{ duration: 0.2 }}
        className="rounded-full bg-paper"
      />
    </motion.div>
  );
}