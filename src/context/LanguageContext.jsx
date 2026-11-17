"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  // Read saved preference from localStorage on mount
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const savedLang = localStorage.getItem("mtm_lang");
        if (savedLang === "en" || savedLang === "bn" || savedLang === "ar") {
          setLanguageState(savedLang);
          document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
          document.documentElement.lang = savedLang;
        }
      } catch {
        // Ignore if localStorage unavailable (e.g., SSR or private window)
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const setLanguage = (lang) => {
    if (lang === "en" || lang === "bn" || lang === "ar") {
      setLanguageState(lang);
      try {
        localStorage.setItem("mtm_lang", lang);
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
      } catch {
        // Ignore
      }
    }
  };

  const toggleLanguage = () => {
    if (language === "en") setLanguage("bn");
    else if (language === "bn") setLanguage("ar");
    else setLanguage("en");
  };

  // Helper function to resolve dot-notation path like t("hero.headline")
  const t = (path, fallback = "") => {
    const keys = path.split(".");
    let current = translations[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return fallback || path;
      }
    }
    return current;
  };

  // Current active dictionary object for easy direct access
  const dict = translations[language] || translations.en;
  const isRTL = language === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        dict,
        isRTL,
        dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
