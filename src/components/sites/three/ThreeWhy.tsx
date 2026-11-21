"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe, Shield, Layers, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import DepthCard from "./DepthCard";

const SIZE = 230;
const HALF = SIZE / 2;

/** 3D "Why RASA": a slowly turning cube whose four faces carry the key reasons, plus depth stat cards. */
export default function ThreeWhy() {
  const { t, isRTL, fontClass } = useLanguage();

  const faces = [
    { label: t.whyBullet1, Icon: Globe, color: "#10b981" },
    { label: t.whyBullet2, Icon: Shield, color: "#f59e0b" },
    { label: t.whyBullet3, Icon: Layers, color: "#818cf8" },
    { label: t.whyBullet4, Icon: Code2, color: "#34d399" },
  ];
  const stats = [
    { value: t.whyStat1Value, label: t.whyStat1Label, color: "text-primary" },
    { value: t.whyStat2Value, label: t.whyStat2Label, color: "text-accent" },
    { value: t.whyStat3Value, label: t.whyStat3Label, color: "text-indigo-400" },
  ];

  return (
    <section
      id="why-rasa"
      className={`py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute top-1/3 left-0 w-80 h-80 blob-emerald opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 blob-amber opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        {/* cube */}
        <div className="spin-cube-wrap flex justify-center items-center min-h-[340px]" style={{ perspective: 1000 }} dir="ltr">
          <div className="spin-cube relative" style={{ width: SIZE, height: SIZE }}>
            {faces.map(({ label, Icon, color }, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl border flex flex-col items-center justify-center gap-3 p-5 text-center backdrop-blur-sm"
                style={{
                  transform: `rotateY(${i * 90}deg) translateZ(${HALF}px)`,
                  background: "linear-gradient(135deg, rgba(15,23,42,0.88), rgba(30,41,59,0.78))",
                  borderColor: `${color}66`,
                  boxShadow: `inset 0 0 40px ${color}22, 0 0 30px ${color}22`,
                  backfaceVisibility: "hidden",
                }}
                dir={isRTL ? "rtl" : "ltr"}
              >
                <Icon size={34} style={{ color }} />
                <span className="text-sm font-semibold text-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* text + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3 self-start glass-card rounded-xl p-3 border border-border/80">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">{t.academicBackground}</p>
              <p className="text-sm font-bold text-foreground">M.Sc. Computer Science</p>
            </div>
          </div>
          <h2 className="text-section-title font-bold text-foreground">{t.whyTitle}</h2>
          <p className="text-base text-muted-foreground leading-relaxed">{t.whySubtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.whyFounder}</p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-2">
            {stats.map((s) => (
              <DepthCard key={s.label} max={14}>
                <div className="glass-card rounded-xl border border-border/60 p-4 text-center h-full" style={{ transformStyle: "preserve-3d" }}>
                  <p className={`text-xl sm:text-2xl font-extrabold ${s.color}`} style={{ transform: "translateZ(40px)" }}>
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1" style={{ transform: "translateZ(20px)" }}>
                    {s.label}
                  </p>
                </div>
              </DepthCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
