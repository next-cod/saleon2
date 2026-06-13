import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Saleon — цифровые сотрудники с характером",
  description: "Saleon создаёт цифровых сотрудников с именем и характером для Telegram, ВКонтакте, MAX и Instagram. Запуск за 3 дня.",
  openGraph: {
    title: "Saleon — цифровые сотрудники с характером",
    description: "Saleon создаёт цифровых сотрудников с именем и характером для Telegram, ВКонтакте, MAX и Instagram. Запуск за 3 дня.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
