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

export const resumeData = {
  javascript: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Arquiteto Full-Stack Pleno/Sênior (Node.js / React / TypeScript)",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Arquiteto Full-Stack Sênior especializado na construção de interfaces de alto impacto e backends escaláveis utilizando o ecossistema TypeScript. Expertise profunda em React 19, Next.js, Node.js e Tailwind CSS. Especialista em performance frontend (Vite, Web-vitals), Clean Architecture e sistemas offline-first. Forte histórico na entrega de MVPs rápidos e escaláveis, liderando a convergência entre Design System, UX e escalabilidade técnica para maximizar o ROI e a retenção de usuários.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Redux Toolkit, Framer Motion, Tailwind CSS, Sass.",
        "<strong>Backend:</strong> Node.js, NestJS, Express, Prisma ORM, Deno, Edge Functions.",
        "<strong>Mobile:</strong> React Native, Kotlin (Android Nativo), Jetpack Compose.",
        "<strong>Dados:</strong> PostgreSQL (PostGIS), MongoDB, Supabase, Firebase Realtime DB.",
        "<strong>Infra & DevOps:</strong> AWS, Vercel, Docker, CI/CD (GitHub Actions), Supabase Edge Functions."
      ],
      experience: [
        {
          role: "Senior Full-Stack Developer | PredictMed",
          date: "Março 2026 — Outubro 2026",
          bullets: [
            "Liderando o desenvolvimento de Edge Functions para processar IA em tempo real com baixa latência.",
            "Arquitetura de camadas de integração assíncrona para SaaS de saúde preditiva B2B.",
            "Refinei a arquitetura do front-end para ser modular, escalável e extremamente rápida."
          ]
        },
        {
          role: "Senior Full-Stack Developer | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          bullets: [
            "Liderança na transição de SPAs legadas para micro-frontends modernos em React/TypeScript.",
            "Otimização de bundle e renderização (60% melhoria no Lighthouse) e redução de 25% no churn.",
            "Desenvolvimento de Design System interno para padronização de interfaces em múltiplos produtos SaaS."
          ]
        },
        {
          role: "Lead Developer - Automação & UI/UX | Cimed",
          date: "Janeiro 2024 — Março 2026",
          bullets: [
            "Criação de dashboards executivos complexos para visualização de dados industriais em tempo real.",
            "Desenvolvimento de interface intuitiva que reduziu o tempo de treinamento de novos operadores em 50%."
          ]
        },
        {
          role: "Arquiteto Full-Stack | GuaruGeo",
          date: "2023 — Presente",
          bullets: [
            "Desenvolvimento do core backend de um ecossistema GIS voltado à inteligência imobiliária.",
            "Processamento automatizado de dados abertos (OSINT) enriquecendo o banco de dados imobiliário 24/7."
          ]
        }
      ],
      education: [
        "<strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> — FMU (Em curso)",
        "<strong>Especialista em Arquitetura Backend (Kotlin & Spring)</strong> — Alura",
        "<strong>Engenharia de Dados Avançada</strong> — Alura",
        "<strong>Modelagem SQL & DevOps</strong> — Alura"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Intermediário Técnico B1/B2)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Senior Full-Stack Architect (Node.js / React / TypeScript)",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Senior Full-Stack Architect specialized in building high-impact interfaces and scalable backends using the TypeScript ecosystem. Deep expertise in React 19, Next.js, Node.js, and Tailwind CSS. Specialist in frontend performance (Vite, Web-vitals), Clean Architecture, and offline-first systems. Proven track record in delivering fast and scalable MVPs, leading the convergence between Design System, UX, and technical scalability to maximize ROI and user retention.",
      skills: [
        "<strong>Frontend:</strong> React 19, TypeScript, Redux Toolkit, Framer Motion, Tailwind CSS, Sass.",
        "<strong>Backend:</strong> Node.js, NestJS, Express, Prisma ORM, Deno, Edge Functions.",
        "<strong>Mobile:</strong> React Native, Kotlin (Android Native), Jetpack Compose.",
        "<strong>Data:</strong> PostgreSQL (PostGIS), MongoDB, Supabase, Firebase Realtime DB.",
        "<strong>Infra & DevOps:</strong> AWS, Vercel, Docker, CI/CD (GitHub Actions), Supabase Edge Functions."
      ],
      experience: [
        {
          role: "Senior Full-Stack Developer | PredictMed",
          date: "March 2026 — October 2026",
          bullets: [
            "Leading the development of Edge Functions to process real-time AI with low latency.",
            "Architecting asynchronous integration layers for B2B predictive health SaaS.",
            "Refined frontend architecture to be modular, scalable, and extremely fast."
          ]
        },
        {
          role: "Senior Full-Stack Developer | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          bullets: [
            "Led the transition from legacy SPAs to modern micro-frontends in React/TypeScript.",
            "Bundle and rendering optimization (60% Lighthouse improvement) and 25% churn reduction.",
            "Internal Design System development for interface standardization across multiple SaaS products."
          ]
        },
        {
          role: "Lead Developer - Automation & UI/UX | Cimed",
          date: "January 2024 — March 2026",
          bullets: [
            "Creation of complex executive dashboards for real-time industrial data visualization.",
            "Development of an intuitive interface that reduced new operator training time by 50%."
          ]
        },
        {
          role: "Full-Stack Architect | GuaruGeo",
          date: "2023 — Present",
          bullets: [
            "Development of the core backend for a GIS ecosystem focused on real estate intelligence.",
            "Automated open data processing (OSINT) enriching the real estate database 24/7."
          ]
        }
      ],
      education: [
        "<strong>Systems Analysis and Development (ADS)</strong> — FMU (Ongoing)",
        "<strong>Backend Architecture Specialist (Kotlin & Spring)</strong> — Alura",
        "<strong>Advanced Data Engineering</strong> — Alura",
        "<strong>SQL Modeling & DevOps</strong> — Alura"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid, or On-site",
      mobility: "Fully available for travel",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical B1/B2)"
    }
  },
  java: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Engenheiro de Software Java Pleno/Sênior & Arquiteto",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Pleno/Senior Software Engineer especializado no ecossistema Java e Spring Boot, com sólida expertise na arquitetura de sistemas de alta performance e processamento assíncrono. Forte atuação em ambientes de missão crítica, desenhando microsserviços escaláveis, implementando Clean Architecture e garantindo altíssima cobertura de testes automatizados (TDD/BDD). Profundo conhecimento na otimização de bancos relacionais (PostgreSQL) e integração robusta com plataformas em nuvem (AWS/Azure).",
      skills: [
        "<strong>Linguagens:</strong> Java (11 ao 21), Kotlin, SQL.",
        "<strong>Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate.",
        "<strong>Arquitetura:</strong> Clean Architecture, SOLID, Microsserviços, Event-Driven Architecture (EDA).",
        "<strong>Dados & Mensageria:</strong> PostgreSQL, Redis, Kafka, RabbitMQ, AWS SQS/SNS.",
        "<strong>Qualidade:</strong> JUnit 5, Mockito, Testcontainers, SonarQube, TDD."
      ],
      experience: [
        {
          role: "Pleno/Senior Software Engineer (Java) | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          bullets: [
            "Projetou e implementou microsserviços distribuídos utilizando Spring Boot 3 e Java 17+.",
            "Liderou o refactoring de sistemas legados para Clean Architecture, isolando lógicas de domínio.",
            "Otimizou rotinas assíncronas e queries SQL (PostgreSQL), reduzindo latências em 40%."
          ]
        },
        {
          role: "Back-End Engineer | PredictMed",
          date: "Março 2026 — Outubro 2026",
          bullets: [
            "Arquitetura de camadas de integração assíncrona para SaaS de saúde preditiva B2B.",
            "Implementação de fluxos de dados resilientes e escaláveis para processamento em tempo real."
          ]
        },
        {
          role: "Arquiteto de Soluções & Backend Engineer | GuaruGeo",
          date: "2023 — Presente",
          bullets: [
            "Desenvolvimento do core backend de um ecossistema GIS voltado à inteligência imobiliária.",
            "Construção de APIs REST robustas integradas com processamento de dados geográficos (PostGIS)."
          ]
        }
      ],
      education: [
        "<strong>Análise e Desenvolvimento de Sistemas</strong> — FMU (Em curso)",
        "<strong>Especialista Spring Boot & Microsserviços</strong> — Alura (2025)",
        "<strong>Engenharia de Dados Avançada</strong> — Alura (2024)",
        "<strong>Arquitetura de Soluções Cloud</strong> — AWS Training"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Técnico B2)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Senior Java Software Engineer & Architect",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Senior Software Engineer specialized in the Java and Spring Boot ecosystem, with solid expertise in high-performance system architecture and asynchronous processing. Strong background in mission-critical environments, designing scalable microservices, implementing Clean Architecture, and ensuring high automated test coverage (TDD/BDD). Deep knowledge in relational database optimization (PostgreSQL) and robust integration with cloud platforms (AWS/Azure).",
      skills: [
        "<strong>Languages:</strong> Java (11 to 21), Kotlin, SQL.",
        "<strong>Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate.",
        "<strong>Architecture:</strong> Clean Architecture, SOLID, Microservices, Event-Driven Architecture (EDA).",
        "<strong>Data & Messaging:</strong> PostgreSQL, Redis, Kafka, RabbitMQ, AWS SQS/SNS.",
        "<strong>Quality:</strong> JUnit 5, Mockito, Testcontainers, SonarQube, TDD."
      ],
      experience: [
        {
          role: "Senior Software Engineer (Java) | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          bullets: [
            "Designed and implemented distributed microservices using Spring Boot 3 and Java 17+.",
            "Led legacy system refactoring to Clean Architecture, isolating domain logic.",
            "Optimized asynchronous routines and SQL queries (PostgreSQL), reducing latency by 40%."
          ]
        },
        {
          role: "Back-End Engineer | PredictMed",
          date: "March 2026 — October 2026",
          bullets: [
            "Architecture of asynchronous integration layers for B2B predictive health SaaS.",
            "Implementation of resilient and scalable data flows for real-time processing."
          ]
        },
        {
          role: "Solutions Architect & Backend Engineer | GuaruGeo",
          date: "2023 — Present",
          bullets: [
            "Development of the core backend for a GIS ecosystem focused on real estate intelligence.",
            "Construction of robust REST APIs integrated with geographic data processing (PostGIS)."
          ]
        }
      ],
      education: [
        "<strong>Systems Analysis and Development</strong> — FMU (Ongoing)",
        "<strong>Spring Boot & Microservices Specialist</strong> — Alura (2025)",
        "<strong>Advanced Data Engineering</strong> — Alura (2024)",
        "<strong>Cloud Solutions Architecture</strong> — AWS Training"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid or On-site",
      mobility: "Fully available for travel",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical B2)"
    }
  },
  kotlin: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Especialista Kotlin Pleno/Sênior & Mobile Backend",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Arquiteto Sênior especializado em ecossistema Kotlin, com forte atuação em desenvolvimento Android Nativo e Backend escalável. Expert em Kotlin Coroutines, Flow e Ktor. Sólida experiência na construção de aplicações offline-first com alta complexidade de dados e interfaces reativas (Jetpack Compose). Especialista em Clean Architecture e SOLID, focado na entrega de software resiliente e de alta performance.",
      skills: [
        "<strong>Linguagens:</strong> Kotlin (Avançado), Java, SQL.",
        "<strong>Mobile Android:</strong> Jetpack Compose, ViewModels, Room DB, Retrofit, WorkManager, Hilt/Koin.",
        "<strong>Backend Kotlin:</strong> Spring Boot 3, Ktor, Hibernate, Exposed ORM.",
        "<strong>Arquitetura:</strong> Clean Architecture, MVVM, MVI, SOLID, Design Patterns.",
        "<strong>Infra:</strong> Docker, AWS, Firebase, CI/CD (GitHub Actions)."
      ],
      experience: [
        {
          role: "Pleno/Senior Software Engineer (Kotlin) | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          bullets: [
            "Atuação como Lead Engineer implementando serviços resilientes com Spring Boot em Kotlin.",
            "Usufruindo da forte tipagem e segurança contra nulos (Null-safety) do Kotlin para reduzir bugs em produção.",
            "Design de arquitetura corporativa Clean e princípios SOLID focados no backend corporativo."
          ]
        },
        {
          role: "Kotlin Specialist | Lúmen Web",
          date: "2025 — Fevereiro 2026",
          bullets: [
            "Arquitetura de engine de processamento de áudio em tempo real usando Kotlin nativo.",
            "Integração de visão computacional com processamento assíncrono de alta performance."
          ]
        },
        {
          role: "Arquiteto Full-Stack | GuaruGeo",
          date: "2023 — Presente",
          bullets: [
            "Integração de serviços móveis com backend geográfico distribuído.",
            "Processamento assíncrono de dados massivos para aplicações GIS de inteligência imobiliária."
          ]
        }
      ],
      education: [
        "<strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> — FMU (Em curso)",
        "<strong>Arquitetura Back-End (Kotlin & Spring)</strong> — Alura (2025)",
        "<strong>Engenharia de Dados Avançada</strong> — Alura (2024)",
        "<strong>Desenvolvimento Mobile & Kotlin Avançado</strong> — Alura / JetBrains"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponibilidade total",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Técnico B1/B2)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Senior Kotlin & Mobile Backend Specialist",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Senior Architect specialized in the Kotlin ecosystem, with strong focus on Native Android development and scalable Backend. Expert in Kotlin Coroutines, Flow, and Ktor. Solid experience building offline-first applications with high data complexity and reactive interfaces (Jetpack Compose). Specialist in Clean Architecture and SOLID, focused on delivering resilient, high-performance software.",
      skills: [
        "<strong>Languages:</strong> Kotlin (Advanced), Java, SQL.",
        "<strong>Mobile Android:</strong> Jetpack Compose, ViewModels, Room DB, Retrofit, WorkManager, Hilt/Koin.",
        "<strong>Backend Kotlin:</strong> Spring Boot 3, Ktor, Hibernate, Exposed ORM.",
        "<strong>Architecture:</strong> Clean Architecture, MVVM, MVI, SOLID, Design Patterns.",
        "<strong>Infra:</strong> Docker, AWS, Firebase, CI/CD (GitHub Actions)."
      ],
      experience: [
        {
          role: "Senior Software Engineer (Kotlin) | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          bullets: [
            "Leading Engineer implementing resilient services with Spring Boot in Kotlin.",
            "Leveraging Kotlin's strong typing and null-safety to significantly reduce production bugs.",
            "Enterprise Clean Architecture design and SOLID principles focused on corporate backend."
          ]
        },
        {
          role: "Kotlin Specialist | Lúmen Web",
          date: "2025 — February 2026",
          bullets: [
            "Architecture of a real-time audio processing engine using native Kotlin.",
            "Integration of computer vision with high-performance asynchronous processing."
          ]
        },
        {
          role: "Full-Stack Architect | GuaruGeo",
          date: "2023 — Present",
          bullets: [
            "Integration of mobile services with distributed geographic backends.",
            "Asynchronous processing of massive data for real estate intelligence GIS applications."
          ]
        }
      ],
      education: [
        "<strong>Systems Analysis and Development (ADS)</strong> — FMU (Ongoing)",
        "<strong>Backend Architecture (Kotlin & Spring)</strong> — Alura (2025)",
        "<strong>Advanced Data Engineering</strong> — Alura (2024)",
        "<strong>Mobile Development & Advanced Kotlin</strong> — Alura / JetBrains"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid or On-site",
      mobility: "Fully available",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical B1/B2)"
    }
  },
  python: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Especialista Python Pleno/Sênior, IA & Automação",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Arquiteto Python Sênior com foco em Automação Extrema, Engenharia de Dados e Inteligência Artificial Aplicada. Expert na construção de scrapers de alta complexidade (Headless Browsing), modelos de Visão Computacional (Neural OCR) e pipelines de dados GIS massivos. Especialista em processamento assíncrono (Asyncio/Celery) e integração de APIs resilientes. Forte histórico na redução de custos operacionais (OPEX) através da automação inteligente.",
      skills: [
        "<strong>Linguagens:</strong> Python 3.12+ (Avançado), SQL, Bash.",
        "<strong>Data & IA:</strong> Pandas, NumPy, Scikit-learn, PyTorch (OCR Models), OpenCV, LangChain.",
        "<strong>Automação & Scraping:</strong> Playwright, Selenium, Scrapy, Tor Multiplexing, Bypass de Captchas.",
        "<strong>Backend & APIs:</strong> FastAPI, Flask, Pydantic, Webhooks.",
        "<strong>Infra:</strong> AWS (Lambda, S3), Docker, Linux Scripting, CI/CD."
      ],
      experience: [
        {
          role: "IA Engineer | OmniTrace",
          date: "2024 — Dezembro 2025",
          bullets: [
            "Desenvolvimento de sistema de governança de IA focado em controle de custos e políticas.",
            "Criação de ferramentas CLI em Python para automação de workflow de desenvolvedores.",
            "Integração de LLMs (GPT/Gemini) para análise automatizada de logs e segurança."
          ]
        },
        {
          role: "Senior Python Engineer | Soo Tech (Híbrido)",
          date: "Janeiro 2024 — Presente",
          bullets: [
            "Liderança na transição de SPAs legadas para micro-frontends modernos em React/TypeScript.",
            "Otimização de bundle e renderização (60% melhoria no Lighthouse) e redução de 25% no churn.",
            "Desenvolvimento de Design System interno para padronização de interfaces em múltiplos produtos SaaS."
          ]
        },
        {
          role: "Lead Developer - Automação & Data Engineering | Cimed",
          date: "Janeiro 2024 — Março 2026",
          bullets: [
            "Arquitetura de pipeline de extração massiva de dados para forecasting industrial.",
            "Automatização total de processos logísticos, economizando centenas de horas mensais."
          ]
        },
        {
          role: "Arquiteto de Dados / GIS | GuaruGeo",
          date: "2023 — Presente",
          bullets: [
            "Desenvolvimento de scrapers governamentais para coleta de dados tributários e imobiliários.",
            "Criação da primeira visão unificada de dados do litoral paulista através de inteligência geográfica."
          ]
        }
      ],
      education: [
        "<strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> — FMU (Em curso)",
        "<strong>Especialista Python Data Science</strong> — Alura",
        "<strong>Engenharia de Dados Avançada</strong> — Alura",
        "<strong>Deep Learning for Computer Vision</strong> — PyImageSearch"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponibilidade total",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Técnico B2)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Senior Python Architect, AI & Automation Specialist",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Senior Python Architect focused on Extreme Automation, Data Engineering, and Applied Artificial Intelligence. Expert in building high-complexity scrapers (Headless Browsing), Computer Vision models (Neural OCR), and massive GIS data pipelines. Specialist in asynchronous processing (Asyncio/Celery) and resilient API integration. Strong track record in reducing operational costs (OPEX) through intelligent automation.",
      skills: [
        "<strong>Languages:</strong> Python 3.12+ (Advanced), SQL, Bash.",
        "<strong>Data & AI:</strong> Pandas, NumPy, Scikit-learn, PyTorch (OCR Models), OpenCV, LangChain.",
        "<strong>Automation & Scraping:</strong> Playwright, Selenium, Scrapy, Tor Multiplexing, Captcha Bypass.",
        "<strong>Backend & APIs:</strong> FastAPI, Flask, Pydantic, Webhooks.",
        "<strong>Infra:</strong> AWS (Lambda, S3), Docker, Linux Scripting, CI/CD."
      ],
      experience: [
        {
          role: "AI Engineer | OmniTrace",
          date: "2024 — December 2025",
          bullets: [
            "Development of an AI governance system focused on cost control and policies.",
            "Creation of Python-based CLI tools to automate developer workflows.",
            "LLM integration (GPT/Gemini) for automated log analysis and security."
          ]
        },
        {
          role: "Senior Python Engineer | Soo Tech (Hybrid)",
          date: "January 2024 — Present",
          bullets: [
            "Technical leadership in the architecture of automation bots and critical data processing.",
            "40% reduction in processing time through asynchronous algorithms and parallelism."
          ]
        },
        {
          role: "Lead Developer - Automation & Data Engineering | Cimed",
          date: "January 2024 — March 2026",
          bullets: [
            "Architecture of a massive data extraction pipeline for industrial forecasting.",
            "Full automation of logistics processes, saving hundreds of man-hours monthly."
          ]
        },
        {
          role: "Data Architect / GIS | GuaruGeo",
          date: "2023 — Present",
          bullets: [
            "Development of government scrapers for tax and real estate data collection.",
            "Created the first unified data view of the São Paulo coast through geographic intelligence."
          ]
        }
      ],
      education: [
        "<strong>Systems Analysis and Development (ADS)</strong> — FMU (Ongoing)",
        "<strong>Python for Data Science Specialist</strong> — Alura",
        "<strong>Advanced Data Engineering</strong> — Alura",
        "<strong>Deep Learning for Computer Vision</strong> — PyImageSearch"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9.500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid or On-site",
      mobility: "Fully available",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Technical B2)"
    }
  }
}
