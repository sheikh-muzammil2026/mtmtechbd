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
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StarfieldBackground from "@/components/shared/StarfieldBackground";

const SERVICE_ICONS = [Code2, Cpu, Palette, ShoppingCart, Cloud, Headphones];

export default function Services() {
  const { dict } = useLanguage();

  return (
    <section id="services" className="site-section relative overflow-hidden">
      {/* Background Aurora Glows, Blueprint Grid & Starfield */}
      <StarfieldBackground glowPosition="left" />

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
            <span>{dict.services.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading"
          >
            {dict.services.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {dict.services.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-subheading"
          >
            {dict.services.description}
          </motion.p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dict.services.items.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="theme-card p-7 sm:p-8 flex flex-col justify-between group overflow-hidden relative"
              >
                <div>
                  {/* Top Row: Icon + Service ID & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:scale-105 group-hover:border-sky-300 transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                        {service.tag}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
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
        </div>

        {/* Bottom Banner: Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-16 rounded-3xl bg-gradient-to-r from-sky-50 via-indigo-50/70 to-sky-50 border border-sky-200 p-8 sm:p-10 relative overflow-hidden shadow-xs"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
            <div>
              <div className="site-badge mb-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                <span>{dict.services.consultationBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {dict.services.consultationTitle}
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl font-normal">
                {dict.services.consultationDesc}
              </p>
            </div>

            <Link
              href="#contact"
              className="theme-btn-primary px-6 py-3.5 shadow-md shadow-sky-500/20 shrink-0"
            >
              <span>{dict.services.consultationBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
