"use client";

import { useState } from "react";
import {
  Terminal,
  Send,
  CheckCircle2,
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

export function ExecutiveTerminal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    subject: "Auditoria de Arquitetura & Sistemas",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketCreated, setTicketCreated] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomTicket = `AGY-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
      setTicketCreated(randomTicket);
    }, 900);
  };

  const engagementCards = [
    {
      title: "Auditoria de Arquitetura & LGPD",
      tag: "Diagnóstico Rápido",
      description:
        "Inspeção técnica profunda de bases de código legadas, validação de trilhas forenses JSON Diff, contratos Zod e segurança de dados de menores.",
      actionText: "Solicitar Auditoria",
      accent: "sand",
    },
    {
      title: "Engenharia de Missão Crítica",
      tag: "Fullstack End-to-End",
      description:
        "Concepção e entrega de plataformas governamentais ou SaaS corporativos de alta performance com Next.js, Fastify e PostgreSQL.",
      actionText: "Iniciar Projeto",
      accent: "burgundy",
      featured: true,
    },
    {
      title: "Automação Local & IA Desktop",
      tag: "Engenharia Autônoma",
      description:
        "Desenvolvimento de estações de trabalho Electron, compiladores de contexto offline e robôs de atendimento com transição assistida.",
      actionText: "Discutir Escopo",
      accent: "emerald",
    },
  ];

  return (
    <section id="ato-5-terminal" className="py-24 bg-obsidian-deepest relative border-t border-obsidian-border/50">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-panel border border-sand/20 text-sand text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ATO 5 // PONTO DE CONVERSÃO EXECUTIVO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terminal Executivo & Contato
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Ponto de conexão para lideranças técnicas (CTOs, Tech Leads), gestores públicos e
            organizações que demandam excelência em arquitetura, segurança e rigor estético.
          </p>
        </div>

        {/* Engagement Service Cards (Inspired by Borü Pricing Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {engagementCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                card.featured
                  ? "bg-gradient-to-b from-burgundy/90 to-obsidian-panel border-2 border-sand shadow-2xl shadow-burgundy/40"
                  : "bg-obsidian-card border border-obsidian-border hover:border-sand/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                      card.featured
                        ? "bg-sand text-burgundy-darkest"
                        : "bg-obsidian-elevated text-sand border border-obsidian-border"
                    }`}
                  >
                    {card.tag}
                  </span>
                  {card.featured && (
                    <span className="text-xs font-mono text-sand font-bold">
                      DESTAQUE
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {card.description}
                </p>
              </div>

              <a
                href="#terminal-form"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, subject: card.title }))
                }
                className={`w-full py-3 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  card.featured
                    ? "bg-sand text-burgundy-darkest hover:bg-sand-light shadow-lg"
                    : "bg-obsidian-panel text-slate-200 hover:text-sand hover:bg-obsidian-elevated border border-obsidian-border"
                }`}
              >
                <span>{card.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Two-Column Form & Direct Channels Grid */}
        <div id="terminal-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Dispatch Terminal (7 cols) */}
          <div className="lg:col-span-7 cockpit-card rounded-2xl p-6 sm:p-8 border border-obsidian-border bg-obsidian-card">
            <div className="flex items-center justify-between pb-4 border-b border-obsidian-border mb-6">
              <div className="flex items-center gap-2 text-sand font-mono text-xs font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Despacho Direto ao Engenheiro</span>
              </div>
              <span className="text-[11px] font-mono text-emerald flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                RESPOSTA: &lt; 24h
              </span>
            </div>

            {ticketCreated ? (
              <div className="p-6 rounded-xl bg-emerald/10 border border-emerald/30 text-center py-10 animate-in fade-in duration-400">
                <div className="w-12 h-12 rounded-full bg-emerald/20 border border-emerald flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Demanda Protocolada com Sucesso
                </h3>
                <p className="text-xs font-mono text-sand mb-4">
                  PROTOCOLO: {ticketCreated}
                </p>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed mb-6 font-sans">
                  Sua solicitação foi registrada no terminal do estúdio Antigravity. Entraremos em contato com análise preliminar de arquitetura em até 24 horas úteis.
                </p>
                <button
                  onClick={() => setTicketCreated(null)}
                  className="px-4 py-2 rounded-lg bg-obsidian-panel border border-obsidian-border text-xs font-mono text-slate-300 hover:text-white"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Seu Nome / Liderança</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Ex: Dra. Mariana Silva"
                      className="w-full bg-obsidian-panel border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">E-mail Corporativo</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="mariana@empresa.com.br"
                      className="w-full bg-obsidian-panel border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Organização / Município</label>
                    <input
                      type="text"
                      value={formData.org}
                      onChange={(e) =>
                        setFormData({ ...formData, org: e.target.value })
                      }
                      placeholder="Ex: Prefeitura / Startup X"
                      className="w-full bg-obsidian-panel border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Tipo de Demanda</label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-obsidian-panel border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-sand"
                    >
                      <option>Auditoria de Arquitetura & LGPD</option>
                      <option>Engenharia de Missão Crítica</option>
                      <option>Automação Local & IA Desktop</option>
                      <option>Contratação de Software Sênior</option>
                      <option>Outra Demanda Técnica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">
                    Descrição do Desafio ou Escopo
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Descreva o problema de escala, conformidade regulatória ou objetivo do sistema..."
                    className="w-full bg-obsidian-panel border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand font-sans text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-burgundy hover:bg-burgundy-glow border border-sand/40 hover:border-sand text-white font-mono font-bold flex items-center justify-center gap-2 shadow-lg shadow-burgundy/40 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-sand" />
                  <span>
                    {isSubmitting
                      ? "Transmitindo aos Servidores..."
                      : "Enviar Demanda com Protocolo"}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Hub Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Links Card */}
            <div className="cockpit-card rounded-2xl p-6 border border-obsidian-border bg-obsidian-card">
              <h3 className="text-sm font-mono uppercase tracking-wider text-sand font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Canais de Comunicação Rápida
              </h3>

              <div className="space-y-3">
                <a
                  href="https://wa.me/5569999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-panel border border-obsidian-border hover:border-sand/40 text-xs font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald/20 border border-emerald/40 flex items-center justify-center text-emerald">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        WhatsApp Corporativo
                      </p>
                      <p className="text-[11px] text-slate-500">Alinhamento direto e rápido</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sand group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:contato@welyz.dev"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-panel border border-obsidian-border hover:border-sand/40 text-xs font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-sand/30 flex items-center justify-center text-sand">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        E-mail de Engenharia
                      </p>
                      <p className="text-[11px] text-slate-500">contato@welyz.dev</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sand group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://github.com/wernnon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-panel border border-obsidian-border hover:border-sand/40 text-xs font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-obsidian-elevated border border-obsidian-border flex items-center justify-center text-slate-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        GitHub / Repositórios
                      </p>
                      <p className="text-[11px] text-slate-500">Código aberto e contribuições</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sand group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-panel border border-obsidian-border hover:border-sand/40 text-xs font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        LinkedIn Profissional
                      </p>
                      <p className="text-[11px] text-slate-500">Rede corporativa e artigos</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sand group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Geographical & Operational Footprint Card */}
            <div className="cockpit-card rounded-2xl p-6 border border-obsidian-border bg-obsidian-card font-mono text-xs text-slate-400 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sand shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Porto Velho — Rondônia, Brasil</p>
                  <p className="text-[11px] text-slate-500">
                    Disponibilidade técnica para projetos remotos no Brasil e exterior.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-obsidian-border/50">
                <Clock className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Horário Operacional</p>
                  <p className="text-[11px] text-slate-500">
                    Segunda a Sexta, 08:00 às 19:00 (Fuso GMT-4 / Brasília)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
