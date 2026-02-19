import { forwardRef } from "react";
import "../styles/certificates.css";

import javaCert from "../assets/java.jpg";
import cyberCert from "../assets/cyber.jpg";
import deloitteCert from "../assets/deloitte.jpg";
import dataCert from "../assets/data.jpg";
import avazyaCert from "../assets/avazya.jpg";

const Certificates = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="section certificates-section">
      <h2>Certifications</h2>

      <div className="cert-grid">

        <div className="cert-card">
          <img src={javaCert} alt="Java Certificate" />
          <div className="cert-content">
            <h3>Java Programming</h3>
            <p>Duke University — Coursera</p>
            <span>Core Java & Data Structures</span>
          </div>
        </div>

        <div className="cert-card">
          <img src={cyberCert} alt="Cybersecurity Certificate" />
          <div className="cert-content">
            <h3>Foundations of Cybersecurity</h3>
            <p>Google — Coursera</p>
            <span>Network & Security Basics</span>
          </div>
        </div>

        <div className="cert-card">
          <img src={deloitteCert} alt="Deloitte Certificate" />
          <div className="cert-content">
            <h3>Technology Job Simulation</h3>
            <p>Deloitte — Forage</p>
            <span>Industry Problem Solving</span>
          </div>
        </div>

        <div className="cert-card">
          <img src={dataCert} alt="Data Science Certificate" />
          <div className="cert-content">
            <h3>Data Science Simulation</h3>
            <p>Forage</p>
            <span>Real-world Data Analysis</span>
          </div>
        </div>

        <div className="cert-card">
          <img src={avazyaCert} alt="Avazya Certificate" />
          <div className="cert-content">
            <h3>Avazya Tech Fest Organizer</h3>
            <p>CMREC</p>
            <span>Leadership & Event Management</span>
          </div>
        </div>

      </div>
    </section>
  );
});

export default Certificates;
