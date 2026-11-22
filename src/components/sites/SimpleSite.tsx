"use client";

import PromoVideoSection from "@/app/components/PromoVideoSection";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import TechStackSection from "@/app/components/TechStackSection";
import ServicesSection from "@/app/components/ServicesSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import WhyRasaSection from "@/app/components/WhyRasaSection";
import ContactSection from "@/app/components/ContactSection";

/** The simple, fast, minimal version of the RASA website. */
export default function SimpleSite() {
  const { dir, fontClass } = useLanguage();
  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontClass}`}
      dir={dir}
    >
      <Header />
      <main>
        <HeroSection />
        <PromoVideoSection />
        <TechStackSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyRasaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
