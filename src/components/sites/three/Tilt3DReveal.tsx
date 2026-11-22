"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Each section swings up from a tilted, deeper plane into place as it enters (perspective reveal). */
export default function Tilt3DReveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        initial={{ opacity: 0, rotateX: 22, y: 80, z: -160 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "50% 100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
