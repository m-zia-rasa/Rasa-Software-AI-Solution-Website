"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Smartphone,
  Code2,
  Brain,
  Database,
  Cloud,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  { name: "React Native", Icon: Smartphone },
  { name: "Next.js", Icon: Code2 },
  { name: "Python", Icon: Atom },
  { name: "LangChain", Icon: Brain },
  { name: "PostgreSQL", Icon: Database },
  { name: "AWS", Icon: Cloud },
  { name: "OpenAI", Icon: Sparkles },
];

export default function TechStackSection() {
  const { t, isRTL, fontClass } = useLanguage();
  const doubled = [...techStack, ...techStack];

  return (
    <section
      className={`py-12 border-y border-border/40 bg-secondary/20 relative overflow-hidden ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
          {t?.techTitle}
        </p>
        <p className="text-center text-sm text-muted-foreground/80 mb-8">
          {t?.techSubtitle}
        </p>
      </div>

      <div className="relative overflow-hidden mb-10">
        <div className="pointer-events-none absolute inset-y-0 start-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 end-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 px-6 py-2.5 mx-2 glass-card rounded-lg border border-border/60 hover:border-primary/40 transition-all duration-300 shrink-0"
            >
              <tech.Icon size={18} className="text-primary" />
              <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: t?.statsYears, label: t?.statsLabel1 },
            { value: t?.statsProjects, label: t?.statsLabel2 },
            { value: t?.statsClients, label: t?.statsLabel3 },
          ]?.map((stat) => (
            <div key={stat?.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                {stat?.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest text-center">
                {stat?.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
