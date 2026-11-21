"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/** Card that tilts in 3D toward the cursor and shows a spotlight under it. */
export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 200, damping: 20 });
  const sy = useSpring(py, { stiffness: 200, damping: 20 });
  const rotateY = useTransform(sx, [0, 1], [-9, 9]);
  const rotateX = useTransform(sy, [0, 1], [9, -9]);
  const mx = useTransform(px, (v) => `${v * 100}%`);
  const my = useTransform(py, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx} ${my}, rgba(16,185,129,0.18), transparent 70%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={reduce ? undefined : { scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`group relative h-full overflow-hidden ${className}`}
      >
        {!reduce && (
          <motion.div
            aria-hidden="true"
            style={{ background: spotlight }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        )}
        <div className="relative">{children}</div>
      </motion.div>
    </div>
  );
}
