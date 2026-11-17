"use client";

import Image from "next/image";
import { ArrowUp, Shield, Cookie } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <footer className="relative bg-[#090D14] border-t border-obsidian-border/70 pt-16 pb-12 overflow-hidden">
      {/* Subtle Clover Monogram Background Mask */}
      <div className="absolute inset-0 bg-clover-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-obsidian-border/50">
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-sand/30 bg-burgundy-deep flex items-center justify-center p-1.5">
                <img
                  src="/assets/images/welyz-signature-cropped.png"
                  alt="Wernnon Ruiz Signature"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <span className="font-sans text-base font-bold text-white tracking-tight">
                Wernnon Ruiz <span className="text-sand font-mono font-normal text-xs">// Software & Produto</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Engenharia de software, sistemas de gestão de alto impacto e produtos digitais
              entregues com foco em valor de negócio em Porto Velho - RO.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs text-slate-400">
            <a href="#apresentacao" className="hover:text-sand transition-colors">
              Apresentação
            </a>
            <a href="#projetos" className="hover:text-sand transition-colors">
              Projetos
            </a>
            <a href="#competencias" className="hover:text-sand transition-colors">
              Competências
            </a>
            <a href="#dev-lab" className="hover:text-sand transition-colors">
              Dev Lab
            </a>
            <a href="#contato" className="hover:text-sand transition-colors">
              Contato
            </a>
          </div>

          {/* Actions: Cookie settings & Scroll to top */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openCookiePreferences}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#161B22] border border-obsidian-border hover:border-sand/40 text-xs font-sans text-slate-300 hover:text-sand transition-all"
              title="Ajustar consentimento e política de cookies"
            >
              <Cookie className="w-3.5 h-3.5 text-sand" />
              <span>Cookies</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161B22] border border-obsidian-border hover:border-sand/40 text-xs font-sans text-slate-300 hover:text-sand transition-all group"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-sand" />
            <span>
              Conformidade com LGPD • Next.js 14 • Fastify • PostgreSQL • Electron Desktop
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Wernnon Ruiz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
