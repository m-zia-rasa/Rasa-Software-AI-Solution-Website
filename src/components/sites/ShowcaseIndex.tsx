"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layout, Sparkles, Box, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText, siteModes, modePath, SiteMode } from "@/content/showcase";

const icons: Record<SiteMode, typeof Layout> = {
  simple: Layout,
  animated: Sparkles,
  "3d": Box,
};
const previews: Record<SiteMode, string> = {
  simple: "/assets/showcase/simple.jpg",
  animated: "/assets/showcase/animated.jpg",
  "3d": "/assets/showcase/3d.jpg",
};

export default function ShowcaseIndex() {
  const { language, dir, isRTL, fontClass } = useLanguage();
  const txt = showcaseText[language];
  return (
    <div className={`min-h-screen bg-background text-foreground ${fontClass}`} dir={dir}>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <h1 className="text-3xl sm:text-5xl font-bold mb-3">{txt.pageTitle}</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">{txt.pageSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteModes.map((m, i) => {
            const Icon = icons[m];
            return (
              <motion.div
                key={m}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={modePath(m)}
                  className="group flex flex-col h-full glass-card rounded-2xl overflow-hidden border border-border/60 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-border/60">
                    <Image
                      src={previews[m]}
                      alt={`${txt.modes[m].name} — ${txt.pageTitle}`}
                      width={1280}
                      height={720}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-border/40">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h2 className="text-xl font-bold">{txt.modes[m].name}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {txt.modes[m].desc}
                    </p>
                    <ul className="flex flex-col gap-1.5 mb-5">
                      {txt.modes[m].points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-foreground/80">
                          <Check size={14} className="text-primary shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {txt.open}
                      <ArrowRight size={14} className={`transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
