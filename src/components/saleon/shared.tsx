"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useLocale, pick } from "@/lib/i18n/LocaleProvider";
import type { Bi } from "@/lib/i18n/content";

/* ---------- logo ---------- */

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <img src="/assets/saleon/saleon-avatar.png" alt="" className="h-7 w-7 rounded-lg object-cover" />
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${variant === "dark" ? "text-white" : "text-ink"}`}>
        Saleon
      </span>
    </a>
  );
}

/* ---------- section label ---------- */

export function SectionLabel({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{children}</p>}
    </div>
  );
}

/* ---------- small section eyebrow label ---------- */

export function Eyebrow({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "primary" }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-semibold ${tone === "primary" ? "text-primary" : "text-muted-foreground"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "primary" ? "bg-primary" : "bg-muted-foreground/40"}`} />
      {children}
    </div>
  );
}

/* ---------- chat bubbles ---------- */

export function Bubble({ children, side, green }: { children: ReactNode; side: "l" | "r"; green?: boolean }) {
  const isR = side === "r";
  return (
    <div className={`flex ${isR ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm shadow-sm
        ${
          isR
            ? "rounded-tr-sm bg-primary-soft text-ink"
            : green
              ? "rounded-tl-sm border border-mint/20 bg-mint/15 text-ink"
              : "rounded-tl-sm border border-border bg-surface text-ink"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-border bg-surface px-3.5 py-2.5 shadow-sm">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/50" />
      </div>
    </div>
  );
}

/* ---------- clickable chip chat hook ---------- */

export type ChatMessage = { side: "l" | "r"; text: string };

export function useChipChat(resetKey: unknown) {
  const [extra, setExtra] = useState<ChatMessage[]>([]);
  const [used, setUsed] = useState<Set<number>>(new Set());
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setExtra([]);
    setUsed(new Set());
    setTyping(false);
  }, [resetKey]);

  const send = (index: number, chipText: string, replyText: string) => {
    setUsed((u) => new Set(u).add(index));
    setExtra((e) => [...e, { side: "r", text: chipText }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setExtra((e) => [...e, { side: "l", text: replyText }]);
    }, 900);
  };

  return { extra, used, typing, send };
}

/* ---------- chat box: grows once, then scrolls internally ---------- */

export function useChatScroll(resetKey: unknown, messageCount: number, typing: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    setMaxHeight(null);
  }, [resetKey]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (maxHeight === null) {
      if (messageCount >= 2 && !typing) {
        setMaxHeight(el.scrollHeight);
      }
    } else {
      el.scrollTop = el.scrollHeight;
    }
  }, [messageCount, typing, maxHeight]);

  const style: CSSProperties = {
    overflowY: "auto",
    scrollbarGutter: "stable",
    ...(maxHeight !== null ? { maxHeight } : {}),
  };

  return { ref, style };
}

const CHIP_HINT: Bi = { ru: "Выберите вариант ответа", en: "Choose a reply" };

export function ChipRow({
  chips,
  used,
  onPick,
}: {
  chips: [Bi, Bi, Bi] | Bi[];
  used: Set<number>;
  onPick: (index: number) => void;
}) {
  const { locale } = useLocale();
  const visible = chips.map((c, i) => ({ c, i })).filter(({ i }) => !used.has(i));
  if (visible.length === 0) return null;
  return (
    <div className="pt-1.5">
      <div className="mb-1.5 text-[10px] font-semibold text-muted-foreground/70">{pick(locale, CHIP_HINT)}</div>
      <div className="flex flex-wrap gap-2">
        {visible.map(({ c, i }) => (
          <button
            key={i}
            type="button"
            onClick={() => onPick(i)}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-surface px-3 py-1 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary-soft"
          >
            {pick(locale, c)}
            <span aria-hidden>{ARROW_ICON_SM}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const ARROW_ICON_SM = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- form field ---------- */

export function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

/* ---------- footer column ---------- */

export function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-bold text-white/50">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-white/60 transition hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- channel brand icons ("Работает в") ---------- */

export type ChannelId = "crm" | "telegram" | "vk" | "max" | "instagram";

export function ChannelIcon({ id }: { id: ChannelId }) {
  switch (id) {
    case "crm":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2.4" y="4.2" width="19.2" height="15.6" rx="3.2" stroke="#2555F5" strokeWidth="1.8" />
          <path d="M2.4 9h19.2" stroke="#2555F5" strokeWidth="1.8" />
          <circle cx="16.6" cy="6.6" r="1" fill="#2555F5" />
          <circle cx="19.2" cy="6.6" r="1" fill="#2555F5" />
          <path d="M6 13.4h5M6 16h7.5" stroke="#2555F5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "telegram":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#2AABEE" aria-hidden>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.569-4.46c.537-.194 1.006.131.834.939z" />
        </svg>
      );
    case "vk":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#0077FF" aria-hidden>
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.29 10.675 4.938 8.977 4.938 8.6c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.736c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
        </svg>
      );
    case "max":
      return <img src="/assets/saleon/max-icon.png" alt="" width={14} height={14} className="rounded-[3px]" />;
    case "instagram":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="#C13584" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="#C13584" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="#C13584" />
        </svg>
      );
  }
}

export const ARROW_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
