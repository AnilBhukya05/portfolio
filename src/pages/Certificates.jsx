import { forwardRef, useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import javaCert from "../assets/java.jpg";
import cyberCert from "../assets/cyber.jpg";
import deloitteCert from "../assets/deloitte.jpg";
import dataCert from "../assets/data.jpg";
import avazyaCert from "../assets/avazya.jpg";

const CERTS = [
  { img: javaCert, title: "React JS", issuer: "Scaler", tag: "Component Architecture, Hooks" },
  { img: javaCert, title: "Java Programming", issuer: "Coursera", tag: "Arrays & File Handling" },
  { img: deloitteCert, title: "Technology Job Simulation", issuer: "Deloitte — Forage", tag: "Industry Problem Solving" },
  { img: cyberCert, title: "Foundations of Cybersecurity", issuer: "Google — Coursera", tag: "Network & Security Basics" },
  { img: dataCert, title: "Data Science Simulation", issuer: "Forage", tag: "Real-world Data Analysis" },
  { img: avazyaCert, title: "Avazya Tech Fest Organizer", issuer: "CMREC", tag: "Leadership & Events" },
];

const Certificates = forwardRef((_, ref) => {
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} id="certificates" className="section">
      <SectionHeading label="Proof of work" title="Certifications & Achievements" />

      <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 max-w-5xl mx-auto mb-14">
        {/* LEFT — list */}
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
            {CERTS.map((c, i) => (
              <button
                key={c.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 border-b border-white/5 last:border-0 transition-all duration-300 ${
                  active === i ? "bg-accent/10" : "hover:bg-white/[0.03]"
                }`}
              >
                <div>
                  <p
                    className={`font-display font-bold text-[15px] transition-colors ${
                      active === i ? "text-accent" : "text-white"
                    }`}
                  >
                    {c.title}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{c.issuer}</p>
                </div>
                <span
                  className={`font-mono text-xs shrink-0 transition-transform duration-300 ${
                    active === i ? "translate-x-0 text-accent" : "-translate-x-1 text-white/20"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* RIGHT — preview */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-4 sm:p-6 h-full flex flex-col">
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[220px]">
              <img
                key={active}
                src={CERTS[active].img}
                alt={CERTS[active].title}
                className="w-full h-full object-cover animate-[fadeIn_0.4s_ease]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="pt-5">
              <p className="font-display text-lg font-bold">{CERTS[active].title}</p>
              <p className="text-white/45 text-sm mt-1">{CERTS[active].issuer}</p>
              <span className="inline-block mt-3 text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 text-white/60">
                {CERTS[active].tag}
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="max-w-3xl mx-auto rounded-3xl p-8 bg-gradient-to-br from-accent/10 to-accent2/10 border border-accent/20 text-center">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">Publication</span>
          <h3 className="font-display text-lg font-bold mt-2">
            Face Recognition-Based Attendance System Using KNN Algorithm
          </h3>
          <p className="text-white/60 text-sm mt-2">
            IEEE 3rd International Conference on Augmented Intelligence and Sustainable Systems (ICAISS), 2025 · DOI:
            10.1109/ICAISS61471.2025.11042050
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-2 gap-6 text-sm text-white/70">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <p className="font-semibold text-white mb-1">Certificate of Merit — Naukri Campus Young Turks 2025</p>
            <p>Secured 95.22 percentile in a national-level skill competition.</p>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <p className="font-semibold text-white mb-1">Event Organizer</p>
            <p>Coordinated college-level technical and cultural events.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
});

export default Certificates;