'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';
import ZebShopShowcase from './ZebShopShowcase';

const projects = [
  {
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1257c5891-1786111871841.png',
    alt: 'Mobile app interface on phone screen showing map and traffic data — dark background with emerald UI elements',
    tags: ['React Native', 'Expo', 'Cross-Platform'],
    tagColors: [
      'bg-primary/15 text-primary border-primary/30',
      'bg-foreground/10 text-foreground border-border',
      'bg-accent/15 text-accent border-accent/30',
    ],
    gradient: 'from-primary/30 via-primary/10 to-transparent',
    accentColor: 'text-primary',
    borderHover: 'hover:border-primary/50',
  },
  {
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15afdb008-1772093387845.png',
    alt: 'AI chatbot interface with Persian text on dark screen — neural network visualization with glowing nodes',
    tags: ['Python', 'LangChain', 'NLP', 'Vector DB'],
    tagColors: [
      'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
      'bg-primary/15 text-primary border-primary/30',
      'bg-accent/15 text-accent border-accent/30',
      'bg-foreground/10 text-foreground border-border',
    ],
    gradient: 'from-indigo-500/30 via-indigo-500/10 to-transparent',
    accentColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/50',
  },
];

export default function PortfolioSection() {
  const { t, isRTL, fontClass } = useLanguage();

  const projectData = [
    { title: t?.project1Title, desc: t?.project1Desc },
    { title: t?.project2Title, desc: t?.project2Desc },
  ];

  return (
    <>
      <section
        id="portfolio"
        className={`py-20 sm:py-24 px-4 sm:px-6 relative bg-secondary/10 ${fontClass}`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-12 sm:mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-4">
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                Portfolio
              </span>
            </div>
            <h2 className="text-section-title font-bold text-foreground mb-3">
              {t?.portfolioTitle}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {t?.portfolioSubtitle}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projectData?.map((project, i) => (
              <motion.div
                key={project?.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative glass-card rounded-2xl overflow-hidden border border-border/60 ${projects?.[i]?.borderHover} transition-all duration-500 hover:shadow-2xl`}
              >
                {/* Image */}
                <div className="relative h-52 sm:h-64 overflow-hidden">
                  <AppImage
                    src={projects?.[i]?.image}
                    alt={projects?.[i]?.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Scrim */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${projects?.[i]?.gradient}`} />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-0 transition-opacity duration-300" />

                  {/* External link icon */}
                  <div
                    className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                  >
                    <div className="glass-card rounded-lg p-2 border border-border/60">
                      <ExternalLink size={16} className={projects?.[i]?.accentColor} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Tags */}
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}
                  >
                    {projects?.[i]?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${projects?.[i]?.tagColors?.[projects?.[i]?.tags?.indexOf(tag)] || 'bg-border/30 text-muted-foreground border-border'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className={`text-xl font-bold text-foreground mb-3 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {project?.title}
                  </h3>
                  <p
                    className={`text-sm text-muted-foreground leading-relaxed mb-5 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {project?.desc}
                  </p>

                  <Link
                    href="/portfolio"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${projects?.[i]?.accentColor} hover:opacity-70 transition-opacity duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t?.readMore}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ZebShopShowcase />
    </>
  );
}
