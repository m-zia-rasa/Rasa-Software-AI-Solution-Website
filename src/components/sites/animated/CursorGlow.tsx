"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/** Soft emerald light that trails the mouse. Hidden on touch devices. */
export default function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[400px] h-[400px] rounded-full bg-primary/15 blur-[90px] hidden [@media(hover:hover)]:block"
    />
  );
}
