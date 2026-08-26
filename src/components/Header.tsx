"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import AppLogo from "@/components/ui/AppLogo";
import { useLanguage, Language } from "@/context/LanguageContext";

export default function Header() {
  const { t, language, setLanguage, isRTL, fontClass } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const langs: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fa", label: "دری" },
    { code: "ps", label: "پښتو" },
  ];

  const navLinks = [
    { href: "/#services", label: t.navServices },
    { href: "/portfolio", label: t.navPortfolio },
    { href: "/#why-rasa", label: t.navAbout },
    { href: "/#contact", label: t.navContact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav shadow-lg shadow-black/20" : "bg-transparent"
        } ${fontClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="RASA Home"
          >
            <AppLogo size={36} />
            <div
              className={`flex flex-col leading-none ${isRTL ? "items-end" : "items-start"}`}
            >
              <span className="text-foreground font-bold text-base tracking-tight">
                RASA
              </span>
              <span className="text-muted-foreground text-[10px] font-medium tracking-wide hidden sm:block">
                Software & AI Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 bg-secondary/60 border border-border rounded-lg p-0.5">
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                    language === lang.code
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  } ${lang.code !== "en" ? "font-rtl" : ""}`}
                  aria-label={`Switch to ${lang.label}`}
                  aria-pressed={language === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Book a Call CTA */}
            <Link
              href="/#contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-all duration-200 glow-emerald shrink-0"
            >
              <Phone size={14} />
              <span className="hidden md:inline">{t.navCta}</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} h-full w-72 bg-secondary border-${isRTL ? "r" : "l"} border-border flex flex-col p-6 gap-6 ${fontClass}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground">RASA</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-1 bg-background/60 border border-border rounded-lg p-1">
                {langs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-200 ${
                      language === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    } ${lang.code !== "en" ? "font-rtl" : ""}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg"
              >
                <Phone size={14} />
                {t.navCta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
