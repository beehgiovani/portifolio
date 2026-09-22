export interface ResumeTemplate {
  name: string;
  subtitle: string;
  contactInfo: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: string[];
  experience: {
    role: string;
    date: string;
    bullets: string[];
    link?: string;
  }[];
  education: string[];
  workModel: string;
  mobility: string;
  nativeLang: string;
  secondLang: string;
}

const educationPt = [
  "<strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> — FMU (em curso)",
  "<strong>API REST com Kotlin e Spring Boot: camada de persistência</strong> — Alura",
  "<strong>Python: Orientação a Objetos</strong> — Alura",
  "<strong>Python para Dados: funções, estruturas e exceções</strong> — Alura",
  "<strong>SQLite: consultas e instruções SQL</strong> — Alura",
  "<strong>Git e GitHub: controle de versão e colaboração</strong> — Alura"
]

const educationEn = [
  "<strong>Systems Analysis and Development</strong> — FMU (in progress)",
  "<strong>REST API with Kotlin and Spring Boot: persistence layer</strong> — Alura",
  "<strong>Python: Object-Oriented Programming</strong> — Alura",
  "<strong>Python for Data: functions, structures, and exceptions</strong> — Alura",
  "<strong>SQLite: SQL queries and statements</strong> — Alura",
  "<strong>Git and GitHub: version control and collaboration</strong> — Alura"
]

const commonPt = {
  name: "Bruno Giovani Pereira",
  contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
  linkedin: "https://linkedin.com/in/beehgiovani",
  github: "https://github.com/beehgiovani",
  education: educationPt,
  workModel: "Remoto, híbrido ou presencial",
  mobility: "Disponível para viagens",
  nativeLang: "Português nativo",
  secondLang: "Inglês técnico para leitura de documentação"
}

const commonEn = {
  name: "Bruno Giovani Pereira",
  contactInfo: "Guarujá, São Paulo, Brazil | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
  linkedin: "https://linkedin.com/in/beehgiovani",
  github: "https://github.com/beehgiovani",
  education: educationEn,
  workModel: "Remote, hybrid, or on-site",
  mobility: "Available for travel",
  nativeLang: "Native Portuguese",
  secondLang: "Technical English for reading documentation"
}

export const resumeData = {
  fullstack: {
    pt: {
      ...commonPt,
      subtitle: "Desenvolvedor Full-Stack | React, TypeScript e APIs",
      summary: "Desenvolvedor de software com prática em projetos independentes que integram interfaces React, APIs Node.js, bancos PostgreSQL/Supabase e clientes mobile. Tenho experiência construindo painéis, autenticação, regras de acesso, importação de dados, testes e rotinas de deploy. Busco uma oportunidade de desenvolvimento em equipe, com escopo e nível definidos pela vaga e pela avaliação técnica.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Vite, formulários, dashboards, PWAs e interfaces responsivas.",
        "<strong>Backend:</strong> Node.js, Fastify, Express, tRPC, APIs REST, validação e autenticação.",
        "<strong>Dados:</strong> PostgreSQL, Supabase, Prisma, Drizzle, Firebase e noções de PostGIS.",
        "<strong>Qualidade:</strong> Vitest/JUnit, lint, typecheck, documentação, Git e preflight de ambiente.",
        "<strong>Entrega:</strong> Firebase Hosting, Vercel, Docker e configuração segura por variáveis de ambiente."
      ],
      experience: [
        {
          role: "FarmaDelivery | Projeto independente full-stack",
          date: "Maio de 2026",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Estruturei um monorepo com painel React, API Fastify, PWA e app Android para um fluxo de entregas de farmácia.",
            "Modelei perfis, entregas, relatórios e integrações com PostgreSQL/Supabase, Prisma e Firebase Messaging.",
            "Adicionei testes, checagens de ambiente e documentação que separa validação local de homologação operacional."
          ]
        },
        {
          role: "Guarujá Interativo | Aplicação Web GIS",
          date: "Março — julho de 2026",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Desenvolvi busca e navegação sobre lotes e unidades em uma aplicação JavaScript/Leaflet publicada na web.",
            "Integrei Supabase, índice espacial no cliente e módulos experimentais de CRM, mantendo bases sensíveis fora do repositório público."
          ]
        },
        {
          role: "PredictMed | Protótipo de apoio à reposição",
          date: "Março de 2026",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Implementei importação de catálogo e histórico, registro de rupturas e sugestões parametrizadas de reposição.",
            "Usei React/TypeScript, Express/tRPC, Drizzle e PostgreSQL, tratando indicadores como apoio à decisão, sem promessa de acurácia comercial."
          ]
        },
        {
          role: "Colaboração pontual | Agili",
          date: "2024 — escopo PJ informal concluído",
          bullets: [
            "Atuei em ajustes de funcionalidades, manutenção de código, correções e integrações web.",
            "A experiência foi pontual e informal; não a apresento como vínculo empregatício ou cargo formal."
          ]
        }
      ]
    },
    en: {
      ...commonEn,
      subtitle: "Full-Stack Developer | React, TypeScript, and APIs",
      summary: "Software developer with hands-on experience from independent projects that connect React interfaces, Node.js APIs, PostgreSQL/Supabase databases, and mobile clients. I have built dashboards, authentication, access rules, data-import flows, tests, and deployment routines. I am looking for a team-based development role, with seniority and scope defined by the position and technical assessment.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Vite, forms, dashboards, PWAs, and responsive interfaces.",
        "<strong>Backend:</strong> Node.js, Fastify, Express, tRPC, REST APIs, validation, and authentication.",
        "<strong>Data:</strong> PostgreSQL, Supabase, Prisma, Drizzle, Firebase, and working knowledge of PostGIS.",
        "<strong>Quality:</strong> Vitest/JUnit, linting, type checking, documentation, Git, and environment preflight.",
        "<strong>Delivery:</strong> Firebase Hosting, Vercel, Docker, and secure environment-variable configuration."
      ],
      experience: [
        {
          role: "FarmaDelivery | Independent full-stack project",
          date: "May 2026",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Structured a monorepo with a React dashboard, Fastify API, PWA, and Android app for a pharmacy-delivery workflow.",
            "Modeled roles, deliveries, reports, and integrations with PostgreSQL/Supabase, Prisma, and Firebase Messaging.",
            "Added tests, environment checks, and documentation that separates local validation from operational acceptance testing."
          ]
        },
        {
          role: "Guarujá Interativo | Web GIS application",
          date: "March — July 2026",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Built search and navigation over lots and units in a published JavaScript/Leaflet application.",
            "Integrated Supabase, a client-side spatial index, and experimental CRM modules while keeping sensitive datasets outside the public repository."
          ]
        },
        {
          role: "PredictMed | Replenishment-support prototype",
          date: "March 2026",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Implemented catalog and history imports, stockout records, and parameterized replenishment suggestions.",
            "Used React/TypeScript, Express/tRPC, Drizzle, and PostgreSQL while treating indicators as decision support rather than proven commercial accuracy."
          ]
        },
        {
          role: "Short-term collaboration | Agili",
          date: "2024 — completed informal B2B scope",
          bullets: [
            "Worked on feature adjustments, code maintenance, bug fixes, and web integrations.",
            "This was a short-term informal engagement, not formal employment or a formal company title."
          ]
        }
      ]
    }
  },
  android: {
    pt: {
      ...commonPt,
      subtitle: "Desenvolvedor Android | Kotlin e Jetpack Compose",
      summary: "Desenvolvedor Android com prática em Kotlin, Jetpack Compose, Coroutines/Flow, persistência local e integrações Supabase/Firebase. Meus projetos incluem um jogo com regras e sincronização, um app operacional de entregas e ferramentas de criação visual. Busco contribuir com manutenção, implementação de telas, consumo de APIs, testes e evolução de aplicativos em equipe.",
      skills: [
        "<strong>Android:</strong> Kotlin, Jetpack Compose, Material 3, ViewModel e Navigation.",
        "<strong>Assíncrono e estado:</strong> Coroutines, Flow, serialização e gerenciamento de estado de UI.",
        "<strong>Dados:</strong> Room, DataStore, Supabase Auth/PostgREST/Realtime e Firebase.",
        "<strong>Rede:</strong> Ktor/OkHttp, sockets TCP, descoberta NSD e integração com APIs HTTP.",
        "<strong>Qualidade:</strong> JUnit, testes instrumentados, Gradle, builds debug/release e documentação técnica."
      ],
      experience: [
        {
          role: "Carteado BR | Jogo Android",
          date: "Julho — agosto de 2026",
          link: "https://github.com/beehgiovani/CachetaBuraco",
          bullets: [
            "Implementei regras de Cacheta, Buraco e Tranca em um motor separado da interface Compose.",
            "Criei transportes intercambiáveis para bot local, Wi-Fi e modo online beta com Supabase Realtime.",
            "Modelei estado público e informações privadas dos jogadores, eventos idempotentes, reconexão e testes unitários."
          ]
        },
        {
          role: "FarmaDelivery | App Android de entregas",
          date: "Maio de 2026",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Desenvolvi o cliente Android do motoboy dentro de um monorepo que também contém API, painel e PWA.",
            "Trabalhei com autenticação, acompanhamento de entregas, localização, notificações e contratos compartilhados com o backend."
          ]
        },
        {
          role: "MarketPoster | Editor Android para varejo",
          date: "Dezembro de 2025",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Construí fluxos de composição visual, persistência com Room/DataStore e importação CSV/XLSX.",
            "Integrei Hilt, WorkManager, Firebase e segmentação de imagem com ML Kit em caráter experimental."
          ]
        },
        {
          role: "Lúmen | Experimento Web e Android",
          date: "Maio de 2026",
          link: "https://github.com/beehgiovani/lumen",
          bullets: [
            "Organizei uma base Android multimódulo com Compose, separando domínio, visão, UI comum e desenho.",
            "O projeto permanece experimental e não é apresentado como aplicativo em produção."
          ]
        }
      ]
    },
    en: {
      ...commonEn,
      subtitle: "Android Developer | Kotlin and Jetpack Compose",
      summary: "Android developer with hands-on experience in Kotlin, Jetpack Compose, Coroutines/Flow, local persistence, and Supabase/Firebase integrations. My projects include a synchronized rules-based card game, an operational delivery app, and visual-creation tools. I am looking to contribute to maintenance, screen implementation, API consumption, testing, and app evolution within a team.",
      skills: [
        "<strong>Android:</strong> Kotlin, Jetpack Compose, Material 3, ViewModel, and Navigation.",
        "<strong>Async and state:</strong> Coroutines, Flow, serialization, and UI state management.",
        "<strong>Data:</strong> Room, DataStore, Supabase Auth/PostgREST/Realtime, and Firebase.",
        "<strong>Networking:</strong> Ktor/OkHttp, TCP sockets, NSD discovery, and HTTP API integration.",
        "<strong>Quality:</strong> JUnit, instrumented tests, Gradle, debug/release builds, and technical documentation."
      ],
      experience: [
        {
          role: "Carteado BR | Android card game",
          date: "July — August 2026",
          link: "https://github.com/beehgiovani/CachetaBuraco",
          bullets: [
            "Implemented Cacheta, Buraco, and Tranca rules in an engine separated from the Compose UI.",
            "Created interchangeable transports for a local bot, Wi-Fi, and a Supabase Realtime online beta.",
            "Modeled public state and private player information, idempotent events, reconnection, and unit tests."
          ]
        },
        {
          role: "FarmaDelivery | Android delivery app",
          date: "May 2026",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Built the courier Android client within a monorepo that also includes an API, dashboard, and PWA.",
            "Worked with authentication, delivery tracking, location, notifications, and contracts shared with the backend."
          ]
        },
        {
          role: "MarketPoster | Android retail editor",
          date: "December 2025",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Built visual-composition flows, Room/DataStore persistence, and CSV/XLSX imports.",
            "Integrated Hilt, WorkManager, Firebase, and experimental ML Kit image segmentation."
          ]
        },
        {
          role: "Lúmen | Web and Android experiment",
          date: "May 2026",
          link: "https://github.com/beehgiovani/lumen",
          bullets: [
            "Organized a multi-module Android foundation with Compose, separating domain, vision, common UI, and drawing.",
            "The project remains experimental and is not presented as a production application."
          ]
        }
      ]
    }
  },
  data: {
    pt: {
      ...commonPt,
      subtitle: "Desenvolvedor Python | Automação, Dados e GIS",
      summary: "Desenvolvedor com prática em Python para automação web, coleta controlada de dados públicos, tratamento de arquivos e fluxos geográficos. Trabalho com Playwright, requests, pandas, GeoJSON e serviços WFS, sempre separando ferramentas de coleta das aplicações finais. Busco oportunidades em automação, integrações, dados ou GIS, com atenção a limites de acesso, privacidade e reexecução segura.",
      skills: [
        "<strong>Python:</strong> scripts reexecutáveis, requests, pandas, processamento de arquivos e organização de dados.",
        "<strong>Automação:</strong> Playwright, navegação controlada, retries, logs e experimentos de OCR.",
        "<strong>GIS:</strong> GeoJSON, WFS/WMS, Leaflet, PostGIS, conversão e validação espacial.",
        "<strong>Integrações:</strong> APIs REST, Supabase/PostgreSQL, armazenamento e rotinas agendadas.",
        "<strong>Cuidados:</strong> variáveis de ambiente, não persistência de credenciais, limites de taxa e documentação de origem."
      ],
      experience: [
        {
          role: "Guarujá Interativo | Dados geográficos e aplicação GIS",
          date: "2026",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Organizei dados de lotes e unidades para busca e visualização em uma aplicação Leaflet.",
            "Separei bases e ferramentas de coleta da aplicação publicada, mantendo dados sensíveis fora do repositório."
          ]
        },
        {
          role: "MetroMarGeo | Ferramentas de coleta geográfica",
          date: "Abril de 2026",
          link: "https://github.com/beehgiovani/SpLitoralScraping",
          bullets: [
            "Criei scripts para consultar serviços públicos de geoprocessamento e exportar dados por município.",
            "Documentei dependências, saídas e limites; rotinas que dependem de portais externos precisam ser verificadas antes de nova execução."
          ]
        },
        {
          role: "Automação de certidões | Protótipo técnico",
          date: "Abril de 2026",
          link: "https://github.com/beehgiovani/CertidaoGuaru",
          bullets: [
            "Experimentei Playwright, OCR e processamento em lote para automatizar tarefas repetitivas em portais públicos.",
            "O uso depende de autorização, termos de cada serviço, limites de acesso e conferência humana dos documentos."
          ]
        },
        {
          role: "Colaboração pontual | Agili",
          date: "2024 — escopo PJ informal concluído",
          bullets: [
            "Atuei em automações, manutenção de código e integrações em um escopo pontual.",
            "A experiência não é apresentada como cargo formal nem como operação de dados em escala comprovada."
          ]
        }
      ]
    },
    en: {
      ...commonEn,
      subtitle: "Python Developer | Automation, Data, and GIS",
      summary: "Developer with hands-on Python experience in web automation, controlled collection of public data, file processing, and geospatial workflows. I work with Playwright, requests, pandas, GeoJSON, and WFS services while keeping collection tooling separate from final applications. I am looking for automation, integration, data, or GIS roles with attention to access limits, privacy, and safe re-execution.",
      skills: [
        "<strong>Python:</strong> rerunnable scripts, requests, pandas, file processing, and data organization.",
        "<strong>Automation:</strong> Playwright, controlled navigation, retries, logging, and OCR experiments.",
        "<strong>GIS:</strong> GeoJSON, WFS/WMS, Leaflet, PostGIS, conversion, and spatial validation.",
        "<strong>Integrations:</strong> REST APIs, Supabase/PostgreSQL, storage, and scheduled routines.",
        "<strong>Safeguards:</strong> environment variables, no credential persistence, rate limits, and source documentation."
      ],
      experience: [
        {
          role: "Guarujá Interativo | Geospatial data and GIS application",
          date: "2026",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Organized lot and unit data for search and visualization in a Leaflet application.",
            "Separated datasets and collection tooling from the published application, keeping sensitive data outside the repository."
          ]
        },
        {
          role: "MetroMarGeo | Geospatial collection tools",
          date: "April 2026",
          link: "https://github.com/beehgiovani/SpLitoralScraping",
          bullets: [
            "Created scripts to query public geoprocessing services and export data by municipality.",
            "Documented dependencies, outputs, and limitations; routines that depend on external portals must be checked before a new run."
          ]
        },
        {
          role: "Certificate automation | Technical prototype",
          date: "April 2026",
          link: "https://github.com/beehgiovani/CertidaoGuaru",
          bullets: [
            "Experimented with Playwright, OCR, and batch processing for repetitive tasks on public portals.",
            "Use depends on authorization, each service's terms, access limits, and human review of generated documents."
          ]
        },
        {
          role: "Short-term collaboration | Agili",
          date: "2024 — completed informal B2B scope",
          bullets: [
            "Worked on automation, code maintenance, and integrations in a limited engagement.",
            "The experience is not presented as a formal title or as proven large-scale data operations."
          ]
        }
      ]
    }
  }
} satisfies Record<string, Record<'pt' | 'en', ResumeTemplate>>
