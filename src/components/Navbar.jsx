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

  // Track scroll position to trigger glassmorphism header styling
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

  // Close drawer on Escape key or when window resizes to desktop breakpoint
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.05)] py-2.5 sm:py-3"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="site-container">
          <nav className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Name */}
            <Link
              href="#home"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
              onClick={() => {
                setActiveLink("#home");
                setMobileMenuOpen(false);
              }}
            >
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1.5px] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] shrink-0">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <span className="font-extrabold text-base tracking-wider bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    M
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5" dir="ltr">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                    MTM
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    TECH
                  </span>
                </div>
                {/* Tagline is visible on xl+ to preserve center navbar breathing room */}
                <span className="text-[9px] tracking-[0.16em] uppercase font-semibold text-slate-500 group-hover:text-slate-700 transition-colors hidden xl:block truncate max-w-[200px]">
                  {dict.navbar.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Responsive padding & text sizing for 1024px+ viewports) */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 px-2 py-1 xl:px-3 xl:py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 backdrop-blur-md shadow-xs shrink-0">
              {dict.navbar.links.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`relative px-2.5 py-1 xl:px-3.5 xl:py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "text-sky-700 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="desktop-active-pill"
                        className="absolute inset-0 rounded-full bg-white border border-slate-200/80 shadow-xs"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Group: Language Switcher, Responsive CTA & Mobile/Tablet Controls */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-2.5 xl:gap-3.5 shrink-0">
              
              {/* Segmented Desktop/Tablet Language Switcher (Shown on md: 768px+) */}
              <div className="hidden md:inline-flex items-center p-0.5 xl:p-1 rounded-full bg-slate-100 border border-slate-200 shadow-xs">
                <Globe className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-sky-600 ml-1.5 mr-0.5 xl:ml-2 xl:mr-1 shrink-0" />
                
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`relative px-2 py-0.5 xl:px-2.5 xl:py-1 text-[11px] xl:text-xs font-bold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                    language === "en"
                      ? "text-sky-700 font-bold"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label="Switch to English"
                >
                  {language === "en" && (
                    <motion.div
                      layoutId="lang-pill-desktop"
                      className="absolute inset-0 rounded-full bg-white border border-slate-200/80 shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">EN</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("bn")}
                  className={`relative px-2 py-0.5 xl:px-2.5 xl:py-1 text-[11px] xl:text-xs font-bold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                    language === "bn"
                      ? "text-sky-700 font-bold"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label="Switch to Bangla"
                >
                  {language === "bn" && (
                    <motion.div
                      layoutId="lang-pill-desktop"
                      className="absolute inset-0 rounded-full bg-white border border-slate-200/80 shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">বাংলা</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("ar")}
                  className={`relative px-2 py-0.5 xl:px-2.5 xl:py-1 text-[11px] xl:text-xs font-bold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                    language === "ar"
                      ? "text-sky-700 font-bold"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label="Switch to Arabic"
                >
                  {language === "ar" && (
                    <motion.div
                      layoutId="lang-pill-desktop"
                      className="absolute inset-0 rounded-full bg-white border border-slate-200/80 shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">عربي</span>
                </button>
              </div>

              {/* Quick Mobile Language Toggle Button (< md: 768px) */}
              <button
                type="button"
                onClick={() => {
                  if (language === "en") setLanguage("bn");
                  else if (language === "bn") setLanguage("ar");
                  else setLanguage("en");
                }}
                className="md:hidden px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-sky-700 flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs min-h-[38px]"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>{language === "en" ? "বাংলা" : language === "bn" ? "عربي" : "EN"}</span>
              </button>

              {/* Responsive CTA Button (Compact "Book Demo" on md/lg, full "Book a Free Demo" on xl+) */}
              <Link
                href="#contact"
                className="hidden sm:inline-flex theme-btn-primary py-2 px-3.5 xl:py-2.5 xl:px-5 text-xs xl:text-sm rounded-full whitespace-nowrap shadow-xs cursor-pointer group"
              >
                <span className="hidden xl:inline">{dict.navbar.getStarted}</span>
                <span className="inline xl:hidden">{dict.navbar.getStartedShort || "Book Demo"}</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Mobile & Tablet Hamburger Toggle Button (Visible for all viewports < 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? dict.navbar.menuClose : dict.navbar.menuOpen}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 hover:scale-105 active:scale-95 focus:outline-none transition-all duration-200 cursor-pointer shadow-xs min-w-[38px] min-h-[38px] flex items-center justify-center"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-sky-600 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-300" />
                )}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile & Tablet Navigation Drawer Overlay */}
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
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden cursor-pointer"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-50 lg:hidden bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-5 sm:p-6 max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="relative z-10 flex flex-col gap-2">
                
                {/* Mobile Language Selector inside Drawer */}
                <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-slate-200">
                  <span className="text-xs font-mono uppercase text-slate-500 font-semibold flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-sky-600" />
                    <span>Language / ভাষা</span>
                  </span>

                  <div className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                        language === "en"
                          ? "bg-white text-sky-700 shadow-xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("bn")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                        language === "bn"
                          ? "bg-white text-sky-700 shadow-xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      বাংলা
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("ar")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                        language === "ar"
                          ? "bg-white text-sky-700 shadow-xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      عربي
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
                      transition={{ delay: idx * 0.04 + 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-sky-50 text-sky-700 border border-sky-200 shadow-xs"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:translate-x-1"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-sky-600 shadow-xs" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Tagline */}
                <div className="mt-2 pt-3 border-t border-slate-200 flex items-center justify-between px-2 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>{dict.navbar.tagline}</span>
                  </span>
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-3.5"
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full theme-btn-primary py-3.5 rounded-xl text-sm font-bold shadow-md shadow-sky-500/20 flex items-center justify-center gap-2"
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
