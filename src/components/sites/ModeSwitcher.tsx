"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { showcaseText, siteModes, modePath } from "@/content/showcase";

/** Floating pill shown on every demo page to switch between site styles. */
export default function ModeSwitcher() {
  const pathname = usePathname();
  const { language, fontClass } = useLanguage();
  const txt = showcaseText[language];

  return (
    <nav
      aria-label={txt.pageTitle}
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 rounded-full border border-border bg-secondary/90 backdrop-blur-md p-1 shadow-xl shadow-black/30 ${fontClass}`}
    >
      <Link
        href="/showcase"
        className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-full"
      >
        {txt.back}
      </Link>
      {siteModes.map((m) => {
        const active = pathname === modePath(m);
        return (
          <Link
            key={m}
            href={modePath(m)}
            aria-current={active ? "page" : undefined}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {txt.modes[m].name}
          </Link>
        );
      })}
    </nav>
  );
}
