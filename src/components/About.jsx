"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Zap,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StarfieldBackground from "@/components/shared/StarfieldBackground";

const PILLAR_ICONS = [Award, Zap, ShieldCheck, Users];

export default function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="site-section-alt relative overflow-hidden">
      {/* Background Aurora Glows, Blueprint Grid & Starfield */}
      <StarfieldBackground glowPosition="right" />

      <div className="relative z-10 site-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="site-badge"
          >
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span>{dict.about.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading"
          >
            {dict.about.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {dict.about.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-subheading"
          >
            {dict.about.description}
          </motion.p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* LEFT: 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dict.about.pillars.map((pillar, idx) => {
              const IconComp = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="theme-card p-6 flex flex-col justify-between group overflow-hidden relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:scale-105 group-hover:border-sky-300 transition-transform duration-300 shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{dict.about.guaranteedText}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Global Network & Real-Time Performance Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-sky-600" />
                  <span className="text-sm font-bold text-slate-900 tracking-wide">
                    {dict.about.networkTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[11px] font-semibold text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{dict.about.coverageText}</span>
                </div>
              </div>

              {/* Tagline Statement */}
              <div className="mt-5 p-4 rounded-xl bg-sky-50/70 border border-sky-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{dict.about.commitmentBadge}</span>
                </div>
                <p className="text-sm font-bold text-slate-900">
                  {dict.about.commitmentQuote}
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                  {dict.about.commitmentDesc}
                </p>
              </div>

              {/* Global Hubs List */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  {dict.about.hubsTitle}
                </div>
                {dict.about.hubs.map((hub) => (
                  <div
                    key={hub.city}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-600 shadow-xs" />
                      <span className="text-sm font-semibold text-slate-900">
                        {hub.city}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({hub.region})
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-700 font-semibold">
                      {hub.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Realtime Infrastructure Badge */}
              <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="text-lg font-bold text-slate-900">&lt; 25ms</div>
                  <div className="text-[11px] text-slate-500 font-medium">{dict.about.latencyLabel}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="text-lg font-bold text-sky-700">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">{dict.about.timezoneLabel}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
