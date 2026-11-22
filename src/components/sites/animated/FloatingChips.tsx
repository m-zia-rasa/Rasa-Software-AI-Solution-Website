"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { Brain, Code2, Smartphone, Database, Cloud, Sparkles } from "lucide-react";

const chips = [
  { Icon: Brain, pos: "top-[22%] start-[7%]", depth: 38, color: "text-primary", delay: 0 },
  { Icon: Code2, pos: "top-[58%] start-[4%]", depth: 24, color: "text-indigo-400", delay: 0.8 },
  { Icon: Smartphone, pos: "top-[16%] end-[8%]", depth: 30, color: "text-amber-400", delay: 0.4 },
  { Icon: Database, pos: "top-[52%] end-[6%]", depth: 46, color: "text-sky-400", delay: 1.2 },
  { Icon: Cloud, pos: "top-[78%] start-[16%]", depth: 20, color: "text-emerald-300", delay: 0.6 },
  { Icon: Sparkles, pos: "top-[76%] end-[15%]", depth: 34, color: "text-primary", delay: 1.5 },
];

function Chip({
  c,
  mx,
  my,
  reduce,
}: {
  c: (typeof chips)[number];
  mx: MotionValue<number>;
  my: MotionValue<number>;
  reduce: boolean;
}) {
  const x = useTransform(mx, (v) => v * c.depth);
  const y = useTransform(my, (v) => v * c.depth);
  return (
    <motion.div style={{ x, y }} className={`absolute ${c.pos} hidden md:block`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1, y: reduce ? 0 : [0, -16, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.2 + c.delay },
          scale: { duration: 0.8, delay: 1.2 + c.delay, type: "spring" },
          y: { duration: 5 + c.delay, repeat: Infinity, ease: "easeInOut", delay: c.delay },
        }}
        className="w-14 h-14 rounded-2xl glass-card border border-border/60 flex items-center justify-center shadow-xl shadow-black/30"
      >
        <c.Icon size={24} className={c.color} />
      </motion.div>
    </motion.div>
  );
}

/** Icon chips floating around the hero; they drift with the mouse at different depths. */
export default function FloatingChips() {
  const reduce = !!useReducedMotion();
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, mx, my]);

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      {chips.map((c, i) => (
        <Chip key={i} c={c} mx={mx} my={my} reduce={reduce} />
      ))}
    </div>
  );
}
