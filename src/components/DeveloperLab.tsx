"use client";

import { useState } from "react";

interface TreeNode {
  id: string;
  name: string;
  size: string;
  tokens: string;
  tokenCount: number;
  sizeBytes: number;
  isFolder: boolean;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    id: "gitca",
    name: ".gitca",
    size: "3.2 KB",
    tokens: "~817 tk",
    tokenCount: 817,
    sizeBytes: 3200,
    isFolder: false,
  },
  {
    id: "api",
    name: "const_camp_dev_api",
    size: "2.81 MB",
    tokens: "~35.815 tk",
    tokenCount: 35815,
    sizeBytes: 2810000,
    isFolder: true,
    children: [
      { id: "api-server", name: "src/server.ts", size: "48.2 KB", tokens: "~12.400 tk", tokenCount: 12400, sizeBytes: 48200, isFolder: false },
      { id: "api-routes", name: "src/routes/chamadas.ts", size: "86.1 KB", tokens: "~22.100 tk", tokenCount: 22100, sizeBytes: 86100, isFolder: false },
      { id: "api-prisma", name: "prisma/schema.prisma", size: "12.4 KB", tokens: "~1.315 tk", tokenCount: 1315, sizeBytes: 12400, isFolder: false },
    ],
  },
  {
    id: "front",
    name: "const_camp_dev_front",
    size: "1.54 MB",
    tokens: "~494.386 tk",
    tokenCount: 494386,
    sizeBytes: 1540000,
    isFolder: true,
    children: [
      { id: "front-app", name: "app (Rotas e Páginas)", size: "423.7 KB", tokens: "~108.488 tk", tokenCount: 108488, sizeBytes: 423700, isFolder: false },
      { id: "front-comp", name: "components (Cockpit e Telas)", size: "815.0 KB", tokens: "~208.698 tk", tokenCount: 208698, sizeBytes: 815000, isFolder: false },
      { id: "front-hooks", name: "hooks (Cache e Estado)", size: "157.2 KB", tokens: "~40.258 tk", tokenCount: 40258, sizeBytes: 157200, isFolder: false },
      { id: "front-lib", name: "lib (Adapters e Clientes)", size: "148.4 KB", tokens: "~38.020 tk", tokenCount: 38020, sizeBytes: 148400, isFolder: false },
    ],
  },
  {
    id: "pkg",
    name: "package.json",
    size: "2.5 KB",
    tokens: "~641 tk",
    tokenCount: 641,
    sizeBytes: 2500,
    isFolder: false,
  },
];

export function DeveloperLab() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(["gitca", "api", "api-server", "api-routes", "api-prisma", "front", "front-app", "front-comp", "front-hooks", "front-lib", "pkg"])
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(true);

  const toggleSelect = (id: string, children?: TreeNode[]) => {
    const next = new Set(selectedIds);
    const willSelect = !next.has(id);

    const apply = (nodeId: string, sel: boolean) => {
      if (sel) next.add(nodeId);
      else next.delete(nodeId);
    };

    apply(id, willSelect);
    if (children) children.forEach((c) => apply(c.id, willSelect));

    setSelectedIds(next);
  };

  const handleGenerate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
    }, 600);
  };

  const selectedCount = selectedIds.size;
  const totalTokens = Array.from(selectedIds).reduce((acc, id) => {
    const findToken = (nodes: TreeNode[]): number => {
      for (const n of nodes) {
        if (n.id === id) return n.tokenCount;
        if (n.children) {
          const res = findToken(n.children);
          if (res) return res;
        }
      }
      return 0;
    };
    return acc + findToken(TREE_DATA);
  }, 0);

  const totalVolumeMb = (
    Array.from(selectedIds).reduce((acc, id) => {
      const findSize = (nodes: TreeNode[]): number => {
        for (const n of nodes) {
          if (n.id === id) return n.sizeBytes;
          if (n.children) {
            const res = findSize(n.children);
            if (res) return res;
          }
        }
        return 0;
      };
      return acc + findSize(TREE_DATA);
    }, 0) /
    (1024 * 1024)
  ).toFixed(2);

  return (
    <section id="ferramental" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-3">
            04 / Ferramental de Desenvolvimento
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl">
            Dev Automation Kit em funcionamento.
          </h2>
          <p className="text-sm text-white-dim mt-3 max-w-2xl leading-relaxed">
            Utilitário desktop criado para resolver o gargalo de compilação de contexto para modelos de IA.
            A ferramenta sanitiza credenciais e calcula tokens de forma local e offline.
          </p>
        </div>

        {/* Workstation Frame */}
        <div className="border border-[#262626] bg-[#121212]">
          {/* Header Bar */}
          <div className="border-b border-[#262626] px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-black">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-gold rounded-full" />
              <span className="text-xs font-mono font-semibold text-white">
                Dev Automation Kit v0.1.4-alpha
              </span>
            </div>
            <span className="text-xs font-mono text-white-dim">
              Repositório ativo: <span className="text-gold">construindo-campeoes</span>
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Real Counters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#262626] pb-8">
              <div>
                <span className="text-xs font-mono text-white-dim block uppercase">Arquivos Selecionados</span>
                <span className="text-2xl font-mono font-bold text-white mt-1 block">
                  {selectedCount} <span className="text-xs font-normal text-white-dim">/ 590</span>
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-white-dim block uppercase">Volume de Texto</span>
                <span className="text-2xl font-mono font-bold text-white mt-1 block">
                  {totalVolumeMb} MB
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-white-dim block uppercase">Tokens Estimados</span>
                <span className="text-2xl font-mono font-bold text-gold mt-1 block">
                  ~{totalTokens.toLocaleString("pt-BR")}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-white-dim block uppercase">Isolamento de Segredos</span>
                <span className="text-2xl font-mono font-bold text-white mt-1 block">
                  100% Local
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs font-mono text-white-dim">
                <span>Modo de empacotamento:</span>
                <span className="px-3 py-1.5 bg-black border border-[#262626] text-white">
                  Dividir por Módulos (--by-folder)
                </span>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={isProcessing}
                className="px-6 py-2.5 bg-gold hover:bg-gold-hover text-black text-xs font-mono uppercase font-semibold transition-colors disabled:opacity-50"
              >
                {isProcessing ? "Compilando..." : "Gerar Contexto"}
              </button>
            </div>

            {/* Success Status */}
            {success && (
              <div className="p-4 border border-gold/40 bg-[#180407] text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-white">
                  Contexto compilado com sucesso. Salvo em: <span className="text-gold">gerados/construindo-campeoes/</span>
                </span>
                <span className="text-gold font-semibold">2 arquivos gerados</span>
              </div>
            )}

            {/* Directory Selection Tree */}
            <div className="border border-[#262626] bg-black p-4 font-mono text-xs">
              <div className="pb-3 border-b border-[#262626] mb-3 flex items-center justify-between text-white-dim">
                <span>Árvore de Diretórios</span>
                <span>{selectedCount} itens marcados</span>
              </div>

              <div className="space-y-2">
                {TREE_DATA.map((node) => {
                  const isChecked = selectedIds.has(node.id);
                  return (
                    <div key={node.id} className="space-y-1">
                      <div className="flex items-center justify-between py-1 px-2 hover:bg-[#121212]">
                        <button
                          type="button"
                          onClick={() => toggleSelect(node.id, node.children)}
                          className="flex items-center gap-3 text-left"
                        >
                          <span className={`w-3.5 h-3.5 border flex items-center justify-center text-[10px] ${
                            isChecked ? "border-gold bg-gold text-black font-bold" : "border-[#404040]"
                          }`}>
                            {isChecked ? "x" : ""}
                          </span>
                          <span className={node.isFolder ? "font-semibold text-white" : "text-white-dim"}>
                            {node.name}
                          </span>
                        </button>
                        <div className="flex items-center gap-4 text-white-dim text-[11px]">
                          <span>{node.size}</span>
                          <span className="text-gold">{node.tokens}</span>
                        </div>
                      </div>

                      {/* Folder Children */}
                      {node.children && (
                        <div className="pl-6 border-l border-[#262626] ml-3 space-y-1">
                          {node.children.map((child) => {
                            const isChildChecked = selectedIds.has(child.id);
                            return (
                              <div
                                key={child.id}
                                className="flex items-center justify-between py-1 px-2 hover:bg-[#121212]"
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleSelect(child.id)}
                                  className="flex items-center gap-3 text-left text-white-dim hover:text-white"
                                >
                                  <span className={`w-3.5 h-3.5 border flex items-center justify-center text-[10px] ${
                                    isChildChecked ? "border-gold bg-gold text-black font-bold" : "border-[#404040]"
                                  }`}>
                                    {isChildChecked ? "x" : ""}
                                  </span>
                                  <span>{child.name}</span>
                                </button>
                                <div className="flex items-center gap-4 text-white-dim text-[11px]">
                                  <span>{child.size}</span>
                                  <span className="text-gold">{child.tokens}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
