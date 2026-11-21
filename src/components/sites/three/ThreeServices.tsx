"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, LayoutDashboard, Monitor, Brain, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText } from "@/content/showcase";
import { SERVICE_COLORS } from "./colors";

const ServicesStage = dynamic(() => import("./ServicesStage"), { ssr: false });
const icons = [Globe, Smartphone, LayoutDashboard, Monitor, Brain, Zap];

/** 3D services: pick a service from the list and see it as an interactive 3D object. */
export default function ThreeServices() {
  const { t, language, isRTL, fontClass } = useLanguage();
  const txt = showcaseText[language];
  const [active, setActive] = useState(0);

  const services = [
    { title: t.service4Title, desc: t.service4Desc },
    { title: t.service2Title, desc: t.service2Desc },
    { title: t.service5Title, desc: t.service5Desc },
    { title: t.service6Title, desc: t.service6Desc },
    { title: t.service1Title, desc: t.service1Desc },
    { title: t.service3Title, desc: t.service3Desc },
  ];

  return (
    <section id="services" className={`py-20 sm:py-28 px-4 sm:px-6 ${fontClass}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-section-title font-bold text-foreground mb-3">{t.servicesTitle}</h2>
          <p className="text-base text-muted-foreground leading-relaxed">{t.servicesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div role="tablist" aria-label={t.servicesTitle} className="flex flex-col gap-2">
            {services.map((s, i) => {
              const Icon = icons[i];
              const on = i === active;
              return (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`text-start rounded-xl border px-4 py-3 transition-all duration-300 ${
                    on ? "border-primary/60 bg-primary/10" : "border-border/60 bg-secondary/30 hover:border-border"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={20} style={{ color: SERVICE_COLORS[i] }} />
                    <span className="font-semibold text-foreground">{s.title}</span>
                  </span>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden text-sm text-muted-foreground leading-relaxed pt-2"
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="relative rounded-2xl border border-border/60 glass-card overflow-hidden h-[340px] sm:h-[440px] lg:h-auto lg:min-h-[480px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 transition-colors duration-700"
              style={{ background: `radial-gradient(circle at 50% 55%, ${SERVICE_COLORS[active]}33, transparent 65%)` }}
            />
            <div className="absolute inset-0">
              <ServicesStage index={active} />
            </div>
            <span className="absolute bottom-3 inset-x-0 text-center text-xs text-muted-foreground pointer-events-none">
              {txt.hintDrag}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
