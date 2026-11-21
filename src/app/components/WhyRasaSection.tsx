"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  Globe,
  Shield,
  Layers,
  Code2,
} from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyRasaSection() {
  const { t, isRTL, fontClass } = useLanguage();

  const bullets = [
    { label: t?.whyBullet1, icon: Globe, color: "text-primary" },
    { label: t?.whyBullet2, icon: Shield, color: "text-accent" },
    { label: t?.whyBullet3, icon: Layers, color: "text-indigo-400" },
    { label: t?.whyBullet4, icon: Code2, color: "text-primary" },
  ];

  return (
    <section
      id="why-rasa"
      className={`py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background blobs */}
      <div
        className={`absolute top-1/3 ${isRTL ? "right-0" : "left-0"} w-80 h-80 blob-emerald opacity-50 pointer-events-none`}
      />
      <div
        className={`absolute bottom-1/3 ${isRTL ? "left-0" : "right-0"} w-64 h-64 blob-amber opacity-40 pointer-events-none`}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid lg:grid-cols-5 gap-12 lg:gap-16 items-center`}>
          {/* Left: Image + Credential Card (60%) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-3 relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/60">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_16f00b903-1776805810803.png"
                alt="Software engineer working on AI code — dark screen with green code lines and data visualizations, professional developer environment"
                width={800}
                height={500}
                className="w-full h-64 sm:h-80 object-cover opacity-70"
              />

              {/* Scrim: dark text area at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

              {/* Floating credential card */}
              <div
                className={`absolute bottom-6 ${isRTL ? "right-6" : "left-6"} glass-card rounded-xl p-4 border border-border/80 max-w-xs`}
              >
                <div
                  className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 shrink-0">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">
                      {t.academicBackground}
                    </p>
                    <p className="text-sm font-bold text-foreground leading-tight">
                      M.Sc. Computer Science
                    </p>
                    <p className="text-xs text-primary font-medium mt-0.5">
                      Software Engineering & AI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats below image */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                {
                  value: t.whyStat1Value,
                  label: t.whyStat1Label,
                  color: "text-primary",
                },
                {
                  value: t.whyStat2Value,
                  label: t.whyStat2Label,
                  color: "text-accent",
                },
                {
                  value: t.whyStat3Value,
                  label: t.whyStat3Label,
                  color: "text-indigo-400",
                },
              ]?.map((stat) => (
                <div
                  key={stat?.label}
                  className="glass-card rounded-xl p-4 border border-border/60 text-center"
                >
                  <p className={`text-xl font-bold ${stat?.color}`}>
                    {stat?.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {stat?.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text Content (40%) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`lg:col-span-2 flex flex-col gap-6 ${isRTL ? "lg:order-1 items-end text-right" : "lg:order-2 items-start text-left"}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                Why RASA
              </span>
            </div>

            <h2 className="text-section-title font-bold text-foreground">
              {t?.whyTitle}
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              {t?.whySubtitle}
            </p>

            {/* Founder quote */}
            <div
              className={`relative pl-4 ${isRTL ? "pl-0 pr-4 border-r-2 border-l-0" : "border-l-2"} border-primary`}
            >
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                {t?.whyFounder}
              </p>
            </div>

            {/* Bullet points */}
            <div className="flex flex-col gap-3 w-full">
              {bullets?.map((bullet, i) => {
                const Icon = bullet?.icon;
                return (
                  <motion.div
                    key={bullet?.label}
                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className={`flex items-center gap-3 glass-card rounded-xl px-4 py-3 border border-border/60 hover:border-primary/40 transition-colors duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-transparent`}
                    >
                      <Icon size={16} className={bullet?.color} />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {bullet?.label}
                    </span>
                    <CheckCircle2
                      size={14}
                      className={`${bullet?.color} opacity-60 ${isRTL ? "mr-auto" : "ml-auto"}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
