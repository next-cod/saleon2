"use client";

import { SectionLabel } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { DOODLES, TEAM, UI } from "@/lib/i18n/content";
import { ArrowDoodleLoop } from "./Decor";

export function Team() {
  const { locale } = useLocale();
  const t = UI[locale].team;

  return (
    <section id="team" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel title={t.title} />
      <div className="pointer-events-none absolute right-6 top-2 z-10 hidden rotate-3 text-primary sm:right-16 sm:top-6 sm:block">
        <p className="font-hand text-xl sm:text-2xl">{pick(locale, DOODLES[3])}</p>
        <ArrowDoodleLoop className="ml-6 h-14 w-20 -scale-x-100 sm:h-16 sm:w-24" />
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m) => (
          <article
            key={m.name}
            className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-soft transition hover:-translate-y-1 hover:shadow-elev"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl" style={{ background: m.gradient }}>
              <div className="flex h-full items-center justify-center font-display text-7xl font-extrabold text-white/90">
                {m.i}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-night/85 to-ink/85 p-5 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="font-display text-base font-extrabold text-white">{m.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/80">{pick(locale, m.bio)}</p>
              </div>
            </div>
            <h3 className="mt-4 px-2 font-display text-xl font-extrabold text-ink">{m.name}</h3>
            <p className="mt-1 px-2 pb-3 text-sm text-primary">{pick(locale, m.role)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
