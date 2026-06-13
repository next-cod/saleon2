"use client";

import { useState } from "react";
import { Logo, ARROW_ICON } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { NAV, UI } from "@/lib/i18n/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = UI[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-primary-soft/60 hover:text-primary"
            >
              {pick(locale, n.label)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-border bg-surface p-1 text-xs font-semibold sm:flex">
            <button
              onClick={() => setLocale("ru")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "ru" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-ink"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-ink"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
          >
            {t.header.tryIt}
            {ARROW_ICON}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-7xl px-5 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {pick(locale, n.label)}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-border px-3 pt-3">
              <button
                onClick={() => setLocale("ru")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  locale === "ru" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  locale === "en" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
