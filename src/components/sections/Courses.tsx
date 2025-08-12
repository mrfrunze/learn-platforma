import Image from "next/image";

type BadgeProps = { children: React.ReactNode };
function Pill({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800">
      {children}
    </span>
  );
}

type CourseCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  stats: string[]; // 3-4 pills
  isNew?: boolean;
};

/**
 * Course card reflecting the design: rounded container, top-right avatar with a small
 * "New" ribbon, pill badges, paragraph and a large outline button. Avatar uses a
 * static placeholder square; in production replace with course imagery.
 */
function CourseCard({ title, subtitle, description, stats, isNew }: CourseCardProps) {
  return (
    <article className="relative flex h-full flex-col justify-between rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
      <header className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-[18ch] text-pretty text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            {title}
            {subtitle ? <><br />{subtitle}</> : null}
          </h3>
          <div className="relative">
            {/* Avatar placeholder */}
            <div className="h-16 w-16 shrink-0 rounded-2xl bg-neutral-200" aria-hidden />
            {isNew && (
              <span className="absolute -right-2 -top-2 rotate-45 rounded bg-orange-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                New
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Pills */}
      <div className="mb-5 flex flex-wrap gap-3">
        {stats.map((s, i) => (
          <Pill key={i}>{s}</Pill>
        ))}
      </div>

      {/* Description */}
      <p className="mb-6 text-base leading-7 text-neutral-700">{description}</p>

      <div className="mt-auto">
        <a
          href="#"
          className="block rounded-full border-2 border-neutral-900 px-6 py-3 text-center text-base font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
        >
          Подробнее
        </a>
      </div>
    </article>
  );
}

/**
 * Courses section replicating the two-row, three-up grid on large screens from the screenshots.
 * - Mobile: single column, natural stacking
 * - md: two columns where space allows
 * - lg: three columns as in the design
 */
export default function Courses() {
  return (
    <section aria-labelledby="courses-heading" className="bg-[--color-background]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="mb-6">
          <h2 id="courses-heading" className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
            Популярные программы
          </h2>
        </header>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CourseCard
            title="Prompt Engineer"
            description="Научись “говорить” с AI на одном языке и ставить ему задачи так, чтобы получать желаемый результат."
            stats={["Онлайн-лекции вживую", "10+ инструментов", "Старт 8 августа", "3 месяца"]}
            isNew
          />

          <CourseCard
            title="AI Marketing"
            subtitle="Specialist"
            description="Стань супермэном-автоматизатором в маркетинге с помощью AI."
            stats={[
              "Гарантия окупаемости курса",
              "Онлайн-лекции вживую",
              "Старт 8 августа",
              "3 месяца",
            ]}
            isNew
          />

          <CourseCard
            title="AI Content"
            subtitle="Maker"
            description="Преврати AI в собственную креативную команду и инструмент для заработка."
            stats={["Гарантия окупаемости курса", "Гибкий формат", "Старт 8 августа", "2 месяца"]}
          />

          <CourseCard
            title="AI No‑Coder"
            description="Стань no-code разработчиком и зарабатывай от $1000, живя в свободном графике!"
            stats={["Гарантия окупаемости курса", "Онлайн-лекции вживую", "Старт 8 августа", "4 месяца"]}
            isNew
          />

          <CourseCard
            title="Fullstack + AI"
            description="Освой полный цикл создания веб‑сайтов и приложений: от фронтенда до бэкенда и баз данных"
            stats={["Гарантия трудоустройства", "7 проектов", "Старт 11 августа", "10 месяцев"]}
          />

          <CourseCard
            title="Data"
            subtitle="Analytics + AI"
            description="Научись собирать, анализировать и визуализировать данные, а также принимать решения на основе цифр."
            stats={["Гарантия трудоустройства", "3 проекта", "Старт 25 августа", "5 месяцев"]}
          />
        </div>
      </div>
    </section>
  );
}


