import { forwardRef } from "react";
import "../styles/skills.css";

const Skills = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="section skills-section">
      <h2>Skills</h2>
      <p className="skills-subtitle">
        Technologies I use to build clean, scalable and impactful applications.
      </p>

      <div className="skills-grid">
        <div className="skill-card">Java Programming</div>
        <div className="skill-card">Python</div>
        <div className="skill-card">HTML5</div>
        <div className="skill-card">CSS3</div>
        <div className="skill-card">JavaScript ES6+</div>
        <div className="skill-card">React JS</div>
        <div className="skill-card">Tailwind CSS</div>
        <div className="skill-card">GitHub</div>
        <div className="skill-card">Figma</div>
        <div className="skill-card">Git</div>
        <div className="skill-card">VS Code</div>
      </div>
    </section>
  );
});

export default Skills;
