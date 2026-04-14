import { forwardRef } from "react";
import "../styles/projects.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const Projects = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="section projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        {/* <div className="project-card">
          <div className="project-image">
            <img src={project1} alt="Recipe App" />
            <div className="project-overlay"></div>
          </div>
      
          <div className="project-arrow">↗</div>

          <div className="project-info">
            <h3>Recipe Finder App</h3>

            <div className="tags">
              <span>Web Development</span>
              <span>API Integration</span>
            </div>
          </div>
        </div> */}

        <a
          href="https://github.com/AnilBhukya05/Recipe-Finder-App"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={project1} alt="Recipe App" />
            <div className="project-overlay"></div>
          </div>

          <div className="project-arrow">↗</div>

          <div className="project-info">
            <h3>Recipe Finder App</h3>

            <div className="tags">
              <span>Web Development</span>
              <span>API Integration</span>
            </div>
          </div>
        </a>

        {/* Project 2 */}
        {/* <div className="project-card">
          <div className="project-image">
            <img src={project2} alt="Face Recognition" />
            <div className="project-overlay"></div>
          </div>

          <div className="project-arrow">↗</div>

          <div className="project-info">
            <h3>Face Recognition Based Attendance System</h3>

            <div className="tags">
              <span>Computer Vision</span>
              <span>Real-time Recognition</span>
            </div>
          </div>
        </div> */}

        <a
          href="https://github.com/AnilBhukya05/Face-Recognition-Based-Attendance-System"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={project2} alt="Face Recognition" />
            <div className="project-overlay"></div>
          </div>

          <div className="project-arrow">↗</div>

          <div className="project-info">
            <h3>Face Recognition Based Attendance System</h3>

            <div className="tags">
              <span>Computer Vision</span>
              <span>Real-time Recognition</span>
            </div>
          </div>
        </a>

        {/* Project 3 */}
        {/* <div className="project-card">
          <div className="project-image">
            <img src={project3} alt="Quiz Application" />
            <div className="project-overlay"></div>
          </div>

          <div className="project-arrow">↗</div>

          <div className="project-info">
            <h3>Quiz Application</h3>

            <div className="tags">
              <span>Web Design</span>
              <span>React JS</span>
            </div>
          </div>
        </div> */}

        <a
          href="https://github.com/AnilBhukya05/Quiz-App"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img src={project3} alt="Quiz Application" />
            <div className="project-overlay"></div>
          </div>

          <div className="project-arrow">↗</div>

          <div className="project-info">
            <h3>Quiz Application</h3>

            <div className="tags">
              <span>Web Design</span>
              <span>React JS</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
});

export default Projects;
