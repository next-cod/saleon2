"use client";

import { useState } from "react";
import { SectionLabel } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { FAQ, UI } from "@/lib/i18n/content";

export function Faq() {
  const { locale } = useLocale();
  const t = UI[locale].faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <SectionLabel title={t.title} />
      <div className="mt-10 space-y-3">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`rounded-2xl border bg-surface shadow-sm transition ${isOpen ? "border-primary/40 shadow-soft" : "border-border"}`}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-display text-base font-bold text-ink sm:text-lg">{pick(locale, item.q)}</span>
                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition
                    ${isOpen ? "rotate-45 bg-gradient-primary text-primary-foreground" : "bg-primary-soft text-primary"}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {isOpen && <div className="fade-up px-6 pb-6 text-muted-foreground">{pick(locale, item.a)}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
