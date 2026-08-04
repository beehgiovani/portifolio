import logoPredictMed from '../assets/screenshots/PredictMed/logo_PredictMed.png'
import logoGuarugeo from '../assets/screenshots/guarugeo/logo_guarugeo.png'
import logoCimed from '../assets/screenshots/cimed_experience/logo_cimedexperience.png'
import logoCertibot from '../assets/logo_certibot.png'
import logoPharmaFlow from '../assets/logo_pharmaflow.png'
import logoNidusCare from '../assets/logo_niduscare.png'
import logoAcapulco from '../assets/logo_acapulco.png'
import logoMetromargeo from '../assets/logo_metromargeo.png'
import logoAutoScraper from '../assets/logo_autoscraper.png'
import logoMarketPoster from '../assets/logo_marketposter.png'
import logoEmailMonitor from '../assets/logo_emailmonitor.png'
import logoLumen from '../assets/logo_lumen.png'
import logoFarmaDelivery from '../assets/logo_farmadelivery.png'
import logoCachetaBuraco from '../assets/logo_cachetaburaco.png'
import logoLitoral from '../assets/logo_litoral.png'
import acapulco1 from '../assets/screenshots/interactivemap/acapulco_1.png'
import acapulco2 from '../assets/screenshots/interactivemap/acapulco_2.png'
import acapulco3 from '../assets/screenshots/interactivemap/acapulco_3.png'
import data from '../portfolio.data.json'

export const pt = {
  hero: {
    greeting: "Bruno Giovani",
    role: "Desenvolvedor Full-Stack (Júnior/Pleno)",
    years: "Projetos pessoais completos + PJ informal concluída na Agili",
    tagline: "Desenvolvo projetos full-stack com foco em código organizado, interfaces úteis, APIs bem estruturadas e aprendizado constante. Tenho experiência prática com geo-inteligência, microsserviços, automações e IA aplicada, buscando uma oportunidade Júnior/Pleno para contribuir e evoluir em time.",
    cta: "Conheça minha jornada"
  },
  sections: {
    projects: "Projetos Pessoais Funcionais",
    skills: "Minha Stack & O que eu domino",
    experience: "Projetos e Experiência Prática",
    certifications: "Certificados",
    contact: "Vamos conversar?"
  },
  experience: [
    { date: "Projetos encerrados", role: "Projetos pessoais Full-Stack", desc: "Criação de aplicações próprias com React, TypeScript, Node/Fastify, Spring Boot, Kotlin, Supabase, Firebase e PostgreSQL para construir fluxos completos de produto." },
    { date: "PJ informal", role: "Desenvolvedor | Agili", desc: "Atuação técnica pontual em evolução de funcionalidades, manutenção de código, correções e integrações web, com escopo PJ informal concluído." },
    { date: "Formação contínua", role: "Formação e evolução técnica", desc: "Evolução constante em ADS, APIs REST, bancos de dados, Android, automações, testes e organização de código." }
  ],
  projects: {
    farmadelivery: {
      title: "FarmaDelivery",
      logo: logoFarmaDelivery,
      impact: "Projeto Pessoal Full-Stack",
      desc: "Projeto pessoal de entregas farmacêuticas com painel web, API online, app Android e PWA para motoboys. Usei banco, RLS, realtime, GPS ao vivo, notificações, comprovante fotográfico, relatórios, rotas, Docker, Vercel e Firebase Hosting para validar um fluxo completo de aplicação.",
      stack: ["React 19", "Fastify", "Prisma", "Supabase Storage", "Kotlin Compose", "PWA", "Vercel", "Firebase Hosting/FCM"],
      screenshots: [
        "/assets/screenshots/farmadelivery/farmadelivery-admin.png",
        "/assets/screenshots/farmadelivery/farmadelivery-motoboy-pwa.png"
      ],
      details: {
        innovation: "Arquitetura operacional com contratos compartilhados entre painel, API, Android e PWA, mantendo fallback Supabase REST, SQL canônico unificado, Server-Sent Events para atualização ao vivo e validações automatizadas em múltiplas superfícies.",
        strongPoints: ["Monorepo multi-app", "API online na Vercel", "Admin e PWA publicados no Firebase", "RLS, realtime e storage documentados", "GPS ao vivo e comprovante fotográfico"],
        architecture: "Monorepo TypeScript/Kotlin com API Fastify empacotada para Vercel Serverless, Prisma/Supabase, PostgreSQL com RLS, Supabase Storage, painel React, PWA React, app Android Compose, Firebase Messaging e Docker Compose para desenvolvimento.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Adaptar uma API Fastify para deploy serverless na Vercel, resolver empacotamento ESM/Prisma para Linux, alinhar contratos entre clientes do projeto, preservar segurança de secrets e validar Android/PWA/Admin/API no mesmo ciclo.",
        topology: "Firebase Hosting (Admin/PWA) -> Vercel Fastify API -> Prisma + Supabase REST fallback -> PostgreSQL/RLS/Realtime/Storage -> Kotlin Android + Firebase Messaging",
        url: "https://drogstoantonio.web.app",
        github: "https://github.com/beehgiovani/FarmaDelivery"
      },
      codeSnippets: [
        {
          title: "Handler serverless Fastify na Vercel",
          language: "javascript",
          code: `let appPromise = null;

async function getApp() {
  if (!appPromise) {
    const { createApp } = await import("../dist/app.js");
    appPromise = createApp({ logger: false }).then(async (app) => {
      await app.ready();
      return app;
    });
  }

  return appPromise;
}

module.exports = async function handler(request, response) {
  const app = await getApp();
  app.server.emit("request", request, response);
};`
        },
        {
          title: "Contrato SQL canônico com RLS comentada",
          language: "sql",
          code: `COMMENT ON TABLE public."Delivery" IS
'Entregas operacionais consumidas por API, admin, PWA e Android.
RLS habilitada; clientes finais acessam via API autenticada e realtime segue policies.
Cuidados: preservar histórico, escopo de loja, comprovantes e dados pessoais.';

DROP POLICY IF EXISTS "Authenticated delivery read" ON public."Delivery";
CREATE POLICY "Authenticated delivery read"
  ON public."Delivery" FOR SELECT
  TO authenticated
  USING (true);`
        },
        {
          title: "Paridade de rota entre PWA e Android",
          language: "kotlin",
          code: `fun buildGoogleMapsRouteUrl(stops: List<RouteStop>): String? {
  val navigableStops = stops.filter { it.hasAddressOrCoordinates() }
  if (navigableStops.isEmpty()) return null

  val segment = navigableStops.take(MAX_GOOGLE_MAPS_STOPS)
  return GoogleMapsUrlBuilder.fromSegment(segment)
}`
        }
      ]
    },
    predictmed: {
      title: "PredictMed",
      logo: logoPredictMed,
      impact: "Protótipo SaaS pessoal",
      desc: "Protótipo pessoal de predição de estoque para o setor de saúde. Usei Gemini Vision para implementar análise de prateleira, conciliação com estoque lógico e validação de fluxo de reabastecimento em ambiente controlado.",
      stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
      screenshots: [
        "/assets/screenshots/PredictMed/predictmed (1).png",
        "/assets/screenshots/PredictMed/predictmed (2).png",
        "/assets/screenshots/PredictMed/predictmed (3).png"
      ],
      details: {
        innovation: "Motor de auditoria com visão computacional para apoiar conferências de estoque e reduzir verificações manuais repetitivas.",
        strongPoints: ["Validação de fluxo de estoque", "Sincronia em tempo real validada", "Uso de Deno Edge em projeto pessoal"],
        architecture: "Arquitetura orientada a eventos com Supabase Realtime e Deno Edge, preparada para baixa latência e evolução incremental.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Orquestrar inferências de visão computacional com consistência de estado, segurança de dados e custo previsível.",
        topology: "React 19 -> Supabase Edge (Deno) -> Gemini Vision AI API -> PostgreSQL Realtime",
        url: "https://predictmed.web.app/",
        github: "https://github.com/beehgiovani/predictmed"
      },
      codeSnippets: [
        {
          title: "Lógica de Auditoria AI Vision (Edge)",
          language: "typescript",
          code: `// Integração Gemini Vision para Auditoria de Inventário Físico
serve(async (req) => {
  const { imageBase64, facilityId } = await req.json()
  const ai = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY"))
  const model = ai.getGenerativeModel({ model: "gemini-1.5-pro-vision" })
  
  const result = await model.generateContent([
    "Conte frascos críticos e identifique rupturas iminentes.",
    { inlineData: { data: imageBase64, mimeType: "image/jpeg" } }
  ])
  
  const predictedDeficit = result.response.text()
  if (predictedDeficit.includes("STOCKOUT_RISK_HIGH")) {
     await triggerAutomatedPurchaseOrder(facilityId, predictedDeficit)
  }
  return new Response(JSON.stringify({ status: 'analyzed' }))
})`
        },
        {
          title: "Orquestração Vision AI & Inventário Preditivo (Edge)",
          language: "typescript",
          code: `// Pipeline Reativo Deno Edge para Inferência Vision e Correção de Drift
serve(async (req) => {
  const { imageBase64, facilityId, currentSnap } = await req.json();
  const model = ai.getGenerativeModel({ model: "gemini-1.5-pro-vision" });
  
  // Prompt de Engenharia para Auditoria Submétrica
  const prompt = \`Analise a densidade volumétrica das prateleiras. 
                 Retorne JSON: {deficit: number, risk: 'LOW'|'HIGH', drift_detected: boolean}\`;
  
  const result = await model.generateContent([prompt, { inlineData: { data: imageBase64, mimeType: "image/jpeg" } }]);
  const analysis = JSON.parse(result.response.text());

  // Lógica de Resiliência: Corrige discrepâncias entre estoque lógico e físico
  if (analysis.drift_detected || analysis.risk === 'HIGH') {
    const atomicOp = await supabase.rpc('reconcile_and_order', {
      facility_id: facilityId,
      physical_count: analysis.deficit,
      logical_count: currentSnap.quantity
    });
    return new Response(JSON.stringify({ status: 'reconciled', op: atomicOp }));
  }
  return new Response(JSON.stringify({ status: 'stable' }));
})`
        },
        {
          title: "Fallback Matemático quando a IA Falha",
          language: "typescript",
          code: `export async function getSmartAISuggestion(input) {
  try {
    const result = await model.generateContent(promptFrom(input));
    const text = result.response.text().replace(/\`\`\`json|\`\`\`/g, "").trim();
    return JSON.parse(text);
  } catch {
    const qty = Math.ceil(
      input.avgDailyTurnover * input.targetDays * input.userAdjustmentFactor
    );
    return { suggestedQuantity: qty, reasoning: "Cálculo de segurança aplicado." };
  }
}`
        },
        {
          title: "Fila Cronológica para Upload Massivo",
          language: "typescript",
          code: `const sortedFiles = rawFiles.sort((a, b) => {
  const normalize = (name: string) => {
    const m = name.match(/(\\d{8})/);
    if (!m) return "";
    const d = m[1]; // DDMMYYYY
    return \`\${d.substring(4, 8)}\${d.substring(2, 4)}\${d.substring(0, 2)}\`;
  };
  return normalize(a.name).localeCompare(normalize(b.name));
});

const queue = sortedFiles.map(file => ({
  file,
  startDate: inferStartFromFilename(file.name),
  endDate: addHours(inferStartFromFilename(file.name), 24),
  status: "idle"
}));`
        }
      ]
    },
    lumen: {
      title: "LÚMEN | Spatial Drawing Engine",
      logo: logoLumen,
      impact: "Visão Computacional e Experiência Digital",
      desc: "Motor de desenho e som por gestos. Usei MediaPipe para rastrear mãos em 3D e transformar movimentos em arte neon com som procedimental, priorizando baixa latência e sensação natural de desenho.",
      stack: ["React 19", "MediaPipe Vision", "WebGL", "Sound Synthesis"],
      details: {
        innovation: "Algoritmo de estabilização de traço (Stability Ref) que utiliza velocidade e densidade de pontos para simular física de pincéis reais via visão computacional.",
        strongPoints: ["Rastreio Gestual de Baixa Latência", "Sintetizador Sonoro Procedimental", "Efeitos Visuais Bloom & Neon WebGL"],
        architecture: "Pipeline reativo de processamento de imagem que utiliza workers para inferência de IA e WebGL para renderização de alta fidelidade a 60fps.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Orquestrar o processamento de landmarks de IA em tempo real com a síntese de áudio contínua sem causar frames drops ou jitter sonoro.",
        topology: "MediaPipe (HandLandmarker) -> React 19 -> WebAudio Engine -> WebGL Canvas",
        github: "https://github.com/beehgiovani/lumen"
      },
      codeSnippets: [
        {
          title: "Processamento de Gestos & Suavização",
          language: "typescript",
          code: `// Algoritmo de suavização adaptativa para rastreio gestual
const processHandTracking = (landmarks, canvas) => {
  const rawX = (1 - landmarks[8].x) * canvas.width;
  const rawY = landmarks[8].y * canvas.height;
  
  const dist = Math.hypot(rawX - lastX, rawY - lastY);
  const velocity = clamp(dist / 30, 0, 1);
  
  // Fator de suavização dinâmico baseado na velocidade do gesto
  const smoothFactor = stability * (1 - (velocity * 0.85));
  const fx = (rawX * (1 - smoothFactor)) + (lastX * smoothFactor);
  const fy = (rawY * (1 - smoothFactor)) + (lastY * smoothFactor);
  
  return { fx, fy, pressure: 1 - velocity };
}`
        },
        {
          title: "Física de Traço & Síntese Sonora Procedimental",
          language: "typescript",
          code: `// Motor de Síntese Harmônica baseada em Vetores de Movimento
updateStrokeSound(handIdx, tool, speed, isDrawing) {
  const voice = this.activeVoices.get(handIdx) || this.createVoice(tool);
  const now = this.ctx.currentTime;
  
  // Mapeamento Logarítmico: Velocidade do Gesto -> Frequência de Oscilação
  const baseFreq = tool === 'LIGHTNING' ? 440 : 220;
  const targetFreq = baseFreq * Math.pow(2, (speed * 0.1) / 12);
  
  // Filtro Biquad para ressonância neon (Q-factor dinâmico)
  voice.osc.frequency.setTargetAtTime(targetFreq, now, 0.03);
  voice.filter.Q.value = 1 + (speed * 0.5);
  
  // Envelope ADSR adaptativo para evitar clicks na síntese
  voice.gain.gain.setTargetAtTime(Math.min(speed / 100, 0.3), now, 0.05);
  this.activeVoices.set(handIdx, voice);
}`
        },
        {
          title: "Estabilização Gestual (Kalman Filter Lite)",
          language: "typescript",
          code: `// Suavização preditiva para landmarks de Visão Computacional
const smoothPoint = (raw, last, stability) => {
  const dist = Math.hypot(raw.x - last.x, raw.y - last.y);
  const velocity = Math.min(dist / 30, 1);
  
  // Interpolação ponderada pela inércia do movimento
  const factor = stability * (1 - (velocity * 0.85));
  return {
    x: (raw.x * (1 - factor)) + (last.x * factor),
    y: (raw.y * (1 - factor)) + (last.y * factor)
  };
};`
        },
        {
          title: "Smoother Kotlin com Deadzone e Velocidade",
          language: "kotlin",
          code: `class PointSmoother(private val baseFactor: Float = 0.8f) {
    private var lastPoint: Point? = null
    private val deadzone = 0.002f

    fun smooth(current: Point): Point {
        val last = lastPoint ?: return current.also { lastPoint = it }
        val dist = hypot(current.x - last.x, current.y - last.y)
        if (dist < deadzone) return last

        val velocity = (dist / 0.05f).coerceIn(0f, 1f)
        val factor = baseFactor * (1f - (velocity * 0.7f))
        return Point(
            x = current.x * (1f - factor) + last.x * factor,
            y = current.y * (1f - factor) + last.y * factor
        ).also { lastPoint = it }
    }
}`
        },
        {
          title: "ViewModel Reativo por Gestos",
          language: "kotlin",
          code: `viewModelScope.launch {
    handStatus.collect { status ->
        status.hands.forEach { hand ->
            val tip = hand.indexTip ?: return@forEach
            when (hand.gesture) {
                Gesture.POINTING -> addPointUseCase(tip)
                Gesture.FIST -> repository.eraseAt(tip)
                Gesture.PINCH_ZOOM -> updateZoom(hand)
                Gesture.BACK_HAND -> clearIfHeld()
                else -> resetGestureState()
            }
            lastGestures[hand.id] = hand.gesture
        }
    }
}`
        }
      ]
    },
    guarugeo: {
      title: "GuaruGeo & Mapa Interativo",
      logo: logoGuarugeo,
      impact: "GIS e Inteligência de Dados",
      desc: "Projeto pessoal de sistema de informação geográfica (GIS) para dados imobiliários. Implementei indexação espacial no PostGIS, coleta de dados públicos, visualização em mapa e organização de lotes, endereços e camadas geográficas.",
      stack: ["PostGIS", "React 19", "Node.js", "Leaflet"],
      screenshots: [
        "/assets/screenshots/guarugeo/guarugeo (1).png",
        "/assets/screenshots/guarugeo/guarugeo (2).png",
        "/assets/screenshots/guarugeo/guarugeo (3).png"
      ],
      details: {
        innovation: "Motor GIS com intersecção espacial em PostGIS e cruzamento automatizado de dados públicos para apoiar inteligência imobiliária.",
        strongPoints: ["Indexação espacial avançada", "Mapas vetoriais em tempo real", "Dados 100% unificados"],
        architecture: "PostGIS no coração do sistema com middleware em Node.js entregando tudo pro React MapGL a 60fps.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Otimizar a renderização no navegador de mais de 18.000 polígonos detalhados mantendo uma interação impecável a 60fps em dispositivos comuns.",
        topology: "Next.js (Edge) -> Supabase -> PostGIS -> Python OSINT Crawlers",
        url: "https://guarujainterativo.com.br/",
        github: "https://github.com/beehgiovani/GuarujaInterativo"
      },
      codeSnippets: [
        {
          title: "Lógica de Intersecção Espacial",
          language: "javascript",
          code: `// PostGIS ST_Intersects otimizado para bounding boxes submétricos
const query = \`
  SELECT id, tax_id, ST_AsGeoJSON(geom) as geojson
  FROM properties 
  WHERE geom && ST_MakeEnvelope($1, $2, $3, $4, 4326)
    AND ST_Intersects(p.geom, ST_MakeEnvelope($1, $2, $3, $4, 4326))
  LIMIT 5000;\`;`
        },
        {
          title: "Motor de Intersecção Espacial de Alto Desempenho",
          language: "sql",
          code: `-- Consulta PostGIS Otimizada com Indexação GIST e Bounding Boxes
SELECT p.id, p.tax_id, ST_AsGeoJSON(p.geom) as geojson
FROM properties p
WHERE p.geom && ST_MakeEnvelope($1, $2, $3, $4, 4326)
  AND ST_Intersects(p.geom, ST_Buffer(ST_SetSRID(ST_Point($5, $6), 4326), 0.0001))
  AND p.status = 'AVAILABLE'
ORDER BY ST_Distance(p.geom, ST_SetSRID(ST_Point($5, $6), 4326))
LIMIT 100;`
        }
      ]
    },
    cimed_experience: {
      title: "Cimed Experience (PWA Gamificado)",
      logo: logoCimed,
      impact: "PWA gamificado pessoal",
      desc: "PWA pessoal com comportamento próximo ao nativo, missões gamificadas, interações em hub social e conceito de consultora de saúde por IA. O foco foi construir fluxos de usuário, geolocalização, ranking e UI de campanhas.",
      stack: ["React", "Supabase", "PWA", "Firebase"],
      screenshots: [
        "/assets/screenshots/cimed_experience/cimedExperience (1).png",
        "/assets/screenshots/cimed_experience/cimedExperience (2).png",
        "/assets/screenshots/cimed_experience/cimedExperience (3).png"
      ],
      details: {
        innovation: "Motor Drive-to-Store global utilizando Geo-Fencing e validação por QR para recompensar a advocacia da marca com benefícios reais tangíveis.",
        strongPoints: ["Leaderboards em Tempo Real", "Missões com Geo-validação Segura", "Implementação de Consultora de Saúde por IA"],
        architecture: "Arquitetura híbrida real-time utilizando Firebase para interações sociais e Supabase para persistência e validação de missões.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Manter transições de estado offline-online suaves e prevenir spoofing de validação em ambientes de varejo remotos com alto tráfego.",
        topology: "React (PWA) -> Firebase Cloud Functions -> Supabase Realtime",
        url: "https://cimedexperience.web.app/onboarding",
        github: "https://github.com/beehgiovani/portifolio"
      },
      codeSnippets: [
        {
          title: "Lógica de Geo-validação",
          language: "typescript",
          code: `// Validando presença do usuário em raio de 300m da loja
const distance = calculateDistance(userLocation, store.coords);
if (distance <= 300) {
  return await supabase.rpc('complete_mission', { mission_hash, user_id: auth.uid() });
}`
        }
      ]
    },
    metromargeo: {
      title: "MetroMarGeo Data Engine",
      logo: logoMetromargeo,
      impact: "OSINT e Engenharia de Dados",
      desc: "Motor de dados geoespaciais para captura, normalização e validação de informações públicas. O foco foi transformar bases dispersas em um dataset imobiliário consultável e confiável.",
      stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
      details: {
        innovation: "Pipeline híbrido que combina extração HTTP, normalização geoespacial e validações automatizadas para consolidar dados públicos com rastreabilidade.",
        strongPoints: ["Normalização geoespacial", "Extração WFS em lote", "Cruzamento tributário-dominial"],
        architecture: "Pipeline funcional com Python, GeoPandas e PostgreSQL para extração, normalização e validação de dados.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Padronizar fontes públicas instáveis, tratar formatos geográficos heterogêneos e preservar consistência entre coletas incrementais.",
        topology: "Python (AsyncIO) -> Validação de dados -> PostgreSQL Data Lake",
        github: "https://github.com/beehgiovani/SpLitoralScraping"
      },
      codeSnippets: [
        {
          title: "Coleta HTTP com sessão controlada",
          language: "python",
          code: `def fetch_public_dataset(session, url):
    response = session.get(url, timeout=30)
    response.raise_for_status()
    return response.json()`
        },
        {
          title: "Pipeline de Normalização Geospacial",
          language: "python",
          code: `def normalize_coords(raw_geojson):
    # Converte coordenadas WFS para GeoJSON padrão (4326)
    gdf = gpd.read_file(io.StringIO(raw_geojson))
    gdf = gdf.to_crs("EPSG:4326")
    return gdf.to_json()`
        },
        {
          title: "Validação de Geometria antes da Carga",
          language: "python",
          code: `def validate_geometry(gdf):
    valid = gdf[gdf.geometry.notna() & gdf.geometry.is_valid]
    valid["area_m2"] = valid.to_crs("EPSG:31983").area
    return valid`
        }
      ]
    },
    automacao_scraper: {
      title: "AutoScraper Core",
      logo: logoAutoScraper,
      impact: "Automação pessoal aplicada",
      desc: "Projeto pessoal de automação para extração de dados municipais, usando Playwright, experimentos com OCR e conceitos de rotação de IP para construir fluxos de scraping mais resilientes.",
      stack: ["Python", "PyTorch", "Tor", "Playwright"],
      details: {
        innovation: "Fluxo de automação com workers Playwright, experimentos de OCR e conceitos de rotação de IP para validar coleta robusta de dados.",
        strongPoints: ["Conceitos de rotação de IP", "Experimentos com OCR", "Fluxo de validação de dados"],
        architecture: "Sistema distribuído com configurações de portas Tor isoladas e threads de workers assíncronos enviando dados para uma camada central.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Manter o throughput do pipeline apesar da latência da rede Tor e gerenciar estados de sessão complexos em proxies rotacionados.",
        topology: "Playwright -> Cluster Tor -> Despachante AsyncIO",
        github: "https://github.com/beehgiovani/crawler---dados-publicos"
      },
      codeSnippets: [
        {
          title: "Multiplexador de Portas Tor",
          language: "python",
          code: `class TorScraper:
    def __init__(self, port):
        self.session.proxies = {'http': f'socks5h://127.0.0.1:{port}'}
    async def request(self, url):
        return self.session.get(url, timeout=90)`
        },
        {
          title: "Inferência OCR via PyTorch",
          language: "python",
          code: `def predict_captcha(image_tensor):
    # Modelo customizado treinado para fontes governamentais
    with torch.no_grad():
        output = model(image_tensor)
        return decode_ctc_output(output)`
        },
        {
          title: "Balanceador de Carga Tor & Multiplexação de Portas",
          language: "python",
          code: `# Orquestração de Conexões Isoladas para Bypass de WAF
async def fetch_with_proxy_rotation(target_urls):
    proxy_pool = [f'socks5h://127.0.0.1:{9050 + i}' for i in range(10)]
    semaphore = asyncio.Semaphore(5) # Limita concorrência para evitar detecção
    
    async with semaphore:
        proxy = random.choice(proxy_pool)
        connector = ProxyConnector.from_url(proxy)
        async with aiohttp.ClientSession(connector=connector) as session:
            return await session.get(url, headers=GENERIC_HEADERS)`
        },
        {
          title: "Sessão Persistente HTTP -> Playwright",
          language: "python",
          code: `class SessionManager:
    def update_from_response(self, response):
        for cookie in response.cookies.jar:
            self.cookies[cookie.name] = cookie.value
        self.last_used = datetime.now()

    def export_to_playwright(self):
        return [{
            "name": name,
            "value": value,
            "domain": ".geometrus.com.br",
            "path": "/",
            "httpOnly": True,
            "secure": True,
            "sameSite": "Lax"
        } for name, value in self.cookies.items()]`
        },
        {
          title: "Pool de Browsers com Limite de Memória",
          language: "python",
          code: `async def _monitor_resources(self):
    while True:
        await asyncio.sleep(30)
        memory_mb = psutil.Process().memory_info().rss / 1024 / 1024
        if memory_mb > self.memory_limit_mb:
            idle = [b for b in self.all_instances.values() if not b.in_use]
            if idle:
                await self._close_browser(idle[0])

def get_stats(self):
    return {
        "total_browsers": len(self.all_instances),
        "in_use": len(self.in_use),
        "available": self.available.qsize()
    }`
        }
      ]
    },
    niduscare: {
      title: "NidusCare",
      logo: logoNidusCare,
      impact: "Ecossistema de Saúde Digital",
      desc: "Projeto pessoal Android nativo para fluxos de cuidadores. Construído com arquitetura offline-first usando Room para implementar lembretes de medicação, persistência local e sincronia de atividades.",
      stack: ["Kotlin", "Android SDK", "Room", "Firebase"],
      details: {
        innovation: "Sistema de gestão de saúde local-first que garante a entrega de alarmes e adesão medicamentosa sem dependência constante de internet.",
        strongPoints: ["Persistência Offline-first", "Agendamento de Alarmes Complexos", "Compartilhamento Real-time de Cuidadores"],
        architecture: "Clean Architecture MVVM usando Kotlin Flow para gestão de estado reativo e Room para persistência local confiável.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Implementar alarmes de alta prioridade que permanecem ativos após reinicializações e sob otimizações agressivas de bateria do SO.",
        topology: "Android Nativo (Kotlin) -> Room DB -> Sincronia Firebase Cloud",
        github: "https://github.com/beehgiovani/NidusCare"
      },
      codeSnippets: [
        {
          title: "DAO Offline-First",
          language: "kotlin",
          code: `@Dao
interface MedicationDao {
    @Query("SELECT * FROM medications WHERE active = 1")
    fun getActiveMeds(): Flow<List<Medication>>
}`
        },
        {
          title: "Agendador de Alarmes de Alta Precisão",
          language: "kotlin",
          code: `fun scheduleMedicationAlarm(med: Medication) {
    val intent = Intent(context, AlarmReceiver::class.java)
    val pendingIntent = PendingIntent.getBroadcast(context, med.id, intent, FLAG_IMMUTABLE)
    alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, med.time, pendingIntent)
}`
        },
        {
          title: "Sincronização de Estado Reativo (Kotlin Flow + Room)",
          language: "kotlin",
          code: `// Pipeline Reativo para Gestão de Estado e Persistência Local
class MedicationRepository(private val dao: MedicationDao) {
    val activeMedications: Flow<Resource<List<Medication>>> = flow {
        emit(Resource.Loading())
        // Sincroniza cache local com fluxo de dados reativo do Room
        dao.getActiveMeds()
            .map { Resource.Success(it) }
            .collect { emit(it) }
    }.catch { e -> emit(Resource.Error(e.message)) }
     .flowOn(Dispatchers.IO)`
        },
        {
          title: "Verificação de Dose Perdida com Alarme Exato",
          language: "kotlin",
          code: `private fun scheduleMissedDoseCheck(
    medicamento: Medicamento,
    dependentId: String,
    scheduledTime: LocalDateTime
) {
    val checkTime = scheduledTime.plusMinutes(31)
    val intent = Intent(context, MissedDoseReceiver::class.java).apply {
        putExtra(EXTRA_MED_ID, medicamento.id)
        putExtra(EXTRA_DEP_ID, dependentId)
        putExtra(EXTRA_SCHEDULED_TIME, scheduledTime.toString())
    }
    alarmManager.setExactAndAllowWhileIdle(
        AlarmManager.RTC_WAKEUP,
        checkTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli(),
        PendingIntent.getBroadcast(context, requestCode, intent, flags)
    )
}`
        },
        {
          title: "Classificador de Aderência por Janela de Tempo",
          language: "kotlin",
          code: `val signedDifference = Duration
    .between(closestScheduledDateTime, doseDateTime)
    .toMinutes()

return when {
    currentDose.status == RecordedDoseStatus.SKIPPED -> SKIPPED
    minDifference > MAX_MATCH_MINUTES -> EXTRA
    signedDifference < -ON_TIME_WINDOW_MINUTES -> TOO_EARLY
    signedDifference > ON_TIME_WINDOW_MINUTES -> TOO_LATE
    else -> ON_TIME
}`
        }
      ]
    },
    pharmaflow: {
      title: "PharmaFlow Ecosystem",
      logo: logoPharmaFlow,
      impact: "Otimização de Supply Chain",
      desc: "Projeto pessoal de logística aplicado ao setor farmacêutico. Une telemetria Android nativa com um dashboard de operações React para rastreio de entregas e gestão de estoque em tempo real.",
      stack: ["Kotlin", "Firebase Realtime", "React Web"],
      details: {
        innovation: "Pipeline de telemetria GPS de alta frequência para sincronizar coordenadas de motoristas com baixa latência no hub operacional.",
        strongPoints: ["Rastreio de Frota Real-time", "Dedução Automática de Estoque", "Sincronia de Dados Cross-platform"],
        architecture: "Arquitetura orientada a eventos onde clientes mobile enviam atualizações de coordenadas para o Firebase, refletidas instantaneamente no dashboard.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Gerenciar atualizações GPS contínuas para centenas de motoristas simultâneos sem degradar a performance da bateria mobile.",
        topology: "Kotlin Android -> Firebase Realtime DB -> React Dashboard",
        github: "https://github.com/beehgiovani/PharmaFlow"
      },
      codeSnippets: [
        {
          title: "Telemetria Real-time",
          language: "kotlin",
          code: `fusedLocationClient.requestLocationUpdates(locationRequest, { result ->
    firebaseRef.child("drivers/$id/location").setValue(result.lastLocation)
}, Looper.getMainLooper())`
        },
        {
          title: "Sincronização de Inventário em Trânsito",
          language: "kotlin",
          code: `fun syncStock(orderId: String, items: List<Item>) {
    // Commit atômico para evitar discrepâncias em conexões instáveis
    db.runTransaction {
        updateLocalStock(items)
        pushToRemote(orderId, items)
    }
}`
        },
        {
          title: "Isolamento de Transação Concorrente & Atomicidade",
          language: "sql",
          code: `-- Validando Integridade de Inventário em Operações Concorrentes
BEGIN;
  -- Bloqueia a linha para evitar 'Double Spending' de itens
  SELECT current_stock FROM inventory WHERE item_id = $1 FOR UPDATE;
  
  UPDATE inventory 
  SET current_stock = current_stock - $2, 
      last_sync = NOW()
  WHERE item_id = $1 AND current_stock >= $2;
COMMIT;`
        }
      ]
    },
    certidoesapp: {
      title: "AutoJuris AI",
      logo: logoCertibot,
      impact: "Automação Legal Tech",
      desc: "Projeto pessoal de automação para documentos legais. Usa navegação headless, preenchimento de formulários e chamadas estruturadas de API para implementar fluxos de solicitação de certidões e tratamento de erros.",
      stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
      details: {
        innovation: "Engenharia reversa de infraestruturas públicas de documentos para transformar processos burocráticos manuais em chamadas de API instantâneas.",
        strongPoints: ["Automação com Headless Browser", "Extração de Tokens Stateful", "Orquestração de Jobs Async"],
        architecture: "Backend serverless (Deno) gerenciando clusters de navegadores headless que navegam em portais legados e retornam dados estruturados em PDF.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Manter estabilidade de sessão, tratamento de erros e rastreabilidade em portais legados com comportamento instável.",
        topology: "Deno Deploy -> Headless Puppeteer -> Supabase Storage",
        github: "https://github.com/beehgiovani/CertidaoGuaru"
      },
      codeSnippets: [
        {
          title: "Navegação Headless de Documentos",
          language: "typescript",
          code: `async function fetchCertificate(portalUrl, credentials) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(portalUrl);
  await page.type('#login', credentials.user);
  await page.click('#submit');
  return await page.pdf();
}`
        },
        {
          title: "Engine de Validação de Token PDF",
          language: "javascript",
          code: `// Extração de metadados para garantir autenticidade do documento
const verifyPdf = async (buffer) => {
  const data = await pdfParse(buffer);
  return data.text.includes(VALIDATION_HASH_PATTERN);
};`
        },
        {
          title: "Whitelist de Parâmetros por Certidão",
          language: "typescript",
          code: `const allowedParams = certidao.allowedParams || [];
const filteredParams = {};

for (const [key, value] of Object.entries(params)) {
  if (key !== "timeout" && value) {
    if (allowedParams.length === 0 || allowedParams.includes(key)) {
      filteredParams[key] = value;
      formData.append(key, String(value));
    }
  }
}`
        },
        {
          title: "Cliente Modular com Fallback de Erro",
          language: "javascript",
          code: `async requestCertidao(certId, params) {
  try {
    const response = await fetch(\`\${INFOSIMPLES_API_URL}?action=request_certidao\`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: bearerToken },
      body: JSON.stringify({ certidao_id: certId, params })
    });
    return await response.json();
  } catch (e) {
    return { success: false, error: e.message };
  }
}`
        }
      ]
    },
    litoral: {
      title: "Litoral Moveis e Colchoes",
      logo: logoLitoral,
      impact: "Projeto pessoal Monorepo / PWA",
      desc: "Monorepo local para construir um PWA de loja de moveis com app do cliente, painel interno da loja, contratos compartilhados e camada local sem backend ativo nesta fase.",
      stack: ["React", "TypeScript", "Vite", "LocalStorage", "Vitest", "Docker", "Monorepo"],
      screenshots: [
        "/assets/screenshots/litoral/logoapp.png",
        "/assets/screenshots/litoral/hero-cliente.png",
        "/assets/screenshots/litoral/hero-loja.png"
      ],
      details: {
        innovation: "Separacao entre app do cliente, app da loja e pacotes compartilhados para estruturar contrato de dominio, fluxo local e futura evolucao para banco/hosting.",
        strongPoints: ["Apps cliente e loja", "Pacotes domain e local-data", "Importacao/exportacao JSON", "Filas locais de orcamentos e agendamentos", "Validacao com lint, typecheck, testes e build"],
        architecture: "Monorepo com apps/cliente, apps/loja, packages/domain e packages/local-data. A fase atual usa localStorage e arquivos JSON como ponte local entre vitrine, catalogo, promocoes, atendimento e mensagens rapidas.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar organizacao de monorepo, contratos compartilhados, UX operacional, validacao de dados locais e preparacao gradual para uma futura camada de banco, sem representar vinculo profissional formal.",
        technicalChallenges: "Manter cliente e loja separados sem duplicar tipos, validar imports JSON, preservar dados locais existentes e organizar a evolucao futura para Supabase/RLS sem travar a fase local.",
        topology: "apps/cliente + apps/loja -> packages/domain + packages/local-data -> localStorage/JSON -> schema SQL futuro",
        github: "https://github.com/beehgiovani/Litoral-Moveis-e-Colchoes"
      },
      codeSnippets: [
        {
          title: "Contrato compartilhado de produto",
          language: "typescript",
          code: `export type ProductSummary = {
  id: string
  categorySlug: CatalogCategorySlug
  name: string
  description: string
  visibility: ProductVisibility
  showPrice: boolean
  priceInCents: number | null
  variants?: ProductVariantSummary[]
  createdAt: string
  updatedAt: string
}`
        },
        {
          title: "Snapshots locais versionados",
          language: "typescript",
          code: `export const localCatalogStorageKey = 'litoral.local.catalog.v1'
export const localQuoteRequestsStorageKey = 'litoral.local.quote-requests.v1'
export const localAppointmentRequestsStorageKey = 'litoral.local.appointment-requests.v1'
export const localStorefrontExportFileName = 'litoral-vitrine-local.json'

export type LocalStorefrontSnapshot = {
  catalog: LocalCatalogSnapshot
  promotions: LocalPromotionsSnapshot
  updatedAt: string | null
}`
        },
        {
          title: "Validacao local antes de importar",
          language: "typescript",
          code: `async function handleCatalogImport(event: ChangeEvent<HTMLInputElement>) {
  const file = event.target.files?.[0]
  if (!file) return

  const text = await file.text()
  const parseResult = parseLocalCatalogSnapshot(text)
  if (!parseResult.isValid) {
    setCatalogImportMessage('Arquivo invalido. Catalogo local mantido.')
    return
  }

  persistLocalCatalogSnapshot(parseResult.snapshot)
}`
        }
      ]
    },    cachetaburaco: {
      title: "Cacheta & Buraco",
      logo: logoCachetaBuraco,
      impact: "Projeto pessoal Android / Kotlin",
      desc: "Jogo Android em Kotlin e Jetpack Compose para implementar regras de Cacheta, Buraco e Tranca, com modo local, partida contra a maquina, salas em rede Wi-Fi e base preparada para evoluir para online.",
      stack: ["Kotlin", "Jetpack Compose", "Material 3", "Coroutines", "NSD", "Socket TCP", "JUnit"],
      screenshots: [
        "/assets/screenshots/cachetaburaco/feature-graphic-1024x500.png",
        "/assets/screenshots/cachetaburaco/01-login-1920x1080.png",
        "/assets/screenshots/cachetaburaco/02-menu-1920x1080.png",
        "/assets/screenshots/cachetaburaco/03-partida-1920x1080.png",
        "/assets/screenshots/cachetaburaco/04-vitoria-ranking-1920x1080.png"
      ],
      details: {
        innovation: "Motor de regras separado da UI e da rede, permitindo usar a mesma validacao em partida local, contra bot, rede Wi-Fi e futuro modo online.",
        strongPoints: ["Cacheta, Buraco e Tranca", "Host autoritativo para monte e mortos", "Rede local via NSD + socket TCP", "Bot local usando o mesmo protocolo", "Assets de Play Store preparados"],
        architecture: "App Android nativo em Kotlin/Compose com modelos de dominio puros, GameRulesEngine para regras, MatchViewModel coordenando a mesa e LocalNetworkRepository como contrato de transporte.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar arquitetura mobile, regras de dominio, sincronizacao de estado, multiplayer local, testes unitarios e preparacao de assets para publicacao, sem representar vinculo profissional formal.",
        technicalChallenges: "Separar dados privados e publicos da mesa, manter o host como fonte oficial do monte, sincronizar quantidade de cartas, lixo e mortos entre jogadores, e preservar uma base reaproveitavel para online.",
        topology: "Compose UI -> MatchViewModel -> GameRulesEngine + LocalNetworkRepository -> NSD/TCP ou SoloBotNetworkRepository",
        github: "https://github.com/beehgiovani/CachetaBuraco"
      },
      codeSnippets: [
        {
          title: "Estado unico observado pela mesa",
          language: "kotlin",
          code: `data class GameState(
    val myHand: List<Card> = emptyList(),
    val discardPile: List<Card> = emptyList(),
    val opponentHandCount: Int = 0,
    val deckSize: Int = 0,
    val mortosLeft: Int = 0,
    val activeSeat: Int = 0,
    val turnPhase: TurnPhase = TurnPhase.WAITING_OPPONENT,
    val config: MatchConfig = MatchConfig()
)`
        },
        {
          title: "Contrato de rede reaproveitavel",
          language: "kotlin",
          code: `interface LocalNetworkRepository {
    val discoveredRooms: StateFlow<List<DiscoveredRoom>>
    val connectedClientsCount: StateFlow<Int>
    val incomingMessages: SharedFlow<NetworkMessage>
    val connectionStatus: StateFlow<ConnectionStatus>

    fun startHosting(playerName: String, port: Int = 9090, config: MatchConfig? = null)
    fun connectToRoom(host: String, port: Int)
    fun sendMessage(message: NetworkMessage)
    fun sendMessageToPlayer(playerId: String, message: NetworkMessage): Boolean
}`
        },
        {
          title: "Sincronizacao publica da mesa",
          language: "kotlin",
          code: `private fun buildPublicTableStatePayload(): String {
    val state = gameState.value
    val handCounts = JSONArray().apply {
        repeat(currentConfig.maxPlayers.coerceAtLeast(2)) { seat ->
            put(publicHandCountForSeat(seat, state))
        }
    }

    return JSONObject()
        .put("activeSeat", state.activeSeat)
        .put("deckSize", state.deckSize)
        .put("discardCount", state.discardPile.size)
        .put("mortosLeft", state.mortosLeft)
        .put("handCounts", handCounts)
        .toString()
}`
        },
        {
          title: "Regra centralizada para compra do lixo",
          language: "kotlin",
          code: `fun canDrawFromDiscard(topDiscard: Card?, config: MatchConfig): DrawDiscardResult {
    if (topDiscard == null) return DrawDiscardResult(false, "Lixo vazio")
    if (!config.allowDrawFromDiscard) return DrawDiscardResult(false, "Compra do lixo desabilitada")

    return when (config.gameType) {
        GameType.CACHETA -> DrawDiscardResult(true)
        GameType.BURACO -> if (topDiscard.isJoker) DrawDiscardResult(false, "Curinga bloqueado") else DrawDiscardResult(true)
        GameType.TRANCA -> validateTrancaDiscard(topDiscard)
    }
}`
        }
      ]
    },    marketposter: {
      title: "MarketPoster",
      logo: logoMarketPoster,
      impact: "Empoderamento no Varejo",
      desc: "Projeto pessoal Android para design dinâmico de cartazes. Inclui OpenCV em C++ e remoção de fundo via ML offline, eliminando a necessidade de terceirização de design.",
      stack: ["Kotlin", "OpenCV", "ML Kit", "Android Nativo"],
      details: {
        innovation: "Remoção de fundo por IA on-device e capacidades de design gráfico profissional localizadas para operações de varejo ao nível da filial.",
        strongPoints: ["Segmentação ML Offline", "Integração Nativa OpenCV C++", "Impressão Direta em Rede"],
        architecture: "App nativo de alta intensidade de recursos utilizando ML Kit para análise de imagem e bibliotecas OpenCV C++ para renderização gráfica de alta fidelidade.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Otimizar modelos ML e processamento de imagem C++ para rodar suavemente em tablets Android sem lag na interface.",
        topology: "Android Nativo -> ML Kit -> OpenCV C++ -> Impressão em Rede",
        github: "https://github.com/beehgiovani/MarketPoster"
      },
      codeSnippets: [
        {
          title: "Segmentação de Assuntos ML",
          language: "kotlin",
          code: `segmenter.process(image).addOnSuccessListener { result ->
    val mask = result.foregroundConfidenceMask
    val processedBitmap = applyMask(original, mask)
}`
        },
        {
          title: "Renderização Nativa com OpenCV",
          language: "cpp",
          code: `// Processamento JNI para renderizacao grafica
void processFrame(Mat& frame) {
    cvtColor(frame, frame, COLOR_BGR2GRAY);
    GaussianBlur(frame, frame, Size(7,7), 1.5);
    Canny(frame, frame, 0, 30, 3);
}`
        }
      ]
    },
    interactivemap: {
      title: "Mapa Interativo - Jardim Acapulco",
      logo: logoAcapulco,
      impact: "Mapa interativo pessoal",
      desc: "Mapa imobiliário interativo pessoal com visualização dinâmica de lotes e atualização administrativa de status. O foco foi implementar renderização de mapa, mudanças de estado dos lotes e uma experiência visual bem acabada.",
      stack: ["React", "TypeScript", "Vite", "Firebase"],
      screenshots: [
        acapulco1,
        acapulco2,
        acapulco3
      ],
      details: {
        innovation: "Motor de mapeamento baseado em SVG dinâmico que substitui servidores GIS pesados por camadas reativas leves para feedback instantâneo.",
        strongPoints: ["Velocidade de Interação 60fps", "Moderação de Lotes Real-time", "Performance CSR Otimizada"],
        architecture: "Motor de mapeamento client-side construído em React e Leaflet, comunicando via estado JSON Firebase otimizado para pular servidores pesados.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Renderizar overlays GeoJSON reativos mantendo scroll e zoom estÃ¡veis no navegador.",
        topology: "React -> Híbrido SVG/Leaflet -> Firebase Realtime",
        github: "https://github.com/beehgiovani/InteractiveMap"
      },
      codeSnippets: [
        {
          title: "Renderização de Performance de Lotes",
          language: "typescript",
          code: `const LotPolygon = React.memo(({ lot }) => {
    const path = useMemo(() => generateSVGPath(lot.coords), [lot.coords]);
    return <path d={path} fill="transparent" stroke="rgba(0,0,0,0.1)" />
})`
        },
        {
          title: "Sincronização de Estado de Lote Real-time",
          language: "javascript",
          code: `onValue(ref(db, 'lots/'), (snapshot) => {
  const data = snapshot.val();
  // Projetos encerradosiza apenas os polígonos que mudaram de status
  updateLotLayers(data);
});`
        }
      ]
    },
    emailmonitor: {
      title: "Lead Webhook Monitor",
      logo: logoEmailMonitor,
      impact: "Captura Automática de Leads",
      desc: "Projeto pessoal de automação para captura de contatos via parsing de IMAP. Usa regras estruturadas para organizar mensagens e validar envio para webhooks em estilo CRM.",
      stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
      details: {
        innovation: "Roteamento de dados com baixa latência, convertendo texto de e-mail bruto em entradas limpas de CRM automaticamente.",
        strongPoints: ["Extrações Robustas com Regex", "Monitoramento Contínuo IMAP", "Integração de Webhooks Supabase"],
        architecture: "Serviço independente de monitoramento em Python processando corpos de e-mail e disparando sincronizações de banco em tempo real via Supabase.",
        businessImpact: "Projeto pessoal funcional usado para demonstrar levantamento de requisitos, modelagem de dados, integrações, estados de interface e validação de fluxos completos sem representar vínculo profissional formal.",
        technicalChallenges: "Manter conexões IMAP estáveis com provedores legados e lidar com formatos de e-mail inconsistentes através de regex.",
        topology: "Python (Ouvinte IMAP) -> Sync Supabase -> Webhook CRM",
        github: "https://github.com/beehgiovani/guaruja-email-monitor"
      },
      codeSnippets: [
        {
          title: "Ouvinte IMAP de Leads",
          language: "python",
          code: `while True:
    status, messages = mail.search(None, '(UNSEEN)')
    for num in messages[0].split():
        raw = mail.fetch(num, '(RFC822)')[1][0][1]
        lead = parse_regex(raw)
        if lead: supabase.table('leads').insert(lead).execute()`
        },
        {
          title: "Extrator de Leads via Regex",
          language: "python",
          code: `def extract_lead(body):
    patterns = {
        'name': r'Nome:\\s*(.*)',
        'phone': r'Telefone:\\s*(\\d+)',
        'origin': r'Fonte:\\s*(.*)'
    }
    return {k: re.search(v, body).group(1) for k, v in patterns.items()}`
        },
        {
          title: "Roteamento de Anexos por CPF/CNPJ",
          language: "python",
          code: `def get_dest_folder(filename, subject="", body=""):
    text = f"{filename} {subject} {body}"
    clean = lambda s: re.sub(r"[^0-9]", "", s)

    patterns = [
        r"\\b\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}\\b",
        r"\\b\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}\\b",
        r"(?:CPF|CNPJ)[^:]*:\\s*([\\d\\.\\-/]+)",
        r"\\b\\d{11,14}\\b"
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            return clean(match.group(1) if match.groups() else match.group(0))
    return "Inbox_Unsorted"`
        },
        {
          title: "Upload + Limpeza de Placeholders",
          language: "python",
          code: `supabase.storage.from_("certidoes_juridicas").upload(
    filepath,
    pdf_content,
    {"content-type": "application/pdf", "upsert": "true"}
)

existing = supabase.storage.from_("certidoes_juridicas").list(doc_folder)
files_to_remove = [
    f"{doc_folder}/{f['name']}" for f in existing
    if f.get("name", "").lower().endswith(".html")
]
if files_to_remove:
    supabase.storage.from_("certidoes_juridicas").remove(files_to_remove)`
        }
      ]
    }
  },
  skills: {
    java: "Sistemas Reativos JVM (Java/Kotlin, Spring Boot 3, Hibernate, Micronaut, Clean Architecture, Design Patterns)",
    react: "Ecossistema React 19 (TypeScript, gerenciamento de estado, Next.js, otimização de performance, PWAs)",
    spring: "Engenharia de Dados & DBAs (PostgreSQL Avançado, PostGIS, Indexação Espacial, Pandas, Big Data Pipelines)",
    python: "Inteligência Artificial & Automação (PyTorch, Modelos OCR Customizados, OpenCV, Visão Computacional, Scrapers Headless)",
    cloud: "Arquitetura Cloud & Edge (Deno Edge Functions, Supabase Realtime, AWS S3/EC2, Firebase Serverless, CI/CD)",
    gis: "Geo-Inteligência Aplicada (GeoServer WFS/WMS, QGis Desktop/Server, GeoJSON, Leaflet Integration)",
    arch: "Design Systems & Micro-frontends (Organização de componentes, Storybook, prática de UI/UX)",
    node: "Mobile Nativo & Kotlin Flow (Arquiteturas Android MVVM/MVI, Room DB, Coroutines, Jetpack Compose, Bluetooth Low Energy)"
  },
  certs: data.certifications,
  footer: {
    salary: data.career.salary_expectation_pt,
    availability: data.career.availability_pt,
    languages: data.career.languages_pt
  },
  contact: {
    phone: "+55 (13) 99205-8836",
    email: "brunoadmin@guarujainterativo.com.br",
    linkedin: "https://www.linkedin.com/in/beehgiovani/",
    github: "https://github.com/beehgiovani/"
  },
  dialog: {
    title: "Apresentação Profissional",
    message: "Construo projetos com foco em organização, segurança, aprendizado prático e evolução constante. Selecione o resumo profissional localizado para a região de interesse.",
    btnEn: "Manter Inglês",
    btnPt: "Mudar para Português"
  }
}
