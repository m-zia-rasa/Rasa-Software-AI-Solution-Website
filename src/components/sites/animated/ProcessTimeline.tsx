"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fxText } from "@/content/showcaseFx";

const icons = [Search, PenTool, Code2, Rocket];

function StepCard({
  i,
  n,
  progress,
  reduce,
  title,
  body,
}: {
  i: number;
  n: number;
  progress: MotionValue<number>;
  reduce: boolean;
  title: string;
  body: string;
}) {
  const start = i / n;
  const lit = useTransform(progress, [start - 0.05, start + 0.12], [0, 1]);
  const scale = useTransform(lit, [0, 1], [reduce ? 1 : 0.85, 1]);
  const opacity = useTransform(lit, [0, 1], [reduce ? 1 : 0.35, 1]);
  const Icon = icons[i];
  return (
    <motion.li style={{ scale, opacity }} className="relative flex md:flex-col items-start md:items-center gap-4 md:text-center">
      <div className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-primary/15 border border-primary/40 flex items-center justify-center glow-emerald">
        <Icon size={24} className="text-primary" />
        <span className="absolute -top-2 -end-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
          {i + 1}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>
    </motion.li>
  );
}

/** "How we work": the connecting line draws itself and each step lights up as you scroll. */
export default function ProcessTimeline() {
  const { language, isRTL, fontClass } = useLanguage();
  const reduce = !!useReducedMotion();
  const x = fxText[language];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const n = x.steps.length;

  return (
    <section ref={ref} id="process" className={`py-16 sm:py-24 px-4 sm:px-6 ${fontClass}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-section-title font-bold text-foreground mb-3">{x.processTitle}</h2>
          <p className="text-base text-muted-foreground">{x.processSub}</p>
        </div>
        <div className="relative">
          {/* horizontal line (md+) */}
          <div className="hidden md:block absolute top-7 inset-x-[12.5%] h-0.5 bg-border/60">
            <motion.div
              style={{ scaleX: line, transformOrigin: isRTL ? "100% 50%" : "0% 50%" }}
              className="h-full bg-gradient-to-r from-primary to-amber-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
            />
          </div>
          {/* vertical line (mobile) */}
          <div className="md:hidden absolute top-7 bottom-7 start-7 w-0.5 bg-border/60 -translate-x-1/2 rtl:translate-x-1/2">
            <motion.div
              style={{ scaleY: line, transformOrigin: "50% 0%" }}
              className="w-full h-full bg-gradient-to-b from-primary to-amber-400"
            />
          </div>
          <ol className="grid md:grid-cols-4 gap-10 md:gap-6">
            {x.steps.map((s, i) => (
              <StepCard key={i} i={i} n={n} progress={line} reduce={reduce} title={s.title} body={s.body} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
