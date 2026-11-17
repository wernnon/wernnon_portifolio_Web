"use client";

import { useState } from "react";
import { GLOBAL_METRICS } from "@/lib/projectsData";
import {
  Layers,
  Cpu,
  Database,
  Lock,
  LineChart,
  Boxes,
  CheckCircle2,
  Server,
  Zap,
} from "lucide-react";

export function EngineeringMatrix() {
  const architecturePatterns = [
    {
      title: "Trilha Forense Imutável (JSON Diff)",
      description:
        "Registro sistemático de mutações de banco com snapshots anteriores, payload modificado, IP, User-Agent e ID de correlação.",
      scope: "Construindo Campeões (SEMTEL)",
      tag: "Segurança Forense",
    },
    {
      title: "Validação Temporal Anti-Overbooking",
      description:
        "Algoritmo matemático de interseção (startA < endB && endA > startB) executado com concorrência segura em transação de banco.",
      scope: "WLW PRO Hospitalidade",
      tag: "Concorrência & Dados",
    },
    {
      title: "Parsing de AST & Tokenização In-Memory",
      description:
        "Extração semântica de tokens com remoção de antipadrões e isolamento estrito de segredos (.env) 100% offline.",
      scope: "Dev Automation Kit",
      tag: "Engenharia de Compiladores",
    },
    {
      title: "Repository Pattern Híbrido",
      description:
        "Desacoplamento de camada de persistência para alternar dinamicamente entre bancos NoSQL (Firestore) e relacionais (Postgres/MySQL).",
      scope: "Zapp Cidadão ON",
      tag: "Padrão de Projeto",
    },
    {
      title: "Gamificação de Retenção Mobile-First",
      description:
        "Mecanismo de streak de frequência semanal contínua e atribuição de medalhas de tatame em tempo de execução.",
      scope: "Borü Centro de Combate",
      tag: "UX & Algoritmos",
    },
  ];

  const techCategories = [
    {
      category: "Frontend & Web",
      icon: Layers,
      items: ["Next.js 14 (App Router)", "React 18", "Tailwind CSS", "Radix UI / shadcn", "Lucide React"],
    },
    {
      category: "Backend & APIs",
      icon: Server,
      items: ["Node.js 20+ LTS", "Fastify 4 (Low-overhead)", "Express REST", "TypeScript Strict", "Nodemailer"],
    },
    {
      category: "Desktop & IA Local",
      icon: Cpu,
      items: ["Electron 28+ Desktop", "ContextIsolation IPC", "AST Code Parsers", "Sliding Windows CPD"],
    },
    {
      category: "Persistência & Dados",
      icon: Database,
      items: ["PostgreSQL", "Prisma ORM (Adapter-pg)", "SQLite Relacional", "Firebase Firestore"],
    },
    {
      category: "Segurança & Contratos",
      icon: Lock,
      items: ["Zod Schemas", "Fastify Type Provider", "JWT Role-Based Access (RBAC)", "Sanitização LGPD"],
    },
    {
      category: "Visualização & Mensageria",
      icon: LineChart,
      items: ["Recharts Analytics", "Leaflet.js + Heatmaps", "WhatsApp Web.js", "PDFKit Engine"],
    },
  ];

  return (
    <section id="competencias" className="py-24 bg-[#0D1117] relative border-t border-obsidian-border/50">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-burgundy/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161B22] border border-sand/20 text-sand text-xs font-mono mb-4">
            <Boxes className="w-3.5 h-3.5" />
            <span>VISÃO GERAL DE COMPETÊNCIAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
            Stack Tecnológica & Padrões Arquiteturais
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Visão holística das metodologias e tecnologias aplicadas por Wernnon Ruiz no
            desenvolvimento frontend, backend e desktop de alta performance.
          </p>
        </div>

        {/* Global KPIs Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {GLOBAL_METRICS.map((kpi, idx) => (
            <div
              key={idx}
              className="cockpit-card p-6 rounded-2xl relative overflow-hidden group bg-[#161B22]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {kpi.label}
                </span>
                <span className="w-2 h-2 rounded-full bg-sand/60 group-hover:bg-sand group-hover:scale-125 transition-all" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-2 group-hover:text-sand-light transition-colors">
                {kpi.value}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {kpi.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Split Section: Architectural Patterns & Real-Time Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Proven Architecture Patterns (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-obsidian-border">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-sans">
                  <Zap className="w-4 h-4 text-sand" />
                  Padrões Arquiteturais em Produção
                </h3>
                <p className="text-xs text-slate-400">
                  Estruturas implementadas para garantir tolerância a falhas, concorrência e conformidade regulatória.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500">5 Padrões</span>
            </div>

            <div className="space-y-3">
              {architecturePatterns.map((pat, idx) => (
                <div
                  key={idx}
                  className="cockpit-card p-4 rounded-xl border border-obsidian-border hover:border-sand/40 transition-all group bg-[#161B22]"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-sand-light transition-colors flex items-center gap-2 font-sans">
                      <span className="text-xs font-mono text-sand/70">0{idx + 1}.</span>
                      {pat.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-burgundy/60 text-sand border border-burgundy-glow shrink-0">
                      {pat.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2 leading-relaxed font-sans">
                    {pat.description}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                    <CheckCircle2 className="w-3 h-3 text-emerald" />
                    <span>Aplicação: {pat.scope}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Metrics & Telemetry (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between cockpit-card p-6 rounded-2xl border border-obsidian-border bg-[#161B22]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-obsidian-border mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Telemetria Operacional
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-obsidian-elevated px-2 py-0.5 rounded text-sand border border-obsidian-border">
                  PRODUÇÃO ATIVA
                </span>
              </div>

              {/* Synthetic Frequency Curve */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Taxa Média de Presença (SEMTEL)</span>
                  <span className="text-emerald font-semibold">54.8% Frequência</span>
                </div>
                <div className="h-32 w-full bg-[#0D1117] rounded-xl p-3 border border-obsidian-border/70 relative overflow-hidden flex flex-col justify-end">
                  <svg
                    viewBox="0 0 300 80"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 Q25,20 50,45 T100,25 T150,55 T200,15 T250,60 T300,10 L300,80 L0,80 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M0,50 Q25,20 50,45 T100,25 T150,55 T200,15 T250,60 T300,10"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                    />
                  </svg>
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1 border-t border-obsidian-border/60 pt-1">
                    <span>JAN</span>
                    <span>MAR</span>
                    <span>MAI</span>
                    <span>JUL</span>
                    <span>SET</span>
                    <span>NOV</span>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-3.5 mb-6 font-sans">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Isolamento e Higienização (IA Local)</span>
                    <span className="text-sand font-semibold">100% Protegido</span>
                  </div>
                  <div className="w-full h-2 bg-[#0D1117] rounded-full overflow-hidden border border-obsidian-border">
                    <div className="h-full bg-gradient-to-r from-sand-dark to-sand w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Integridade de Reservas (WLW PRO)</span>
                    <span className="text-emerald font-semibold">0% Conflito</span>
                  </div>
                  <div className="w-full h-2 bg-[#0D1117] rounded-full overflow-hidden border border-obsidian-border">
                    <div className="h-full bg-gradient-to-r from-emerald-dark to-emerald w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Auditoria Forense (JSON Diff)</span>
                    <span className="text-crimson-light font-semibold">100% Imutável</span>
                  </div>
                  <div className="w-full h-2 bg-[#0D1117] rounded-full overflow-hidden border border-obsidian-border">
                    <div className="h-full bg-gradient-to-r from-crimson to-crimson-light w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#0D1117] rounded-xl border border-obsidian-border text-xs text-slate-400 font-sans">
              <span className="text-sand font-semibold font-mono">CONTRATOS ESTATICOS:</span> Validação
              de esquemas com Zod na camada de entrada e saída de dados.
            </div>
          </div>
        </div>

        {/* Complete Tech Stack Grid */}
        <div className="pt-8 border-t border-obsidian-border/60">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white font-sans">
                Tecnologias de Domínio Principal
              </h3>
              <p className="text-xs text-slate-400">
                Linguagens, frameworks e bancos de dados utilizados no dia a dia por Wernnon Ruiz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="cockpit-card p-4 rounded-xl border border-obsidian-border bg-[#161B22] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-sand">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-sans font-bold tracking-tight text-slate-200">
                        {cat.category}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-400 font-sans">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-sand/60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
