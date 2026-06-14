"use client";

import { Logo, FooterCol } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { FOOTER_COLS, UI } from "@/lib/i18n/content";

export function Footer() {
  const { locale } = useLocale();
  const t = UI[locale].footer;

  return (
    <footer className="bg-night text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 max-w-sm text-sm text-white/55">{t.desc}</p>
        </div>
        {FOOTER_COLS.map((col, i) => (
          <FooterCol key={i} title={pick(locale, col.title)} links={col.links.map((l) => pick(locale, l))} />
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/40 sm:flex-row sm:px-8">
          <div>
            © {new Date().getFullYear()} {t.copy}
          </div>
          <div className="flex items-center gap-1">{t.madeWith}</div>
        </div>
      </div>
    </footer>
  );
}
