"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  // Read saved preference from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("mtm_lang");
      if (savedLang === "en" || savedLang === "bn") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore if localStorage unavailable (e.g., SSR or private window)
    }
  }, []);

  const setLanguage = (lang) => {
    if (lang === "en" || lang === "bn") {
      setLanguageState(lang);
      try {
        localStorage.setItem("mtm_lang", lang);
      } catch {
        // Ignore
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
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

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        dict,
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
