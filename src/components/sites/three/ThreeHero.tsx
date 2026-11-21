"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText } from "@/content/showcase";

// three.js is large: load it only for this page, and only on the client.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/** Lightweight CSS-only stand-in for the 3D gem (no WebGL, no JS animation). */
function LiteGem() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-start md:items-center justify-center md:justify-end md:pe-[12%] pt-24 md:pt-0">
      <div className="relative w-56 h-56 md:w-96 md:h-96">
        <div className="absolute inset-0 rounded-full bg-primary/25 blur-3xl" />
        <div
          className="absolute inset-[12%] bg-gradient-to-br from-primary via-emerald-700 to-indigo-600 shadow-[0_0_80px_rgba(16,185,129,0.4)] animate-pulse-slow"
          style={{ clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)" }}
        />
        <div
          className="absolute inset-0 border border-primary/30"
          style={{ clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)" }}
        />
      </div>
    </div>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ThreeHero({ lite = false }: { lite?: boolean }) {
  const { t, language, isRTL } = useLanguage();
  const txt = showcaseText[language];

  return (
    <section className="relative min-h-screen overflow-hidden flex items-end md:items-center">
      {/* CSS fallback / backdrop (visible while WebGL loads or when unsupported) */}
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-20" />
      <div aria-hidden="true" className="absolute top-1/3 right-[10%] w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-[120px]" />
      <div aria-hidden="true" className="absolute bottom-0 left-[10%] w-[24rem] h-[24rem] rounded-full bg-indigo-500/20 blur-[120px]" />

      {/* WebGL canvas */}
      {lite ? <LiteGem /> : (
        <div className="absolute inset-0">
          <HeroScene />
        </div>
      )}

      {/* Text overlay: lets pointer events through except on the buttons */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-xl flex flex-col gap-6"
        >
          <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur text-xs font-semibold text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
            {t.heroBadge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            {t.heroHeadline}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-xl glow-emerald hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              {t.heroCta1}
              <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-border bg-secondary/50 backdrop-blur font-semibold text-sm rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              {t.ctaBtn1}
            </a>
          </div>
          {!lite && (
          <p className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <MousePointer2 size={14} />
            {txt.hint3d}
          </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
