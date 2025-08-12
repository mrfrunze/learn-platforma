"use client";

/**
 * Site footer
 * - Semantic <footer> element
 * - Mobile-first, centered content
 * - Matches neutral aesthetic used across the site
 * - Current year is rendered dynamically
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-[--color-background]">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-neutral-600">
          <span className="font-semibold text-neutral-900">Ilya Stoyanov</span>
          {" "}·{" "}
          <span>All Rights Reserved</span>
          {" "}·{" "}
          <time dateTime={`${year}`}>{year}</time>
        </p>
      </div>
    </footer>
  );
}


