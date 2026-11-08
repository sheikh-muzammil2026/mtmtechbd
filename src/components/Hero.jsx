"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  CheckCircle2,
  Terminal,
  Star,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Counter animation hook replicated from Farhana-portfolio
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

function toBengaliDigits(numStr) {
  return String(numStr).replace(/[0-9]/g, (digit) => BENGALI_DIGITS[+digit]);
}

function fromBengaliDigits(str) {
  const map = { "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9" };
  return String(str).replace(/[০-৯]/g, (char) => map[char]);
}

function AnimatedStatValue({ value }) {
  const normalized = fromBengaliDigits(value);
  const match = normalized.match(/([0-9]+(?:\.[0-9]+)?)/);

  const isBengali = /[০-৯]/.test(value);
  const target = match ? parseFloat(match[1]) : 0;
  const hasDecimals = match ? match[1].includes(".") : false;
  const count = useCounter(target, 2000);

  if (!match) return <span>{value}</span>;

  if (count >= target) {
    return <span>{value}</span>;
  }

  const prefix = normalized.slice(0, match.index);
  const suffix = normalized.slice(match.index + match[1].length);
  const currentFormatted = hasDecimals ? count.toFixed(1) : Math.floor(count).toString();
  const finalFormatted = isBengali ? toBengaliDigits(currentFormatted) : currentFormatted;

  return (
    <span>
      {prefix}
      {finalFormatted}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Dynamic Background Glows and Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#00E5FF]/15 via-[#0066FF]/10 to-transparent blur-[140px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        <div className="absolute top-1/4 -left-36 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-36 w-80 h-80 bg-[#00E5FF]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: High-Converting Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Tagline / Announcement Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#00E5FF]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:border-[#00E5FF]/60 hover:shadow-[0_0_25px_rgba(0,229,255,0.35)] transition-all duration-300 mb-6 group cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]" />
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#00E5FF] to-[#38bdf8] bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-300">
                {dict.hero.badge}
              </span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1 group-hover:text-white transition-colors duration-300">
                {dict.hero.badgeSub} <Sparkles className="w-3 h-3 text-[#00E5FF] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.12]"
            >
              {dict.hero.headlinePrefix}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {dict.hero.headlineHighlight1}
                </span>
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.3)]">
                {dict.hero.headlineMiddle}
              </span>{" "}
              {dict.hero.headlineSuffix}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              {dict.hero.subheadline}
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA Button with Neon Cyan Glow */}
              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group focus:outline-none w-full sm:w-auto transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] rounded-full filter blur-[8px] opacity-75 group-hover:opacity-100 group-hover:blur-[12px] transition-all duration-300" />
                <span className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-bold text-base tracking-wide transition-all duration-300 group-hover:brightness-110 shadow-[0_0_25px_rgba(0,229,255,0.45)] group-hover:shadow-[0_0_35px_rgba(0,229,255,0.75)] w-full sm:w-auto">
                  <span>{dict.hero.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>

              {/* Secondary CTA Button */}
              <Link
                href="#portfolio"
                className="relative inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-[#00E5FF]/60 transition-all duration-300 backdrop-blur-md group w-full sm:w-auto hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>{dict.hero.ctaSecondary}</span>
                  <span className="text-[#00E5FF] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>

            {/* Social Proof / Trust Line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400"
            >
              <div className="flex items-center gap-1 text-amber-400 group">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                ))}
              </div>
              <span className="font-semibold text-white">{dict.hero.ratingText}</span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                {dict.hero.onTimeDelivery}
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-slate-300 hidden sm:inline">
                {dict.hero.webStandards}
              </span>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Modern Interactive Visual Element (Tech Architecture & Live Metrics) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 via-[#0066FF]/20 to-transparent rounded-3xl blur-2xl transform -rotate-3 scale-95 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#0B0E17]/90 border border-white/[0.12] rounded-2xl p-5 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] hover:border-[#00E5FF]/40 hover:shadow-[0_20px_60px_rgba(0,229,255,0.18)] transition-all duration-500 group"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-slate-400 border border-white/[0.06]">
                  <Terminal className="w-3 h-3 text-[#00E5FF]" />
                  <span>{dict.hero.terminalTitle}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{dict.hero.terminalLive}</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="mt-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                <p className="text-slate-500">{dict.hero.terminalComment}</p>
                <p>
                  <span className="text-[#00E5FF]">const</span>{" "}
                  <span className="text-white font-semibold">solution</span> ={" "}
                  <span className="text-[#0066FF]">await</span>{" "}
                  <span className="text-amber-300">mtmTech</span>.
                  <span className="text-[#00E5FF]">architect</span>({"{"}
                </p>
                <div className="pl-4 space-y-1">
                  <p>
                    <span className="text-slate-400">clientVision:</span>{" "}
                    <span className="text-emerald-400">&apos;Excellence&apos;</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">performance:</span>{" "}
                    <span className="text-emerald-400">&apos;Ultra-High (99+)&apos;</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">security:</span>{" "}
                    <span className="text-emerald-400">&apos;Enterprise Grade&apos;</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">scalability:</span>{" "}
                    <span className="text-[#00E5FF]">Infinity</span>,
                  </p>
                </div>
                <p>{"});"}</p>
                <p className="mt-2 text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{dict.hero.terminalDeployed}</span>
                  <span className="inline-block w-1.5 h-3.5 bg-[#00E5FF] animate-pulse ml-0.5 align-middle" />
                </p>
              </div>

              {/* Tech Badges Row */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
                {["Next.js 16", "React 19", "Tailwind CSS", "Cloud Native", "AI Ready"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] font-medium text-slate-300 hover:border-[#00E5FF]/50 hover:bg-white/[0.06] hover:scale-105 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Floating Live Metric Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="absolute -top-6 -right-2 sm:-right-6 bg-[#0B0E17]/95 border border-[#00E5FF]/40 hover:border-[#00E5FF]/70 rounded-xl p-3 sm:p-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,229,255,0.25)] hover:shadow-[0_15px_35px_rgba(0,229,255,0.4)] flex items-center gap-3 z-20 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">{dict.hero.metricSpeed}</div>
                <div className="text-base font-bold text-white flex items-center gap-1">
                  <span>99/100</span>
                  <span className="text-[10px] text-emerald-400 font-normal">Score</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Live Metric Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-[#0B0E17]/95 border border-white/[0.12] hover:border-emerald-500/50 rounded-xl p-3 sm:p-4 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.3)] flex items-center gap-3 z-20 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">{dict.hero.metricConversion}</div>
                <div className="text-base font-bold text-white flex items-center gap-1.5">
                  <span className="text-[#00E5FF]">+140%</span>
                  <span className="text-[10px] text-slate-400 font-normal">{dict.hero.conversionSub}</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* BOTTOM STATS COUNTER STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-10 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {dict.hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative flex flex-col p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-[#00E5FF]/40 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] hover:scale-[1.03] backdrop-blur-xl transition-all duration-300 group cursor-default"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-[#00E5FF] bg-clip-text text-transparent group-hover:drop-shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300">
                  <AnimatedStatValue value={stat.value} />
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
