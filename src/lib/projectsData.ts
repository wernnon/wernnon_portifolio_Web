export interface ProjectCase {
  id: string;
  title: string;
  subtitle: string;
  category: "Governança Pública" | "Ferramental IA / Local" | "SaaS & Hotelaria" | "Gestão Esportiva" | "Tecnologia Cívica";
  clientOrScope: string;
  period: string;
  status: "Produção Ativa" | "Alpha Estável" | "Implantado";
  summary: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  techStack: { name: string; category: string }[];
  metrics: { label: string; value: string; detail?: string }[];
  images: {
    src: string;
    alt: string;
    caption: string;
    highlight?: boolean;
  }[];
  interactiveSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export const PROJECTS_DATA: ProjectCase[] = [
  {
    id: "construindo-campeoes",
    title: "Construindo Campeões",
    subtitle: "Plataforma de Gestão Socioesportiva em Escala Municipal",
    category: "Governança Pública",
    clientOrScope: "Prefeitura Municipal de Porto Velho / SEMTEL",
    period: "2025 - Atual",
    status: "Produção Ativa",
    summary:
      "Plataforma governamental corporativa desenvolvida para a Secretaria Municipal de Turismo, Esporte e Lazer (SEMTEL), gerindo o ciclo completo de iniciação socioesportiva, prevenção ativa da evasão e controle territorial em múltiplos polos com auditoria forense integral.",
    problem:
      "A gestão pública municipal enfrentava dispersão de dados em planilhas físicas, ausência de rastreamento territorial de frequência em áreas periféricas, risco de fraude em matrículas e falta de conformidade com a LGPD no tratamento de dados de menores de idade.",
    solution:
      "Arquitetura escalável em Next.js App Router combinada a backend Fastify com tipagem estrita via TypeScript e Zod. Sistema de controle de acesso granular RBAC com 5 níveis de permissão, diário de classe digital com prontuário médico e anamnese inclusiva, além de trilha de auditoria forense registrando JSON Diff, IP e User-Agent em cada alteração sensível.",
    architectureHighlights: [
      "Backend de alta performance com Fastify e tipagem estrita com fastify-type-provider-zod",
      "Modelagem relacional em PostgreSQL gerenciada via Prisma ORM com adapter pooling",
      "Autenticação e autorização RBAC via @fastify/jwt (admin, gerente, professor, estagiário, aluno)",
      "Trilha de auditoria forense registrando snapshot anterior, novos dados em JSON Diff, IP e Correlation ID",
      "Módulo de saúde e anamnese digital para acolhimento inclusivo de atletas neurodivergentes e PCD"
    ],
    techStack: [
      { name: "Next.js 14", category: "Frontend" },
      { name: "Fastify", category: "Backend" },
      { name: "TypeScript", category: "Linguagem" },
      { name: "PostgreSQL", category: "Banco de Dados" },
      { name: "Prisma ORM", category: "Persistência" },
      { name: "Tailwind CSS", category: "UI" },
      { name: "Radix UI", category: "Acessibilidade" },
      { name: "Recharts", category: "Visualização" },
      { name: "Zod", category: "Validação" },
      { name: "Nodemailer", category: "Mensageria" }
    ],
    metrics: [
      { label: "Economia Estimada de Tempo", value: "~75%", detail: "No fechamento mensal e conciliação de frequência por polo" },
      { label: "Prevenção da Evasão Escolar", value: "Alerta Precoce", detail: "Identificação preditiva de faltas consecutivas antes da evasão" },
      { label: "Governança e Auditoria", value: "Tempo Zero", detail: "Auditoria contínua com trilha forense imutável via JSON Diff" },
      { label: "Conformidade Regulatória", value: "100% LGPD", detail: "Blindagem de dados sensíveis e prontuários médicos de menores" }
    ],
    images: [
      {
        src: "/assets/images/semtel-dashboard.jpg",
        alt: "SEMTEL - Painel Analítico de Governança Socioesportiva",
        caption: "Painel Analítico de Governança Municipal: Indicadores de 25 alunos, 16 polos, 30 turmas e gráfico de distribuição territorial por polo.",
        highlight: true
      },
      {
        src: "/assets/images/semtel-ballet.jpg",
        alt: "SEMTEL - Diário de Classe Digital e Prontuário de Alunos",
        caption: "Diário de Classe Granular: Turma de Ballet na Academia Dragon (programa Qualidade de Vida) com 52% de presença em 42 chamadas registradas."
      }
    ],
    interactiveSnippet: {
      language: "typescript",
      title: "Trilha Forense: Middleware de Auditoria JSON Diff",
      code: `// Registro de auditoria com captura de mutações e correlação
export async function logAuditTrail(
  prisma: PrismaClient,
  entity: string,
  entityId: string,
  operation: 'CREATE' | 'UPDATE' | 'DELETE',
  oldData: Record<string, unknown> | null,
  newData: Record<string, unknown> | null,
  context: { userId: string; ip: string; userAgent: string; correlationId: string }
) {
  const diff = calculateJsonDiff(oldData, newData);
  return await prisma.auditLog.create({
    data: {
      entity,
      entityId,
      operation,
      changes: diff,
      performedBy: context.userId,
      ipAddress: context.ip,
      userAgent: context.userAgent,
      correlationId: context.correlationId,
      createdAt: new Date(),
    }
  });
}`
    }
  },
  {
    id: "dev-automation-kit",
    title: "Dev Automation Kit",
    subtitle: "Suíte de Diagnósticos e Compilador de Contexto Local para IA",
    category: "Ferramental IA / Local",
    clientOrScope: "Estação de Trabalho Autônoma para Engenharia de Software",
    period: "2026 - Atual",
    status: "Alpha Estável",
    summary:
      "Estação de trabalho desktop desenvolvida para higienização estrita de bases de código e compilação de pacotes de contexto otimizados para Grandes Modelos de Linguagem (Claude 3.5, Gemini 1.5/2.0, GPT-4o, Cursor), operando cem por cento offline sem vazamento de dados confidenciais.",
    problem:
      "Engenheiros enfrentavam estouro de janelas de contexto em LLMs, inclusão inadvertida de binários e chaves de API sensíveis (.env), e lentidão extrema na montagem manual de arquivos para prompts complexos de refatoração.",
    solution:
      "Aplicação desktop em Electron v28+ com IPC bridge isolado e seguro (`contextBridge`), motor local de AST e algoritmo de janelas deslizantes para detecção de código duplicado (CPD). Inclui árvore de arquivos interativa em cascata, cálculo de tokens em tempo real e particionamento inteligente por pastas (`--by-folder`).",
    architectureHighlights: [
      "Runtime Electron v28+ com isolamento estrito de contexto (ContextIsolation nativo)",
      "Zero vazamento de dados: processamento de parsing e tokenização 100% in-memory via Node fs/promises",
      "Auditor de antipadrões e validador de variáveis de ambiente (.env vs .env.example)",
      "Detector de código duplicado (CPD) baseado em token stream e janelas deslizantes",
      "Compilação modular particionada com geração de sumários Markdown estruturados para LLMs"
    ],
    techStack: [
      { name: "Electron 28+", category: "Desktop Runtime" },
      { name: "Node.js 20+", category: "Engine" },
      { name: "JavaScript ES Modules", category: "Core" },
      { name: "CSS Modular", category: "Styling" },
      { name: "View Loader Engine", category: "Arquitetura UI" },
      { name: "AST Parser", category: "Análise Estática" },
      { name: "Sliding Window CPD", category: "Algoritmos" }
    ],
    metrics: [
      { label: "Gasto Médio de Tokens a Menos", value: "-45% a -70%", detail: "Expectativa média de economia por eliminação cirúrgica de ruído e binários" },
      { label: "Economia Estimada de Tempo", value: "~85% mais ágil", detail: "Empacotamento automático de contexto vs. montagem manual de arquivos" },
      { label: "Risco de Vazamento de Segredos", value: "0% Exposição", detail: "Higienização in-memory 100% offline de chaves de API e variáveis .env" },
      { label: "Precisão dos Modelos (LLMs)", value: "+40% Assertividade", detail: "Prevenção de alucinações e perda de instruções por saturação de contexto" }
    ],
    images: [
      {
        src: "/assets/images/dev-automation-kit.jpg",
        alt: "Dev Automation Kit - Compilador de Contexto e Diagnóstico",
        caption: "Compilador em Operação: Repositório construindo-campeoes com 460 arquivos, 2.31 MB, ~605k tokens e árvore hierárquica.",
        highlight: true
      }
    ],
    interactiveSnippet: {
      language: "javascript",
      title: "Engine: Higienização e Estimativa de BPE Tokens",
      code: `// Parser de sanitização de segurança e cálculo aproximado de tokens
export function sanitizeAndTokenize(fileContent, filePath) {
  if (isSensitiveFile(filePath) || isBinary(fileContent)) {
    return { sanitized: null, tokens: 0, blocked: true, reason: 'SECURITY_ISOLATION' };
  }
  // Higieniza chaves de API, senhas e variáveis privadas
  const sanitized = fileContent.replace(/(API_KEY|SECRET|PASSWORD)=([^\s]+)/gi, '$1=[REDACTED]');
  // Métrica baseada em BPE byte-pair encoding (~3.8 caracteres por token em código TS/JS)
  const estimatedTokens = Math.ceil(sanitized.length / 3.82);
  return { sanitized, tokens: estimatedTokens, blocked: false };
}`
    }
  },
  {
    id: "wlw-pro",
    title: "WLW PRO",
    subtitle: "Sistema Unificado de Reservas e Inventários de Hospitalidade",
    category: "SaaS & Hotelaria",
    clientOrScope: "Empreendimento de Locação por Temporada e Hotelaria",
    period: "2026 - Atual",
    status: "Produção Ativa",
    summary:
      "Plataforma completa de gestão imobiliária e hospitalidade que elimina overbooking por validação temporal matemática estrita, audita o ciclo de integridade de ativos de luxo e automatiza reservas via Central WhatsApp com failover humano.",
    problem:
      "Perdas financeiras por overbooking em períodos de alta temporada, avarias em itens caros de suítes sem identificação de culpados e sobrecarga no atendimento manual de hóspedes pelo WhatsApp.",
    solution:
      "Motor matemático de validação de intervalos temporais `(startA < endB) && (endA > startB)`, inventário detalhado pré e pós-estadia com emissão de relatórios PDF com assinatura, e integração direta com WhatsApp Web Client gerenciando fila de atendimento e robô de reservas 24h.",
    architectureHighlights: [
      "Algoritmo matemático de prevenção de conflitos temporais de agenda em nível de banco de dados",
      "Backend modular Fastify na porta 3333 com PostgreSQL e Prisma ORM",
      "Emissão de vistorias com fotos e laudos periciais via PDFKit",
      "Central de atendimento com pareamento via QR Code e alternância ágil entre IA e atendente humano",
      "Deploy híbrido: Dashboard administrativo Web em Next.js e estação desktop em Electron"
    ],
    techStack: [
      { name: "Next.js 14", category: "Frontend Web" },
      { name: "Fastify 4", category: "Backend API" },
      { name: "PostgreSQL", category: "Banco Relacional" },
      { name: "Prisma ORM", category: "Camada de Dados" },
      { name: "Electron", category: "Workstation Desktop" },
      { name: "WhatsApp Web.js", category: "Automação" },
      { name: "PDFKit", category: "Geração de Laudos" },
      { name: "Tailwind CSS", category: "Design" }
    ],
    metrics: [
      { label: "Prevenção de Overbooking", value: "100% Blindado", detail: "Eliminação total de conflitos de agenda por validação matemática estrita" },
      { label: "Tendência a Ganho em Reservas", value: "+35% a +50%", detail: "Captação contínua e triagem 24/7 de hóspedes na Central WhatsApp" },
      { label: "Economia em Resolução de Avarias", value: "~90% Prevenção", detail: "Vistoria fotográfica pré e pós-estadia com laudo pericial formal" },
      { label: "Tempo de Primeiro Contato", value: "< 1 min", detail: "Expectativa de resposta ágil sem fila de espera para o cliente" }
    ],
    images: [
      {
        src: "/assets/images/wlw-dashboard.jpg",
        alt: "WLW PRO - Painel de Controle Financeiro e Calendário de Reservas",
        caption: "Painel de Controle: Faturamento registrado de R$ 16.510,10, 6 reservas ativas no período e calendário de ocupação de acomodações.",
        highlight: true
      },
      {
        src: "/assets/images/wlw-whatsapp.jpg",
        alt: "WLW PRO - Central de Atendimento WhatsApp e Robô de Reservas",
        caption: "Central de Atendimento WhatsApp: Pareamento via QR Code, lista de hóspedes ativos e alternância ágil entre robô e operador humano."
      }
    ],
    interactiveSnippet: {
      language: "typescript",
      title: "Algoritmo Anti-Overbooking: Verificação de Interseção Temporal",
      code: `// Prevenção matemática estrita de conflitos em reservas
export async function assertNoBookingCollision(
  prisma: PrismaClient,
  unitId: string,
  checkIn: Date,
  checkOut: Date,
  ignoreBookingId?: string
) {
  const collision = await prisma.reservation.findFirst({
    where: {
      unitId,
      id: ignoreBookingId ? { not: ignoreBookingId } : undefined,
      status: { in: ['CONFIRMED', 'IN_PROGRESS'] },
      AND: [
        { checkInDate: { lt: checkOut } },
        { checkOutDate: { gt: checkIn } }
      ]
    }
  });

  if (collision) {
    throw new Error(\`CONFLICT: A unidade já possui reserva entre \${collision.checkInDate} e \${collision.checkOutDate}\`);
  }
}`
    }
  },
  {
    id: "boru-centro-combate",
    title: "Borü Centro de Combate",
    subtitle: "Ecossistema Integrado de Gestão Marcial e Alta Retenção",
    category: "Gestão Esportiva",
    clientOrScope: "Centro de Treinamento e Academia de Artes Marciais",
    period: "2024 - 2026",
    status: "Produção Ativa",
    summary:
      "Ecossistema completo para academias de combate combinando landing page de alta conversão, controle de grade de horários com filtros inteligentes de turno, chamada em 1 clique na beira do tatame e portal mobile-first gamificado com Streak do Guerreiro.",
    problem:
      "Alta taxa de evasão de alunos após 3 meses de treino, atrito no processo de matrícula manual e perda de tempo dos professores preenchendo fichas de presença em papel durante os treinos.",
    solution:
      "Plataforma modular em monorepo com React 18, Vite e Express. Portal do aluno gamificado com acompanhamento de graduação por prajied/faixas, medalhas desbloqueáveis (Primeiro Sangue, Casca Grossa) e tabela dinâmica de planos com conversão otimizada.",
    architectureHighlights: [
      "Landing Page com arquitetura de alta conversão e microinterações de combate",
      "Controle de presença no tatame com chamada em 1 clique acessível via tablet/smartphone",
      "Portal do Aluno gamificado com contagem de Streak do Guerreiro (semanas sem faltar)",
      "Grade de horários dinâmica com filtragem instantânea por turnos (Manhã, Tarde, Noite)",
      "Persistência estruturada com SQLite e Prisma ORM para execução leve e portabilidade"
    ],
    techStack: [
      { name: "React 18", category: "Frontend" },
      { name: "Vite", category: "Build Tool" },
      { name: "Tailwind CSS", category: "Design System" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "API" },
      { name: "SQLite + Prisma", category: "Banco de Dados" },
      { name: "Lucide React", category: "Ícones" },
      { name: "Axios", category: "HTTP" }
    ],
    metrics: [
      { label: "Retenção no 1º Trimestre", value: "Tendência +30%", detail: "Combate ao churn inicial via gamificação e Streak do Guerreiro" },
      { label: "Economia de Tempo por Treino", value: "~95% por aula", detail: "Chamada no tatame em 1 clique liberando o mestre para o treino técnico" },
      { label: "Conversão em Aulas Experimentais", value: "Tendência +45%", detail: "Landing page focada com agendamento direto e sem taxa oculta" },
      { label: "Previsibilidade de Receita", value: "Fluxo Recorrente", detail: "Automação de lembretes e planos periódicos reduzindo inadimplência" }
    ],
    images: [
      {
        src: "/assets/images/boru-hero.jpg",
        alt: "Borü Centro de Combate - Hero e Proposta de Valor",
        caption: "Landing Page Institucional: Mais que um treino, uma transformação. +500 alunos ativos e tatame climatizado de 180 m².",
        highlight: true
      },
      {
        src: "/assets/images/boru-planos.png",
        alt: "Borü - Matriz de Planos de Treinamento",
        caption: "Tabela de Planos de Treinamento: Valores transparentes (2x, 3x, 5x na semana) e destaque carmesim para o Plano Livre (R$ 280,00)."
      },
      {
        src: "/assets/images/boru-horarios.jpg",
        alt: "Borü - Grade Completa de Horários de Treino",
        caption: "Grade de Horários Dinâmica: Filtros de turnos (Manhã, Tarde, Noite) e turmas de Muay Thai conduzidas pelo Prof. Felipe Borü."
      }
    ],
    interactiveSnippet: {
      language: "typescript",
      title: "Gamificação: Cálculo do Streak do Guerreiro e Badges",
      code: `// Cálculo automático de frequência semanal e desbloqueio de insígnias
export function calculateWarriorStreak(trainings: Date[]): { streakWeeks: number; badgeUnlocked: string | null } {
  const weeks = groupTrainingsByIsoWeek(trainings);
  let streak = 0;
  for (const week of weeks) {
    if (week.count >= 2) streak++;
    else break;
  }
  let badgeUnlocked = null;
  if (streak >= 12) badgeUnlocked = 'INABALÁVEL';
  else if (streak >= 8) badgeUnlocked = 'CASCA GROSSA';
  else if (streak >= 4) badgeUnlocked = 'GUERREIRO FOCADO';
  else if (streak >= 1) badgeUnlocked = 'PRIMEIRO SANGUE';

  return { streakWeeks: streak, badgeUnlocked };
}`
    }
  },
  {
    id: "zapp-cidadao-on",
    title: "Zapp Cidadão ON",
    subtitle: "Atendimento Cívico Inteligente e Zeladoria Urbana",
    category: "Tecnologia Cívica",
    clientOrScope: "Comunidade e Gestão Urbana de Porto Velho",
    period: "2025-2026",
    status: "Implantado",
    summary:
      "Plataforma de canal direto para denúncias de infraestrutura urbana (descarte irregular de entulho, iluminação pública, recapeamento) com triagem por WhatsApp, geração de protocolo unificado, mapa de calor territorial e estrita conformidade com a LGPD.",
    problem:
      "Moradores tinham dificuldade de registrar demandas públicas em canais burocráticos, enquanto a zeladoria não tinha visualização espacial das ocorrências por bairro para planejar rotas de manutenção.",
    solution:
      "Bot com menu conversacional intuitivo, extração de GPS e geocodificação reversa de endereços da capital rondoniense, persistência com Repository Pattern, painel BI com mapas de calor via Leaflet.js e anonimização de telefones dos cidadãos.",
    architectureHighlights: [
      "Repository Pattern desacoplando persistência entre Firestore (NoSQL) e PostgreSQL",
      "Geolocalização híbrida: processamento direto de pin de localização ou endereço textual",
      "Renderização de mapas de calor territoriais de chamados com Leaflet.js e Leaflet.heat",
      "Geração de protocolo rastreável ZC-[TIPO]-[DDMMAA]-[HASH] com consulta em tempo real",
      "Anonimização estrita em conformidade com LGPD (5569****1234)"
    ],
    techStack: [
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "API" },
      { name: "WhatsApp Web.js", category: "Canal Cívico" },
      { name: "Leaflet.js & Heat", category: "Geoprocessamento" },
      { name: "Chart.js", category: "BI Analytics" },
      { name: "PostgreSQL & Firestore", category: "Bancos Híbridos" },
      { name: "LGPD Anonymizer", category: "Segurança de Dados" }
    ],
    metrics: [
      { label: "Economia de Tempo na Triagem", value: "~60% mais ágil", detail: "Abertura instantânea de chamados com auto-classificação de demandas" },
      { label: "Eficiência de Despacho Operacional", value: "Roteirização Otimizada", detail: "Direcionamento geográfico de equipes municipais por mapa de calor" },
      { label: "Rastreabilidade do Munícipe", value: "100% dos Protocolos", detail: "Expectativa de acompanhamento em tempo real sem intermediários" },
      { label: "Garantia de Privacidade Cidadã", value: "Conformidade LGPD", detail: "Anonimização nativa de contatos em relatórios públicos de zeladoria" }
    ],
    images: [],
    interactiveSnippet: {
      language: "typescript",
      title: "Geocodificação e Formatação de Protocolo Cívico",
      code: `// Protocolo unificado e anonimização LGPD
export function generateCivicTicket(type: string, phone: string, coords: { lat: number; lng: number }) {
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const hash = Math.random().toString(36).substring(2, 6).toUpperCase();
  const ticketId = \`ZC-\${type.toUpperCase().slice(0, 4)}-\${dateStr}-\${hash}\`;
  
  // Mascaramento estrito de número telefônico para painéis públicos
  const maskedPhone = phone.replace(/(\\d{4})\\d{4}(\\d{4})/, '$1****$2');
  
  return {
    ticketId,
    maskedPhone,
    coords,
    status: 'EM_TRIAGEM',
    createdAt: new Date()
  };
}`
    }
  }
];

export const GLOBAL_METRICS = [
  {
    value: "460+",
    label: "Arquivos Higienizados & Compilados",
    description: "Em sessão única de IA local sem vazamento de dados",
    accent: "sand"
  },
  {
    value: "~605k",
    label: "Tokens Processados Offline",
    description: "Otimização cirúrgica para modelos Claude, Gemini e GPT-4o",
    accent: "burgundy"
  },
  {
    value: "16",
    label: "Polos Públicos Conectados",
    description: "SEMTEL Porto Velho com governança e diário digital",
    accent: "emerald"
  },
  {
    value: "100%",
    label: "Auditoria Forense & LGPD",
    description: "Trilhas imutáveis com JSON Diff, IP e anonimização civil",
    accent: "crimson"
  }
];
