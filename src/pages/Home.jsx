import { forwardRef, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import HeroScene from "../components/HeroScene";
import profile from "../assets/profile.webp";
import resumeFile from "../assets/resume.pdf";

const Home = forwardRef((_, ref) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const onMove = (e) => {
      if (window.innerWidth < 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rY = (x / rect.width - 0.5) * 18;
      const rX = (y / rect.height - 0.5) * -18;
      card.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
    };
    const reset = () => (card.style.transform = "rotateX(0) rotateY(0)");
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", reset);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center [perspective:1500px] px-4 overflow-hidden"
    >
      <HeroScene />

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[90%] sm:w-full max-w-[240px] sm:max-w-xs rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 shadow-[0_40px_100px_rgba(0,0,0,0.7)] transition-transform duration-200 [transform-style:preserve-3d] cursor-pointer"
      >
        <img
          src={profile}
          alt="Anil Bhukya"
          className="w-full rounded-2xl [transform:translateZ(60px)]"
        />
        <h1 className="mt-5 font-display text-2xl font-bold [transform:translateZ(40px)]">
          Anil Bhukya
        </h1>
        <p className="text-white/60 text-sm mt-1 [transform:translateZ(30px)]">
          Frontend Developer · React.js Developer · Software Engineer
        </p>

        <div className="mt-6 flex gap-3 justify-end [transform:translateZ(30px)]">
          <a
            href={resumeFile}
            download="Anil_Bhukya_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 hover:-translate-y-0.5 transition-all"
          >
            ⭳ Download CV
          </a>
          <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/10 border border-white/15 hover:bg-white/20 hover:-translate-y-0.5 transition-all"
          >
            ⦿ View CV
          </a>
        </div>
      </motion.div>
    </section>
  );
});

export default Home;
