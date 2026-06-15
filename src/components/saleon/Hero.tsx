"use client";

import { useEffect, useState } from "react";
import { Bubble, TypingBubble, ChipRow, ChannelIcon, useChipChat, useChatScroll, ARROW_ICON } from "./shared";
import { BlobA, BlobB, Sparkle, ArrowHand } from "./Decor";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import { CHANNELS, DOODLES, UI } from "@/lib/i18n/content";
import { BOTS } from "@/lib/i18n/personas";
import { HERO_CHATS } from "@/lib/i18n/heroChats";

export function Hero() {
  const { locale } = useLocale();
  const t = UI[locale].hero;

  return (
    <section className="relative isolate">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <BlobA className="absolute -right-32 -top-16 h-[26rem] w-[26rem] opacity-60 blur-3xl sm:-right-24 sm:top-0" />
        <BlobB className="absolute -left-32 bottom-0 h-[22rem] w-[22rem] opacity-50 blur-3xl sm:-left-20" />
      </div>

      <div className="fade-up relative mx-auto max-w-3xl px-5 pb-8 pt-16 text-center sm:px-8 sm:pb-10 sm:pt-24 lg:pb-16 lg:pt-36">
        <Sparkle className="absolute right-4 top-4 hidden h-6 w-6 rotate-12 text-primary/40 sm:right-10 sm:block" />
        <div className="pointer-events-none absolute left-0 top-2 z-10 hidden rotate-3 text-primary sm:left-2 sm:top-6 sm:block lg:left-8">
          <p className="font-hand text-lg leading-tight sm:text-xl">{pick(locale, DOODLES[0])}</p>
          <ArrowHand className="ml-2 mt-0.5 h-9 w-16 sm:h-10 sm:w-20" />
        </div>
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink min-[375px]:text-6xl sm:text-7xl lg:text-8xl">
          {t.h1b}{" "}
          <span className="text-gradient">{t.h1highlight}</span>
          .
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">{t.sub}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-10">
          <a
            href="#contacts"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
          >
            {t.cta1}
            <span className="transition group-hover:translate-x-0.5">{ARROW_ICON}</span>
          </a>
          <a
            href="#personas"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition hover:border-primary/30 hover:text-primary"
          >
            {t.cta2}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 lg:mt-12">
          <span className="text-sm font-semibold text-muted-foreground">{t.worksIn}:</span>
          {CHANNELS.map((c) => (
            <span
              key={c.id}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink shadow-sm sm:text-sm"
            >
              <ChannelIcon id={c.id} />
              {pick(locale, c.name)}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:pt-28">
        <Sparkle className="absolute -left-2 top-8 hidden h-7 w-7 -rotate-12 text-mint/60 sm:-left-8 sm:block" />
        <HeroChat />
      </div>
    </section>
  );
}

function HeroChat() {
  const { locale } = useLocale();
  const tp = UI[locale].personas;
  const [botIndex, setBotIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setBotIndex(Math.floor(Math.random() * BOTS.length));
    setMounted(true);
  }, []);

  const bot = BOTS[botIndex];
  const chat = HERO_CHATS[botIndex];
  const { extra, used, typing, send } = useChipChat(mounted ? botIndex : "initial");
  const { ref: chatRef, style: chatStyle } = useChatScroll(mounted ? botIndex : "initial", extra.length, typing);

  if (!mounted) {
    return (
      <div className="relative fade-up [animation-delay:0.15s]">
        <div className="relative rounded-[2rem] border border-border bg-surface p-5 shadow-elev sm:p-6">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 animate-pulse rounded-full bg-muted" />
            <div className="space-y-2">
              <div className="h-4 w-28 animate-pulse rounded bg-muted" />
              <div className="h-3 w-36 animate-pulse rounded bg-muted" />
            </div>
          </div>
          <div className="mt-4 space-y-2.5">
            <div className="flex justify-start">
              <div className="h-14 w-3/4 animate-pulse rounded-2xl rounded-tl-sm bg-muted" />
            </div>
            <div className="flex justify-end">
              <div className="h-10 w-2/3 animate-pulse rounded-2xl rounded-tr-sm bg-muted" />
            </div>
            <div className="flex justify-start">
              <div className="h-16 w-4/5 animate-pulse rounded-2xl rounded-tl-sm bg-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative fade-up [animation-delay:0.15s]">
      <div className="relative rounded-[2rem] border border-border bg-surface p-5 shadow-elev sm:p-6">
        {/* chat header */}
        <div className="flex items-center gap-3">
          <img src={bot.img} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20" />
          <div>
            <div className="font-display text-base font-extrabold text-ink">{pick(locale, bot.name)}</div>
            <div className="text-xs text-muted-foreground">
              {pick(locale, bot.biz)} · {tp.online}
            </div>
          </div>
        </div>

        {/* messages */}
        <div ref={chatRef} style={chatStyle} className="mt-4 space-y-2.5">
          {chat.msgs.map((m, i) => (
            <Bubble key={i} side={m.who === "out" ? "l" : "r"}>
              {pick(locale, m.text)}
            </Bubble>
          ))}
          {extra.map((m, i) => (
            <Bubble key={`extra-${i}`} side={m.side}>
              {m.text}
            </Bubble>
          ))}
          {typing && <TypingBubble />}
          <ChipRow
            chips={chat.chips}
            used={used}
            onPick={(i) => send(i, pick(locale, chat.chips[i]), pick(locale, chat.chipReplies[i]))}
          />
        </div>
      </div>
    </div>
  );
}
