"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { detectPreferredLanguage, type SupportedLang } from "@/utils/i18n";

/**
 * App header with primary navigation and a language switcher.
 * The switcher is UI-only and emits the selected value via a callback stub
 * that can be wired into i18n later.
 */
export default function Header() {
  const [lang, setLang] = useState<SupportedLang>("en");

  // Placeholder handler for future i18n wiring
  const handleLanguageChange = (next: string) => {
    setLang(next as SupportedLang);
  };

  // On mount, detect browser language and set initial value
  useEffect(() => {
    const detected = detectPreferredLanguage();
    setLang(detected);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[--color-background]/80 backdrop-blur supports-[backdrop-filter]:bg-[--color-background]/70">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xl font-black tracking-tight text-neutral-900"
        >
          <span className="inline-grid h-7 w-7 place-items-center rounded-md border border-black bg-black text-white">
            GO
          </span>
          <span className="inline-grid h-7 w-7 place-items-center rounded-md border border-black">
            IT
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-800 md:flex">
          <li>
            <Link href="#courses" className="hover:opacity-80">Курсы</Link>
          </li>
          <li>
            <Link href="#university" className="hover:opacity-80">Университет</Link>
          </li>
          <li>
            <Link href="#reviews" className="hover:opacity-80">Отзывы</Link>
          </li>
          <li>
            <Link href="#hire" className="hover:opacity-80">Нанять выпускника</Link>
          </li>
        </ul>

        {/* Actions: CTA and Language switcher */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 md:inline-block"
          >
            На платформу
          </Link>

          {/* Language switcher (UI only) */}
          <div className="relative">
            <label className="sr-only" htmlFor="lang">Language</label>
            <select
              id="lang"
              aria-label="Language selector"
              value={lang}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="appearance-none rounded-full border border-neutral-300 bg-white px-3 py-2 pr-7 text-xs font-semibold text-neutral-800 shadow-sm focus:border-neutral-400 focus:outline-none"
            >
              <option value="ru">RU</option>
              <option value="ua">UA</option>
              <option value="sv">SV</option>
              <option value="en">EN</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500">▾</span>
          </div>
        </div>
      </nav>
    </header>
  );
}


