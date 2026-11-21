"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const { t, isRTL, fontClass } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle/node canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] =
      [];
    const count = Math.min(50, Math.floor((w * h) / 18000));

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.5)";
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Layered backgrounds */}
      {/* Layer 1: Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Layer 2: Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Layer 3: Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-emerald pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-amber pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 blob-blue pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Layer 4: Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, #0f172a 100%)",
        }}
      />

      {/* SVG animated neon lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="neonGradH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="neonGradV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line
          x1="-200"
          y1="30%"
          x2="0"
          y2="30%"
          stroke="url(#neonGradH)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="x1"
            values="-200;110%"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="0;120%"
            dur="10s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="110%"
          y1="65%"
          x2="120%"
          y2="65%"
          stroke="url(#neonGradH)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="x1"
            values="120%;-200"
            dur="13s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="130%;0"
            dur="13s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="35%"
          y1="-100"
          x2="35%"
          y2="0"
          stroke="url(#neonGradV)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="y1"
            values="-100;110%"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="0;120%"
            dur="9s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="70%"
          y1="110%"
          x2="70%"
          y2="120%"
          stroke="url(#neonGradV)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="y1"
            values="110%;-100"
            dur="11s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="120%;0"
            dur="11s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Left / Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-col gap-6 ${isRTL ? "lg:order-2 items-end text-right" : "lg:order-1 items-start text-left"}`}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold text-primary tracking-wide">
                  {t.heroBadge}
                </span>
                <Sparkles size={12} className="text-accent" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-hero-xl font-bold text-foreground"
            >
              {t.heroHeadline.split(" ").map((word, i, arr) => {
                const highlightWords = [
                  "AI",
                  "هوش",
                  "مصنوعی",
                  "AI",
                  "هوش",
                  "مصنوعي",
                ];
                const isHighlight = highlightWords.some((hw) =>
                  word.includes(hw),
                );
                return (
                  <span key={i} className={isHighlight ? "gradient-text" : ""}>
                    {word}
                    {i < arr.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              {t.heroSubheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className={`flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto`}
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 glow-emerald"
              >
                {t.heroCta1}
                <ArrowRight
                  size={16}
                  className={`transition-transform duration-300 ${isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`}
                />
              </a>
              <a
                href={
                  siteConfig.whatsapp
                    ? `https://wa.me/${siteConfig.whatsapp}`
                    : "#contact-form"
                }
                {...(siteConfig.whatsapp
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-secondary/50 text-foreground font-semibold text-sm rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
              >
                <MessageCircle size={16} className="text-primary" />
                {siteConfig.whatsapp ? t.heroCta2 : t.ctaBtn1}
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className={`flex items-center gap-4 pt-2 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <span
                className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"
                aria-hidden="true"
              />
              <p className="text-xs text-muted-foreground">
                {t.clientsTrust}
              </p>
            </motion.div>
          </motion.div>

          {/* Right / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${isRTL ? "lg:order-1" : "lg:order-2"}`}
          >
            {/* Main visual card */}
            <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-10" />
              <svg
                viewBox="0 0 600 400"
                role="img"
                aria-label="Neural network visualization"
                className="w-full h-72 sm:h-80 lg:h-96 bg-gradient-to-br from-secondary to-background"
                preserveAspectRatio="xMidYMid slice"
              >
                <g stroke="#10b981" strokeOpacity="0.35" strokeWidth="1.5">
                  {[
                    [90, 90, 250, 70], [90, 90, 250, 200], [90, 200, 250, 70],
                    [90, 200, 250, 200], [90, 200, 250, 330], [90, 310, 250, 200],
                    [90, 310, 250, 330], [250, 70, 420, 130], [250, 200, 420, 130],
                    [250, 200, 420, 270], [250, 330, 420, 270], [250, 70, 420, 270],
                    [420, 130, 530, 200], [420, 270, 530, 200],
                  ].map(([x1, y1, x2, y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
                  ))}
                </g>
                {[
                  [90, 90], [90, 200], [90, 310], [250, 70], [250, 200],
                  [250, 330], [420, 130], [420, 270], [530, 200],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="16" fill="#10b981" fillOpacity="0.12" />
                    <circle cx={cx} cy={cy} r="6" fill={i % 3 === 1 ? "#f59e0b" : "#10b981"} />
                  </g>
                ))}
              </svg>

              {/* Scrim for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            </div>

            {/* Floating stat card 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-4 ${isRTL ? "left-4 sm:-left-6" : "right-4 sm:-right-6"} glass-card rounded-xl p-4 z-20 min-w-[140px]`}
            >
              <p className="text-xs text-muted-foreground font-medium mb-1">
                {t.heroCardLabel}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {t.heroCardValue}
              </p>
              <div className="mt-1 h-1 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-primary rounded-full" />
              </div>
            </motion.div>

            {/* Floating stat card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className={`absolute -top-4 ${isRTL ? "right-4 sm:-right-6" : "left-4 sm:-left-6"} glass-card rounded-xl p-4 z-20 min-w-[160px]`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
                <p className="text-xs text-muted-foreground font-medium">
                  Dari & Pashto AI
                </p>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {t.nativeNlp}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
