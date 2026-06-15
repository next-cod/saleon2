"use client";

import { SectionLabel, Bubble } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { DIFFS, DIFF_CONTEXT, DIFF_IDENTITY_ROWS, DIFF_SIMPLE, UI } from "@/lib/i18n/content";
import { CheckDoodle } from "./Decor";

const EYE_ICON = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CHECK_ICON = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CROSS_ICON = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Differences() {
  const { locale } = useLocale();
  const t = UI[locale].diffs;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel title={t.title} />
      <div className="mt-12 space-y-6">
        {DIFFS.map((d, i) => (
          <div key={d.n} className="grid gap-6 rounded-3xl border border-border bg-surface p-6 shadow-soft lg:grid-cols-[1.05fr_1fr] lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-primary/30">{d.n}</span>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">{pick(locale, d.tag)}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-ink">{pick(locale, d.t)}</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">{pick(locale, d.d)}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              {i === 0 && <DiffContext />}
              {i === 1 && <DiffIdentity />}
              {i === 2 && <DiffSimple />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DiffContext() {
  const { locale } = useLocale();
  return (
    <div className="space-y-2.5">
      <Bubble side="r">{pick(locale, DIFF_CONTEXT.user)}</Bubble>
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-muted-foreground">
          {EYE_ICON}
          {pick(locale, DIFF_CONTEXT.badge)}
        </div>
      </div>
      <Bubble side="l">{pick(locale, DIFF_CONTEXT.bot)}</Bubble>
    </div>
  );
}

function DiffIdentity() {
  const { locale } = useLocale();
  return (
    <div className="space-y-2">
      {DIFF_IDENTITY_ROWS.map((r) => (
        <div key={r.img} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3">
          <img src={r.img} alt="" className="h-9 w-9 rounded-full object-cover" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">{pick(locale, r.name)}</span>
              <span className="text-xs text-muted-foreground">{r.time}</span>
            </div>
            <p className="text-sm text-muted-foreground">{pick(locale, r.msg)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DiffSimple() {
  const { locale } = useLocale();
  const t = UI[locale].diffs;
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-mint/20 bg-mint/5 p-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-mint">
          {CHECK_ICON}
          {t.whatYouDo}
        </div>
        <ul className="mt-3 space-y-2">
          {DIFF_SIMPLE.yes.map((y, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint/15 text-mint">
                <CheckDoodle className="h-3 w-3" />
              </span>
              {pick(locale, y)}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-border bg-background p-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
          {CROSS_ICON}
          {t.whatYouDont}
        </div>
        <ul className="mt-3 space-y-2">
          {DIFF_SIMPLE.no.map((y, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
              {pick(locale, y)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
