"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import DepthCard from "./DepthCard";

const projects = [
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1257c5891-1786111871841.png",
    alt: "Mobile app interface showing map and traffic data",
    tags: ["React Native", "Expo", "Cross-Platform"],
    glow: "rgba(16,185,129,0.35)",
    accent: "text-primary",
    chip: "bg-primary/15 text-primary border-primary/30",
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15afdb008-1772093387845.png",
    alt: "AI chatbot interface with Persian text and neural network visualization",
    tags: ["Python", "LangChain", "NLP", "Vector DB"],
    glow: "rgba(99,102,241,0.35)",
    accent: "text-indigo-400",
    chip: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  },
];

/** 3D portfolio: each project is a card with image, text and tags floating on separate depth layers. */
export default function ThreePortfolio() {
  const { t, isRTL, fontClass } = useLanguage();
  const data = [
    { title: t.project1Title, desc: t.project1Desc },
    { title: t.project2Title, desc: t.project2Desc },
  ];

  return (
    <section
      id="portfolio"
      className={`py-20 sm:py-28 px-4 sm:px-6 relative bg-secondary/10 overflow-hidden ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-section-title font-bold text-foreground mb-3">{t.portfolioTitle}</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{t.portfolioSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {data.map((d, i) => {
            const p = projects[i];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <DepthCard className="relative">
                  {/* glow plate behind the card */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-70"
                    style={{ background: p.glow, transform: "translateZ(-60px)" }}
                  />
                  <div className="relative glass-card rounded-2xl border border-border/60 p-4 sm:p-5" style={{ transformStyle: "preserve-3d" }}>
                    <div className="relative h-52 sm:h-64 rounded-xl overflow-hidden" style={{ transform: "translateZ(30px)" }}>
                      <AppImage src={p.image} alt={p.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-5" style={{ transform: "translateZ(70px)" }}>
                      {p.tags.map((tag) => (
                        <span key={tag} className={`px-2.5 py-1 text-xs font-semibold rounded-lg border backdrop-blur ${p.chip}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 px-1" style={{ transform: "translateZ(50px)" }}>
                      <h3 className="text-xl font-bold text-foreground mb-2">{d.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.desc}</p>
                      <Link href="/portfolio" className={`inline-flex items-center gap-2 text-sm font-semibold ${p.accent} hover:opacity-70 transition-opacity`}>
                        {t.readMore}
                        <ExternalLink size={14} className={isRTL ? "-scale-x-100" : ""} />
                      </Link>
                    </div>
                  </div>
                </DepthCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
