"use client";

import { useState } from "react";

export function ExecutiveTerminal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Desenvolvimento de Projeto ou Consultoria",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const mailtoUrl = `mailto:ruizwernnon@gmail.com?subject=${encodeURIComponent(
    `[Contato Portfólio] ${formData.subject}: ${formData.name || "Sem Nome"}`
  )}&body=${encodeURIComponent(
    `Nome: ${formData.name}\nE-mail: ${formData.email}\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSent(true);
      } else {
        // Fallback: If external mail service fails, let the user trigger mailto directly
        setErrorMsg(
          data.error || "Não foi possível despachar automaticamente. Clique abaixo para abrir seu cliente de e-mail."
        );
      }
    } catch {
      setErrorMsg("Falha na conexão de envio. Você pode enviar diretamente pelo botão de e-mail abaixo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-3">
            05 / Contato e Conexão Profissional
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl">
            Inicie uma conversa direta.
          </h2>
          <p className="text-sm text-white-dim mt-3 max-w-2xl leading-relaxed">
            Disponível para novos projetos de software, liderança técnica e consultoria em arquitetura de sistemas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 text-sm">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gold block mb-1">
                  E-mail Direto
                </span>
                <a
                  href="mailto:ruizwernnon@gmail.com"
                  className="text-white hover:text-gold transition-colors font-mono font-medium"
                >
                  ruizwernnon@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gold block mb-1">
                  WhatsApp Profissional
                </span>
                <a
                  href="https://wa.me/5569992473397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors font-mono"
                >
                  +55 (69) 99247-3397
                </a>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gold block mb-1">
                  Repositórios e Código
                </span>
                <a
                  href="https://github.com/wernnon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors font-mono"
                >
                  github.com/wernnon
                </a>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gold block mb-1">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/wernnon-ruiz-ba097b254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors font-mono"
                >
                  linkedin.com/in/wernnon-ruiz
                </a>
              </div>
            </div>

            <div className="border-t border-[#262626] pt-6 space-y-2 text-xs text-white-dim font-mono">
              <p className="text-white font-semibold uppercase">Base Territorial</p>
              <p>Porto Velho, Rondônia, Brasil</p>
              <p>Horário: Segunda a Sexta, 08:00 às 18:00 (GMT-4)</p>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 border border-[#262626] bg-[#121212] p-8">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <span className="text-xs font-mono uppercase text-gold block">
                  Mensagem Enviada
                </span>
                <h3 className="text-xl font-bold text-white">
                  E-mail transmitido com sucesso.
                </h3>
                <p className="text-xs text-white-dim max-w-md mx-auto leading-relaxed">
                  A mensagem foi despachada para <strong className="text-white">ruizwernnon@gmail.com</strong>.
                  Entrarei em contato pelo e-mail informado com brevidade.
                </p>
                <div className="pt-4 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: "", email: "", subject: "Desenvolvimento de Projeto ou Consultoria", message: "" });
                    }}
                    className="px-4 py-2 text-xs font-mono text-white border border-[#262626] hover:border-gold"
                  >
                    Enviar Outra Mensagem
                  </button>
                  <a
                    href="https://wa.me/5569992473397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono text-black bg-gold hover:bg-gold-hover font-semibold"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 border border-burgundy-light bg-[#180407] text-xs font-mono text-white-muted space-y-2">
                    <p className="text-gold font-semibold">{errorMsg}</p>
                    <a
                      href={mailtoUrl}
                      className="inline-block text-xs uppercase text-gold hover:underline font-bold"
                    >
                      [ Abrir no seu aplicativo de e-mail ]
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white-dim mb-2">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full bg-black border border-[#262626] px-4 py-3 text-xs text-white placeholder:text-[#505050] focus:outline-none focus:border-gold font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white-dim mb-2">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="carlos@empresa.com.br"
                      className="w-full bg-black border border-[#262626] px-4 py-3 text-xs text-white placeholder:text-[#505050] focus:outline-none focus:border-gold font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white-dim mb-2">
                    Tipo de Demanda
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-black border border-[#262626] px-4 py-3 text-xs text-white focus:outline-none focus:border-gold font-sans"
                  >
                    <option>Desenvolvimento de Plataforma Web ou SaaS</option>
                    <option>Auditoria de Arquitetura e Governança LGPD</option>
                    <option>Ferramental Desktop ou IA Local</option>
                    <option>Contratação de Engenheiro Sênior</option>
                    <option>Outro Alinhamento Técnico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white-dim mb-2">
                    Mensagem ou Escopo do Desafio
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Descreva o objetivo do projeto, requisitos ou prazos esperados..."
                    className="w-full bg-black border border-[#262626] px-4 py-3 text-xs text-white placeholder:text-[#505050] focus:outline-none focus:border-gold font-sans"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 bg-gold hover:bg-gold-hover text-black text-xs font-mono uppercase font-semibold transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando e-mail..." : "Enviar Mensagem Direta"}
                  </button>

                  <a
                    href={mailtoUrl}
                    className="text-center text-xs font-mono text-white-dim hover:text-gold underline py-2"
                  >
                    Ou envie via cliente de e-mail (mailto)
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
