"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import WhyRasaSection from "./components/WhyRasaSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  const { dir, fontClass } = useLanguage();

  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontClass}`}
      dir={dir}
    >
      <Header />
      <main>
        <HeroSection />
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
