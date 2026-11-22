"use client";

import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { promoVideo } from "@/content/video";

/** Company ad video; the file follows the selected language (English / Dari-Pashto). */
export default function PromoVideoSection() {
  const { language, isRTL, fontClass } = useLanguage();
  const v = promoVideo[language];
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    ref.current?.play().catch(() => {});
  };

  return (
    <section
      id="video"
      className={`py-16 sm:py-24 px-4 sm:px-6 ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-section-title font-bold text-foreground mb-3">{v.title}</h2>
          <p className="text-base text-muted-foreground leading-relaxed">{v.subtitle}</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border/60 glass-card shadow-2xl shadow-black/40 aspect-video bg-background">
          {/* key forces a fresh element (and source) when the language changes */}
          <video
            key={v.src}
            ref={ref}
            src={v.src}
            poster={v.poster}
            controls={started}
            preload="none"
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setStarted(false)}
          />
          {!started && (
            <button
              type="button"
              dir="ltr"
              onClick={start}
              aria-label={v.play}
              className="absolute inset-0 flex items-center justify-center group bg-background/20 hover:bg-background/10 transition-colors"
            >
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground glow-emerald group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="ms-1" fill="currentColor" />
              </span>
            </button>
          )}
        </div>
        {v.note && <p className="mt-3 text-center text-xs text-muted-foreground">{v.note}</p>}
      </div>
    </section>
  );
}
