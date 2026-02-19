import { forwardRef } from "react";
import "../styles/about.css";

const About = forwardRef((_, ref) => (
  <section ref={ref} className="section about">
    <h2>About Me</h2>

    <div className="about-card">
      <p>
        Hi, I’m <span>Anil Bhukya</span>, a Computer Science graduate and web
        developer focused on building clean, modern, and user-friendly web
        applications. I enjoy turning ideas into responsive digital experiences
        using <span>HTML, CSS, JavaScript, React</span>, along with
        <span> Java, Python, and SQL</span>.
      </p>

      <p>
        I graduated from <span>CMR Engineering College</span>, where I built a
        strong foundation in programming and software development. I’ve earned
        certifications in <span>Java, Python, and Cybersecurity</span>, and I’m
        actively seeking opportunities as a{" "}
        <span>SDE, Frontend, or Full-Stack Developer</span>.
      </p>

      <p className="about-foot">
        Outside of tech, I enjoy organizing events, photography, and video
        editing. Reach me at{" "}
        <span>
          <a href="mailto:anilbhukya1412@gmail.com" className="email-link">
            anilbhukya1412@gmail.com
          </a>
        </span>
        .
      </p>
    </div>
  </section>
));

export default About;
