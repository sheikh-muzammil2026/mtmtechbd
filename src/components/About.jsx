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

const PILLAR_ICONS = [Award, Zap, ShieldCheck, Users];

export default function About() {
  const { dict } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-28 sm:py-32 bg-[#0B0E17] overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#00E5FF]/30 backdrop-blur-md mb-4"
          >
            <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#00E5FF] to-[#38bdf8] bg-clip-text text-transparent">
              {dict.about.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {dict.about.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent">
              {dict.about.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {dict.about.description}
          </motion.p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT: 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dict.about.pillars.map((pillar, idx) => {
              const IconComp = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all duration-300 backdrop-blur-xl group hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00E5FF]/10 to-[#0066FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF]/50 transition-transform duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>{dict.about.guaranteedText}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Global Network & Real-Time Performance Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0B0E17]/95 border border-white/[0.12] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#00E5FF]" />
                  <span className="text-sm font-bold text-white tracking-wide">
                    {dict.about.networkTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{dict.about.coverageText}</span>
                </div>
              </div>

              {/* Tagline Statement */}
              <div className="mt-5 p-4 rounded-xl bg-white/[0.02] border border-[#00E5FF]/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5FF] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{dict.about.commitmentBadge}</span>
                </div>
                <p className="text-sm font-bold text-white">
                  {dict.about.commitmentQuote}
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {dict.about.commitmentDesc}
                </p>
              </div>

              {/* Global Hubs List */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {dict.about.hubsTitle}
                </div>
                {dict.about.hubs.map((hub) => (
                  <div
                    key={hub.city}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-[#00E5FF]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
                      <span className="text-sm font-semibold text-white">
                        {hub.city}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({hub.region})
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">
                      {hub.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Realtime Infrastructure Badge */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-lg font-bold text-white">&lt; 25ms</div>
                  <div className="text-[11px] text-slate-400">{dict.about.latencyLabel}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-lg font-bold text-[#00E5FF]">100%</div>
                  <div className="text-[11px] text-slate-400">{dict.about.timezoneLabel}</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
