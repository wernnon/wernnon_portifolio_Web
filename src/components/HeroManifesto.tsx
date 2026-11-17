"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Terminal, Shield, Cpu, Activity, ChevronDown, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroManifesto() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="apresentacao"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-clover-pattern"
    >
      {/* Dynamic Mouse Spotlight over Clover Monogram */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 520px at ${mousePos.x}% ${mousePos.y}%, rgba(228, 178, 118, 0.10) 0%, rgba(94, 18, 28, 0.28) 45%, transparent 75%)`,
        }}
      />

      {/* Atmospheric Overlays for balance and high legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/80 via-transparent to-[#0D1117] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-burgundy opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161B22]/90 border border-sand/25 shadow-lg shadow-black/40 mb-8 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-sand animate-ping" />
          <span className="text-xs font-sans tracking-wide text-sand-light font-medium">
            Engenharia de Software & Produtos Digitais
          </span>
          <span className="text-sand/40">•</span>
          <span className="text-xs font-mono text-slate-400">Porto Velho — RO</span>
        </div>

        {/* Autoral Calligraphy Signature Card */}
        <div className="relative mb-6 group cursor-default">
          <div className="relative mx-auto w-64 sm:w-80 md:w-96 p-4 rounded-2xl bg-gradient-to-b from-burgundy-deep/70 to-[#161B22]/90 border border-sand/25 shadow-2xl backdrop-blur-md group-hover:border-sand/50 transition-all duration-500">
            {/* Background Monogram Texture Preview */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-25 mix-blend-screen pointer-events-none">
              <img
                src="/assets/images/welyz-monogram-pattern.jpg"
                alt="Padrão Monogramado Autoral"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            {/* Lettering Signature */}
            <div className="relative z-10 flex flex-col items-center justify-center py-2">
              <img
                src="/assets/images/welyz-signature-cropped.png"
                alt="Assinatura Autoral Wernnon Ruiz"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(228,178,118,0.4)]"
              />
              <span className="text-[11px] font-sans font-semibold tracking-wider text-sand/90 mt-1">
                Wernnon Ruiz • Marca Pessoal
              </span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.18] mb-6">
          Engenharia de Software, <br />
          <span className="gold-gradient-text">Arquitetura & Rigor de Produto.</span>
        </h1>

        {/* Core Narrative / Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
          Desenvolvimento de soluções digitais completas — desde sistemas integrados de gestão
          pública e plataformas comerciais até estações utilitárias locais para inteligência artificial.
          Equilíbrio entre valor de negócio, arquitetura resiliente e identidade autoral refinada.
        </p>

        {/* 3 Pillars: Focus on Product, Tech & Business */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-10 text-left">
          <div className="cockpit-card p-5 rounded-xl border border-obsidian-border bg-[#161B22]/85 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-burgundy-glow flex items-center justify-center mb-3">
              <Shield className="w-4 h-4 text-sand" />
            </div>
            <h2 className="text-sm font-semibold text-slate-100 mb-1">
              Sistemas de Gestão & Governança
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plataformas públicas e corporativas com controle granular de acesso, prevenção de evasão e auditoria forense.
            </p>
          </div>

          <div className="cockpit-card p-5 rounded-xl border border-obsidian-border bg-[#161B22]/85 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-sand/30 flex items-center justify-center mb-3">
              <Cpu className="w-4 h-4 text-sand" />
            </div>
            <h2 className="text-sm font-semibold text-slate-100 mb-1">
              Ferramental Avançado & IA Local
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Utilitários desktop para empacotamento de código, cálculo de tokens e higienização estrita de credenciais.
            </p>
          </div>

          <div className="cockpit-card p-5 rounded-xl border border-obsidian-border bg-[#161B22]/85 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-crimson/40 flex items-center justify-center mb-3">
              <Activity className="w-4 h-4 text-sand" />
            </div>
            <h2 className="text-sm font-semibold text-slate-100 mb-1">
              Plataformas SaaS & Hospitalidade
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prevenção matemática de conflitos temporais, automações multicanal de atendimento e retenção gamificada.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projetos"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-burgundy via-burgundy-glow to-burgundy border border-sand/40 hover:border-sand text-sm font-sans font-medium text-white shadow-xl shadow-burgundy/30 hover:shadow-sand/20 transition-all flex items-center gap-2 group"
          >
            <Layers className="w-4 h-4 text-sand group-hover:scale-110 transition-transform" />
            <span>Ver Galeria de Projetos</span>
          </a>

          <a
            href="#competencias"
            className="px-6 py-3.5 rounded-xl bg-[#161B22] hover:bg-obsidian-elevated border border-obsidian-border hover:border-sand/40 text-sm font-sans text-slate-200 transition-all flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald" />
            <span>Visão Geral de Competências</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex flex-col items-center text-slate-500 animate-bounce">
          <span className="text-[10px] font-sans tracking-widest uppercase mb-1">
            Explorar Portfólio
          </span>
          <ChevronDown className="w-4 h-4 text-sand/60" />
        </div>
      </div>
    </section>
  );
}
