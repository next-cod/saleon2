"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "ru" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");
  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

/** Pick the value for the current locale from a `{ ru, en }` record. */
export function pick<T>(locale: Locale, value: Record<Locale, T>): T {
  return value[locale];
}
