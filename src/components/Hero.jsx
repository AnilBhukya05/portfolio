import { useEffect, forwardRef } from "react";
import "../styles/hero.css";
import profile from "../assets/profile.jpg";
import resumeFile from "../assets/resume.pdf";

const Hero = forwardRef((props, ref) => {
  useEffect(() => {
    const card = document.querySelector(".card");

    const handleMove = (e) => {
      if (window.innerWidth < 768) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = ((y / rect.height) - 0.5) * -20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <section ref={ref} className="scene" id="home">
      <div className="card">
        <img src={profile} alt="Profile" />
        <h1>Anil Bhukya</h1>
        <p>Frontend Developer | React.js Developer!</p>

        <div className="resume-actions">
          <a
            href={resumeFile}
            download="Anil_Bhukya_Resume.pdf"
            className="resume-btn download-btn"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn view-btn"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View CV
          </a>
        </div>
      </div>
    </section>
  );
});

export default Hero;