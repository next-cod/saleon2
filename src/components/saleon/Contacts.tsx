"use client";

import { Field, ARROW_ICON } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { CONTACT_NICHES, CONTACT_STATS, UI } from "@/lib/i18n/content";

export function Contacts() {
  const { locale } = useLocale();
  const t = UI[locale].contacts;

  return (
    <section id="contacts" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface p-6 shadow-elev sm:p-12">
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{t.title}</h2>
            <p className="mt-4 max-w-md text-muted-foreground">{t.desc}</p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {CONTACT_STATS.map((s, i) => (
                <div key={i} className="rounded-2xl border border-border bg-background p-4 text-center">
                  <div className="font-display text-3xl font-extrabold text-gradient">{s.v}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{pick(locale, s.l)}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary font-display text-lg font-extrabold text-primary-foreground">
                Т
              </div>
              <div>
                <div className="font-semibold text-ink">Татьяна</div>
                <div className="text-xs text-muted-foreground">{t.authorRole}</div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="relative rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="space-y-4">
              <Field label={t.nameLabel} placeholder={t.namePlaceholder} />
              <Field label={t.contactLabel} placeholder={t.contactPlaceholder} />
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">{t.nicheLabel}</label>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option>{t.nicheSelect}</option>
                  {CONTACT_NICHES.map((n, i) => (
                    <option key={i}>{pick(locale, n)}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]">
              {t.submit}
              {ARROW_ICON}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              {t.privacyPrefix}{" "}
              <a href="#" className="text-primary underline">
                {t.privacyLink}
              </a>
            </p>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              {t.altPrefix}{" "}
              <a href="#" className="font-semibold text-primary">
                {t.altLink}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
