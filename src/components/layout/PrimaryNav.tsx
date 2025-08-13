"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  detectPreferredLanguage,
  getTranslations,
  type SupportedLang,
} from "@/utils/i18n";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function PrimaryNav() {
  const [animate, setAnimate] = useState(false);
  const [lang, setLang] = useState<SupportedLang>("en");
  const t = getTranslations(lang);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleLanguageChange = (next: string) =>
    setLang(next as SupportedLang);

  useEffect(() => {
    setLang(detectPreferredLanguage());
  }, []);

  useEffect(() => {
    if (open) {
      setAnimate(false);
      requestAnimationFrame(() => setAnimate(true)); // триггерим после монтирования
    } else {
      setAnimate(false);
    }
  }, [open]);

  // trap focus + esc
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
      'a, button, select, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [open]);

  const navLinks = [
    { href: "#courses", label: t.nav.courses },
    { href: "#blog", label: t.nav.blog },
    { href: "#about", label: t.nav.about },
    { href: "#contacts", label: t.nav.contacts },
  ];

  return (
    <nav aria-label="Primary" className="flex items-center gap-4">
      {/* Меню ссылок — общее */}
      <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-800 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:opacity-80">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* CTA */}
        <Link
          href="/login"
          className="hidden rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 md:inline-block"
        >
          {t.cta.start}
        </Link>

        {/* Селектор языка */}
        <div className="relative hidden md:block">
          <label className="sr-only" htmlFor="lang">
            Language
          </label>
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
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500">
            ▾
          </span>
        </div>

        {/* Burger */}
        <button
          type="button"
          aria-label={t.nav.openMenu ?? "Open menu"}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm"
        >
          <HiOutlineMenu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile off-canvas */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-white md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end pt-4 px-4 pb-0">
            <button
              type="button"
              aria-label={t.nav.closeMenu ?? "Close menu"}
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm"
            >
              <HiOutlineX className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={drawerRef}
            className={`flex flex-col items-center gap-6 px-6 pt-0 pb-6 bg-white transition-transform transition-opacity duration-500 ease-in-out ${animate ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-neutral-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              className="block rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {t.cta.start}
            </Link>

            <div className="relative w-full max-w-xs">
              <label className="sr-only" htmlFor="lang-mobile">
                Language
              </label>
              <select
                id="lang-mobile"
                aria-label="Language selector"
                value={lang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full appearance-none rounded-full border border-neutral-300 bg-white px-3 py-2 pr-7 text-sm font-semibold text-neutral-800 shadow-sm focus:border-neutral-400 focus:outline-none"
              >
                <option value="ru">RU</option>
                <option value="ua">UA</option>
                <option value="sv">SV</option>
                <option value="en">EN</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                ▾
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
