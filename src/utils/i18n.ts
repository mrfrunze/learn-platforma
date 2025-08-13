export type SupportedLang = "en" | "ru" | "ua" | "sv";

/**
 * Detect preferred language from the browser.
 * - Considers only: ru, ua, sv, en (maps browser 'uk' → 'ua')
 * - Falls back to "en" if nothing matches or on server (no navigator)
 */
export function detectPreferredLanguage(): SupportedLang {
  if (typeof window === "undefined") return "en";

  const candidates: string[] = [];
  const { languages, language } = navigator as Navigator & {
    languages?: readonly string[];
  };

  if (Array.isArray(languages)) candidates.push(...languages);
  if (language) candidates.push(language);

  const normalized = candidates
    .map((l) => l.toLowerCase())
    .map((l) => (l.includes("-") ? l.split("-")[0] : l))
    // Map common browser language code 'uk' (Ukrainian) to our internal 'ua'
    .map((l) => (l === "uk" ? "ua" : l));

  const supported: SupportedLang[] = ["ru", "ua", "sv", "en"]; 
  for (const lang of normalized) {
    if (supported.includes(lang as SupportedLang)) {
      return lang as SupportedLang;
    }
  }
  return "en";
}

// Minimal in-file i18n resources for navigation and common CTA text
const resources: Record<SupportedLang, {
  nav: { courses: string; blog: string; about: string; contacts: string };
  cta: { start: string };
}> = {
  en: {
    nav: { courses: "Courses", blog: "Blog", about: "About us", contacts: "Contacts" },
    cta: { start: "Start Learning" },
  },
  ru: {
    nav: { courses: "Курсы", blog: "Блог", about: "О нас", contacts: "Контакты" },
    cta: { start: "Начать обучение" },
  },
  ua: {
    nav: { courses: "Курси", blog: "Блог", about: "Про нас", contacts: "Контакти" },
    cta: { start: "Почати навчання" },
  },
  sv: {
    nav: { courses: "Kurser", blog: "Blogg", about: "Om oss", contacts: "Kontakt" },
    cta: { start: "Börja lära" },
  },
};

/**
 * Fetch localized strings for a given language. Safe fallback to English.
 */
export function getTranslations(lang: SupportedLang) {
  return resources[lang] ?? resources.en;
}


