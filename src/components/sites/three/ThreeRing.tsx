"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { Atom, Smartphone, Code2, Brain, Database, Cloud, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText } from "@/content/showcase";

const items = [
  { name: "React Native", Icon: Smartphone, c: "text-amber-400" },
  { name: "Next.js", Icon: Code2, c: "text-sky-400" },
  { name: "Python", Icon: Atom, c: "text-primary" },
  { name: "LangChain", Icon: Brain, c: "text-indigo-400" },
  { name: "PostgreSQL", Icon: Database, c: "text-sky-300" },
  { name: "AWS", Icon: Cloud, c: "text-amber-300" },
  { name: "OpenAI", Icon: Sparkles, c: "text-primary" },
];

/** A 3D carousel of our technologies (CSS 3D, no WebGL). Spins by itself; drag to spin it yourself. */
export default function ThreeRing() {
  const { t, language, isRTL, fontClass } = useLanguage();
  const txt = showcaseText[language];
  const reduce = !!useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const inView = useInView(wrap, { margin: "100px" });
  const rot = useMotionValue(0);
  const drag = useRef({ active: false, x: 0, v: 0 });
  const [radius, setRadius] = useState(300);

  useEffect(() => {
    const on = () => setRadius(window.innerWidth < 640 ? 170 : window.innerWidth < 1024 ? 250 : 320);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  useAnimationFrame((_, dt) => {
    if (!inView) return;
    const d = drag.current;
    if (d.active) return;
    // inertia from the last drag, then the gentle idle spin
    rot.set(rot.get() + d.v);
    d.v *= 0.95;
    if (!reduce && Math.abs(d.v) < 0.05) rot.set(rot.get() + dt * 0.012 * (isRTL ? -1 : 1));
  });

  const step = 360 / items.length;

  return (
    <section className={`py-16 sm:py-24 px-4 sm:px-6 overflow-hidden ${fontClass}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-section-title font-bold text-foreground mb-3">{t.techTitle}</h2>
        <p className="text-base text-muted-foreground mb-2">{t.techSubtitle}</p>
        <p className="text-xs text-muted-foreground/70 mb-8">{txt.hintDrag}</p>

        <div
          ref={wrap}
          dir="ltr"
          className="relative mx-auto h-[300px] sm:h-[340px] select-none cursor-grab active:cursor-grabbing"
          style={{ perspective: 1100, touchAction: "pan-y" }}
          onPointerDown={(e) => {
            drag.current = { active: true, x: e.clientX, v: 0 };
            (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
          }}
          onPointerMove={(e) => {
            const d = drag.current;
            if (!d.active) return;
            const dx = e.clientX - d.x;
            d.x = e.clientX;
            rot.set(rot.get() + dx * 0.4);
            d.v = dx * 0.12;
          }}
          onPointerUp={() => (drag.current.active = false)}
          onPointerCancel={() => (drag.current.active = false)}
        >
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-40 rounded-full bg-primary/15 blur-3xl" />
          <motion.div
            className="absolute left-1/2 top-1/2 w-0 h-0"
            style={{ transformStyle: "preserve-3d", rotateX: -8, rotateY: rot }}
          >
            {items.map((it, i) => (
              <div
                key={it.name}
                className="absolute -ms-[70px] -mt-[80px] w-[140px] h-[160px] rounded-2xl glass-card border border-border/70 flex flex-col items-center justify-center gap-4 shadow-2xl shadow-black/40"
                style={{
                  transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <it.Icon size={38} className={it.c} />
                <span className="text-sm font-bold text-foreground">{it.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
