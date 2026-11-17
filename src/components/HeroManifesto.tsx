"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Terminal, Shield, Cpu, Activity, ChevronDown, Layers, Sparkles } from "lucide-react";

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
      id="ato-1-manifesto"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-clover-pattern"
    >
      {/* Dynamic Mouse Spotlight over Clover Monogram */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}% ${mousePos.y}%, rgba(228, 178, 118, 0.12) 0%, rgba(94, 18, 28, 0.35) 45%, transparent 75%)`,
        }}
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deepest/70 via-transparent to-obsidian-deepest pointer-events-none" />
      <div className="absolute inset-0 bg-radial-burgundy opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-panel/90 border border-sand/30 shadow-lg shadow-burgundy/20 mb-8 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-sand animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-sand-light font-medium">
            Iniciativa Antigravity // Engenharia de Vanguarda
          </span>
          <span className="text-sand/40">•</span>
          <span className="text-xs font-mono text-slate-400">Porto Velho - RO</span>
        </div>

        {/* Welyz Visual Monogram Signature */}
        <div className="relative mb-6 group cursor-default">
          <div className="relative mx-auto w-64 sm:w-80 md:w-96 p-4 rounded-2xl bg-gradient-to-b from-burgundy-deep/60 to-obsidian-panel/90 border border-sand/30 shadow-2xl backdrop-blur-md group-hover:border-sand/60 transition-all duration-500">
            {/* Background Monogram Texture Preview */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-30 mix-blend-screen pointer-events-none">
              <img
                src="/assets/images/welyz-monogram-pattern.jpg"
                alt="Welyz Monogram Pattern"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            {/* Lettering Signature */}
            <div className="relative z-10 flex flex-col items-center justify-center py-2">
              <img
                src="/assets/images/welyz-calligraphy-white.jpg"
                alt="Welyz Brandmark"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(228,178,118,0.4)]"
              />
              <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-sand/80 mt-1">
                Atelier de Software & Sistemas
              </span>
            </div>
          </div>
        </div>

        {/* Main Manifesto Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          Precisão Arquitetural. <br />
          <span className="gold-gradient-text">Rigor Estético & Missão Crítica.</span>
        </h1>

        {/* Manifesto Core Thesis */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
          A convergência definitiva entre monogramas táteis de alta costura e cockpits
          analíticos de missão crítica. Construção de plataformas governamentais em escala
          municipal, ferramentas de IA com processamento 100% local e ecossistemas SaaS corporativos.
        </p>

        {/* Three Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-10 text-left">
          <div className="cockpit-card p-5 rounded-xl border border-obsidian-border bg-obsidian-card/80 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-burgundy-glow flex items-center justify-center mb-3">
              <Shield className="w-4 h-4 text-sand" />
            </div>
            <h2 className="text-sm font-semibold text-slate-100 mb-1">
              Missão Crítica & Governança
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sistemas públicos de larga escala com auditoria forense JSON Diff e estrita conformidade com a LGPD.
            </p>
          </div>

          <div className="cockpit-card p-5 rounded-xl border border-obsidian-border bg-obsidian-card/80 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-sand/30 flex items-center justify-center mb-3">
              <Cpu className="w-4 h-4 text-sand" />
            </div>
            <h2 className="text-sm font-semibold text-slate-100 mb-1">
              IA Local & Engenharia de AST
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Compiladores de contexto e higienização de tokens rodando 100% offline para LLMs de última geração.
            </p>
          </div>

          <div className="cockpit-card p-5 rounded-xl border border-obsidian-border bg-obsidian-card/80 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-crimson/40 flex items-center justify-center mb-3">
              <Activity className="w-4 h-4 text-sand" />
            </div>
            <h2 className="text-sm font-semibold text-slate-100 mb-1">
              Ecossistemas SaaS Resilientes
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prevenção matemática de conflitos temporais e interfaces de alta densidade instrumental.
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ato-3-casos"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-burgundy via-burgundy-glow to-burgundy border border-sand/40 hover:border-sand text-sm font-mono font-medium text-white shadow-xl shadow-burgundy/30 hover:shadow-sand/20 transition-all flex items-center gap-2 group"
          >
            <Layers className="w-4 h-4 text-sand group-hover:scale-110 transition-transform" />
            <span>Explorar os 5 Estudos de Caso</span>
          </a>

          <a
            href="#ato-4-lab"
            className="px-6 py-3.5 rounded-xl bg-obsidian-panel/90 hover:bg-obsidian-elevated border border-obsidian-border hover:border-sand/40 text-sm font-mono text-slate-200 transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-emerald" />
            <span>Interagir com Developer Lab</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex flex-col items-center text-slate-500 animate-bounce">
          <span className="text-[10px] font-mono tracking-widest uppercase mb-1">
            Explorar Atos
          </span>
          <ChevronDown className="w-4 h-4 text-sand/60" />
        </div>
      </div>
    </section>
  );
}
