"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectCase } from "@/lib/projectsData";
import { ImageLightbox } from "./ImageLightbox";
import {
  Layers,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Code2,
  Maximize2,
  Sliders,
  ChevronRight,
  Database,
  Cpu,
  ShieldCheck,
  Calendar,
  Building2,
} from "lucide-react";

export function CaseStudies() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS_DATA[0].id);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    caption?: string;
    projectTitle?: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
  });

  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  const openLightbox = (imgSrc: string, imgAlt: string, caption?: string, projectTitle?: string) => {
    setLightboxData({
      isOpen: true,
      src: imgSrc,
      alt: imgAlt,
      caption,
      projectTitle,
    });
  };

  return (
    <section id="ato-3-casos" className="py-24 bg-obsidian-deepest relative border-t border-obsidian-border/50">
      {/* Background Monogram Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-burgundy/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-panel border border-sand/20 text-sand text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>ATO 3 // ESTUDOS DE CASO EM PROFUNDIDADE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Deep-Dive Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Cinco sistemas reais em produção, projetados sob demanda para setores de alta
            responsabilidade: poder público municipal, inteligência artificial local, hospitalidade e esportes.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
          {PROJECTS_DATA.map((proj) => {
            const isActive = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-burgundy text-sand-light border-sand shadow-lg shadow-burgundy/40"
                    : "bg-obsidian-card text-slate-400 border-obsidian-border hover:border-sand/30 hover:text-slate-200"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? "bg-sand animate-ping" : "bg-slate-600"
                  }`}
                />
                <span className="font-semibold">{proj.title}</span>
                <span className="text-[10px] opacity-70 hidden md:inline">
                  [{proj.category}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project Card Container */}
        <div className="cockpit-card rounded-3xl p-6 sm:p-8 md:p-10 border border-obsidian-border bg-obsidian-card/95 relative overflow-hidden shadow-2xl">
          {/* Top Metadata Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-obsidian-border mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded bg-sand/10 border border-sand/30 text-sand font-mono text-xs font-semibold">
                  {activeProject.category}
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald/10 border border-emerald/30 text-emerald-light font-mono text-xs">
                  {activeProject.status}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeProject.period}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-sm font-mono text-sand/80 mt-1">
                {activeProject.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 bg-obsidian-panel p-3 rounded-xl border border-obsidian-border">
              <Building2 className="w-4 h-4 text-sand" />
              <div>
                <p className="text-[10px] uppercase text-slate-500">Cliente / Escopo</p>
                <p className="font-semibold text-slate-200">{activeProject.clientOrScope}</p>
              </div>
            </div>
          </div>

          {/* Project Metrics Quick Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {activeProject.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-obsidian-panel/80 p-4 rounded-xl border border-obsidian-border/70"
              >
                <p className="text-xs font-mono text-slate-400 mb-1">{metric.label}</p>
                <p className="text-xl sm:text-2xl font-bold font-mono text-sand-light">
                  {metric.value}
                </p>
                {metric.detail && (
                  <p className="text-[11px] text-slate-500 mt-1">{metric.detail}</p>
                )}
              </div>
            ))}
          </div>

          {/* Problem, Solution & Architecture Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Left Column: Problem & Solution (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-5 rounded-2xl bg-obsidian-panel border border-obsidian-border/80">
                <div className="flex items-center gap-2 text-crimson mb-2 font-mono text-xs font-semibold uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>Desafio de Engenharia</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeProject.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-obsidian-panel border border-sand/20">
                <div className="flex items-center gap-2 text-sand mb-2 font-mono text-xs font-semibold uppercase">
                  <CheckCircle className="w-4 h-4" />
                  <span>Solução de Software Implementada</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeProject.solution}
                </p>
              </div>

              {/* Technical Highlights list */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sand" />
                  Destaques da Arquitetura
                </h4>
                <ul className="space-y-2">
                  {activeProject.architectureHighlights.map((hl, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-300 flex items-start gap-2.5 bg-obsidian-deepest/60 p-2.5 rounded-lg border border-obsidian-border/50"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sand mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Code Snippet & Interactive Architecture Flow (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              {/* Code Snippet Box */}
              {activeProject.interactiveSnippet && (
                <div className="rounded-2xl bg-obsidian-deepest border border-obsidian-border overflow-hidden shadow-xl flex flex-col h-full">
                  <div className="flex items-center justify-between px-4 py-3 bg-obsidian-panel/90 border-b border-obsidian-border text-xs font-mono">
                    <div className="flex items-center gap-2 text-sand">
                      <Code2 className="w-4 h-4" />
                      <span className="font-semibold">
                        {activeProject.interactiveSnippet.title}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase text-slate-400 bg-obsidian-card px-2 py-0.5 rounded border border-obsidian-border">
                      {activeProject.interactiveSnippet.language}
                    </span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed flex-1 selection:bg-sand selection:text-burgundy-darkest">
                    <code>{activeProject.interactiveSnippet.code}</code>
                  </pre>
                  <div className="px-4 py-2 bg-obsidian-panel/60 border-t border-obsidian-border text-[11px] font-mono text-slate-400 flex justify-between">
                    <span>STATUS: VALIDADO EM PRODUÇÃO</span>
                    <span className="text-emerald font-semibold">PASS: 100%</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Real Operational Screenshots Section */}
          {activeProject.images.length > 0 && (
            <div className="pt-8 border-t border-obsidian-border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-sand" />
                    Capturas Reais dos Cockpits em Produção
                  </h4>
                  <p className="text-xs text-slate-400">
                    Clique em qualquer interface para inspecionar em tela cheia com alta resolução.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeProject.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      openLightbox(
                        img.src,
                        img.alt,
                        img.caption,
                        activeProject.title
                      )
                    }
                    className="group relative rounded-2xl overflow-hidden border border-obsidian-border bg-black cursor-pointer hover:border-sand/50 transition-all shadow-lg hover:shadow-2xl"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden bg-obsidian-deepest relative">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-sand backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-3.5 bg-obsidian-panel/90 border-t border-obsidian-border">
                      <p className="text-xs text-slate-300 font-sans leading-tight">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Tech Stack Tags */}
          <div className="mt-8 pt-6 border-t border-obsidian-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Stack do Projeto:</span>
            {activeProject.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-obsidian-panel border border-obsidian-border text-xs font-mono text-slate-300"
              >
                {tech.name}{" "}
                <span className="text-slate-500 text-[10px]">({tech.category})</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Global Image Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData({ ...lightboxData, isOpen: false })}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        caption={lightboxData.caption}
        projectTitle={lightboxData.projectTitle}
      />
    </section>
  );
}
