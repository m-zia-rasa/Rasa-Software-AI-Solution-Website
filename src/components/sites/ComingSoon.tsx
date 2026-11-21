"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText, SiteMode } from "@/content/showcase";

export default function ComingSoon({ mode }: { mode: SiteMode }) {
  const { language, dir, fontClass } = useLanguage();
  const txt = showcaseText[language];
  return (
    <div className={`min-h-screen bg-background text-foreground ${fontClass}`} dir={dir}>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 gap-4">
        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
          {txt.soon}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold">{txt.modes[mode].name}</h1>
        <p className="text-muted-foreground max-w-md">{txt.soonBody}</p>
        <Link href="/showcase" className="text-sm text-primary hover:underline">
          {txt.back}
        </Link>
      </main>
    </div>
  );
}
