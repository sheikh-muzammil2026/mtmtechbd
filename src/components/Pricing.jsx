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

const BASE_TIERS = [
  {
    nameEn: "Growth Web Platform",
    nameBn: "গ্রোথ ওয়েব প্ল্যাটফর্ম",
    taglineEn: "Ideal for startups & businesses seeking a high-converting modern web presence.",
    taglineBn: "স্টার্টআপ ও ব্যবসায়ের জন্য নিখুঁত, দ্রুত ও আধুনিক অনলাইন পরিচিতি।",
    popular: false,
    projectPrice: "$2,499",
    retainerPrice: "$1,899",
    periodEn: "single delivery",
    periodBn: "এককালীন প্রজেক্ট",
    retainerPeriodEn: "/ month",
    retainerPeriodBn: "/ প্রতি মাসে",
    featuresEn: [
      "Custom Next.js 16 + Tailwind CSS architecture",
      "99+ Google Lighthouse speed & Core Web Vitals",
      "Headless CMS integration (Sanity / Strapi)",
      "Technical SEO & OpenGraph optimization",
      "100% responsive cross-device engineering",
      "2 weeks post-launch dedicated warranty",
    ],
    featuresBn: [
      "কাস্টম Next.js 16 ও Tailwind CSS আর্কিটেকচার",
      "৯৯+ গুগল লাইটহাউস স্পিড ও কোর ওয়েব ভাইটালস",
      "হেডলেস CMS ইন্টিগ্রেশন (Sanity / Strapi)",
      "টেকনিক্যাল এসইও ও ওপেনগ্রাফ অপ্টিমাইজেশন",
      "১০০% রেসপন্সিভ ক্রস-ডিভাইস ইঞ্জিনিয়ারিং",
      "লঞ্চের পর ২ সপ্তাহের ডেডিকেটেড টেকনিক্যাল ওয়ারেন্টি",
    ],
    ctaEn: "Launch Growth Site",
    ctaBn: "গ্রোথ সাইট শুরু করুন",
    href: "#contact",
  },
  {
    nameEn: "Scale-Up Full-Stack SaaS",
    nameBn: "স্কেল-আপ ফুল-স্ট্যাক SaaS",
    taglineEn: "Engineered for high-growth tech companies and scalable digital products.",
    taglineBn: "উচ্চ প্রবৃদ্ধিশীল টেক কোম্পানি ও স্কেলেবল ডিজিটাল প্রোডাক্টের জন্য নির্মিত।",
    popular: true,
    projectPrice: "$5,899",
    retainerPrice: "$3,999",
    periodEn: "turnkey project",
    periodBn: "টার্নকি প্রজেক্ট",
    retainerPeriodEn: "/ month",
    retainerPeriodBn: "/ প্রতি মাসে",
    featuresEn: [
      "Everything in Growth Web Platform",
      "Full-stack React/Next.js App Router architecture",
      "Scalable REST / GraphQL APIs & Database schema",
      "Secure Auth (OAuth, JWT, RBAC multi-tenant)",
      "Stripe / Global payment gateway integration",
      "Automated CI/CD deployment pipelines",
      "30 days dedicated technical warranty & QA",
    ],
    featuresBn: [
      "গ্রোথ ওয়েব প্ল্যাটফর্মের সকল ফিচার অন্তর্ভুক্ত",
      "ফুল-স্ট্যাক React/Next.js অ্যাপ রাউটার আর্কিটেকচার",
      "স্কেলেবল REST / GraphQL APIs ও ডেটাবেস স্কিমা",
      "নিরাপদ অথেনটিকেশন (OAuth, JWT, RBAC মাল্টি-টেন্যান্ট)",
      "Stripe ও আন্তর্জাতিক পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
      "অটোমেটেড CI/CD ক্লাউড ডিপ্লয়মেন্ট পাইপলাইন",
      "৩০ দিনের ডেডিকেটেড টেকনিক্যাল ওয়ারেন্টি ও QA",
    ],
    ctaEn: "Build Scale-Up Product",
    ctaBn: "স্কেল-আপ প্রোডাক্ট তৈরি করুন",
    href: "#contact",
  },
  {
    nameEn: "Enterprise Dedicated Pod",
    nameBn: "এন্টারপ্রাইজ ডেডিকেটেড পড",
    taglineEn: "Dedicated senior engineering team tailored to enterprise-grade compliance & scale.",
    taglineBn: "এন্টারপ্রাইজ নিরাপত্তা ও স্কেলের জন্য ডেডিকেটেড সিনিয়র ইঞ্জিনিয়ারদের দল।",
    popular: false,
    projectPrice: "Custom",
    retainerPrice: "Custom",
    periodEn: "scoped per roadmap",
    periodBn: "রোডম্যাপ অনুযায়ী নির্ধারিত",
    retainerPeriodEn: "flexible retainers",
    retainerPeriodBn: "ফ্লেক্সিবল রিটেইনার",
    featuresEn: [
      "Dedicated senior engineers & product architects",
      "Microservices & high-concurrency cloud design",
      "Bank-grade SOC2 & HIPAA compliance engineering",
      "99.99% Uptime SLA with 24/7 incident response",
      "Full IP & source code ownership transfer",
      "Weekly executive roadmap & sprint reviews",
      "Unlimited technical consultation & advisory",
    ],
    featuresBn: [
      "ডেডিকেটেড সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার ও আর্কিটেক্ট",
      "মাইক্রোসার্ভিসেস ও উচ্চ কনকারেন্সি ক্লাউড ডিজাইন",
      "ব্যাংক-গ্রেড SOC2 ও HIPAA কমপ্লায়েন্স ইঞ্জিনিয়ারিং",
      "৯৯.৯৯% আপটাইম SLA সহ ২৪/৭ ইন্সট্যান্ট ইনসিডেন্ট রেসপন্স",
      "সম্পূর্ণ আইপি ও সোর্স কোডের সরাসরি হস্তান্তর",
      "সাপ্তাহিক এক্সিকিউটিভ রোডম্যাপ ও স্প্রিন্ট রিভিউ",
      "সীমাহীন টেকনিক্যাল কনসালটেশন ও অ্যাডভাইজরি সাপোর্ট",
    ],
    ctaEn: "Contact Enterprise Team",
    ctaBn: "এন্টারপ্রাইজ টিমে যোগাযোগ করুন",
    href: "#contact",
  },
];

const GUARANTEE_ICONS = [Lock, ShieldCheck, Zap];

export default function Pricing() {
  const { language, dict } = useLanguage();
  const [billingModel, setBillingModel] = useState("project");

  return (
    <section
      id="pricing"
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
              {dict.pricing.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {dict.pricing.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#0066FF] bg-clip-text text-transparent">
              {dict.pricing.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {dict.pricing.description}
          </motion.p>

          {/* Billing Model Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 inline-flex items-center p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setBillingModel("project")}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                billingModel === "project"
                  ? "text-[#0B0E17]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {billingModel === "project" && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{dict.pricing.toggleProject}</span>
            </button>

            <button
              type="button"
              onClick={() => setBillingModel("retainer")}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                billingModel === "retainer"
                  ? "text-[#0B0E17]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {billingModel === "retainer" && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{dict.pricing.toggleRetainer}</span>
            </button>
          </motion.div>
        </div>

        {/* 3-Tier Pricing Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {BASE_TIERS.map((tier, idx) => {
            const isBn = language === "bn";
            const name = isBn ? tier.nameBn : tier.nameEn;
            const tagline = isBn ? tier.taglineBn : tier.taglineEn;
            const price =
              billingModel === "project"
                ? tier.projectPrice === "Custom" && isBn
                  ? dict.pricing.customPrice
                  : tier.projectPrice
                : tier.retainerPrice === "Custom" && isBn
                ? dict.pricing.customPrice
                : tier.retainerPrice;
            const period =
              billingModel === "project"
                ? isBn
                  ? tier.periodBn
                  : tier.periodEn
                : isBn
                ? tier.retainerPeriodBn
                : tier.retainerPeriodEn;
            const features = isBn ? tier.featuresBn : tier.featuresEn;
            const cta = isBn ? tier.ctaBn : tier.ctaEn;

            return (
              <motion.div
                key={tier.nameEn}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between backdrop-blur-2xl transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#0B0E17]/95 border-2 border-[#00E5FF] shadow-[0_0_40px_rgba(0,229,255,0.25)] lg:-translate-y-2"
                    : "bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.2] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                }`}
              >
                {/* Popular Ribbon */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] text-xs font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.5)] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{dict.pricing.mostPopular}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[40px]">
                    {tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-mono uppercase text-slate-400">
                        {period}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      {dict.pricing.capabilitiesTitle}
                    </div>
                    {features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <Link
                    href={tier.href}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:brightness-110 active:scale-95"
                        : "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-[#00E5FF]/40 active:scale-95"
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
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.pricing.guarantees.map((item, idx) => {
            const IconComp = GUARANTEE_ICONS[idx % GUARANTEE_ICONS.length];
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
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
