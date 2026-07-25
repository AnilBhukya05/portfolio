import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const CATEGORIES = [
  {
    title: "Frontend Development",
    color: "#4fc3f7",
    radius: 1.5,
    speed: 0.06,
    tilt: [0.15, 0, 0],
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "UI Engineering",
    color: "#7c5cff",
    radius: 2.2,
    speed: -0.045,
    tilt: [0.55, 0, 0.1],
    skills: ["Component Architecture", "Figma-to-Code", "Mobile-First", "Accessibility", "Pixel-Perfect UI"],
  },
  {
    title: "Software Development",
    color: "#34d399",
    radius: 2.9,
    speed: 0.035,
    tilt: [-0.5, 0, -0.15],
    skills: ["REST APIs", "OOP", "SDLC", "Debugging", "Agile"],
  },
  {
    title: "Tools & Technologies",
    color: "#fbbf24",
    radius: 3.6,
    speed: -0.028,
    tilt: [0.9, 0, 0.05],
    skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "SQL", "Python"],
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

function OrbitRing({ radius, speed, color, skills, tilt, onHover, onLeave, isMobile }) {
  const group = useRef();
  useFrame((_, delta) => {
    group.current.rotation.y += speed * delta * (isMobile ? 0.6 : 1);
  });

  const positions = useMemo(
    () =>
      skills.map((_, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
      }),
    [skills, radius]
  );

  return (
    <group rotation={tilt}>
      <group ref={group}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.004, 8, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.22} />
        </mesh>

        {skills.map((skill, i) => (
          <mesh
            key={skill}
            position={positions[i]}
            onPointerOver={(e) => {
              if (isMobile) return;
              e.stopPropagation();
              onHover(skill, color, e.clientX, e.clientY);
            }}
            onPointerMove={(e) => {
              if (isMobile) return;
              e.stopPropagation();
              onHover(skill, color, e.clientX, e.clientY);
            }}
            onPointerOut={() => !isMobile && onLeave()}
            onClick={(e) => {
              if (!isMobile) return;
              e.stopPropagation();
              onHover(skill, color, e.clientX, e.clientY);
            }}
          >
            <sphereGeometry args={[isMobile ? 0.13 : 0.09, isMobile ? 10 : 16, isMobile ? 10 : 16]} />
            <meshBasicMaterial color={color} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Core({ isMobile }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.06);
    ref.current.rotation.y = t * 0.2;
    ref.current.rotation.x = t * 0.1;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.45, isMobile ? 0 : 1]} />
      <meshBasicMaterial color="#4fc3f7" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

export default function SkillsOrbit() {
  const [tip, setTip] = useState(null);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  const onHover = (label, color, clientX, clientY) => {
    const rect = containerRef.current.getBoundingClientRect();
    setTip({ label, color, x: clientX - rect.left, y: clientY - rect.top });
  };
  const onLeave = () => setTip(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[340px] sm:h-[420px] md:h-[520px] touch-none"
    >
      <Canvas
        camera={{ position: isMobile ? [3, 2.5, 7] : [4, 3, 8], fov: isMobile ? 55 : 50 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        onPointerMissed={() => isMobile && setTip(null)}
      >
        <Core isMobile={isMobile} />
        {CATEGORIES.map((cat) => (
          <OrbitRing
            key={cat.title}
            radius={isMobile ? cat.radius * 0.85 : cat.radius}
            speed={cat.speed}
            color={cat.color}
            skills={cat.skills}
            tilt={cat.tilt}
            onHover={onHover}
            onLeave={onLeave}
            isMobile={isMobile}
          />
        ))}
      </Canvas>

      {tip && (
        <div
          className="absolute pointer-events-none px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-black shadow-lg z-10"
          style={{
            left: tip.x,
            top: tip.y,
            transform: "translate(-50%, -140%)",
            background: tip.color,
            boxShadow: `0 0 20px ${tip.color}99`,
            whiteSpace: "nowrap",
          }}
        >
          {tip.label}
        </div>
      )}

      {!tip && (
        <div className="absolute bottom-0 left-0 right-0 py-2.5 bg-gradient-to-t from-ink via-ink/80 to-transparent text-center">
          <span className="text-[11px] font-mono text-white/35 tracking-wide">
            {isMobile ? "tap a node to reveal it" : "hover a node to reveal it"}
          </span>
        </div>
      )}
    </div>
  );
}