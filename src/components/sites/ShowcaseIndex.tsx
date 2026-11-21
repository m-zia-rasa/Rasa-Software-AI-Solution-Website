"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layout, Sparkles, Box, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText, siteModes, modePath, SiteMode } from "@/content/showcase";

const icons: Record<SiteMode, typeof Layout> = {
  simple: Layout,
  animated: Sparkles,
  "3d": Box,
};
const live: Record<SiteMode, boolean> = { simple: true, animated: true, "3d": true };

export default function ShowcaseIndex() {
  const { language, dir, isRTL, fontClass } = useLanguage();
  const txt = showcaseText[language];
  return (
    <div className={`min-h-screen bg-background text-foreground ${fontClass}`} dir={dir}>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <h1 className="text-3xl sm:text-5xl font-bold mb-3">{txt.pageTitle}</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">{txt.pageSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  className="group block h-full glass-card rounded-2xl p-6 border border-border/60 hover:border-primary/50 transition-colors"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-border/40 mb-5">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{txt.modes[m].name}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {txt.modes[m].desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                    {live[m] ? txt.open : txt.soon}
                    <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
                  </span>
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
