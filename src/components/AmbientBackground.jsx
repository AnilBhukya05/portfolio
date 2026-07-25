import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.3]}>
        <Stars radius={50} depth={30} count={1200} factor={1.6} saturation={0} fade speed={0.3} />
      </Canvas>
    </div>
  );
}