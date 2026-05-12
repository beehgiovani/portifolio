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
import acapulco1 from '../assets/screenshots/interactivemap/acapulco_1.png'
import acapulco2 from '../assets/screenshots/interactivemap/acapulco_2.png'
import acapulco3 from '../assets/screenshots/interactivemap/acapulco_3.png'
import data from '../portfolio.data.json'

export const pt = {
  hero: {
    greeting: "Bruno Giovani",
    role: "Engenheiro de Software (Pleno/Sênior) | Arquiteto de Soluções",
    years: "6+ Anos de Engenharia de Sistemas Críticos",
    tagline: "Desenvolvo ecossistemas digitais de alta escala com foco em disponibilidade, baixa latência e impacto mensurável no negócio. Atuo de geo-inteligência e microsserviços a IA aplicada, sempre conectando arquitetura técnica com resultado operacional.",
    cta: "Conheça minha jornada"
  },
  sections: {
    projects: "Projetos & Casos Reais",
    skills: "Minha Stack & O que eu domino",
    experience: "Minha Jornada",
    certifications: "Certificados",
    contact: "Vamos conversar?"
  },
  experience: [
    { date: "Mar 2026 - Presente", role: "Front-End Lead Developer | PredictMed", desc: "Liderando o front de plataformas de saúde que usam IA pra prever estoque. Aqui eu implemento arquiteturas que não falham, usando Supabase e Gemini Vision pra automatizar auditorias de inventário." },
    { date: "Jan 2024 - Presente", role: "Engenheiro de Software (Pleno/Sênior) | Soo Tech", desc: "Foco total em ecossistemas JVM complexos. Desenvolvo microsserviços resilientes com Spring Boot, garantindo que o sistema aguente alto volume de dados sem perder a performance." },
    { date: "2023 - Presente", role: "Arquiteto & Fundador | GuaruGeo", desc: "Criei do zero uma infraestrutura GIS soberana. Integrei PostGIS com mineradores de dados pra entregar inteligência imobiliária com precisão de centímetros." }
  ],
  projects: {
    predictmed: {
      title: "PredictMed",
      logo: logoPredictMed,
      impact: "Ecossistema SaaS de Alta Disponibilidade",
      desc: "Minha solução pra predição de estoque no setor de saúde. Eu usei Gemini Vision pra criar uma auditoria autônoma: o sistema olha pro que tem na prateleira e bate com o estoque lógico, automatizando o reabastecimento antes que o medicamento falte.",
      stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
      screenshots: [
        "/assets/screenshots/PredictMed/predictmed (1).png",
        "/assets/screenshots/PredictMed/predictmed (2).png",
        "/assets/screenshots/PredictMed/predictmed (3).png"
      ],
      details: {
        innovation: "Motor de auditoria com visão computacional para apoiar conferências de estoque e reduzir verificações manuais repetitivas.",
        strongPoints: ["98% de precisão na prevenção de falta de itens", "Sincronia em tempo real (menos de 1s)", "Infra de alta performance no Edge (Deno)"],
        architecture: "Arquitetura orientada a eventos com Supabase Realtime e Deno Edge, preparada para baixa latência e evolução incremental.",
        businessImpact: "Consegui reduzir o atraso no ressuprimento em 92%. A ideia foi automatizar a visão das prateleiras, o que gerou uma economia bruta estimada de R$ 200k/ano por unidade, permitindo que os farmacêuticos foquem no que importa e não em contar frascos.",
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
        businessImpact: "Explora novas fronteiras de IHC (Interação Humano-Computador), eliminando a barreira física do mouse/touch. Aplicável em museus interativos, ferramentas de design imersivo e reabilitação motora através da gamificação artística.",
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
      desc: "Sistema de informação geográfica (GIS) que eu criei do zero pra imobiliárias. O diferencial aqui é a indexação espacial no PostGIS e os robôs que eu fiz pra minerar dados públicos e entregar inteligência 10x mais rápido que qualquer portal oficial.",
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
        businessImpact: "O resultado foi um corte de 60% no tempo de prospecção. Ter todos os dados tributários e de propriedade unificados deu uma assertividade absurda na hora de decidir onde investir.",
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
      impact: "Engajamento & Conversão",
      desc: "PWA com comportamento nativo desenhado para converter influência orgânica da marca em vendas em lojas físicas. Orquestra campanhas globais via hub social interativo e consultora de saúde por IA, unindo o engajamento digital à visitação real.",
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
        businessImpact: "Maximizou o LTV (Lifetime Value) dos consumidores através de uma jornada gamificada que converteu 35% da audiência digital em tráfego qualificado para pontos de venda físicos. A integração de IA para consultoria de saúde personalizada gerou um aumento de 22% no ticket médio durante as campanhas ativas.",
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
        architecture: "Pipeline de extração assíncrona multi-fase com Python, GeoPandas e PostgreSQL para normalização de dados em alto volume.",
        businessImpact: "Desbloqueou o acesso a ativos de dados governamentais 'escuros', criando o maior dataset estruturado de inteligência costeira do estado. Esta infraestrutura de dados permitiu a automação de due diligence imobiliária, reduzindo custos de auditoria externa em 75% e acelerando o fechamento de contratos complexos.",
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
      impact: "Automação de Alta Escala",
      desc: "Orquestrador de bots distribuídos para extração massiva de dados municipais. Supera WAFs via multiplexação de IPs Tor e modelos OCR treinados em PyTorch, alcançando mais de 100 mil registros por hora.",
      stack: ["Python", "PyTorch", "Tor", "Playwright"],
      details: {
        innovation: "Camada de orquestração master-worker que multiplexa threads de execução Tor para derrotar rate-limiting e firewalls baseados em IP.",
        strongPoints: ["Rotação de IP via Rede Tor", "Precisão de OCR Treinado Nativo", "Capacidade de 100k+ Registros/Hora"],
        architecture: "Sistema distribuído com configurações de portas Tor isoladas e threads de workers assíncronos enviando dados para uma camada central.",
        businessImpact: "Escalou a capacidade de monitoramento de mercado em 500%, processando volumes massivos de dados distribuídos com 99.9% de uptime. A rotação inteligente de proxies e OCR neural local eliminou dependências de provedores externos, reduzindo o OPEX de aquisição de dados em 90%.",
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
      desc: "Companheiro de saúde nativo Android para cuidadores. Construído com arquitetura offline-first (Room), garantindo que lembretes de medicação e sincronia de atividades nunca falhem.",
      stack: ["Kotlin", "Android SDK", "Room", "Firebase"],
      details: {
        innovation: "Sistema de gestão de saúde local-first que garante a entrega de alarmes e adesão medicamentosa sem dependência constante de internet.",
        strongPoints: ["Persistência Offline-first", "Agendamento de Alarmes Complexos", "Compartilhamento Real-time de Cuidadores"],
        architecture: "Clean Architecture MVVM usando Kotlin Flow para gestão de estado reativo e Room para persistência local confiável.",
        businessImpact: "Estabeleceu um novo padrão de segurança em cuidados domiciliares, alcançando 100% de adesão a protocolos de medicação críticos via arquitetura offline-resiliente. A precisão dos dados coletados permitiu uma redução de 15% em reinternações hospitalares por erro de manejo medicamentoso.",
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
      desc: "Solução logística para o setor farmacêutico. Une telemetria Android nativa com um dashboard de operações React para rastreio de entregas e gestão de estoque em tempo real.",
      stack: ["Kotlin", "Firebase Realtime", "React Web"],
      details: {
        innovation: "Pipeline de telemetria GPS de alta frequência para sincronizar coordenadas de motoristas com baixa latência no hub operacional.",
        strongPoints: ["Rastreio de Frota Real-time", "Dedução Automática de Estoque", "Sincronia de Dados Cross-platform"],
        architecture: "Arquitetura orientada a eventos onde clientes mobile enviam atualizações de coordenadas para o Firebase, refletidas instantaneamente no dashboard.",
        businessImpact: "Otimizou a logística de última milha com visibilidade total do supply chain, reduzindo o tempo médio de entrega em 25% e zerando discrepâncias de estoque em trânsito. A telemetria real-time permitiu a redução de custos de combustível e manutenção de frota em 12% através da otimização de rotas dinâmica.",
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
          code: `-- Garantindo Integridade de Inventário sob Alta Concorrência
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
      desc: "Portal de documentos legais para extração burocrática rápida. Usa navegadores headless e engenharia reversa de APIs para reduzir o tempo de emissão de dias para menos de 60 segundos.",
      stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
      details: {
        innovation: "Engenharia reversa de infraestruturas públicas de documentos para transformar processos burocráticos manuais em chamadas de API instantâneas.",
        strongPoints: ["Automação com Headless Browser", "Extração de Tokens Stateful", "Orquestração de Jobs Async"],
        architecture: "Backend serverless (Deno) gerenciando clusters de navegadores headless que navegam em portais legados e retornam dados estruturados em PDF.",
        businessImpact: "Democratizou o acesso a certidões complexas, transformando processos de 5 dias úteis em transações instantâneas de 60 segundos. Esta agilidade operacional permitiu a imobiliárias e bancos acelerarem processos de financiamento, desbloqueando milhões em capital estagnado por burocracia.",
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
    marketposter: {
      title: "MarketPoster",
      logo: logoMarketPoster,
      impact: "Empoderamento no Varejo",
      desc: "App Android profissional para design dinâmico de cartazes. Inclui OpenCV em C++ e remoção de fundo via ML offline, eliminando a necessidade de terceirização de design.",
      stack: ["Kotlin", "OpenCV", "ML Kit", "Android Nativo"],
      details: {
        innovation: "Remoção de fundo por IA on-device e capacidades de design gráfico profissional localizadas para operações de varejo ao nível da filial.",
        strongPoints: ["Segmentação ML Offline", "Integração Nativa OpenCV C++", "Impressão Direta em Rede"],
        architecture: "App nativo de alta intensidade de recursos utilizando ML Kit para análise de imagem e bibliotecas OpenCV C++ para renderização gráfica de alta fidelidade.",
        businessImpact: "Descentralizou a produção criativa, economizando centenas de horas-homem por mês em mais de 100 unidades de varejo. A eliminação de custos de outsourcing e a velocidade de resposta a mudanças de preço no PDV resultaram em um aumento de 8% na conversão de produtos em promoção.",
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
          code: `// Processamento JNI para alta performance gráfica
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
      impact: "Visualização de Alto Luxo",
      desc: "Mapa imobiliário imersivo com visualização dinâmica de lotes e moderação administrativa em tempo real. Entrega uma experiência impecável de 60fps para clientes de alto luxo.",
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
        businessImpact: "Transformou a experiência de vendas de ativos de alto luxo, proporcionando uma ferramenta de visualização imersiva que reduziu o ciclo de decisão do cliente em 30%. A transparência de dados em tempo real eliminou conflitos de reserva de lotes e aumentou a confiança do investidor premium.",
        technicalChallenges: "Renderizar centenas de overlays GeoJSON reativos mantendo alta performance de scroll e zoom no navegador.",
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
  // Atualiza apenas os polígonos que mudaram de status
  updateLotLayers(data);
});`
        }
      ]
    },
    emailmonitor: {
      title: "Lead Webhook Monitor",
      logo: logoEmailMonitor,
      impact: "Captura Automática de Leads",
      desc: "Pipeline autônomo para captura de leads via parsing de IMAP. Usa regras estruturadas para rotear contatos para webhooks de CRM com baixa latência.",
      stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
      details: {
        innovation: "Roteamento de dados com baixa latência, convertendo texto de e-mail bruto em entradas limpas de CRM automaticamente.",
        strongPoints: ["Extrações Robustas com Regex", "Monitoramento Contínuo IMAP", "Integração de Webhooks Supabase"],
        architecture: "Serviço independente de monitoramento em Python processando corpos de e-mail e disparando sincronizações de banco em tempo real via Supabase.",
        businessImpact: "Erradicou o vazamento de leads em 100% ao automatizar a captura de dados de fontes legadas (e-mail) para CRMs modernos. A resposta instantânea a novos leads aumentou a taxa de contato bem-sucedido em 40%, impactando diretamente o pipeline de vendas e o ROI de marketing.",
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
    react: "Ecossistema React 19 (TypeScript, State Management Complexo, Next.js, Performance Optimization, PWAs de alta escala)",
    spring: "Engenharia de Dados & DBAs (PostgreSQL Avançado, PostGIS, Indexação Espacial, Pandas, Big Data Pipelines)",
    python: "Inteligência Artificial & Automação (PyTorch, Modelos OCR Customizados, OpenCV, Visão Computacional, Scrapers Headless)",
    cloud: "Arquitetura Cloud & Edge (Deno Edge Functions, Supabase Realtime, AWS S3/EC2, Firebase Serverless, CI/CD)",
    gis: "Geo-Inteligência de Missão Crítica (GeoServer WFS/WMS, QGis Desktop/Server, GeoJSON, Leaflet Integration)",
    arch: "Design Systems & Micro-frontends (Resiliência, Escalabilidade Horizontal, Storybook, UI/UX de Alto Luxo)",
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
    title: "Apresentação Executiva",
    message: "Construo plataformas pautadas em escala, segurança e resiliência máxima. Selecione o resumo executivo localizado para a região de interesse.",
    btnEn: "Manter Inglês",
    btnPt: "Mudar para Português"
  }
}
