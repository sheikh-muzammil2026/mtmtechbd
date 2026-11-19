"use client";

import Link from "next/link";
import {
  ArrowUp,
  Mail,
  CheckCircle2,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function TwitterXIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIALS = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/sheikh-muzammil-dev",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/sheikh-muzammil2026",
  },
  { name: "Twitter / X", icon: TwitterXIcon, href: "https://x.com" },
  { name: "Email", icon: Mail, href: "mailto:contact@mtmtechbd.com" },
];

export default function Footer() {
  const { language, dict } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  const servicesLinks =
    language === "ar"
      ? [
          { name: "نظام الحرم المدرسي وسجلات الطلاب", href: "#services" },
          { name: "محاسبة المؤسسة المزدوجة وقسائم الرسوم", href: "#services" },
          { name: "أتمتة النتائج وجداول الدرجات", href: "#services" },
          { name: "سجل الحضور ورسائل SMS لأولياء الأمور", href: "#services" },
          { name: "إدارة السكن الداخلي والإطعام", href: "#services" },
          { name: "الموقع المؤسسي ومنصة التعلم الرقمي", href: "#services" },
        ]
      : language === "bn"
      ? [
          { name: "ক্যাম্পাস ইআরপি ও ছাত্র ডাটাবেস", href: "#services" },
          { name: "ডাবল-এন্ট্রি প্রাতিষ্ঠানিক হিসাব", href: "#services" },
          { name: "স্বয়ংক্রিয় রেজাল্ট ও মার্কশিট", href: "#services" },
          { name: "বায়োমেট্রিক হাজিরা ও SMS অ্যালার্ট", href: "#services" },
          { name: "বোর্ডিং, হোস্টেল ও মেস হিসাব", href: "#services" },
          { name: "প্রতিষ্ঠানের ওয়েবসাইট ও অনলাইন এলএমএস", href: "#services" },
        ]
      : [
          { name: "Campus ERP & Student Records", href: "#services" },
          { name: "Double-Entry Tuition Accounting", href: "#services" },
          { name: "Automated Result & Marksheets", href: "#services" },
          { name: "Attendance Sync & Guardian SMS", href: "#services" },
          { name: "Boarding & Hostel Mess Manager", href: "#services" },
          { name: "Official Web Portal & LMS", href: "#services" },
        ];

  const companyLinks =
    language === "ar"
      ? [
          { name: "عن MTM Tech BD", href: "#about" },
          { name: "الفروع والمؤسسات النشطة", href: "#about" },
          { name: "المشاريع المنفذة والناجحة", href: "#portfolio" },
          { name: "آراء القيادات التعليمية", href: "#testimonials" },
          { name: "باقات وأسعار الأنظمة", href: "#pricing" },
          { name: "طلب عرض توضيحي مباشر", href: "#contact" },
        ]
      : language === "bn"
      ? [
          { name: "এমটিএম টেক বিডি সম্পর্কে", href: "#about" },
          { name: "আঞ্চলিক ক্যাম্পাস ডিপ্লয়মেন্ট", href: "#about" },
          { name: "বাস্তবায়িত সফল প্রজেক্টসমূহ", href: "#portfolio" },
          { name: "সম্মানিত অধ্যক্ষদের মূল্যায়ন", href: "#testimonials" },
          { name: "প্যাকেজ ও সাশ্রয়ী মূল্যতালিকা", href: "#pricing" },
          { name: "সরাসরি ডেমো প্রদর্শনের অনুরোধ", href: "#contact" },
        ]
      : [
          { name: "About MTM Tech BD", href: "#about" },
          { name: "Regional Campus Deployments", href: "#about" },
          { name: "Featured Production Projects", href: "#portfolio" },
          { name: "Institutional Reviews", href: "#testimonials" },
          { name: "Campus ERP Pricing Plans", href: "#pricing" },
          { name: "Request Live Institution Demo", href: "#contact" },
        ];

  const standardsLinks =
    language === "ar"
      ? [
          { name: "بنية Next.js السحابية للمؤسسات", href: "#home" },
          { name: "حماية البيانات وسرية السجلات", href: "#about" },
          { name: "النسخ الاحتياطي السحابي اليومي", href: "#services" },
          { name: "إدارة الفروع والأفواج المتعددة", href: "#pricing" },
          { name: "بوابة الإدارة ومديري الفروع", href: "#contact" },
        ]
      : language === "bn"
      ? [
          { name: "Next.js ক্যাম্পাস আর্কিটেকচার", href: "#home" },
          { name: "তথ্য সুরক্ষা ও প্রাতিষ্ঠানিক চুক্তি", href: "#about" },
          { name: "দৈনিক ক্লাউড ব্যাকআপ ও রিকভারি", href: "#services" },
          { name: "মাল্টি-শিফট ও ব্রাঞ্চ ব্যবস্থাপনা", href: "#pricing" },
          { name: "প্রিন্সিপাল ও অ্যাডমিন ড্যাশবোর্ড", href: "#contact" },
        ]
      : [
          { name: "Next.js Campus Architecture", href: "#home" },
          { name: "Data Privacy & Institutional NDA", href: "#about" },
          { name: "Automated Cloud Backups & Recovery", href: "#services" },
          { name: "Multi-Shift & Branch Hierarchy", href: "#pricing" },
          { name: "Principal & Admin Portal", href: "#contact" },
        ];

  return (
    <footer className="relative bg-[#F1F5F9] border-t border-slate-200 text-slate-600 overflow-hidden">
      <div className="relative z-10 site-container pt-16 sm:pt-20 pb-12">
        {/* Top Newsletter & Architecture Subscription Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="site-badge mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-600" />
              <span>{dict.footer.newsletterBadge}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {dict.footer.newsletterTitle}
            </h3>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
              {dict.footer.newsletterDesc}
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3 shrink-0"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder={dict.footer.newsletterPlaceholder}
              className="w-full sm:w-80 px-4 py-3 rounded-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-600 transition-colors"
              dir="ltr"
            />
            <button
              type="submit"
              className="theme-btn-primary w-full sm:w-auto px-6 py-3 rounded-full shadow-md shadow-sky-500/20"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{dict.footer.subscribedBtn}</span>
                </>
              ) : (
                <>
                  <span>{dict.footer.subscribeBtn}</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 4-Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-slate-200">
          {/* Brand Column (Span 2 on Large) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              {/* Brand Logo & Name */}
              <Link href="#home" className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-xs">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <span className="font-extrabold text-base tracking-wider bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                      M
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5" dir="ltr">
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                      MTM
                    </span>
                    <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                      TECH
                    </span>
                  </div>
                  <span className="text-[9px] tracking-[0.18em] uppercase font-semibold text-slate-500">
                    {dict.footer.tagline}
                  </span>
                </div>
              </Link>

              <p className="mt-5 text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
                {dict.footer.elevatorPitch}
              </p>

              {/* Live Operational Status */}
              <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="font-mono">
                  {dict.footer.operationalStatus}
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 flex items-center gap-3" dir="ltr">
              {SOCIALS.map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-600 hover:text-sky-700 transition-all shadow-xs"
                    aria-label={soc.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              {dict.footer.col1Title}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              {dict.footer.col2Title}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Resources & Trust */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              {dict.footer.col3Title}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {standardsLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} {dict.footer.copyright}
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-600">{dict.footer.builtWith}</span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-sky-700 transition-all cursor-pointer shadow-xs"
            aria-label="Scroll to top"
          >
            <span>{dict.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
