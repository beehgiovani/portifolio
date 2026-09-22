import logoPredictMed from '../assets/screenshots/PredictMed/logo_PredictMed.png'
import logoGuarugeo from '../assets/screenshots/guarugeo/logo_guarugeo.png'
import logoMarketPoster from '../assets/logo_marketposter.png'
import logoLumen from '../assets/logo_lumen.png'
import logoFarmaDelivery from '../assets/logo_farmadelivery.png'
import logoCachetaBuraco from '../assets/logo_cachetaburaco.png'

export const pt = {
  hero: {
    greeting: "Bruno Giovani",
    role: "Desenvolvedor de software",
    years: "Full-stack, Android, automação e GIS",
    tagline: "Construo projetos independentes para resolver fluxos reais: operação de entregas, jogos com sincronização, mapas, estoque e ferramentas Android. Aqui apresento o que o código demonstra, o estágio de cada projeto e o que ainda precisa de validação em uso real.",
    cta: "Ver projetos selecionados"
  },
  sections: {
    projects: "Projetos selecionados",
    skills: "Stack aplicada e evidências",
    experience: "Trajetória prática",
    certifications: "Formação e cursos",
    contact: "Contato"
  },
  experience: [
    {
      date: "2025 — atual",
      role: "Projetos independentes de software",
      desc: "Desenvolvimento e manutenção de aplicações web, Android, automações e mapas. Os repositórios públicos registram arquitetura, testes, limitações e evolução técnica."
    },
    {
      date: "2024",
      role: "Colaboração pontual | Agili",
      desc: "Atuação PJ informal, já concluída, em ajustes de funcionalidades, manutenção de código, correções e integrações web."
    },
    {
      date: "Em curso",
      role: "Análise e Desenvolvimento de Sistemas | FMU",
      desc: "Formação complementada por cursos de APIs REST, Kotlin/Spring Boot, Python, SQL, Git e prática contínua nos projetos."
    }
  ],
  projects: {
    farmadelivery: {
      title: "FarmaDelivery",
      logo: logoFarmaDelivery,
      impact: "Projeto independente · Full-stack",
      desc: "Monorepo para gestão de entregas em farmácias, com painel web, API, app Android e PWA de motoboy. O projeto cobre perfis de acesso, entregas, relatórios, rotas, localização, notificações e validações de ambiente.",
      stack: ["TypeScript", "React", "Fastify", "Prisma", "PostgreSQL/Supabase", "Kotlin", "Firebase FCM"],
      screenshots: [
        "/assets/screenshots/farmadelivery/farmadelivery-admin.png",
        "/assets/screenshots/farmadelivery/farmadelivery-motoboy-pwa.png"
      ],
      details: {
        innovation: "Contratos e regras compartilhados entre quatro superfícies: API, painel administrativo, Android e PWA.",
        strongPoints: ["Monorepo multiaplicação", "SQL e regras de acesso versionados", "Testes e preflight de ambiente", "Documentação de segurança e operação"],
        architecture: "Monorepo TypeScript/Kotlin com API Fastify, Prisma e PostgreSQL/Supabase; clientes React/Vite e Android; notificações via Firebase.",
        businessImpact: "Demonstra modelagem de domínio, integração entre clientes, autenticação, permissões e manutenção de um fluxo operacional completo. É um projeto independente; não há alegação de adoção comercial comprovada.",
        technicalChallenges: "Manter contratos consistentes entre web e mobile, tratar dados sensíveis, configurar ambientes sem versionar segredos e distinguir validação automatizada de homologação operacional.",
        topology: "React Admin + PWA + Android -> Fastify API -> Prisma/PostgreSQL/Supabase -> Firebase Messaging",
        url: "https://drogstoantonio.web.app",
        github: "https://github.com/beehgiovani/FarmaDelivery"
      }
    },
    cachetaburaco: {
      title: "Carteado BR",
      logo: logoCachetaBuraco,
      impact: "Android · Regras e sincronização",
      desc: "Jogo Android de Cacheta, Buraco e Tranca com Jetpack Compose, motor de regras separado da interface, partidas contra a máquina, rede local e modo online beta com Supabase.",
      stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Supabase Realtime", "Ktor/OkHttp", "JUnit"],
      screenshots: [
        "/assets/screenshots/cachetaburaco/feature-graphic-1024x500.png",
        "/assets/screenshots/cachetaburaco/01-login-1920x1080.png",
        "/assets/screenshots/cachetaburaco/02-menu-1920x1080.png",
        "/assets/screenshots/cachetaburaco/03-partida-1920x1080.png"
      ],
      details: {
        innovation: "O mesmo contrato de comunicação atende bot local, Wi-Fi e online, mantendo as regras do jogo independentes do transporte.",
        strongPoints: ["Regras de três modalidades", "Estado público e cartas privadas separados", "Host autoritativo e eventos idempotentes", "Testes unitários e assets de loja"],
        architecture: "Aplicativo Android nativo com Compose, ViewModel, motor de regras de domínio e repositórios de transporte intercambiáveis.",
        businessImpact: "Demonstra modelagem de regras, gerenciamento de estado, sincronização e evolução de um app Android. O modo online segue em beta e ainda requer homologação prática ampla entre aparelhos.",
        technicalChallenges: "Sincronizar turnos e rodadas, preservar informações privadas de cada jogador, rejeitar eventos atrasados e tratar reconexões sem duplicar resultados.",
        topology: "Compose UI -> MatchViewModel -> GameRulesEngine -> Bot local | Wi-Fi NSD/TCP | Supabase Realtime",
        github: "https://github.com/beehgiovani/CachetaBuraco"
      }
    },
    guarugeo: {
      title: "Guarujá Interativo",
      logo: logoGuarugeo,
      impact: "Web GIS · Dados públicos",
      desc: "Aplicação cartográfica para consulta e organização de lotes e unidades do Guarujá, com busca, camadas interativas e módulos experimentais de CRM. Dados sensíveis e bases de trabalho não fazem parte do repositório público.",
      stack: ["JavaScript", "Leaflet", "RBush", "Supabase", "Deno Edge", "Firebase Hosting", "Capacitor"],
      screenshots: [
        "/assets/screenshots/guarugeo/guarugeo (1).png",
        "/assets/screenshots/guarugeo/guarugeo (2).png",
        "/assets/screenshots/guarugeo/guarugeo (3).png"
      ],
      details: {
        innovation: "Navegação progressiva e busca espacial sobre uma interface web leve, com separação entre aplicação final e ferramentas de coleta.",
        strongPoints: ["Visualização hierárquica de dados geográficos", "Busca por campos cadastrais", "Índice espacial no cliente", "Aplicação web publicada"],
        architecture: "Frontend JavaScript/Leaflet com Supabase para autenticação, dados e funções de apoio; empacotamento adicional por Capacitor/Electron.",
        businessImpact: "Demonstra integração de dados geográficos, desenho de busca e construção de uma interface voltada a consulta territorial. Funcionalidades comerciais descritas como experimentais não são apresentadas como produto contratado.",
        technicalChallenges: "Organizar camadas e entidades relacionadas, manter interação fluida com muitos elementos e proteger bases que não devem ser públicas.",
        topology: "Leaflet/RBush -> Supabase/PostgreSQL + Edge Functions -> Firebase Hosting",
        url: "https://guarujainterativo.com.br/",
        github: "https://github.com/beehgiovani/GuarujaInterativo"
      }
    },
    predictmed: {
      title: "PredictMed",
      logo: logoPredictMed,
      impact: "Protótipo web · Apoio à compra",
      desc: "Protótipo para importar catálogo e histórico de vendas, registrar rupturas e gerar sugestões de reposição. Os indicadores são apoio à decisão e não uma promessa de precisão ou autonomia de compra.",
      stack: ["React 19", "TypeScript", "Vite", "Express/tRPC", "Drizzle", "PostgreSQL/Supabase", "Gemini"],
      screenshots: [
        "/assets/screenshots/PredictMed/predictmed (1).png",
        "/assets/screenshots/PredictMed/predictmed (2).png",
        "/assets/screenshots/PredictMed/predictmed (3).png"
      ],
      details: {
        innovation: "Combinar ingestão de arquivos operacionais, regras estatísticas legíveis e recursos experimentais de IA em um fluxo auditável.",
        strongPoints: ["Importação de catálogo e histórico", "Sugestões com parâmetros visíveis", "Registro de rupturas", "Testes e tipagem TypeScript"],
        architecture: "Aplicação React/TypeScript com API Express/tRPC, Drizzle e PostgreSQL/Supabase, além de integrações experimentais com Gemini e Firebase.",
        businessImpact: "Demonstra tratamento de arquivos, modelagem de estoque e apresentação de sugestões explicáveis. Não há validação pública de acurácia em operação comercial.",
        technicalChallenges: "Evitar que métricas internas pareçam garantias estatísticas, lidar com históricos incompletos e manter rastreável a origem de cada sugestão.",
        topology: "React -> Express/tRPC -> Drizzle/PostgreSQL -> integrações opcionais Supabase, Firebase e Gemini",
        url: "https://predictmed.web.app/",
        github: "https://github.com/beehgiovani/predictmed"
      }
    },
    marketposter: {
      title: "MarketPoster",
      logo: logoMarketPoster,
      impact: "Android · Ferramenta para varejo",
      desc: "Aplicativo Android para montar cartazes e etiquetas de varejo, importar dados, trabalhar offline e experimentar remoção de fundo e impressão. O foco é a engenharia do editor e dos fluxos locais.",
      stack: ["Kotlin", "Jetpack Compose", "Room", "DataStore", "Hilt", "ML Kit", "Firebase"],
      details: {
        innovation: "Editor mobile que reúne composição visual, persistência local, importação em lote e processamento de imagem no dispositivo.",
        strongPoints: ["UI declarativa com Compose", "Persistência Room/DataStore", "Importação CSV/XLSX", "Segmentação de imagem com ML Kit"],
        architecture: "Aplicativo Android com Compose, Hilt, Room, DataStore, WorkManager e integrações Firebase; recursos de imagem usam APIs do Android e ML Kit.",
        businessImpact: "Demonstra construção de uma ferramenta Android de domínio específico, com estados offline e manipulação de arquivos. Não há alegação de implantação em rede varejista.",
        technicalChallenges: "Controlar memória durante edição de imagens, preservar rascunhos locais e acomodar formatos de importação e saída diferentes.",
        topology: "Compose UI -> ViewModels/Use cases -> Room/DataStore -> ML Kit/Firebase/saídas locais",
        github: "https://github.com/beehgiovani/MarketPoster"
      }
    },
    lumen: {
      title: "Lúmen",
      logo: logoLumen,
      impact: "Protótipo Android · Arquitetura modular",
      desc: "Protótipo Android em Kotlin e Compose para explorar desenho, visão computacional e organização multimódulo. O repositório público contém a base Android; a experiência web anterior não está versionada ali.",
      stack: ["Kotlin", "Jetpack Compose", "Gradle Multi-module", "Android"],
      details: {
        innovation: "Separar domínio, dados, visão e desenho em módulos Android independentes para permitir experimentação sem concentrar toda a lógica no aplicativo.",
        strongPoints: ["Estrutura multimódulo", "Separação de responsabilidades", "Interface com Compose", "Base para experimentos de visão e desenho"],
        architecture: "Aplicação Android dividida nos módulos app, domain, data, vision, ui-common e feature-drawing.",
        businessImpact: "Demonstra organização modular e experimentação técnica. É um protótipo, não um produto de produção nem um modelo próprio de inteligência artificial.",
        technicalChallenges: "Definir limites claros entre os módulos e manter as dependências do fluxo de desenho e visão direcionadas corretamente.",
        topology: "app -> domain + data + vision + ui-common + feature-drawing",
        github: "https://github.com/beehgiovani/lumen"
      }
    }
  },
  skills: {
    java: "Java e Kotlin: APIs REST com Spring Boot e aplicações Android nativas.",
    react: "React e TypeScript: SPAs, PWAs, painéis e fluxos administrativos.",
    spring: "Dados: PostgreSQL, Supabase, Firebase e PostGIS em projetos práticos.",
    python: "Python: automação, Playwright, tratamento de dados e geoprocessamento.",
    cloud: "Deploy e ambiente: Firebase Hosting, Vercel, Docker e validações de configuração.",
    gis: "GIS: GeoJSON, WFS/WMS, Leaflet, PostGIS e validação espacial.",
    arch: "Engenharia: contratos, testes, documentação e separação de responsabilidades.",
    node: "Mobile: Kotlin, Compose, Coroutines/Flow, Room, DataStore e integrações HTTP."
  },
  certs: [
    { name: "Análise e Desenvolvimento de Sistemas (ADS) — FMU", date: "Em curso" },
    { name: "API REST com Kotlin e Spring Boot: camada de persistência", date: "Alura" },
    { name: "Python: Orientação a Objetos", date: "Alura" },
    { name: "Python para Dados: funções, estruturas e exceções", date: "Alura" },
    { name: "SQLite: consultas e instruções SQL", date: "Alura" },
    { name: "Git e GitHub: controle de versão e colaboração", date: "Alura" }
  ],
  footer: {
    availability: "Aberto a trabalho remoto, híbrido ou presencial e disponível para viagens.",
    languages: "Português nativo; inglês técnico para leitura de documentação.",
    focus: "Interesse em desenvolvimento full-stack, Android e automação de dados."
  },
  contact: {
    phone: "+55 (13) 99205-8836",
    email: "brunoadmin@guarujainterativo.com.br",
    linkedin: "https://www.linkedin.com/in/beehgiovani/",
    github: "https://github.com/beehgiovani/"
  },
  dialog: {
    title: "Portfólio profissional",
    message: "Projetos independentes, estágio explícito e informações técnicas verificáveis. Escolha o idioma de leitura.",
    btnEn: "Continuar em inglês",
    btnPt: "Continuar em português"
  }
}
