"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone, X, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SHOP_URL = "https://zeb-hazaragi.vercel.app";

const copy = {
  fa: {
    tag: "فروشگاه آنلاین · نمونهٔ کار",
    title: "زیب هزارگی: فروشگاه لباس و صنایع دستی هزارگی",
    desc: "یک فروشگاه آنلاین کامل به سه زبان (دری، پشتو، انگلیسی) با نمایشگاه سه‌بعدی لباس‌ها روی چوب‌لباسی، سبد خرید، ثبت سفارش و پنل مدیریت. این یک نمونهٔ نمایشی است و پولی دریافت نمی‌شود.",
    feats: ["نمایشگاه ۳بعدی", "سبد و سفارش", "پنل مدیریت", "۳ زبان · نسخهٔ سبک", "Next.js", "Supabase"],
    open: "مشاهدهٔ فروشگاه زنده",
    embed: "نمایش در همین صفحه",
    close: "بستن",
    phone: "موبایل",
    desktop: "کامپیوتر",
  },
  ps: {
    tag: "آنلاین پلورنځی · د کار نمونه",
    title: "زیب هزارګي: د هزارګي جامو او لاسي صنایعو پلورنځی",
    desc: "بشپړ آنلاین پلورنځی په درېیو ژبو (دري، پښتو، انګلیسي) د کالیو درېیزو ښوولو، کڅوړې، فرمایش او مدیریت پنل سره. دا نمونه دی او هېڅ پیسې نه اخستل کېږي.",
    feats: ["درېیزه نندارتون", "کڅوړه او فرمایش", "مدیریت پنل", "۳ ژبې · سپک حالت", "Next.js", "Supabase"],
    open: "ژوندی پلورنځی وګورئ",
    embed: "په همدې پاڼه کې وښایاست",
    close: "تړل",
    phone: "موبایل",
    desktop: "کمپیوټر",
  },
  en: {
    tag: "Online shop · Sample work",
    title: "Zeb Hazaragi: Hazara clothing & crafts shop",
    desc: "A complete online shop in three languages (Dari, Pashto, English) with a 3D showroom of garments on hangers, cart, checkout and an admin panel. This is a demo: no money is taken.",
    feats: ["3D showroom", "Cart & orders", "Admin panel", "3 languages · Lite mode", "Next.js", "Supabase"],
    open: "View the live shop",
    embed: "View here on this page",
    close: "Close",
    phone: "Phone",
    desktop: "Desktop",
  },
} as const;

export default function ZebShopShowcase() {
  const { language, isRTL, fontClass } = useLanguage();
  const c = copy[language as keyof typeof copy] ?? copy.en;
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<"phone" | "desktop">("desktop");

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section id="zeb-shop" className={`px-4 sm:px-6 pb-20 sm:pb-24 ${fontClass}`} dir={isRTL ? "rtl" : "ltr"}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto glass-card rounded-2xl overflow-hidden border border-border/60 grid lg:grid-cols-2"
      >
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="relative block min-h-[220px] sm:min-h-[320px] group overflow-hidden" aria-label={c.open}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/showcase/zeb-home.jpg" alt="Zeb Hazaragi shop home page" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground text-sm font-semibold hover:bg-foreground/10 transition-colors">
              <Play size={16} /> {c.embed}
            </button>
          </div>
        </div>
      </motion.div>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col" role="dialog" aria-modal="true" aria-label={c.title} dir="ltr">
          <div className="flex items-center gap-3 px-4 h-14 shrink-0 text-white">
            <span className="font-semibold text-sm truncate">zeb-hazaragi.vercel.app</span>
            <div className="ms-auto flex gap-1">
              {([["desktop", Monitor, c.desktop], ["phone", Smartphone, c.phone]] as const).map(([k, Icon, l]) => (
                <button key={k} onClick={() => setDevice(k)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${device === k ? "bg-white text-black" : "text-white/70 hover:text-white"}`}>
                  <Icon size={14} /> {l}
                </button>
              ))}
            </div>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white" aria-label={c.open}><ExternalLink size={18} /></a>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white" aria-label={c.close}><X size={22} /></button>
          </div>
          <div className="flex-1 min-h-0 flex justify-center px-2 pb-3" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
            <iframe
              src={SHOP_URL}
              title="Zeb Hazaragi"
              className={`h-full bg-white rounded-xl border border-white/20 ${device === "phone" ? "w-[390px] max-w-full" : "w-full max-w-[1400px]"}`}
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  );
}
