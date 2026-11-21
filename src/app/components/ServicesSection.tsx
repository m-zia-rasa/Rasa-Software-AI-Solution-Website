"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Smartphone,
  Zap,
  ArrowRight,
  Globe,
  LayoutDashboard,
  Monitor,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const serviceIcons = [Globe, Smartphone, LayoutDashboard, Monitor, Brain, Zap];

const serviceGradients = [
  "from-primary/20 to-primary/5",
  "from-accent/20 to-accent/5",
  "from-indigo-500/20 to-indigo-500/5",
  "from-primary/20 to-primary/5",
  "from-accent/20 to-accent/5",
  "from-indigo-500/20 to-indigo-500/5",
];

const serviceIconColors = [
  "text-primary",
  "text-accent",
  "text-indigo-400",
  "text-primary",
  "text-accent",
  "text-indigo-400",
];

const serviceBorderHover = [
  "hover:border-primary/50 hover:shadow-emerald-500/10",
  "hover:border-accent/50 hover:shadow-amber-500/10",
  "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
  "hover:border-primary/50 hover:shadow-emerald-500/10",
  "hover:border-accent/50 hover:shadow-amber-500/10",
  "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
];

export default function ServicesSection() {
  const { t, isRTL, fontClass } = useLanguage();

  const services = [
    { title: t.service4Title, desc: t.service4Desc },
    { title: t.service2Title, desc: t.service2Desc },
    { title: t.service5Title, desc: t.service5Desc },
    { title: t.service6Title, desc: t.service6Desc },
    { title: t.service1Title, desc: t.service1Desc },
    { title: t.service3Title, desc: t.service3Desc },
  ];

  return (
    <section
      id="services"
      className={`py-20 sm:py-24 px-4 sm:px-6 relative ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-12 sm:mb-16 ${isRTL ? "text-right" : "text-left"} max-w-2xl ${isRTL ? "mr-0 ml-auto" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              {t.navServices}
            </span>
          </div>
          <h2 className="text-section-title font-bold text-foreground mb-3">
            {t?.servicesTitle}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t?.servicesSubtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services?.map((service, i) => {
            const Icon = serviceIcons?.[i];
            return (
              <motion.div
                key={service?.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative glass-card rounded-2xl p-6 sm:p-8 border border-border/60 service-card-hover animated-border ${serviceBorderHover?.[i]} hover:shadow-xl`}
              >
                {/* Icon container */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${serviceGradients?.[i]} mb-5 border border-border/40`}
                >
                  <Icon size={24} className={serviceIconColors?.[i]} />
                </div>
                {/* Content */}
                <h3
                  className={`text-lg font-bold text-foreground mb-3 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {service?.title}
                </h3>
                <p
                  className={`text-sm text-muted-foreground leading-relaxed ${isRTL ? "text-right" : "text-left"}`}
                >
                  {service?.desc}
                </p>
                {/* Arrow link */}
                <Link
                  href="/#contact"
                  className={`mt-5 flex items-center gap-2 text-xs font-semibold ${serviceIconColors?.[i]} opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span>{t.learnMore}</span>
                  <ArrowRight
                    size={14}
                    className={`transition-transform duration-300 ${isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`}
                  />
                </Link>
                {/* Decorative corner */}
                <div
                  className={`absolute top-0 ${isRTL ? "left-0 rounded-tl-2xl" : "right-0 rounded-tr-2xl"} w-16 h-16 bg-gradient-to-br ${serviceGradients?.[i]} opacity-30 pointer-events-none`}
                  style={{ borderRadius: "0 0.75rem 0 0" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
