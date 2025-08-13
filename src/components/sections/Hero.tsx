import Image from "next/image";

/**
 * Hero section that mirrors the provided design:
 * - Bold multi-line heading on the left
 * - KPI row below
 * - Primary CTA button
 * - Static visual placeholder on the right (no slider functionality)
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="grid items-end gap-10 lg:grid-cols-2">
        {/* Left column: heading, subheading, KPIs, CTA */}
        <div>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            GoIT – центр современных профессий
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-700">
            Строй карьеру, мы поможем.
          </p>

          {/* KPIs */}
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <dt className="text-sm text-neutral-500">трудоустроенных выпускников</dt>
              <dd className="mt-1 text-3xl font-bold">6000+</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">компаний‑партнеров</dt>
              <dd className="mt-1 text-3xl font-bold">100+</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">программ подготовки IT- и digital‑специалистов</dt>
              <dd className="mt-1 text-3xl font-bold">15</dd>
            </div>
          </dl>

          <div className="mt-10">
            <a
              href="#choose"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-neutral-900"
            >
              Выбрать профессию
            </a>
          </div>
        </div>

        {/* Right column: static media placeholder (no slider) */}
        <div className="relative isolate">
          {/* stack-like translucent cards behind, to echo design depth */}
          <div className="absolute -left-6 top-6 h-[78%] w-[85%] -rotate-3 rounded-3xl bg-neutral-200/60 blur-[1px]" aria-hidden />
          <div className="absolute -left-3 top-3 h-[82%] w-[88%] -rotate-1 rounded-3xl bg-neutral-200/70" aria-hidden />

          {/* Placeholder frame */}
          <figure className="relative rounded-3xl border border-neutral-200 bg-white p-2 shadow-lg">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
              {/* Static image placeholder; swap with a slider later */}
              <div className="flex h-full items-center justify-center text-neutral-400">
                800×1000 Placeholder
              </div>
            </div>
            <figcaption className="sr-only">Статическое изображение вместо слайдера</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}



