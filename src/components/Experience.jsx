import { forwardRef } from "react";
import "../styles/experience.css";

const Experience = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="section experience-section">
      <h2>Experience</h2>

      <div className="experience-grid">
        {/* SKYINTEN WEBSITE */}
        <div className="experience-card">
          <div className="experience-content">
            <h3>Skyinten - Full-Stack EdTech Website</h3>

            <p>
              Developed and deployed a production-ready EdTech website during
              internship. Managed both frontend and backend development,
              implemented responsive UI, integrated backend services, and
              optimized performance for live deployment.
            </p>

            <div className="experience-tags">
              <span>Full-Stack Development</span>
              <span>Frontend + Backend</span>
              <span>Production Deployment</span>
            </div>

            <a
              href="https://www.skyinten.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              Visit Site →
            </a>
          </div>
        </div>

        {/* DASHBOARD APP */}
        {/* <div className="experience-card">
          <div className="experience-content">
            <h3>Dashboard Web Application</h3>

            <p>
              Built an interactive dashboard interface with modern UI
              components and responsive layout structure.
            </p>

            <div className="experience-tags">
              <span>UI Development</span>
              <span>Data Visualization</span>
              <span>React</span>
            </div>

            <button className="visit-btn">View Project →</button>
          </div>
        </div> */}
      </div>
    </section>
  );
});

export default Experience;
