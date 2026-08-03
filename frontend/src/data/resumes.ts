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
  salaryB2B: string;
  salaryB2BSub: string;
  salaryCLT: string;
  salaryCLTSub: string;
  workModel: string;
  mobility: string;
  nativeLang: string;
  secondLang: string;
}

const relevantEducationPt = [
  "<strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> — FMU (em curso)",
  "<strong>API REST com Kotlin e Spring Boot: camada de persistência</strong> — Alura",
  "<strong>Python: Orientação a Objetos</strong> — Alura",
  "<strong>Python para Dados: funções, estruturas de dados e exceções</strong> — Alura",
  "<strong>SQLite Online: consultas e instruções SQL</strong> — Alura",
  "<strong>Git e GitHub: controle de versão e colaboração</strong> — Alura"
];

const relevantEducationEn = [
  "<strong>Systems Analysis and Development (ADS)</strong> — FMU (in progress)",
  "<strong>REST API with Kotlin and Spring Boot: persistence layer</strong> — Alura",
  "<strong>Python: Object-Oriented Programming</strong> — Alura",
  "<strong>Python for Data: functions, data structures and exceptions</strong> — Alura",
  "<strong>SQLite Online: SQL queries and instructions</strong> — Alura",
  "<strong>Git and GitHub: version control and collaboration</strong> — Alura"
];

export const resumeData: Record<string, Record<'pt' | 'en', ResumeTemplate>> = {
  javascript: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Desenvolvedor Full-Stack Júnior/Pleno (Node.js / React / TypeScript)",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Desenvolvedor Full-Stack Júnior/Pleno com experiência construída em projetos pessoais completos e atuação PJ informal na Agili. Tenho prática com React 19, Next.js, Node.js, TypeScript e Tailwind CSS, criando interfaces, APIs, integrações, telas administrativas e fluxos de dados. Busco uma oportunidade para contribuir com desenvolvimento, manutenção, testes e evolução de produto com responsabilidade e aprendizado contínuo.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Redux Toolkit, Framer Motion, Tailwind CSS, Sass.",
        "<strong>Backend:</strong> Node.js, Fastify, NestJS, Express, Prisma ORM, Deno, Edge Functions.",
        "<strong>Mobile:</strong> React Native, Kotlin (Android Nativo), Jetpack Compose.",
        "<strong>Dados:</strong> PostgreSQL (PostGIS), MongoDB, Supabase, Firebase Realtime DB.",
        "<strong>Infra & DevOps:</strong> AWS, Vercel, Docker, CI/CD (GitHub Actions), Supabase Edge Functions."
      ],
      experience: [
        {
          role: "Projeto pessoal Full-Stack | FarmaDelivery",
          date: "Maio 2026 — Presente",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Desenvolvimento de um projeto pessoal de entregas com React 19, Fastify, Prisma/Supabase, PWA e Android Kotlin.",
            "Organização de schema SQL, seeds, RLS e realtime para praticar modelagem de dados e regras de acesso.",
            "Configuração de API Fastify na Vercel e frontends em Firebase Hosting para treinar deploy de aplicações full-stack.",
            "Criação de testes e validações em API, admin, PWA e Android para reduzir erros durante a evolução do projeto."
          ]
        },
        {
          role: "Projeto pessoal Full-Stack | PredictMed",
          date: "Março 2026 — Presente",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Criação de funcionalidades front-end e integrações com IA para simular auditorias e apoio à previsão de estoque.",
            "Implementação de Edge Functions e fluxos assíncronos como estudo prático de aplicações serverless.",
            "Organização do front-end em componentes reutilizáveis, com foco em manutenção e clareza do código."
          ]
        },
        {
          role: "Projeto pessoal de automação & UI/UX | MarketPoster",
          date: "Janeiro 2024 — Março 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Criação de telas e dashboards para praticar visualização de dados, formulários e fluxos administrativos.",
            "Desenvolvimento de interface com foco em usabilidade, estados de carregamento e organização visual."
          ]
        },
        {
          role: "Desenvolvedor Full-Stack | Agili (PJ informal)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Apoio no desenvolvimento e manutenção de funcionalidades web sob demanda, em atuação PJ informal e sem contrato formal.",
            "Ajustes em interfaces, componentes e integrações, seguindo demandas práticas do projeto.",
            "Correção de bugs, melhoria de organização do código e aprendizado em fluxo real de entrega para cliente."
          ]
        },
        {
          role: "Projeto pessoal Full-Stack | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Desenvolvimento de backend e interface para estudar dados geográficos aplicados ao mercado imobiliário.",
            "Coleta e organização de dados públicos para consulta, filtros e visualização geográfica."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 3.000,00 - R$ 5.500,00 | $ 800 - $ 1,800 USD/mês",
      salaryB2BSub: "R$ 20,00 - R$ 35,00/h | $ 8.00 - $ 18.00/h",
      salaryCLT: "R$ 2.500,00 - R$ 4.500,00",
      salaryCLTSub: "Mais benefícios",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Junior/Mid Full-Stack Developer (Node.js / React / TypeScript)",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Junior/Mid Full-Stack Developer with experience built through complete personal projects and informal B2B work at Agili. Hands-on with React 19, Next.js, Node.js, TypeScript, and Tailwind CSS, building interfaces, APIs, integrations, admin screens, and data flows. Looking for an opportunity to contribute to development, maintenance, testing, and product evolution with responsibility and continuous learning.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Redux Toolkit, Framer Motion, Tailwind CSS, Sass.",
        "<strong>Backend:</strong> Node.js, Fastify, NestJS, Express, Prisma ORM, Deno, Edge Functions.",
        "<strong>Mobile:</strong> React Native, Kotlin (Android Native), Jetpack Compose.",
        "<strong>Data:</strong> PostgreSQL (PostGIS), MongoDB, Supabase, Firebase Realtime DB.",
        "<strong>Infra & DevOps:</strong> AWS, Vercel, Docker, CI/CD (GitHub Actions), Supabase Edge Functions."
      ],
      experience: [
        {
          role: "Personal Full-Stack Project | FarmaDelivery",
          date: "May 2026 — Present",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Built a personal delivery project with React 19, Fastify, Prisma/Supabase, PWA, and Kotlin Android.",
            "Organized SQL schema, seeds, RLS, and realtime features to practice data modeling and access rules.",
            "Configured the Fastify API on Vercel and frontends on Firebase Hosting to practice full-stack deployment.",
            "Created tests and validations across API, admin, PWA, and Android to reduce regressions during project evolution."
          ]
        },
        {
          role: "Personal Full-Stack Project | PredictMed",
          date: "March 2026 — Present",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Created frontend features and AI integrations to simulate inventory audit and forecasting support.",
            "Implemented Edge Functions and async flows as hands-on serverless application practice.",
            "Organized the frontend into reusable components with a focus on maintainability and clear code."
          ]
        },
        {
          role: "Personal Automation & UI/UX Project | MarketPoster",
          date: "January 2024 — March 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Created screens and dashboards to practice data visualization, forms, and admin workflows.",
            "Developed interfaces focused on usability, loading states, and visual organization."
          ]
        },
        {
          role: "Full-Stack Developer | Agili (informal B2B)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Supported development and maintenance of web features on demand through informal B2B work without a formal contract.",
            "Adjusted interfaces, components, and integrations according to practical project needs.",
            "Fixed bugs, improved code organization, and learned from real client delivery flow."
          ]
        },
        {
          role: "Personal Full-Stack Project | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Built backend and interface features to study geospatial data applied to real estate.",
            "Collected and organized public data for search, filters, and map-based visualization."
          ]
        }
      ],
      education: relevantEducationEn,
      salaryB2B: "$ 800 - $ 1,800 USD | R$ 3,000 - R$ 5,500",
      salaryB2BSub: "$ 8.00 - $ 18.00/h | R$ 20.00 - R$ 35.00/h",
      salaryCLT: "R$ 2,500.00 - R$ 4,500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid, or On-site",
      mobility: "Fully available for travel",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical Reading & Documentation)"
    }
  },
  java: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Desenvolvedor Java Júnior/Pleno",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Desenvolvedor Java Júnior/Pleno focado no ecossistema Java e Spring Boot, com experiência prática construída em projetos pessoais e atuação PJ informal na Agili. Tenho prática com APIs REST, persistência, validações, PostgreSQL, testes automatizados e integração entre backend e front-end. Busco contribuir em manutenção, correção de bugs, implementação de features e aprendizado com revisões técnicas.",
      skills: [
        "<strong>Linguagens:</strong> Java (11 a 21), Kotlin, SQL.",
        "<strong>Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate, Fastify/Node em integrações full-stack.",
        "<strong>Arquitetura:</strong> Clean Architecture, SOLID, Microsserviços, Event-Driven Architecture (EDA).",
        "<strong>Dados & Messaging:</strong> PostgreSQL, Redis, Kafka, RabbitMQ, AWS SQS/SNS.",
        "<strong>Qualidade:</strong> JUnit 5, Mockito, Testcontainers, SonarQube, TDD."
      ],
      experience: [
        {
          role: "Projeto pessoal Backend & Database | FarmaDelivery",
          date: "Maio 2026 — Presente",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Criação de contratos backend, permissões e validações HTTP para praticar uma operação logística com PostgreSQL/Supabase.",
            "Organização de schema, RLS, realtime e comentários SQL em arquivo canônico para facilitar manutenção do projeto.",
            "Configuração de Fastify/Prisma para Vercel Serverless, incluindo build ESM, healthcheck público e CORS.",
            "Criação de testes para permissões, relatórios, comprovantes, rotas e fallbacks REST."
          ]
        },
        {
          role: "Desenvolvedor Backend | Agili (PJ informal)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Apoio em desenvolvimento e manutenção de funcionalidades backend sob demanda, em atuação PJ informal e sem contrato formal.",
            "Correções, ajustes de regras de negócio e organização de código conforme necessidades do projeto.",
            "Contato prático com rotinas de banco de dados, APIs e depuração de problemas em ambiente real."
          ]
        },
        {
          role: "Projeto pessoal Backend | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Desenvolvimento de backend para consulta e organização de dados geográficos aplicados a imóveis.",
            "Criação de APIs REST integradas com processamento de dados geográficos (PostGIS)."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 3.000,00 - R$ 5.500,00 | $ 800 - $ 1,800 USD",
      salaryB2BSub: "R$ 20,00 - R$ 35,00/h | $ 8.00 - $ 18.00/h",
      salaryCLT: "R$ 2.500,00 - R$ 4.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Junior/Mid Java Software Engineer",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Junior/Mid Software Engineer focused on Java and Spring Boot, with experience built through personal projects and informal B2B work at Agili. Hands-on with REST APIs, persistence, validations, PostgreSQL, automated tests, and backend/frontend integration. Looking to contribute to teams by evolving existing code, fixing bugs, implementing features, and learning through technical review.",
      skills: [
        "<strong>Languages:</strong> Java (11 to 21), Kotlin, SQL.",
        "<strong>Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate, Fastify/Node in full-stack integrations.",
        "<strong>Architecture:</strong> Clean Architecture, SOLID, Microservices, Event-Driven Architecture (EDA).",
        "<strong>Data & Messaging:</strong> PostgreSQL, Redis, Kafka, RabbitMQ, AWS SQS/SNS.",
        "<strong>Quality:</strong> JUnit 5, Mockito, Testcontainers, SonarQube, TDD."
      ],
      experience: [
        {
          role: "Personal Backend & Database Project | FarmaDelivery",
          date: "May 2026 — Present",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Created backend contracts, permissions, and HTTP validations to practice logistics flows with PostgreSQL/Supabase.",
            "Organized schema, RLS, realtime, and SQL comments into a canonical file to make the project easier to maintain.",
            "Configured Fastify/Prisma for Vercel Serverless, including ESM build handling, public health checks, and CORS.",
            "Created tests for permissions, reports, proofs, routes, and REST fallbacks."
          ]
        },
        {
          role: "Back-End Engineer | PredictMed",
          date: "March 2026 — Present",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Implemented asynchronous integration flows for a personal predictive health project.",
            "Implementation of resilient and scalable data flows for real-time processing."
          ]
        },
        {
          role: "Backend Developer | Agili (informal B2B)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Supported backend feature development and maintenance on demand through informal B2B work without a formal contract.",
            "Fixed issues, adjusted business rules, and organized code according to project needs.",
            "Gained practical exposure to databases, APIs, and debugging issues in a real delivery context."
          ]
        },
        {
          role: "Personal Backend Project | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Built backend features for searching and organizing geospatial data applied to real estate.",
            "Created REST APIs integrated with geographic data processing (PostGIS)."
          ]
        }
      ],
      education: relevantEducationEn,
      salaryB2B: "$ 800 - $ 1,800 USD | R$ 3,000 - R$ 5,500",
      salaryB2BSub: "$ 8.00 - $ 18.00/h | R$ 20.00 - R$ 35.00/h",
      salaryCLT: "R$ 2,500.00 - R$ 4,500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid or On-site",
      mobility: "Fully available for travel",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical Reading & Documentation)"
    }
  },
  kotlin: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Desenvolvedor Kotlin Júnior/Pleno & Mobile Backend",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Desenvolvedor Kotlin Júnior/Pleno com experiência prática em projetos pessoais Android e backend, além de atuação PJ informal na Agili. Tenho contato com Jetpack Compose, Retrofit, DataStore, FCM, Kotlin Coroutines, Flow, Spring Boot e persistência local. Busco atuar em manutenção, implementação de telas, consumo de APIs, correção de bugs e evolução gradual de aplicativos.",
      skills: [
        "<strong>Linguagens:</strong> Kotlin (Avançado), Java, SQL.",
        "<strong>Mobile Android:</strong> Jetpack Compose, ViewModels, DataStore, Retrofit/OkHttp, WorkManager, FCM.",
        "<strong>Backend Kotlin:</strong> Spring Boot 3, Ktor, Hibernate, Exposed ORM.",
        "<strong>Arquitetura:</strong> Clean Architecture, MVVM, MVI, SOLID, Design Patterns.",
        "<strong>Infra:</strong> Docker, AWS, Firebase, CI/CD (GitHub Actions)."
      ],
      experience: [
        {
          role: "Projeto pessoal Kotlin Android & PWA | FarmaDelivery",
          date: "Maio 2026 — Presente",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Criação e evolução de app Android de estudos com Jetpack Compose, Retrofit, DataStore, FCM, GPS e comprovante fotográfico.",
            "Implementação de fluxos de entrega, rotas, disponibilidade, última atualização e labels de campo.",
            "Configuração de Android e PWA para consumir API publicada durante testes fora da rede local.",
            "Criação de testes unitários Kotlin para use cases, rotas, formatação e contratos compartilhados com a API."
          ]
        },
        {
          role: "Projeto pessoal Kotlin | Lúmen Web",
          date: "2025 — Fevereiro 2026",
          link: "https://github.com/beehgiovani/lumen",
          bullets: [
            "Estudo e desenvolvimento de processamento de áudio em tempo real usando Kotlin nativo.",
            "Integração experimental de visão computacional com processamento assíncrono."
          ]
        },
        {
          role: "Desenvolvedor Kotlin/Backend | Agili (PJ informal)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Apoio em ajustes de funcionalidades e manutenção de código em atuação PJ informal e sem contrato formal.",
            "Uso de tipagem forte e null-safety do Kotlin para escrever código mais previsível.",
            "Aplicação gradual de organização por camadas e princípios SOLID em funcionalidades backend."
          ]
        },
        {
          role: "Projeto pessoal Full-Stack | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Integração de serviços móveis com backend geográfico em projeto pessoal.",
            "Processamento assíncrono de dados públicos para aplicações GIS de estudo imobiliário."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 3.000,00 - R$ 5.500,00 | $ 800 - $ 1,800 USD",
      salaryB2BSub: "R$ 20,00 - R$ 35,00/h | $ 8.00 - $ 18.00/h",
      salaryCLT: "R$ 2.500,00 - R$ 4.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponibilidade total",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Junior/Mid Kotlin & Mobile Backend Developer",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Junior/Mid Kotlin Developer with hands-on experience from personal Android/backend projects and informal B2B work at Agili. Practical exposure to Jetpack Compose, Retrofit, DataStore, FCM, Kotlin Coroutines, Flow, Spring Boot, and local persistence. Looking to work on maintenance, screen implementation, API consumption, bug fixes, and gradual app evolution.",
      skills: [
        "<strong>Languages:</strong> Kotlin (Advanced), Java, SQL.",
        "<strong>Mobile Android:</strong> Jetpack Compose, ViewModels, DataStore, Retrofit/OkHttp, WorkManager, FCM.",
        "<strong>Backend Kotlin:</strong> Spring Boot 3, Ktor, Hibernate, Exposed ORM.",
        "<strong>Architecture:</strong> Clean Architecture, MVVM, MVI, SOLID, Design Patterns.",
        "<strong>Infra:</strong> Docker, AWS, Firebase, CI/CD (GitHub Actions)."
      ],
      experience: [
        {
          role: "Personal Kotlin Android & PWA Project | FarmaDelivery",
          date: "May 2026 — Present",
          link: "https://github.com/beehgiovani/FarmaDelivery",
          bullets: [
            "Created and evolved a study Android app with Jetpack Compose, Retrofit, DataStore, FCM, GPS, and photo proof.",
            "Implemented delivery, route, availability, last-sync, and field label flows.",
            "Configured Android and PWA clients to consume a published API during tests outside the local network.",
            "Added Kotlin unit tests for use cases, routing, formatting, and contracts shared with the API."
          ]
        },
        {
          role: "Personal Kotlin Project | Lúmen Web",
          date: "2025 — February 2026",
          link: "https://github.com/beehgiovani/lumen",
          bullets: [
            "Studied and developed real-time audio processing using native Kotlin.",
            "Experimented with computer vision and asynchronous processing."
          ]
        },
        {
          role: "Kotlin/Backend Developer | Agili (informal B2B)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Supported feature adjustments and code maintenance through informal B2B work without a formal contract.",
            "Used Kotlin strong typing and null-safety to write more predictable code.",
            "Applied gradual layered organization and SOLID principles to backend features."
          ]
        },
        {
          role: "Personal Full-Stack Project | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Integrated mobile services with a geospatial backend in a personal project.",
            "Processed public data asynchronously for GIS study features applied to real estate."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "$ 800 - $ 1,800 USD | R$ 3,000 - R$ 5,500",
      salaryB2BSub: "$ 8.00 - $ 18.00/h | R$ 20.00 - R$ 35.00/h",
      salaryCLT: "R$ 2,500.00 - R$ 4,500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid or On-site",
      mobility: "Fully available",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical Reading & Documentation)"
    }
  },
  python: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Desenvolvedor Python Júnior/Pleno, IA & Automação",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Desenvolvedor Python Júnior/Pleno com experiência prática em projetos pessoais de automação, dados e IA, além de atuação PJ informal na Agili. Tenho contato com scraping, processamento de dados, FastAPI/Flask, integrações REST, scripts de apoio e organização de dados geográficos. Busco oportunidade para atuar em manutenção, automações internas, integrações, correção de bugs e melhoria gradual de processos.",
      skills: [
        "<strong>Linguagens:</strong> Python 3.12+ (Avançado), SQL, Bash.",
        "<strong>Data & IA:</strong> Pandas, NumPy, Scikit-learn, PyTorch, OpenCV, LangChain.",
        "<strong>Automação & Scraping:</strong> Playwright, Selenium, Scrapy, BeautifulSoup, validação de dados públicos.",
        "<strong>Backend & APIs:</strong> FastAPI, Flask, Pydantic, Webhooks.",
        "<strong>Infra:</strong> AWS (Lambda, S3), Docker, Linux Scripting, CI/CD."
      ],
      experience: [
        {
          role: "Projeto pessoal Python - Automação & Dados | MarketPoster",
          date: "Janeiro 2024 — Março 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Criação de pipeline de extração e organização de dados como estudo prático de automação.",
            "Automação de tarefas repetitivas para praticar leitura, transformação e exportação de dados."
          ]
        },
        {
          role: "Projeto pessoal de IA | OmniTrace",
          date: "2024 — Dezembro 2025",
          link: "https://github.com/beehgiovani/guaruja-email-monitor",
          bullets: [
            "Criação de estudos de uso de IA com foco em controle de custos, prompts e organização de logs.",
            "Desenvolvimento de ferramentas CLI em Python para automatizar tarefas do meu próprio fluxo de trabalho.",
            "Integração de LLMs (GPT/Gemini) para análise automatizada de logs e apoio a revisões."
          ]
        },
        {
          role: "Projeto pessoal GIS | MetroMar",
          date: "2023 — 2024",
          link: "https://github.com/beehgiovani/InteractiveMap",
          bullets: [
            "Desenvolvimento de fluxo de dados para estudo de visualização geográfica.",
            "Normalização de datasets públicos para consulta e visualização em mapas."
          ]
        },
        {
          role: "Desenvolvedor Python/Full-Stack | Agili (PJ informal)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Apoio em automações, ajustes de funcionalidades e manutenção de código em atuação PJ informal e sem contrato formal.",
            "Correção de bugs, pequenos scripts e integrações conforme demandas práticas do projeto.",
            "Contato com fluxo real de entrega, comunicação com demanda e ajustes incrementais."
          ]
        },
        {
          role: "Projeto pessoal de Dados / GIS | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/SpLitoralScraping",
          bullets: [
            "Desenvolvimento de scrapers para estudar coleta de dados públicos tributários e imobiliários.",
            "Organização de uma base de consulta geográfica para praticar filtros, mapas e análise de dados."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 3.000,00 - R$ 5.500,00 | $ 800 - $ 1,800 USD",
      salaryB2BSub: "R$ 20,00 - R$ 35,00/h | $ 8.00 - $ 18.00/h",
      salaryCLT: "R$ 2.500,00 - R$ 4.500,00",
      salaryCLTSub: "Mais benefícios",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponibilidade total",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Junior/Mid Python Developer, AI & Automation",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Junior/Mid Python Developer with hands-on experience from personal automation, data, and AI projects, plus informal B2B work at Agili. Practical exposure to scraping, data processing, FastAPI/Flask, REST integrations, support scripts, and geospatial data organization. Looking to work on maintenance, internal automations, integrations, bug fixes, and gradual process improvements.",
      skills: [
        "<strong>Languages:</strong> Python 3.12+ (Advanced), SQL, Bash.",
        "<strong>Geospatial:</strong> PostGIS, Vector Tiles, GeoPandas, Tippecanoe, Shapefiles.",
        "<strong>AI & Automation:</strong> Daily use of AI tools (LLMs) for workflow acceleration, Gemini Vision, PyTorch, Playwright.",
        "<strong>Backend & Cloud:</strong> Python (Flask/FastAPI), AWS (S3, Lambda, EC2), SQL (PostgreSQL), CI/CD."
      ],
      experience: [
        {
          role: "Personal Python Automation & Data Project | MarketPoster",
          date: "January 2024 — March 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Created a data extraction and organization pipeline as hands-on automation practice.",
            "Automated repetitive tasks to practice reading, transforming, and exporting data."
          ]
        },
        {
          role: "Personal AI Project | OmniTrace",
          date: "2024 — December 2025",
          link: "https://github.com/beehgiovani/guaruja-email-monitor",
          bullets: [
            "Created AI usage studies focused on cost control, prompts, and log organization.",
            "Built Python CLI tools to automate my own development workflow tasks.",
            "Integrated LLMs (GPT/Gemini) for automated log analysis and review support."
          ]
        },
        {
          role: "Personal GIS Project | MetroMar",
          date: "2023 — 2024",
          link: "https://github.com/beehgiovani/InteractiveMap",
          bullets: [
            "Developed data flows for geospatial visualization studies.",
            "Normalized public datasets for search and map-based visualization."
          ]
        },
        {
          role: "Python/Full-Stack Developer | Agili (informal B2B)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Supported automations, feature adjustments, and code maintenance through informal B2B work without a formal contract.",
            "Fixed bugs, wrote small scripts, and adjusted integrations according to practical project needs.",
            "Gained exposure to real delivery flow, requirements communication, and incremental changes."
          ]
        },
        {
          role: "Personal Data / GIS Project | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/SpLitoralScraping",
          bullets: [
            "Built scrapers to study public tax and real estate data collection.",
            "Organized a geospatial search base to practice filters, maps, and data analysis."
          ]
        }
      ],
      education: relevantEducationEn,
      salaryB2B: "$ 800 - $ 1,800 USD | R$ 3,000 - R$ 5,500",
      salaryB2BSub: "$ 8.00 - $ 18.00/h | R$ 20.00 - R$ 35.00/h",
      salaryCLT: "R$ 2,500.00 - R$ 4,500.00",
      salaryCLTSub: "Plus benefits",
      workModel: "Remote, Hybrid or On-site",
      mobility: "Fully available",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical Reading & Documentation)"
    }
  }
};
