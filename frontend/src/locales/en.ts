import logoPredictMed from '../assets/screenshots/PredictMed/logo_PredictMed.png'
import logoGuarugeo from '../assets/screenshots/guarugeo/logo_guarugeo.png'
import logoMarketPoster from '../assets/logo_marketposter.png'
import logoLumen from '../assets/logo_lumen.png'
import logoFarmaDelivery from '../assets/logo_farmadelivery.png'
import logoCachetaBuraco from '../assets/logo_cachetaburaco.png'

export const en = {
  hero: {
    greeting: "Bruno Giovani",
    role: "Software Developer",
    years: "Full-stack, Android, automation, and GIS",
    tagline: "I build independent projects around real workflows: delivery operations, synchronized games, maps, inventory, and Android tools. This portfolio shows what the code demonstrates, each project's current stage, and what still requires real-world validation.",
    cta: "View selected projects"
  },
  sections: {
    projects: "Selected projects",
    skills: "Applied stack and evidence",
    experience: "Practical journey",
    certifications: "Education and courses",
    contact: "Contact"
  },
  experience: [
    {
      date: "2025 — present",
      role: "Independent software projects",
      desc: "Development and maintenance of web applications, Android apps, automations, and maps. Public repositories document architecture, tests, limitations, and technical evolution."
    },
    {
      date: "2024",
      role: "Short-term collaboration | Agili",
      desc: "Completed informal B2B work involving feature adjustments, code maintenance, bug fixes, and web integrations."
    },
    {
      date: "In progress",
      role: "Systems Analysis and Development | FMU",
      desc: "Formal education supported by courses in REST APIs, Kotlin/Spring Boot, Python, SQL, Git, and continuous project work."
    }
  ],
  projects: {
    farmadelivery: {
      title: "FarmaDelivery",
      logo: logoFarmaDelivery,
      impact: "Independent project · Full-stack",
      desc: "A pharmacy-delivery management monorepo with a web dashboard, API, Android app, and courier PWA. It covers access roles, deliveries, reports, routes, location, notifications, and environment validation.",
      stack: ["TypeScript", "React", "Fastify", "Prisma", "PostgreSQL/Supabase", "Kotlin", "Firebase FCM"],
      screenshots: [
        "/assets/screenshots/farmadelivery/farmadelivery-admin.png",
        "/assets/screenshots/farmadelivery/farmadelivery-motoboy-pwa.png"
      ],
      details: {
        innovation: "Shared contracts and rules across four surfaces: API, admin dashboard, Android, and PWA.",
        strongPoints: ["Multi-application monorepo", "Versioned SQL and access rules", "Tests and environment preflight", "Security and operations documentation"],
        architecture: "TypeScript/Kotlin monorepo with Fastify, Prisma, and PostgreSQL/Supabase; React/Vite and Android clients; notifications through Firebase.",
        businessImpact: "Demonstrates domain modeling, client integration, authentication, authorization, and maintenance of a complete operational flow. It is an independent project, with no claim of proven commercial adoption.",
        technicalChallenges: "Keeping contracts consistent across web and mobile, handling sensitive data, configuring environments without committing secrets, and separating automated validation from operational acceptance testing.",
        topology: "React Admin + PWA + Android -> Fastify API -> Prisma/PostgreSQL/Supabase -> Firebase Messaging",
        url: "https://drogstoantonio.web.app",
        github: "https://github.com/beehgiovani/FarmaDelivery"
      }
    },
    cachetaburaco: {
      title: "Carteado BR",
      logo: logoCachetaBuraco,
      impact: "Android · Rules and synchronization",
      desc: "An Android Cacheta, Buraco, and Tranca game built with Jetpack Compose, with a rules engine separated from the UI, bot matches, local network play, and a Supabase-backed online beta.",
      stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Supabase Realtime", "Ktor/OkHttp", "JUnit"],
      screenshots: [
        "/assets/screenshots/cachetaburaco/feature-graphic-1024x500.png",
        "/assets/screenshots/cachetaburaco/01-login-1920x1080.png",
        "/assets/screenshots/cachetaburaco/02-menu-1920x1080.png",
        "/assets/screenshots/cachetaburaco/03-partida-1920x1080.png"
      ],
      details: {
        innovation: "The same communication contract supports the local bot, Wi-Fi, and online modes while keeping game rules independent from transport.",
        strongPoints: ["Rules for three game variants", "Separated public state and private hands", "Authoritative host and idempotent events", "Unit tests and store assets"],
        architecture: "Native Android app with Compose, ViewModel, a domain rules engine, and interchangeable transport repositories.",
        businessImpact: "Demonstrates rules modeling, state management, synchronization, and continued Android app development. Online mode remains beta and still needs broader multi-device acceptance testing.",
        technicalChallenges: "Synchronizing turns and rounds, preserving each player's private information, rejecting stale events, and handling reconnections without duplicating results.",
        topology: "Compose UI -> MatchViewModel -> GameRulesEngine -> Local bot | Wi-Fi NSD/TCP | Supabase Realtime",
        github: "https://github.com/beehgiovani/CachetaBuraco"
      }
    },
    guarugeo: {
      title: "Guarujá Interativo",
      logo: logoGuarugeo,
      impact: "Web GIS · Public data",
      desc: "A mapping application for organizing and browsing lots and units in Guarujá, with search, interactive layers, and experimental CRM modules. Sensitive and working datasets are not part of the public repository.",
      stack: ["JavaScript", "Leaflet", "RBush", "Supabase", "Deno Edge", "Firebase Hosting", "Capacitor"],
      screenshots: [
        "/assets/screenshots/guarugeo/guarugeo (1).png",
        "/assets/screenshots/guarugeo/guarugeo (2).png",
        "/assets/screenshots/guarugeo/guarugeo (3).png"
      ],
      details: {
        innovation: "Progressive navigation and spatial search in a lightweight web interface, separating the final application from data-collection tooling.",
        strongPoints: ["Hierarchical geospatial visualization", "Cadastral field search", "Client-side spatial index", "Published web application"],
        architecture: "JavaScript/Leaflet frontend with Supabase for authentication, data, and support functions; optional Capacitor/Electron packaging.",
        businessImpact: "Demonstrates geospatial data integration, search design, and a territory-oriented interface. Experimental commercial modules are not presented as a contracted product.",
        technicalChallenges: "Organizing related layers and entities, keeping interaction responsive with many elements, and protecting datasets that should not be public.",
        topology: "Leaflet/RBush -> Supabase/PostgreSQL + Edge Functions -> Firebase Hosting",
        url: "https://guarujainterativo.com.br/",
        github: "https://github.com/beehgiovani/GuarujaInterativo"
      }
    },
    predictmed: {
      title: "PredictMed",
      logo: logoPredictMed,
      impact: "Web prototype · Purchasing support",
      desc: "A prototype that imports catalogs and sales history, records stockouts, and generates replenishment suggestions. Its indicators support decisions; they are not a promise of forecast accuracy or autonomous purchasing.",
      stack: ["React 19", "TypeScript", "Vite", "Express/tRPC", "Drizzle", "PostgreSQL/Supabase", "Gemini"],
      screenshots: [
        "/assets/screenshots/PredictMed/predictmed (1).png",
        "/assets/screenshots/PredictMed/predictmed (2).png",
        "/assets/screenshots/PredictMed/predictmed (3).png"
      ],
      details: {
        innovation: "Combining operational file ingestion, readable statistical rules, and experimental AI features in an auditable flow.",
        strongPoints: ["Catalog and sales-history imports", "Suggestions with visible parameters", "Stockout records", "TypeScript typing and tests"],
        architecture: "React/TypeScript application with Express/tRPC, Drizzle, and PostgreSQL/Supabase, plus experimental Gemini and Firebase integrations.",
        businessImpact: "Demonstrates file processing, inventory modeling, and explainable suggestions. There is no public evidence of forecast accuracy in commercial operation.",
        technicalChallenges: "Preventing internal metrics from looking like guarantees, handling incomplete histories, and keeping the source of each suggestion traceable.",
        topology: "React -> Express/tRPC -> Drizzle/PostgreSQL -> optional Supabase, Firebase, and Gemini integrations",
        url: "https://predictmed.web.app/",
        github: "https://github.com/beehgiovani/predictmed"
      }
    },
    marketposter: {
      title: "MarketPoster",
      logo: logoMarketPoster,
      impact: "Android · Retail tool",
      desc: "An Android app for building retail posters and labels, importing data, working offline, and experimenting with background removal and printing. The main focus is the editor and its local workflows.",
      stack: ["Kotlin", "Jetpack Compose", "Room", "DataStore", "Hilt", "ML Kit", "Firebase"],
      details: {
        innovation: "A mobile editor combining visual composition, local persistence, batch imports, and on-device image processing.",
        strongPoints: ["Declarative Compose UI", "Room/DataStore persistence", "CSV/XLSX imports", "ML Kit image segmentation"],
        architecture: "Android application with Compose, Hilt, Room, DataStore, WorkManager, and Firebase integrations; image features use Android APIs and ML Kit.",
        businessImpact: "Demonstrates a domain-specific Android tool with offline states and file manipulation. It does not claim deployment in a retail chain.",
        technicalChallenges: "Managing memory during image editing, preserving local drafts, and supporting different import and output formats.",
        topology: "Compose UI -> ViewModels/Use cases -> Room/DataStore -> ML Kit/Firebase/local outputs",
        github: "https://github.com/beehgiovani/MarketPoster"
      }
    },
    lumen: {
      title: "Lúmen",
      logo: logoLumen,
      impact: "Android prototype · Modular architecture",
      desc: "An Android prototype in Kotlin and Compose for exploring drawing, computer vision, and multi-module organization. The public repository contains the Android foundation; the earlier web experience is not versioned there.",
      stack: ["Kotlin", "Jetpack Compose", "Gradle Multi-module", "Android"],
      details: {
        innovation: "Separating domain, data, vision, and drawing into independent Android modules so experiments do not concentrate all logic in the app module.",
        strongPoints: ["Multi-module structure", "Separation of responsibilities", "Compose UI", "Foundation for vision and drawing experiments"],
        architecture: "Android application divided into app, domain, data, vision, ui-common, and feature-drawing modules.",
        businessImpact: "Demonstrates modular organization and technical experimentation. It is a prototype, not a production product or a proprietary AI model.",
        technicalChallenges: "Defining clear module boundaries and keeping the drawing and vision dependency flow correctly directed.",
        topology: "app -> domain + data + vision + ui-common + feature-drawing",
        github: "https://github.com/beehgiovani/lumen"
      }
    }
  },
  skills: {
    java: "Java and Kotlin: REST APIs with Spring Boot and native Android applications.",
    react: "React and TypeScript: SPAs, PWAs, dashboards, and administrative workflows.",
    spring: "Data: PostgreSQL, Supabase, Firebase, and PostGIS in practical projects.",
    python: "Python: automation, Playwright, data processing, and geospatial workflows.",
    cloud: "Deployment and environments: Firebase Hosting, Vercel, Docker, and configuration checks.",
    gis: "GIS: GeoJSON, WFS/WMS, Leaflet, PostGIS, and spatial validation.",
    arch: "Engineering: contracts, tests, documentation, and separation of responsibilities.",
    node: "Mobile: Kotlin, Compose, Coroutines/Flow, Room, DataStore, and HTTP integrations."
  },
  certs: [
    { name: "Systems Analysis and Development — FMU", date: "In progress" },
    { name: "REST API with Kotlin and Spring Boot: persistence layer", date: "Alura" },
    { name: "Python: Object-Oriented Programming", date: "Alura" },
    { name: "Python for Data: functions, structures, and exceptions", date: "Alura" },
    { name: "SQLite: SQL queries and statements", date: "Alura" },
    { name: "Git and GitHub: version control and collaboration", date: "Alura" }
  ],
  footer: {
    availability: "Open to remote, hybrid, or on-site work and available for travel.",
    languages: "Native Portuguese; technical English for reading documentation.",
    focus: "Interested in full-stack, Android, and data-automation roles."
  },
  contact: {
    phone: "+55 (13) 99205-8836",
    email: "brunoadmin@guarujainterativo.com.br",
    linkedin: "https://www.linkedin.com/in/beehgiovani/",
    github: "https://github.com/beehgiovani/"
  },
  dialog: {
    title: "Professional portfolio",
    message: "Independent projects, explicit stages, and verifiable technical information. Choose your reading language.",
    btnEn: "Continue in English",
    btnPt: "Continuar em português"
  }
}
