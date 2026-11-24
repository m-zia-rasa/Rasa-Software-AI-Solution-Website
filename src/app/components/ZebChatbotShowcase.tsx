"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SHOP_URL = "https://zeb-hazaragi.vercel.app";

const copy = {
  fa: {
    tag: "چت‌بات هوشمند (RAG) · نمونهٔ کار",
    title: "دستیار زیب هزارگی: چت‌بات پاسخ‌گو از روی اسناد فروشگاه",
    desc: "یک چت‌بات حرفه‌ای به سه زبان که فقط از اسناد فروشگاه پاسخ می‌دهد، منبع هر پاسخ را نشان می‌دهد و اگر جواب در اسناد نباشد صادقانه می‌گوید «در منابع نیست». جست‌وجوی ترکیبی (معنایی + کلمه‌ای)، پاسخ جریانی، ثبت بازخورد و پنل مدیریت اسناد و گفتگوها. روی مدل‌های رایگان ساخته شده است.",
    feats: ["RAG", "جست‌وجوی ترکیبی", "۳ زبان", "نمایش منبع", "پنل مدیریت", "pgvector"],
    open: "امتحان چت‌بات (دکمهٔ گوشهٔ صفحه)",
  },
  ps: {
    tag: "هوښیار چت‌بات (RAG) · د کار نمونه",
    title: "د زیب هزارګي مرستندوی: د پلورنځي له سندونو ځواب ورکوونکی چت‌بات",
    desc: "په درېیو ژبو مسلکي چت‌بات چې یوازې د پلورنځي له سندونو ځواب ورکوي، د هر ځواب سرچینه ښيي، او که ځواب په سندونو کې نه وي په رښتینې سره وايي. ګډ لټون، ځواب په جریان کې، نظر ثبتول او د سندونو او خبرو مدیریت پنل. په وړیا ماډلونو جوړ شوی.",
    feats: ["RAG", "ګډ لټون", "۳ ژبې", "سرچینه", "مدیریت پنل", "pgvector"],
    open: "چت‌بات وازمویئ (د پاڼې په کونج کې تڼۍ)",
  },
  en: {
    tag: "AI chatbot (RAG) · Sample work",
    title: "Zeb Hazaragi assistant: a chatbot that answers from the shop's documents",
    desc: "A professional three-language chatbot that answers only from the shop's documents, shows the source of every answer and honestly says \u201cnot in my sources\u201d when it has none. Hybrid (semantic + keyword) search, streamed replies, feedback and an admin panel for documents and conversations. Built on free models.",
    feats: ["RAG", "Hybrid search", "3 languages", "Cited sources", "Admin panel", "pgvector"],
    open: "Try the chatbot (button in the page corner)",
  },
} as const;

export default function ZebChatbotShowcase() {
  const { language, isRTL, fontClass } = useLanguage();
  const c = copy[language as keyof typeof copy] ?? copy.en;

  return (
    <section id="zeb-chatbot" className={`px-4 sm:px-6 pb-20 sm:pb-24 ${fontClass}`} dir={isRTL ? "rtl" : "ltr"}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto glass-card rounded-2xl overflow-hidden border border-border/60 grid lg:grid-cols-2"
      >
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="relative block min-h-[220px] sm:min-h-[320px] group overflow-hidden" aria-label={c.open}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/showcase/zeb-chatbot.jpg" alt="Zeb Hazaragi chatbot widget" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </a>
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <span className="self-start px-3 py-1 mb-4 rounded-full border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">{c.tag}</span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{c.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {c.feats.map((f) => (
              <span key={f} className="px-2.5 py-1 text-xs font-semibold rounded-lg border bg-foreground/10 text-foreground border-border">{f}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              <ExternalLink size={16} /> {c.open}
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
