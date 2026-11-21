"use client";

import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView, useReducedMotion } from "framer-motion";
import ServiceShape from "./ServiceShape";
import { SERVICE_COLORS } from "./colors";
import AdaptiveQuality from "./AdaptiveQuality";

/** Canvas that renders the selected service. Pauses when off-screen and lowers quality if slow. */
export default function ServicesStage({ index }: { index: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const visible = useInView(wrap, { margin: "100px" });
  const reduce = !!useReducedMotion();
  const [dpr, setDpr] = useState<[number, number]>([1, 1.75]);
  const [lost, setLost] = useState(false);

  return (
    <div ref={wrap} className="w-full h-full min-h-[320px]">
      {lost ? null : (
        <Canvas
          dpr={dpr}
          frameloop={visible ? "always" : "never"}
          camera={{ position: [0, 0, 6.2], fov: 42 }}
          gl={{ antialias: dpr[1] > 1, alpha: true, powerPreference: "high-performance" }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", (e) => {
              e.preventDefault();
              setLost(true);
            });
          }}
          style={{ touchAction: "pan-y" }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 4, 5]} intensity={55} color="#ffffff" />
          <pointLight position={[-5, -2, 3]} intensity={35} color={SERVICE_COLORS[index]} />
          <ServiceShape index={index} reduceMotion={reduce} />
          <AdaptiveQuality onDegrade={() => setDpr([1, 1])} />
        </Canvas>
      )}
    </div>
  );
}
