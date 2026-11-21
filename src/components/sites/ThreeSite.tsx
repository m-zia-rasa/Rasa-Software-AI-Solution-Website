"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackSection from "@/app/components/TechStackSection";
import ServicesSection from "@/app/components/ServicesSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import WhyRasaSection from "@/app/components/WhyRasaSection";
import ContactSection from "@/app/components/ContactSection";
import ThreeHero from "./three/ThreeHero";

/** The 3D version of the RASA website. Stage 4: 3D hero; sections below are shared for now. */
export default function ThreeSite() {
  const { dir, fontClass } = useLanguage();
  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontClass}`}
      dir={dir}
    >
      <Header />
      <main>
        <ThreeHero />
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
