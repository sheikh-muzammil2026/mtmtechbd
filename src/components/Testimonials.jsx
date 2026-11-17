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
import StarfieldBackground from "@/components/shared/StarfieldBackground";

const BASE_TESTIMONIALS = [
  {
    id: 1,
    name: "Prof. M. A. Karim",
    roleEn: "Principal",
    roleBn: "অধ্যক্ষ",
    roleAr: "مدير الكلية",
    company: "Ideal Model College",
    locationEn: "Dhaka, Bangladesh",
    locationBn: "ঢাকা, বাংলাদেশ",
    locationAr: "دكا، بنغلاديش",
    projectEn: "Campus ERP & Result Automation",
    projectBn: "ক্যাম্পাস ইআরপি ও রেজাল্ট অটোমেশন",
    projectAr: "نظام إدارة الكلية وأتمتة النتائج",
    rating: 5,
    highlightEn: "Exam result publication is now 100% error-free.",
    highlightBn: "পরীক্ষার ফলাফল ও মার্কশিট এখন শতভাগ নির্ভুল।",
    highlightAr: "إعلان نتائج الامتحانات والشهادات أصبح دقيقاً وبلا أخطاء.",
    contentEn:
      "Before MTM Tech BD's ERP, compiling tabulation sheets and publishable marksheets for over 1,500 students took our teachers weeks of overtime. Now, marks are calculated automatically with GPA rules, and parents can check results online instantly.",
    contentBn:
      "এমটিএম টেকের ইআরপি ব্যবহারের পূর্বে দেড় হাজার শিক্ষার্থীর টেবুলেশন ও মার্কশিট প্রস্তুত করতে শিক্ষকদের কয়েক সপ্তাহ হিমশিম খেতে হতো। এখন স্বয়ংক্রিয় জিপিএ নিয়মে ফলাফল প্রস্তুত হয় এবং অভিভাবকরা তাৎক্ষণিক অনলাইনে রেজাল্ট দেখতে পান।",
    contentAr:
      "قبل تطبيق نظام MTM Tech BD، كان تجميع كشوف الدرجات والشهادات لأكثر من 1500 طالب يستغرق أسابيع من الإرهاق للمعلمين. الآن يتم احتساب المعدلات التراكمية تلقائياً ويطّلع أولياء الأمور على النتائج إلكترونياً وفورياً.",
    avatarInitial: "MK",
    accent: "from-[#00E5FF] to-[#0066FF]",
  },
  {
    id: 2,
    name: "Mawlana Abdur Rahman",
    roleEn: "Principal / Muhtamim",
    roleBn: "অধ্যক্ষ ও মুহতামিম",
    roleAr: "المدير العام والمهتمم",
    company: "AIM Habiganj & Purbachal",
    locationEn: "Sylhet & Dhaka",
    locationBn: "সিলেট ও ঢাকা",
    locationAr: "سيلهيت ودكا",
    projectEn: "Complete Institutional ERP & Accounts",
    projectBn: "সম্পূর্ণ প্রাতিষ্ঠানিক ইআরপি ও হিসাব ব্যবস্থা",
    projectAr: "نظام المؤسسة الشامل والمحاسبة",
    rating: 5,
    highlightEn: "Complete financial clarity with automated monthly vouchers.",
    highlightBn: "মাসিক ফি ভাউচার ও প্রতিষ্ঠানের হিসাবে সম্পূর্ণ স্বচ্ছতা এসেছে।",
    highlightAr: "وضوح مالي تام مع فواتير الرسوم الشهرية التلقائية.",
    contentEn:
      "Managing boarding fees, kitchen dining accounts, and teacher payroll across multiple branches used to be overwhelming. The software's double-entry accounting and fee vouchers give our management committee complete peace of mind.",
    contentBn:
      "একাধিক শাখার বোর্ডিং ফি, মেস হিসাব ও শিক্ষক-স্টাফদের বেতন সামলানো আমাদের জন্য অনেক কঠিন ছিল। সফটওয়্যারটির ডাবল-এন্ট্রি হিসাব ও ভাউচার ব্যবস্থার ফলে আমাদের পরিচালনা কমিটির কাছে প্রতিটি হিসাব অত্যন্ত স্বচ্ছ।",
    contentAr:
      "كانت إدارة رسوم الإقامة وسكن الطلاب وحسابات الإطعام ومسيرات رواتب المعلمين عبر فروع متعددة مهمة شاقة. نظام المحاسبة المزدوج وقسائم الرسوم التلقائية وفّرا للجنة الإدارة شفافية تامة وراحة بال.",
    avatarInitial: "AR",
    accent: "from-[#0066FF] to-[#38bdf8]",
  },
  {
    id: 3,
    name: "Engr. Tariqul Islam",
    roleEn: "Chairman, Governing Body",
    roleBn: "চেয়ারম্যান, গভর্নিং বডি",
    roleAr: "رئيس مجلس الإدارة",
    company: "Al-Hikmah Academy",
    locationEn: "Chittagong",
    locationBn: "চট্টগ্রাম",
    locationAr: "تشيتاغونغ",
    projectEn: "Online Admission & Multi-Branch Management",
    projectBn: "অনলাইন ভর্তি ও শাখা ব্যবস্থাপনা",
    projectAr: "القبول الإلكتروني وإدارة الفروع",
    rating: 5,
    highlightEn: "Admissions increased by 40% with the modern online portal.",
    highlightBn: "অনলাইন পোর্টালের মাধ্যমে আমাদের ভর্তি কার্যক্রম ৪০% বৃদ্ধি পেয়েছে।",
    highlightAr: "زادت طلبات التسجيل والقبول بنسبة 40% بفضل البوابة الرقمية الحديثة.",
    contentEn:
      "Parents can now submit admission forms, upload student photos, and pay registration fees directly from their mobile phones. The admin panel makes reviewing applications and generating admit cards remarkably straightforward.",
    contentBn:
      "অভিভাবকরা এখন ঘরে বসেই মোবাইল ফোনের মাধ্যমে ভর্তি ফরম পূরণ, ছবি আপলোড ও ফি পরিশোধ করতে পারেন। অ্যাডমিন প্যানেল থেকে আবেদন যাচাই ও প্রবেশপত্র তৈরি করা অত্যন্ত সহজ হয়ে গেছে।",
    contentAr:
      "يستطيع أولياء الأمور الآن تقديم طلبات الالتحاق ورفع المستندات ودفع رسوم التسجيل مباشرة من هواتفهم. كما أصبحت مراجعة الطلبات وإصدار بطاقات الاختبار أمراً في غاية السهولة للموظفين.",
    avatarInitial: "TI",
    accent: "from-[#00E5FF] to-[#38bdf8]",
  },
  {
    id: 4,
    name: "Dr. Farhana Ahmed",
    roleEn: "Academic Director",
    roleBn: "একাডেমিক ডিরেক্টর",
    roleAr: "المدير الأكاديمي",
    company: "Global Learners Academy",
    locationEn: "Dhaka",
    locationBn: "ঢাকা",
    locationAr: "دكا",
    projectEn: "Integrated LMS & Guardian Portal",
    projectBn: "ইন্টিগ্রেটেড এলএমএস ও অভিভাবক পোর্টাল",
    projectAr: "منصة التعلم المدمجة وبوابة أولياء الأمور",
    rating: 5,
    highlightEn: "Guardian engagement and attendance tracking are effortless.",
    highlightBn: "অভিভাবকদের সাথে সংযোগ ও শিক্ষার্থীদের উপস্থিতি ট্র্যাকিং সহজ হয়েছে।",
    highlightAr: "تواصل استثنائي مع أولياء الأمور ومتابعة يومية دقيقة لحضور الطلاب.",
    contentEn:
      "The automated SMS system alerts parents immediately when their child arrives at campus or is marked absent. Homework updates and exam notices reach guardians in real-time, drastically reducing office inquiry calls.",
    contentBn:
      "শিক্ষার্থী প্রতিষ্ঠানে উপস্থিত হলে বা অনুপস্থিত থাকলে অভিভাবকের ফোনে সাথে সাথে স্বয়ংক্রিয় SMS চলে যায়। হোমওয়ার্ক ও পরীক্ষার নোটিশ রিয়েল-টাইমে পৌঁছানোর ফলে অফিসে অভিভাবকদের ফোন কলের চাপ অনেকটাই কমেছে।",
    contentAr:
      "يقوم النظام التلقائي بإرسال رسائل SMS فورية لأولياء الأمور بمجرد وصول الطالب أو تسجيل غيابه. كما تصل الواجبات المدرسية ومواعيد الاختبارات في الوقت الفعلي، مما وفر الكثير من الاستفسارات المتكررة.",
    avatarInitial: "FA",
    accent: "from-[#38bdf8] to-[#0066FF]",
  },
];

const TRUST_BRANDS = [
  "AIM EDUCATIONAL ERP",
  "IDEAL MODEL COLLEGE",
  "AL-HIKMAH ACADEMY",
  "MEDIQUEUE EDTECH",
  "GLOBAL LEARNERS",
  "DARUL ULOOM",
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
  const role =
    language === "ar"
      ? current.roleAr
      : language === "bn"
      ? current.roleBn
      : current.roleEn;
  const location =
    language === "ar"
      ? current.locationAr
      : language === "bn"
      ? current.locationBn
      : current.locationEn;
  const project =
    language === "ar"
      ? current.projectAr
      : language === "bn"
      ? current.projectBn
      : current.projectEn;
  const highlight =
    language === "ar"
      ? current.highlightAr
      : language === "bn"
      ? current.highlightBn
      : current.highlightEn;
  const content =
    language === "ar"
      ? current.contentAr
      : language === "bn"
      ? current.contentBn
      : current.contentEn;

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-32 bg-gradient-to-b from-[#070B14] via-[#0B162C]/60 to-[#070B14] overflow-hidden"
    >
      {/* Background Aurora Glows, Blueprint Grid & Starfield */}
      <StarfieldBackground glowPosition="left" />

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
          <div className="relative rounded-3xl bg-[#111C33]/80 border border-white/[0.08] p-8 sm:p-12 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Row: Stars + Project Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
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
                    <span className="text-slate-300 font-medium">{role}</span>{" "}
                    • {current.company} ({location})
                  </div>
                </div>
              </div>

              {/* Slider Arrows & Indicators */}
              <div className="flex items-center gap-3" dir="ltr">
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
