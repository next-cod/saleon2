"use client";

import { Field, Select, ARROW_ICON } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { CONTACT_NICHES, CONTACT_PS, CONTACT_STATS, UI } from "@/lib/i18n/content";

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
                  <div className="mt-1 break-words text-[11px] text-muted-foreground">{pick(locale, s.l)}</div>
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
            <p className="mt-4 -rotate-1 pl-1 font-hand text-lg text-primary sm:text-xl">
              P.S. {pick(locale, CONTACT_PS.before)}{" "}
              <a
                href={`https://t.me/${CONTACT_PS.tgHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Telegram
              </a>
              {pick(locale, CONTACT_PS.after)} <span className="whitespace-nowrap">– {CONTACT_PS.sign}</span>
            </p>
            <p className="-rotate-1 pl-1 font-hand text-lg text-primary sm:text-xl">
              Telegram:{" "}
              <a
                href={`https://t.me/${CONTACT_PS.tgHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @{CONTACT_PS.tgHandle}
              </a>
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="relative rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="space-y-4">
              <Field label={t.nameLabel} placeholder={t.namePlaceholder} />
              <Field label={t.contactLabel} placeholder={t.contactPlaceholder} />
              <Select
                label={t.nicheLabel}
                placeholder={t.nicheSelect}
                options={CONTACT_NICHES.map((n) => pick(locale, n))}
              />
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
