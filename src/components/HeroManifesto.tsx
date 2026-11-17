"use client";

import Image from "next/image";

export function HeroManifesto() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Text (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-xs font-mono uppercase tracking-widest text-gold">
              01 / Apresentação e Diretriz
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Engenharia de software, arquitetura de sistemas e produtos digitais.
            </h1>

            <p className="text-lg text-white-muted leading-relaxed max-w-2xl font-normal">
              Meu nome é Wernnon Ruiz. Atuo na concepção, arquitetura e entrega de sistemas
              computacionais de ponta a ponta. Minha prática abrange desde plataformas de gestão
              socioesportiva em escala municipal e sistemas comerciais de alta concorrência até
              ferramental desktop para auditoria de código e inteligência artificial local.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-white-dim border-t border-[#262626]">
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

          {/* Right Column: Signature Plate (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div className="bg-[#180407] border border-gold/30 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-full max-w-[200px] mb-4">
                <img
                  src="/assets/images/welyz-signature-cropped.png"
                  alt="Assinatura Autoral Wernnon Ruiz"
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-gold">
                Wernnon Ruiz
              </p>
              <p className="text-xs text-white-dim mt-1">
                Marca Autoral e Estúdio de Engenharia
              </p>
            </div>

            <div className="border border-[#262626] p-6 bg-[#121212] text-xs text-white-dim leading-relaxed space-y-2">
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
