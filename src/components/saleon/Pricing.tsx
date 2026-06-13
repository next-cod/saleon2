"use client";

import { useMemo, useState } from "react";
import { SectionLabel, Eyebrow } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { PLANS, PRICING_FEATURES, UI } from "@/lib/i18n/content";

const INQUIRY_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Pricing() {
  const { locale } = useLocale();
  const t = UI[locale].pricing;
  const [vol, setVol] = useState(30);

  const recommended = useMemo(() => {
    if (vol <= 20) return PLANS[0];
    if (vol <= 50) return PLANS[1];
    if (vol <= 100) return PLANS[2];
    return PLANS[3];
  }, [vol]);

  const fmt = (price: number) => price.toLocaleString(locale === "ru" ? "ru-RU" : "en-US");

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel title={t.title}>
        {t.sub}
      </SectionLabel>

      <div className="mt-10 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary sm:h-14 sm:w-14">
              {INQUIRY_ICON}
            </span>
            <div>
              <div className="text-xs font-semibold text-muted-foreground">{t.howMany}</div>
              <div className="mt-1 font-display text-3xl font-extrabold text-ink">
                {vol} <span className="text-base font-medium text-muted-foreground">{t.perDay}</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-primary-soft px-4 py-3 text-sm">
            {t.recommended} <span className="font-bold text-primary">{pick(locale, recommended.name)}</span>
            {" · "}
            <span className="font-bold text-ink">
              {recommended.price === null ? t.onRequest : `${fmt(recommended.price)} ${t.perMonth}`}
            </span>
          </div>
        </div>
        <input
          type="range"
          min={5}
          max={120}
          step={5}
          value={vol}
          onChange={(e) => setVol(+e.target.value)}
          className="mt-6 w-full accent-[color:var(--primary)]"
        />
        <div className="mt-2 flex justify-between text-xs font-semibold text-muted-foreground">
          <span>5</span>
          <span>40</span>
          <span>80</span>
          <span>120+</span>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-4 lg:gap-6">
        {PLANS.map((p) => {
          const isReco = p.name === recommended.name;
          return (
            <article
              key={p.name.ru}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-soft transition sm:p-8
                ${isReco ? "border-primary bg-gradient-to-b from-primary-soft/70 to-surface shadow-glow" : "border-border bg-surface"}`}
            >
              {isReco && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-soft sm:left-8">
                  {t.featuredBadge}
                </span>
              )}
              <div className="font-display text-xl font-extrabold text-ink">{pick(locale, p.name)}</div>
              <div className="mt-2 text-sm text-muted-foreground">{pick(locale, p.lim)}</div>
              <div className="mt-6 flex items-baseline gap-1">
                {p.price === null ? (
                  <span className="font-display text-3xl font-extrabold text-ink">{t.onRequest}</span>
                ) : (
                  <>
                    <span className="font-display text-5xl font-extrabold text-ink">{fmt(p.price)}</span>
                    <span className="whitespace-nowrap text-sm text-muted-foreground">{t.perMonth}</span>
                  </>
                )}
              </div>
              <ul className="mb-6 mt-6 space-y-2.5 border-t border-border pt-5 text-sm">
                {[p.sup, ...PRICING_FEATURES].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {pick(locale, f)}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition lg:mt-auto
                  ${isReco ? "bg-gradient-primary text-primary-foreground shadow-glow hover:translate-y-[-1px]" : "border border-border bg-surface text-ink hover:border-primary/30 hover:text-primary"}`}
              >
                {t.choose}
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
          <Eyebrow>{t.selfTitle}</Eyebrow>
          <h4 className="mt-2 font-display text-xl font-bold text-ink">{t.selfHeading}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{t.selfDesc}</p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-soft/70 to-transparent p-7 shadow-soft">
          <Eyebrow tone="primary">{t.turnkeyTitle}</Eyebrow>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-3xl font-extrabold text-ink">{t.turnkeyPrice}</span>
            <span className="text-sm text-muted-foreground line-through">{t.turnkeyOldPrice}</span>
          </div>
          <p className="mt-2 text-sm text-foreground">{t.turnkeyDesc}</p>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">{t.note}</p>
    </section>
  );
}
