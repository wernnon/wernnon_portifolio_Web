"use client";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <footer className="bg-black border-t border-[#262626] py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#262626]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-gold/40 bg-burgundy-deep flex items-center justify-center p-1">
              <img
                src="/assets/images/welyz-signature-cropped.png"
                alt="Wernnon Ruiz"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-white block">
                Wernnon Ruiz
              </span>
              <span className="text-xs text-white-dim block">
                Engenharia de Software e Arquitetura de Sistemas
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider text-white-dim font-mono">
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-gold transition-colors">Projetos</a>
            <a href="#competencias" className="hover:text-gold transition-colors">Competências</a>
            <a href="#ferramental" className="hover:text-gold transition-colors">Ferramental</a>
            <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              type="button"
              onClick={openCookiePreferences}
              className="px-3 py-1.5 border border-[#262626] text-white-dim hover:text-gold hover:border-gold transition-colors"
            >
              Cookies
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="px-3 py-1.5 border border-[#262626] text-white-dim hover:text-gold hover:border-gold transition-colors"
            >
              Topo
            </button>
          </div>
        </div>

        {/* Legal & Standards */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white-dim">
          <p>
            Conformidade LGPD • Next.js 14 • Fastify • PostgreSQL • Electron
          </p>
          <p>
            © {new Date().getFullYear()} Wernnon Ruiz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
