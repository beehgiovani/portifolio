/* eslint-disable react-refresh/only-export-components */
import { useState, useMemo, createContext, useContext, type ReactNode } from 'react'
import logoPredictMed from '../assets/hero.png'
import logoGuarugeo from '../assets/logo_guarugeo.png'
import logoCertibot from '../assets/logo_certibot.png'
import logoPharmaFlow from '../assets/logo_pharmaflow.png'
import logoNidusCare from '../assets/logo_niduscare.png'
import logoCimed from '../assets/logo_cimed.png'
import logoAcapulco from '../assets/logo_acapulco.png'
import logoMetromargeo from '../assets/logo_metromargeo.png'
import logoAutoScraper from '../assets/logo_autoscraper.png'
import logoMarketPoster from '../assets/logo_marketposter.png'
import logoEmailMonitor from '../assets/logo_emailmonitor.png'

const translations = {
  en: {
    hero: {
      greeting: "Bruno Giovani",
      role: "Pleno/Senior Software Engineer",
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
      { date: "Jan 2024 - Present", role: "Pleno/Senior Software Engineer | Soo Tech", desc: "Technical leadership in JVM ecosystems, implementing resilient microservices with Spring Boot and Clean Architecture patterns." },
      { date: "2023 - Present", role: "Architect & Founder | GuaruGeo", desc: "Developing a high-precision GIS infrastructure integrating PostGIS and OSINT protocols for advanced real estate intelligence." }
    ],
    projects: {
      predictmed: {
        title: "PredictMed",
        logo: logoPredictMed,
        impact: "SaaS Ecosystem",
        desc: "Enterprise AI-driven inventory prediction platform designed for healthcare. Leveraging Gemini Vision for sub-metric physical asset auditing, it correlates visual data with multi-variate market stressors to provide automated, highly accurate supply chain replenishment, effectively mitigating the risk of critical medication stockouts.",
        stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
        details: {
          innovation: "Proprietary predictive engine utilizing Gemini Vision to analyze physical inventory state and correlate with multi-variate market stressors.",
          strongPoints: ["98% Stockout Prevention Accuracy", "Automated Purchase Cycle Optimization", "Edge-native Serverless Infrastructure"],
          architecture: "Event-driven microservices architecture using Supabase Realtime and Deno Edge Functions for sub-second data processing.",
          businessImpact: "Reduced manual inventory auditing time by 85% and significantly lowered risk of medication stockouts.",
          technicalChallenges: "Orchestrating real-time vision AI inferences while maintaining strict HIPAA-like compliance and sub-second UI updates."
        },
        codeLanguage: "typescript",
        codeSnippet: `import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { GoogleGenerativeAI } from "npm:@google/genai"

serve(async (req) => {
  const { imageBase64, facilityId } = await req.json()
  const ai = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY"))
  
  const model = ai.getGenerativeModel({ model: "gemini-1.5-pro-vision" })
  const prompt = "Analyze this medical inventory shelf. Count the exact number of critical vials and identify impending stockouts based on visual density."
  
  const result = await model.generateContent([
    prompt,
    { inlineData: { data: imageBase64, mimeType: "image/jpeg" } }
  ])
  
  const predictedDeficit = result.response.text()
  
  if (predictedDeficit.includes("STOCKOUT_RISK_HIGH")) {
     await triggerAutomatedPurchaseOrder(facilityId, predictedDeficit)
  }
  
  return new Response(JSON.stringify({ status: 'analyzed', deficit: predictedDeficit }))
})`
      },
      guarugeo: {
        title: "GuaruGeo & Interactive Map",
        logo: logoGuarugeo,
        impact: "Geo-Intelligence",
        desc: "High-fidelity Geographic Information System (GIS) and specialized CRM for advanced real estate analytics. It integrates complex spatial indexing via PostGIS with automated OSINT data pipelines, delivering sub-metric precision mapping. This unified platform accelerates property and tax data querying by 10x, providing a single pane of glass for municipal real estate intelligence.",
        stack: ["PostGIS", "React 19", "Node.js", "JavaScript"],
        details: {
          innovation: "Full-stack GIS implementation achieving sub-metric precision through custom PostGIS spatial indexing and data enrichment pipelines.",
          strongPoints: ["Advanced Spatial Data Science", "Automated Information Synthesis", "High-Fidelity Real Estate Map"],
          architecture: "Robust Spatial DBMS layered with a high-concurrency NodeJS middleware and a specialized React MapGL frontend.",
          businessImpact: "Enabled real estate agencies to query properties and tax data 10x faster, unifying fragmented city data into a single pane of glass.",
          technicalChallenges: "Optimizing the rendering of 18k+ highly detailed polygons on the browser without freezing the main thread."
        },
        codeLanguage: "javascript",
        codeSnippet: `// Spatial High-Concurrency Intersect Query Engine
async function getPropertiesInViewport(bounds) {
  const { xMin, yMin, xMax, yMax } = bounds;
  
  // Using PostGIS ST_MakeEnvelope for sub-metric bounding box intersections
  const query = \`
    SELECT 
      p.id, 
      p.tax_id, 
      ST_AsGeoJSON(ST_SimplifyPreserveTopology(p.geom, 0.0001)) as geojson,
      t.assessed_value
    FROM properties p
    JOIN tax_records t ON p.tax_id = t.tax_id
    WHERE p.geom && ST_MakeEnvelope($1, $2, $3, $4, 4326)
      AND ST_Intersects(p.geom, ST_MakeEnvelope($1, $2, $3, $4, 4326))
    LIMIT 5000;
  \`;
  
  const client = await pool.connect();
  try {
    const res = await client.query(query, [xMin, yMin, xMax, yMax]);
    return res.rows.map(row => ({
      ...row,
      geometry: JSON.parse(row.geojson) // Fast V8 parsing
    }));
  } finally {
    client.release();
  }
}`
      },
      cimed_experience: {
        title: "Cimed Experience (Gamified PWA)",
        logo: logoCimed,
        impact: "Gamified Ecosystem",
        desc: "Native-behavior Progressive Web App (PWA) engineered to transform organic brand influence into tangible Point-of-Sale (POS) conversions. It orchestrates global Drive-to-Store campaigns through an interactive Social Hub, real-time gamified rankings, and an AI-driven health consultant, effectively bridging the gap between digital engagement and physical pharmacy visits.",
        stack: ["React", "Supabase", "PWA", "Firebase", "Local AI"],
        details: {
          innovation: "Native-like app experience orchestrating 'Drive-to-Store' global campaigns, powered by Claud.ia—a proprietary AI health consultant.",
          strongPoints: ["Real-time Gamification & Rankings", "Geo-Fencing Conversions", "AI Personal Health Assistant"],
          architecture: "PWA reacting to Firebase/Supabase real-time events, incorporating a massive administrative dashboard and custom OSINT curation.",
          businessImpact: "Drove thousands of organic leads to physical stores by engaging brand advocates with real-time rewards.",
          technicalChallenges: "Ensuring offline persistence and instant synchronization for users in environments with poor network connectivity."
        }
      },
      metromargeo: {
        title: "MetroMarGeo Data Engine",
        logo: logoMetromargeo,
        impact: "Data Engineering",
        desc: "Autonomous Geo-Spatial data extraction and engineering engine focused on the São Paulo coast. It systematically fetches, normalizes, and cross-references WFS (GeoServer) parameters with municipal tax platforms. Utilizing a hybrid architecture with localized Machine Learning OCR, it seamlessly bypasses complex governmental visual captchas to construct the most comprehensive proprietary real estate database in the region.",
        stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
        details: {
          innovation: "Hybrid automation blending HTTP payload hijacking with local Machine Learning (OCR) to bypass complex municipal visual captchas seamlessly.",
          strongPoints: ["Visual Captcha Bypass via Neural Nets", "WFS Coordinate Mass Extraction", "Tax & Real Estate Cross-referencing"],
          architecture: "Decoupled Python scripts operating in a multi-phase extraction process, mapping from geographical layers down to individual taxpayer credentials.",
          businessImpact: "Created the richest proprietary database of coastal properties, turning opaque government WFS endpoints into structured commercial data.",
          technicalChallenges: "Bypassing highly aggressive anti-bot protections and solving dynamic image captchas reliably using localized OCR networks."
        }
      },
      automacao_scraper: {
        title: "AutoScraper Core (UrbanIntelligence)",
        logo: logoAutoScraper,
        impact: "Civic Automation",
        desc: "Highly distributed bot orchestrator designed for massive, resilient municipal data extraction. It overcomes aggressive governmental Web Application Firewalls (WAFs) by multiplexing dynamically rotated Tor execution threads. Coupled with self-trained PyTorch OCR models for seamless captcha resolution, it achieves extreme parallelization of over 100k records per hour, drastically reducing data acquisition costs.",
        stack: ["Python", "PyTorch", "Tor", "Selenium Grid"],
        details: {
          innovation: "Bypasses complex governmental WAFs by isolating requests across dynamically rotated Tor execution threads and custom neural-network character recognition.",
          strongPoints: ["Tor Network IP Rotation", "Self-trained PyTorch OCR Model", "100k+ Records/Hr Parallelization"],
          architecture: "Master-worker node design where a Python orchestrator governs isolated Tor port configurations pushing tasks to resilient worker threads.",
          businessImpact: "Slashed data acquisition costs by 95% and fully automated the intake of public records that previously required an entire manual team.",
          technicalChallenges: "Maintaining high-throughput scraping pipelines despite strict Tor network latency and unpredictable IP bans."
        }
      },
      niduscare: {
        title: "NidusCare",
        logo: logoNidusCare,
        impact: "Digital Health",
        desc: "Comprehensive native Android health management ecosystem dedicated to caregivers and dependents. Built with an offline-first architecture, it ensures critical medication reminders, clinical scheduling, and vital activity timelines are never missed, even in areas with poor connectivity. The shared real-time tracking interface significantly improves patient medication adherence.",
        stack: ["Kotlin", "Android SDK", "Room", "Firebase"],
        details: {
          innovation: "A fully localized health companion supporting offline-first synchronization to guarantee no critical medication reminder is missed.",
          strongPoints: ["Offline-first Persistence (Room)", "Complex Scheduling Alarms", "Caregiver Sharing Mechanics"],
          architecture: "MVVM Clean Architecture integrating Kotlin Coroutines & Flow for a buttery-smooth and responsive native UI.",
          businessImpact: "Improved medication adherence among elderly patients by providing caregivers a shared, real-time tracking interface.",
          technicalChallenges: "Implementing bulletproof local notifications and alarm managers that survive device reboots and extreme battery-saver modes."
        }
      },
      pharmaflow: {
        title: "PharmaFlow Ecosystem",
        logo: logoPharmaFlow,
        impact: "Supply Chain",
        desc: "End-to-end logistical delivery solution tailored for the pharmaceutical sector. It seamlessly merges a Native Android application for drivers with a React Web operations dashboard. By capturing and synchronizing high-frequency GPS telemetry in near real-time via Firebase, it provides zero-latency dispatch updates, optimizes routing, and automates inventory deductions, boosting delivery capacity by over 30%.",
        stack: ["Kotlin", "Firebase Realtime", "React Web", "Vite"],
        details: {
          innovation: "Bridges mobile telemetry with a web operations dashboard, capturing driver coordinates and ensuring immediate pharmacy compliance.",
          strongPoints: ["Cross-platform Latency ≤200ms", "Live Fleet Monitoring", "Automated Inventory Deductions"],
          architecture: "Android mobile application syncing coordinate state with a Firebase real-time cluster, watched actively by a desktop React dashboard.",
          businessImpact: "Optimized driver routes and eliminated manual dispatch errors, leading to a 30% increase in daily delivery capacity.",
          technicalChallenges: "Managing continuous high-frequency GPS state updates without draining the delivery driver's mobile battery."
        }
      },
      certidoesapp: {
        title: "AutoJuris AI (Certidões App)",
        logo: logoCertibot,
        impact: "Legal Tech",
        desc: "Fully automated legal tech portal dedicated to rapid bureaucratic certificate extraction. It navigates complex real estate and municipal tax registries using a sophisticated blend of headless browsers and reverse-engineered API exploitation. This system dramatically reduces the turnaround time for legal document retrieval from several days to under 60 seconds through intelligent state preservation and async job queuing.",
        stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
        details: {
          innovation: "Transforms manual, days-long bureaucratic retrievals into sub-minute API calls by reverse-engineering public endpoint infrastructures.",
          strongPoints: ["Headless Scraping Fallbacks", "Token State Preservation", "Async Job Queuing"],
          architecture: "Deno backend issuing secure headless sessions and parallel data scraping, delivering final PDFs back to a responsive frontend.",
          businessImpact: "Reduced the certificate issuance turnaround time from 3 business days to under 60 seconds.",
          technicalChallenges: "Reverse engineering stateful token flows and maintaining active sessions across highly unstable legacy government portals."
        }
      },
      marketposter: {
        title: "MarketPoster",
        logo: logoMarketPoster,
        impact: "Retail OS",
        desc: "Professional Android mobile application built for dynamic retail poster design and on-device printing. It empowers branch managers with studio-grade design tools, featuring C++ OpenCV operations and offline ML-powered background removal. With direct network printing protocols and robust offline sync, it completely eliminates the need for graphic design outsourcing across hundreds of retail branches.",
        stack: ["Kotlin", "Android Native", "ML Kit", "OpenCV"],
        details: {
          innovation: "Places studio-grade design and automated printing capabilities directly in the hands of branch managers via mobile platforms.",
          strongPoints: ["On-device ML Background Removal", "Direct Printing Network Protocol", "Offline Sync Capabilities"],
          architecture: "Local-first Android application leveraging native graphic rendering layers and background worker sync queues.",
          businessImpact: "Empowered over 100+ branches to independently produce promotional materials, cutting graphic design outsourcing costs entirely.",
          technicalChallenges: "Running intensive C++ OpenCV operations and ML Kit background removals on low-end retail smartphones."
        }
      },
      interactivemap: {
        title: "InteractiveMap - Jardim Acapulco",
        logo: logoAcapulco,
        impact: "Map Interaction",
        desc: "Immersive and highly responsive localized real estate map developed with React and Vite. It replaces traditional static mapping with dynamic lot visualization, advanced interactive querying, and real-time administrative moderation. Leveraging Client-Side Rendering (CSR) and optimized Firebase payloads, it delivers a flawless 60fps experience that significantly boosts conversion rates among high-net-worth clients.",
        stack: ["React", "TypeScript", "Vite", "Firebase"],
        details: {
          innovation: "Fluid mapping interface replacing bulky traditional static maps, offering instantaneous feedback on lot statuses.",
          strongPoints: ["Dynamic Layer Toggling", "Administrative Access Tiers", "Instant Client Deploy"],
          architecture: "React Single Page Application communicating through a highly optimized Firebase JSON payload, skipping heavy WFS servers.",
          businessImpact: "Boosted client conversion rates by offering high-net-worth buyers a tangible, interactive view of available premium lots.",
          technicalChallenges: "Handling complex React-Leaflet integration with custom GeoJSON overlays while maintaining 60fps scrolling."
        }
      },
      emailmonitor: {
        title: "Lead Webhook Monitor",
        logo: logoEmailMonitor,
        impact: "Marketing Tech",
        desc: "Autonomous background pipeline designed for instant inbound lead capture via robust IMAP parsing. It utilizes complex regex patterns to extract structured data from unpredictable email formats, immediately piping high-value leads directly into CRM webhooks via Supabase row-level sync. This zero-latency routing guarantees a 100% capture rate, fully eliminating manual data entry and lead leakage.",
        stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
        details: {
          innovation: "Zero-latency lead routing converting raw asynchronous email data into actionable CRM database inserts immediately.",
          strongPoints: ["Regex Email Parsing", "Continuous Background Watcher", "Supabase Row-Level Sync"],
          architecture: "Independent Python daemon monitoring email ports, formatting raw text, and triggering serverless Supabase inserts.",
          businessImpact: "Ensured a 100% capture rate for high-value leads entering via disorganized partner emails, eliminating human data entry.",
          technicalChallenges: "Creating fail-safe IMAP idle connections and robust regex patterns to handle wildly unpredictable email body formats."
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
      { name: "Systems Analysis and Development (ADS) - FMU (In Progress)", date: "2026" },
      { name: "Back-End Architecture: REST API with Kotlin & Spring Boot (Alura)", date: "2025" },
      { name: "Advanced Data Engineering (Alura)", date: "2024" },
      { name: "Database: Advanced SQL Modeling and Queries (Alura)", date: "2023" },
      { name: "Angular Expert Architect (Loiane Training)", date: "2023" },
      { name: "DevOps: Git and GitHub for Advanced Version Control (Alura)", date: "2022" }
    ],
    contact: {
      phone: "+55 (13) 99205-8836",
      email: "brunoadmin@guarujainterativo.com.br",
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
      role: "Pleno/Senior Software Engineer",
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
      { date: "Jan 2024 - Presente", role: "Pleno/Senior Software Engineer | Soo Tech", desc: "Liderança técnica em ecossistemas JVM, implementando microsserviços resilientes com Spring Boot e padrões de Clean Architecture." },
      { date: "2023 - Presente", role: "Arquiteto & Fundador | GuaruGeo", desc: "Desenvolvendo infraestrutura GIS de alta precisão integrando PostGIS e protocolos OSINT para inteligência imobiliária avançada." }
    ],
    projects: {
      predictmed: {
        title: "PredictMed",
        logo: logoPredictMed,
        impact: "Ecossistema SaaS",
        desc: "Plataforma de predição de estoque empresarial guiada por IA para o setor de saúde. Utilizando Gemini Vision para auditoria de ativos físicos submétrica, correlaciona dados visuais com indicadores de mercado para fornecer reabastecimento automatizado e altamente preciso, mitigando drasticamente o risco de ruptura de medicamentos críticos.",
        stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
        details: {
          innovation: "Motor preditivo proprietário utilizando Gemini Vision para analisar o estado físico dos estoques e correlacionar com indicadores de mercado.",
          strongPoints: ["98% de Precisão em Prevenção de Ruptura", "Otimização Automatizada do Ciclo de Compras", "Infraestrutura Serverless Edge-native"],
          architecture: "Arquitetura orientada a eventos usando Supabase Realtime e Deno Edge Functions para processamento de concorrência massiva.",
          businessImpact: "Reduziu o tempo de auditoria manual de estoque em 85% e minimizou drasticamente o risco de ruptura de medicamentos.",
          technicalChallenges: "Orquestrar inferências de IA de visão em tempo real mantendo compliance rigoroso e atualizações visuais em menos de um segundo."
        },
        codeLanguage: "typescript",
        codeSnippet: `import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { GoogleGenerativeAI } from "npm:@google/genai"

serve(async (req) => {
  const { imageBase64, facilityId } = await req.json()
  const ai = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY"))
  
  const model = ai.getGenerativeModel({ model: "gemini-1.5-pro-vision" })
  const prompt = "Analyze this medical inventory shelf. Count the exact number of critical vials and identify impending stockouts based on visual density."
  
  const result = await model.generateContent([
    prompt,
    { inlineData: { data: imageBase64, mimeType: "image/jpeg" } }
  ])
  
  const predictedDeficit = result.response.text()
  
  if (predictedDeficit.includes("STOCKOUT_RISK_HIGH")) {
     await triggerAutomatedPurchaseOrder(facilityId, predictedDeficit)
  }
  
  return new Response(JSON.stringify({ status: 'analyzed', deficit: predictedDeficit }))
})`
      },
      guarugeo: {
        title: "GuaruGeo & Interactive Map",
        logo: logoGuarugeo,
        impact: "Geo-Inteligência",
        desc: "Sistema de Informação Geográfica (GIS) de alta fidelidade e CRM especializado para inteligência imobiliária. Integra indexação espacial complexa via PostGIS com pipelines de dados OSINT automatizados, entregando precisão submétrica. A plataforma unifica dados municipais, acelerando a consulta de propriedades e informações fiscais em 10x.",
        stack: ["PostGIS", "React 19", "Node.js", "JavaScript"],
        details: {
          innovation: "GIS full-stack alcançando precisão geométrica submétrica através de otimização em PostGIS aliada a data science automatizada.",
          strongPoints: ["Data Science Espacial", "Síntese Automatizada de Informação", "Mapeamento Imobiliário Concorrente"],
          architecture: "DBMS espacial central sustentado por um middleware NodeJS servindo payloads vetoriais diretamente ao React MapGL.",
          businessImpact: "Permitiu que imobiliárias consultassem dados espaciais e fiscais 10x mais rápido, unificando informações dispersas da prefeitura.",
          technicalChallenges: "Otimizar a renderização no navegador de mais de 18 mil polígonos ultra-detalhados sem congelar a thread principal do usuário."
        },
        codeLanguage: "javascript",
        codeSnippet: `// Spatial High-Concurrency Intersect Query Engine
async function getPropertiesInViewport(bounds) {
  const { xMin, yMin, xMax, yMax } = bounds;
  
  // Using PostGIS ST_MakeEnvelope for sub-metric bounding box intersections
  const query = \`
    SELECT 
      p.id, 
      p.tax_id, 
      ST_AsGeoJSON(ST_SimplifyPreserveTopology(p.geom, 0.0001)) as geojson,
      t.assessed_value
    FROM properties p
    JOIN tax_records t ON p.tax_id = t.tax_id
    WHERE p.geom && ST_MakeEnvelope($1, $2, $3, $4, 4326)
      AND ST_Intersects(p.geom, ST_MakeEnvelope($1, $2, $3, $4, 4326))
    LIMIT 5000;
  \`;
  
  const client = await pool.connect();
  try {
    const res = await client.query(query, [xMin, yMin, xMax, yMax]);
    return res.rows.map(row => ({
      ...row,
      geometry: JSON.parse(row.geojson) // Fast V8 parsing
    }));
  } finally {
    client.release();
  }
}`
      },
      cimed_experience: {
        title: "Cimed Experience (Gamified PWA)",
        logo: logoCimed,
        impact: "Ecossistema Gamificado",
        desc: "Progressive Web App (PWA) com comportamento nativo focado em converter influência orgânica da marca em vendas físicas reais (PDV). Orquestra campanhas globais Drive-to-Store através de um Social Hub interativo, rankings gamificados em tempo real e uma consultora de saúde IA, conectando o engajamento digital à visitação nas farmácias.",
        stack: ["React", "Supabase", "PWA", "Firebase", "Local AI"],
        details: {
          innovation: "Aplicativo web de comportamento nativo voltado a campanhas on-premise nas farmácias, guiado pela Inteligência Artificial Claud.ia.",
          strongPoints: ["Rankings & Social Hub Real-Time", "Estratégia Geo-Fencing de Conversões", "Assistência Clínica IA"],
          architecture: "Arquitetura PWA em cima de WebSockets via Firebase/Supabase acompanhado de um Dashboard Administrativo de Curadoria.",
          businessImpact: "Direcionou milhares de leads orgânicos para as lojas físicas engajando influenciadores através de recompensas gamificadas em tempo real.",
          technicalChallenges: "Garantir a persistência offline e a sincronia imediata quando a rede reestabelecia, em ambientes de farmácia com baixa conectividade."
        }
      },
      metromargeo: {
        title: "MetroMarGeo Data Engine",
        logo: logoMetromargeo,
        impact: "Engenharia de Dados",
        desc: "Motor robótico autônomo de extração e engenharia de dados geospaciais focado no litoral paulista. Captura, normaliza e cruza parâmetros WFS (GeoServer) com portais tributários municipais. Usando uma arquitetura híbrida com OCR via Machine Learning local, contorna facilmente captchas visuais para construir o maior banco de dados imobiliário proprietário da região.",
        stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
        details: {
          innovation: "Automação híbrida que une análise de tráfego HTTP com Machine Learning local (OCR) para dilacerar captchas governamentais de imagem.",
          strongPoints: ["Bypass de Captchas via Redes Neurais", "Extração WFS em Larga Escala", "Cruzamento Fiscal Imobiliário"],
          architecture: "Workflows assíncronos isolados em Python, partindo da extração das poligonais até inserção refinada da base de proprietários no BD.",
          businessImpact: "Construiu o maior banco de dados proprietário do litoral paulista, transformando APIs complexas de WFS em puro dado comercial valioso.",
          technicalChallenges: "Contornar proteções antibot altamente agressivas resolvendo imagens de captcha dinâmicos de forma autônoma e com alta precisão."
        }
      },
      automacao_scraper: {
        title: "AutoScraper Core (UrbanIntelligence)",
        logo: logoAutoScraper,
        impact: "Automação Extrema",
        desc: "Orquestrador de bots altamente distribuído, desenhado para extração resiliente de dados municipais em massa. Supera firewalls governamentais (WAFs) multiplexando threads no Tor com rotação dinâmica de IP. Aliado a modelos de OCR treinados em PyTorch, alcança paralelização extrema de mais de 100 mil registros por hora, reduzindo drasticamente os custos de aquisição.",
        stack: ["Python", "PyTorch", "Tor", "Selenium Grid"],
        details: {
          innovation: "Infraestrutura virtualizada que impede bans de IP através de multiplexação do daemon Tor isolando threads e solucionando captchas via treinamento PyTorch local.",
          strongPoints: ["Geração Dinâmica de Portas Tor", "Treinamento Nativo PyTorch (OCR)", "100k+ Registros por hora"],
          architecture: "Nó Orquestrador central que cria threads autônomas conectadas aos nodes do Tor, permitindo raspagem invisível governamental.",
          businessImpact: "Reduziu o custo de aquisição de dados em 95% e automatizou 100% rotinas governamentais que exigiam equipes inteiras de estagiários.",
          technicalChallenges: "Manter fluxos de extração robustos mesmo com a latência altíssima imposta pela rede Tor e bloqueios dinâmicos de IPs."
        }
      },
      niduscare: {
        title: "NidusCare",
        logo: logoNidusCare,
        impact: "Saúde Digital Nativa",
        desc: "Ecossistema nativo Android abrangente para gestão de saúde, dedicado a cuidadores e dependentes. Construído com arquitetura offline-first, assegura que lembretes críticos de medicamentos, agendamentos e timelines de atividades vitais nunca falhem, mesmo sem internet. A interface compartilhada em tempo real melhora significativamente a adesão aos tratamentos.",
        stack: ["Kotlin", "Android SDK", "Room", "Firebase"],
        details: {
          innovation: "Companheiro de saúde de alta resiliência que funciona no padrão 'Offline-First', assegurando que alarmes críticos de medicações nunca falhem mesmo sem rede.",
          strongPoints: ["Persistência Offline Local (Room)", "Alarm Manager Complexo", "Sincronia Firebase Multi-Device"],
          architecture: "Arquitetura Clean MVVM combinada com Kotlin Flow e Coroutines, assegurando transições macias e estado reativo da interface celular.",
          businessImpact: "Elevou consideravelmente a aderência medicamentosa oferecendo aos cuidadores uma interface segura e sincronizada em tempo real.",
          technicalChallenges: "Implementar um sistema de notificações vitais e alarmes capaz de sobreviver ao reinício do dispositivo e restrições extremas de bateria."
        }
      },
      pharmaflow: {
        title: "PharmaFlow Ecosystem",
        logo: logoPharmaFlow,
        impact: "Cadeia de Suprimentos",
        desc: "Solução logística ponta-a-ponta sob medida para farmácias. Une perfeitamente um App Android Nativo para entregadores a um dashboard operacional Web em React. Capturando telemetria GPS de alta frequência quase em tempo real via Firebase, fornece atualizações de despacho com latência zero, otimiza rotas e automatiza baixas de estoque, elevando a capacidade de entrega em 30%.",
        stack: ["Kotlin", "Firebase Realtime", "React Web", "Vite"],
        details: {
          innovation: "Motor síncrono que transfere as coordenadas do dispositivo mobile em tempo quase-real (WebSocket) visualizadas numa dashboard administrativa.",
          strongPoints: ["Update Latência Menor de 200ms", "Telemetria Vital de Frotas", "Baixa de Estoque Realtime"],
          architecture: "App Nativo rastreando GPS assíncrono emitindo pulsos a um Cluster Firebase Realtime consumido pela central de comando React.",
          businessImpact: "Otimizou rotas na rua e anulou os erros manuais da base, provendo aumento prático de mais de 30% na capacidade logística do parceiro.",
          technicalChallenges: "Processar transmissões contínuas e altíssima frequência de GPS sem esgotar instantaneamente a bateria do entregador em campo."
        }
      },
      certidoesapp: {
        title: "AutoJuris AI (Certidões App)",
        logo: logoCertibot,
        impact: "Robótica Jurídica",
        desc: "Portal jurídico totalmente automatizado para extração ultra-rápida de certidões burocráticas. Navega por complexos registros imobiliários e fiscais usando uma mescla avançada de navegadores headless e engenharia reversa de APIs. O sistema reduz o tempo de emissão de documentos legais de vários dias para menos de 60 segundos por meio da preservação de estado e filas de processamento assíncrono.",
        stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
        details: {
          innovation: "Reverte engessamentos burocráticos de dias por chamadas puras de interface extraindo bases judiciais sem intervenção manual.",
          strongPoints: ["Headless Browser Assíncrono", "Gestão Inteligente de Status de Sessão", "Fila Robusta de Tarefas"],
          architecture: "Núcleos em Deno / NodeJS ativando seções mascaradas do Puppeteer empurrando os dados estruturados numa resposta final à Nuvem.",
          businessImpact: "Derreteu o tempo de emissão de uma certidão imobiliária, baixando os prazos legais de até três dias para inacreditáveis 60 segundos.",
          technicalChallenges: "Engenharia reversa dos fluxos de token stateful e lidar com um portal governamental antiquado que perdia sessões constantemente."
        }
      },
      marketposter: {
        title: "MarketPoster",
        logo: logoMarketPoster,
        impact: "Varejo Operacional",
        desc: "Aplicativo móvel Android corporativo construído para design ágil de encartes no varejo e impressão no dispositivo. Capacita gerentes com ferramentas de design de nível profissional, operando remoção de fundo offline via ML e OpenCV em C++. Com protocolos diretos de impressão em rede, elimina completamente a necessidade de agências gráficas terceirizadas nas centenas de filiais.",
        stack: ["Kotlin", "Android Nativo", "ML Kit", "OpenCV"],
        details: {
          innovation: "Confere poderes de design profissional aos gerentes de farmácias com edição e despache à impressora on-device com aprendizado de máquina.",
          strongPoints: ["Remoção de Fundo por IA Offline", "Comunicação Broadcast Printeira", "Modo Avião 100% Funcional"],
          architecture: "Android SDK limpo manipulando Canvas diretamente, auxiliado por SDKs robustos de ML integrados a workers de processamento offline.",
          businessImpact: "Concedeu autonomia total a 100+ filiais e reduziu completamente as faturas terceirizadas com agências de design gráfico e campanhas.",
          technicalChallenges: "Rodar extração OpenCV em C++ pesado e remoção de fundo com MLKit diretamente em aparelhos corporativos Android de baixo custo."
        }
      },
      interactivemap: {
        title: "InteractiveMap - Jardim Acapulco",
        logo: logoAcapulco,
        impact: "Interação Espacial",
        desc: "Mapa imobiliário localizado, imersivo e altamente responsivo, desenvolvido com React e Vite. Substitui o mapeamento estático tradicional por visualização dinâmica de lotes, consultas interativas avançadas e moderação administrativa em tempo real. Utilizando renderização no cliente (CSR) e payloads otimizados do Firebase, entrega uma experiência impecável a 60fps que impulsiona as conversões de clientes de alto luxo.",
        stack: ["React", "TypeScript", "Vite", "Firebase"],
        details: {
          innovation: "Substituição fluida do geoprocessamento lento convencional por state-management afiado, injetando filtros live no portfólio físico.",
          strongPoints: ["Toggle Inteligente de Lotes", "Painel Administrativo Embutido", "Responsividade Absoluta"],
          architecture: "Inteiramente focado num pipeline CSR (Client-Side Rendering) consumindo dumps de estado NoSQL sem atrasos de requisições POST.",
          businessImpact: "Aumentou violentamente a taxa de conversão pois clientes de altíssimo luxo visualizaram os terrenos físicos em uma interface espetacular na hora.",
          technicalChallenges: "Integrar o ecossistema complexo React-Leaflet com centenas de Overlays de GeoJSON mantendo um scroll impecável de 60fps."
        }
      },
      emailmonitor: {
        title: "Lead Webhook Monitor",
        logo: logoEmailMonitor,
        impact: "Aquisição Automática",
        desc: "Pipeline autônomo em background projetado para captação instantânea de leads via parsing robusto de IMAP. Utiliza expressões regulares (regex) complexas para extrair dados estruturados de e-mails imprevisíveis, injetando leads de alto valor imediatamente em webhooks do CRM via Supabase. Esse roteamento de latência zero garante 100% de captura, eliminando o vazamento de contatos e a digitação manual.",
        stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
        details: {
          innovation: "Zero intervenção humana na captação inicial: o código extrai nomes e números da formatação dos portais e injeta imediatamente no webhook/CRM.",
          strongPoints: ["Extração Limpa Regex", "Daemon Infinito Estável", "Postagem Supabase Nativa"],
          architecture: "Código procedural Python atachado como serviço Linux mantendo loop eterno sobre protocolo de rede e alimentando buckets Supabase.",
          businessImpact: "Assegurou zero vazamento de leads imobiliários, impedindo que e-mails desorganizados se perdessem ou dependessem de ação humana para entrar no CRM.",
          technicalChallenges: "Modelar regex de máxima abrangência e tratar a falha catastrófica da comunicação IMAP quando conectada a provedores de terceiros intermitentes."
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
      { name: "Análise e Desenvolvimento de Sistemas (ADS) - FMU", date: "Em andamento" },
      { name: "Arquitetura Back-End: API REST com Kotlin & Spring Boot (Alura)", date: "2025" },
      { name: "Formação Avançada em Engenharia de Dados (Alura)", date: "2024" },
      { name: "Banco de Dados: Modelagem e Consultas SQL Avançadas (Alura)", date: "2023" },
      { name: "Especialista Arquiteto Angular (Loiane Training)", date: "2023" },
      { name: "DevOps: Git e GitHub - Controle de Versão de Código (Alura)", date: "2022" }
    ],
    contact: {
      phone: "+55 (13) 99205-8836",
      email: "brunoadmin@guarujainterativo.com.br",
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
    businessImpact?: string;
    technicalChallenges?: string;
  };
  codeSnippet?: string;
  codeLanguage?: string;
}

interface I18nContextProps {
  t: typeof translations['en'];
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
