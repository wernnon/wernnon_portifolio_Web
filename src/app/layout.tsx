import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Welyz // Antigravity - Creative Engineering & Mission-Critical Systems",
  description:
    "Portfólio Conceitual Antigravity: Engenharia de software de alta performance, inteligência artificial local, sistemas públicos de larga escala e ecossistemas SaaS corporativos.",
  keywords: [
    "Welyz",
    "Antigravity",
    "Software Engineering",
    "Next.js",
    "Fastify",
    "PostgreSQL",
    "Prisma",
    "Electron",
    "Mission-Critical",
    "Fullstack Engineer"
  ],
  authors: [{ name: "Welyz" }],
  openGraph: {
    title: "Welyz // Antigravity - Creative Engineering",
    description:
      "A convergência entre identidade de alta costura e sistemas de missão crítica.",
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
      </body>
    </html>
  );
}
