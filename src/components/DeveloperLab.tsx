"use client";

import { useState } from "react";
import {
  Terminal,
  FolderTree,
  FileCode,
  ShieldCheck,
  CheckSquare,
  Square,
  Copy,
  FolderOpen,
  Sparkles,
  RefreshCw,
  Cpu,
  FileCheck,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

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

const INITIAL_TREE: TreeNode[] = [
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
      { id: "api-src", name: "src/server.ts", size: "48.2 KB", tokens: "~12.400 tk", tokenCount: 12400, sizeBytes: 48200, isFolder: false },
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
      { id: "front-comp", name: "components (UI & Cockpit)", size: "815.0 KB", tokens: "~208.698 tk", tokenCount: 208698, sizeBytes: 815000, isFolder: false },
      { id: "front-ctx", name: "contexts (Estado Global)", size: "952 B", tokens: "~238 tk", tokenCount: 238, sizeBytes: 952, isFolder: false },
      { id: "front-hooks", name: "hooks (Chamadas & Cache)", size: "157.2 KB", tokens: "~40.258 tk", tokenCount: 40258, sizeBytes: 157200, isFolder: false },
      { id: "front-lib", name: "lib (Adapters & Utils)", size: "148.4 KB", tokens: "~38.020 tk", tokenCount: 38020, sizeBytes: 148400, isFolder: false },
      { id: "front-styles", name: "styles (Tailwind & Tokens)", size: "4.3 KB", tokens: "~1.609 tk", tokenCount: 1609, sizeBytes: 4300, isFolder: false },
      { id: "front-types", name: "types (Modelos TypeScript)", size: "23.8 KB", tokens: "~6.690 tk", tokenCount: 6690, sizeBytes: 23800, isFolder: false },
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
    new Set(["gitca", "api", "api-src", "api-routes", "api-prisma", "front", "front-app", "front-comp", "front-ctx", "front-hooks", "front-lib", "front-styles", "front-types", "pkg"])
  );
  const [mode, setMode] = useState<string>("Dividir por Módulos (--by-folder)");
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [compiledSuccess, setCompiledSuccess] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["api", "front"]));

  const toggleSelect = (id: string, children?: TreeNode[]) => {
    const next = new Set(selectedIds);
    const willSelect = !next.has(id);

    const applySelection = (nodeId: string, select: boolean) => {
      if (select) next.add(nodeId);
      else next.delete(nodeId);
    };

    applySelection(id, willSelect);

    if (children) {
      children.forEach((child) => {
        applySelection(child.id, willSelect);
      });
    }

    setSelectedIds(next);
  };

  const toggleFolder = (id: string) => {
    const next = new Set(expandedFolders);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedFolders(next);
  };

  const handleCompile = () => {
    setIsCompiling(true);
    setTimeout(() => {
      setIsCompiling(false);
      setCompiledSuccess(true);
    }, 800);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dynamic calculations based on selection
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
    return acc + findToken(INITIAL_TREE);
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
      return acc + findSize(INITIAL_TREE);
    }, 0) /
    (1024 * 1024)
  ).toFixed(2);

  return (
    <section id="ato-4-lab" className="py-24 bg-obsidian-deepest relative border-t border-obsidian-border/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-panel border border-sand/20 text-sand text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5 text-emerald" />
            <span>ATO 4 // ESTAÇÃO INTERATIVA DE IA LOCAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Developer Lab
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Simulador operacional do <span className="text-sand font-mono">Dev Automation Kit</span>.
            Experimente em tempo real a árvore de compilação hierárquica, o cálculo dinâmico de tokens BPE
            e a higienização de segredos sem transmissão de dados.
          </p>
        </div>

        {/* The Desktop Application Window */}
        <div className="cockpit-card rounded-2xl border border-obsidian-border bg-[#0D121D] shadow-2xl overflow-hidden">
          {/* Mac / Window Titlebar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#090D15] border-b border-obsidian-border/80">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400 font-medium">
                Dev Automation Kit <span className="text-sand/70">v0.1.4-alpha</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-slate-300">target:</span>
              <span className="px-2 py-0.5 rounded bg-obsidian-elevated text-sand border border-obsidian-border">
                construindo-campeoes
              </span>
            </div>
          </div>

          {/* Application Controls & Metric Cards */}
          <div className="p-6">
            {/* 4 Metric Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#111726] p-4 rounded-xl border border-obsidian-border">
                <p className="text-xs font-mono text-slate-400 uppercase">Arquivos Selecionados</p>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 mt-1">
                  {selectedCount}{" "}
                  <span className="text-xs text-slate-500 font-normal">/ 590 elegíveis</span>
                </div>
              </div>

              <div className="bg-[#111726] p-4 rounded-xl border border-obsidian-border">
                <p className="text-xs font-mono text-slate-400 uppercase">Volume em Texto</p>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 mt-1">
                  {totalVolumeMb} MB
                </div>
              </div>

              <div className="bg-[#111726] p-4 rounded-xl border border-obsidian-border">
                <p className="text-xs font-mono text-slate-400 uppercase">Tokens Estimados</p>
                <div className="text-xl sm:text-2xl font-bold font-mono text-sand-light mt-1">
                  ~{totalTokens.toLocaleString("pt-BR")}
                </div>
              </div>

              <div className="bg-[#111726] p-4 rounded-xl border border-obsidian-border">
                <p className="text-xs font-mono text-slate-400 uppercase">Higienização</p>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald mt-1 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald" />
                  <span>100% Protegido</span>
                </div>
              </div>
            </div>

            {/* Mode Selector and Action Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#090D15] border border-obsidian-border mb-6">
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <span className="text-xs font-mono text-slate-400">Modo:</span>
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  className="bg-[#111726] text-xs font-mono text-slate-200 border border-obsidian-border rounded-lg px-3 py-2 focus:outline-none focus:border-sand"
                >
                  <option>Dividir por Módulos (--by-folder)</option>
                  <option>Pacote Consolidado (--single-bundle)</option>
                  <option>Somente Modificações (--diff-only)</option>
                </select>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span>Prefixo:</span>
                  <span className="px-2 py-1 rounded bg-[#111726] text-sand border border-obsidian-border">
                    construindo-campeoes
                  </span>
                </div>
              </div>

              <button
                onClick={handleCompile}
                disabled={isCompiling}
                className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isCompiling ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Higienizando & Compilando...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Gerar Contexto</span>
                  </>
                )}
              </button>
            </div>

            {/* Success Notification Bar */}
            {compiledSuccess && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-emerald/10 border border-emerald/30 mb-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald/20 border border-emerald flex items-center justify-center shrink-0">
                    <FileCheck className="w-3.5 h-3.5 text-emerald" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-semibold text-emerald-light">
                      Contexto gerado com sucesso! (2 arquivo(s) prontos para LLM)
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      Salvo em: /home/wernnon/DevAutomationKit/gerados/construindo-campeoes/
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-[#111726] border border-obsidian-border text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-sand" />
                    <span>{copied ? "Copiado!" : "Copiar Conteúdo"}</span>
                  </button>
                  <button
                    onClick={() => alert("Simulação: Pasta local aberta no explorador de arquivos do SO.")}
                    className="px-3 py-1.5 rounded-lg bg-[#111726] border border-obsidian-border text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <FolderOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>Abrir no Explorador</span>
                  </button>
                </div>
              </div>
            )}

            {/* Tree Explorer */}
            <div className="bg-[#090D15] rounded-xl border border-obsidian-border p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-obsidian-border/70 mb-3 text-slate-400">
                <div className="flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-sand" />
                  <span className="font-semibold text-slate-300">Árvore de Arquivos & Seleção</span>
                  <span className="text-[11px] text-slate-500">({selectedCount} marcados)</span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <button
                    onClick={() =>
                      setSelectedIds(
                        new Set([
                          "gitca", "api", "api-src", "api-routes", "api-prisma",
                          "front", "front-app", "front-comp", "front-ctx", "front-hooks", "front-lib", "front-styles", "front-types", "pkg"
                        ])
                      )
                    }
                    className="text-sand hover:underline"
                  >
                    Marcar Tudo
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => setSelectedIds(new Set())}
                    className="text-slate-400 hover:text-slate-200"
                  >
                    Desmarcar Tudo
                  </button>
                </div>
              </div>

              {/* Tree Items List */}
              <div className="space-y-1.5">
                {INITIAL_TREE.map((node) => {
                  const isChecked = selectedIds.has(node.id);
                  const isExpanded = expandedFolders.has(node.id);

                  return (
                    <div key={node.id} className="space-y-1">
                      <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#111726] transition-colors group">
                        <div className="flex items-center gap-2">
                          {node.isFolder ? (
                            <button
                              onClick={() => toggleFolder(node.id)}
                              className="text-slate-500 hover:text-slate-300"
                            >
                              {isExpanded ? (
                                <ChevronDown className="w-3.5 h-3.5" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5" />
                              )}
                            </button>
                          ) : (
                            <span className="w-3.5 inline-block" />
                          )}

                          <button
                            onClick={() => toggleSelect(node.id, node.children)}
                            className="flex items-center gap-2 text-left"
                          >
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-blue-500" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-600" />
                            )}
                            <span className={node.isFolder ? "font-semibold text-slate-200" : "text-slate-400"}>
                              {node.name}
                            </span>
                          </button>
                        </div>

                        <div className="flex items-center gap-4 text-[11px] text-slate-500">
                          <span>{node.size}</span>
                          <span className="text-sand/80 font-medium">{node.tokens}</span>
                        </div>
                      </div>

                      {/* Children for folders */}
                      {node.isFolder && isExpanded && node.children && (
                        <div className="pl-6 border-l border-obsidian-border/50 ml-3 space-y-1">
                          {node.children.map((child) => {
                            const isChildChecked = selectedIds.has(child.id);
                            return (
                              <div
                                key={child.id}
                                className="flex items-center justify-between py-1 px-2 rounded hover:bg-[#111726] transition-colors"
                              >
                                <button
                                  onClick={() => toggleSelect(child.id)}
                                  className="flex items-center gap-2 text-left text-slate-300"
                                >
                                  {isChildChecked ? (
                                    <CheckSquare className="w-3.5 h-3.5 text-blue-500" />
                                  ) : (
                                    <Square className="w-3.5 h-3.5 text-slate-600" />
                                  )}
                                  <FileCode className="w-3 h-3 text-slate-500" />
                                  <span>{child.name}</span>
                                </button>
                                <div className="flex items-center gap-4 text-[11px] text-slate-500">
                                  <span>{child.size}</span>
                                  <span className="text-sand/70">{child.tokens}</span>
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
