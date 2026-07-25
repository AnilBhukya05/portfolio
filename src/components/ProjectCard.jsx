import { useState, useEffect } from "react";

export default function ProjectCard({ index, title, description, tags, image, link, reverse }) {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
        alignItems: "center",
        gap: isMobile ? "24px" : "48px",
        textDecoration: "none",
        padding: isMobile ? "32px 0" : "48px 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* IMAGE SIDE */}
      <div
        style={{
          flex: "1 1 50%",
          position: "relative",
          height: isMobile ? "220px" : "320px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: hover ? "0 30px 60px rgba(0,0,0,0.5)" : "0 8px 20px rgba(0,0,0,0.25)",
          transform: hover && !isMobile ? "translateY(-8px)" : "translateY(0)",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: hover ? "grayscale(0%)" : "grayscale(55%)",
              transform: hover ? "scale(1.06)" : "scale(1)",
              transition: "filter 0.5s ease, transform 0.6s ease",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* CONTENT SIDE */}
      <div style={{ flex: "1 1 50%", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.1em",
              color: "#4fc3f7",
            }}
          >
            {index}
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.12)" }} />
        </div>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: isMobile ? "24px" : "30px",
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {title}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              fontSize: "14px",
              transform: hover ? "translate(3px,-3px) rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              flexShrink: 0,
            }}
          >
            ↗
          </span>
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "14.5px",
            lineHeight: 1.7,
            margin: "0 0 20px",
            maxWidth: "440px",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {(tags || []).map((t) => (
            <span
              key={t}
              style={{
                fontSize: "11px",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.04em",
                padding: "6px 14px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}