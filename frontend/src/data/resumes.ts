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
      subtitle: "Arquiteto Full-Stack Pleno/Sênior (Node.js / React / TypeScript)",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Arquiteto Full-Stack Pleno/Sênior especializado na construção de interfaces de alto impacto e backends escaláveis utilizando o ecossistema TypeScript. Expertise profunda em React 19, Next.js, Node.js e Tailwind CSS. Especialista em performance frontend (Vite, Web-vitals), Clean Architecture e sistemas offline-first. Forte histórico na entrega de MVPs rápidos e escaláveis, liderando a convergência entre Design System, UX e escalabilidade técnica para maximizar o ROI e a retenção de usuários.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Redux Toolkit, Framer Motion, Tailwind CSS, Sass.",
        "<strong>Backend:</strong> Node.js, NestJS, Express, Prisma ORM, Deno, Edge Functions.",
        "<strong>Mobile:</strong> React Native, Kotlin (Android Nativo), Jetpack Compose.",
        "<strong>Dados:</strong> PostgreSQL (PostGIS), MongoDB, Supabase, Firebase Realtime DB.",
        "<strong>Infra & DevOps:</strong> AWS, Vercel, Docker, CI/CD (GitHub Actions), Supabase Edge Functions."
      ],
      experience: [
        {
          role: "Pleno/Sênior Full-Stack Developer | PredictMed",
          date: "Março 2026 — Outubro 2026",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Liderando o desenvolvimento de Edge Functions para processar IA em tempo real com baixa latência.",
            "Arquitetura de camadas de integração assíncrona para SaaS de saúde preditiva B2B.",
            "Refinei a arquitetura do front-end para ser modular, escalável e extremamente rápida."
          ]
        },
        {
          role: "Lead Developer - Automação & UI/UX | Cimed",
          date: "Janeiro 2024 — Março 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Criação de dashboards executivos complexos para visualização de dados industriais em tempo real.",
            "Desenvolvimento de interface intuitiva que reduziu o tempo de treinamento de novos operadores em 50%."
          ]
        },
        {
          role: "Pleno/Sênior Full-Stack Developer | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Liderança na transição de SPAs legadas para micro-frontends modernos em React/TypeScript.",
            "Otimização de bundle e renderização (60% melhoria no Lighthouse) e redução de 25% no churn.",
            "Desenvolvimento de Design System interno para padronização de interfaces em múltiplos produtos SaaS."
          ]
        },
        {
          role: "Arquiteto Full-Stack | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Desenvolvimento do core backend de um ecossistema GIS voltado à inteligência imobiliária.",
            "Processamento automatizado de dados abertos (OSINT) enriquecendo o banco de dados imobiliário 24/7."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD/mês",
      salaryB2BSub: "R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "Mais benefícios",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Mid/Senior Full-Stack Architect (Node.js / React / TypeScript)",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Mid/Senior Full-Stack Architect specialized in building high-impact interfaces and scalable backends using the TypeScript ecosystem. Deep expertise in React 19, Next.js, Node.js, and Tailwind CSS. Specialist in frontend performance (Vite, Web-vitals), Clean Architecture, and offline-first systems. Proven track record in delivering fast and scalable MVPs, leading the convergence between Design System, UX, and technical scalability to maximize ROI and user retention.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Redux Toolkit, Framer Motion, Tailwind CSS, Sass.",
        "<strong>Backend:</strong> Node.js, NestJS, Express, Prisma ORM, Deno, Edge Functions.",
        "<strong>Mobile:</strong> React Native, Kotlin (Android Native), Jetpack Compose.",
        "<strong>Data:</strong> PostgreSQL (PostGIS), MongoDB, Supabase, Firebase Realtime DB.",
        "<strong>Infra & DevOps:</strong> AWS, Vercel, Docker, CI/CD (GitHub Actions), Supabase Edge Functions."
      ],
      experience: [
        {
          role: "Mid/Senior Full-Stack Developer | PredictMed",
          date: "March 2026 — October 2026",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Leading the development of Edge Functions to process real-time AI with low latency.",
            "Architecting asynchronous integration layers for B2B predictive health SaaS.",
            "Refined frontend architecture to be modular, scalable, and extremely fast."
          ]
        },
        {
          role: "Lead Developer - Automation & UI/UX | Cimed",
          date: "January 2024 — March 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Creation of complex executive dashboards for real-time industrial data visualization.",
            "Development of an intuitive interface that reduced new operator training time by 50%."
          ]
        },
        {
          role: "Mid/Senior Full-Stack Developer | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Led the transition from legacy SPAs to modern micro-frontends in React/TypeScript.",
            "Bundle and rendering optimization (60% Lighthouse improvement) and 25% churn reduction.",
            "Internal Design System development for interface standardization across multiple SaaS products."
          ]
        },
        {
          role: "Full-Stack Architect | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Development of the core backend for a GIS ecosystem focused on real estate intelligence.",
            "Automated open data processing (OSINT) enriching the real estate database 24/7."
          ]
        }
      ],
      education: relevantEducationEn,
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "$ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
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
      subtitle: "Engenheiro de Software Java Pleno/Sênior & Arquiteto",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Engenheiro de Software Pleno/Sênior especializado no ecossistema Java e Spring Boot, com sólida expertise em arquitetura de sistemas de alta performance e processamento assíncrono. Forte atuação em ambientes de missão crítica, projetando microsserviços escaláveis, implementando Clean Architecture e garantindo alta cobertura de testes automatizados (TDD/BDD). Profundo conhecimento em otimização de bancos de dados relacionais (PostgreSQL) e integração robusta com plataformas cloud (AWS/Azure).",
      skills: [
        "<strong>Linguagens:</strong> Java (11 a 21), Kotlin, SQL.",
        "<strong>Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate.",
        "<strong>Arquitetura:</strong> Clean Architecture, SOLID, Microsserviços, Event-Driven Architecture (EDA).",
        "<strong>Dados & Messaging:</strong> PostgreSQL, Redis, Kafka, RabbitMQ, AWS SQS/SNS.",
        "<strong>Qualidade:</strong> JUnit 5, Mockito, Testcontainers, SonarQube, TDD."
      ],
      experience: [
        {
          role: "Pleno/Sênior Software Engineer (Java) | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Projetou e implementou microsserviços distribuídos utilizando Spring Boot 3 e Java 17+.",
            "Liderou o refactoring de sistemas legados para Clean Architecture, isolando lógicas de domínio.",
            "Otimizou rotinas assíncronas e queries SQL (PostgreSQL), reduzindo latências em 40%."
          ]
        },
        {
          role: "Arquiteto de Soluções & Backend Engineer | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Desenvolvimento do core backend de um ecossistema GIS voltado à inteligência imobiliária.",
            "Construção de APIs REST robustas integradas com processamento de dados geográficos (PostGIS)."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Mid/Senior Java Software Engineer & Architect",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Mid/Senior Software Engineer specialized in the Java and Spring Boot ecosystem, with solid expertise in high-performance system architecture and asynchronous processing. Strong background in mission-critical environments, designing scalable microservices, implementing Clean Architecture, and ensuring high automated test coverage (TDD/BDD). Deep knowledge in relational database optimization (PostgreSQL) and robust integration with cloud platforms (AWS/Azure).",
      skills: [
        "<strong>Languages:</strong> Java (11 to 21), Kotlin, SQL.",
        "<strong>Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate.",
        "<strong>Architecture:</strong> Clean Architecture, SOLID, Microservices, Event-Driven Architecture (EDA).",
        "<strong>Data & Messaging:</strong> PostgreSQL, Redis, Kafka, RabbitMQ, AWS SQS/SNS.",
        "<strong>Quality:</strong> JUnit 5, Mockito, Testcontainers, SonarQube, TDD."
      ],
      experience: [
        {
          role: "Back-End Engineer | PredictMed",
          date: "March 2026 — October 2026",
          link: "https://github.com/beehgiovani/predictmed",
          bullets: [
            "Architecture of asynchronous integration layers for B2B predictive health SaaS.",
            "Implementation of resilient and scalable data flows for real-time processing."
          ]
        },
        {
          role: "Mid/Senior Software Engineer (Java) | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Designed and implemented distributed microservices using Spring Boot 3 and Java 17+.",
            "Led legacy system refactoring to Clean Architecture, isolating domain logic.",
            "Optimized asynchronous routines and SQL queries (PostgreSQL), reducing latency by 40%."
          ]
        },
        {
          role: "Solutions Architect & Backend Engineer | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Development of the core backend for a GIS ecosystem focused on real estate intelligence.",
            "Construction of robust REST APIs integrated with geographic data processing (PostGIS)."
          ]
        }
      ],
      education: relevantEducationEn,
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "$ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
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
      subtitle: "Especialista Kotlin Pleno/Sênior & Mobile Backend",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Arquiteto Pleno/Sênior especializado em ecossistema Kotlin, com forte atuação em desenvolvimento Android Nativo e Backend escalável. Expert em Kotlin Coroutines, Flow e Ktor. Sólida experiência na construção de aplicações offline-first com alta complexidade de dados e interfaces reativas (Jetpack Compose). Especialista em Clean Architecture e SOLID, focado na entrega de software resiliente e de alta performance.",
      skills: [
        "<strong>Linguagens:</strong> Kotlin (Avançado), Java, SQL.",
        "<strong>Mobile Android:</strong> Jetpack Compose, ViewModels, Room DB, Retrofit, WorkManager, Hilt/Koin.",
        "<strong>Backend Kotlin:</strong> Spring Boot 3, Ktor, Hibernate, Exposed ORM.",
        "<strong>Arquitetura:</strong> Clean Architecture, MVVM, MVI, SOLID, Design Patterns.",
        "<strong>Infra:</strong> Docker, AWS, Firebase, CI/CD (GitHub Actions)."
      ],
      experience: [
        {
          role: "Kotlin Specialist | Lúmen Web",
          date: "2025 — Fevereiro 2026",
          link: "https://github.com/beehgiovani/lumen",
          bullets: [
            "Arquitetura de engine de processamento de áudio em tempo real usando Kotlin nativo.",
            "Integração de visão computacional com processamento assíncrono de alta performance."
          ]
        },
        {
          role: "Pleno/Sênior Software Engineer (Kotlin) | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Atuação como Lead Engineer implementando serviços resilientes com Spring Boot em Kotlin.",
            "Usufruindo da forte tipagem e segurança contra nulos (Null-safety) do Kotlin para reduzir bugs em produção.",
            "Design de arquitetura corporativa Clean e princípios SOLID focados no backend corporativo."
          ]
        },
        {
          role: "Arquiteto Full-Stack | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Integração de serviços móveis com backend geográfico distribuído.",
            "Processamento assíncrono de dados massivos para aplicações GIS de inteligência imobiliária."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponibilidade total",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Mid/Senior Kotlin & Mobile Backend Specialist",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Mid/Senior Architect specialized in the Kotlin ecosystem, with strong focus on Native Android development and scalable Backend. Expert in Kotlin Coroutines, Flow, and Ktor. Solid experience building offline-first applications with high data complexity and reactive interfaces (Jetpack Compose). Specialist in Clean Architecture and SOLID, focused on delivering resilient, high-performance software.",
      skills: [
        "<strong>Languages:</strong> Kotlin (Advanced), Java, SQL.",
        "<strong>Mobile Android:</strong> Jetpack Compose, ViewModels, Room DB, Retrofit, WorkManager, Hilt/Koin.",
        "<strong>Backend Kotlin:</strong> Spring Boot 3, Ktor, Hibernate, Exposed ORM.",
        "<strong>Architecture:</strong> Clean Architecture, MVVM, MVI, SOLID, Design Patterns.",
        "<strong>Infra:</strong> Docker, AWS, Firebase, CI/CD (GitHub Actions)."
      ],
      experience: [
        {
          role: "Kotlin Specialist | Lúmen Web",
          date: "2025 — February 2026",
          link: "https://github.com/beehgiovani/lumen",
          bullets: [
            "Architecture of a real-time audio processing engine using native Kotlin.",
            "Integration of computer vision with high-performance asynchronous processing."
          ]
        },
        {
          role: "Mid/Senior Software Engineer (Kotlin) | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Leading Engineer implementing resilient services with Spring Boot in Kotlin.",
            "Leveraging Kotlin's strong typing and null-safety to significantly reduce production bugs.",
            "Enterprise Clean Architecture design and SOLID principles focused on corporate backend."
          ]
        },
        {
          role: "Full-Stack Architect | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/GuarujaInterativo",
          bullets: [
            "Integration of mobile services with distributed geographic backends.",
            "Asynchronous processing of massive data for real estate intelligence GIS applications."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "$ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
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
      subtitle: "Especialista Python Pleno/Sênior, IA & Automação",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Arquiteto Python Pleno/Sênior com foco em Automação Extrema, Engenharia de Dados e Inteligência Artificial Aplicada. Expert na construção de scrapers de alta complexidade (Headless Browsing), modelos de Visão Computacional (Neural OCR) e pipelines de dados GIS massivos. Especialista em processamento assíncrono (Asyncio/Celery) e integração de APIs resilientes. Forte histórico na redução de custos operacionais (OPEX) através da automação inteligente.",
      skills: [
        "<strong>Linguagens:</strong> Python 3.12+ (Avançado), SQL, Bash.",
        "<strong>Data & IA:</strong> Pandas, NumPy, Scikit-learn, PyTorch, OpenCV, LangChain.",
        "<strong>Automação & Scraping:</strong> Playwright, Selenium, Scrapy, BeautifulSoup, validação de dados públicos.",
        "<strong>Backend & APIs:</strong> FastAPI, Flask, Pydantic, Webhooks.",
        "<strong>Infra:</strong> AWS (Lambda, S3), Docker, Linux Scripting, CI/CD."
      ],
      experience: [
        {
          role: "Lead Developer - Automação & Data Engineering | Cimed",
          date: "Janeiro 2024 — Março 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Arquitetura de pipeline de extração massiva de dados para forecasting industrial.",
            "Automatização total de processos logísticos, economizando centenas de horas mensais."
          ]
        },
        {
          role: "IA Engineer | OmniTrace",
          date: "2024 — Dezembro 2025",
          link: "https://github.com/beehgiovani/guaruja-email-monitor",
          bullets: [
            "Desenvolvimento de sistema de governança de IA focado em controle de custos e políticas.",
            "Criação de ferramentas CLI em Python para automação de workflow de desenvolvedores.",
            "Integração de LLMs (GPT/Gemini) para análise automatizada de logs e segurança."
          ]
        },
        {
          role: "MetroMar GIS Intelligence | Data Architect",
          date: "2023 — 2024",
          link: "https://github.com/beehgiovani/InteractiveMap",
          bullets: [
            "Desenvolvimento de arquitetura de dados para engine geográfica de alta performance.",
            "Normalização de datasets complexos para visualização em tempo real de margens metropolitanas."
          ]
        },
        {
          role: "Pleno/Sênior Python Engineer | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Liderança na transição de SPAs legadas para micro-frontends modernos em React/TypeScript.",
            "Otimização de bundle e renderização (60% melhoria no Lighthouse) e redução de 25% no churn.",
            "Desenvolvimento de Design System interno para padronização de interfaces em múltiplos produtos SaaS."
          ]
        },
        {
          role: "Arquiteto de Dados / GIS | GuaruGeo",
          date: "2023 — Presente",
          link: "https://github.com/beehgiovani/SpLitoralScraping",
          bullets: [
            "Desenvolvimento de scrapers governamentais para coleta de dados tributários e imobiliários.",
            "Criação da primeira visão unificada de dados do litoral paulista através de inteligência geográfica."
          ]
        }
      ],
      education: relevantEducationPt,
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "Mais benefícios",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponibilidade total",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Leitura Técnica e Documentação)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Mid/Senior Python Architect, AI & Automation Specialist",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Mid/Senior Python Architect focused on Extreme Automation, Geospatial Data Engineering, and Applied AI. Expert in building high-complexity scrapers, Computer Vision models (Neural OCR), and massive GIS pipelines. Specialist in Flask and FastAPI for internal tools, leveraging AI-accelerated workflows (LLMs/Copilots) to deliver production-ready solutions with high efficiency and absolute uptime.",
      skills: [
        "<strong>Languages:</strong> Python 3.12+ (Advanced), SQL, Bash.",
        "<strong>Geospatial:</strong> PostGIS, Vector Tiles, GeoPandas, Tippecanoe, Shapefiles.",
        "<strong>AI & Automation:</strong> Daily use of AI tools (LLMs) for workflow acceleration, Gemini Vision, PyTorch, Playwright.",
        "<strong>Backend & Cloud:</strong> Python (Flask/FastAPI Expert), AWS (S3, Lambda, EC2), SQL (Advanced PostgreSQL), CI/CD."
      ],
      experience: [
        {
          role: "Lead Developer - Automation & Data Engineering | Cimed",
          date: "January 2024 — March 2026",
          link: "https://github.com/beehgiovani/MarketPoster",
          bullets: [
            "Architecture of a massive data extraction pipeline for industrial forecasting.",
            "Full automation of logistics processes, saving hundreds of man-hours monthly."
          ]
        },
        {
          role: "AI Engineer | OmniTrace",
          date: "2024 — December 2025",
          link: "https://github.com/beehgiovani/guaruja-email-monitor",
          bullets: [
            "Development of an AI governance system focused on cost control and policies.",
            "Creation of Python-based CLI tools to automate developer workflows.",
            "LLM integration (GPT/Gemini) for automated log analysis and security."
          ]
        },
        {
          role: "MetroMar GIS Intelligence | Data Architect",
          date: "2023 — 2024",
          link: "https://github.com/beehgiovani/InteractiveMap",
          bullets: [
            "Data architecture development for high-performance geospatial engines.",
            "Normalization of complex datasets for real-time visualization of metropolitan margins."
          ]
        },
        {
          role: "Mid/Senior Python Engineer | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          link: "https://github.com/beehgiovani/PharmaFlow",
          bullets: [
            "Designing and maintaining internal tools using Flask to streamline engineering operations.",
            "Processing massive geospatial datasets using PostGIS and automated data pipelines.",
            "Integrated AI tools into the development workflow, increasing sprint velocity by 30%."
          ]
        },
        {
          role: "Data Architect / GIS | GuaruGeo",
          date: "2023 — Present",
          link: "https://github.com/beehgiovani/SpLitoralScraping",
          bullets: [
            "Development of government scrapers for tax and real estate data collection.",
            "Created the first unified data view of the São Paulo coast through geographic intelligence."
          ]
        }
      ],
      education: relevantEducationEn,
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "$ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
      salaryCLTSub: "Plus benefits",
      workModel: "Remote, Hybrid or On-site",
      mobility: "Fully available",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical Reading & Documentation)"
    }
  }
};
