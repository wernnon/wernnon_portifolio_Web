import type { Metadata } from "next";
import "../styles/globals.css";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Wernnon Ruiz — Engenheiro de Software & Arquiteto de Soluções",
  description:
    "Portfólio Profissional de Wernnon Ruiz: Concepção e entrega de plataformas de missão crítica, sistemas integrados de gestão, IA local e ecossistemas SaaS corporativos.",
  keywords: [
    "Wernnon Ruiz",
    "Engenheiro de Software",
    "Arquiteto de Soluções",
    "Fullstack Engineer",
    "Next.js",
    "Fastify",
    "TypeScript",
    "PostgreSQL",
    "Electron",
    "Porto Velho",
    "Rondônia"
  ],
  authors: [{ name: "Wernnon Ruiz" }],
  openGraph: {
    title: "Wernnon Ruiz — Engenharia de Software & Produtos Digitais",
    description:
      "Soluções digitais completas unindo engenharia de software de alta performance, clareza de métricas e identidade autoral refinada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian-deepest text-slate-200 antialiased font-sans selection:bg-sand selection:text-burgundy-darkest">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
