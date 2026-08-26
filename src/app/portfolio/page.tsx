"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Code2,
  Layers,
  Zap,
  Users,
  BarChart3,
  Globe,
  Shield,
  Smartphone,
  Brain,
  Database,
  ChevronRight,
} from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    id: "afghan-traffic-app",
    title: "AfghanTrafficApp",
    tagline: "Modernizing traffic management across Afghanistan",
    category: "Mobile Application",
    year: "2024",
    status: "Deployed",
    accentColor: "text-primary",
    accentBg: "bg-primary/10",
    accentBorder: "border-primary/30",
    accentGlow: "shadow-primary/20",
    gradientFrom: "from-primary/20",
    gradientVia: "via-primary/5",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1020cdbb7-1772447321344.png",
    imageAlt:
      "AfghanTrafficApp mobile interface showing map with traffic data and reporting features on dark background",
    screenshots: [
      {
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_1df41fc94-1767629995294.png",
        alt: "Main dashboard of AfghanTrafficApp showing real-time traffic map with incident markers",
        caption: "Real-time traffic map with incident markers",
      },
      {
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_1772de740-1769323755077.png",
        alt: "Mobile phone screen showing traffic reporting form with location picker and incident type selection",
        caption: "User incident reporting flow",
      },
      {
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cab27998-1770309829405.png",
        alt: "Admin dashboard with analytics charts showing traffic incident statistics and heatmaps",
        caption: "Admin analytics & oversight dashboard",
      },
    ],
    overview:
      "AfghanTrafficApp is a comprehensive cross-platform mobile application built to address the critical gap in traffic management infrastructure across Afghan cities. The app bridges the communication gap between citizens, traffic officers, and administrative bodies — enabling real-time incident reporting, route optimization, and data-driven decision making.",
    challenge:
      "Afghanistan lacks a unified digital infrastructure for traffic management. Officers relied on radio communication, citizens had no way to report incidents, and administrators had zero visibility into traffic patterns. The solution needed to work on low-end Android devices with intermittent connectivity.",
    solution:
      "We built a React Native + Expo application with an offline-first architecture. The app uses a local SQLite cache that syncs with the cloud when connectivity is restored. A role-based system serves three distinct user types: citizens, traffic officers, and administrators — each with a tailored interface and permission set.",
    technologies: [
      { name: "React Native", icon: Smartphone, category: "Frontend" },
      { name: "Expo", icon: Layers, category: "Framework" },
      { name: "TypeScript", icon: Code2, category: "Language" },
      { name: "SQLite (offline)", icon: Database, category: "Storage" },
      { name: "Node.js API", icon: Zap, category: "Backend" },
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "Google Maps SDK", icon: Globe, category: "Maps" },
      { name: "JWT Auth", icon: Shield, category: "Security" },
    ],
    outcomes: [
      {
        metric: "3 User Roles",
        label: "Citizen, Officer, Admin — each with tailored UX",
        icon: Users,
      },
      {
        metric: "Offline-First",
        label: "Works on 2G with local SQLite sync",
        icon: Zap,
      },
      {
        metric: "Cross-Platform",
        label: "Single codebase for iOS and Android",
        icon: Smartphone,
      },
      {
        metric: "Real-Time",
        label: "Live incident map with sub-5s update latency",
        icon: BarChart3,
      },
    ],
    keyFeatures: [
      "Real-time incident reporting with GPS coordinates and photo upload",
      "Role-based access: citizens, traffic officers, and administrators",
      "Offline-first architecture with automatic background sync",
      "Admin analytics dashboard with heatmaps and trend analysis",
      "Push notifications for nearby incidents and route alerts",
      "Multi-language support: Dari, Pashto, and English",
    ],
    tags: [
      "React Native",
      "Expo",
      "Cross-Platform",
      "TypeScript",
      "PostgreSQL",
    ],
    tagColors: [
      "bg-primary/15 text-primary border-primary/30",
      "bg-foreground/10 text-foreground border-border",
      "bg-accent/15 text-accent border-accent/30",
      "bg-foreground/10 text-foreground border-border",
      "bg-foreground/10 text-foreground border-border",
    ],
  },
  {
    id: "localized-rag-chatbot",
    title: "Localized RAG Chatbot",
    tagline: "Hallucination-free AI for Persian & Dari contexts",
    category: "AI / NLP System",
    year: "2024",
    status: "Production",
    accentColor: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-500/30",
    accentGlow: "shadow-indigo-500/20",
    gradientFrom: "from-indigo-500/20",
    gradientVia: "via-indigo-500/5",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1847a82b8-1787318768026.png",
    imageAlt:
      "AI chatbot interface with Persian text on dark screen showing neural network visualization with glowing nodes",
    screenshots: [
      {
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_15afdb008-1772093387845.png",
        alt: "Chatbot interface showing a Dari language conversation with accurate retrieval-based responses",
        caption: "Dari-language conversation with cited sources",
      },
      {
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f4b325b3-1784446222393.png",
        alt: "Vector database visualization showing document embeddings clustered by semantic similarity",
        caption: "Vector embedding space — semantic document clusters",
      },
      {
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_181bde74a-1780929124282.png",
        alt: "RAG pipeline architecture diagram showing document ingestion, chunking, embedding, and retrieval flow",
        caption: "End-to-end RAG pipeline architecture",
      },
    ],
    overview:
      "A production-grade Retrieval-Augmented Generation (RAG) system purpose-built for Persian/Dari language contexts. Unlike generic LLM deployments that hallucinate facts in low-resource languages, this system grounds every response in a verified document corpus — making it suitable for customer support, legal document Q&A, and internal knowledge management in Afghan organizations.",
    challenge:
      "Large language models perform poorly on Dari and Persian text — they hallucinate names, dates, and facts at alarming rates. Existing RAG frameworks are optimized for English and fail to handle right-to-left text, Persian numerals, and the morphological complexity of Dari. Organizations needed a trustworthy AI assistant they could deploy without fear of misinformation.",
    solution:
      "We built a custom RAG pipeline using LangChain with a fine-tuned embedding model for Persian text. The system uses a hybrid retrieval strategy (dense + sparse BM25) to maximize recall on Dari queries. Every response is grounded in retrieved document chunks with source citations, and a confidence scoring layer filters out low-certainty answers before they reach the user.",
    technologies: [
      { name: "Python 3.11", icon: Code2, category: "Language" },
      { name: "LangChain", icon: Layers, category: "AI Framework" },
      { name: "OpenAI GPT-4", icon: Brain, category: "LLM" },
      { name: "Qdrant Vector DB", icon: Database, category: "Vector Store" },
      { name: "FastAPI", icon: Zap, category: "API" },
      { name: "HuggingFace", icon: Brain, category: "Embeddings" },
      { name: "BM25 Retrieval", icon: Globe, category: "Search" },
      { name: "Docker", icon: Shield, category: "Deployment" },
    ],
    outcomes: [
      {
        metric: "94% Accuracy",
        label: "Factual accuracy on Dari Q&A benchmark",
        icon: CheckCircle2,
      },
      {
        metric: "< 2s Latency",
        label: "Average response time including retrieval",
        icon: Zap,
      },
      {
        metric: "10K+ Docs",
        label: "Document corpus ingested and indexed",
        icon: Database,
      },
      {
        metric: "Zero Hallucination",
        label: "On in-corpus queries with confidence filter",
        icon: Shield,
      },
    ],
    keyFeatures: [
      "Hybrid retrieval: dense vector search + BM25 sparse retrieval for maximum recall",
      "Persian/Dari-optimized text chunking respecting sentence boundaries",
      "Source citation in every response — users see exactly which document was used",
      "Confidence scoring layer that abstains rather than hallucinating",
      "Multi-tenant document namespacing for organization isolation",
      "REST API + WhatsApp Business API integration for deployment flexibility",
    ],
    tags: ["Python", "LangChain", "NLP", "Vector DB", "FastAPI", "OpenAI"],
    tagColors: [
      "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
      "bg-primary/15 text-primary border-primary/30",
      "bg-accent/15 text-accent border-accent/30",
      "bg-foreground/10 text-foreground border-border",
      "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
      "bg-primary/15 text-primary border-primary/30",
    ],
  },
];

function ScreenshotGallery({
  screenshots,
  accentColor,
}: {
  screenshots: (typeof projects)[0]["screenshots"];
  accentColor: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-secondary/30 aspect-video">
        <AppImage
          src={screenshots[active].src}
          alt={screenshots[active].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs text-muted-foreground bg-background/70 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-block">
            {screenshots[active].caption}
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        {screenshots.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative flex-1 rounded-xl overflow-hidden border transition-all duration-200 aspect-video ${
              active === i
                ? `border-current ${accentColor} shadow-lg`
                : "border-border/40 opacity-60 hover:opacity-80"
            }`}
          >
            <AppImage
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function TechBadge({
  tech,
  accentBg,
  accentBorder,
  accentColor,
}: {
  tech: (typeof projects)[0]["technologies"][0];
  accentBg: string;
  accentBorder: string;
  accentColor: string;
}) {
  const Icon = tech.icon;
  return (
    <div
      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border ${accentBg} ${accentBorder} group`}
    >
      <Icon size={15} className={accentColor} />
      <div>
        <p className="text-xs font-semibold text-foreground leading-none">
          {tech.name}
        </p>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          {tech.category}
        </p>
      </div>
    </div>
  );
}

function CaseStudyCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { isRTL } = useLanguage();

  return (
    <motion.section
      id={project.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientVia} to-transparent opacity-40 blur-xl pointer-events-none`}
      />
      <div className="relative glass-card rounded-3xl border border-border/60 overflow-hidden">
        <div
          className={`px-6 sm:px-10 py-6 border-b border-border/40 bg-gradient-to-r ${project.gradientFrom} ${project.gradientVia} to-transparent`}
        >
          <div
            className={`flex flex-wrap items-start justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <div className={isRTL ? "text-right" : ""}>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, ti) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${project.tagColors[ti] || "bg-border/30 text-muted-foreground border-border"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {project.title}
              </h2>
              <p className={`text-sm ${project.accentColor} font-medium`}>
                {project.tagline}
              </p>
            </div>
            <div
              className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <span className="text-xs text-muted-foreground bg-secondary/60 border border-border rounded-lg px-3 py-1.5">
                {project.category}
              </span>
              <span
                className={`text-xs font-semibold ${project.accentBg} ${project.accentColor} border ${project.accentBorder} rounded-lg px-3 py-1.5`}
              >
                ● {project.status}
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-10 py-8 sm:py-10 space-y-12">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${isRTL ? "lg:flex-row-reverse" : ""}`}
          >
            <ScreenshotGallery
              screenshots={project.screenshots}
              accentColor={project.accentColor}
            />
            <div className={`space-y-6 ${isRTL ? "text-right" : ""}`}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Overview
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  The Challenge
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Our Solution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5 ${isRTL ? "text-right" : ""}`}
            >
              Outcomes & Impact
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {project.outcomes.map((outcome, oi) => {
                const Icon = outcome.icon;
                return (
                  <motion.div
                    key={oi}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: oi * 0.08 }}
                    className={`p-4 rounded-2xl border ${project.accentBorder} ${project.accentBg} ${isRTL ? "text-right" : ""}`}
                  >
                    <Icon size={18} className={`${project.accentColor} mb-3`} />
                    <p
                      className={`text-lg font-bold text-foreground leading-none mb-1.5 ${project.accentColor}`}
                    >
                      {outcome.metric}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {outcome.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5 ${isRTL ? "text-right" : ""}`}
            >
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.technologies.map((tech) => (
                <TechBadge
                  key={tech.name}
                  tech={tech}
                  accentBg={project.accentBg}
                  accentBorder={project.accentBorder}
                  accentColor={project.accentColor}
                />
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5 ${isRTL ? "text-right" : ""}`}
            >
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, fi) => (
                <div
                  key={fi}
                  className={`flex items-start gap-3 p-3.5 rounded-xl bg-secondary/30 border border-border/40 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                >
                  <ChevronRight
                    size={14}
                    className={`${project.accentColor} mt-0.5 shrink-0`}
                  />
                  <p className="text-sm text-muted-foreground leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function PortfolioPageContent() {
  const { dir, fontClass, isRTL, t } = useLanguage();

  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontClass}`}
      dir={dir}
    >
      <Header />
      <main className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <ArrowLeft
                size={15}
                className={`transition-transform group-hover:${isRTL ? "translate-x-1" : "-translate-x-1"}`}
              />
              {t.backToHome}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-14 ${isRTL ? "text-right" : ""}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-4">
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                {t.caseStudies}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              {t.portfolioDeepTitle}
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              {t.portfolioDeepSubtitle}
            </p>
            <div
              className={`flex flex-wrap gap-3 mt-6 ${isRTL ? "justify-end" : ""}`}
            >
              {projects.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 hover:shadow-lg ${p.accentBg} ${p.accentBorder} ${p.accentColor} hover:${p.accentGlow}`}
                >
                  <ExternalLink size={13} />
                  {p.title}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, i) => (
              <CaseStudyCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`mt-20 text-center ${isRTL ? "text-right" : ""}`}
          >
            <div className="glass-card rounded-3xl border border-border/60 p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {t.wantBuiltTitle}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {t.wantBuiltSubtitle}
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-200 glow-emerald"
                >
                  {t.ctaBtn1}
                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
