"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/** Counts from 0 to `value` when scrolled into view, with locale digits (۱۲۳ in Dari/Pashto). */
export default function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const { language, isRTL } = useLanguage();
  const locale = language === "en" ? "en-US" : "fa-IR";
  const fmt = (n: number) => Math.round(n).toLocaleString(locale);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!inView || reduce) {
      el.textContent = fmt(reduce ? value : 0);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = fmt(v);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce, locale]);

  return (
    <span dir={isRTL ? "rtl" : "ltr"} className="inline-flex items-baseline gap-1">
      <span ref={ref} aria-label={`${value}${suffix}`}>
        {fmt(0)}
      </span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
