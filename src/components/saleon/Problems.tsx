"use client";

import { SectionLabel } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { PROBLEMS, UI } from "@/lib/i18n/content";

export function Problems() {
  const { locale } = useLocale();
  const t = UI[locale].problems;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel title={t.title} />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p) => (
          <article
            key={p.n}
            className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-elev"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-soft/70 blur-2xl transition group-hover:scale-125" />
            <span className="relative font-display text-5xl font-extrabold text-primary/20 transition group-hover:text-primary/40">
              {p.n}
            </span>
            <h3 className="relative mt-4 font-display text-xl font-bold text-ink">{pick(locale, p.t)}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{pick(locale, p.d)}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-gradient-primary p-8 text-center shadow-glow sm:p-10">
        <p className="mx-auto max-w-3xl text-pretty text-xl text-primary-foreground">
          <span className="font-display font-extrabold">Сэйлон</span> создаёт цифровых сотрудников с характером.
          Они понимают, на каком этапе находится клиент – и отвечают точно под момент.
        </p>
      </div>
    </section>
  );
}
