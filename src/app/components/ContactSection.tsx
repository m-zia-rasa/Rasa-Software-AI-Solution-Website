"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import Magnetic from "@/components/sites/animated/Magnetic";

export default function ContactSection({ magnetic = false }: { magnetic?: boolean }) {
  const { t, isRTL, fontClass } = useLanguage();

  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `RASA website inquiry — ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.contact}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full rounded-xl bg-secondary/60 border border-border/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors";

  const actions = [
    {
      icon: Calendar,
      label: t?.ctaBtn1,
      href: "#contact-form",
      primary: true,
      color: "bg-primary text-primary-foreground glow-emerald hover:opacity-90",
    },
    ...(siteConfig.whatsapp
      ? [
          {
            icon: MessageCircle,
            label: t?.ctaBtn2,
            href: `https://wa.me/${siteConfig.whatsapp}`,
            primary: false,
            color:
              "bg-secondary/70 border border-border/80 text-foreground hover:border-primary/50 hover:bg-primary/10",
          },
        ]
      : []),
    {
      icon: Mail,
      label: t?.ctaBtn3,
      href: `mailto:${siteConfig.email}`,
      primary: false,
      color:
        "bg-secondary/70 border border-border/80 text-foreground hover:border-accent/50 hover:bg-accent/10",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 sm:py-24 px-4 sm:px-6 relative ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 blob-emerald opacity-30 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden border border-border/60 glass-card"
        >
          {/* Decorative gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                {t.availableForProjects}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-section-title font-bold text-foreground max-w-2xl">
              {t?.ctaTitle}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t?.ctaSubtitle}
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              {actions?.map((action) => {
                const Icon = action?.icon;
                const link = (
                  <a
                    key={action?.label}
                    href={action?.href}
                    target={
                      action?.href?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      action?.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group inline-flex items-center justify-center gap-2.5 px-5 py-3 font-semibold text-sm rounded-xl transition-all duration-300 ${action?.color} ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <Icon size={16} />
                    {action?.label}
                    {action?.primary && (
                      <ArrowRight
                        size={14}
                        className={`transition-transform duration-300 ${isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`}
                      />
                    )}
                  </a>
                );
                return magnetic ? (
                  <Magnetic key={action?.label}>{link}</Magnetic>
                ) : (
                  link
                );
              })}
            </div>

            {/* Contact form (opens the visitor's email app) */}
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className={`w-full max-w-xl mt-4 flex flex-col gap-3 scroll-mt-24 ${isRTL ? "text-right" : "text-left"}`}
            >
              <h3 className="text-base font-bold text-foreground text-center mb-1">
                {t.formTitle}
              </h3>
              <input
                required
                type="text"
                autoComplete="name"
                aria-label={t.formName}
                placeholder={t.formName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                required
                type="text"
                autoComplete="email"
                aria-label={t.formContact}
                placeholder={t.formContact}
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className={inputClass}
              />
              <textarea
                required
                rows={4}
                aria-label={t.formMessage}
                placeholder={t.formMessage}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-y`}
              />
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm rounded-xl bg-primary text-primary-foreground glow-emerald hover:opacity-90 transition-all duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Send size={16} className={isRTL ? "-scale-x-100" : ""} />
                {t.formSend}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                {t.formHint}
              </p>
            </form>

            {/* Trust note */}
            <p className="text-xs text-muted-foreground">{t.contactNote}</p>
          </div>

          {/* Decorative bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
