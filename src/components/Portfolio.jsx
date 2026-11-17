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
import StarfieldBackground from "@/components/shared/StarfieldBackground";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const BASE_PROJECTS = [
  {
    id: 1,
    categoryKey: "erp",
    titleEn: "AIM Educational ERP — Institutional Management Suite",
    titleBn: "এআইএম এডুকেশনাল ইআরপি — সমন্বিত প্রাতিষ্ঠানিক ব্যবস্থাপনা",
    titleAr: "AIM Educational ERP — نظام إدارة المؤسسات التعليمية المتكامل",
    categoryEn: "Educational ERP",
    categoryBn: "এডুকেশনাল ইআরপি",
    categoryAr: "إدارة المؤسسات التعليمية",
    descEn:
      "Full-scale educational ERP platform featuring double-entry accounting & fee vouchers, geolocation-tracked staff attendance, automated exam marksheets & result publishing, QR-coded PDF admit cards, and parent feedback portals.",
    descBn:
      "সম্পূর্ণ শিক্ষা প্রতিষ্ঠান ইআরপি—ডাবল-এন্ট্রি হিসাব ও ফি ভাউচার, জিও-লোকেশন ভিত্তিক স্টাফ হাজিরা, স্বয়ংক্রিয় পরীক্ষার ফলাফল ও মার্কশিট, কিউআর কোডযুক্ত প্রবেশপত্র এবং অভিভাবক পোর্টাল।",
    descAr:
      "نظام شامل لإدارة المؤسسات التعليمية—محاسبة مزدوجة وقسائم رسوم، تتبع حضور الموظفين جغرافياً، استخراج النتائج وبطاقات الاختبار بـ QR كود، وبوابة أولياء الأمور.",
    metricEn: "+80% Admin Efficiency",
    metricBn: "+৮০% প্রশাসনিক সময় সাশ্রয়",
    metricAr: "+80% كفاءة إدارية وسرعة",
    subMetricEn: "5,000+ Students & Staff",
    subMetricBn: "৫,০০০+ শিক্ষার্থী ও স্টাফ",
    subMetricAr: "5,000+ طالب وكادر تعليمي",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-[#00E5FF]/20 via-[#0066FF]/20 to-transparent",
    liveUrl: "https://aimpurbachal.vercel.app",
    repoUrl: null,
  },
  {
    id: 2,
    categoryKey: "booking",
    titleEn: "MediQueue — Tutor Booking & Session Management Platform",
    titleBn: "মেডি-কিউ — অনলাইন টিউটর বুকিং ও সেশন প্ল্যাটফর্ম",
    titleAr: "MediQueue — منصة حجز المدرسين وجدولة الجلسات التعليمية",
    categoryEn: "Booking & EdTech",
    categoryBn: "বুকিং ও এডটেক",
    categoryAr: "الحجوزات والتعليم",
    descEn:
      "Interactive booking and session management application facilitating student-tutor scheduling, automated slot reservations, real-time consultation notifications, and instructor reviews.",
    descBn:
      "শিক্ষার্থী ও টিউটরদের শিডিউলিং, স্বয়ংক্রিয় স্লট বুকিং, রিয়েল-টাইম কনসালটেশন নোটিফিকেশন ও রিভিউ সমৃদ্ধ আধুনিক প্ল্যাটফর্ম।",
    descAr:
      "تطبيق تفاعلي لحجز المدرسين الخصوصيين وجدولة الجلسات، مع حجز تلقائي للمواعيد، وإشعارات حية ومراجعات موثقة للمعلمين.",
    metricEn: "<200ms Search Latency",
    metricBn: "<২০০মি.সে. দ্রুত সার্চ",
    metricAr: "<200ms استجابة سريعة",
    subMetricEn: "Real-Time Slot Engine",
    subMetricBn: "রিয়েল-টাইম স্লট ইঞ্জিন",
    subMetricAr: "محرك حجز فوري للمواعيد",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    gradient: "from-emerald-500/20 via-[#00E5FF]/20 to-transparent",
    liveUrl: "https://mediqueue-client-ochre.vercel.app",
    repoUrl: "https://github.com/sheikh-muzammil2026/mediqueue-client",
    serverRepoUrl: "https://github.com/sheikh-muzammil2026/mediqueue-server",
  },
  {
    id: 3,
    categoryKey: "ecommerce",
    titleEn: "SunCart — Modern Solar & Gadget E-Commerce Store",
    titleBn: "সানকার্ট — আধুনিক সোলার ও গ্যাজেট ই-কমার্স স্টোর",
    titleAr: "SunCart — متجر إلكتروني لمنتجات الطاقة والأجهزة",
    categoryEn: "E-Commerce",
    categoryBn: "ই-কমার্স",
    categoryAr: "التجارة الإلكترونية",
    descEn:
      "Responsive digital storefront for renewable energy products and electronics featuring instant cart state management, category search filters, customer invoice generation, and secured checkout workflows.",
    descBn:
      "রিনিউয়েবল এনার্জি ও গ্যাজেটের রেসপন্সিভ ই-কমার্স—ইনস্ট্যান্ট কার্ট, ক্যাটাগরি ফিল্টার, কাস্টমার ইনভয়েস তৈরি ও নিরাপদ চেকআউট সহ।",
    descAr:
      "متجر إلكتروني عصري لمنتجات الطاقة المتجددة والأجهزة، يتميز بسلة تسوق فورية، وفلاتر للمنتجات، وفواتير تلقائية، ودفع آمن.",
    metricEn: "100% Mobile Optimized",
    metricBn: "১০০% মোবাইল অপ্টিমাইজড",
    metricAr: "100% متوافق مع الهواتف",
    subMetricEn: "Sub-Second Navigation",
    subMetricBn: "দ্রুত পেজ ট্রানজিশন",
    subMetricAr: "تنقل فوري وسلس",
    tags: ["React", "Vite", "Tailwind CSS", "Context API", "Vercel"],
    gradient: "from-[#0066FF]/20 via-[#00E5FF]/20 to-transparent",
    liveUrl: "https://b13-a8-suncart.vercel.app",
    repoUrl: "https://github.com/sheikh-muzammil2026/B13-A8-suncart",
  },
  {
    id: 4,
    categoryKey: "booking",
    titleEn: "StayNest — Hotel Booking & Hospitality Suite",
    titleBn: "স্টেনেস্ট — হোটেল বুকিং ও হসপিটালিটি স্যুট",
    titleAr: "StayNest — منصة حجوزات الفنادق والضيافة",
    categoryEn: "Booking & EdTech",
    categoryBn: "বুকিং ও এডটেক",
    categoryAr: "الحجوزات والتعليم",
    descEn:
      "Comprehensive hospitality reservation platform enabling room availability calendars, tiered guest billing, seasonal rate rules, multi-filter location discovery, and automated check-in confirmations.",
    descBn:
      "হোটেল ও রিসোর্ট বুকিং স্যুট—রিয়েল-টাইম রুম ক্যালেন্ডার, গেস্ট বিলিং, সিজনাল ডিসকাউন্ট ও লোকেশন সার্চ সহ।",
    descAr:
      "نظام متكامل لحجوزات الفنادق والضيافة، يوفر تقويم التوفر في الوقت الفعلي، وتفاصيل الفوترة، وقواعد الأسعار الموسمية.",
    metricEn: "Zero Double-Bookings",
    metricBn: "জিরো ওভারল্যাপিং বুকিং",
    metricAr: "منع التعارض في الحجوزات تماماً",
    subMetricEn: "Automated Calendar Sync",
    subMetricBn: "স্বয়ংক্রিয় ক্যালেন্ডার সিঙ্ক",
    subMetricAr: "مزامنة التقويم الفورية",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    gradient: "from-amber-500/20 via-[#0066FF]/20 to-transparent",
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 5,
    categoryKey: "streaming",
    titleEn: "Flixora — On-Demand Video Streaming Web Application",
    titleBn: "ফ্লিক্সোরা — অন-ডিমান্ড ভিডিও স্ট্রিমিং প্ল্যাটফর্ম",
    titleAr: "Flixora — منصة بث الفيديو والوسائط عند الطلب",
    categoryEn: "Streaming & Media",
    categoryBn: "স্ট্রিমিং ও মিডিয়া",
    categoryAr: "البث والوسائط",
    descEn:
      "High-performance video delivery platform with custom video player controls, adaptive streaming bitrate adjustment, personalized watchlist curation, and categorized media libraries.",
    descBn:
      "হাই-পারফরম্যান্স ভিডিও প্ল্যাটফর্ম—কাস্টম প্লেয়ার কন্ট্রোল, অ্যাডাপ্টিভ বিটরেট স্ট্রিমিং, পার্সোনালাইজড ওয়াচলিস্ট ও ক্যাটাগরি ভিত্তিক মিডিয়া লাইব্রেরি।",
    descAr:
      "منصة متقدمة لبث الوسائط والفيديو، مع مشغل مخصص، وتكيّف تلقائي لمعدل البث، وقوائم مشاهدة مخصصة وتصنيف للمكتبة.",
    metricEn: "4K Adaptive Bitrate",
    metricBn: "৪K অ্যাডাপ্টিভ বিটরেট",
    metricAr: "بث فائق الجودة 4K",
    subMetricEn: "Low-Latency Playback",
    subMetricBn: "জিরো বাফারিং প্লেব্যাক",
    subMetricAr: "تشغيل سلس دون تقطيع",
    tags: ["Next.js", "HLS.js", "Tailwind CSS", "Cloudflare Stream", "Node.js"],
    gradient: "from-purple-600/20 via-[#00E5FF]/20 to-transparent",
    liveUrl: null,
    repoUrl: null,
  },
];

export default function Portfolio() {
  const { language, dict } = useLanguage();
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);

  const categories = dict.portfolio.categories;

  // Filter projects by category key
  const filteredProjects =
    selectedCatIndex === 0
      ? BASE_PROJECTS
      : BASE_PROJECTS.filter((p) => {
          if (selectedCatIndex === 1) return p.categoryKey === "erp";
          if (selectedCatIndex === 2) return p.categoryKey === "ecommerce";
          if (selectedCatIndex === 3) return p.categoryKey === "booking";
          if (selectedCatIndex === 4) return p.categoryKey === "streaming";
          return true;
        });

  return (
    <section
      id="portfolio"
      className="relative py-28 sm:py-32 bg-gradient-to-b from-[#070B14] via-[#0B162C]/80 to-[#070B14] overflow-hidden"
    >
      {/* Background Aurora Glows, Blueprint Grid & Starfield */}
      <StarfieldBackground glowPosition="both" />

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
              const title =
                language === "ar"
                  ? project.titleAr
                  : language === "bn"
                  ? project.titleBn
                  : project.titleEn;
              const category =
                language === "ar"
                  ? project.categoryAr
                  : language === "bn"
                  ? project.categoryBn
                  : project.categoryEn;
              const desc =
                language === "ar"
                  ? project.descAr
                  : language === "bn"
                  ? project.descBn
                  : project.descEn;
              const metric =
                language === "ar"
                  ? project.metricAr
                  : language === "bn"
                  ? project.metricBn
                  : project.metricEn;
              const subMetric =
                language === "ar"
                  ? project.subMetricAr
                  : language === "bn"
                  ? project.subMetricBn
                  : project.subMetricEn;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-2xl bg-[#111C33]/70 hover:bg-[#152442]/90 border border-white/[0.08] hover:border-cyan-400/35 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:-translate-y-1.5"
                >
                  {/* Visual Header / Mock Window */}
                  <div className="relative h-48 bg-gradient-to-br from-[#0B162C] to-[#070B14] border-b border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Browser Bar */}
                    <div className="relative z-10 flex items-center justify-between" dir="ltr">
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
                      <div className="flex flex-wrap gap-1.5 mb-5" dir="ltr">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-[10px] font-medium text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF] hover:text-[#38bdf8] transition-colors"
                          >
                            <span>{dict.portfolio.liveDemoBtn}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <Link
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#00E5FF] transition-colors"
                          >
                            <span>{dict.portfolio.demoOnRequest}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        )}

                        <div className="flex items-center gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/[0.03] hover:bg-[#00E5FF]/20 border border-white/[0.06] hover:border-[#00E5FF]/40 text-slate-400 hover:text-[#00E5FF] transition-all"
                              title={dict.portfolio.viewRepoBtn}
                              aria-label="View Source Code"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/[0.03] hover:bg-[#00E5FF]/20 border border-white/[0.06] hover:border-[#00E5FF]/40 text-slate-400 hover:text-[#00E5FF] transition-all"
                              aria-label="View Project"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
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
