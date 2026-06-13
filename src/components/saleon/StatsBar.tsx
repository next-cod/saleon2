"use client";

import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { STATS } from "@/lib/i18n/content";

const WIDTHS = [40, 70, 100, 80];

export function StatsBar() {
  const { locale } = useLocale();
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div className="grid gap-3 rounded-3xl border border-border bg-surface p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl bg-background p-5">
            <div className="absolute right-3 top-3 text-[10px] font-bold text-muted-foreground/60">0{i + 1}</div>
            <div className="font-display text-3xl font-extrabold text-ink">{pick(locale, s.v)}</div>
            <div className="mt-1 text-sm text-muted-foreground">{pick(locale, s.l)}</div>
            {i === 0 ? (
              <div className="mt-4 flex gap-1.5">
                {[0, 1, 2].map((j) => (
                  <div key={j} className="h-1 flex-1 rounded-full bg-gradient-primary" />
                ))}
              </div>
            ) : (
              <div className="mt-4 h-1 w-full rounded-full bg-border">
                <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${WIDTHS[i]}%` }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
