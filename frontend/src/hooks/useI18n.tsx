import { useState, useMemo, createContext, useContext, type ReactNode } from 'react'
import logoPredictMed from '../assets/logo_predictmed.png'
import logoGuarugeo from '../assets/logo_guarugeo.png'
import logoCertibot from '../assets/logo_certibot.png'
import logoPharmaFlow from '../assets/logo_pharmaflow.png'
import logoNidusCare from '../assets/logo_niduscare.png'

const translations = {
  en: {
    hero: {
      greeting: "Bruno Giovani",
      role: "Senior Software Engineer",
      years: "6+ Years of Scalable Engineering",
      tagline: "Architecting high-performance digital ecosystems. Specializing in Geo-Intelligence, Resilient Microservices, Autonomous AI Agents, and Native Architectures.",
      cta: "View Trajectory"
    },
    sections: {
      projects: "Strategic Portfolio",
      skills: "Technical Core",
      experience: "Professional Trajectory",
      certifications: "Credentials & Certifications",
      contact: "Connect"
    },
    experience: [
      { date: "Mar 2026 - Present", role: "Front-End Lead Developer | PredictMed", desc: "Leading the development of predictive health platforms with a focus on high-availability architecture, Supabase, and AI-driven automation." },
      { date: "Jan 2024 - Present", role: "Senior Software Engineer | Soo Tech", desc: "Technical leadership in JVM ecosystems, implementing resilient microservices with Spring Boot and Clean Architecture patterns." },
      { date: "2023 - Present", role: "Architect & Founder | GuaruGeo", desc: "Developing a high-precision GIS infrastructure integrating PostGIS and OSINT protocols for advanced real estate intelligence." }
    ],
    projects: {
      predictmed: {
        title: "PredictMed",
        logo: logoPredictMed,
        impact: "SaaS Ecosystem",
        desc: "Enterprise AI-driven inventory prediction. Leveraging Gemini Vision for sub-metric asset auditing and automated supply chain replenishment.",
        stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
        details: {
          innovation: "Proprietary predictive engine utilizing Gemini Vision to analyze physical inventory state and correlate with multi-variate market stressors.",
          strongPoints: ["98% Stockout Prevention Accuracy", "Automated Purchase Cycle Optimization", "Edge-native Serverless Infrastructure"],
          architecture: "Event-driven microservices architecture using Supabase Realtime and Deno Edge Functions for sub-second data processing."
        }
      },
      guarugeo: {
        title: "GuaruGeo (GuarujaInterativo)",
        logo: logoGuarugeo,
        impact: "Geo-Intelligence",
        desc: "High-fidelity GIS platform and CRM for real estate analytics. Integrating spatial indexing with automated OSINT data pipelines.",
        stack: ["PostGIS", "React 19", "Node.js", "JavaScript"],
        details: {
          innovation: "Full-stack GIS implementation achieving sub-metric precision through custom PostGIS spatial indexing and data enrichment pipelines.",
          strongPoints: ["Advanced Spatial Data Science", "Automated Information Synthesis", "High-Fidelity Real Estate Map"],
          architecture: "Robust Spatial DBMS layered with a high-concurrency NodeJS middleware and a specialized React MapGL frontend."
        }
      },
      cimed_experience: {
        title: "Cimed Experience",
        impact: "Gamified Ecosystem",
        desc: "Progressive Web App (PWA) transforming organic brand influence into tangible POS sales through an interactive Social Hub and Drive-to-Store missions.",
        stack: ["React", "Supabase", "PWA", "Firebase", "Local AI"],
        details: {
          innovation: "Native-like app experience orchestrating 'Drive-to-Store' global campaigns, powered by Claud.ia—a proprietary AI health consultant.",
          strongPoints: ["Real-time Gamification & Rankings", "Geo-Fencing Conversions", "AI Personal Health Assistant"],
          architecture: "PWA reacting to Firebase/Supabase real-time events, incorporating a massive administrative dashboard and custom OSINT curation."
        }
      },
      metromargeo: {
        title: "MetroMarGeo",
        impact: "Data Engineering",
        desc: "Autonomous Geo-Spatial data extraction engine. Targeting the São Paulo coast to fetch, normalize, and cross-reference WFS (GeoServer) parameters and municipal tax platforms.",
        stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
        details: {
          innovation: "Hybrid automation blending HTTP payload hijacking with local Machine Learning (OCR) to bypass complex municipal visual captchas seamlessly.",
          strongPoints: ["Visual Captcha Bypass via Neural Nets", "WFS Coordinate Mass Extraction", "Tax & Real Estate Cross-referencing"],
          architecture: "Decoupled Python scripts operating in a multi-phase extraction process, mapping from geographical layers down to individual taxpayer credentials."
        }
      },
      automacao_scraper: {
        title: "AutoScraper Core (UrbanIntelligence)",
        impact: "Civic Automation",
        desc: "Distributed bot orchestrator for massive municipal data extraction relying on Tor Node Multiplexing and custom PyTorch captcha models.",
        stack: ["Python", "PyTorch", "Tor", "Selenium Grid"],
        details: {
          innovation: "Bypasses complex governmental WAFs by isolating requests across dynamically rotated Tor execution threads and custom neural-network character recognition.",
          strongPoints: ["Tor Network IP Rotation", "Self-trained PyTorch OCR Model", "100k+ Records/Hr Parallelization"],
          architecture: "Master-worker node design where a Python orchestrator governs isolated Tor port configurations pushing tasks to resilient worker threads."
        }
      },
      niduscare: {
        title: "NidusCare",
        logo: logoNidusCare,
        impact: "Digital Health",
        desc: "Comprehensive health management native Android app. Focuses on caregivers/dependents with medication reminders, health agendas, and activity timelines.",
        stack: ["Kotlin", "Android SDK", "Room", "Firebase"],
        details: {
          innovation: "A fully localized health companion supporting offline-first synchronization to guarantee no critical medication reminder is missed.",
          strongPoints: ["Offline-first Persistence (Room)", "Complex Scheduling Alarms", "Caregiver Sharing Mechanics"],
          architecture: "MVVM Clean Architecture integrating Kotlin Coroutines & Flow for a buttery-smooth and responsive native UI."
        }
      },
      pharmaflow: {
        title: "PharmaFlow Ecosystem",
        logo: logoPharmaFlow,
        impact: "Supply Chain",
        desc: "Complete delivery solution for pharmacies. Merges a Native Android App with a React Web Platform emphasizing zero-latency dispatch updates.",
        stack: ["Kotlin", "Firebase Realtime", "React Web", "Vite"],
        details: {
          innovation: "Bridges mobile telemetry with a web operations dashboard, capturing driver coordinates and ensuring immediate pharmacy compliance.",
          strongPoints: ["Cross-platform Latency ≤200ms", "Live Fleet Monitoring", "Automated Inventory Deductions"],
          architecture: "Android mobile application syncing coordinate state with a Firebase real-time cluster, watched actively by a desktop React dashboard."
        }
      },
      certidoesapp: {
        title: "AutoJuris AI (Certidões App)",
        logo: logoCertibot,
        impact: "Legal Tech",
        desc: "Fully automated portal targeting bureaucratic certificate extraction. Navigates real estate and tax registries utilizing hybrid headless browsers and API exploitation.",
        stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
        details: {
          innovation: "Transforms manual, days-long bureaucratic retrievals into sub-minute API calls by reverse-engineering public endpoint infrastructures.",
          strongPoints: ["Headless Scraping Fallbacks", "Token State Preservation", "Async Job Queuing"],
          architecture: "Deno backend issuing secure headless sessions and parallel data scraping, delivering final PDFs back to a responsive frontend."
        }
      },
      marketposter: {
        title: "MarketPoster",
        impact: "Retail OS",
        desc: "Professional Android application for retail poster design and printing. Features offline support, auto-sync, and ML-powered background removal.",
        stack: ["Kotlin", "Android Native", "ML Kit", "OpenCV"],
        details: {
          innovation: "Places studio-grade design and automated printing capabilities directly in the hands of branch managers via mobile platforms.",
          strongPoints: ["On-device ML Background Removal", "Direct Printing Network Protocol", "Offline Sync Capabilities"],
          architecture: "Local-first Android application leveraging native graphic rendering layers and background worker sync queues."
        }
      },
      interactivemap: {
        title: "InteractiveMap - Jardim Acapulco",
        impact: "Map Interaction",
        desc: "Immersive localized real estate map built with React. Features dynamic lot visualization, advanced querying, and real-time administrative moderation.",
        stack: ["React", "TypeScript", "Vite", "Firebase"],
        details: {
          innovation: "Fluid mapping interface replacing bulky traditional static maps, offering instantaneous feedback on lot statuses.",
          strongPoints: ["Dynamic Layer Toggling", "Administrative Access Tiers", "Instant Client Deploy"],
          architecture: "React Single Page Application communicating through a highly optimized Firebase JSON payload, skipping heavy WFS servers."
        }
      },
      emailmonitor: {
        title: "Lead Webhook Monitor",
        impact: "Marketing Tech",
        desc: "A background pipeline capturing inbound email leads through IMAP parsing and immediately piping them into CRM Webhooks.",
        stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
        details: {
          innovation: "Zero-latency lead routing converting raw asynchronous email data into actionable CRM database inserts immediately.",
          strongPoints: ["Regex Email Parsing", "Continuous Background Watcher", "Supabase Row-Level Sync"],
          architecture: "Independent Python daemon monitoring email ports, formatting raw text, and triggering serverless Supabase inserts."
        }
      }
    },
    skills: {
      java: "Java/Kotlin (JVM, Clean Architecture, Spring Boot)",
      react: "React 19 / TypeScript (State Sync, PWA)",
      python: "Python (AI, PyTorch, OSINT, Scraping)",
      spring: "Data Engineering (PostgreSQL, PostGIS, Pandas)",
      cloud: "Edge/Serverless (Deno, Supabase, Firebase, AWS)",
      gis: "Geo-Intelligence (Spatial Indexing, GeoServer)",
      arch: "Systems Architecture (Microservices, Resiliency)",
      node: "Mobile Engineering (Android Native, Room, Flow)"
    },
    certs: [
      { name: "Back-End: API REST with Kotlin & Spring Boot (Alura)", date: "2026" },
      { name: "Data Engineering Foundations (Alura)", date: "2026" },
      { name: "Data Science: Python for Data (Alura)", date: "2026" },
      { name: "Programming Logic & JS Complete Track (Alura)", date: "2026" },
      { name: "Angular Expert Architect (Loiane Training)", date: "2026" },
      { name: "Power BI & Business English (Santander)", date: "2026" },
      { name: "Storytelling for Marketing (UChicago)", date: "2026" },
      { name: "Pharmacy | HealthTech Blueprint (B.S.)", date: "In Progress" }
    ],
    contact: {
      phone: "(13) 99124-8146",
      email: "brunogp.corretor@gmail.com",
      linkedin: "https://www.linkedin.com/in/beehgiovani/",
      github: "https://github.com/beehgiovani/"
    },
    dialog: {
      title: "Welcome.",
      message: "I architect scalable systems designed for absolute resilience. Would you like to view the professional portfolio in English or switch to Portuguese?",
      btnEn: "Stay in English",
      btnPt: "Mudar para Português"
    }
  },
  pt: {
    hero: {
      greeting: "Bruno Giovani",
      role: "Engenheiro de Software Sênior",
      years: "6+ Anos de Engenharia Escalável",
      tagline: "Arquitetando ecossistemas digitais de altíssima performance. Especialista em Geo-Inteligência, Microsserviços Resilientes, Agentes Autônomos de IA e Arquiteturas Nativas.",
      cta: "Ver Trajetória"
    },
    sections: {
      projects: "Portfólio Estratégico",
      skills: "Núcleo Técnico",
      experience: "Trajetória Profissional",
      certifications: "Credenciais e Cerificações",
      contact: "Conexão Profissional"
    },
    experience: [
      { date: "Mar 2026 - Presente", role: "Front-End Lead Developer | PredictMed", desc: "Liderando o desenvolvimento de plataformas de saúde preditiva com foco em arquitetura de alta disponibilidade, Supabase e automação via IA." },
      { date: "Jan 2024 - Presente", role: "Senior Software Engineer | Soo Tech", desc: "Liderança técnica em ecossistemas JVM, implementando microsserviços resilientes com Spring Boot e padrões de Clean Architecture." },
      { date: "2023 - Presente", role: "Arquiteto & Fundador | GuaruGeo", desc: "Desenvolvendo infraestrutura GIS de alta precisão integrando PostGIS e protocolos OSINT para inteligência imobiliária avançada." }
    ],
    projects: {
      predictmed: {
        title: "PredictMed",
        logo: logoPredictMed,
        impact: "Ecossistema SaaS",
        desc: "Predição de estoque empresarial via IA. Utilizando Gemini Vision para auditoria de ativos submétrica e reabastecimento automatizado na nuvem.",
        stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
        details: {
          innovation: "Motor preditivo proprietário utilizando Gemini Vision para analisar o estado físico dos estoques e correlacionar com indicadores de mercado.",
          strongPoints: ["98% de Precisão em Prevenção de Ruptura", "Otimização Automatizada do Ciclo de Compras", "Infraestrutura Serverless Edge-native"],
          architecture: "Arquitetura orientada a eventos usando Supabase Realtime e Deno Edge Functions para processamento de concorrência massiva."
        }
      },
      guarugeo: {
        title: "GuaruGeo (GuarujaInterativo)",
        logo: logoGuarugeo,
        impact: "Geo-Inteligência",
        desc: "Plataforma GIS de alta fidelidade e CRM para inteligência imobiliária. Integração de índices espaciais com extração autônoma OSINT.",
        stack: ["PostGIS", "React 19", "Node.js", "JavaScript"],
        details: {
          innovation: "GIS full-stack alcançando precisão geométrica submétrica através de otimização em PostGIS aliada a data science automatizada.",
          strongPoints: ["Data Science Espacial", "Síntese Automatizada de Informação", "Mapeamento Imobiliário Concorrente"],
          architecture: "DBMS espacial central sustentado por um middleware NodeJS servindo payloads vetoriais diretamente ao React MapGL."
        }
      },
      cimed_experience: {
        title: "Cimed Experience",
        impact: "Ecossistema Gamificado",
        desc: "Progressive Web App (PWA) de alto impacto transformando influência orgânica em vendas de PDV através de Missões Gamificadas (Drive-to-Store).",
        stack: ["React", "Supabase", "PWA", "Firebase", "Local AI"],
        details: {
          innovation: "Aplicativo web de comportamento nativo voltado a campanhas on-premise nas farmácias, guiado pela Inteligência Artificial Claud.ia.",
          strongPoints: ["Rankings & Social Hub Real-Time", "Estratégia Geo-Fencing de Conversões", "Assistência Clínica IA"],
          architecture: "Arquitetura PWA em cima de WebSockets via Firebase/Supabase acompanhado de um Dashboard Administrativo de Curadoria."
        }
      },
      metromargeo: {
        title: "MetroMarGeo",
        impact: "Engenharia de Dados",
        desc: "Robô geospacial autônomo. Mapeia a Metrópole e o Litoral paulista normalizando WFS e portais tributários para inteligência imobiliária de massa.",
        stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
        details: {
          innovation: "Automação híbrida que une análise de tráfego HTTP com Machine Learning local (OCR) para dilacerar captchas governamentais de imagem.",
          strongPoints: ["Bypass de Captchas via Redes Neurais", "Extração WFS em Larga Escala", "Cruzamento Fiscal Imobiliário"],
          architecture: "Workflows assíncronos isolados em Python, partindo da extração das poligonais até inserção refinada da base de proprietários no BD."
        }
      },
      automacao_scraper: {
        title: "AutoScraper Core (UrbanIntelligence)",
        impact: "Automação Extrema",
        desc: "Orquestrador distribuído de extração construído para navegar por WAFs complexos utilizando Modelos PyTorch customizados e rotatividade agressiva via Tor.",
        stack: ["Python", "PyTorch", "Tor", "Selenium Grid"],
        details: {
          innovation: "Infraestrutura virtualizada que impede bans de IP através de multiplexação do daemon Tor isolando threads e solucionando captchas via treinamento PyTorch local.",
          strongPoints: ["Geração Dinâmica de Portas Tor", "Treinamento Nativo PyTorch (OCR)", "100k+ Registros por hora"],
          architecture: "Nó Orquestrador central que cria threads autônomas conectadas aos nodes do Tor, permitindo raspagem invisível governamental."
        }
      },
      niduscare: {
        title: "NidusCare",
        logo: logoNidusCare,
        impact: "Saúde Digital Nativa",
        desc: "Ecossistema Android Nativo dedicado à gestão geriátrica e de cuidados. Fornece timeline vital, agendamento de clínica e lembretes de medicamento offline.",
        stack: ["Kotlin", "Android SDK", "Room", "Firebase"],
        details: {
          innovation: "Companheiro de saúde de alta resiliência que funciona no padrão 'Offline-First', assegurando que alarmes críticos de medicações nunca falhem mesmo sem rede.",
          strongPoints: ["Persistência Offline Local (Room)", "Alarm Manager Complexo", "Sincronia Firebase Multi-Device"],
          architecture: "Arquitetura Clean MVVM combinada com Kotlin Flow e Coroutines, assegurando transições macias e estado reativo da interface celular."
        }
      },
      pharmaflow: {
        title: "PharmaFlow Ecosystem",
        logo: logoPharmaFlow,
        impact: "Cadeia de Suprimentos",
        desc: "Aglutinador logístico unindo um App Android de Motoboys com um Painel Administrativo React focando nas entregas ponta-a-ponta.",
        stack: ["Kotlin", "Firebase Realtime", "React Web", "Vite"],
        details: {
          innovation: "Motor síncrono que transfere as coordenadas do dispositivo mobile em tempo quase-real (WebSocket) visualizadas numa dashboard administrativa.",
          strongPoints: ["Update Latência Menor de 200ms", "Telemetria Vital de Frotas", "Baixa de Estoque Realtime"],
          architecture: "App Nativo rastreando GPS assíncrono emitindo pulsos a um Cluster Firebase Realtime consumido pela central de comando React."
        }
      },
      certidoesapp: {
        title: "AutoJuris AI (Certidões App)",
        logo: logoCertibot,
        impact: "Robótica Jurídica",
        desc: "Automação ponta-a-ponta focada em varrer portais judiciais e extrair certidões tributárias reduzindo fluxos de cartórios para meros segundos.",
        stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
        details: {
          innovation: "Reverte engessamentos burocráticos de dias por chamadas puras de interface extraindo bases judiciais sem intervenção manual.",
          strongPoints: ["Headless Browser Assíncrono", "Gestão Inteligente de Status de Sessão", "Fila Robusta de Tarefas"],
          architecture: "Núcleos em Deno / NodeJS ativando seções mascaradas do Puppeteer empurrando os dados estruturados numa resposta final à Nuvem."
        }
      },
      marketposter: {
        title: "MarketPoster",
        impact: "Varejo Operacional",
        desc: "Aplicativo Android corporativo de Design em PDV. Remove backgrounds com Machine Learning em C e envia encartes comerciais direto à print network.",
        stack: ["Kotlin", "Android Nativo", "ML Kit", "OpenCV"],
        details: {
          innovation: "Confere poderes de design profissional aos gerentes de farmácias com edição e despache à impressora on-device com aprendizado de máquina.",
          strongPoints: ["Remoção de Fundo por IA Offline", "Comunicação Broadcast Printeira", "Modo Avião 100% Funcional"],
          architecture: "Android SDK limpo manipulando Canvas diretamente, auxiliado por SDKs robustos de ML integrados a workers de processamento offline."
        }
      },
      interactivemap: {
        title: "InteractiveMap - Jardim Acapulco",
        impact: "Interação Espacial",
        desc: "Frontend React Vite consumindo metadados imobiliários. Projeta em tela uma UI avançada de lotes condominiais permitindo pesquisa rápida.",
        stack: ["React", "TypeScript", "Vite", "Firebase"],
        details: {
          innovation: "Substituição fluida do geoprocessamento lento convencional por state-management afiado, injetando filtros live no portfólio físico.",
          strongPoints: ["Toggle Inteligente de Lotes", "Painel Administrativo Embutido", "Responsividade Absoluta"],
          architecture: "Inteiramente focado num pipeline CSR (Client-Side Rendering) consumindo dumps de estado NoSQL sem atrasos de requisições POST."
        }
      },
      emailmonitor: {
        title: "Lead Webhook Monitor",
        impact: "Aquisição Automática",
        desc: "Módulo invisível interceptor de e-mails em IMAP que varre, lê via regexes pesados e fomenta o CRM imobiliário automaticamente.",
        stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
        details: {
          innovation: "Zero intervenção humana na captação inicial: o código extrai nomes e números da formatação dos portais e injeta imediatamente no webhook/CRM.",
          strongPoints: ["Extração Limpa Regex", "Daemon Infinito Estável", "Postagem Supabase Nativa"],
          architecture: "Código procedural Python atachado como serviço Linux mantendo loop eterno sobre protocolo de rede e alimentando buckets Supabase."
        }
      }
    },
    skills: {
      java: "Java/Kotlin (Máquina Virtual JVM, Clean Architecture, Spring Boot)",
      react: "React 19 / TypeScript (Gerenciamento de Estado Avançado, PWA)",
      python: "Python Extremo (Machine Learning, PyTorch, Modelos OCR, Automação)",
      spring: "Engenharia de Dados (PostgreSQL DBMS, PostGIS Spatial, Pandas)",
      cloud: "Cloud & Edge (Deno Edge Functions, Supabase Realtime, AWS, Firebase)",
      gis: "Geo-Inteligência (GeoServer WFS, QGis Integrado)",
      arch: "Design System & Micro-arquiteturas (Resiliência, Escalabilidade)",
      node: "Engenharia Mobile Nativa (Arquiteturas Android, Room DB, Kotlin Flow)"
    },
    certs: [
      { name: "Back-End: API REST com Kotlin & Spring Boot (Alura)", date: "2026" },
      { name: "Sistemas em Escala: Engenharia de Dados (Alura)", date: "2026" },
      { name: "Python para Exploração de Dados (Alura)", date: "2026" },
      { name: "JavaScript / Lógica Avançada (Alura)", date: "2026" },
      { name: "Especialista Arquiteto em Angular (Loiane Training)", date: "2026" },
      { name: "Power BI & Business English Aplicado (Santander)", date: "2026" },
      { name: "Marketing e Storytelling Avançado (UChicago)", date: "2026" },
      { name: "Bacharelado Farmácia | Fundamentos HealthTech", date: "Em Andamento" }
    ],
    contact: {
      phone: "(13) 99124-8146",
      email: "brunogp.corretor@gmail.com",
      linkedin: "https://www.linkedin.com/in/beehgiovani/",
      github: "https://github.com/beehgiovani/"
    },
    dialog: {
      title: "Bem-vindo.",
      message: "Construo plataformas pautadas em escala, segurança e resiliência máxima. Deseja visualizar o portfólio executivo em Inglês ou mudar para Português?",
      btnEn: "Manter Inglês",
      btnPt: "Mudar para Português"
    }
  }
};

type Language = 'en' | 'pt';

export interface Project {
  title: string;
  logo?: string;
  impact: string;
  desc: string;
  stack: string[];
  details?: {
    innovation: string;
    strongPoints: string[];
    architecture: string;
  };
}

interface I18nContextProps {
  t: any; // Mantendo dynamic any por conta da arquitetura atual multi-camadas
  lang: Language;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const t = useMemo(() => translations[lang], [lang]);

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
