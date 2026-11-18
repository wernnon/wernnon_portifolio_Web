"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectCase } from "@/lib/projectsData";
import { ImageLightbox } from "./ImageLightbox";

export function CaseStudies() {
  const [activeId, setActiveId] = useState<string>(PROJECTS_DATA[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightbox, setLightbox] = useState<{
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

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === activeId);
  const activeProject = PROJECTS_DATA[currentIndex] || PROJECTS_DATA[0];

  const handleSelectProject = (id: string) => {
    setActiveId(id);
    setActiveImageIndex(0);
  };

  const handlePrevProject = () => {
    const prevIdx = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    handleSelectProject(PROJECTS_DATA[prevIdx].id);
  };

  const handleNextProject = () => {
    const nextIdx = (currentIndex + 1) % PROJECTS_DATA.length;
    handleSelectProject(PROJECTS_DATA[nextIdx].id);
  };

  const currentImage = activeProject.images[activeImageIndex] || activeProject.images[0];

  return (
    <section id="projetos" className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-2">
            02 / Projetos em Produção
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-2xl">
                Soluções digitais entregues e operacionais.
              </h2>
              <p className="text-xs sm:text-sm text-white-dim mt-2 max-w-2xl leading-relaxed">
                Aplicações desenvolvidas para atender demandas reais nos setores público, corporativo e técnico.
                Alterne entre os projetos para inspecionar interfaces autênticas e expectativas de desempenho.
              </p>
            </div>
            {/* Quick Pager Controls (Header) */}
            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 font-mono text-xs">
              <span className="text-white-dim mr-2">
                Projeto <span className="text-gold font-bold">0{currentIndex + 1}</span> / 0{PROJECTS_DATA.length}
              </span>
              <button
                onClick={handlePrevProject}
                className="px-3 py-1.5 border border-[#262626] bg-[#121212] text-white-dim hover:text-white hover:border-gold transition-colors flex items-center gap-1"
                title="Projeto Anterior"
              >
                <span>←</span>
                <span className="hidden sm:inline">Anterior</span>
              </button>
              <button
                onClick={handleNextProject}
                className="px-3 py-1.5 border border-[#262626] bg-[#121212] text-white-dim hover:text-white hover:border-gold transition-colors flex items-center gap-1"
                title="Próximo Projeto"
              >
                <span className="hidden sm:inline">Próximo</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Persistent Project Selector Bar (Wrap-safe, frictionless switching) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pb-6 border-b border-[#262626] mb-8">
          {PROJECTS_DATA.map((proj, idx) => {
            const isSelected = proj.id === activeId;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelectProject(proj.id)}
                className={`text-left p-3 sm:p-3.5 transition-all border ${
                  isSelected
                    ? "bg-[#180407] border-gold text-white shadow-sm"
                    : "bg-[#121212] border-[#262626] text-white-dim hover:text-white hover:border-[#404040]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono ${isSelected ? "text-gold font-bold" : "text-white-dim"}`}>
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {proj.projectUrl && (
                      <span className="text-[10px] font-mono text-gold" title="Possui página online">
                        ↗
                      </span>
                    )}
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    )}
                  </div>
                </div>
                <span className="text-xs font-semibold block leading-tight truncate">
                  {proj.title}
                </span>
                <span className="text-[10px] text-white-dim block mt-0.5 font-mono truncate">
                  {proj.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Balanced Split View: Details (Left) + Visual Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Project Overview, Metrics & Engineering (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Title & Scope */}
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-gold mb-1">
                <span>{activeProject.category}</span>
                <span>•</span>
                <span>{activeProject.period}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-xs font-mono text-white-dim mt-1">
                Escopo: <span className="text-white-muted">{activeProject.clientOrScope}</span>
              </p>
              <p className="text-xs sm:text-sm text-white-muted mt-3 leading-relaxed">
                {activeProject.summary}
              </p>

              {/* External Project URL & Repo Action Buttons (if project possesses them) */}
              {(activeProject.projectUrl || activeProject.repoUrl) && (
                <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-3 border-t border-[#262626]">
                  {activeProject.projectUrl && (
                    <a
                      href={activeProject.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-black bg-gold hover:bg-white transition-colors border border-gold"
                    >
                      <span>Acessar Página do Projeto</span>
                      <span className="text-sm leading-none">↗</span>
                    </a>
                  )}
                  {activeProject.repoUrl && (
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-white-dim hover:text-white bg-[#121212] hover:border-gold transition-colors border border-[#262626]"
                    >
                      <span>Página Oficial</span>
                      <span className="text-sm leading-none">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Performance Expectation Metrics (2x2 Grid) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-semibold">
                  Expectativas de Desempenho & Impacto
                </span>
                <span className="text-[10px] font-mono text-white-dim">
                  Estimativas Projetadas
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {activeProject.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#121212] border border-[#262626] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-white-dim uppercase tracking-wider block mb-1 leading-tight line-clamp-1" title={m.label}>
                        {m.label}
                      </span>
                      <span className="text-base sm:text-lg font-mono font-bold text-gold block leading-tight">
                        {m.value}
                      </span>
                    </div>
                    {m.detail && (
                      <span className="text-[10px] text-white-dim block mt-1.5 leading-snug">
                        {m.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Challenge & Engineering Solution */}
            <div className="space-y-4 pt-2 border-t border-[#262626]">
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-gold font-semibold mb-1">
                  Desafio Operacional
                </h4>
                <p className="text-xs text-white-dim leading-relaxed">
                  {activeProject.problem}
                </p>
              </div>
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-gold font-semibold mb-1">
                  Solução de Engenharia
                </h4>
                <p className="text-xs text-white-dim leading-relaxed">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-2">
              <span className="text-[10px] font-mono text-white-dim block mb-2 uppercase tracking-wider">
                Tecnologias Utilizadas
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.techStack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[11px] font-mono text-white-dim bg-[#121212] border border-[#262626]"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Screenshots (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {activeProject.images.length > 0 ? (
              <div className="space-y-3">
                {/* Visual Header & Image Switcher Tabs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#262626]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-semibold">
                      Registro Visual em Produção
                    </span>
                    {activeProject.images.length > 1 && (
                      <span className="text-[10px] font-mono text-white-dim">
                        ({activeImageIndex + 1}/{activeProject.images.length})
                      </span>
                    )}
                    {activeProject.projectUrl && (
                      <a
                        href={activeProject.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-gold hover:text-white transition-colors flex items-center gap-0.5"
                        title="Visitar página do projeto"
                      >
                        <span>[Acessar página ↗]</span>
                      </a>
                    )}
                  </div>

                  {/* Multi-image navigation pills if project has > 1 screenshot */}
                  {activeProject.images.length > 1 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {activeProject.images.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => setActiveImageIndex(imgIdx)}
                          className={`px-2.5 py-1 text-[10px] font-mono transition-colors border ${
                            activeImageIndex === imgIdx
                              ? "bg-gold text-black font-semibold border-gold"
                              : "bg-[#121212] text-white-dim border-[#262626] hover:text-white hover:border-[#404040]"
                          }`}
                        >
                          Visão 0{imgIdx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Screenshot Display Box with Clean Aspect and Lightbox Trigger */}
                <div
                  onClick={() =>
                    setLightbox({
                      isOpen: true,
                      src: currentImage.src,
                      alt: currentImage.alt,
                      caption: currentImage.caption,
                      projectTitle: activeProject.title,
                    })
                  }
                  className="relative border border-[#262626] bg-[#000000] p-2 cursor-pointer hover:border-gold transition-colors group flex items-center justify-center overflow-hidden"
                  style={{ minHeight: "360px", maxHeight: "500px" }}
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-auto max-h-[460px] object-contain block mx-auto group-hover:scale-[1.01] transition-transform duration-200"
                  />

                  {/* Zoom indicator on hover */}
                  <div className="absolute top-4 right-4 bg-black/80 border border-[#404040] px-2.5 py-1 text-[11px] font-mono text-white-dim opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 backdrop-blur-sm">
                    <span>Inspecionar</span>
                    <span className="text-gold">⤢</span>
                  </div>
                </div>

                {/* Image Caption and Lightbox Action */}
                <div className="flex items-start justify-between gap-4 p-3 bg-[#121212] border border-[#262626]">
                  <p className="text-xs text-white-dim leading-relaxed">
                    <span className="text-white font-medium block sm:inline mr-1">
                      {currentImage.alt}:
                    </span>
                    {currentImage.caption}
                  </p>
                  <button
                    onClick={() =>
                      setLightbox({
                        isOpen: true,
                        src: currentImage.src,
                        alt: currentImage.alt,
                        caption: currentImage.caption,
                        projectTitle: activeProject.title,
                      })
                    }
                    className="shrink-0 text-[11px] font-mono text-gold hover:underline self-end sm:self-auto"
                  >
                    Ampliar ⤢
                  </button>
                </div>
              </div>
            ) : (
              /* Zapp Cidadão ON Interactive Civic Dispatch Showcase */
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-semibold">
                    Fluxo de Atendimento Cívico & Geoprocessamento
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    ● Canal Ativo
                  </span>
                </div>

                <div className="border border-[#262626] bg-[#000000] p-6 font-mono text-xs space-y-5" style={{ minHeight: "380px" }}>
                  <div className="border-b border-[#262626] pb-4 flex items-center justify-between text-white-dim">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-white font-semibold">Zapp Cidadão ON • Motor de Zeladoria</span>
                    </div>
                    <span className="text-[11px] text-gold">Protocolo Unificado</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3 p-4 bg-[#121212] border border-[#262626]">
                      <p className="text-gold font-semibold uppercase text-[11px]">Triagem & Georreferenciamento</p>
                      <div className="space-y-1.5 text-white-dim text-[11px]">
                        <p><span className="text-white">Canal:</span> WhatsApp Web.js (Porto Velho - RO)</p>
                        <p><span className="text-white">Demanda:</span> Descarte irregular / Iluminação pública</p>
                        <p><span className="text-white">GPS:</span> -8.7619° S, -63.9039° W (Bairro Embratel)</p>
                        <p><span className="text-white">Despacho:</span> Roteirização via Leaflet Heatmap</p>
                        <p><span className="text-emerald-400">Status:</span> Encaminhado à Secretaria Municipal</p>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 bg-[#121212] border border-[#262626]">
                      <p className="text-gold font-semibold uppercase text-[11px]">Segurança & Conformidade LGPD</p>
                      <div className="space-y-1.5 text-white-dim text-[11px]">
                        <p><span className="text-white">Protocolo:</span> <span className="text-gold font-bold">ZC-ZELA-2026-F91A</span></p>
                        <p><span className="text-white">Anonimização:</span> 5569****1234 (Hashing SHA-256)</p>
                        <p><span className="text-white">Persistência:</span> Firestore (Realtime) + Postgres</p>
                        <p><span className="text-white">Acompanhamento:</span> Consulta direta pelo munícipe</p>
                        <p><span className="text-emerald-400">Privacidade:</span> Zero dados expostos publicamente</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#180407] border border-gold/40 text-[11px] text-white-muted leading-relaxed">
                    <span className="text-gold font-semibold">Impacto Operacional:</span> Eliminação de triagens burocráticas com redução de ~60% no tempo de despacho de equipes municipais e total rastreabilidade do protocolo para o cidadão.
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Quick Switcher Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-[#262626] font-mono text-xs">
              <button
                onClick={handlePrevProject}
                className="text-white-dim hover:text-gold transition-colors flex items-center gap-1.5"
              >
                <span>←</span>
                <span>Anterior: {PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length].title}</span>
              </button>
              <button
                onClick={handleNextProject}
                className="text-white-dim hover:text-gold transition-colors flex items-center gap-1.5"
              >
                <span>Próximo: {PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length].title}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        imageSrc={lightbox.src}
        imageAlt={lightbox.alt}
        caption={lightbox.caption}
        projectTitle={lightbox.projectTitle}
      />
    </section>
  );
}