import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wernnon Ruiz | Engenharia de Software e Arquitetura de Sistemas",
  description:
    "Portfólio de engenharia de software de Wernnon Ruiz. Projetos em produção abrangendo gestão pública, inteligência artificial local, hospitalidade e tecnologia cívica.",
  keywords: [
    "Wernnon Ruiz",
    "Engenheiro de Software",
    "Arquitetura de Sistemas",
    "Next.js",
    "Fastify",
    "TypeScript",
    "PostgreSQL",
    "Electron",
    "Porto Velho",
    "Rondônia"
  ],
  authors: [{ name: "Wernnon Ruiz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth bg-black ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#E4B276] selection:text-[#0A0A0A]">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

