"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, dict } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Track scroll position to trigger glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#0B0E17]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3.5"
            : "bg-transparent border-b border-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <Link
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
              onClick={() => setActiveLink("#home")}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#0066FF] p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                <div className="w-full h-full bg-[#0B0E17] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-extrabold text-base tracking-wider bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent">
                    M
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
                    MTM
                  </span>
                  <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent">
                    TECH
                  </span>
                </div>
                <span className="text-[9px] tracking-[0.18em] uppercase font-semibold text-slate-400 group-hover:text-slate-300 transition-colors hidden sm:block">
                  {dict.navbar.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
              {dict.navbar.links.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="desktop-active-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/15 to-[#0066FF]/20 border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Group: Language Switcher + Desktop CTA */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              
              {/* Segmented Language Switcher [ EN | বাংলা ] */}
              <div className="inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md">
                <Globe className="w-3.5 h-3.5 text-[#00E5FF] ml-2 mr-1" />
                
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`relative px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                    language === "en"
                      ? "text-[#0B0E17]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Switch to English"
                >
                  {language === "en" && (
                    <motion.div
                      layoutId="lang-pill-desktop"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#38bdf8] shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">EN</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("bn")}
                  className={`relative px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                    language === "bn"
                      ? "text-[#0B0E17]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Switch to Bangla"
                >
                  {language === "bn" && (
                    <motion.div
                      layoutId="lang-pill-desktop"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#38bdf8] shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">বাংলা</span>
                </button>
              </div>

              {/* Desktop CTA Button */}
              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group focus:outline-none"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] rounded-full filter blur-[6px] opacity-70 group-hover:opacity-100 group-hover:blur-[10px] transition-all duration-300" />
                <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-bold text-sm tracking-wide transition-all duration-300 group-hover:brightness-110 group-active:scale-95 shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.8)]">
                  <span>{dict.navbar.getStarted}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu & Language Toggle Row */}
            <div className="flex md:hidden items-center gap-2">
              {/* Quick Mobile Language Toggle Button */}
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-xs font-bold text-[#00E5FF] flex items-center gap-1.5"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === "en" ? "বাংলা" : "EN"}</span>
              </button>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? dict.navbar.menuClose : dict.navbar.menuOpen}
                aria-expanded={mobileMenuOpen}
                className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.1] focus:outline-none transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#00E5FF]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden bg-[#0B0E17]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00E5FF]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-2">
                
                {/* Mobile Language Selector inside Drawer */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.08]">
                  <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Language / ভাষা</span>
                  </span>

                  <div className="inline-flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                        language === "en"
                          ? "bg-[#00E5FF] text-[#0B0E17]"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("bn")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                        language === "bn"
                          ? "bg-[#00E5FF] text-[#0B0E17]"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      বাংলা
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                {dict.navbar.links.map((link, idx) => {
                  const isActive = activeLink === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-[#00E5FF]/15 to-[#0066FF]/15 text-[#00E5FF] border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                            : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Tagline */}
                <div className="mt-2 pt-3 border-t border-white/[0.08] flex items-center justify-between px-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>{dict.navbar.tagline}</span>
                  </span>
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-[#0B0E17] font-bold text-base shadow-[0_0_25px_rgba(0,229,255,0.4)] active:scale-98 transition-transform"
                  >
                    <span>{dict.navbar.getStarted}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
