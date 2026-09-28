"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Palette,
  ShoppingCart,
  Cloud,
  Headphones,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_ICONS = [Code2, Cpu, Palette, ShoppingCart, Cloud, Headphones];

export default function Services() {
  const { dict } = useLanguage();

  return (
    <section
      id="services"
      className="relative py-28 sm:py-32 bg-[#0B0E17] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[150px]" />
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
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#00E5FF] to-[#38bdf8] bg-clip-text text-transparent">
              {dict.services.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {dict.services.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent">
              {dict.services.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {dict.services.description}
          </motion.p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dict.services.items.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00E5FF]/40 p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Ambient Card Hover Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#00E5FF]/15 to-[#0066FF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Icon + Service ID & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/10 to-[#0066FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF]/60 group-hover:bg-[#00E5FF]/20 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/[0.04] text-slate-300 border border-white/[0.06] group-hover:border-[#00E5FF]/30 transition-colors">
                        {service.tag}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-[#00E5FF] transition-colors">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
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
        </div>

        {/* Bottom Banner: Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-white/[0.03] via-[#00E5FF]/[0.05] to-[#0066FF]/[0.05] border border-white/[0.1] p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00E5FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00E5FF] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{dict.services.consultationBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {dict.services.consultationTitle}
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                {dict.services.consultationDesc}
              </p>
            </div>

            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group focus:outline-none shrink-0"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] rounded-full filter blur-[6px] opacity-75 group-hover:opacity-100 group-hover:blur-[10px] transition-all duration-300" />
              <span className="relative flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-bold text-sm tracking-wide transition-all duration-300 group-hover:brightness-110 shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                <span>{dict.services.consultationBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
