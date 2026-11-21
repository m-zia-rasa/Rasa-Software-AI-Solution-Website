"use client";

import React from "react";
import ContactSection from "@/app/components/ContactSection";
import DepthCard from "./DepthCard";

/** 3D contact: the contact card floats in perspective with depth orbs behind it. */
export default function ThreeContact() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ perspective: 800 }}>
        {[
          ["8%", "18%", 90, "bg-primary/25"],
          ["86%", "28%", 60, "bg-accent/25"],
          ["14%", "74%", 50, "bg-indigo-500/25"],
          ["82%", "80%", 110, "bg-primary/20"],
        ].map(([l, tp, s, c], i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-xl animate-pulse-slow ${c}`}
            style={{ left: l as string, top: tp as string, width: s as number, height: s as number, transform: `translateZ(${i * 30}px)`, animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>
      <DepthCard max={3}>
        <ContactSection magnetic />
      </DepthCard>
    </div>
  );
}
