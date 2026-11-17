"use client";

import Image from "next/image";
import { ArrowUp, Shield } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-obsidian-deepest border-t border-obsidian-border/70 pt-16 pb-12 overflow-hidden">
      {/* Subtle Clover Monogram Background Mask */}
      <div className="absolute inset-0 bg-clover-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-obsidian-border/50">
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-sand/30 bg-burgundy-deep flex items-center justify-center p-1">
                <img
                  src="/assets/images/welyz-calligraphy-white.jpg"
                  alt="Welyz Signature"
                  className="w-full h-full object-contain filter contrast-125"
                />
              </div>
              <span className="font-mono text-base font-bold text-white tracking-widest uppercase">
                Welyz <span className="text-sand">// Antigravity</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Estúdio conceitual de engenharia de software e tecnologia criativa.
              Concepção e entrega de sistemas de missão crítica em Porto Velho - RO.
            </p>
          </div>

          {/* Quick Act Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
            <a href="#ato-1-manifesto" className="hover:text-sand transition-colors">
              01. Manifesto
            </a>
            <a href="#ato-2-engenharia" className="hover:text-sand transition-colors">
              02. Matrix
            </a>
            <a href="#ato-3-casos" className="hover:text-sand transition-colors">
              03. Casos Reais
            </a>
            <a href="#ato-4-lab" className="hover:text-sand transition-colors">
              04. Developer Lab
            </a>
            <a href="#ato-5-terminal" className="hover:text-sand transition-colors">
              05. Terminal
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-panel border border-obsidian-border hover:border-sand/40 text-xs font-mono text-slate-300 hover:text-sand transition-all group"
          >
            <span>Retornar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-sand" />
            <span>
              Arquitetura em conformidade com LGPD • Fastify • Next.js • PostgreSQL • Electron
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Welyz. Iniciativa Antigravity. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
