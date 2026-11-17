"use client";

import { useState } from "react";
import Image from "next/image";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Competências", href: "#competencias" },
    { label: "Ferramental", href: "#ferramental" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#sobre" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded border border-gold/40 bg-burgundy-deep flex items-center justify-center p-1">
            <img
              src="/assets/images/welyz-signature-cropped.png"
              alt="Wernnon Ruiz"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            Wernnon Ruiz
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-white-dim hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contato"
            className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-black bg-gold hover:bg-gold-hover rounded-none transition-colors"
          >
            Falar com Wernnon
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xs uppercase tracking-wider text-gold"
          aria-label="Menu"
        >
          {mobileOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#262626] px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white-muted hover:text-gold py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-2.5 text-center text-xs uppercase tracking-wider text-black bg-gold font-medium"
          >
            Falar com Wernnon
          </a>
        </div>
      )}
    </header>
  );
}
