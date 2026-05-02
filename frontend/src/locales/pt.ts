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
import acapulco1 from '../assets/screenshots/interactivemap/acapulco_1.png'
import acapulco2 from '../assets/screenshots/interactivemap/acapulco_2.png'
import acapulco3 from '../assets/screenshots/interactivemap/acapulco_3.png'
import data from '../portfolio.data.json'

export const pt = {
  hero: {
    greeting: "Bruno Giovani",
    role: "Arquiteto de Sistemas Principal | Engenheiro de Software Pleno/Senior",
    years: "6+ Anos de Engenharia de Missão Crítica",
    tagline: "Arquitetando ecossistemas digitais de altíssima performance com foco em latência zero, resiliência absoluta e integração estratégica de IA. Especialista em Geo-Inteligência, Microsserviços Resilientes e Performance Mobile Nativa.",
    cta: "Ver Trajetória Executiva"
  },
  sections: {
    projects: "Portfólio Estratégico & Estudos de Caso Arquiteturais",
    skills: "Núcleo Técnico & Competências",
    experience: "Trajetória Profissional",
    certifications: "Credenciais e Certificações",
    contact: "Conexão Profissional"
  },
  experience: [
    { date: "Mar 2026 - Presente", role: "Front-End Lead Developer | PredictMed", desc: "Orquestrando o desenvolvimento de plataformas de saúde preditiva baseadas em IA. Implementando arquiteturas de alta disponibilidade usando Supabase, Deno Edge e Gemini Vision para auditoria automatizada de inventário." },
    { date: "Jan 2024 - Presente", role: "Engenheiro de Software Pleno/Senior | Soo Tech", desc: "Liderança técnica em ecossistemas JVM complexos. Especializado em microsserviços resilientes com Spring Boot, garantindo alto throughput e conformidade rigorosa via Clean Architecture." },
    { date: "2023 - Presente", role: "Arquiteto & Fundador | GuaruGeo", desc: "Desenvolvendo uma infraestrutura GIS soberana. Integrando indexação espacial PostGIS com pipelines OSINT automatizados para entregar inteligência imobiliária submétrica." }
  ],
  projects: {
    predictmed: {
      title: "PredictMed",
      logo: logoPredictMed,
      impact: "Ecossistema SaaS Crítico",
      desc: "Plataforma de predição de estoque empresarial guiada por IA para o setor de saúde. Utiliza Gemini Vision para auditoria autônoma de ativos físicos, correlacionando a densidade visual das prateleiras com indicadores de mercado para automatizar o reabastecimento e eliminar riscos de ruptura de medicamentos críticos.",
      stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
      screenshots: [
        "/assets/screenshots/PredictMed/predictmed (1).png",
        "/assets/screenshots/PredictMed/predictmed (2).png",
        "/assets/screenshots/PredictMed/predictmed (3).png"
      ],
      details: {
        innovation: "Motor de auditoria AI Vision proprietário que substitui verificações humanas manuais por precisão submétrica utilizando Gemini 1.5 Pro.",
        strongPoints: ["98% de Precisão na Prevenção de Ruptura", "Sincronização Real-time Sub-segundo", "Infraestrutura Serverless Edge-native"],
        architecture: "Micro-arquitetura orientada a eventos construída sobre Supabase Realtime e Deno Edge Functions, garantindo escalabilidade infinita e latência mínima.",
        businessImpact: "Eliminou a latência de ressuprimento em 92% através de predição visual autônoma, mitigando riscos de ruptura de estoque em ambientes hospitalares de alta rotatividade. A automação via Vision AI resultou em uma economia operacional estimada de R$ 200k/ano por unidade, liberando equipes farmacêuticas para atividades clínicas de alto valor.",
        technicalChallenges: "Orquestrar inferências de IA de visão em escala massiva mantendo segurança nível HIPAA e consistência de estado em tempo real em milhares de nós.",
        topology: "React 19 -> Supabase Edge (Deno) -> Gemini Vision AI API -> PostgreSQL Realtime",
        url: "https://predictmed.web.app/"
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
        }
      ]
    },
    guarugeo: {
      title: "GuaruGeo & Mapa Interativo",
      logo: logoGuarugeo,
      impact: "Motor de Geo-Inteligência",
      desc: "Sistema de Informação Geográfica (GIS) de alta fidelidade e CRM especializado para imobiliárias de alto padrão. Integra indexação espacial complexa via PostGIS com pipelines OSINT automatizados para entregar inteligência de propriedades 10x mais rápido que portais municipais.",
      stack: ["PostGIS", "React 19", "Node.js", "Leaflet"],
      screenshots: [
        "/assets/screenshots/guarugeo/guarugeo (1).png",
        "/assets/screenshots/guarugeo/guarugeo (2).png",
        "/assets/screenshots/guarugeo/guarugeo (3).png"
      ],
      details: {
        innovation: "Precisão GIS submétrica alcançada através de motores de intersecção espacial PostGIS customizados e cruzamento automatizado de dados de contribuintes.",
        strongPoints: ["Indexação Espacial Avançada", "Renderização de Geometria Vetorial Real-time", "Soberania de Dados Unificada"],
        architecture: "Arquitetura desacoplada com backbone espacial PostGIS e middleware NodeJS de alta concorrência servindo vetores para um frontend React MapGL reativo.",
        businessImpact: "Disrompeu o ciclo tradicional de prospecção imobiliária, reduzindo o Time-to-Market de novos lançamentos em 60%. A unificação de dados tributários e dominiais em tempo real permitiu a arquitetura de estratégias de investimento baseadas em evidências geoespaciais, elevando a assertividade na originação de negócios em 45%.",
        technicalChallenges: "Otimizar a renderização no navegador de mais de 18.000 polígonos detalhados mantendo uma interação impecável a 60fps em dispositivos comuns.",
        topology: "Next.js (Edge) -> Supabase -> PostGIS -> Python OSINT Crawlers",
        url: "https://guarujainterativo.com.br/"
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
        url: "https://cimedexperience.web.app/onboarding"
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
      impact: "Engenharia de Dados OSINT",
      desc: "Motor autônomo de extração geoespacial. Captura e normaliza sistematicamente dados WFS, contornando firewalls municipais e captchas via ML-OCR local para construir o banco de dados imobiliário mais completo da região.",
      stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
      details: {
        innovation: "Automação híbrida que une exploração de payloads HTTP com redes neurais locais para contornar captchas visuais governamentais agressivos.",
        strongPoints: ["Resolução Neural de Captchas", "Extração Massiva WFS", "Cruzamento Tributário-Dominial"],
        architecture: "Pipeline de extração assíncrona multi-fase. Utiliza Scrapy e modelos ML customizados para normalização de dados em alto throughput.",
        businessImpact: "Desbloqueou o acesso a ativos de dados governamentais 'escuros', criando o maior dataset estruturado de inteligência costeira do estado. Esta infraestrutura de dados permitiu a automação de due diligence imobiliária, reduzindo custos de auditoria externa em 75% e acelerando o fechamento de contratos complexos.",
        technicalChallenges: "Desenvolver um sistema de bypass de captcha resiliente que se adapta a ruídos visuais dinâmicos sem depender de serviços pagos externos.",
        topology: "Python (AsyncIO) -> ML-OCR Local -> PostgreSQL Data Lake"
      },
      codeSnippets: [
        {
          title: "Solucionador Neural de Captcha",
          language: "python",
          code: `def solve_captcha(session):
    img = session.get(url_captcha).content
    code = ddddocr.classification(img)
    if session.get(f"{url_solve}{code}").text == '2': return code`
        },
        {
          title: "Pipeline de Normalização Geospacial",
          language: "python",
          code: `def normalize_coords(raw_geojson):
    # Converte coordenadas WFS para GeoJSON padrão (4326)
    gdf = gpd.read_file(io.StringIO(raw_geojson))
    gdf = gdf.to_crs("EPSG:4326")
    return gdf.to_json()`
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
        topology: "Playwright -> Cluster Tor -> Despachante AsyncIO"
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
        topology: "Android Nativo (Kotlin) -> Room DB -> Sincronia Firebase Cloud"
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
        innovation: "Pipeline de telemetria GPS de alta frequência que sincroniza coordenadas do motorista com latência zero (<200ms) para um hub central.",
        strongPoints: ["Rastreio de Frota Real-time", "Dedução Automática de Estoque", "Sincronia de Dados Cross-platform"],
        architecture: "Arquitetura orientada a eventos onde clientes mobile enviam atualizações de coordenadas para o Firebase, refletidas instantaneamente no dashboard.",
        businessImpact: "Otimizou a logística de última milha com visibilidade total do supply chain, reduzindo o tempo médio de entrega em 25% e zerando discrepâncias de estoque em trânsito. A telemetria real-time permitiu a redução de custos de combustível e manutenção de frota em 12% através da otimização de rotas dinâmica.",
        technicalChallenges: "Gerenciar atualizações GPS contínuas para centenas de motoristas simultâneos sem degradar a performance da bateria mobile.",
        topology: "Kotlin Android -> Firebase Realtime DB -> React Dashboard"
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
        technicalChallenges: "Manter estabilidade de sessão e contornar proteções CSRF/WAF em infraestruturas governamentais altamente instáveis.",
        topology: "Deno Deploy -> Headless Puppeteer -> Supabase Storage"
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
        topology: "Android Nativo -> ML Kit -> OpenCV C++ -> Impressão em Rede"
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
        topology: "React -> Híbrido SVG/Leaflet -> Firebase Realtime"
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
      desc: "Pipeline autônomo para captura instantânea de leads via parsing de IMAP. Usa regex complexos para rotear leads diretamente para webhooks de CRM com latência zero.",
      stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
      details: {
        innovation: "Roteamento de dados com latência zero convertendo texto de e-mail bruto e não estruturado em entradas limpas de CRM automaticamente.",
        strongPoints: ["Extrações Robustas com Regex", "Monitoramento Contínuo IMAP", "Integração de Webhooks Supabase"],
        architecture: "Serviço independente de monitoramento em Python processando corpos de e-mail e disparando sincronizações de banco em tempo real via Supabase.",
        businessImpact: "Erradicou o vazamento de leads em 100% ao automatizar a captura de dados de fontes legadas (e-mail) para CRMs modernos. A resposta instantânea a novos leads aumentou a taxa de contato bem-sucedido em 40%, impactando diretamente o pipeline de vendas e o ROI de marketing.",
        technicalChallenges: "Manter conexões IMAP estáveis com provedores legados e lidar com formatos de e-mail inconsistentes através de regex.",
        topology: "Python (Ouvinte IMAP) -> Sync Supabase -> Webhook CRM"
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
