"use client";

import { SectionLabel } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { HOW, UI } from "@/lib/i18n/content";

export function How() {
  const { locale } = useLocale();
  const t = UI[locale].how;

  return (
    <section id="how" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel title={t.title} />
      <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
        <div aria-hidden className="absolute left-0 right-0 top-12 hidden h-px lg:block">
          <div className="mx-auto h-px w-[78%] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        {HOW.map((s) => (
          <div key={s.n} className="relative rounded-3xl border border-border bg-surface p-7 shadow-soft">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
              {s.n}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink">{pick(locale, s.t)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{pick(locale, s.d)}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 overflow-hidden rounded-3xl bg-gradient-primary p-8 shadow-glow sm:p-10 lg:grid-cols-[1.2fr_auto] lg:items-center">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-primary-foreground">{t.noTime}</h3>
          <p className="mt-2 max-w-2xl text-primary-foreground/80">{t.noTimeDesc}</p>
        </div>
        <a
          href="#contacts"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary transition hover:translate-y-[-1px]"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
