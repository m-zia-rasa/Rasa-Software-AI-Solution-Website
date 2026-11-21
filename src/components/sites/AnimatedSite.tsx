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
import ScrollProgress from "./animated/ScrollProgress";
import CinematicHero from "./animated/CinematicHero";
import Reveal from "./animated/Reveal";

/** The animated version of the RASA website (scroll + entrance motion). */
export default function AnimatedSite() {
  const { dir, fontClass } = useLanguage();
  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontClass}`}
      dir={dir}
    >
      <ScrollProgress />
      <Header />
      <main>
        <CinematicHero />
        <Reveal><TechStackSection /></Reveal>
        <Reveal><ServicesSection /></Reveal>
        <Reveal><PortfolioSection /></Reveal>
        <Reveal><WhyRasaSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
