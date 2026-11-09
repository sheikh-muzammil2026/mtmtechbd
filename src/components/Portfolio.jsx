"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BASE_PROJECTS = [
  {
    id: 1,
    titleEn: "FinVantage - Real-Time Financial Analytics",
    titleBn: "ফিনভান্টেজ - রিয়েল-টাইম ফিন্যান্সিয়াল অ্যানালিটিক্স",
    categoryEn: "Web Apps & SaaS",
    categoryBn: "ওয়েব অ্যাপস ও SaaS",
    descEn:
      "Cloud analytics dashboard featuring interactive market charts, portfolio tracking, and sub-200ms query responses on high-volume data.",
    descBn:
      "রিয়েল-টাইম চার্টিং, পোর্টফোলিও ট্র্যাকিং ও দ্রুত কুয়েরি রেসপন্স সমৃদ্ধ ক্লাউড অ্যানালিটিক্স ড্যাশবোর্ড।",
    metricEn: "+180% User Engagement",
    metricBn: "+১৮০% ইউজার এনগেজমেন্ট",
    subMetricEn: "<180ms Query Latency",
    subMetricBn: "<১৮০মি.সে. কুয়েরি লেটেন্সি",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    gradient: "from-[#00E5FF]/20 via-[#0066FF]/20 to-transparent",
  },
  {
    id: 2,
    titleEn: "Aura Commerce - Global Headless Storefront",
    titleBn: "অরা কমার্স - গ্লোবাল হেডলেস স্টোরফ্রন্ট",
    categoryEn: "E-Commerce",
    categoryBn: "ই-কমার্স",
    descEn:
      "Headless e-commerce storefront built with Next.js and Shopify, supporting multi-currency checkout and sub-second page transitions.",
    descBn:
      "Next.js ও Shopify দিয়ে তৈরি হেডলেস স্টোরফ্রন্ট—মাল্টি-কারেন্সি চেকআউট ও দ্রুত পেজ ট্রানজিশন সুবিধা সহ।",
    metricEn: "+145% Mobile Checkout Rate",
    metricBn: "+১৪৫% মোবাইল চেকআউট বৃদ্ধি",
    subMetricEn: "99.99% Uptime",
    subMetricBn: "৯৯.৯৯% আপটাইম",
    tags: ["Shopify Plus", "Next.js", "Stripe", "Framer Motion"],
    gradient: "from-[#0066FF]/20 via-[#00E5FF]/20 to-transparent",
  },
  {
    id: 3,
    titleEn: "Nexus Portal - Cloud Infrastructure Hub",
    titleBn: "নেক্সাস পোর্টাল - ক্লাউড ইনফ্রাস্ট্রাকচার হাব",
    categoryEn: "Custom Websites",
    categoryBn: "কাস্টম ওয়েবসাইট",
    descEn:
      "Secure documentation and developer portal engineered with Jamstack architecture, headless CMS, and 100/100 Lighthouse performance.",
    descBn:
      "জ্যামস্ট্যাক আর্কিটেকচার, হেডলেস CMS ও ১০০/১০০ লাইটহাউস স্কোর সহ আধুনিক ক্লাউড পোর্টাল।",
    metricEn: "100/100 Lighthouse Score",
    metricBn: "১০০/১০০ লাইটহাউস স্কোর",
    subMetricEn: "3x Faster Documentation Search",
    subMetricBn: "৩ গুণ দ্রুত সার্চ রেসপন্স",
    tags: ["React", "Next.js", "Tailwind CSS", "Sanity CMS"],
    gradient: "from-[#00E5FF]/20 via-[#38bdf8]/20 to-transparent",
  },
  {
    id: 4,
    titleEn: "PulseFlow - Team Workflow & Task Manager",
    titleBn: "পালসফ্লো - টিম ওয়ার্কফ্লো ও টাস্ক ম্যানেজার",
    categoryEn: "UI/UX Design",
    categoryBn: "ইউআই/ইউএক্স ডিজাইন",
    descEn:
      "Design system and responsive frontend application for collaborative task planning, sprint tracking, and team milestone management.",
    descBn:
      "টিম টাস্ক প্ল্যানিং ও স্প্রিন্ট ট্র্যাকিংয়ের জন্য তৈরি আধুনিক ডিজাইন সিস্টেম ও রেসপন্সিভ ফ্রন্টএন্ড।",
    metricEn: "-40% Onboarding Drop-off",
    metricBn: "-৪০% অনবোর্ডিং ড্রপ-অফ",
    subMetricEn: "4.9/5 User Rating",
    subMetricBn: "৪.৯/৫ ইউজার রেটিং",
    tags: ["Figma", "Design System", "Next.js", "Tailwind CSS"],
    gradient: "from-[#0066FF]/20 via-purple-600/20 to-transparent",
  },
  {
    id: 5,
    titleEn: "MedixCore - Telehealth Consultation Portal",
    titleBn: "মেডিক্সকোর - টেলিহেলথ কনসালটেশন পোর্টাল",
    categoryEn: "Web Apps & SaaS",
    categoryBn: "ওয়েব অ্যাপস ও SaaS",
    descEn:
      "Secure healthcare web application featuring encrypted WebRTC video visits, patient records management, and automated appointment reminders.",
    descBn:
      "এনক্রিপ্টেড WebRTC ভিডিও কনসালটেশন, পেশেন্ট রেকর্ড ও অটোমেটেড শিডিউলিং সমৃদ্ধ নিরাপদ টেলিহেলথ প্ল্যাটফর্ম।",
    metricEn: "HIPAA Compliant Architecture",
    metricBn: "HIPAA কমপ্লায়েন্ট আর্কিটেকচার",
    subMetricEn: "30k+ Patient Consultations",
    subMetricBn: "৩০,০০০+ রোগী সেবা",
    tags: ["Next.js", "WebRTC", "Node.js", "AWS Cloud"],
    gradient: "from-[#00E5FF]/20 via-emerald-500/20 to-transparent",
  },
  {
    id: 6,
    titleEn: "Vertex Properties - Map-Based Real Estate Search",
    titleBn: "ভার্টেক্স প্রপার্টিজ - ম্যাপ-ভিত্তিক রিয়েল এস্টেট পোর্টাল",
    categoryEn: "Custom Websites",
    categoryBn: "কাস্টম ওয়েবসাইট",
    descEn:
      "Interactive property listing portal featuring polygon map search, neighborhood filters, and direct inquiry scheduling with agents.",
    descBn:
      "ইন্টারেক্টিভ ম্যাপ ফিল্টারিং, এলাকাভিত্তিক সার্চ এবং সরাসরি এজেন্ট বুকিং সুবিধা সম্বলিত আধুনিক প্রপার্টি পোর্টাল।",
    metricEn: "+160% Organic Search Leads",
    metricBn: "+১৬০% অর্গানিক সার্চ লিড",
    subMetricEn: "3.5m Avg Session Time",
    subMetricBn: "৩.৫ মিনিট গড় সেশন সময়",
    tags: ["Next.js", "Mapbox GL", "Tailwind CSS", "Supabase"],
    gradient: "from-[#38bdf8]/20 via-[#0066FF]/20 to-transparent",
  },
];

export default function Portfolio() {
  const { language, dict } = useLanguage();
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);

  const categories = dict.portfolio.categories;
  const isAll = selectedCatIndex === 0;

  // Filter projects by index
  const filteredProjects = isAll
    ? BASE_PROJECTS
    : BASE_PROJECTS.filter((_, idx) => {
        if (selectedCatIndex === 1) return idx === 0 || idx === 4; // SaaS
        if (selectedCatIndex === 2) return idx === 2 || idx === 5; // Custom Web
        if (selectedCatIndex === 3) return idx === 1; // E-Commerce
        if (selectedCatIndex === 4) return idx === 3; // UI/UX
        return true;
      });

  return (
    <section
      id="portfolio"
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
              {dict.portfolio.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {dict.portfolio.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent">
              {dict.portfolio.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {dict.portfolio.description}
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {categories.map((cat, idx) => {
            const isActive = selectedCatIndex === idx;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCatIndex(idx)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "text-[#0B0E17]"
                    : "text-slate-300 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-portfolio-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const title = language === "bn" ? project.titleBn : project.titleEn;
              const category =
                language === "bn" ? project.categoryBn : project.categoryEn;
              const desc = language === "bn" ? project.descBn : project.descEn;
              const metric =
                language === "bn" ? project.metricBn : project.metricEn;
              const subMetric =
                language === "bn" ? project.subMetricBn : project.subMetricEn;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00E5FF]/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:-translate-y-1.5"
                >
                  {/* Visual Header / Mock Window */}
                  <div className="relative h-48 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-b border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Browser Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-300 border border-white/[0.06]">
                        {category}
                      </span>
                    </div>

                    {/* Metric Accent */}
                    <div className="relative z-10 my-auto text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md group-hover:border-[#00E5FF]/40 transition-colors">
                        <TrendingUp className="w-4 h-4 text-[#00E5FF]" />
                        <span className="text-xs font-bold text-white tracking-wide">
                          {metric}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 font-mono">
                        {subMetric}
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{dict.portfolio.statusLive}</span>
                      <span className="text-[#00E5FF] flex items-center gap-1">
                        {dict.portfolio.verifiedBadge}{" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-medium text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#00E5FF] transition-colors"
                        >
                          <span>{dict.portfolio.requestSimilar}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        <Link
                          href="#contact"
                          className="p-2 rounded-lg bg-white/[0.03] hover:bg-[#00E5FF]/20 border border-white/[0.06] hover:border-[#00E5FF]/40 text-slate-400 hover:text-[#00E5FF] transition-all"
                          aria-label="View Project"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-400 mb-4">
            {dict.portfolio.bottomPrompt}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.12] hover:border-[#00E5FF]/40 text-white font-semibold text-sm transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            <span>{dict.portfolio.bottomCta}</span>
            <ArrowRight className="w-4 h-4 text-[#00E5FF] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
