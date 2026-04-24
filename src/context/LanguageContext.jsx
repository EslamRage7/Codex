import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const LANGUAGE_KEY = "codex-language";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
  return savedLanguage === "ar" ? "ar" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language);

    const active = translations[language];
    document.documentElement.lang = active.meta.code;
    document.documentElement.dir = active.meta.direction;
  }, [language]);

  const value = useMemo(() => {
    const toggleLanguage = () => {
      setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    };

    return {
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
      isArabic: language === "ar",
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

