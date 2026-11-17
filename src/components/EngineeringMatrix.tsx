"use client";

export function EngineeringMatrix() {
  const technicalAreas = [
    {
      title: "Frontend e Web",
      items: ["Next.js 14 (App Router)", "React 18", "TypeScript", "Tailwind CSS"],
      description: "Interfaces com foco em velocidade de renderização, controle de estado e acessibilidade.",
    },
    {
      title: "Backend e APIs",
      items: ["Node.js 20 LTS", "Fastify 4", "Express REST", "Zod"],
      description: "Serviços de baixo overhead com contratos estritos de entrada e saída validados em tempo de execução.",
    },
    {
      title: "Desktop e Ferramental Local",
      items: ["Electron 28+", "Node.js fs nativo", "ContextIsolation IPC", "AST Parsing"],
      description: "Estações de trabalho locais com processamento in-memory e isolamento rigoroso de segredos.",
    },
    {
      title: "Bancos de Dados e Persistência",
      items: ["PostgreSQL", "Prisma ORM (Adapter-pg)", "SQLite", "Firebase Firestore"],
      description: "Modelagem relacional, pooling de conexões e desacoplamento via Repository Pattern.",
    },
  ];

  const corePractices = [
    {
      title: "Trilhas Forenses Imutáveis",
      description: "Registro sistemático de operações com snapshots anteriores, payload modificado (JSON Diff), IP e identificador de correlação.",
    },
    {
      title: "Validação Matemática de Conflitos",
      description: "Algoritmos de interseção temporal (startA < endB e endA > startB) executados com integridade relacional para prevenir sobreposições.",
    },
    {
      title: "Higienização de Código e IA Local",
      description: "Processamento de tokens e compilação de contexto sem transmissão de credenciais (.env) ou binários para servidores externos.",
    },
    {
      title: "Controle de Acesso Granular (RBAC)",
      description: "Hierarquia de permissões com tokens JWT tipados para administração, gerência, instrutores e usuários comuns.",
    },
  ];

  return (
    <section id="competencias" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-3">
            03 / Competências e Práticas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl">
            Fundamentos técnicos e padrões arquiteturais.
          </h2>
          <p className="text-sm text-white-dim mt-3 max-w-2xl leading-relaxed">
            Estrutura de desenvolvimento focada em previsibilidade de execução, manutenibilidade
            e conformidade com padrões de mercado.
          </p>
        </div>

        {/* 4 Technical Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalAreas.map((area, idx) => (
            <div
              key={idx}
              className="border border-[#262626] bg-[#121212] p-6 space-y-4"
            >
              <span className="text-[10px] font-mono uppercase text-gold block">
                Área 0{idx + 1}
              </span>
              <h3 className="text-base font-semibold text-white">
                {area.title}
              </h3>
              <p className="text-xs text-white-dim leading-relaxed">
                {area.description}
              </p>
              <ul className="pt-2 border-t border-[#262626] space-y-1.5 text-xs font-mono text-white-muted">
                {area.items.map((it, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architectural Practices Row */}
        <div className="border-t border-[#262626] pt-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-8 font-semibold">
            Padrões Arquiteturais Aplicados em Produção
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePractices.map((prac, idx) => (
              <div key={idx} className="space-y-2 border-l border-gold/40 pl-4">
                <h4 className="text-sm font-semibold text-white">
                  {prac.title}
                </h4>
                <p className="text-xs text-white-dim leading-relaxed">
                  {prac.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
