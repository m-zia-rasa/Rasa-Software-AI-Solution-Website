"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the top of the viewport showing page scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] bg-gradient-to-r from-primary via-accent to-indigo-400"
    />
  );
}
