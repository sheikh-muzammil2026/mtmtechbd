"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  CalendarRange,
  Video,
  Receipt,
  MapPin,
  UserCheck,
  FileText,
  ShieldAlert,
  Home,
  Globe,
  Bot,
  Search,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StarfieldBackground from "@/components/shared/StarfieldBackground";

const TAB_ICONS = {
  academics: [GraduationCap, CalendarRange, Video],
  finance: [Receipt, MapPin, UserCheck],
  admissions: [FileText, ShieldAlert, Home],
  website: [Globe, Bot, Search],
};

const TECH_ICONS = [Cpu, Layers, ShieldCheck, FileText, Zap];

export default function MmIsFeaturesSection() {
  const { dict } = useLanguage();
  const [activeTab, setActiveTab] = useState("academics");

  const mmis = dict.mmis;
  const currentModules = mmis.modules[activeTab] || [];
  const activeIcons = TAB_ICONS[activeTab] || [GraduationCap, Receipt, Globe];

  return (
    <section
      id="mmis"
      className="relative py-28 sm:py-32 bg-gradient-to-b from-[#070B14] via-[#0B162C]/65 to-[#070B14] overflow-hidden"
    >
      {/* Background Aurora Glows, Blueprint Grid & Starfield */}
      <StarfieldBackground glowPosition="right" />

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
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#00E5FF] to-[#38bdf8] bg-clip-text text-transparent">
              {mmis.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {mmis.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent">
              {mmis.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl"
          >
            {mmis.subheading}
          </motion.p>
        </div>

        {/* Category Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {mmis.tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "text-[#0B0E17]"
                    : "text-slate-300 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-mmis-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] shadow-[0_0_20px_rgba(0,229,255,0.45)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 3-Card Modules Grid for the Active Tab */}
        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              {currentModules.map((module, idx) => {
                const IconComponent = activeIcons[idx % activeIcons.length];
                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative rounded-2xl bg-[#111C33]/70 hover:bg-[#152442]/90 border border-white/[0.08] hover:border-cyan-400/35 backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:-translate-y-1.5 overflow-hidden"
                  >
                    {/* Hover Glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#00E5FF]/15 to-[#0066FF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/10 to-[#0066FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF]/60 group-hover:bg-[#00E5FF]/20 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/[0.04] text-slate-300 border border-white/[0.06] group-hover:border-[#00E5FF]/30 transition-colors">
                            {module.badge}
                          </span>
                          <span
                            className="font-mono text-xs font-bold text-slate-500 group-hover:text-[#00E5FF] transition-colors"
                            dir="ltr"
                          >
                            {module.id}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-200">
                        {module.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {module.description}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                        {module.tags.map((tag, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#00E5FF] transition-colors"
                      >
                        <span>{dict.services.requestProposal}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-[#00E5FF] group-hover:shadow-[0_0_8px_#00E5FF] transition-all" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enterprise Tech & Security Badge Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0F1B33]/80 border border-white/[0.08] backdrop-blur-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {mmis.techBadges.map((badge, bIdx) => {
            const IconComp = TECH_ICONS[bIdx % TECH_ICONS.length];
            return (
              <div
                key={bIdx}
                className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-colors flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {badge.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                    {badge.value}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom Action & Conversion Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 rounded-3xl bg-gradient-to-r from-[#111C33]/90 via-[#0E172B]/90 to-[#111C33]/90 border border-cyan-400/30 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{mmis.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {mmis.cta.title}
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {mmis.cta.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-bold text-sm tracking-wide transition-all duration-300 hover:brightness-110 shadow-[0_0_25px_rgba(0,229,255,0.4)] active:scale-95"
            >
              <span>{mmis.cta.demoBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://aimpurbachal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-[#00E5FF]/40 font-semibold text-sm transition-all duration-300 active:scale-95"
            >
              <span>{mmis.cta.liveBtn}</span>
              <ExternalLink className="w-4 h-4 text-[#00E5FF]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
