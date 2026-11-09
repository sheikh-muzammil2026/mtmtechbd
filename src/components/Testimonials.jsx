"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BASE_TESTIMONIALS = [
  {
    id: 1,
    name: "Alexander Wright",
    roleEn: "Chief Technology Officer",
    roleBn: "চিফ টেকনোলজি অফিসার (CTO)",
    company: "FinVantage",
    locationEn: "New York, USA",
    locationBn: "নিউ ইয়র্ক, যুক্তরাষ্ট্র",
    projectEn: "Financial Analytics & Real-Time Charts",
    projectBn: "অ্যানালিটিক্স ড্যাশবোর্ড ও রিয়েল-টাইম চার্ট",
    rating: 5,
    highlightEn: "Saved us months of engineering time.",
    highlightBn: "আমাদের কয়েক মাসের মূল্যবান সময় সাশ্রয় করেছে।",
    contentEn:
      "MTM Tech proved to be a reliable engineering partner. Their understanding of Next.js architecture and database query tuning helped us launch our trading analytics dashboard on schedule. Clean code and responsive communication throughout.",
    contentBn:
      "এমটিএম টেক অত্যন্ত নির্ভরযোগ্য একটি ইঞ্জিনিয়ারিং পার্টনার। Next.js আর্কিটেকচার ও ডাটাবেস টিউনিংয়ে তাদের দক্ষতার কারণে আমরা সময়মতো আমাদের অ্যানালিটিক্স ড্যাশবোর্ড লঞ্চ করতে পেরেছি। শুরু থেকেই যোগাযোগ ছিল অত্যন্ত মসৃণ।",
    avatarInitial: "AW",
    accent: "from-[#00E5FF] to-[#0066FF]",
  },
  {
    id: 2,
    name: "Elena Rostova",
    roleEn: "Head of Digital",
    roleBn: "হেড অফ ডিজিটাল",
    company: "Aura Luxe",
    locationEn: "London, UK",
    locationBn: "লন্ডন, যুক্তরাজ্য",
    projectEn: "Headless E-Commerce Storefront",
    projectBn: "হেডলেস ই-কমার্স স্টোরফ্রন্ট",
    rating: 5,
    highlightEn: "Instant page loads and smoother checkout.",
    highlightBn: "ইন্সট্যান্ট পেজ লোড ও মসৃণ চেকআউট।",
    contentEn:
      "The team re-built our storefront as a headless Next.js application with instant route transitions. Our mobile checkout drop-off dropped noticeably within the first month. They are fast, thoughtful, and communicative.",
    contentBn:
      "আমাদের স্টোরফ্রন্টকে হেডলেস Next.js অ্যাপ্লিকেশনে রূপান্তর করার পর থেকেই পেজ ট্রানজিশন অবিশ্বাস্য দ্রুত হয়েছে এবং মোবাইল চেকআউট ড্রপ-অফ উল্লেখযোগ্যভাবে হ্রাস পেয়েছে। তারা খুবই দক্ষ ও পেশাদার।",
    avatarInitial: "ER",
    accent: "from-[#0066FF] to-[#38bdf8]",
  },
  {
    id: 3,
    name: "Marcus Chen",
    roleEn: "Founder & CEO",
    roleBn: "ফাউন্ডার ও সিইও",
    company: "Nexus Systems",
    locationEn: "Singapore",
    locationBn: "সিঙ্গাপুর",
    projectEn: "Cloud Operations Hub & Docs",
    projectBn: "ক্লাউড হাব ও ডেভেলপার পোর্টাল",
    rating: 5,
    highlightEn: "Direct communication and zero technical debt.",
    highlightBn: "সরাসরি যোগাযোগ ও পরিচ্ছন্ন কোডবেস।",
    contentEn:
      "Working with MTM Tech felt like having senior engineers sitting right next to us. They attend our weekly sprint reviews, suggest practical architecture fixes, and write clean, modular TypeScript code.",
    contentBn:
      "এমটিএম টেকের সাথে কাজ করা খুবই সহজ। তারা আমাদের সাথে সরাসরি যোগাযোগ রাখে, বাস্তবসম্মত সমাধান দেয় এবং সহজে মেইনটেইন করার মতো মডুলার কোড ডেলিভারি করে।",
    avatarInitial: "MC",
    accent: "from-[#00E5FF] to-[#38bdf8]",
  },
  {
    id: 4,
    name: "Dr. Sarah Jenkins",
    roleEn: "VP of Engineering",
    roleBn: "ভিপি অফ ইঞ্জিনিয়ারিং",
    company: "MedixCore",
    locationEn: "Toronto, Canada",
    locationBn: "টরন্টো, কানাডা",
    projectEn: "Telehealth Web Portal",
    projectBn: "টেলিহেলথ ওয়েব পোর্টাল",
    rating: 5,
    highlightEn: "Passed strict penetration audits on the first run.",
    highlightBn: "প্রথমবারেই সকল সিকিউরিটি অডিটে সফল।",
    contentEn:
      "Security and reliable uptime were our primary concerns for telehealth. MTM Tech designed our web portal with end-to-end encryption and clean role-based permissions, clearing our third-party security audit smoothly.",
    contentBn:
      "আমাদের স্বাস্থ্যসেবা পোর্টালে নিরাপত্তা ও আপটাইম ছিল সর্বোচ্চ অগ্রাধিকার। এমটিএম টেক শুরু থেকেই সুরক্ষিত আর্কিটেকচার গড়ে তোলে, যা সহজেই আমাদের সিকিউরিটি অডিটে উত্তীর্ণ হয়েছে।",
    avatarInitial: "SJ",
    accent: "from-[#38bdf8] to-[#0066FF]",
  },
];

const TRUST_BRANDS = [
  "FINVANTAGE",
  "AURA LUXE",
  "NEXUS CLOUD",
  "MEDIXCORE",
  "PULSEFLOW",
  "VERTEX PROP",
];

export default function Testimonials() {
  const { language, dict } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BASE_TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + BASE_TESTIMONIALS.length) % BASE_TESTIMONIALS.length
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % BASE_TESTIMONIALS.length);
  };

  const current = BASE_TESTIMONIALS[currentIndex];
  const role = language === "bn" ? current.roleBn : current.roleEn;
  const location = language === "bn" ? current.locationBn : current.locationEn;
  const project = language === "bn" ? current.projectBn : current.projectEn;
  const highlight = language === "bn" ? current.highlightBn : current.highlightEn;
  const content = language === "bn" ? current.contentBn : current.contentEn;

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-32 bg-[#0B0E17] overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[160px]" />
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
              {dict.testimonials.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {dict.testimonials.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent">
              {dict.testimonials.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {dict.testimonials.description}
          </motion.p>
        </div>

        {/* Carousel Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-white/[0.02] border border-white/[0.08] p-8 sm:p-12 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Row: Stars + Project Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-white tracking-wider">
                  {dict.testimonials.verifiedRating}
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{project}</span>
              </div>
            </div>

            {/* Testimonial Content with Animated Transition */}
            <div className="mt-8 min-h-[160px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.id}-${language}`}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-lg sm:text-xl font-semibold text-[#00E5FF] mb-3">
                    &ldquo;{highlight}&rdquo;
                  </div>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic">
                    &ldquo;{content}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Client Info & Controls */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.accent} p-[1.5px] shadow-[0_0_15px_rgba(0,229,255,0.3)]`}
                >
                  <div className="w-full h-full bg-[#0B0E17] rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                    {current.avatarInitial}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">
                    {current.name}
                  </h4>
                  <div className="text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">
                      {role}
                    </span>{" "}
                    • {current.company} ({location})
                  </div>
                </div>
              </div>

              {/* Slider Arrows & Indicators */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 mr-2">
                  {BASE_TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlay(false);
                        setCurrentIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx
                          ? "w-6 bg-gradient-to-r from-[#00E5FF] to-[#0066FF]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00E5FF]/40 text-slate-300 hover:text-white transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00E5FF]/40 text-slate-300 hover:text-white transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Brand Strip */}
        <div className="mt-20 pt-10 border-t border-white/[0.06] text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-8">
            {dict.testimonials.trustSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {TRUST_BRANDS.map((brand) => (
              <div
                key={brand}
                className="font-mono text-sm sm:text-base font-extrabold tracking-widest text-slate-400 hover:text-[#00E5FF] transition-colors cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
