import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar({
  onHome,
  onAbout,
  onProjects,
  onExperience,
  onSkills,
  onCertificates,
  onContact,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (callback) => {
    callback();
    setOpen(false); // auto close after click
  };

  return (
    <>
      {/* Hamburger Button */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar */}
      <nav className={`navbar ${open ? "open" : ""}`}>
        <span onClick={() => handleClick(onHome)}>Home</span>
        <span onClick={() => handleClick(onAbout)}>About</span>
        <span onClick={() => handleClick(onProjects)}>Projects</span>
        <span onClick={() => handleClick(onExperience)}>Experience</span>
        <span onClick={() => handleClick(onSkills)}>Skills</span>
        <span onClick={() => handleClick(onCertificates)}>Certificates</span>
        <span onClick={() => handleClick(onContact)}>Contact</span>
      </nav>

      {/* Overlay */}
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
