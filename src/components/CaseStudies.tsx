"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectCase } from "@/lib/projectsData";
import { ImageLightbox } from "./ImageLightbox";

export function CaseStudies() {
  const [activeId, setActiveId] = useState<string>(PROJECTS_DATA[0].id);
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

  const activeProject = PROJECTS_DATA.find((p) => p.id === activeId) || PROJECTS_DATA[0];

  return (
    <section id="projetos" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-3">
            02 / Projetos em Produção
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl">
            Soluções digitais entregues e operacionais.
          </h2>
          <p className="text-sm text-white-dim mt-3 max-w-2xl leading-relaxed">
            Aplicações desenvolvidas para atender demandas reais nos setores público, corporativo e técnico.
            Cada sistema é demonstrado com dados e telas autênticas de produção.
          </p>
        </div>

        {/* Vertical Editorial Selector (No side-scrolling, wraps cleanly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 pb-8 border-b border-[#262626] mb-12">
          {PROJECTS_DATA.map((proj, idx) => {
            const isSelected = proj.id === activeId;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveId(proj.id)}
                className={`text-left p-4 transition-colors border ${
                  isSelected
                    ? "bg-[#180407] border-gold text-white"
                    : "bg-[#121212] border-[#262626] text-white-dim hover:text-white hover:border-[#404040]"
                }`}
              >
                <span className="text-[10px] font-mono block text-gold mb-1">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold block leading-snug">
                  {proj.title}
                </span>
                <span className="text-[11px] text-white-dim block mt-1 font-mono">
                  {proj.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Project Content */}
        <div className="space-y-12">
          {/* Title and Scope Metadata */}
          <div className="border-b border-[#262626] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase text-gold">
                {activeProject.category} • {activeProject.period}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                {activeProject.title}
              </h3>
              <p className="text-sm text-white-dim mt-2 max-w-2xl leading-relaxed">
                {activeProject.summary}
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <span className="text-xs font-mono text-white-dim block">Escopo / Cliente</span>
              <span className="text-xs font-semibold text-white block mt-1">
                {activeProject.clientOrScope}
              </span>
            </div>
          </div>

          {/* Real Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-[#262626]">
            {activeProject.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-xs font-mono text-white-dim block mb-1 uppercase tracking-wider">
                  {m.label}
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white block">
                  {m.value}
                </span>
                {m.detail && (
                  <span className="text-xs text-white-dim block mt-1">
                    {m.detail}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Two-Column Problem & Solution Editorial Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-white-muted">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                Desafio Operacional
              </h4>
              <p>{activeProject.problem}</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                Solução de Engenharia
              </h4>
              <p>{activeProject.solution}</p>
            </div>
          </div>

          {/* Real Uncropped Screenshots */}
          {activeProject.images.length > 0 ? (
            <div className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                  Registros Visuais em Produção
                </h4>
                <span className="text-[11px] font-mono text-white-dim">
                  Clique para inspecionar
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeProject.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      setLightbox({
                        isOpen: true,
                        src: img.src,
                        alt: img.alt,
                        caption: img.caption,
                        projectTitle: activeProject.title,
                      })
                    }
                    className="border border-[#262626] bg-[#121212] p-2 cursor-pointer hover:border-gold transition-colors group"
                  >
                    <div className="overflow-hidden bg-black">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform"
                      />
                    </div>
                    <p className="text-xs text-white-dim p-3 leading-relaxed border-t border-[#262626] mt-2">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Zapp Cidadão ON Civic Dispatch Simulation */
            <div className="pt-6 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                Fluxo de Atendimento Cívico e Protocolo
              </h4>
              <div className="border border-[#262626] p-6 bg-[#121212] grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono">
                <div className="space-y-3 border-r md:border-[#262626] pr-4">
                  <p className="text-gold font-semibold uppercase">Triagem Automatizada</p>
                  <p className="text-white-dim">Canal: WhatsApp Web.js (Porto Velho)</p>
                  <p className="text-white-dim">Demanda: Manutenção e Obras Públicas</p>
                  <p className="text-white-dim">Localização: Coordenadas GPS (-8.7619, -63.9039)</p>
                  <p className="text-white">Status: Encaminhado à Secretaria Responsável</p>
                </div>
                <div className="space-y-3">
                  <p className="text-gold font-semibold uppercase">Segurança & Regulação</p>
                  <p className="text-white">Protocolo: ZC-BURA-171126-K89F</p>
                  <p className="text-white-dim">Anonimização LGPD: 5569****1234</p>
                  <p className="text-white-dim">Mapeamento: Geoprocessamento via Leaflet</p>
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack List */}
          <div className="pt-6 border-t border-[#262626] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-white-dim mr-2">Tecnologias:</span>
            {activeProject.techStack.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono text-white-muted bg-[#121212] border border-[#262626]"
              >
                {t.name}
              </span>
            ))}
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
