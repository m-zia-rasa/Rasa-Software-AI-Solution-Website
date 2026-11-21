"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { legalContent } from "@/content/legal";

export default function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const { t, language, dir, isRTL, fontClass } = useLanguage();
  const doc = legalContent[kind][language];

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${fontClass}`}
      dir={dir}
    >
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} className={isRTL ? "rotate-180" : ""} />
          {t.legalBack}
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{doc.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">{doc.updated}</p>
        <div className="flex flex-col gap-8">
          {doc.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-semibold mb-2">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
