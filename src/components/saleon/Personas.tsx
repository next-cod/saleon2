"use client";

import { useState } from "react";
import { SectionLabel, Bubble, TypingBubble, ChipRow, Eyebrow, useChipChat, useChatScroll, ARROW_ICON } from "./shared";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { UI } from "@/lib/i18n/content";
import { BOTS, STATES, CHIP_REPLIES } from "@/lib/i18n/personas";

export function Personas() {
  const { locale } = useLocale();
  const t = UI[locale].personas;

  const [pid, setPid] = useState(BOTS[0].id);
  const [stateIdx, setStateIdx] = useState(0);

  const bot = BOTS.find((b) => b.id === pid)!;
  const state = STATES[stateIdx];
  const { extra, used, typing, send } = useChipChat(`${pid}-${stateIdx}`);
  const { ref: chatRef, style: chatStyle } = useChatScroll(`${pid}-${stateIdx}`, extra.length, typing);

  return (
    <section id="personas" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel title={t.title}>
        {t.sub}
      </SectionLabel>

      <div className="mt-10 rounded-3xl border border-border bg-surface p-3 shadow-soft sm:p-5">
        {/* persona tabs */}
        <Eyebrow>{t.choose}</Eyebrow>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {BOTS.map((b) => {
            const active = b.id === pid;
            return (
              <button
                key={b.id}
                onClick={() => {
                  setPid(b.id);
                  setStateIdx(0);
                }}
                className={`group flex items-center gap-2 rounded-2xl border p-2 text-left transition
                  ${active ? "border-primary bg-primary-soft/50 shadow-soft" : "border-border bg-background hover:border-primary/30"}`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <img src={b.img} alt="" className="h-8 w-8 rounded-lg object-cover" />
                </span>
                <span className="min-w-0">
                  <span className={`block truncate text-sm font-bold ${active ? "text-primary" : "text-ink"}`}>{pick(locale, b.name)}</span>
                  <span className="block truncate text-[11px] text-muted-foreground">{pick(locale, b.biz)}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* persona card */}
          <div className="rounded-2xl bg-background p-6">
            <div className="flex items-center gap-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted p-1">
                <img src={bot.img} alt="" className="h-full w-full rounded-xl bg-surface object-cover" />
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-ink">{pick(locale, bot.name)}</div>
                <div className="text-sm text-muted-foreground">{pick(locale, bot.biz)}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{pick(locale, bot.char)}</p>

            <div className="mt-6">
              <Eyebrow tone="primary">{t.clientState}</Eyebrow>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {STATES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setStateIdx(i)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition
                    ${
                      stateIdx === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-surface text-muted-foreground hover:border-primary/30 hover:text-primary"
                    }`}
                >
                  {pick(locale, s.name)}
                </button>
              ))}
            </div>
          </div>

          {/* chat */}
          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-3">
                <img src={bot.img} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/20" />
                <div>
                  <div className="font-semibold text-ink">{pick(locale, bot.name)}</div>
                  <div className="text-[11px] text-mint">{t.online}</div>
                </div>
              </div>
              <div className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-primary">{pick(locale, state.badge)}</div>
            </div>
            <div ref={chatRef} style={chatStyle} className="mt-4 space-y-2.5">
              <Bubble side="r">{pick(locale, state.uMsg)}</Bubble>
              <Bubble side="l">{state.bMsg(bot, locale)}</Bubble>
              {extra.map((m, i) => (
                <Bubble key={`extra-${i}`} side={m.side}>
                  {m.text}
                </Bubble>
              ))}
              {typing && <TypingBubble />}
              <ChipRow
                chips={state.chips}
                used={used}
                onPick={(i) => send(i, pick(locale, state.chips[i]), pick(locale, CHIP_REPLIES[bot.id][stateIdx][i]))}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#contacts"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
        >
          {t.cta}
          {ARROW_ICON}
        </a>
      </div>
    </section>
  );
}
