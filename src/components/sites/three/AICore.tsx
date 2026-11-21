"use client";

import React, { useMemo, useRef, useState } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

const PALETTE = ["#10b981", "#f59e0b", "#6366f1", "#38bdf8"];

/**
 * The interactive "AI core": a glowing faceted gem with orbiting rings and satellites.
 * - Move the mouse: the whole object leans toward the cursor.
 * - Drag: spin it (with inertia).
 * - Click: pulse and cycle to the next brand color.
 */
export default function AICore({ reduceMotion }: { reduceMotion: boolean }) {
  const root = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const rings = useRef<THREE.Group>(null);
  const [colorIdx, setColorIdx] = useState(0);
  const pulse = useRef(0);
  const drag = useRef({ active: false, x: 0, y: 0, vx: 0, vy: 0 });
  const spin = useRef({ x: 0, y: 0 });
  const color = useMemo(() => new THREE.Color(PALETTE[0]), []);
  const target = useMemo(() => new THREE.Color(PALETTE[0]), []);
  const [hovered, setHovered] = useState(false);

  const satellites = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        angle: (i / 6) * Math.PI * 2,
        radius: 2.5 + (i % 3) * 0.35,
        tilt: (i % 3) * 0.6 - 0.6,
        speed: 0.25 + (i % 3) * 0.08,
        size: 0.1 + (i % 2) * 0.06,
      })),
    [],
  );
  const satRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    target.set(PALETTE[colorIdx]);
    color.lerp(target, Math.min(1, dt * 4));

    // Pointer lean + drag inertia
    const d = drag.current;
    if (!d.active) {
      spin.current.x += d.vx;
      spin.current.y += d.vy;
      d.vx *= 0.94;
      d.vy *= 0.94;
    }
    if (root.current) {
      const lx = reduceMotion ? 0 : state.pointer.y * -0.35;
      const ly = reduceMotion ? 0 : state.pointer.x * 0.5;
      root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, lx + spin.current.x, 0.08);
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, ly + spin.current.y, 0.08);
    }

    pulse.current = THREE.MathUtils.lerp(pulse.current, 0, 0.06);
    const s = 1 + pulse.current * 0.35 + (hovered ? 0.05 : 0);
    if (core.current) {
      core.current.scale.setScalar(THREE.MathUtils.lerp(core.current.scale.x, s, 0.15));
      if (!reduceMotion) {
        core.current.rotation.y += dt * 0.35;
        core.current.rotation.x += dt * 0.15;
      }
      const m = core.current.material as THREE.MeshStandardMaterial;
      m.emissive.copy(color);
      m.emissiveIntensity = 0.5 + pulse.current * 1.5 + Math.sin(t * 2) * 0.1;
    }
    if (shell.current) {
      if (!reduceMotion) {
        shell.current.rotation.y -= dt * 0.2;
        shell.current.rotation.z += dt * 0.1;
      }
      (shell.current.material as THREE.MeshBasicMaterial).color.copy(color);
    }
    if (rings.current && !reduceMotion) {
      rings.current.rotation.z += dt * 0.12;
      rings.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
    satellites.forEach((sat, i) => {
      const m = satRefs.current[i];
      if (!m) return;
      const a = sat.angle + (reduceMotion ? 0 : t * sat.speed);
      m.position.set(
        Math.cos(a) * sat.radius,
        Math.sin(a * 1.3) * sat.tilt,
        Math.sin(a) * sat.radius,
      );
      (m.material as THREE.MeshStandardMaterial).emissive.copy(color);
    });
  });

  const onDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    (e.target as Element).setPointerCapture?.(e.pointerId);
    drag.current = { active: true, x: e.clientX, y: e.clientY, vx: 0, vy: 0 };
  };
  const onMove = (e: ThreeEvent<PointerEvent>) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = (e.clientX - d.x) * 0.01;
    const dy = (e.clientY - d.y) * 0.01;
    spin.current.y += dx;
    spin.current.x += dy;
    d.vx = dy * 0.3;
    d.vy = dx * 0.3;
    d.x = e.clientX;
    d.y = e.clientY;
  };
  const onUp = (e: ThreeEvent<PointerEvent>) => {
    const d = drag.current;
    const moved = Math.abs(d.vx) + Math.abs(d.vy) > 0.004;
    d.active = false;
    if (!moved) {
      pulse.current = 1;
      setColorIdx((i) => (i + 1) % PALETTE.length);
    }
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  return (
    <group ref={root}>
      {/* interactive faceted core */}
      <mesh
        ref={core}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "grab";
        }}
        onPointerOut={() => {
          setHovered(false);
          drag.current.active = false;
          document.body.style.cursor = "";
        }}
      >
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial
          color="#0b1220"
          metalness={0.85}
          roughness={0.25}
          flatShading
          emissive={PALETTE[0]}
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* wireframe shell */}
      <mesh ref={shell} scale={1.55}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshBasicMaterial color={PALETTE[0]} wireframe transparent opacity={0.28} />
      </mesh>
      {/* orbit rings */}
      <group ref={rings}>
        {[2.5, 2.85, 3.2].map((r, i) => (
          <mesh key={r} rotation={[Math.PI / 2 + (i - 1) * 0.5, 0, i * 0.8]}>
            <torusGeometry args={[r, 0.008, 8, 120]} />
            <meshBasicMaterial color="#94a3b8" transparent opacity={0.35} />
          </mesh>
        ))}
      </group>
      {/* satellites (stand for services) */}
      {satellites.map((s, i) => (
        <mesh key={i} ref={(el) => { satRefs.current[i] = el; }}>
          <octahedronGeometry args={[s.size, 0]} />
          <meshStandardMaterial color="#e2e8f0" emissive={PALETTE[0]} emissiveIntensity={0.9} />
        </mesh>
      ))}
    </group>
  );
}
