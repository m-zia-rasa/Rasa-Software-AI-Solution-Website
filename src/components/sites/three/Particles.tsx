"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** A slowly drifting star-field that reacts a little to the pointer (depth parallax). */
export default function Particles({
  count = 700,
  reduceMotion,
}: {
  count?: number;
  reduceMotion: boolean;
}) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 10;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th);
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      arr[i * 3 + 2] = r * Math.cos(ph) - 4;
    }
    return arr;
  }, [count]);

  useFrame((state, dt) => {
    const p = ref.current;
    if (!p) return;
    if (!reduceMotion) p.rotation.y += dt * 0.02;
    p.position.x = THREE.MathUtils.lerp(p.position.x, state.pointer.x * 0.6, 0.03);
    p.position.y = THREE.MathUtils.lerp(p.position.y, state.pointer.y * 0.4, 0.03);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#a7f3d0" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}
