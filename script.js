/**
 * Wernnon Ruiz - Portfólio de Engenharia de Software
 * Script Vanilla JS - 100% Estático e Autônomo (Zero Dependências Node)
 */

// ==========================================
// 1. DADOS DOS PROJETOS (PROJECTS_DATA)
// ==========================================
const PROJECTS_DATA = [
  {
    id: "construindo-campeoes",
    title: "Construindo Campeões",
    subtitle: "Plataforma de Gestão Socioesportiva em Escala Municipal",
    category: "Governança Pública",
    clientOrScope: "Prefeitura Municipal de Porto Velho / SEMTEL",
    period: "2025 - Atual",
    status: "Produção Ativa",
    projectUrl: "", // Configure aqui caso possua URL online (ex: https://portovelho.ro.gov.br)
    repoUrl: "",
    summary:
      "Plataforma governamental corporativa desenvolvida para a Secretaria Municipal de Turismo, Esporte e Lazer (SEMTEL), gerindo o ciclo completo de iniciação socioesportiva, prevenção ativa da evasão e controle territorial em múltiplos polos com auditoria forense integral.",
    problem:
      "A gestão pública municipal enfrentava dispersão de dados em planilhas físicas, ausência de rastreamento territorial de frequência em áreas periféricas, risco de fraude em matrículas e falta de conformidade com a LGPD no tratamento de dados de menores de idade.",
    solution:
      "Arquitetura escalável em Next.js App Router combinada a backend Fastify com tipagem estrita via TypeScript e Zod. Sistema de controle de acesso granular RBAC com 5 níveis de permissão, diário de classe digital com prontuário médico e anamnese inclusiva, além de trilha de auditoria forense registrando JSON Diff, IP e User-Agent em cada alteração sensível.",
    techStack: [
      "Next.js 14", "Fastify", "TypeScript", "PostgreSQL", "Prisma ORM",
      "Tailwind CSS", "Radix UI", "Recharts", "Zod", "Nodemailer"
    ],
    metrics: [
      { label: "Economia Estimada de Tempo", value: "~75%", detail: "No fechamento mensal e conciliação de frequência por polo" },
      { label: "Prevenção da Evasão Escolar", value: "Alerta Precoce", detail: "Identificação preditiva de faltas consecutivas antes da evasão" },
      { label: "Governança e Auditoria", value: "Tempo Zero", detail: "Auditoria contínua com trilha forense imutável via JSON Diff" },
      { label: "Conformidade Regulatória", value: "100% LGPD", detail: "Blindagem de dados sensíveis e prontuários médicos de menores" }
    ],
    images: [
      {
        src: "assets/images/semtel-dashboard.jpg",
        alt: "SEMTEL - Painel Analítico de Governança Socioesportiva",
        caption: "Painel Analítico de Governança Municipal: Indicadores consolidados de alunos, 16 polos e 30 turmas com mapa de frequência territorial."
      },
      {
        src: "assets/images/semtel-ballet.jpg",
        alt: "SEMTEL - Diário de Classe Digital e Prontuário de Alunos",
        caption: "Diário de Classe Granular: Turma de Ballet na Academia Dragon (programa Qualidade de Vida) com registro de presença digital e prontuário."
      }
    ]
  },
  {
    id: "dev-automation-kit",
    title: "Dev Automation Kit",
    subtitle: "Suíte de Diagnósticos e Compilador de Contexto Local para IA",
    category: "Ferramental IA / Local",
    clientOrScope: "Estação de Trabalho Autônoma para Engenharia de Software",
    period: "2026 - Atual",
    status: "Alpha Estável",
    projectUrl: "https://dev-automation-kit.github.io/dev-automation-kit-web/",
    summary:
      "Estação de trabalho desktop desenvolvida para higienização estrita de bases de código e compilação de pacotes de contexto otimizados para Grandes Modelos de Linguagem (Claude 3.5, Gemini 1.5/2.0, GPT-4o, Cursor), operando cem por cento offline sem vazamento de dados confidenciais.",
    problem:
      "Engenheiros enfrentavam estouro de janelas de contexto em LLMs, inclusão inadvertida de binários e chaves de API sensíveis (.env), e lentidão extrema na montagem manual de arquivos para prompts complexos de refatoração.",
    solution:
      "Aplicação desktop em Electron v28+ com IPC bridge isolado e seguro (contextBridge), motor local de AST e algoritmo de janelas deslizantes para detecção de código duplicado (CPD). Inclui árvore de arquivos interativa em cascata, cálculo de tokens em tempo real e particionamento inteligente por pastas (--by-folder).",
    techStack: [
      "Electron 28+", "Node.js 20+", "JavaScript ESM", "CSS Modular",
      "View Loader Engine", "AST Parser", "Sliding Window CPD"
    ],
    metrics: [
      { label: "Gasto Médio de Tokens a Menos", value: "-45% a -70%", detail: "Expectativa média de economia por eliminação cirúrgica de ruído e binários" },
      { label: "Economia Estimada de Tempo", value: "~85% mais ágil", detail: "Empacotamento automático de contexto vs. montagem manual de arquivos" },
      { label: "Risco de Vazamento de Segredos", value: "0% Exposição", detail: "Higienização in-memory 100% offline de chaves de API e variáveis .env" },
      { label: "Precisão dos Modelos (LLMs)", value: "+40% Assertividade", detail: "Prevenção de alucinações e perda de instruções por saturação de contexto" }
    ],
    images: [
      {
        src: "assets/images/dev-automation-kit.jpg",
        alt: "Dev Automation Kit - Compilador de Contexto e Diagnóstico",
        caption: "Compilador em Operação: Repositório com 460 arquivos selecionados, 2.31 MB, cálculo de tokens em tempo real e isolamento local."
      }
    ]
  },
  {
    id: "wlw-pro",
    title: "WLW PRO",
    subtitle: "Sistema Unificado de Reservas e Inventários de Hospitalidade",
    category: "SaaS & Hotelaria",
    clientOrScope: "Empreendimento de Locação por Temporada e Hotelaria",
    period: "2026 - Atual",
    status: "Produção Ativa",
    projectUrl: "",
    repoUrl: "",
    summary:
      "Plataforma completa de gestão imobiliária e hospitalidade que elimina overbooking por validação temporal matemática estrita, audita o ciclo de integridade de ativos de luxo e automatiza reservas via Central WhatsApp com failover humano.",
    problem:
      "Perdas financeiras por overbooking em períodos de alta temporada, avarias em itens caros de suítes sem identificação de responsáveis e sobrecarga no atendimento manual de hóspedes pelo WhatsApp.",
    solution:
      "Motor matemático de validação de intervalos temporais (startA < endB && endA > startB), inventário detalhado pré e pós-estadia com emissão de relatórios periciais com fotos, e integração direta com WhatsApp Web gerenciando fila de atendimento e robô de reservas 24h.",
    techStack: [
      "Next.js 14", "Fastify 4", "PostgreSQL", "Prisma ORM",
      "Electron", "WhatsApp Web.js", "PDFKit", "Tailwind CSS"
    ],
    metrics: [
      { label: "Prevenção de Overbooking", value: "100% Blindado", detail: "Eliminação total de conflitos de agenda por validação matemática estrita" },
      { label: "Tendência a Ganho em Reservas", value: "+35% a +50%", detail: "Captação contínua e triagem 24/7 de hóspedes na Central WhatsApp" },
      { label: "Economia em Resolução de Avarias", value: "~90% Prevenção", detail: "Vistoria fotográfica pré e pós-estadia com laudo pericial formal" },
      { label: "Tempo de Primeiro Contato", value: "< 1 min", detail: "Expectativa de resposta ágil sem fila de espera para o cliente" }
    ],
    images: [
      {
        src: "assets/images/wlw-dashboard.jpg",
        alt: "WLW PRO - Painel de Controle Financeiro e Calendário de Reservas",
        caption: "Painel de Controle: Faturamento consolidado, reservas ativas no período e calendário de ocupação com zero sobreposições."
      },
      {
        src: "assets/images/wlw-whatsapp.jpg",
        alt: "WLW PRO - Central de Atendimento WhatsApp e Robô de Reservas",
        caption: "Central de Atendimento WhatsApp: Pareamento via QR Code, lista de hóspedes ativos e alternância ágil entre IA e operador humano."
      }
    ]
  },
  {
    id: "boru-centro-combate",
    title: "Borü Centro de Combate",
    subtitle: "Ecossistema Integrado de Gestão Marcial e Alta Retenção",
    category: "Gestão Esportiva",
    clientOrScope: "Centro de Treinamento e Academia de Artes Marciais",
    period: "2024 - 2026",
    status: "Produção Ativa",
    projectUrl: "",
    repoUrl: "",
    summary:
      "Ecossistema completo para academias de combate combinando landing page de alta conversão, controle de grade de horários com filtros inteligentes de turno, chamada em 1 clique na beira do tatame e portal mobile-first gamificado com Streak do Guerreiro.",
    problem:
      "Alta taxa de evasão de alunos após 3 meses de treino, atrito no processo de matrícula manual e perda de tempo dos professores preenchendo fichas de presença em papel durante os treinos.",
    solution:
      "Plataforma modular em monorepo com React 18, Vite e Express. Portal do aluno gamificado com acompanhamento de graduação por prajied/faixas, medalhas desbloqueáveis (Primeiro Sangue, Casca Grossa) e tabela dinâmica de planos com conversão otimizada.",
    techStack: [
      "React 18", "Vite", "Tailwind CSS", "Node.js",
      "Express", "SQLite + Prisma", "Lucide React", "Axios"
    ],
    metrics: [
      { label: "Retenção no 1º Trimestre", value: "Tendência +30%", detail: "Combate ao churn inicial via gamificação e Streak do Guerreiro" },
      { label: "Economia de Tempo por Treino", value: "~95% por aula", detail: "Chamada no tatame em 1 clique liberando o mestre para o treino técnico" },
      { label: "Conversão em Aulas Experimentais", value: "Tendência +45%", detail: "Landing page objetiva com agendamento direto e sem taxa oculta" },
      { label: "Previsibilidade de Receita", value: "Fluxo Recorrente", detail: "Automação de lembretes e planos periódicos reduzindo inadimplência" }
    ],
    images: [
      {
        src: "assets/images/boru-hero.jpg",
        alt: "Borü Centro de Combate - Hero e Proposta de Valor",
        caption: "Landing Page Institucional: Mais que um treino, uma transformação. +500 alunos ativos e tatame climatizado de 180 m²."
      },
      {
        src: "assets/images/boru-planos.png",
        alt: "Borü - Matriz de Planos de Treinamento",
        caption: "Tabela de Planos de Treinamento: Valores transparentes (2x, 3x, 5x na semana) e destaque carmesim para o Plano Livre."
      },
      {
        src: "assets/images/boru-horarios.jpg",
        alt: "Borü - Grade Completa de Horários de Treino",
        caption: "Grade de Horários Dinâmica: Filtros de turnos (Manhã, Tarde, Noite) e turmas conduzidas pela equipe técnica."
      }
    ]
  },
  {
    id: "zapp-cidadao-on",
    title: "Zapp Cidadão ON",
    subtitle: "Atendimento Cívico Inteligente e Zeladoria Urbana",
    category: "Tecnologia Cívica",
    clientOrScope: "Comunidade e Gestão Urbana de Porto Velho",
    period: "2025 - 2026",
    status: "Implantado",
    projectUrl: "",
    repoUrl: "",
    summary:
      "Plataforma de canal direto para denúncias de infraestrutura urbana (descarte irregular de entulho, iluminação pública, recapeamento) com triagem por WhatsApp, geração de protocolo unificado, mapa de calor territorial e estrita conformidade com a LGPD.",
    problem:
      "Moradores tinham dificuldade de registrar demandas públicas em canais burocráticos, enquanto a zeladoria não tinha visualização espacial das ocorrências por bairro para planejar rotas de manutenção.",
    solution:
      "Bot com menu conversacional intuitivo, extração de GPS e geocodificação reversa de endereços da capital rondoniense, persistência com Repository Pattern, painel BI com mapas de calor via Leaflet.js e anonimização de telefones dos cidadãos.",
    techStack: [
      "Node.js", "Express", "WhatsApp Web.js", "Leaflet.js & Heat",
      "Chart.js", "PostgreSQL & Firestore", "LGPD Anonymizer"
    ],
    metrics: [
      { label: "Economia de Tempo na Triagem", value: "~60% mais ágil", detail: "Abertura instantânea de chamados com auto-classificação de demandas" },
      { label: "Eficiência de Despacho Operacional", value: "Roteirização Otimizada", detail: "Direcionamento geográfico de equipes municipais por mapa de calor" },
      { label: "Rastreabilidade do Munícipe", value: "100% dos Protocolos", detail: "Expectativa de acompanhamento em tempo real sem intermediários" },
      { label: "Garantia de Privacidade Cidadã", value: "Conformidade LGPD", detail: "Anonimização nativa de contatos em relatórios públicos de zeladoria" }
    ],
    images: [] // Sem screenshot estático - usa demonstração interativa de despacho cívico
  }
];

// ==========================================
// 2. DADOS DO LABORATÓRIO (TREE_DATA)
// ==========================================
const TREE_DATA = [
  { id: "gitca", name: ".gitca", size: "3.2 KB", tokens: "~817 tk", tokenCount: 817, sizeBytes: 3200, isFolder: false },
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
      { id: "api-prisma", name: "prisma/schema.prisma", size: "12.4 KB", tokens: "~1.315 tk", tokenCount: 1315, sizeBytes: 12400, isFolder: false }
    ]
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
      { id: "front-lib", name: "lib (Adapters e Clientes)", size: "148.4 KB", tokens: "~38.020 tk", tokenCount: 38020, sizeBytes: 148400, isFolder: false }
    ]
  },
  { id: "pkg", name: "package.json", size: "2.5 KB", tokens: "~641 tk", tokenCount: 641, sizeBytes: 2500, isFolder: false }
];

// ==========================================
// 3. ESTADO GLOBAL DA APLICAÇÃO
// ==========================================
let currentProjectIndex = 0;
let currentImageIndex = 0;
let selectedTreeIds = new Set([
  "gitca", "api", "api-server", "api-routes", "api-prisma",
  "front", "front-app", "front-comp", "front-hooks", "front-lib", "pkg"
]);

// ==========================================
// 4. INICIALIZAÇÃO NO CARREGAMENTO DO DOM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initProjectNavigation();
  initDeveloperLabTree();
  initContactForm();
  initCookieConsent();
  initLightbox();
  initMobileMenu();
});

// ==========================================
// 5. NAVEGAÇÃO E RENDERIZAÇÃO DOS PROJETOS
// ==========================================
function initProjectNavigation() {
  renderProjectSelectorTabs();
  renderActiveProject();

  // Botões de navegação no topo e no rodapé
  const prevBtns = document.querySelectorAll(".btn-prev-project");
  const nextBtns = document.querySelectorAll(".btn-next-project");

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentProjectIndex = (currentProjectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
      currentImageIndex = 0;
      renderProjectSelectorTabs();
      renderActiveProject();
    });
  });

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentProjectIndex = (currentProjectIndex + 1) % PROJECTS_DATA.length;
      currentImageIndex = 0;
      renderProjectSelectorTabs();
      renderActiveProject();
    });
  });
}

function renderProjectSelectorTabs() {
  const container = document.getElementById("project-selector-tabs");
  if (!container) return;

  container.innerHTML = PROJECTS_DATA.map((proj, idx) => {
    const isSelected = idx === currentProjectIndex;
    return `
      <button
        type="button"
        onclick="selectProjectByIndex(${idx})"
        class="text-left p-3 sm:p-3.5 transition-all border ${
          isSelected
            ? "bg-[#180407] border-gold text-white shadow-sm"
            : "bg-[#121212] border-[#262626] text-white-dim hover:text-white hover:border-[#404040]"
        }"
      >
        <div class="flex items-center justify-between mb-1">
          <span class="text-[10px] font-mono ${isSelected ? "text-gold font-bold" : "text-white-dim"}">
            0${idx + 1}
          </span>
          <div class="flex items-center gap-1.5">
            ${proj.projectUrl ? `<span class="text-[10px] font-mono text-gold" title="Possui página online">↗</span>` : ""}
            ${isSelected ? `<span class="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>` : ""}
          </div>
        </div>
        <span class="text-xs font-semibold block leading-tight truncate">
          ${proj.title}
        </span>
        <span class="text-[10px] text-white-dim block mt-0.5 font-mono truncate">
          ${proj.category}
        </span>
      </button>
    `;
  }).join("");
}

function selectProjectByIndex(idx) {
  currentProjectIndex = idx;
  currentImageIndex = 0;
  renderProjectSelectorTabs();
  renderActiveProject();
}

function renderActiveProject() {
  const proj = PROJECTS_DATA[currentProjectIndex];
  if (!proj) return;

  // Contador do topo (ex: 01 / 05)
  const counterEl = document.getElementById("project-counter-text");
  if (counterEl) {
    counterEl.innerHTML = `Projeto <span class="text-gold font-bold">0${currentProjectIndex + 1}</span> / 0${PROJECTS_DATA.length}`;
  }

  // Categoria e Período
  const metaEl = document.getElementById("project-meta-category");
  if (metaEl) {
    metaEl.innerHTML = `<span>${proj.category}</span> <span>•</span> <span>${proj.period}</span>`;
  }

  // Título e Escopo
  const titleEl = document.getElementById("project-title");
  if (titleEl) titleEl.textContent = proj.title;

  const scopeEl = document.getElementById("project-scope");
  if (scopeEl) scopeEl.textContent = proj.clientOrScope;

  const summaryEl = document.getElementById("project-summary");
  if (summaryEl) summaryEl.textContent = proj.summary;

  // Botões de Link Externo (Caso possua)
  const linksContainer = document.getElementById("project-external-links");
  if (linksContainer) {
    let linksHtml = "";
    if (proj.projectUrl) {
      linksHtml += `
        <a
          href="${proj.projectUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-black bg-gold hover:bg-white transition-colors border border-gold"
        >
          <span>Acessar Página do Projeto</span>
          <span class="text-sm leading-none">↗</span>
        </a>
      `;
    }
    if (proj.repoUrl) {
      linksHtml += `
        <a
          href="${proj.repoUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-white-dim hover:text-white bg-[#121212] hover:border-gold transition-colors border border-[#262626]"
        >
          <span>Repositório</span>
          <span class="text-sm leading-none">↗</span>
        </a>
      `;
    }
    linksContainer.innerHTML = linksHtml;
    linksContainer.style.display = linksHtml ? "flex" : "none";
  }

  // Métricas de Expectativa de Desempenho (2x2 Grid)
  const metricsContainer = document.getElementById("project-metrics-grid");
  if (metricsContainer) {
    metricsContainer.innerHTML = proj.metrics.map((m) => `
      <div class="p-3 bg-[#121212] border border-[#262626] flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-mono text-white-dim uppercase tracking-wider block mb-1 leading-tight line-clamp-1" title="${m.label}">
            ${m.label}
          </span>
          <span class="text-base sm:text-lg font-mono font-bold text-gold block leading-tight">
            ${m.value}
          </span>
        </div>
        ${m.detail ? `<span class="text-[10px] text-white-dim block mt-1.5 leading-snug">${m.detail}</span>` : ""}
      </div>
    `).join("");
  }

  // Desafio e Solução
  const problemEl = document.getElementById("project-problem");
  if (problemEl) problemEl.textContent = proj.problem;

  const solutionEl = document.getElementById("project-solution");
  if (solutionEl) solutionEl.textContent = proj.solution;

  // Stack Tecnológica
  const techContainer = document.getElementById("project-tech-stack");
  if (techContainer) {
    techContainer.innerHTML = proj.techStack.map((t) => `
      <span class="px-2 py-0.5 text-[11px] font-mono text-white-dim bg-[#121212] border border-[#262626]">
        ${t}
      </span>
    `).join("");
  }

  // Visual Showcase (Lado Direito: Imagens com abas ou simulação interativa)
  renderVisualShowcase(proj);

  // Botões de navegação no rodapé
  const prevTitleEl = document.getElementById("bottom-prev-project-name");
  const nextTitleEl = document.getElementById("bottom-next-project-name");
  const prevIdx = (currentProjectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
  const nextIdx = (currentProjectIndex + 1) % PROJECTS_DATA.length;
  if (prevTitleEl) prevTitleEl.textContent = PROJECTS_DATA[prevIdx].title;
  if (nextTitleEl) nextTitleEl.textContent = PROJECTS_DATA[nextIdx].title;
}

function renderVisualShowcase(proj) {
  const showcaseContainer = document.getElementById("project-visual-showcase");
  if (!showcaseContainer) return;

  if (proj.images && proj.images.length > 0) {
    const curImg = proj.images[currentImageIndex] || proj.images[0];
    showcaseContainer.innerHTML = `
      <div class="space-y-3">
        <!-- Visual Header & Image Switcher Tabs -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#262626]">
          <div class="flex items-center gap-2.5">
            <span class="text-[11px] font-mono uppercase tracking-widest text-gold font-semibold">
              Registro Visual em Produção
            </span>
            ${proj.images.length > 1 ? `<span class="text-[10px] font-mono text-white-dim">(${currentImageIndex + 1}/${proj.images.length})</span>` : ""}
            ${proj.projectUrl ? `
              <a
                href="${proj.projectUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[10px] font-mono text-gold hover:text-white transition-colors flex items-center gap-0.5"
                title="Visitar página do projeto"
              >
                <span>[Acessar página ↗]</span>
              </a>
            ` : ""}
          </div>

          ${proj.images.length > 1 ? `
            <div class="flex items-center gap-1.5 flex-wrap">
              ${proj.images.map((img, idx) => `
                <button
                  type="button"
                  onclick="selectProjectImage(${idx})"
                  class="px-2.5 py-1 text-[10px] font-mono transition-colors border ${
                    currentImageIndex === idx
                      ? "bg-gold text-black font-semibold border-gold"
                      : "bg-[#121212] text-white-dim border-[#262626] hover:text-white hover:border-[#404040]"
                  }"
                >
                  Visão 0${idx + 1}
                </button>
              `).join("")}
            </div>
          ` : ""}
        </div>

        <!-- Screenshot Container with Lightbox Click -->
        <div
          onclick="openLightbox('${curImg.src}', '${curImg.alt}', '${curImg.caption}', '${proj.title}')"
          class="relative border border-[#262626] bg-[#000000] p-2 cursor-pointer hover:border-gold transition-colors group flex items-center justify-center overflow-hidden"
          style="min-height: 360px; max-height: 500px;"
        >
          <img
            src="${curImg.src}"
            alt="${curImg.alt}"
            class="w-full h-auto max-h-[460px] object-contain block mx-auto group-hover:scale-[1.01] transition-transform duration-200"
          />
          <div class="absolute top-4 right-4 bg-black/80 border border-[#404040] px-2.5 py-1 text-[11px] font-mono text-white-dim opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 backdrop-blur-sm">
            <span>Inspecionar</span>
            <span class="text-gold">⤢</span>
          </div>
        </div>

        <!-- Caption Box -->
        <div class="flex items-start justify-between gap-4 p-3 bg-[#121212] border border-[#262626]">
          <p class="text-xs text-white-dim leading-relaxed">
            <span class="text-white font-medium block sm:inline mr-1">${curImg.alt}:</span>
            ${curImg.caption}
          </p>
          <button
            type="button"
            onclick="openLightbox('${curImg.src}', '${curImg.alt}', '${curImg.caption}', '${proj.title}')"
            class="shrink-0 text-[11px] font-mono text-gold hover:underline self-end sm:self-auto"
          >
            Ampliar ⤢
          </button>
        </div>
      </div>
    `;
  } else {
    // Zapp Cidadão ON - Fluxo Cívico Interativo
    showcaseContainer.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-[#262626]">
          <span class="text-[11px] font-mono uppercase tracking-widest text-gold font-semibold">
            Fluxo de Atendimento Cívico & Geoprocessamento
          </span>
          <span class="text-[10px] font-mono text-emerald-400">
            ● Canal Ativo
          </span>
        </div>

        <div class="border border-[#262626] bg-[#000000] p-6 font-mono text-xs space-y-5" style="min-height: 380px;">
          <div class="border-b border-[#262626] pb-4 flex items-center justify-between text-white-dim">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span class="text-white font-semibold">Zapp Cidadão ON • Motor de Zeladoria</span>
            </div>
            <span class="text-[11px] text-gold">Protocolo Unificado</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-3 p-4 bg-[#121212] border border-[#262626]">
              <p class="text-gold font-semibold uppercase text-[11px]">Triagem & Georreferenciamento</p>
              <div class="space-y-1.5 text-white-dim text-[11px]">
                <p><span class="text-white">Canal:</span> WhatsApp Web.js (Porto Velho - RO)</p>
                <p><span class="text-white">Demanda:</span> Descarte irregular / Iluminação pública</p>
                <p><span class="text-white">GPS:</span> -8.7619° S, -63.9039° W (Bairro Embratel)</p>
                <p><span class="text-white">Despacho:</span> Roteirização via Leaflet Heatmap</p>
                <p><span class="text-emerald-400">Status:</span> Encaminhado à Secretaria Municipal</p>
              </div>
            </div>

            <div class="space-y-3 p-4 bg-[#121212] border border-[#262626]">
              <p class="text-gold font-semibold uppercase text-[11px]">Segurança & Conformidade LGPD</p>
              <div class="space-y-1.5 text-white-dim text-[11px]">
                <p><span class="text-white">Protocolo:</span> <span class="text-gold font-bold">ZC-ZELA-2026-F91A</span></p>
                <p><span class="text-white">Anonimização:</span> 5569****1234 (Hashing SHA-256)</p>
                <p><span class="text-white">Persistência:</span> Firestore (Realtime) + Postgres</p>
                <p><span class="text-white">Acompanhamento:</span> Consulta direta pelo munícipe</p>
                <p><span class="text-emerald-400">Privacidade:</span> Zero dados expostos publicamente</p>
              </div>
            </div>
          </div>

          <div class="p-3 bg-[#180407] border border-gold/40 text-[11px] text-white-muted leading-relaxed">
            <span class="text-gold font-semibold">Impacto Operacional:</span> Eliminação de triagens burocráticas com redução de ~60% no tempo de despacho de equipes municipais e total rastreabilidade do protocolo para o cidadão.
          </div>
        </div>
      </div>
    `;
  }
}

function selectProjectImage(idx) {
  currentImageIndex = idx;
  const proj = PROJECTS_DATA[currentProjectIndex];
  renderVisualShowcase(proj);
}

// ==========================================
// 6. MODAL LIGHTBOX
// ==========================================
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close-btn");

  if (!modal) return;

  const close = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", close);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      close();
    }
  });
}

function openLightbox(src, alt, caption, title) {
  const modal = document.getElementById("lightbox-modal");
  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const captionEl = document.getElementById("lightbox-caption");

  if (!modal || !imgEl) return;

  imgEl.src = src;
  imgEl.alt = alt || "";
  if (titleEl) titleEl.textContent = title || "";
  if (captionEl) captionEl.textContent = caption || alt || "";

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// ==========================================
// 7. LABORATÓRIO DO DESENVOLVEDOR (TREE & TERMINAL)
// ==========================================
function initDeveloperLabTree() {
  renderDeveloperLabTree();
  updateLabCounters();

  const generateBtn = document.getElementById("btn-generate-context");
  if (generateBtn) {
    generateBtn.addEventListener("click", handleGenerateContext);
  }
}

function renderDeveloperLabTree() {
  const container = document.getElementById("lab-tree-container");
  if (!container) return;

  container.innerHTML = TREE_DATA.map((node) => {
    const isChecked = selectedTreeIds.has(node.id);
    return `
      <div class="space-y-1">
        <div class="flex items-start sm:items-center justify-between py-1.5 px-2 hover:bg-[#121212] gap-2 rounded-none transition-colors">
          <button
            type="button"
            onclick="toggleTreeSelection('${node.id}', ${Boolean(node.children)})"
            class="flex items-start sm:items-center gap-2.5 text-left min-w-0 flex-1 group"
          >
            <span class="w-3.5 h-3.5 border flex items-center justify-center text-[10px] shrink-0 mt-0.5 sm:mt-0 ${
              isChecked ? "border-gold bg-gold text-black font-bold" : "border-[#404040] group-hover:border-gold"
            }">
              ${isChecked ? "✕" : ""}
            </span>
            <span class="break-words text-xs leading-snug ${node.isFolder ? "font-semibold text-white" : "text-white-dim"}">
              ${node.name}
            </span>
          </button>
          <div class="flex flex-col sm:flex-row items-end sm:items-center gap-0.5 sm:gap-4 text-white-dim text-[10px] sm:text-[11px] shrink-0 text-right whitespace-nowrap pl-2">
            <span class="whitespace-nowrap text-white-dim/80">${node.size}</span>
            <span class="whitespace-nowrap text-gold">${node.tokens}</span>
          </div>
        </div>

        ${node.children ? `
          <div class="pl-3 sm:pl-6 border-l border-[#262626] ml-1.5 sm:ml-3 space-y-1">
            ${node.children.map((child) => {
              const isChildChecked = selectedTreeIds.has(child.id);
              return `
                <div class="flex items-start sm:items-center justify-between py-1.5 px-2 hover:bg-[#121212] gap-2 rounded-none transition-colors">
                  <button
                    type="button"
                    onclick="toggleTreeSelection('${child.id}', false)"
                    class="flex items-start sm:items-center gap-2.5 text-left min-w-0 flex-1 text-white-dim hover:text-white group"
                  >
                    <span class="w-3.5 h-3.5 border flex items-center justify-center text-[10px] shrink-0 mt-0.5 sm:mt-0 ${
                      isChildChecked ? "border-gold bg-gold text-black font-bold" : "border-[#404040] group-hover:border-gold"
                    }">
                      ${isChildChecked ? "✕" : ""}
                    </span>
                    <span class="break-words text-xs leading-snug">${child.name}</span>
                  </button>
                  <div class="flex flex-col sm:flex-row items-end sm:items-center gap-0.5 sm:gap-4 text-white-dim text-[10px] sm:text-[11px] shrink-0 text-right whitespace-nowrap pl-2">
                    <span class="whitespace-nowrap text-white-dim/80">${child.size}</span>
                    <span class="whitespace-nowrap text-gold">${child.tokens}</span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        ` : ""}
      </div>
    `;
  }).join("");

  const selectedCountEl = document.getElementById("lab-tree-marked-count");
  if (selectedCountEl) selectedCountEl.textContent = `${selectedTreeIds.size} itens marcados`;
}

function toggleTreeSelection(nodeId, hasChildren) {
  const willSelect = !selectedTreeIds.has(nodeId);

  const apply = (id, sel) => {
    if (sel) selectedTreeIds.add(id);
    else selectedTreeIds.delete(id);
  };

  apply(nodeId, willSelect);

  if (hasChildren) {
    const parentNode = TREE_DATA.find((n) => n.id === nodeId);
    if (parentNode && parentNode.children) {
      parentNode.children.forEach((c) => apply(c.id, willSelect));
    }
  }

  renderDeveloperLabTree();
  updateLabCounters();
}

function updateLabCounters() {
  const countEl = document.getElementById("lab-counter-files");
  const volumeEl = document.getElementById("lab-counter-volume");
  const tokensEl = document.getElementById("lab-counter-tokens");

  if (countEl) countEl.innerHTML = `${selectedTreeIds.size} <span class="text-xs font-normal text-white-dim">/ 590</span>`;

  let totalBytes = 0;
  let totalTokens = 0;

  const traverse = (nodes) => {
    for (const n of nodes) {
      if (selectedTreeIds.has(n.id)) {
        if (!n.children) {
          totalBytes += n.sizeBytes || 0;
          totalTokens += n.tokenCount || 0;
        }
      }
      if (n.children) traverse(n.children);
    }
  };

  traverse(TREE_DATA);

  const totalMb = (totalBytes / (1024 * 1024)).toFixed(2);
  if (volumeEl) volumeEl.textContent = `${totalMb} MB`;
  if (tokensEl) tokensEl.textContent = `~${totalTokens.toLocaleString("pt-BR")}`;
}

function handleGenerateContext() {
  const btn = document.getElementById("btn-generate-context");
  const statusBox = document.getElementById("lab-status-box");

  if (!btn) return;

  btn.disabled = true;
  btn.textContent = "Compilando...";

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "Gerar Contexto";
    if (statusBox) {
      statusBox.classList.remove("hidden");
    }
  }, 600);
}

// ==========================================
// 8. FORMULÁRIO DE CONTATO DIRETO COM FALLBACK RESILIENTE
// ==========================================
function initContactForm() {
  const form = document.getElementById("contact-direct-form");
  if (!form) return;

  // 1. Detectar retorno via redirect do FormSubmit (se navegou via GET com ?status=enviado)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("status") === "enviado" || urlParams.get("success") === "true") {
    showContactStatusHtml(
      `<div class="space-y-1">
        <p class="font-bold text-emerald-400">✓ Mensagem enviada com sucesso!</p>
        <p class="text-white-dim text-[11px]">Seu contato foi recebido diretamente por Wernnon Ruiz. Entrarei em contato em até 24 horas úteis.</p>
      </div>`,
      "success"
    );
    // Limpa a URL para evitar re-exibir o banner ao recarregar
    if (window.history && window.history.replaceState) {
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }

  // 2. Configurar campo oculto de redirecionamento dinâmico
  const redirectInput = document.getElementById("form-redirect-next");
  if (redirectInput) {
    redirectInput.value = window.location.origin + window.location.pathname + "?status=enviado#contato";
  }

  // 3. Atualizar assunto oculto ao alterar o select
  const subjectSelect = document.getElementById("input-subject");
  const hiddenSubject = document.getElementById("hidden-email-subject");
  if (subjectSelect && hiddenSubject) {
    subjectSelect.addEventListener("change", () => {
      hiddenSubject.value = `[Portfólio Wernnon Ruiz] ${subjectSelect.value}`;
    });
  }

  // 4. Manipulador de envio com fallbacks resilientes
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("contact-submit-btn");
    const statusMsg = document.getElementById("contact-status-msg");

    const name = document.getElementById("input-name")?.value.trim() || "";
    const email = document.getElementById("input-email")?.value.trim() || "";
    const subject = document.getElementById("input-subject")?.value.trim() || "Desenvolvimento de Projeto";
    const message = document.getElementById("input-message")?.value.trim() || "";

    if (!name || !email || !message) {
      showContactStatusHtml("Por favor, preencha todos os campos obrigatórios (*).", "error");
      return;
    }

    // Links de fallback pré-preenchidos imediatos
    const emailSubjectEncoded = encodeURIComponent(`[Portfólio Wernnon Ruiz] ${subject}: ${name}`);
    const emailBodyEncoded = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`);
    const mailtoUrl = `mailto:ruizwernnon@gmail.com?subject=${emailSubjectEncoded}&body=${emailBodyEncoded}`;
    const waTextEncoded = encodeURIComponent(`Olá Wernnon, meu nome é ${name} (${email}). Entro em contato sobre "${subject}":\n\n${message}`);
    const whatsappUrl = `https://wa.me/5569992473397?text=${waTextEncoded}`;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Despachando...";
    }
    if (statusMsg) statusMsg.classList.add("hidden");

    // Caso a página esteja aberta diretamente via file:/// (sem servidor web)
    if (window.location.protocol === "file:") {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar Mensagem Direta";
      }
      showContactStatusHtml(`
        <div class="space-y-3">
          <p class="font-bold text-amber-400">⚠️ Modo Local (Arquivo Offline Detectado)</p>
          <p class="text-white-dim text-[11px] leading-relaxed">
            Navegadores bloqueiam requisições AJAX externas ao abrir arquivos diretamente via <code>file:///</code>. Escolha uma das opções imediatas abaixo para enviar:
          </p>
          <div class="flex flex-wrap items-center gap-2 pt-1">
            <a href="${mailtoUrl}" class="px-3.5 py-1.5 bg-gold text-black font-semibold text-[11px] uppercase tracking-wider hover:bg-white transition-colors">
              Abrir no seu E-mail (Gmail/Outlook) ↗
            </a>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 bg-[#121212] border border-[#262626] text-white hover:border-gold hover:text-gold transition-colors text-[11px] font-mono">
              Enviar pelo WhatsApp ↗
            </a>
          </div>
        </div>
      `, "warning");
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/ruizwernnon@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfólio Wernnon Ruiz] ${subject}: ${name}`,
          message: message,
          _replyto: email,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await res.json();
      const isSuccess = data && (data.success === true || data.success === "true");

      if (isSuccess) {
        showContactStatusHtml(`
          <div class="space-y-1">
            <p class="font-bold text-emerald-400">✓ Mensagem despachada com sucesso!</p>
            <p class="text-white-dim text-[11px]">Seu contato foi entregue para ruizwernnon@gmail.com. Entrarei em contato em até 24h úteis.</p>
          </div>
        `, "success");
        form.reset();
      } else {
        const msg = data?.message || "";
        if (msg.toLowerCase().includes("activation") || msg.toLowerCase().includes("activate")) {
          // Caso o endpoint FormSubmit esteja aguardando a ativação por e-mail de Wernnon
          showContactStatusHtml(`
            <div class="space-y-3">
              <p class="font-bold text-amber-400">⚠️ Ativação Pendente no FormSubmit</p>
              <p class="text-white-dim text-[11px] leading-relaxed">
                O FormSubmit enviou um e-mail de verificação para <strong class="text-white">ruizwernnon@gmail.com</strong>.
                Basta abrir seu Gmail e clicar em <span class="text-gold font-bold">"Activate Form"</span> para liberar o envio 100% automático.
              </p>
              <div class="pt-2 border-t border-[#262626] flex flex-wrap items-center gap-2">
                <a href="${mailtoUrl}" class="px-3 py-1.5 bg-gold text-black font-semibold text-[11px] uppercase tracking-wider hover:bg-white transition-colors">
                  Enviar agora por E-mail (Gmail) ↗
                </a>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-[#121212] border border-[#262626] text-white hover:border-gold hover:text-gold transition-colors text-[11px] font-mono">
                  Enviar via WhatsApp ↗
                </a>
              </div>
            </div>
          `, "warning");
        } else {
          showContactStatusHtml(`
            <div class="space-y-2">
              <p class="font-bold text-rose-300">Falha no envio automático (${msg || "Servidor indisponível"}).</p>
              <p class="text-white-dim text-[11px]">Você pode encaminhar sua mensagem imediatamente pelos botões abaixo:</p>
              <div class="flex flex-wrap items-center gap-2 pt-1">
                <a href="${mailtoUrl}" class="px-3 py-1.5 bg-gold text-black font-semibold text-[11px] uppercase tracking-wider hover:bg-white transition-colors">
                  Abrir no seu E-mail ↗
                </a>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-[#121212] border border-[#262626] text-white hover:border-gold hover:text-gold transition-colors text-[11px] font-mono">
                  Enviar via WhatsApp ↗
                </a>
              </div>
            </div>
          `, "error");
        }
      }
    } catch {
      showContactStatusHtml(`
        <div class="space-y-2">
          <p class="font-bold text-rose-300">Falha de conexão com o servidor de mensagens.</p>
          <p class="text-white-dim text-[11px]">Envie diretamente por um dos canais oficiais:</p>
          <div class="flex flex-wrap items-center gap-2 pt-1">
            <a href="${mailtoUrl}" class="px-3 py-1.5 bg-gold text-black font-semibold text-[11px] uppercase tracking-wider hover:bg-white transition-colors">
              Abrir no seu E-mail ↗
            </a>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-[#121212] border border-[#262626] text-white hover:border-gold hover:text-gold transition-colors text-[11px] font-mono">
              Enviar via WhatsApp ↗
            </a>
          </div>
        </div>
      `, "error");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar Mensagem Direta";
      }
    }
  });
}

function showContactStatusHtml(html, type) {
  const statusMsg = document.getElementById("contact-status-msg");
  if (!statusMsg) return;

  statusMsg.classList.remove("hidden");
  if (type === "success") {
    statusMsg.className = "p-4 border border-emerald-500/40 bg-emerald-950/20 text-xs font-mono text-emerald-400";
  } else if (type === "warning") {
    statusMsg.className = "p-4 border border-amber-500/40 bg-amber-950/20 text-xs font-mono text-amber-300";
  } else {
    statusMsg.className = "p-4 border border-rose-500/40 bg-rose-950/20 text-xs font-mono text-rose-300";
  }
  statusMsg.innerHTML = html;
}

// ==========================================
// 9. CONSENTIMENTO DE COOKIES (LOCALSTORAGE)
// ==========================================
function initCookieConsent() {
  const banner = document.getElementById("cookie-consent-banner");
  const modal = document.getElementById("cookie-modal");
  const btnAccept = document.getElementById("btn-cookie-accept");
  const btnEssential = document.getElementById("btn-cookie-essential");
  const btnPrefs = document.getElementById("btn-cookie-prefs");
  const btnModalClose = document.getElementById("btn-cookie-modal-close");
  const btnModalSave = document.getElementById("btn-cookie-modal-save");
  const footerCookieBtn = document.getElementById("footer-cookie-btn");

  const saved = localStorage.getItem("wernnon_cookie_consent");
  if (!saved && banner) {
    banner.classList.remove("hidden");
  }

  const save = (essentialOnly) => {
    localStorage.setItem("wernnon_cookie_consent", JSON.stringify({
      essential: true,
      analytics: !essentialOnly,
      timestamp: new Date().toISOString()
    }));
    if (banner) banner.classList.add("hidden");
    if (modal) modal.classList.add("hidden");
  };

  if (btnAccept) btnAccept.addEventListener("click", () => save(false));
  if (btnEssential) btnEssential.addEventListener("click", () => save(true));

  const openPrefs = () => {
    if (modal) modal.classList.remove("hidden");
  };

  if (btnPrefs) btnPrefs.addEventListener("click", openPrefs);
  if (footerCookieBtn) footerCookieBtn.addEventListener("click", openPrefs);
  if (btnModalClose) btnModalClose.addEventListener("click", () => modal.classList.add("hidden"));
  if (btnModalSave) btnModalSave.addEventListener("click", () => {
    const analyticsBox = document.getElementById("cookie-toggle-analytics");
    save(!(analyticsBox?.checked));
  });
}

// ==========================================
// 10. MENU MOBILE & SMOOTH SCROLL
// ==========================================
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-menu-drawer");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isHidden = drawer.classList.contains("hidden");
    if (isHidden) {
      drawer.classList.remove("hidden");
      toggleBtn.textContent = "Fechar";
    } else {
      drawer.classList.add("hidden");
      toggleBtn.textContent = "Menu";
    }
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.add("hidden");
      toggleBtn.textContent = "Menu";
    });
  });
}
