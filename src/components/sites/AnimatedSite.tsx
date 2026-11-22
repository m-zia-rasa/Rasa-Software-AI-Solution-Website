"use client";

import PromoVideoSection from "@/app/components/PromoVideoSection";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackSection from "@/app/components/TechStackSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import WhyRasaSection from "@/app/components/WhyRasaSection";
import ContactSection from "@/app/components/ContactSection";
import ScrollProgress from "./animated/ScrollProgress";
import CinematicHero from "./animated/CinematicHero";
import Reveal from "./animated/Reveal";
import AnimatedServices from "./animated/AnimatedServices";
import CursorGlow from "./animated/CursorGlow";
import ProcessTimeline from "./animated/ProcessTimeline";

/** The animated version of the RASA website (scroll + entrance motion). */
export default function AnimatedSite() {
  const { dir, fontClass } = useLanguage();
  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontClass}`}
      dir={dir}
    >
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main>
        <CinematicHero />
        <Reveal><PromoVideoSection /></Reveal>
        <Reveal><TechStackSection /></Reveal>
        <AnimatedServices />
        <Reveal><PortfolioSection /></Reveal>
        <ProcessTimeline />
        <Reveal><WhyRasaSection /></Reveal>
        <Reveal><ContactSection magnetic /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
