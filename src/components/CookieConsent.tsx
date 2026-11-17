"use client";

import { useState, useEffect } from "react";

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
      {/* Editorial Floating Banner */}
      {showBanner && !showModal && (
        <aside
          role="dialog"
          aria-label="Consentimento de Cookies"
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#121212] border-t border-[#262626] p-4 sm:p-5 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gold font-semibold mb-1">
                Privacidade e Cookies
              </h4>
              <p className="text-xs text-white-muted leading-relaxed">
                Este portfólio utiliza cookies estritamente necessários para navegação e
                métricas anônimas de desempenho para verificar a estabilidade das demonstrações.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-3 py-1.5 text-xs font-mono text-white-dim hover:text-white border border-[#262626]"
              >
                Preferências
              </button>
              <button
                type="button"
                onClick={() => savePreferences(true)}
                className="px-3.5 py-1.5 text-xs font-mono text-white-muted hover:text-white border border-[#333333] bg-black"
              >
                Apenas Necessários
              </button>
              <button
                type="button"
                onClick={() => savePreferences(false)}
                className="px-4 py-1.5 text-xs font-mono font-semibold text-black bg-gold hover:bg-gold-hover"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-lg bg-[#121212] border border-[#262626] p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold">
                Preferências de Cookies
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-xs font-mono text-white-dim hover:text-white"
              >
                [ Fechar ]
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-black border border-[#262626] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">1. Cookies Essenciais</span>
                  <span className="text-[10px] font-mono text-gold uppercase">Sempre Ativo</span>
                </div>
                <p className="text-white-dim leading-relaxed">
                  Necessários para o funcionamento técnico da página e armazenamento do seu consentimento.
                </p>
              </div>

              <div className="p-4 bg-black border border-[#262626] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">2. Cookies de Análise</span>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="accent-gold w-4 h-4 cursor-pointer"
                  />
                </div>
                <p className="text-white-dim leading-relaxed">
                  Coleta anônima e agregada de telemetria técnica de carregamento da página.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#262626]">
              <button
                type="button"
                onClick={() => savePreferences(true)}
                className="px-4 py-2 text-xs font-mono text-white-dim border border-[#262626] hover:text-white"
              >
                Rejeitar Opcionais
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="px-5 py-2 text-xs font-mono font-semibold text-black bg-gold hover:bg-gold-hover"
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
