import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Realeast — Ваш проводник в бизнес-среду ОАЭ",
  description: "Консалтинговые услуги по открытию и сопровождению бизнеса в ОАЭ. Регистрация компаний, визы, лицензии, легализация документов.",
  keywords: ["бизнес в ОАЭ", "регистрация компании в ОАЭ", "виза ОАЭ", "фризона ОАЭ", "консалтинг ОАЭ", "Dubai business setup"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-dark">{children}</body>
    </html>
  );
}
