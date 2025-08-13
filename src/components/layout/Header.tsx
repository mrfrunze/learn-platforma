"use client";

import Link from "next/link";
import PrimaryNav from "./PrimaryNav";

export default function Header() {

  return (
<header className="sticky top-0 z-50 bg-[--color-background]/80 backdrop-blur supports-[backdrop-filter]:bg-[--color-background]/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Логотип — только в header, не в nav */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xl font-black tracking-tight text-neutral-900"
          aria-label="Home"
        >
          <span className="px-1 place-items-center rounded-md border border-black bg-black text-white">
            Ilay
          </span>
          <span className="px-1 place-items-center rounded-md border border-black">
            Stoianiv
          </span>
        </Link>

        {/* Вся навигация + экшены живут внутри nav */}
        <PrimaryNav />
      </div>
    </header>
  );
}


