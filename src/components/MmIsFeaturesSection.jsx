"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
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
    <section id="mmis" className="site-section-alt relative overflow-hidden">
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
            <span>{mmis.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading"
          >
            {mmis.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {mmis.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-subheading"
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
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-100 border border-slate-200/90 max-w-fit mx-auto"
        >
          {mmis.tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? "text-sky-800"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-mmis-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-xs border border-slate-200/90"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 3-Card Modules Grid for the Active Tab */}
        <div className="mt-12 sm:mt-14">
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
                    className="theme-card p-7 sm:p-8 flex flex-col justify-between group overflow-hidden relative"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:scale-105 group-hover:border-sky-300 transition-all duration-300 shadow-xs">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                            {module.badge}
                          </span>
                          <span
                            className="font-mono text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors"
                            dir="ltr"
                          >
                            {module.id}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-200">
                        {module.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {module.description}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                        {module.tags.map((tag, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 group-hover:text-sky-700 transition-colors"
                      >
                        <span>{dict.services.requestProposal}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-sky-600 transition-colors" />
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
          className="mt-14 sm:mt-16 p-4 sm:p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 shadow-xs"
        >
          {mmis.techBadges.map((badge, bIdx) => {
            const IconComp = TECH_ICONS[bIdx % TECH_ICONS.length];
            const isLastOdd = bIdx === mmis.techBadges.length - 1;
            return (
              <div
                key={bIdx}
                className={`p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/80 hover:border-sky-300 transition-colors flex items-center gap-3 min-w-0 shadow-xs ${
                  isLastOdd ? "min-[420px]:col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 leading-tight">
                    {badge.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 leading-snug break-words">
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
          className="mt-12 rounded-3xl bg-gradient-to-r from-sky-50 via-indigo-50/70 to-sky-50 border border-sky-200 p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs"
        >
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <div className="site-badge mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-600" />
              <span>{mmis.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {mmis.cta.title}
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {mmis.cta.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <Link
              href="#contact"
              className="theme-btn-primary w-full sm:w-auto px-6 py-3.5 shadow-md shadow-sky-500/20"
            >
              <span>{mmis.cta.demoBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://aimpurbachal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn-secondary w-full sm:w-auto px-6 py-3.5"
            >
              <span>{mmis.cta.liveBtn}</span>
              <ExternalLink className="w-4 h-4 text-sky-600" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
