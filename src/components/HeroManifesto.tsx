"use client";

import Image from "next/image";

export function HeroManifesto() {
  return (
    <section
      id="sobre"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/hero-bg-editorial-pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Editorial subtle contrast veil to guarantee AAA text legibility on the left while keeping pattern visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Text (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-xs font-mono uppercase tracking-widest text-gold">
              01 / Apresentação e Diretriz
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Engenharia de software, arquitetura de sistemas e produtos digitais.
            </h1>

            <p className="text-lg text-white leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              Meu nome é Wernnon Ruiz. Atuo na concepção, arquitetura e entrega de sistemas
              computacionais de ponta a ponta. Minha prática abrange desde plataformas de gestão
              socioesportiva em escala municipal e sistemas comerciais de alta concorrência até
              ferramental desktop para auditoria de código e inteligência artificial local.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-white-dim border-t border-white/15">
              <div>
                <span className="text-white block font-sans font-semibold">Localização</span>
                <span>Porto Velho, Rondônia</span>
              </div>
              <div>
                <span className="text-white block font-sans font-semibold">Foco</span>
                <span>Sistemas de Produção e Ferramental</span>
              </div>
              <div>
                <span className="text-white block font-sans font-semibold">Atuação</span>
                <span>Remoto e Presencial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Logo & Text directly over the pattern (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            {/* Logo and Brand Text without background or border, letting the section pattern be the background */}
            <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-center">
              <div className="w-full max-w-[240px] mb-4">
                <img
                  src="/assets/images/welyz-signature-cropped.png"
                  alt="Assinatura Autoral Wernnon Ruiz"
                  className="w-full h-auto object-contain mx-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                Wernnon Ruiz
              </p>
              <p className="text-xs text-white/80 mt-1 font-sans">
                Marca Autoral • Estúdio de Engenharia
              </p>
            </div>

            {/* Engineering Standard Note */}
            <div className="border border-[#333333] p-6 bg-black/80 backdrop-blur-sm text-xs text-white-dim leading-relaxed space-y-2">
              <p className="text-white font-medium text-xs font-mono uppercase tracking-wider">
                Critério de Engenharia
              </p>
              <p>
                Prioridade à estabilidade de banco relacional, contratos de dados estritos via Zod,
                trilhas forenses imutáveis e respeito total à privacidade de dados segundo a LGPD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
