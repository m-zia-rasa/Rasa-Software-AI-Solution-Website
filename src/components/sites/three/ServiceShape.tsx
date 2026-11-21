"use client";

import React, { useRef } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

import { SERVICE_COLORS } from "./colors";

const dark = { color: "#1b2a47", metalness: 0.35, roughness: 0.4 } as const;

function Glow({ color, i = 0.9 }: { color: string; i?: number }) {
  return <meshStandardMaterial color="#e2e8f0" emissive={color} emissiveIntensity={i} />;
}

function Website({ c }: { c: string }) {
  return (
    <group>
      <mesh><boxGeometry args={[3, 2, 0.14]} /><meshStandardMaterial {...dark} /></mesh>
      <mesh position={[0, 0.82, 0.08]}><boxGeometry args={[3, 0.3, 0.04]} /><meshStandardMaterial color="#111c30" /></mesh>
      {[-1.25, -1.1, -0.95].map((x, i) => (
        <mesh key={i} position={[x, 0.82, 0.11]}><sphereGeometry args={[0.05, 12, 12]} /><Glow color={["#ef4444", "#f59e0b", c][i]} /></mesh>
      ))}
      <mesh position={[-0.55, 0.2, 0.09]}><boxGeometry args={[1.5, 0.2, 0.04]} /><Glow color={c} /></mesh>
      <mesh position={[-0.75, -0.15, 0.09]}><boxGeometry args={[1.1, 0.12, 0.04]} /><meshStandardMaterial color="#64748b" /></mesh>
      <mesh position={[-0.65, -0.4, 0.09]}><boxGeometry args={[1.3, 0.12, 0.04]} /><meshStandardMaterial color="#64748b" /></mesh>
      <mesh position={[0.85, -0.05, 0.09]}><boxGeometry args={[0.9, 1, 0.04]} /><Glow color={c} i={0.5} /></mesh>
    </group>
  );
}

function Mobile({ c }: { c: string }) {
  return (
    <group rotation={[0, 0, -0.12]}>
      <mesh><boxGeometry args={[1.25, 2.4, 0.16]} /><meshStandardMaterial {...dark} /></mesh>
      <mesh position={[0, 0, 0.09]}><boxGeometry args={[1.07, 2.2, 0.02]} /><meshStandardMaterial color="#0f1a2e" emissive={c} emissiveIntensity={0.15} /></mesh>
      <mesh position={[0, 0.8, 0.11]}><boxGeometry args={[0.9, 0.4, 0.02]} /><Glow color={c} i={0.6} /></mesh>
      {[0.2, -0.3, -0.8].map((y) => (
        <mesh key={y} position={[0, y, 0.11]}><boxGeometry args={[0.9, 0.35, 0.02]} /><meshStandardMaterial color="#1e2b45" /></mesh>
      ))}
    </group>
  );
}

function Systems({ c }: { c: string }) {
  const hs = [0.8, 1.4, 1.0, 1.9, 1.3];
  return (
    <group position={[0, -0.6, 0]}>
      <mesh position={[0, -0.08, 0]}><boxGeometry args={[3.2, 0.16, 1.2]} /><meshStandardMaterial {...dark} /></mesh>
      {hs.map((h, i) => (
        <mesh key={i} position={[-1.2 + i * 0.6, h / 2, 0]}>
          <boxGeometry args={[0.4, h, 0.5]} />
          <meshStandardMaterial color="#e2e8f0" emissive={i % 2 ? "#38bdf8" : c} emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Desktop({ c }: { c: string }) {
  return (
    <group position={[0, 0.2, 0]}>
      <mesh><boxGeometry args={[3, 1.9, 0.14]} /><meshStandardMaterial {...dark} /></mesh>
      <mesh position={[0, 0, 0.08]}><boxGeometry args={[2.8, 1.7, 0.02]} /><meshStandardMaterial color="#0f1a2e" emissive={c} emissiveIntensity={0.35} /></mesh>
      <mesh position={[-0.6, 0.35, 0.1]}><boxGeometry args={[1.2, 0.5, 0.02]} /><Glow color={c} i={0.7} /></mesh>
      <mesh position={[0.65, -0.25, 0.1]}><boxGeometry args={[1.1, 0.7, 0.02]} /><meshStandardMaterial color="#1e2b45" /></mesh>
      <mesh position={[0, -1.2, 0]}><cylinderGeometry args={[0.12, 0.18, 0.5, 16]} /><meshStandardMaterial {...dark} /></mesh>
      <mesh position={[0, -1.48, 0]}><cylinderGeometry args={[0.7, 0.8, 0.08, 32]} /><meshStandardMaterial {...dark} /></mesh>
    </group>
  );
}

function Chatbot({ c }: { c: string }) {
  return (
    <group>
      <mesh position={[0, 0.1, 0]} scale={[1.5, 1, 0.7]}><sphereGeometry args={[1, 32, 32]} /><meshStandardMaterial {...dark} emissive={c} emissiveIntensity={0.25} /></mesh>
      <mesh position={[-0.55, -0.95, 0]} rotation={[0, 0, 0.5]}><coneGeometry args={[0.28, 0.6, 16]} /><meshStandardMaterial {...dark} emissive={c} emissiveIntensity={0.25} /></mesh>
      {[-0.55, 0, 0.55].map((x, i) => (
        <mesh key={i} position={[x, 0.1, 0.62]}><sphereGeometry args={[0.15, 16, 16]} /><Glow color={c} i={1.1 - i * 0.25} /></mesh>
      ))}
    </group>
  );
}

function Automation({ c }: { c: string }) {
  return (
    <group>
      <mesh><torusKnotGeometry args={[0.85, 0.26, 160, 20, 2, 3]} /><meshStandardMaterial color="#0b1220" metalness={0.8} roughness={0.2} emissive={c} emissiveIntensity={0.55} /></mesh>
    </group>
  );
}

const SHAPES = [Website, Mobile, Systems, Desktop, Chatbot, Automation];

/** Shows one service as a 3D object; grows in when `index` changes, leans to the cursor, drag to spin. */
export default function ServiceShape({ index, reduceMotion }: { index: number; reduceMotion: boolean }) {
  const Shape = SHAPES[index];
  const color = SERVICE_COLORS[index];
  const root = useRef<THREE.Group>(null);
  const born = useRef(0);
  const spin = useRef({ y: 0, vy: 0, active: false, x: 0 });
  const lastIndex = useRef(index);

  useFrame((state, dt) => {
    const g = root.current;
    if (!g) return;
    if (lastIndex.current !== index) {
      lastIndex.current = index;
      born.current = 0;
      spin.current.y = 0;
    }
    born.current = Math.min(1, born.current + dt * 2.2);
    const e = 1 - Math.pow(1 - born.current, 3);
    g.scale.setScalar(0.15 + 0.85 * e);

    const s = spin.current;
    if (!s.active) {
      s.y += s.vy;
      s.vy *= 0.94;
      if (!reduceMotion && Math.abs(s.vy) < 0.002) s.y += dt * 0.35;
    }
    const px = reduceMotion ? 0 : state.pointer.x;
    const py = reduceMotion ? 0 : state.pointer.y;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, s.y + px * 0.5 - 0.4 + (1 - e) * 2, 0.12);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -py * 0.3 + 0.15, 0.1);
    g.position.y = reduceMotion ? 0 : Math.sin(state.clock.elapsedTime * 1.2) * 0.07;
  });

  const down = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    (e.target as Element).setPointerCapture?.(e.pointerId);
    spin.current.active = true;
    spin.current.x = e.clientX;
  };
  const move = (e: ThreeEvent<PointerEvent>) => {
    const s = spin.current;
    if (!s.active) return;
    const dx = (e.clientX - s.x) * 0.012;
    s.y += dx;
    s.vy = dx * 0.3;
    s.x = e.clientX;
  };
  const up = (e: ThreeEvent<PointerEvent>) => {
    spin.current.active = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  return (
    <group
      ref={root}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerOver={() => (document.body.style.cursor = "grab")}
      onPointerOut={() => {
        spin.current.active = false;
        document.body.style.cursor = "";
      }}
    >
      <Shape c={color} />
    </group>
  );
}
