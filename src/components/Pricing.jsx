"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StarfieldBackground from "@/components/shared/StarfieldBackground";

const BASE_TIERS = [
  {
    nameEn: "Starter Portal & Results",
    nameBn: "স্টার্টার পোর্টাল ও রেজাল্ট সিস্টেম",
    nameAr: "بوابة البداية ونظام النتائج",
    taglineEn:
      "Ideal for schools, madrasahs, and coaching centers seeking a fast, professional online presence and digital result publishing.",
    taglineBn:
      "যেসব স্কুল, মাদ্রাসা ও কোচিং সেন্টারের জন্য একটি আধুনিক ওয়েবসাইট ও অনলাইনে রেজাল্ট প্রকাশ প্রয়োজন।",
    taglineAr:
      "مثالية للمدارس والمعاهد ومراكز التعليم التي تحتاج موقعاً رسمياً ونظاماً رقمياً لنشر النتائج.",
    popular: false,
    projectPrice: "৳11,499",
    retainerPrice: "৳990",
    periodEn: "single deployment",
    periodBn: "এককালীন সেটআপ",
    periodAr: "إعداد لمرة واحدة",
    retainerPeriodEn: "/ month",
    retainerPeriodBn: "/ প্রতি মাসে",
    retainerPeriodAr: "/ شهرياً",
    featuresEn: [
      "Official institutional website (Bengali & English)",
      "Online examination marksheet & result publishing",
      "Notice board, event calendar & academic routines",
      "Student admission inquiry & printable application form",
      "Mobile-optimized responsive design & high-speed hosting",
      "Staff orientation & 30 days technical support",
    ],
    featuresBn: [
      "প্রতিষ্ঠানের অফিসিয়াল দ্বিভাষিক ওয়েবসাইট (বাংলা ও ইংরেজি)",
      "অনলাইনে পরীক্ষার রেজাল্ট ও মার্কশিট প্রকাশের ব্যবস্থা",
      "ডিজিটাল নোটিশ বোর্ড, ক্লাস রুটিন ও অ্যাকাডেমিক ক্যালেন্ডার",
      "ভর্তি তথ্য, অনলাইন আবেদন ও প্রিন্টযোগ্য ফরম",
      "মোবাইল-বান্ধব রেসপন্সিভ ডিজাইন ও উচ্চগতির ক্লাউড হোস্টিং",
      "স্টাফ ট্রেনিং ও ৩০ দিনের সম্পূর্ণ কারিগরি সহযোগিতা",
    ],
    featuresAr: [
      "موقع رسمي للمؤسسة باللغتين العربية والإنجليزية",
      "نشر درجات الاختبارات واستخراج النتائج إلكترونياً",
      "لوحة إعلانات رقمية، جدول الحصص والتقويم الدراسي",
      "بوابة استفسارات القبول ونماذج التسجيل القابلة للطباعة",
      "تصميم متجاوب وسريع متوافق مع الهواتف الذكية",
      "تدريب الموظفين ودعم فني مخصص لمدة 30 يوماً",
    ],
    ctaEn: "Get Starter Solution",
    ctaBn: "স্টার্টার প্যাকেজ নিন",
    ctaAr: "ابدأ بباقة البداية",
    href: "#contact",
  },
  {
    nameEn: "Standard Campus ERP",
    nameBn: "স্ট্যান্ডার্ড ক্যাম্পাস ইআরপি",
    nameAr: "نظام إدارة الحرم المدرسي القياسي",
    taglineEn:
      "The complete administrative operating system for residential, non-residential, and multi-shift educational institutions.",
    taglineBn:
      "আবাসিক, অনাবাসিক ও ডে-কেয়ার শিক্ষা প্রতিষ্ঠানের সার্বিক হিসাব, হাজিরা ও পরীক্ষার পূর্ণাঙ্গ ইআরপি।",
    taglineAr:
      "النظام الإداري الشامل للمؤسسات التعليمية الداخلية والخارجية بكافة مراحلها.",
    popular: true,
    projectPrice: "৳21,899",
    retainerPrice: "৳1,999",
    periodEn: "complete turnkey",
    periodBn: "টার্নকি সেটআপ",
    periodAr: "تركيب متكامل",
    retainerPeriodEn: "/ month",
    retainerPeriodBn: "/ প্রতি মাসে",
    retainerPeriodAr: "/ شهرياً",
    featuresEn: [
      "Everything in Starter Portal & Results",
      "Double-entry institutional accounts & auto fee vouchers",
      "Student & staff attendance with daily guardian SMS alerts",
      "Automated exam tabulation sheets & QR-coded admit cards",
      "Hostel, boarding & mess management module",
      "Teacher payroll, allowance & staff advance tracking",
      "Biometric & geolocation attendance sync support",
      "Hands-on teacher training & 60 days priority support",
    ],
    featuresBn: [
      "স্টার্টার প্যাকেজের সকল ফিচার অন্তর্ভুক্ত",
      "ডাবল-এন্ট্রি প্রাতিষ্ঠানিক হিসাব ও স্বয়ংক্রিয় ফি ভাউচার",
      "শিক্ষার্থী ও শিক্ষক হাজিরা এবং অভিভাবকদের স্বয়ংক্রিয় SMS",
      "স্বয়ংক্রিয় পরীক্ষার ফলাফল, টেবুলেশন ও QR প্রবেশপত্র",
      "বোর্ডিং, হোস্টেল ও ডাইনিং হিসাব ব্যবস্থাপনা",
      "শিক্ষক-কর্মচারীদের বেতন শিট ও প্রভিডেন্ট ফান্ড ট্র্যাকিং",
      "বায়োমেট্রিক ও জিও-লোকেশন হাজিরা ডিভাইস ইন্টিগ্রেশন",
      "শিক্ষক প্রশিক্ষণ ও ৬০ দিনের অগ্রাধিকারমূলক সাপোর্ট",
    ],
    featuresAr: [
      "يشمل جميع ميزات باقة البداية",
      "محاسبة مؤسسية مزدوجة وإصدار تلقائي لقسائم الرسوم",
      "سجل حضور الطلاب والأساتذة مع إشعارات SMS فورية للأهالي",
      "جداول الدرجات التلقائية وبطاقات دخول الاختبار برموز QR",
      "إدارة السكن الداخلي ونظام الإطعام والمصروفات",
      "مسيرات رواتب المعلمين والموظفين والبدلات",
      "ربط الحضور مع أجهزة البصمة والتتبع الجغرافي",
      "تدريب مكثف للطاقم ودعم فني متميز لمدة 60 يوماً",
    ],
    ctaEn: "Deploy Campus ERP",
    ctaBn: "ক্যাম্পাস ইআরপি চালু করুন",
    ctaAr: "تثبيت نظام الحرم المدرسي",
    href: "#contact",
  },
  {
    nameEn: "Enterprise Multi-Campus & LMS",
    nameBn: "এন্টারপ্রাইজ মাল্টি-ক্যাম্পাস ও এলএমএস",
    nameAr: "إدارة الفروع المتعددة ومنصة التعلم (LMS)",
    taglineEn:
      "Tailored for large madrasah networks, university colleges, and multi-branch educational organizations.",
    taglineBn:
      "বৃহৎ মাদ্রাসা নেটওয়ার্ক, একাধিক শাখা ও অনলাইন একাডেমি সম্বলিত প্রতিষ্ঠানের জন্য কাস্টম সলিউশন।",
    taglineAr:
      "مخصص لشبكات المدارس الكبرى، وفروع المعاهد المتعددة، والأكاديميات التعليمية الرقمية.",
    popular: false,
    projectPrice: "Custom",
    retainerPrice: "Custom",
    periodEn: "custom scoped",
    periodBn: "প্রয়োজন অনুযায়ী নির্ধারিত",
    periodAr: "حسب متطلبات المؤسسة",
    retainerPeriodEn: "dedicated SLA",
    retainerPeriodBn: "ডেডিকেটেড SLA",
    retainerPeriodAr: "اتفاقية مستوى خدمة مخصصة",
    featuresEn: [
      "Centralized multi-campus dashboard with unified billing",
      "Integrated Learning Management System (LMS) & video classes",
      "Custom online payment gateways (bKash, Nagad, Cards, Banks)",
      "Guardian mobile app with attendance & fee payment notifications",
      "Multi-curriculum support (General, Hifz, Qawmi, Alia, British)",
      "Automated daily off-site cloud backups & disaster recovery",
      "Dedicated account manager & 24/7 emergency phone hotline",
    ],
    featuresBn: [
      "সকল ব্রাঞ্চের জন্য কেন্দ্রীয় ড্যাশবোর্ড ও সমন্বিত আর্থিক হিসাব",
      "অনলাইন লার্নিং ম্যানেজমেন্ট (LMS), লাইভ ক্লাস ও লেকচার নোটস",
      "অনলাইন ফি পেমেন্ট গেটওয়ে (বিকাশ, নগদ, কার্ড ও ব্যাংক)",
      "অভিভাবক মোবাইল অ্যাপ (ফি পেমেন্ট ও রিয়েল-টাইম নোটিফিকেশন)",
      "বহুমাত্রিক সিলেবাস সমর্থন (জেনারেল, হিফয, কওমি, আলিয়া)",
      "স্বয়ংক্রিয় দৈনিক অফ-সাইট ক্লাউড ব্যাকআপ ও সর্বোচ্চ নিরাপত্তা",
      "ডেডিকেটেড একাউন্ট ম্যানেজার ও ২৪/৭ জরুরি ফোন সাপোর্ট",
    ],
    featuresAr: [
      "لوحة تحكم مركزية لكافة الفروع مع محاسبة موحدة",
      "منصة تعليمية مدمجة (LMS) للحصص المرئية والمواد الدراسية",
      "بوابات دفع إلكترونية مدمجة (بطاقات، محافظ إلكترونية، تحويل بنكي)",
      "تطبيق ذكي لأولياء الأمور لدفع الرسوم ومتابعة الحضور",
      "دعم المناهج المتعددة (عام، تحفيظ، أكاديمي، معاهد شرعية)",
      "نسخ احتياطي يومي سحابي وتأمين عالي ضد فقدان البيانات",
      "مدير حساب مخصص ودعم هاتفي طارئ على مدار الساعة",
    ],
    ctaEn: "Consult Enterprise Team",
    ctaBn: "এন্টারপ্রাইজ টিমে যোগাযোগ করুন",
    ctaAr: "تواصل مع الفريق المؤسسي",
    href: "#contact",
  },
];

const GUARANTEE_ICONS = [Lock, ShieldCheck, Zap];

export default function Pricing() {
  const { language, dict } = useLanguage();
  const [billingModel, setBillingModel] = useState("project");

  return (
    <section id="pricing" className="site-section relative overflow-hidden">
      {/* Background Aurora Glows, Blueprint Grid & Starfield */}
      <StarfieldBackground glowPosition="both" />

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
            <span>{dict.pricing.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading"
          >
            {dict.pricing.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {dict.pricing.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-subheading"
          >
            {dict.pricing.description}
          </motion.p>

          {/* Billing Model Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-10 inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200/90 shadow-xs"
          >
            <button
              type="button"
              onClick={() => setBillingModel("project")}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                billingModel === "project"
                  ? "text-sky-800"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {billingModel === "project" && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-xs border border-slate-200/90"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {dict.pricing.toggleProject}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setBillingModel("retainer")}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                billingModel === "retainer"
                  ? "text-sky-800"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {billingModel === "retainer" && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-xs border border-slate-200/90"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {dict.pricing.toggleRetainer}
              </span>
            </button>
          </motion.div>
        </div>

        {/* 3-Tier Pricing Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {BASE_TIERS.map((tier, idx) => {
            const name =
              language === "ar"
                ? tier.nameAr
                : language === "bn"
                ? tier.nameBn
                : tier.nameEn;
            const tagline =
              language === "ar"
                ? tier.taglineAr
                : language === "bn"
                ? tier.taglineBn
                : tier.taglineEn;

            const isCustom = tier.projectPrice === "Custom";
            const rawPrice =
              billingModel === "project"
                ? tier.projectPrice
                : tier.retainerPrice;
            const price = isCustom ? dict.pricing.customPrice : rawPrice;

            const period =
              billingModel === "project"
                ? language === "ar"
                  ? tier.periodAr
                  : language === "bn"
                  ? tier.periodBn
                  : tier.periodEn
                : language === "ar"
                ? tier.retainerPeriodAr
                : language === "bn"
                ? tier.retainerPeriodBn
                : tier.retainerPeriodEn;

            const features =
              language === "ar"
                ? tier.featuresAr
                : language === "bn"
                ? tier.featuresBn
                : tier.featuresEn;
            const cta =
              language === "ar"
                ? tier.ctaAr
                : language === "bn"
                ? tier.ctaBn
                : tier.ctaEn;

            const isCenter = tier.popular;
            return (
              <motion.div
                key={tier.nameEn}
                initial={{
                  opacity: 0,
                  y: isCenter ? 40 : 30,
                  scale: isCenter ? 0.98 : 1,
                }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: isCenter ? 0.6 : 0.55,
                  delay: 0.1 + idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-white border-2 border-sky-600 shadow-[0_15px_40px_rgba(2,132,199,0.12)] lg:-translate-y-2"
                    : "theme-card"
                }`}
              >
                {/* Popular Ribbon */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>{dict.pricing.mostPopular}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px] font-normal">
                    {tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-mono uppercase text-slate-500 font-medium">
                        {period}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-mono uppercase text-slate-500 tracking-wider font-semibold">
                      {dict.pricing.capabilitiesTitle}
                    </div>
                    {features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    href={tier.href}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                      tier.popular
                        ? "theme-btn-primary shadow-md shadow-sky-500/20"
                        : "theme-btn-secondary"
                    }`}
                  >
                    <span>{cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.pricing.guarantees.map((item, idx) => {
            const IconComp = GUARANTEE_ICONS[idx % GUARANTEE_ICONS.length];
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
