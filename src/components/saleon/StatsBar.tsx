"use client";

import { Fragment } from "react";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { DOODLES, STATS } from "@/lib/i18n/content";
import { ArrowDoodleDownLeft, MarkerHighlight } from "./Decor";

const WIDTHS = [40, 70, 100, 80];

export function StatsBar() {
  const { locale } = useLocale();
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div className="pointer-events-none absolute -top-10 right-[6%] z-10 hidden rotate-2 text-primary sm:-top-12 sm:right-[18%] sm:block">
        <p className="font-hand text-xl sm:text-2xl">{pick(locale, DOODLES[1])}</p>
        <ArrowDoodleDownLeft className="ml-10 h-12 w-20 sm:h-14 sm:w-24" />
      </div>
      <div className="grid gap-3 rounded-3xl border border-border bg-surface p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Fragment key={i}>
          {i === 2 && (
            <div key="doodle" className="flex items-center justify-end gap-2 px-1 text-primary sm:hidden">
              <p className="-rotate-1 font-hand text-lg">{pick(locale, DOODLES[1])}</p>
              <ArrowDoodleDownLeft className="h-8 w-12" />
            </div>
          )}
          <div className="relative overflow-hidden rounded-2xl bg-background p-5">
            <div className="absolute right-3 top-3 text-[10px] font-bold text-muted-foreground/60">0{i + 1}</div>
            <div className="font-display text-3xl font-extrabold text-ink">
              {i === 3 ? (
                <span className="relative inline-block">
                  <MarkerHighlight className="absolute -inset-x-2 -inset-y-1 -z-10 text-mint/40" />
                  <span className="relative">{pick(locale, s.v)}</span>
                </span>
              ) : (
                pick(locale, s.v)
              )}
            </div>
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
          </Fragment>
        ))}
      </div>
    </section>
  );
}
