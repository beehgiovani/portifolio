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
      summary: "Sou um desenvolvedor apaixonado por construir sistemas que realmente resolvem problemas. Com foco no ecossistema JavaScript, especializei-me em criar aplicações que aguentam o tranco, usando Node.js no backend e React no front. Gosto de colocar a mão na massa em arquiteturas modernas, automações complexas e pipelines de dados que precisam de performance de verdade. Meu objetivo é sempre entregar código que seja fácil de manter e que traga resultado real para o negócio.",
      skills: [
        "<strong>Arquitetura & Backend:</strong> Especialista em Node.js e Deno, construindo APIs resilientes com NestJS e GraphQL.",
        "<strong>Interfaces Modernas:</strong> Criação de UIs fluidas com React 19 e Next.js, focando sempre na experiência do usuário e performance.",
        "<strong>Automação & Cloud:</strong> Experiência sólida em Web Scrapers avançados, Serverless (AWS Lambda) e infraestrutura ágil.",
        "<strong>Dados:</strong> Modelagem e otimização de bancos PostgreSQL (PostGIS), MongoDB e pipelines de ETL.",
        "<strong>Metodologia:</strong> Defensor de Clean Architecture e desenvolvimento orientado a eventos."
      ],
      experience: [
        {
          role: "Full-Stack Developer Sênior | PredictMed",
          date: "Março 2026 — Presente",
          bullets: [
            "Liderando o desenvolvimento de funções de borda (Edge) para processar IA em tempo real.",
            "Melhorei a velocidade de resposta do sistema integrando Supabase para fluxos de dados vivos.",
            "Refinei a arquitetura do front-end para ser modular e extremamente rápida."
          ]
        },
        {
          role: "Especialista em Automação | AutoJuris AI",
          date: "2024 — Presente",
          bullets: [
            "Construí um sistema robusto de captura de dados jurídicos que processa milhares de requisições por minuto.",
            "Reduzi drasticamente o tempo de busca de dados usando filas inteligentes com Redis."
          ]
        }
      ],
      education: [
        "<strong>Análise e Desenvolvimento de Sistemas</strong> — FMU (Em curso)",
        "<strong>Especialista em Arquitetura Backend</strong> — Alura",
        "<strong>Engenharia de Dados</strong> — Alura"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto, Híbrido ou Presencial",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (Intermediário Avançado - B2)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Full-Stack Architect Mid/Senior (Node.js / React / TypeScript)",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "I'm a developer who truly enjoys building systems that solve real-world challenges. My expertise lies in the JavaScript ecosystem, where I focus on creating high-performance applications using Node.js and React. I have a deep interest in modern architectures, complex automations, and data pipelines that require serious reliability. My goal is always to deliver clean, maintainable code that drives actual business value.",
      skills: [
        "<strong>Architecture & Backend:</strong> Expert in Node.js and Deno, building resilient APIs with NestJS and GraphQL.",
        "<strong>Modern Interfaces:</strong> Crafting fluid UIs with React 19 and Next.js, always prioritizing user experience and speed.",
        "<strong>Automation & Cloud:</strong> Solid experience in advanced Web Scrapers, Serverless (AWS Lambda), and agile infrastructure.",
        "<strong>Data:</strong> Modeling and optimizing PostgreSQL (PostGIS) and MongoDB databases, plus ETL pipelines.",
        "<strong>Methodology:</strong> Strong advocate for Clean Architecture and Event-Driven development."
      ],
      experience: [
        {
          role: "Senior Full-Stack Developer | PredictMed",
          date: "March 2026 — Present",
          bullets: [
            "Leading the development of Edge functions to process real-time AI inference.",
            "Significantly improved system response times by integrating Supabase for live data streams.",
            "Refined the frontend architecture to be modular, scalable, and extremely fast."
          ]
        },
        {
          role: "Automation Specialist | AutoJuris AI",
          date: "2024 — Present",
          bullets: [
            "Built a robust legal data capture system capable of processing thousands of requests per minute.",
            "Drastically reduced data retrieval times using smart queuing with Redis."
          ]
        }
      ],
      education: [
        "<strong>Systems Analysis and Development</strong> — FMU (Ongoing)",
        "<strong>Backend Architecture Specialist</strong> — Alura",
        "<strong>Data Engineering</strong> — Alura"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9,500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote, Hybrid, or On-site",
      mobility: "Fully available for travel",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (Intermediate Advanced - B2)"
    }
  },
  java: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Engenheiro de Software Java Pleno/Sênior",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Trabalho com Java há anos e sou fascinado por criar sistemas que não param. Meu foco é o ecossistema Spring, onde gosto de desenhar arquiteturas de microsserviços que sejam realmente escaláveis. Acredito muito em Clean Architecture e SOLID para garantir que o projeto não vire um 'legado difícil' em pouco tempo. Tenho experiência em ambientes onde cada milissegundo conta, otimizando desde queries no banco até o processamento de mensagens assíncronas.",
      skills: [
        "<strong>Backend Core:</strong> Domínio de Java (11-21) e Spring Boot 3, com foco em segurança e performance.",
        "<strong>Arquitetura:</strong> Experiência real com Microsserviços distribuídos e Event-Driven Architecture.",
        "<strong>Dados & Mensageria:</strong> Otimização de PostgreSQL e uso estratégico de Redis, Kafka e RabbitMQ.",
        "<strong>Infraestrutura:</strong> Docker, Kubernetes e CI/CD em ambientes AWS.",
        "<strong>Qualidade:</strong> Testes rigorosos com JUnit 5 e Mockito, seguindo princípios de TDD."
      ],
      experience: [
        {
          role: "Engenheiro de Software Sênior | Soo Tech",
          date: "Janeiro 2024 — Presente",
          bullets: [
            "Liderei a transição de um sistema gigante para microsserviços modulares em Java 17.",
            "Reduzi o custo de servidor otimizando queries complexas e fluxos de dados.",
            "Mentoria técnica para o time, focando em boas práticas e código limpo."
          ]
        }
      ],
      education: [
        "<strong>Sistemas de Informação</strong> — FMU",
        "<strong>Especialista Spring Boot</strong> — Alura",
        "<strong>Arquitetura de Soluções Cloud</strong> — AWS Training"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto ou Híbrido",
      mobility: "Disponível para viagens",
      nativeLang: "Português (Nativo)",
      secondLang: "Inglês (B2)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Mid/Senior Java Software Engineer",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "I've been working with Java for years, and I'm fascinated by building robust, high-availability systems. My focus is the Spring ecosystem, where I enjoy designing microservices architectures that are truly scalable. I'm a strong believer in Clean Architecture and SOLID to ensure projects remain maintainable over the long term. I have experience in environments where every millisecond matters, from database query tuning to asynchronous message processing.",
      skills: [
        "<strong>Backend Core:</strong> Mastery of Java (11-21) and Spring Boot 3, focusing on security and high performance.",
        "<strong>Architecture:</strong> Real-world experience with distributed Microservices and Event-Driven Architecture.",
        "<strong>Data & Messaging:</strong> PostgreSQL optimization and strategic use of Redis, Kafka, and RabbitMQ.",
        "<strong>Infrastructure:</strong> Docker, Kubernetes, and CI/CD pipelines in AWS environments.",
        "<strong>Quality:</strong> Rigorous testing with JUnit 5 and Mockito, following TDD principles."
      ],
      experience: [
        {
          role: "Senior Software Engineer | Soo Tech",
          date: "January 2024 — Present",
          bullets: [
            "Led the transition of a massive legacy system to modular microservices using Java 17.",
            "Reduced server costs by optimizing complex queries and data flows.",
            "Provided technical mentorship to the team, focusing on best practices and clean code."
          ]
        }
      ],
      education: [
        "<strong>Information Systems</strong> — FMU",
        "<strong>Spring Boot Specialist</strong> — Alura",
        "<strong>Cloud Solutions Architecture</strong> — AWS Training"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9,500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote or Hybrid",
      mobility: "Fully available for travel",
      nativeLang: "Portuguese (Native)",
      secondLang: "English (B2)"
    }
  },
  kotlin: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Especialista Kotlin Pleno/Sênior & Mobile Backend",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Sou entusiasta da modernidade do Kotlin. Uso a linguagem para criar backends elegantes e performáticos, aproveitando ao máximo as Coroutines para concorrência eficiente. Tenho um pé no mundo Mobile, entendendo como o backend precisa se comportar para servir apps de alto nível. Busco sempre o equilíbrio entre produtividade e código tipado de forma inteligente.",
      skills: [
        "<strong>Kotlin Core:</strong> Especialista em Kotlin para Backend e Mobile, usando Coroutines e Flows.",
        "<strong>Frameworks:</strong> Experiência avançada com Spring Boot (Kotlin) e Ktor.",
        "<strong>Android Ecosystem:</strong> Conhecimento de Jetpack Compose e arquitetura MVVM.",
        "<strong>Serverless Kotlin:</strong> Deploy de funções Kotlin em AWS Lambda e Google Cloud."
      ],
      experience: [
        {
          role: "Kotlin Specialist | Lúmen Web",
          date: "2025 — Presente",
          bullets: [
            "Arquitetura de engine de processamento de áudio em tempo real usando Kotlin nativo.",
            "Integração de visão computacional com processamento assíncrono de alta performance."
          ]
        }
      ],
      education: [
        "<strong>Desenvolvimento Mobile</strong> — Alura",
        "<strong>Kotlin Avançado</strong> — JetBrains Academy"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto",
      mobility: "Disponibilidade total",
      nativeLang: "Português",
      secondLang: "Inglês (Avançado)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Mid/Senior Kotlin & Mobile Backend Specialist",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "I'm a big fan of Kotlin's modern approach. I use it to build elegant, high-performance backends, making the most of Coroutines for efficient concurrency. With experience in the Mobile world, I understand exactly how a backend needs to behave to serve high-quality apps. I always aim for the perfect balance between developer productivity and smart, type-safe code.",
      skills: [
        "<strong>Kotlin Core:</strong> Specialist in Kotlin for Backend and Mobile, using Coroutines and Flows.",
        "<strong>Frameworks:</strong> Advanced experience with Spring Boot (Kotlin) and Ktor.",
        "<strong>Android Ecosystem:</strong> Knowledge of Jetpack Compose and MVVM architecture.",
        "<strong>Serverless Kotlin:</strong> Deploying Kotlin functions on AWS Lambda and Google Cloud."
      ],
      experience: [
        {
          role: "Kotlin Specialist | Lúmen Web",
          date: "2025 — Present",
          bullets: [
            "Architected a real-time audio processing engine using native Kotlin.",
            "Integrated computer vision with high-performance asynchronous processing."
          ]
        }
      ],
      education: [
        "<strong>Mobile Development</strong> — Alura",
        "<strong>Advanced Kotlin</strong> — JetBrains Academy"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9,500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote",
      mobility: "Fully available",
      nativeLang: "Portuguese",
      secondLang: "English (Advanced)"
    }
  },
  python: {
    pt: {
      name: "Bruno Giovani Pereira",
      subtitle: "Especialista Python Pleno/Sênior, IA & Automação",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Python é minha ferramenta favorita quando o assunto é inteligência e extração de dados. Tenho vasta experiência criando automações que 'pensam', integrando LLMs (como GPT e Gemini) em fluxos de trabalho reais. Sou especialista em Web Scraping em larga escala, lidando com captchas, proxies e sites complexos. Se o problema envolve processar montanhas de dados ou automatizar o impossível, o Python é onde eu me destaco.",
      skills: [
        "<strong>Core Python:</strong> Python 3.12+, Pydantic, Fast API e automações de alto nível.",
        "<strong>IA & LLMs:</strong> Integração de LangChain, OpenAI, Google Gemini e modelos locais.",
        "<strong>Web Scraping:</strong> Selenium, Playwright, Scrapy e técnicas avançadas de bypass.",
        "<strong>Dados:</strong> Pandas, NumPy e pipelines de processamento para análise imobiliária/jurídica."
      ],
      experience: [
        {
          role: "IA Engineer | OmniTrace",
          date: "2024 — Presente",
          bullets: [
            "Desenvolvimento de sistema de governança de IA focado em controle de custos e políticas.",
            "Criação de ferramentas CLI em Python para automação de workflow de desenvolvedores."
          ]
        }
      ],
      education: [
        "<strong>Engenharia de Dados</strong> — Alura",
        "<strong>Python para Data Science</strong> — FMU"
      ],
      salaryB2B: "R$ 10.000,00 - R$ 12.000,00 | $ 4,000 - $ 6,500 USD",
      salaryB2BSub: "(R$ 60,00 - R$ 75,00/h | $ 25.00 - $ 45.00/h)",
      salaryCLT: "R$ 8.000,00 - R$ 9.500,00",
      salaryCLTSub: "(Mais benefícios)",
      workModel: "Remoto ou Híbrido",
      mobility: "Disponibilidade total",
      nativeLang: "Português",
      secondLang: "Inglês (B2)"
    },
    en: {
      name: "Bruno Giovani Pereira",
      subtitle: "Mid/Senior Python, AI & Automation Specialist",
      contactInfo: "Guarujá, SP | brunoadmin@guarujainterativo.com.br | +55 (13) 99205-8836",
      linkedin: "https://linkedin.com/in/beehgiovani",
      github: "https://github.com/beehgiovani",
      summary: "Python is my go-to tool when it comes to intelligence and data extraction. I have extensive experience building automations that 'think', integrating LLMs (like GPT and Gemini) into real-world workflows. I'm a specialist in large-scale Web Scraping, handling captchas, proxies, and complex websites. If the problem involves processing mountains of data or automating the impossible, Python is where I shine.",
      skills: [
        "<strong>Core Python:</strong> Python 3.12+, Pydantic, FastAPI, and high-level automations.",
        "<strong>AI & LLMs:</strong> Integrating LangChain, OpenAI, Google Gemini, and local models.",
        "<strong>Web Scraping:</strong> Selenium, Playwright, Scrapy, and advanced bypass techniques.",
        "<strong>Data:</strong> Pandas, NumPy, and processing pipelines for real estate/legal analysis."
      ],
      experience: [
        {
          role: "AI Engineer | OmniTrace",
          date: "2024 — Present",
          bullets: [
            "Developed an AI governance system focused on cost control and policy enforcement.",
            "Created Python-based CLI tools to automate developer workflows."
          ]
        }
      ],
      education: [
        "<strong>Data Engineering</strong> — Alura",
        "<strong>Python for Data Science</strong> — FMU"
      ],
      salaryB2B: "$ 4,000 - $ 6,500 USD | R$ 10,000 - R$ 12,000",
      salaryB2BSub: "($ 25.00 - $ 45.00/h | R$ 60.00 - R$ 75.00/h)",
      salaryCLT: "R$ 8,000.00 - R$ 9,500.00",
      salaryCLTSub: "(Plus benefits)",
      workModel: "Remote or Hybrid",
      mobility: "Fully available",
      nativeLang: "Portuguese",
      secondLang: "English (B2)"
    }
  }
}
