"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CinematicHero() {
  const { t, isRTL } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: text drifts up and fades, orbs drift at different speeds.
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 220]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.3]);

  const words = t.heroHeadline.split(" ");

  const wordVariants: Variants = {
    hidden: { y: "115%", rotate: reduce ? 0 : 4 },
    show: (i: number) => ({
      y: "0%",
      rotate: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.07, ease: EASE },
    }),
  };

  const fadeUp = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: EASE } },
  });

  const afterWords = 0.5 + words.length * 0.07 + 0.3;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Background layers */}
      <motion.div
        aria-hidden="true"
        style={{ scale: gridScale }}
        className="absolute inset-0 grid-bg opacity-25 pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: orb1Y }}
        className="absolute -top-24 left-[8%] w-[34rem] h-[34rem] rounded-full bg-primary/25 blur-[120px] pointer-events-none"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        style={{ y: orb2Y }}
        className="absolute bottom-0 right-[6%] w-[28rem] h-[28rem] rounded-full bg-indigo-500/25 blur-[120px] pointer-events-none"
        animate={reduce ? undefined : { scale: [1.1, 0.95, 1.1], x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/15 blur-[100px] pointer-events-none"
        animate={reduce ? undefined : { y: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-7 pt-20"
      >
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
          <span className="text-xs font-semibold text-primary">{t.heroBadge}</span>
        </motion.div>

        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight flex flex-wrap justify-center gap-x-[0.28em]"
          aria-label={t.heroHeadline}
        >
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.12em]" aria-hidden="true">
              <motion.span
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="show"
                className={`inline-block ${
                  w.toLowerCase() === "ai" || w === "AI" ? "gradient-text" : ""
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp(afterWords)}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {t.heroSubheadline}
        </motion.p>

        <motion.div
          variants={fadeUp(afterWords + 0.15)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-xl glow-emerald hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            {t.heroCta1}
            <ArrowRight
              size={16}
              className={`transition-transform duration-300 ${
                isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
              }`}
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border bg-secondary/50 backdrop-blur text-foreground font-semibold text-sm rounded-xl hover:border-primary/50 hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {t.ctaBtn1}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: afterWords + 0.6, duration: 1 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
