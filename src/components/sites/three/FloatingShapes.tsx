"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#10b981", "#f59e0b", "#6366f1", "#38bdf8", "#34d399"];

/** Wireframe polyhedra drifting at different depths around the hero core, for parallax depth. */
export default function FloatingShapes({ count = 9, reduceMotion }: { count?: number; reduceMotion: boolean }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const shapes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        kind: i % 3,
        x: (Math.random() - 0.5) * 14,
        y: (Math.random() - 0.5) * 7,
        z: -2 - Math.random() * 6,
        s: 0.25 + Math.random() * 0.45,
        speed: 0.2 + Math.random() * 0.5,
        phase: Math.random() * 6,
        color: COLORS[i % COLORS.length],
      })),
    [count],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;
    shapes.forEach((s, i) => {
      const m = refs.current[i];
      if (!m) return;
      const depth = (6 + s.z) / 6; // nearer shapes (z close to -2) move more with the mouse
      if (!reduceMotion) {
        m.rotation.x = t * s.speed;
        m.rotation.y = t * s.speed * 0.7;
        m.position.y = s.y + Math.sin(t * s.speed + s.phase) * 0.35;
      }
      m.position.x = THREE.MathUtils.lerp(m.position.x, s.x + px * depth * 1.2, 0.05);
    });
  });

  return (
    <group>
      {shapes.map((s, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }} position={[s.x, s.y, s.z]} scale={s.s}>
          {s.kind === 0 ? <octahedronGeometry args={[1, 0]} /> : s.kind === 1 ? <tetrahedronGeometry args={[1, 0]} /> : <torusGeometry args={[0.8, 0.2, 8, 20]} />}
          <meshBasicMaterial color={s.color} wireframe transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}
