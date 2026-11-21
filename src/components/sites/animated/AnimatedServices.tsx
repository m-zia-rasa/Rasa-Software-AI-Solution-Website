"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Smartphone, Zap, Globe, LayoutDashboard, Monitor } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText } from "@/content/showcase";
import TiltCard from "./TiltCard";
import Counter from "./Counter";

const icons = [Globe, Smartphone, LayoutDashboard, Monitor, Brain, Zap];
const colors = [
  "text-primary", "text-accent", "text-indigo-400",
  "text-primary", "text-accent", "text-indigo-400",
];

export default function AnimatedServices() {
  const { t, language, isRTL, fontClass } = useLanguage();
  const txt = showcaseText[language];

  const services = [
    { title: t.service4Title, desc: t.service4Desc },
    { title: t.service2Title, desc: t.service2Desc },
    { title: t.service5Title, desc: t.service5Desc },
    { title: t.service6Title, desc: t.service6Desc },
    { title: t.service1Title, desc: t.service1Desc },
    { title: t.service3Title, desc: t.service3Desc },
  ];

  const stats = [
    { value: 6, suffix: "", label: txt.statServices },
    { value: 3, suffix: "", label: txt.statLanguages },
    { value: 24, suffix: txt.hourUnit, label: txt.statResponse },
  ];

  return (
    <section
      id="services"
      className={`py-20 sm:py-28 px-4 sm:px-6 ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-section-title font-bold text-foreground mb-3">
            {t.servicesTitle}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </motion.div>

        {/* Animated counters */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mb-14">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl sm:text-5xl font-extrabold gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className="glass-card rounded-2xl p-6 sm:p-8 border border-border/60 hover:border-primary/40 transition-colors">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-border/40 mb-5">
                    <motion.span
                      className="block"
                      whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={24} className={colors[i]} />
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
