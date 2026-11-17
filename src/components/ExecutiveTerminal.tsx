"use client";

import { useState } from "react";
import {
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
  UserCheck,
} from "lucide-react";

export function ExecutiveTerminal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    subject: "Desenvolvimento de Projeto / Solução Digital",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketCreated, setTicketCreated] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomTicket = `WR-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
      setTicketCreated(randomTicket);
    }, 850);
  };

  const engagementCards = [
    {
      title: "Desenvolvimento de Plataformas Web & SaaS",
      tag: "Projetos Completos",
      description:
        "Criação de ponta a ponta de sistemas web modernos com Next.js, Fastify, TypeScript e PostgreSQL com foco em escalabilidade e usabilidade.",
      actionText: "Conversar sobre Projeto",
      accent: "burgundy",
      featured: true,
    },
    {
      title: "Auditoria de Arquitetura & Governança LGPD",
      tag: "Consultoria Técnica",
      description:
        "Diagnóstico de bases legadas, trilhas forenses imutáveis, validação estrita de contratos de dados (Zod) e proteção de dados sensíveis.",
      actionText: "Solicitar Diagnóstico",
      accent: "sand",
    },
    {
      title: "Utilitários Desktop & Automações de IA",
      tag: "Ferramental Técnico",
      description:
        "Desenvolvimento de aplicações desktop em Electron, compiladores de contexto offline e integrações multicanal com WhatsApp.",
      actionText: "Alinhar Necessidade",
      accent: "emerald",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-[#0D1117] relative border-t border-obsidian-border/50">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161B22] border border-sand/20 text-sand text-xs font-mono mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>CONTATO & CONEXÃO PROFISSIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans">
            Vamos Construir Algo Sólido?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Entre em contato direto com Wernnon Ruiz para discutir novos projetos, parcerias
            estratégicas ou oportunidades de contratação em engenharia de software sênior.
          </p>
        </div>

        {/* Engagement Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {engagementCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                card.featured
                  ? "bg-gradient-to-b from-burgundy/90 to-[#161B22] border-2 border-sand shadow-2xl shadow-burgundy/40"
                  : "bg-[#161B22] border border-obsidian-border hover:border-sand/40"
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
                      PRINCIPAL ATUAÇÃO
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {card.description}
                </p>
              </div>

              <a
                href="#form-contato"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, subject: card.title }))
                }
                className={`w-full py-3 rounded-xl font-sans text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  card.featured
                    ? "bg-sand text-burgundy-darkest hover:bg-sand-light shadow-lg"
                    : "bg-[#0D1117] text-slate-200 hover:text-sand hover:bg-obsidian-elevated border border-obsidian-border"
                }`}
              >
                <span>{card.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Form and Channels Grid */}
        <div id="form-contato" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 cockpit-card rounded-2xl p-6 sm:p-8 border border-obsidian-border bg-[#161B22]">
            <div className="flex items-center justify-between pb-4 border-b border-obsidian-border mb-6">
              <div className="flex items-center gap-2 text-sand font-sans text-xs font-bold uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Mensagem Direta a Wernnon Ruiz</span>
              </div>
              <span className="text-[11px] font-mono text-emerald flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                RETORNO RÁPIDO
              </span>
            </div>

            {ticketCreated ? (
              <div className="p-6 rounded-xl bg-emerald/10 border border-emerald/30 text-center py-10 animate-in fade-in duration-400">
                <div className="w-12 h-12 rounded-full bg-emerald/20 border border-emerald flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 font-sans">
                  Mensagem Enviada com Sucesso
                </h3>
                <p className="text-xs font-mono text-sand mb-4">
                  IDENTIFICADOR: {ticketCreated}
                </p>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed mb-6 font-sans">
                  Agradeço pelo contato. Responderei sua mensagem com brevidade pelo e-mail informado.
                </p>
                <button
                  onClick={() => setTicketCreated(null)}
                  className="px-4 py-2 rounded-lg bg-[#0D1117] border border-obsidian-border text-xs font-sans text-slate-300 hover:text-white"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Seu Nome / Empresa</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Ex: Carlos Eduardo / Empresa X"
                      className="w-full bg-[#0D1117] border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Seu E-mail</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="carlos@empresa.com.br"
                      className="w-full bg-[#0D1117] border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Segmento / Localização</label>
                    <input
                      type="text"
                      value={formData.org}
                      onChange={(e) =>
                        setFormData({ ...formData, org: e.target.value })
                      }
                      placeholder="Ex: Setor Público / Startup / Varejo"
                      className="w-full bg-[#0D1117] border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Assunto Principal</label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-[#0D1117] border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-sand"
                    >
                      <option>Desenvolvimento de Plataformas Web & SaaS</option>
                      <option>Auditoria de Arquitetura & Governança LGPD</option>
                      <option>Utilitários Desktop & Automações de IA</option>
                      <option>Oportunidade de Contratação Sênior</option>
                      <option>Outro Alinhamento Técnico</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">
                    Como posso ajudar em sua operação?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Conte sobre o projeto, desafio de escala ou necessidade da sua equipe..."
                    className="w-full bg-[#0D1117] border border-obsidian-border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sand text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-burgundy hover:bg-burgundy-glow border border-sand/40 hover:border-sand text-white font-sans font-bold flex items-center justify-center gap-2 shadow-lg shadow-burgundy/40 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-sand" />
                  <span>
                    {isSubmitting ? "Enviando mensagem..." : "Enviar Mensagem Direta"}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Hub Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Links Card */}
            <div className="cockpit-card rounded-2xl p-6 border border-obsidian-border bg-[#161B22]">
              <h3 className="text-sm font-sans uppercase tracking-wider text-sand font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Canais de Conexão Profissional
              </h3>

              <div className="space-y-3 font-sans">
                <a
                  href="https://wa.me/5569999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D1117] border border-obsidian-border hover:border-sand/40 text-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald/20 border border-emerald/40 flex items-center justify-center text-emerald">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        WhatsApp Direto
                      </p>
                      <p className="text-[11px] text-slate-500">Conversa ágil em tempo real</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sand group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:contato@welyz.dev"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D1117] border border-obsidian-border hover:border-sand/40 text-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-burgundy/60 border border-sand/30 flex items-center justify-center text-sand">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        E-mail Profissional
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
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D1117] border border-obsidian-border hover:border-sand/40 text-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-obsidian-elevated border border-obsidian-border flex items-center justify-center text-slate-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        GitHub / Código & Repositórios
                      </p>
                      <p className="text-[11px] text-slate-500">github.com/wernnon</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sand group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D1117] border border-obsidian-border hover:border-sand/40 text-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold group-hover:text-sand">
                        LinkedIn Profissional
                      </p>
                      <p className="text-[11px] text-slate-500">Histórico de atuação e artigos</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sand group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Geographical Footprint Card */}
            <div className="cockpit-card rounded-2xl p-6 border border-obsidian-border bg-[#161B22] text-xs text-slate-400 space-y-3 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sand shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Porto Velho — Rondônia, Brasil</p>
                  <p className="text-[11px] text-slate-500">
                    Atuação em âmbito local presencial ou remoto para todo o Brasil e exterior.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-obsidian-border/50">
                <Clock className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Disponibilidade</p>
                  <p className="text-[11px] text-slate-500">
                    Segunda a Sexta, 08:00 às 18:00 (Fuso de Rondônia / Brasília)
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
