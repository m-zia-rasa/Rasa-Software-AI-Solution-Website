"use client";

import PromoVideoSection from "@/app/components/PromoVideoSection";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackSection from "@/app/components/TechStackSection";
import ServicesSection from "@/app/components/ServicesSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import ZebShopShowcase from "@/app/components/ZebShopShowcase";
import ZebChatbotShowcase from "@/app/components/ZebChatbotShowcase";
import WhyRasaSection from "@/app/components/WhyRasaSection";
import ContactSection from "@/app/components/ContactSection";
import { showcaseText } from "@/content/showcase";
import ThreeHero from "./three/ThreeHero";
import ThreeServices from "./three/ThreeServices";
import ThreePortfolio from "./three/ThreePortfolio";
import ThreeWhy from "./three/ThreeWhy";
import ThreeContact from "./three/ThreeContact";
import ThreeRing from "./three/ThreeRing";
import Tilt3DReveal from "./three/Tilt3DReveal";
import { useGraphicsTier } from "./three/useGraphicsTier";

/**
 * The 3D version of the RASA website.
 * Weak devices (or users who choose it) get the lite version: same layout, no WebGL.
 */
export default function ThreeSite() {
  const { dir, fontClass, language } = useLanguage();
  const txt = showcaseText[language];
  const tier = useGraphicsTier();
  const [override, setOverride] = useState<"lite" | "full" | null>(null);

  // remember the visitor's explicit choice
  useEffect(() => {
    try {
      const v = localStorage.getItem("rasa-3d-mode");
      if (v === "lite" || v === "full") setOverride(v);
    } catch {}
  }, []);
  const choose = (v: "lite" | "full") => {
    setOverride(v);
    try {
      localStorage.setItem("rasa-3d-mode", v);
    } catch {}
  };

  const lite = override ? override === "lite" : tier === "low";
  const ready = tier !== null;

  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontClass}`}
      dir={dir}
    >
      <Header />
      <main>
        {ready && <ThreeHero lite={lite} />}
        {!ready && <section className="min-h-screen" aria-hidden="true" />}
        <PromoVideoSection />
        {lite ? <TechStackSection /> : <ThreeRing />}
        {lite ? <ServicesSection /> : <ThreeServices />}
        {lite ? <PortfolioSection /> : <><Tilt3DReveal><ThreePortfolio /></Tilt3DReveal><ZebShopShowcase /><ZebChatbotShowcase /></>}
        {lite ? <WhyRasaSection /> : <Tilt3DReveal><ThreeWhy /></Tilt3DReveal>}
        {lite ? <ContactSection /> : <Tilt3DReveal><ThreeContact /></Tilt3DReveal>}
      </main>
      <Footer />
      {ready && (
        <button
          onClick={() => choose(lite ? "full" : "lite")}
          className="fixed bottom-16 sm:bottom-4 end-4 z-[60] px-3 py-1.5 text-xs font-semibold rounded-full border border-border bg-secondary/90 backdrop-blur-md text-muted-foreground hover:text-foreground"
        >
          {lite ? txt.fullSwitch : txt.liteSwitch}
        </button>
      )}
    </div>
  );
}
