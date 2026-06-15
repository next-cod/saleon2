import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope, Caveat } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { ChatWidgetTheme } from "@/components/saleon/ChatWidgetTheme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Saleon – цифровые сотрудники с характером",
  description: "Saleon создаёт цифровых сотрудников с именем и характером для Telegram, ВКонтакте, MAX и Instagram. Запуск за 3 дня.",
  openGraph: {
    title: "Saleon – цифровые сотрудники с характером",
    description: "Saleon создаёт цифровых сотрудников с именем и характером для Telegram, ВКонтакте, MAX и Instagram. Запуск за 3 дня.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} ${caveat.variable} font-sans antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
        <ChatWidgetTheme />
        <Script
          src="https://widget.saleonbot.ru/widget.js"
          data-api-key="7cfda9a9-6ac9-454a-b68f-b414065c2032"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
