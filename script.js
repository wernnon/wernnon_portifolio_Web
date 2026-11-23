/**
 * PORTFÓLIO OLHARES URBANOS (VELYZ)
 * Script Principal: Sistema de Abas, Typewriter, Efeitos Visuais e Interatividade Imersiva
 * Wernnon Ruiz • 2026
 */

// ==========================================================================
// 01. BASE DE DADOS DOS PROJETOS (PALCO IMERSIVO CENTRAL)
// ==========================================================================
const projectsDatabase = {
  "construindo-campeoes": {
    category: "SISTEMA SOCIOESPORTIVO • SEMTEL",
    title: "CONSTRUINDO CAMPEÕES",
    lead: "Plataforma de Gestão Socioesportiva em Escala Municipal",
    description: "Sistema corporativo completo para gerenciar polos esportivos, matrículas de jovens atletas, acompanhamento de presenças em tempo real e dashboards para gestão pública municipal.",
    challenge: "Substituir processos em papel por uma plataforma segura (LGPD), auditável e com interface intuitiva para instrutores e gestores municipais.",
    impact: "Mais de 1.200 alunos cadastrados e redução de 90% no tempo de emissão de relatórios.",
    stack: ["TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "React", "Docker"],
    actionUrl: "https://wa.me/5569992473397?text=Ol%C3%A1%20Wernnon,%20vi%20o%20projeto%20Construindo%20Campe%C3%B5es"
  },
  "dev-automation-kit": {
    category: "ENGENHARIA & IA • CLI LOCAL",
    title: "DEV AUTOMATION KIT",
    lead: "Suíte de Diagnósticos e Compilador de Contexto Local para IA",
    description: "Ferramenta de engenharia de software para mapeamento automático de codebases locais, compressão inteligente de tokens e exportação estruturada para agentes de inteligência artificial.",
    challenge: "Alimentar LLMs com contextos de código gigantescos sem estourar a janela de contexto, preservando dependências arquiteturais.",
    impact: "Otimização média de 68% no uso de tokens com preservação integral de interfaces e tipos TypeScript.",
    stack: ["Node.js", "TypeScript", "Tree-Sitter", "AST Parser", "Bash"],
    githubUrl: "https://dev-automation-kit.github.io/dev-automation-kit-web/",
    actionUrl: "https://wa.me/5569992473397?text=Ol%C3%A1%20Wernnon,%20vi%20o%20Dev%20Automation%20Kit"
  },
  "wlw-pro": {
    category: "SAAS DE HOSPITALIDADE • COMERCIAL",
    title: "WLW PRO",
    lead: "Sistema Unificado de Reservas e Inventários de Hospitalidade",
    description: "Plataforma web de controle operacional e concierge digital para pousadas e hotéis, com sincronização em tempo real de ocupação e automação de atendimento.",
    challenge: "Garantir agilidade no check-in/check-out e atendimento automático aos hóspedes sem perdas operacionais.",
    impact: "Aumento de 40% nas reservas diretas sem taxas de intermediários.",
    stack: ["React", "Next.js", "Tailwind CSS", "REST APIs", "WhatsApp Cloud API"],
    actionUrl: "https://wa.me/5569992473397?text=Ol%C3%A1%20Wernnon,%20vi%20o%20WLW%20PRO"
  },
  "boru-combate": {
    category: "ECOSSISTEMA WEB • ARTES MARCIAIS",
    title: "BORÜ CENTRO DE COMBATE",
    lead: "Ecossistema Integrado de Gestão Marcial e Alta Retenção",
    description: "Aplicação web de alta performance voltada para academias de artes marciais, controle de graduações, planos, horários dinâmicos e engajamento da comunidade de lutadores.",
    challenge: "Criar uma identidade visual marcante de tatame/combate mantendo usabilidade ágil para alunos e professores no celular.",
    impact: "Taxa de conversão de alunos novos elevada em 35% e facilidade de consulta de horários.",
    stack: ["JavaScript ES6+", "HTML5 Semântico", "CSS3 Moderno", "PWA"],
    actionUrl: "https://wa.me/5569992473397?text=Ol%C3%A1%20Wernnon,%20vi%20o%20Boru%20Combate"
  },
  "zapp-cidadao": {
    category: "SERVIÇO PÚBLICO • CÍVICO & AUTOMAÇÃO",
    title: "ZAPP CIDADÃO ON",
    lead: "Atendimento Cívico Inteligente e Zeladoria Urbana",
    description: "Canal conversacional automatizado que permite a cidadãos reportarem demandas de zeladoria (iluminação, buracos, podas) com fotos e localização exata.",
    challenge: "Triagem automática de mensagens e geração instantânea de ordens de serviço georreferenciadas para as equipes de campo.",
    impact: "Mais de 15.000 chamados processados com protocolo instantâneo ao morador.",
    stack: ["Node.js", "WhatsApp Business API", "PostgreSQL", "Geolocalização"],
    actionUrl: "https://wa.me/5569992473397?text=Ol%C3%A1%20Wernnon,%20vi%20o%20Zapp%20Cidadao"
  }
};

// ==========================================================================
// 02. DICIONÁRIO DE CONTEÚDOS DAS 4 ABAS (SEÇÕES)
// ==========================================================================
const sectionsData = {
  sobre: {
    category: "IDENTIDADE & FORMAÇÃO",
    title: "CRIANDO IDENTIDADE E PRESENÇA DIGITAL",
    leftText: "Wernnon Ruiz — Desenvolvedor Full-Stack focado em arquitetura de sistemas, interfaces de alto impacto e ferramentas com engenharia sólida. Aliando rigor técnico a uma linguagem visual autoral.",
    bgClass: "bg-sobre",
    actionsHTML: `
      <button class="action-btn btn-primary" onclick="switchTab('projetos')">Ver Projetos</button>
      <a href="https://wa.me/5569992473397" target="_blank" rel="noopener noreferrer" class="action-btn btn-outline">Falar no WhatsApp</a>
    `,
    rightHTML: `
      <div class="glass-panel">
        <div class="panel-header">
          <span class="panel-title">COMPETÊNCIAS NÚCLEO</span>
          <span class="panel-tag">FULL-STACK</span>
        </div>
        <p class="panel-text">Domínio em engenharia ponta a ponta: do banco de dados relacional à experiência visual no browser.</p>
        <div class="tech-chips">
          <span class="tech-chip">TypeScript</span>
          <span class="tech-chip">React / Next.js</span>
          <span class="tech-chip">Node.js</span>
          <span class="tech-chip">Prisma ORM</span>
          <span class="tech-chip">PostgreSQL</span>
          <span class="tech-chip">Docker</span>
          <span class="tech-chip">Linux / DevOps</span>
          <span class="tech-chip">APIs REST</span>
          <span class="tech-chip">Tailwind CSS</span>
          <span class="tech-chip">Git / CI/CD</span>
        </div>
      </div>

      <div class="glass-panel">
        <div class="panel-header">
          <span class="panel-title">FILOSOFIA DE TRABALHO</span>
          <span class="panel-tag">VALORES</span>
        </div>
        <p class="panel-text">
          "Software precisa ser solução e transformação, profissional e social. Design autoral é autenticidade e identidade, mostrar quem é tão importante quanto o que faz."
        </p>
      </div>
    `
  },

  trajetoria: {
    category: "TRAJETÓRIA & ENGENHARIA",
    title: "DESENVOLVENDO SISTEMAS E IDEIAS MIRABOLANTES",
    leftText: "Texto autoral e prototipagem contínua. Cada projeto é um laboratório prático de responsividade extrema, arquitetura limpa e estética autêntica. Soluções pensadas ponta a ponta com rigor de código.",
    bgClass: "bg-trajetoria",
    actionsHTML: `
      <button class="action-btn btn-primary" onclick="switchTab('projetos')">Conhecer Projetos</button>
      <button class="action-btn btn-outline" onclick="switchTab('contatos')">Iniciar Parceria</button>
    `,
    rightHTML: `
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-val">+5</div>
          <div class="metric-lbl">Sistemas em Produção</div>
        </div>
        <div class="metric-card">
          <div class="metric-val">100%</div>
          <div class="metric-lbl">Responsivo & Fluido</div>
        </div>
        <div class="metric-card">
          <div class="metric-val">RO</div>
          <div class="metric-lbl">Atuação Brasil</div>
        </div>
      </div>

      <div class="glass-panel">
        <div class="panel-header">
          <span class="panel-title">ENGENHARIA DE IMPACTO</span>
          <span class="panel-tag">PROCESSO</span>
        </div>
        <p class="panel-text">
          Desenvolvimento ágil com foco em escalabilidade, tipagem estrita, performance de renderização e adaptação contínua em qualquer tela: do smartphone aos monitores ultrawide.
        </p>
      </div>
    `
  },

  projetos: {
    category: "PROJETOS & CASES EM PRODUÇÃO",
    title: "EXPERIÊNCIAS INTERATIVAS E CÓDIGO AUTORAL",
    leftText: "Aplicações web completas, visualizadores interativos e interfaces experimentais desenvolvidas com performance, acessibilidade e arquitetura modular. Clique em um case para abrir os detalhes.",
    bgClass: "bg-projetos",
    actionsHTML: `
      <a href="https://github.com/wernnon" target="_blank" rel="noopener noreferrer" class="action-btn btn-primary">Ver Código no GitHub</a>
      <button class="action-btn btn-outline" onclick="switchTab('contatos')">Solicitar Projeto</button>
    `,
    rightHTML: `
      <div class="projects-mini-list">
        <div class="project-mini-item" onclick="openProjectDetail('construindo-campeoes')" role="button" tabindex="0">
          <div class="p-mini-info">
            <span class="p-mini-name">CONSTRUINDO CAMPEÕES</span>
            <span class="p-mini-desc">Gestão Socioesportiva Municipal • TypeScript / Prisma / PostgreSQL</span>
          </div>
          <span class="p-mini-arrow">→</span>
        </div>

        <div class="project-mini-item" onclick="openProjectDetail('dev-automation-kit')" role="button" tabindex="0">
          <div class="p-mini-info">
            <span class="p-mini-name">DEV AUTOMATION KIT</span>
            <span class="p-mini-desc">Diagnósticos & Compilador para IA • Node.js / AST / Bash</span>
          </div>
          <span class="p-mini-arrow">→</span>
        </div>

        <div class="project-mini-item" onclick="openProjectDetail('wlw-pro')" role="button" tabindex="0">
          <div class="p-mini-info">
            <span class="p-mini-name">WLW PRO</span>
            <span class="p-mini-desc">Reservas de Hospitalidade • React / Next.js / WhatsApp API</span>
          </div>
          <span class="p-mini-arrow">→</span>
        </div>

        <div class="project-mini-item" onclick="openProjectDetail('boru-combate')" role="button" tabindex="0">
          <div class="p-mini-info">
            <span class="p-mini-name">BORÜ CENTRO DE COMBATE</span>
            <span class="p-mini-desc">Gestão Marcial & Retenção • Web App / PWA / Performance</span>
          </div>
          <span class="p-mini-arrow">→</span>
        </div>

        <div class="project-mini-item" onclick="openProjectDetail('zapp-cidadao')" role="button" tabindex="0">
          <div class="p-mini-info">
            <span class="p-mini-name">ZAPP CIDADÃO ON</span>
            <span class="p-mini-desc">Zeladoria Urbana Automatizada • Node.js / WhatsApp Cloud</span>
          </div>
          <span class="p-mini-arrow">→</span>
        </div>
      </div>
    `
  },

  contatos: {
    category: "CONEXÃO DIRETA",
    title: "VAMOS CONSTRUIR ALGO FORA DO PADRÃO?",
    leftText: "Disponível para novos projetos, parcerias criativas, contratação técnica e desenvolvimento de interfaces. Entre em contato direto pelo canal mais prático para você.",
    bgClass: "bg-contatos",
    actionsHTML: `
      <a href="https://wa.me/5569992473397" target="_blank" rel="noopener noreferrer" class="action-btn btn-primary">Iniciar Conversa no WhatsApp</a>
      <a href="mailto:ruizwernnon@gmail.com" class="action-btn btn-outline">Enviar E-mail</a>
    `,
    rightHTML: `
      <div class="contacts-grid">
        <a href="https://wa.me/5569992473397" target="_blank" rel="noopener noreferrer" class="contact-card">
          <svg class="contact-card-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <div class="contact-card-info">
            <span class="contact-card-title">WHATSAPP</span>
            <span class="contact-card-value">(69) 99247-3397</span>
          </div>
        </a>

        <a href="mailto:ruizwernnon@gmail.com" class="contact-card">
          <svg class="contact-card-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <div class="contact-card-info">
            <span class="contact-card-title">E-MAIL</span>
            <span class="contact-card-value">ruizwernnon@gmail.com</span>
          </div>
        </a>

        <a href="https://github.com/wernnon" target="_blank" rel="noopener noreferrer" class="contact-card">
          <svg class="contact-card-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <div class="contact-card-info">
            <span class="contact-card-title">GITHUB</span>
            <span class="contact-card-value">wernnon</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/wernnon-ruiz-ba097b254/" target="_blank" rel="noopener noreferrer" class="contact-card">
          <svg class="contact-card-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.4 9.74v-8.37H5.06v8.37z"/>
          </svg>
          <div class="contact-card-info">
            <span class="contact-card-title">LINKEDIN</span>
            <span class="contact-card-value">wernnon-ruiz</span>
          </div>
        </a>
      </div>

      <div class="glass-panel" style="margin-top: 1rem;">
        <div class="panel-header">
          <span class="panel-title">DISPONIBILIDADE</span>
          <span class="panel-tag">STATUS: ATIVO</span>
        </div>
        <p class="panel-text">
          Atualmente aceitando propostas para desenvolvimento de produtos completos, consultorias de arquitetura web e contratos remotos.
        </p>
      </div>
    `
  }
};

// ==========================================================================
// 03. CONTROLADOR DE TYPEWRITER (DIGITAÇÃO COM CANCELAMENTO LIMPO)
// ==========================================================================
let typewriterTimeout = null;

function runTypewriter(text, speed = 32, callback = null) {
  const container = document.querySelector(".typewriter-text");
  if (!container) return;

  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
    typewriterTimeout = null;
  }

  container.textContent = "";
  let i = 0;

  function typeStep() {
    if (i < text.length) {
      container.textContent += text.charAt(i);
      i++;
      typewriterTimeout = setTimeout(typeStep, speed);
    } else if (typeof callback === "function") {
      callback();
    }
  }

  typeStep();
}

// ==========================================================================
// 04. INTERATIVIDADE DA TELA DE PROJETOS (FOTO DESLOCADA 50% & PAGINAÇÃO)
// ==========================================================================
const projectKeys = [
  "construindo-campeoes",
  "dev-automation-kit",
  "wlw-pro",
  "boru-combate",
  "zapp-cidadao"
];
let currentProjectIndex = 0;

function renderProjectDetail(index, animate = false) {
  if (index < 0) index = projectKeys.length - 1;
  if (index >= projectKeys.length) index = 0;
  currentProjectIndex = index;

  const projectId = projectKeys[currentProjectIndex];
  const project = projectsDatabase[projectId];
  if (!project) return;

  const prevIndex = (currentProjectIndex - 1 + projectKeys.length) % projectKeys.length;
  const nextIndex = (currentProjectIndex + 1) % projectKeys.length;
  const prevProject = projectsDatabase[projectKeys[prevIndex]];
  const nextProject = projectsDatabase[projectKeys[nextIndex]];

  // Atualizar contador (ex: 01 / 05)
  const counterEl = document.getElementById("pd-counter");
  if (counterEl) {
    counterEl.innerHTML = `<span class="counter-num">0${currentProjectIndex + 1}</span> / 0${projectKeys.length}`;
  }

  // Atualizar nomes dos botões de rodapé
  const prevNameEl = document.getElementById("prev-project-name");
  const nextNameEl = document.getElementById("next-project-name");
  if (prevNameEl && prevProject) prevNameEl.textContent = prevProject.title;
  if (nextNameEl && nextProject) nextNameEl.textContent = nextProject.title;

  const card = document.querySelector(".project-detail-card");
  if (animate && card) {
    card.style.opacity = "0.35";
    card.style.transform = "translateY(4px)";
  }

  setTimeout(() => {
    // Injetar dados no container central
    document.getElementById("pd-category").textContent = project.category;
    document.getElementById("pd-title").textContent = project.title;
    document.getElementById("pd-lead").textContent = project.lead;
    document.getElementById("pd-text").textContent = project.description;

    // Chips de tecnologia
    const chipsEl = document.getElementById("pd-chips");
    if (chipsEl) {
      chipsEl.innerHTML = project.stack
        .map(tech => `<span class="tech-chip">${tech}</span>`)
        .join(" ");
    }

    // Especificações técnicas & métricas
    const specsEl = document.getElementById("pd-specs");
    if (specsEl) {
      specsEl.innerHTML = `
        <div class="spec-box">
          <div class="spec-box-label">Desafio Técnico Superado</div>
          <div class="spec-box-val">${project.challenge}</div>
        </div>
        <div class="spec-box">
          <div class="spec-box-label">Impacto & Resultado</div>
          <div class="spec-box-val" style="color: var(--yellow-accent); font-weight: 600;">${project.impact}</div>
        </div>
      `;
    }

    // Ações de rodapé do projeto
    const actionsEl = document.getElementById("pd-actions");
    if (actionsEl) {
      const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim());
      const githubBtn = hasGithubUrl
        ? `<a id="githubrul" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-btn btn-primary">
            Ver Página do Projeto
          </a>`
        : "";

      actionsEl.innerHTML = `
        ${githubBtn}
        <a href="${project.actionUrl}" target="_blank" rel="noopener noreferrer" class="action-btn btn-outline">
          Conversar no WhatsApp
        </a>
        <button class="action-btn btn-outline" onclick="closeProjectDetail()" style="margin-left: auto;">
          ✕ Fechar
        </button>
      `;
    }

    if (animate && card) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  }, animate ? 110 : 0);
}

function openProjectDetail(projectId) {
  const index = projectKeys.indexOf(projectId);
  if (index !== -1) {
    currentProjectIndex = index;
  }
  renderProjectDetail(currentProjectIndex, false);

  const stage = document.getElementById("stage");
  const detailContainer = document.getElementById("project-detail-container");
  if (stage) stage.classList.add("project-mode");
  if (detailContainer) detailContainer.setAttribute("aria-hidden", "false");
}

function nextProject() {
  renderProjectDetail(currentProjectIndex + 1, true);
}

function prevProject() {
  renderProjectDetail(currentProjectIndex - 1, true);
}

function closeProjectDetail() {
  const stage = document.getElementById("stage");
  const detailContainer = document.getElementById("project-detail-container");
  if (stage) stage.classList.remove("project-mode");
  if (detailContainer) detailContainer.setAttribute("aria-hidden", "true");
}

// ==========================================================================
// 05. SISTEMA DE TROCA DE ABAS E CROSSFADE DE FUNDO
// ==========================================================================
let currentTab = "trajetoria";

function switchTab(targetTab) {
  if (!sectionsData[targetTab]) return;

  // Se estiver visualizando detalhes de projeto, fechar antes de trocar de aba
  closeProjectDetail();

  currentTab = targetTab;
  const data = sectionsData[targetTab];

  // 1. Atualizar botões de navegação
  const navButtons = document.querySelectorAll(".nav-item");
  navButtons.forEach(btn => {
    if (btn.getAttribute("data-tab") === targetTab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // 2. Atualizar plano de fundo dinâmico
  const bgContainer = document.getElementById("bg-container");
  if (bgContainer) {
    bgContainer.className = `bg-layer ${data.bgClass}`;
  }

  // 3. Atualizar categoria com animação
  const categoryEl = document.getElementById("section-category");
  if (categoryEl) {
    categoryEl.textContent = data.category;
  }

  // 4. Transição de saída suave dos textos
  const leftTextEl = document.getElementById("left-text");
  const leftActionsEl = document.getElementById("left-actions");
  const rightContentEl = document.getElementById("right-content");

  if (leftTextEl) leftTextEl.style.opacity = "0";
  if (leftActionsEl) leftActionsEl.style.opacity = "0";
  if (rightContentEl) rightContentEl.style.opacity = "0";

  // 5. Inserir novos conteúdos e rodar typewriter
  setTimeout(() => {
    runTypewriter(data.title, 26);

    if (leftTextEl) {
      leftTextEl.textContent = data.leftText;
      leftTextEl.style.opacity = "1";
    }

    if (leftActionsEl) {
      leftActionsEl.innerHTML = data.actionsHTML;
      leftActionsEl.style.opacity = "1";
    }

    if (rightContentEl) {
      rightContentEl.innerHTML = data.rightHTML;
      rightContentEl.style.opacity = "1";
    }
  }, 180);
}

// ==========================================================================
// 06. INICIALIZAÇÃO & EVENTOS GLOBAIS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Iniciar na aba do protótipo (trajetoria)
  const initialData = sectionsData.trajetoria;
  const leftTextEl = document.getElementById("left-text");
  const leftActionsEl = document.getElementById("left-actions");
  const rightContentEl = document.getElementById("right-content");
  const categoryEl = document.getElementById("section-category");

  if (categoryEl) categoryEl.textContent = initialData.category;
  if (leftTextEl) leftTextEl.textContent = initialData.leftText;
  if (leftActionsEl) leftActionsEl.innerHTML = initialData.actionsHTML;
  if (rightContentEl) rightContentEl.innerHTML = initialData.rightHTML;

  // Timeline sincronizada: a tag atinge o boné após ~1.2s, iniciando o typewriter
  setTimeout(() => {
    runTypewriter(initialData.title, 32);
  }, 1250);

  // 2. Escutar cliques na Bottom Navigation Bar
  const navButtons = document.querySelectorAll(".nav-item");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      if (tab && tab !== currentTab) {
        switchTab(tab);
      }
    });
  });

  // 3. Replay da animação ou fechamento ao clicar na foto central
  const logoTag = document.getElementById("logo-tag");
  const colCenter = document.querySelector(".col-center");
  const stage = document.getElementById("stage");

  if (logoTag) {
    logoTag.addEventListener("click", (e) => {
      if (stage && stage.classList.contains("project-mode")) {
        closeProjectDetail();
        return;
      }
      logoTag.style.animation = "none";
      void logoTag.offsetWidth; // Trigger reflow
      logoTag.style.animation = "dropAndDockTag 1.35s var(--transition-smooth) forwards";
    });
  }

  // Clicar na foto deslocada à esquerda também recolhe o detalhe
  if (colCenter) {
    colCenter.addEventListener("click", () => {
      if (stage && stage.classList.contains("project-mode")) {
        closeProjectDetail();
      }
    });
  }

  // 4. Botões de Paginação de Projetos
  const btnPrevProject = document.getElementById("btn-prev-project");
  const btnNextProject = document.getElementById("btn-next-project");
  const stripBtnPrev = document.getElementById("strip-btn-prev");
  const stripBtnNext = document.getElementById("strip-btn-next");

  if (btnPrevProject) btnPrevProject.addEventListener("click", prevProject);
  if (btnNextProject) btnNextProject.addEventListener("click", nextProject);
  if (stripBtnPrev) stripBtnPrev.addEventListener("click", prevProject);
  if (stripBtnNext) stripBtnNext.addEventListener("click", nextProject);

  // 5. Botão de fechar detalhe do projeto
  const btnCloseProject = document.getElementById("btn-close-project");
  if (btnCloseProject) {
    btnCloseProject.addEventListener("click", closeProjectDetail);
  }

  // 6. Suporte a atalhos de teclado (Setas Esquerda/Direita e ESC)
  const tabsList = ["sobre", "trajetoria", "projetos", "contatos"];
  window.addEventListener("keydown", (e) => {
    const isProjectMode = stage && stage.classList.contains("project-mode");

    if (e.key === "Escape") {
      closeProjectDetail();
      return;
    }

    // Se estiver em modo de detalhe do projeto, as setas paginam os projetos!
    if (isProjectMode) {
      if (e.key === "ArrowRight") {
        nextProject();
      } else if (e.key === "ArrowLeft") {
        prevProject();
      }
      return;
    }

    // Se estiver na navegação padrão, as setas trocam de aba
    if (e.key === "ArrowRight") {
      const idx = tabsList.indexOf(currentTab);
      const nextIdx = (idx + 1) % tabsList.length;
      switchTab(tabsList[nextIdx]);
    } else if (e.key === "ArrowLeft") {
      const idx = tabsList.indexOf(currentTab);
      const prevIdx = (idx - 1 + tabsList.length) % tabsList.length;
      switchTab(tabsList[prevIdx]);
    }
  });

  // 7. Suporte a Swipe no Mobile (Arrasto horizontal com touch discriminando scroll vertical)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  window.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  window.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
  }, { passive: true });

  function handleGesture() {
    const isProjectMode = stage && stage.classList.contains("project-mode");
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Apenas ativa se o gesto for predominantemente horizontal (evita conflito com rolagem vertical)
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.35) {
      if (isProjectMode) {
        if (diffX < 0) {
          nextProject();
        } else {
          prevProject();
        }
        return;
      }

      const idx = tabsList.indexOf(currentTab);
      if (diffX < 0) {
        // Swipe para esquerda -> próxima aba
        const nextIdx = (idx + 1) % tabsList.length;
        switchTab(tabsList[nextIdx]);
      } else {
        // Swipe para direita -> aba anterior
        const prevIdx = (idx - 1 + tabsList.length) % tabsList.length;
        switchTab(tabsList[prevIdx]);
      }
    }
  }
});
