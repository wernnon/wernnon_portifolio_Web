"use client";

import { useState, useEffect } from "react";
import { Cookie, Shield, Check, X, SlidersHorizontal } from "lucide-react";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  timestamp: string;
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("wernnon_cookie_consent");
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(saved) as CookiePreferences;
        setAnalyticsEnabled(parsed.analytics ?? false);
      } catch {
        setShowBanner(true);
      }
    }

    // Event listener to allow reopening from Footer
    const handleReopen = () => {
      setShowModal(true);
    };
    window.addEventListener("open-cookie-settings", handleReopen);
    return () => window.removeEventListener("open-cookie-settings", handleReopen);
  }, []);

  const savePreferences = (essentialOnly: boolean) => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: !essentialOnly,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("wernnon_cookie_consent", JSON.stringify(prefs));
    setAnalyticsEnabled(!essentialOnly);
    setShowBanner(false);
    setShowModal(false);
  };

  const saveCustom = () => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("wernnon_cookie_consent", JSON.stringify(prefs));
    setShowBanner(false);
    setShowModal(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Discrete Banner */}
      {showBanner && !showModal && (
        <aside
          role="dialog"
          aria-label="Consentimento de Cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="bg-[#121620]/95 backdrop-blur-xl border border-sand/25 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/60 text-slate-200">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-burgundy/60 border border-sand/30 flex items-center justify-center shrink-0 text-sand">
                <Cookie className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs sm:text-sm font-semibold text-white font-sans">
                  Privacidade & Preferências de Cookies
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-1 font-sans">
                  Este portfólio utiliza cookies estritamente necessários para navegação e
                  métricas anônimas de desempenho para otimizar a experiência técnica do visitante.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-obsidian-border/70">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-xs font-mono text-sand/90 hover:text-sand hover:underline flex items-center gap-1.5 px-2 py-1"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Preferências</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => savePreferences(true)}
                  className="px-3.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-obsidian-panel hover:bg-obsidian-elevated border border-obsidian-border rounded-lg transition-colors"
                >
                  Apenas Necessários
                </button>
                <button
                  type="button"
                  onClick={() => savePreferences(false)}
                  className="px-4 py-1.5 text-xs font-mono font-medium text-burgundy-darkest bg-sand hover:bg-sand-light rounded-lg shadow transition-colors"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-lg bg-[#121620] border border-sand/30 rounded-2xl shadow-2xl overflow-hidden p-6 text-slate-200 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-obsidian-border mb-4">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-sand" />
                <h3 className="text-base font-bold text-white">
                  Gerenciamento de Privacidade
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-1.5 text-slate-400 hover:text-white bg-obsidian-panel rounded-lg border border-obsidian-border"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              Personalize suas preferências de cookies. Suas escolhas são preservadas por até 12 meses
              e podem ser revistas a qualquer momento no rodapé do site.
            </p>

            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="p-3.5 rounded-xl bg-obsidian-panel border border-obsidian-border">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-100">
                      1. Cookies Essenciais
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald/20 text-emerald-light border border-emerald/30">
                      Sempre Ativo
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Obrigatório</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Essenciais para a navegabilidade fundamental, memorização de preferências de sessão
                  e integridade do site.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-3.5 rounded-xl bg-obsidian-panel border border-obsidian-border">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-slate-100">
                    2. Cookies de Análise e Desempenho
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-obsidian-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sand" />
                  </label>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Permitem mensurar o volume agregado e anônimo de acessos para aprimorar o desempenho
                  e tempo de resposta das demonstrações interativas.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-obsidian-border">
              <button
                type="button"
                onClick={() => savePreferences(true)}
                className="px-3.5 py-2 text-xs font-mono text-slate-300 hover:text-white bg-obsidian-panel border border-obsidian-border rounded-xl"
              >
                Rejeitar Opcionais
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="px-4 py-2 text-xs font-mono font-medium text-burgundy-darkest bg-sand hover:bg-sand-light rounded-xl shadow"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
