import { motion } from "framer-motion";

export default function TextReveal({ text, className = "", delay = 0, as: Tag = "span" }) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.045 }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}