"use client";

import Link from "next/link";
import {
  ArrowUp,
  Sparkles,
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
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { name: "GitHub", icon: GithubIcon, href: "https://github.com" },
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
    language === "bn"
      ? [
          { name: "কাস্টম ওয়েব ডেভেলপমেন্ট", href: "#services" },
          { name: "ফুল-স্ট্যাক SaaS অ্যাপ্লিকেশন", href: "#services" },
          { name: "ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন", href: "#services" },
          { name: "হেডলেস ই-কমার্স", href: "#services" },
          { name: "ক্লাউড আর্কিটেকচার ও ডেভঅপ্স", href: "#services" },
          { name: "২৪/৭ আইটি মেইনটেন্যান্স ও সাপোর্ট", href: "#services" },
        ]
      : [
          { name: "Custom Web Development", href: "#services" },
          { name: "Full-Stack SaaS Applications", href: "#services" },
          { name: "UI/UX & Product Design", href: "#services" },
          { name: "Headless E-Commerce", href: "#services" },
          { name: "Cloud Architecture & DevOps", href: "#services" },
          { name: "24/7 IT Maintenance & Support", href: "#services" },
        ];

  const companyLinks =
    language === "bn"
      ? [
          { name: "এমটিএম টেক সম্পর্কে", href: "#about" },
          { name: "গ্লোবাল ডেলিভারি নেটওয়ার্ক", href: "#about" },
          { name: "বাছাইকৃত পোর্টফোলিও", href: "#portfolio" },
          { name: "ক্লায়েন্ট রিভিউসমূহ", href: "#testimonials" },
          { name: "প্রাইসিং ও প্যাকেজসমূহ", href: "#pricing" },
          { name: "যোগাযোগ ও আলোচনা", href: "#contact" },
        ]
      : [
          { name: "About MTM Tech", href: "#about" },
          { name: "Global Delivery Network", href: "#about" },
          { name: "Featured Portfolio", href: "#portfolio" },
          { name: "Client Testimonials", href: "#testimonials" },
          { name: "Engagement Models & Pricing", href: "#pricing" },
          { name: "Contact & Discovery", href: "#contact" },
        ];

  const standardsLinks =
    language === "bn"
      ? [
          { name: "Next.js আর্কিটেকচার গাইড", href: "#home" },
          { name: "এন্টারপ্রাইজ SOC2 ও সিকিউরিটি", href: "#about" },
          { name: "কোর ওয়েব ভাইটালস অডিট", href: "#services" },
          { name: "কোড মালিকানা ও NDA নীতিমালা", href: "#pricing" },
          { name: "ক্লায়েন্ট পোর্টাল (লগইন)", href: "#contact" },
        ]
      : [
          { name: "Next.js Architecture Guide", href: "#home" },
          { name: "Enterprise SOC2 & Security", href: "#about" },
          { name: "Core Web Vitals Audit", href: "#services" },
          { name: "Code Ownership & NDA Terms", href: "#pricing" },
          { name: "Client Portal (SSO Login)", href: "#contact" },
        ];

  return (
    <footer className="relative bg-[#080B12] border-t border-white/[0.08] text-slate-400 overflow-hidden">
      {/* Ambient Lighting at Base */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-b from-[#00E5FF]/10 via-[#0066FF]/5 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        
        {/* Top Newsletter & Architecture Subscription Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00E5FF] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{dict.footer.newsletterBadge}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {dict.footer.newsletterTitle}
            </h3>
            <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
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
              className="w-full sm:w-80 px-4 py-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group focus:outline-none shrink-0"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] rounded-full filter blur-[4px] opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-bold text-sm tracking-wide transition-all group-hover:brightness-110 active:scale-95 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
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
              </span>
            </button>
          </form>
        </div>

        {/* 4-Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Column (Span 2 on Large) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              {/* Brand Logo & Name */}
              <Link href="#home" className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#0066FF] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full bg-[#0B0E17] rounded-[10px] flex items-center justify-center">
                    <span className="font-extrabold text-base tracking-wider bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent">
                      M
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-bold tracking-tight text-white">
                      MTM
                    </span>
                    <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent">
                      TECH
                    </span>
                  </div>
                  <span className="text-[9px] tracking-[0.18em] uppercase font-semibold text-slate-400">
                    {dict.footer.tagline}
                  </span>
                </div>
              </Link>

              <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">
                {dict.footer.elevatorPitch}
              </p>

              {/* Live Operational Status */}
              <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono">{dict.footer.operationalStatus}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00E5FF]/40 text-slate-400 hover:text-[#00E5FF] transition-all"
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
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              {dict.footer.col1Title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#00E5FF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              {dict.footer.col2Title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#00E5FF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Resources & Trust */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              {dict.footer.col3Title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {standardsLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#00E5FF] transition-colors"
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
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-slate-400">
              {dict.footer.builtWith}
            </span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00E5FF]/40 text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>{dict.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00E5FF]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
