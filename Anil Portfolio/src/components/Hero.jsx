import { useEffect, forwardRef } from "react";
import "../styles/hero.css";
import profile from "../assets/profile.jpg";

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
        <p>Not Just a Developer — A Digital Storyteller!</p>
      </div>
    </section>
  );
});

export default Hero;
