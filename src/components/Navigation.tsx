"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Terminal, ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "01. Manifesto", href: "#ato-1-manifesto" },
    { label: "02. Engenharia", href: "#ato-2-engenharia" },
    { label: "03. Estudos de Caso", href: "#ato-3-casos" },
    { label: "04. Developer Lab", href: "#ato-4-lab" },
    { label: "05. Terminal", href: "#ato-5-terminal" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian-deepest/90 backdrop-blur-md border-b border-obsidian-border/70 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Signature */}
          <a
            href="#ato-1-manifesto"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-sand/30 bg-burgundy-deep flex items-center justify-center p-1 group-hover:border-sand transition-all shadow-md shadow-burgundy/30">
              <img
                src="/assets/images/welyz-calligraphy-white.jpg"
                alt="Welyz Signature"
                className="w-full h-full object-contain filter contrast-125"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-sand font-bold">
                  Welyz
                </span>
                <span className="px-1.5 py-0.2 bg-burgundy/80 border border-sand/20 text-[10px] font-mono text-sand-light rounded">
                  v2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Antigravity Engineering
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-obsidian-panel/80 p-1.5 rounded-full border border-obsidian-border/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-mono text-slate-300 hover:text-sand rounded-full hover:bg-obsidian-elevated transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Operational Beacon + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-obsidian-card/80 border border-emerald/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-light">
                Missão Crítica // Ativo
              </span>
            </div>

            <a
              href="#ato-5-terminal"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-sand-light bg-burgundy/90 hover:bg-burgundy-glow border border-sand/30 hover:border-sand rounded-xl shadow-md transition-all group"
            >
              <Terminal className="w-3.5 h-3.5 text-sand" />
              <span>Acessar Terminal</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 bg-obsidian-panel border border-obsidian-border"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-deepest/95 backdrop-blur-xl border-b border-obsidian-border px-6 py-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-mono text-slate-200 hover:text-sand hover:bg-obsidian-panel rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-obsidian-border flex flex-col gap-2.5">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-obsidian-card border border-emerald/30 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                <span className="text-xs font-mono text-emerald-light">
                  Missão Crítica // Ativo
                </span>
              </div>
              <a
                href="#ato-5-terminal"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono text-sand-light bg-burgundy border border-sand/30 rounded-xl"
              >
                <Terminal className="w-4 h-4 text-sand" />
                <span>Acessar Terminal Executivo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
