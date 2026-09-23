import { useState } from "react";
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

export default function Certificates() {
  const [active, setActive] = useState(0);

  return (
    <section className="section pt-14">
      <SectionHeading eyebrow="Proof of work" title="Certifications & achievements" />

      <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 mb-14">
        <Reveal>
          <div className="rounded-3xl border border-line overflow-hidden">
            {CERTS.map((c, i) => (
              <button
                key={c.title + i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 border-b border-line last:border-0 transition-colors ${
                  active === i ? "bg-clay/10" : "hover:bg-paper2/60"
                }`}
              >
                <div>
                  <p className={`font-serif text-[15px] ${active === i ? "text-clay" : "text-ink"}`}>{c.title}</p>
                  <p className="text-ink2 text-xs mt-1">{c.issuer}</p>
                </div>
                <span className="text-xs text-ink/30">{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-white/60 p-5 sm:p-6 h-full flex flex-col">
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[220px]">
              <img key={active} src={CERTS[active].img} alt={CERTS[active].title} className="w-full h-full object-cover" />
            </div>
            <div className="pt-5">
              <p className="font-serif text-lg">{CERTS[active].title}</p>
              <p className="text-ink2 text-sm mt-1">{CERTS[active].issuer}</p>
              <span className="inline-block mt-3 text-[11px] font-medium px-3 py-1 rounded-full bg-paper2 text-ink2">{CERTS[active].tag}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="rounded-3xl p-8 bg-ink text-paper text-center">
          <span className="eyebrow !text-clay2">Publication</span>
          <h3 className="font-serif text-lg mt-2">Face Recognition-Based Attendance System Using KNN Algorithm</h3>
          <p className="text-paper/55 text-sm mt-2">
            IEEE 3rd International Conference on Augmented Intelligence and Sustainable Systems (ICAISS), 2025 · DOI: 10.1109/ICAISS61471.2025.11042050
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
          <div className="rounded-2xl p-6 bg-paper2/60 border border-line">
            <p className="font-semibold text-ink mb-1">Certificate of Merit — Naukri Campus Young Turks 2025</p>
            <p className="text-ink2">Secured 95.22 percentile in a national-level skill competition.</p>
          </div>
          <div className="rounded-2xl p-6 bg-paper2/60 border border-line">
            <p className="font-semibold text-ink mb-1">Event Organizer</p>
            <p className="text-ink2">Coordinated college-level technical and cultural events.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}