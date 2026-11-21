"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView, useReducedMotion } from "framer-motion";
import AICore from "./AICore";
import Particles from "./Particles";
import AdaptiveQuality from "./AdaptiveQuality";

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** The WebGL canvas for the 3D hero. Renders nothing (CSS fallback shows) when WebGL is unavailable. */
export default function HeroScene() {
  const reduce = !!useReducedMotion();
  const [ok, setOk] = useState<boolean | null>(null);
  const [narrow, setNarrow] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const visible = useInView(wrap, { margin: "100px" });
  const [dpr, setDpr] = useState<[number, number]>([1, 1.75]);
  const [degraded, setDegraded] = useState(false);

  useEffect(() => {
    setOk(hasWebGL());
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setNarrow(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  if (!ok) return <div ref={wrap} />;

  return (
    <div ref={wrap} className="w-full h-full">
    <Canvas
      dpr={dpr}
      frameloop={visible ? "always" : "never"}
      camera={{ position: [0, 0, narrow ? 9.5 : 7.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 4, 5]} intensity={60} color="#34d399" />
      <pointLight position={[-6, -3, 3]} intensity={40} color="#6366f1" />
      <pointLight position={[0, 5, -4]} intensity={25} color="#f59e0b" />
      <group position={[narrow ? 0 : 2.1, narrow ? 2.3 : 0, 0]} scale={narrow ? 0.7 : 1}>
        <AICore reduceMotion={reduce} />
      </group>
      <Particles count={degraded ? 150 : narrow ? 350 : 700} reduceMotion={reduce} />
      <AdaptiveQuality
        onDegrade={() => {
          setDpr([1, 1]);
          setDegraded(true);
        }}
      />
    </Canvas>
    </div>
  );
}
