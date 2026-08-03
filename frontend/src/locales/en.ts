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
import acapulco1 from '../assets/screenshots/interactivemap/acapulco_1.png'
import acapulco2 from '../assets/screenshots/interactivemap/acapulco_2.png'
import acapulco3 from '../assets/screenshots/interactivemap/acapulco_3.png'
import data from '../portfolio.data.json'

export const en = {
  hero: {
    greeting: "Bruno Giovani",
    role: "Software Engineer (Junior/Mid) | Full-Stack Developer",
    years: "Complete personal projects + informal B2B work at Agili",
    tagline: "I build full-stack projects focused on organized code, useful interfaces, well-structured APIs, and continuous learning. I have hands-on practice with geo-intelligence, microservices, automation, and applied AI, and I am looking for a Junior/Mid opportunity to contribute and grow with a team.",
    cta: "Explore my journey"
  },
  sections: {
    projects: "Practical Projects & Studies",
    skills: "My Stack & Skills",
    experience: "Projects and Practical Experience",
    certifications: "Certifications",
    contact: "Let's connect?"
  },
  experience: [
    { date: "Current", role: "Personal Full-Stack Projects", desc: "Building my own applications with React, TypeScript, Node/Fastify, Spring Boot, Kotlin, Supabase, Firebase, and PostgreSQL to practice complete product flows." },
    { date: "Informal B2B", role: "Developer | Agili", desc: "On-demand support with adjustments, maintenance, bug fixes, and small features, without a formal employment relationship or fixed contract." },
    { date: "Continuous study", role: "Learning and guided practice", desc: "Ongoing development through ADS, REST APIs, databases, Android, automations, testing, and code organization." }
  ],
  projects: {
    farmadelivery: {
      title: "FarmaDelivery",
      logo: logoFarmaDelivery,
      impact: "Personal Full-Stack Project",
      desc: "Personal pharmaceutical delivery project with web admin, online API, Android app, and courier PWA. I used database, RLS, realtime, live GPS, notifications, photo proof, reporting, routing, Docker, Vercel, and Firebase Hosting to practice a complete application flow.",
      stack: ["React 19", "Fastify", "Prisma", "Supabase Storage", "Kotlin Compose", "PWA", "Vercel", "Firebase Hosting/FCM"],
      screenshots: [
        "/assets/screenshots/farmadelivery/farmadelivery-admin.png",
        "/assets/screenshots/farmadelivery/farmadelivery-motoboy-pwa.png"
      ],
      details: {
        innovation: "Operational architecture with shared contracts across admin, API, Android, and PWA, combining Supabase REST fallback, unified canonical SQL, Server-Sent Events for live updates, and automated validation across multiple surfaces.",
        strongPoints: ["Multi-app monorepo", "Vercel-hosted API", "Admin and PWA on Firebase Hosting", "Documented RLS, realtime and storage", "Live GPS and auditable photo proof"],
        architecture: "TypeScript/Kotlin monorepo with Fastify API packaged for Vercel Serverless, Prisma/Supabase, PostgreSQL with RLS, Supabase Storage, React admin, React PWA, Compose Android app, Firebase Messaging, and Docker Compose for development.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Adapting a Fastify API to Vercel Serverless, solving ESM/Prisma packaging for Linux, aligning contracts across project clients, preserving secret hygiene, and validating Android/PWA/Admin/API in the same cycle.",
        topology: "Firebase Hosting (Admin/PWA) -> Vercel Fastify API -> Prisma + Supabase REST fallback -> PostgreSQL/RLS/Realtime/Storage -> Kotlin Android + Firebase Messaging",
        url: "https://drogstoantonio.web.app",
        github: "https://github.com/beehgiovani/FarmaDelivery"
      },
      codeSnippets: [
        {
          title: "Fastify serverless handler on Vercel",
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
          title: "Canonical SQL contract with documented RLS",
          language: "sql",
          code: `COMMENT ON TABLE public."Delivery" IS
'Operational deliveries consumed by API, admin, PWA, and Android.
RLS enabled; clients access data through authenticated API and realtime policies.
Care: preserve history, store scope, delivery proof, and personal data.';

DROP POLICY IF EXISTS "Authenticated delivery read" ON public."Delivery";
CREATE POLICY "Authenticated delivery read"
  ON public."Delivery" FOR SELECT
  TO authenticated
  USING (true);`
        },
        {
          title: "Route parity between PWA and Android",
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
      impact: "High-Availability SaaS Ecosystem",
      desc: "A personal inventory prediction prototype for the healthcare sector. I leveraged Gemini Vision to build an autonomous auditing engine: it analyzes shelf density and reconciles with logical data, automating replenishment and eliminating stockouts.",
      stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
      screenshots: [
        "/assets/screenshots/PredictMed/predictmed (1).png",
        "/assets/screenshots/PredictMed/predictmed (2).png",
        "/assets/screenshots/PredictMed/predictmed (3).png"
      ],
      details: {
        innovation: "Computer vision auditing engine designed to support inventory checks and reduce repetitive manual verification.",
        strongPoints: ["Stock workflow validation", "Real-time synchronization study", "Deno Edge personal project"],
        architecture: "Event-driven study architecture built on Supabase Realtime and Deno Edge Functions for incremental project evolution.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Orchestrating computer-vision inference with data safety, state consistency, and predictable operating cost.",
        topology: "React 19 -> Supabase Edge (Deno) -> Gemini Vision AI API -> PostgreSQL Realtime",
        url: "https://predictmed.web.app/",
        github: "https://github.com/beehgiovani/predictmed"
      },
      codeSnippets: [
        {
          title: "AI Vision Audit Logic (Edge)",
          language: "typescript",
          code: `// Gemini Vision Integration for Physical Inventory Auditing
serve(async (req) => {
  const { imageBase64, facilityId } = await req.json()
  const ai = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY"))
  const model = ai.getGenerativeModel({ model: "gemini-1.5-pro-vision" })
  
  const result = await model.generateContent([
    "Count critical vials and identify impending stockouts.",
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
          title: "Vision AI & Predictive Inventory Orchestration (Edge)",
          language: "typescript",
          code: `// Reactive Deno Edge Pipeline for Vision Inference and Drift Correction
serve(async (req) => {
  const { imageBase64, facilityId, currentSnap } = await req.json();
  const model = ai.getGenerativeModel({ model: "gemini-1.5-pro-vision" });
  
  // Prompt Engineering for Sub-metric Auditing
  const prompt = \`Analyze the volumetric density of the shelves. 
                 Return JSON: {deficit: number, risk: 'LOW'|'HIGH', drift_detected: boolean}\`;
  
  const result = await model.generateContent([prompt, { inlineData: { data: imageBase64, mimeType: "image/jpeg" } }]);
  const analysis = JSON.parse(result.response.text());

  // Resilience Logic: Corrects discrepancies between logical and physical stock
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
          title: "Mathematical Fallback when AI Fails",
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
    return { suggestedQuantity: qty, reasoning: "Safety calculation applied." };
  }
}`
        },
        {
          title: "Chronological Queue for Bulk Uploads",
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
      impact: "Computer Vision & Immersive Experience",
      desc: "A spatial drawing and audio study using real-time 3D hand tracking. I used MediaPipe to transform gestures into neon art with procedural sound synthesis and practiced browser-based interaction tuning.",
      stack: ["React 19", "MediaPipe Vision", "WebGL", "Sound Synthesis"],
      details: {
        innovation: "Stroke stabilization algorithm (Stability Ref) that uses point density and velocity to simulate real brush physics via computer vision.",
        strongPoints: ["Gestural Tracking Study", "Procedural Sound Synthesizer", "WebGL Bloom & Neon Visual Effects"],
        architecture: "Reactive image processing pipeline utilizing workers for AI inference and WebGL for high-fidelity rendering at 60fps.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Orchestrating real-time AI landmark processing with continuous audio synthesis without causing frame drops or audio jitter.",
        topology: "MediaPipe (HandLandmarker) -> React 19 -> WebAudio Engine -> WebGL Canvas",
        github: "https://github.com/beehgiovani/lumen"
      },
      codeSnippets: [
        {
          title: "Gesture Processing & Smoothing",
          language: "typescript",
          code: `// Adaptive smoothing algorithm for gestural tracking
const processHandTracking = (landmarks, canvas) => {
  const rawX = (1 - landmarks[8].x) * canvas.width;
  const rawY = landmarks[8].y * canvas.height;
  
  const dist = Math.hypot(rawX - lastX, rawY - lastY);
  const velocity = clamp(dist / 30, 0, 1);
  
  // Dynamic smoothing factor based on gesture velocity
  const smoothFactor = stability * (1 - (velocity * 0.85));
  const fx = (rawX * (1 - smoothFactor)) + (lastX * smoothFactor);
  const fy = (rawY * (1 - smoothFactor)) + (lastY * smoothFactor);
  
  return { fx, fy, pressure: 1 - velocity };
}`
        },
        {
          title: "Stroke Physics & Procedural Sound Synthesis",
          language: "typescript",
          code: `// Harmonic Synthesis Engine based on Motion Vectors
updateStrokeSound(handIdx, tool, speed, isDrawing) {
  const voice = this.activeVoices.get(handIdx) || this.createVoice(tool);
  const now = this.ctx.currentTime;
  
  // Logarithmic Mapping: Gesture Velocity -> Oscillation Frequency
  const baseFreq = tool === 'LIGHTNING' ? 440 : 220;
  const targetFreq = baseFreq * Math.pow(2, (speed * 0.1) / 12);
  
  // Biquad Filter for neon resonance (dynamic Q-factor)
  voice.osc.frequency.setTargetAtTime(targetFreq, now, 0.03);
  voice.filter.Q.value = 1 + (speed * 0.5);
  
  // Adaptive ADSR envelope to prevent clicks in synthesis
  voice.gain.gain.setTargetAtTime(Math.min(speed / 100, 0.3), now, 0.05);
  this.activeVoices.set(handIdx, voice);
}`
        },
        {
          title: "Gestural Stabilization (Kalman Filter Lite)",
          language: "typescript",
          code: `// Predictive smoothing for Computer Vision landmarks
const smoothPoint = (raw, last, stability) => {
  const dist = Math.hypot(raw.x - last.x, raw.y - last.y);
  const velocity = Math.min(dist / 30, 1);
  
  // Inertia-weighted interpolation
  const factor = stability * (1 - (velocity * 0.85));
  return {
    x: (raw.x * (1 - factor)) + (last.x * factor),
    y: (raw.y * (1 - factor)) + (last.y * factor)
  };
};`
        },
        {
          title: "Kotlin Smoother with Deadzone and Velocity",
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
          title: "Gesture-Driven Reactive ViewModel",
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
      title: "GuaruGeo & Interactive Map",
      logo: logoGuarugeo,
      impact: "GIS & Data Intelligence",
      desc: "A geographic information system (GIS) I built from scratch for real estate firms. The edge here is PostGIS spatial indexing and the crawlers I made to mine public data and deliver intelligence 10x faster than any official portal.",
      stack: ["PostGIS", "React 19", "Node.js", "Leaflet"],
      screenshots: [
        "/assets/screenshots/guarugeo/guarugeo (1).png",
        "/assets/screenshots/guarugeo/guarugeo (2).png",
        "/assets/screenshots/guarugeo/guarugeo (3).png"
      ],
      details: {
        innovation: "Sub-metric GIS precision achieved through custom PostGIS spatial intersection engines and automated taxpayer data cross-referencing.",
        strongPoints: ["Advanced Spatial Indexing", "Real-time Vector Geometry Rendering", "Unified Data Sovereignty"],
        architecture: "Decoupled architecture with a PostGIS spatial backbone and a high-performance NodeJS middleware serving vector tiles to a reative React MapGL frontend.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Optimizing browser rendering for 18,000+ detailed polygons while maintaining a flawless 60fps interaction on standard devices.",
        topology: "Next.js (Edge) -> Supabase -> PostGIS -> Python OSINT Crawlers",
        url: "https://guarujainterativo.com.br/",
        github: "https://github.com/beehgiovani/GuarujaInterativo"
      },
      codeSnippets: [
        {
          title: "Spatial Intersection Logic",
          language: "javascript",
          code: `// PostGIS ST_Intersects optimized for sub-metric bounding boxes
const query = \`
  SELECT id, tax_id, ST_AsGeoJSON(geom) as geojson
  FROM properties 
  WHERE geom && ST_MakeEnvelope($1, $2, $3, $4, 4326)
    AND ST_Intersects(p.geom, ST_MakeEnvelope($1, $2, $3, $4, 4326))
  LIMIT 5000;\`;`
        },
        {
          title: "High-Performance Spatial Intersection Engine",
          language: "sql",
          code: `-- Optimized PostGIS Query with GIST Indexing and Bounding Boxes
SELECT p.id, p.tax_id, ST_AsGeoJSON(p.geom) as geojson
FROM properties p
WHERE p.geom && ST_MakeEnvelope($1, $2, $3, $4, 4326) -- Fast index lookup
  AND ST_Intersects(p.geom, ST_Buffer(ST_SetSRID(ST_Point($5, $6), 4326), 0.0001))
  AND p.status = 'AVAILABLE'
ORDER BY ST_Distance(p.geom, ST_SetSRID(ST_Point($5, $6), 4326))
LIMIT 100;`
        }
      ]
    },
    cimed_experience: {
      title: "Cimed Experience (Gamified PWA)",
      logo: logoCimed,
      impact: "Engagement & Conversion",
      desc: "Native-behavior PWA designed to convert brand influence into physical store sales. Orchestrates global campaigns via an interactive social hub and AI health consultant, bridging digital engagement with real-world visitation.",
      stack: ["React", "Supabase", "PWA", "Firebase"],
      screenshots: [
        "/assets/screenshots/cimed_experience/cimedExperience (1).png",
        "/assets/screenshots/cimed_experience/cimedExperience (2).png",
        "/assets/screenshots/cimed_experience/cimedExperience (3).png"
      ],
      details: {
        innovation: "Global Drive-to-Store engine utilizing Geo-Fencing and QR-validation to reward brand advocacy with tangible real-world benefits.",
        strongPoints: ["Real-time Leaderboards", "Secure Geo-validation Missions", "AI Health Consultant Implementation"],
        architecture: "Hybrid real-time architecture utilizing Firebase for social hub interactions and Supabase for mission persistence and validation.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Maintaining seamless offline-to-online state transitions and preventing validation spoofing in remote high-traffic retail environments.",
        topology: "React (PWA) -> Firebase Cloud Functions -> Supabase Realtime",
        url: "https://cimedexperience.web.app/onboarding",
        github: "https://github.com/beehgiovani/portifolio"
      },
      codeSnippets: [
        {
          title: "Geo-validation Logic",
          language: "typescript",
          code: `// Validating user presence within 300m radius of store
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
      impact: "OSINT & Data Engineering",
      desc: "A geospatial data engine for collecting, normalizing, and validating public information. The focus was turning scattered public sources into a reliable real estate dataset.",
      stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
      details: {
        innovation: "Hybrid pipeline combining HTTP extraction, geospatial normalization, and automated validation to consolidate public data with traceability.",
        strongPoints: ["Geospatial normalization", "Batch WFS extraction", "Tax-property cross-linking"],
        architecture: "Multi-phase asynchronous extraction pipeline. Utilizes Python's Scrapy and custom ML models for high-throughput data normalization.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Standardizing unstable public sources, handling heterogeneous geospatial formats, and preserving consistency across incremental runs.",
        topology: "Python (AsyncIO) -> Data validation -> PostgreSQL Data Lake",
        github: "https://github.com/beehgiovani/SpLitoralScraping"
      },
      codeSnippets: [
        {
          title: "Public Dataset Fetch",
          language: "python",
          code: `def fetch_public_dataset(session, url):
    response = session.get(url, timeout=30)
    response.raise_for_status()
    return response.json()`
        },
        {
          title: "Geospatial Normalization Pipeline",
          language: "python",
          code: `def normalize_coords(raw_geojson):
    # Converts WFS coordinates to standard GeoJSON (4326)
    gdf = gpd.read_file(io.StringIO(raw_geojson))
    gdf = gdf.to_crs("EPSG:4326")
    return gdf.to_json()`
        },
        {
          title: "Geometry Validation before Load",
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
      impact: "Practical Automation",
      desc: "Personal automation study project for municipal data extraction, using Playwright, OCR experiments, and IP rotation concepts to practice resilient scraping flows.",
      stack: ["Python", "PyTorch", "Tor", "Playwright"],
      details: {
        innovation: "Automation flow that uses Playwright workers, OCR experiments, and IP rotation concepts to practice robust data collection.",
        strongPoints: ["IP rotation concepts", "OCR experimentation", "Data validation workflow"],
        architecture: "Study architecture with isolated scraping workers, validation steps, and a central persistence layer.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Managing session state across scraping workers, OCR experiments, and rotated proxy concepts while keeping data validation understandable.",
        topology: "Playwright -> Tor Cluster -> AsyncIO Dispatcher",
        github: "https://github.com/beehgiovani/crawler---dados-publicos"
      },
      codeSnippets: [
        {
          title: "Tor Port Multiplexer",
          language: "python",
          code: `class TorScraper:
    def __init__(self, port):
        self.session.proxies = {'http': f'socks5h://127.0.0.1:{port}'}
    async def request(self, url):
        return self.session.get(url, timeout=90)`
        },
        {
          title: "OCR Inference via PyTorch",
          language: "python",
          code: `def predict_captcha(image_tensor):
    # Custom model trained on government portal fonts
    with torch.no_grad():
        output = model(image_tensor)
        return decode_ctc_output(output)`
        },
        {
          title: "Tor Load Balancer & Port Multiplexing",
          language: "python",
          code: `# Isolated Connection Orchestration for WAF Bypass
async def fetch_with_proxy_rotation(target_urls):
    proxy_pool = [f'socks5h://127.0.0.1:{9050 + i}' for i in range(10)]
    semaphore = asyncio.Semaphore(5) # Limit concurrency to avoid detection
    
    async with semaphore:
        proxy = random.choice(proxy_pool)
        connector = ProxyConnector.from_url(proxy)
        async with aiohttp.ClientSession(connector=connector) as session:
            return await session.get(url, headers=GENERIC_HEADERS)`
        },
        {
          title: "Persistent HTTP -> Playwright Session",
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
          title: "Browser Pool with Memory Limit",
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
      impact: "Digital Health Ecosystem",
      desc: "Native Android health companion for caregivers. Built with an offline-first architecture (Room), ensuring critical medication reminders and vital activity sync are never missed.",
      stack: ["Kotlin", "Android SDK", "Room", "Firebase"],
      details: {
        innovation: "Local-first health management system that guarantees alarm delivery and medication adherence without constant internet reliance.",
        strongPoints: ["Offline-first Persistence", "Complex Alarm Scheduling", "Caregiver Real-time Sharing"],
        architecture: "MVVM Clean Architecture using Kotlin Flow for reactive state management and Room for reliable local persistence.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Implementing high-priority alarms that remain active through device reboots and aggressive OS battery optimizations.",
        topology: "Android Native (Kotlin) -> Room DB -> Firebase Cloud Sync",
        github: "https://github.com/beehgiovani/NidusCare"
      },
      codeSnippets: [
        {
          title: "Offline-First DAO",
          language: "kotlin",
          code: `@Dao
interface MedicationDao {
    @Query("SELECT * FROM medications WHERE active = 1")
    fun getActiveMeds(): Flow<List<Medication>>
}`
        },
        {
          title: "High-Precision Alarm Scheduler",
          language: "kotlin",
          code: `fun scheduleMedicationAlarm(med: Medication) {
    val intent = Intent(context, AlarmReceiver::class.java)
    val pendingIntent = PendingIntent.getBroadcast(context, med.id, intent, FLAG_IMMUTABLE)
    alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, med.time, pendingIntent)
}`
        },
        {
          title: "Reactive State Synchronization (Kotlin Flow + Room)",
          language: "kotlin",
          code: `// Reactive Pipeline for State Management and Local Persistence
class MedicationRepository(private val dao: MedicationDao) {
    val activeMedications: Flow<Resource<List<Medication>>> = flow {
        emit(Resource.Loading())
        // Synchronizes local cache with Room's reactive data stream
        dao.getActiveMeds()
            .map { Resource.Success(it) }
            .collect { emit(it) }
    }.catch { e -> emit(Resource.Error(e.message)) }
     .flowOn(Dispatchers.IO)`
        },
        {
          title: "Missed Dose Check with Exact Alarm",
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
          title: "Adherence Classifier by Time Window",
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
      impact: "Supply Chain Optimization",
      desc: "Personal logistics project for pharmaceutical-sector studies. Merges native Android telemetry with a React operations dashboard for real-time delivery tracking and inventory management.",
      stack: ["Kotlin", "Firebase Realtime", "React Web"],
      details: {
        innovation: "GPS telemetry study that synchronizes driver coordinates with a web-based dispatch hub for realtime delivery tracking practice.",
        strongPoints: ["Real-time Fleet Tracking", "Automated Inventory Deduction", "Cross-platform Data Sync"],
        architecture: "Event-driven architecture where mobile clients push coordinate updates to Firebase, immediately reflected in the React dispatcher.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Managing continuous GPS updates for hundreds of concurrent drivers without degrading mobile battery performance.",
        topology: "Kotlin Android -> Firebase Realtime DB -> React Dashboard",
        github: "https://github.com/beehgiovani/PharmaFlow"
      },
      codeSnippets: [
        {
          title: "Real-time Telemetry",
          language: "kotlin",
          code: `fusedLocationClient.requestLocationUpdates(locationRequest, { result ->
    firebaseRef.child("drivers/$id/location").setValue(result.lastLocation)
}, Looper.getMainLooper())`
        },
        {
          title: "In-Transit Inventory Sync",
          language: "kotlin",
          code: `fun syncStock(orderId: String, items: List<Item>) {
    // Atomic commit to avoid discrepancies on unstable connections
    db.runTransaction {
        updateLocalStock(items)
        pushToRemote(orderId, items)
    }
}`
        },
        {
          title: "Concurrent Transaction Isolation & Atomicity",
          language: "sql",
          code: `-- Ensuring Inventory Integrity under High Concurrency
BEGIN;
  -- Lock the row to prevent item 'Double Spending'
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
      impact: "Legal Tech Automation",
      desc: "Legal document portal for rapid bureaucratic extraction. Uses headless browsers and API reverse engineering to reduce certificate turnaround from days to under 60 seconds.",
      stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
      details: {
        innovation: "Reverse-engineered public document infrastructures to transform manual bureaucratic processes into instantaneous API calls.",
        strongPoints: ["Headless Browser Automation", "Stateful Token Extraction", "Async Job Orchestration"],
        architecture: "Serverless backend (Deno) managing headless browser clusters that navigate legacy portals and return structured PDF data.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Maintaining session stability, error handling, and traceability across unstable legacy portals.",
        topology: "Deno Deploy -> Headless Puppeteer -> Supabase Storage",
        github: "https://github.com/beehgiovani/CertidaoGuaru"
      },
      codeSnippets: [
        {
          title: "Headless Document Navigation",
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
          title: "PDF Token Validation Engine",
          language: "javascript",
          code: `// Metadata extraction to ensure document authenticity
const verifyPdf = async (buffer) => {
  const data = await pdfParse(buffer);
  return data.text.includes(VALIDATION_HASH_PATTERN);
};`
        },
        {
          title: "Stateful Session Orchestration & CSRF Bypass",
          language: "typescript",
          code: `// Session Token Management for Legacy Governmental Portals
async function getSessionToken(page: Page) {
  const cookies = await page.cookies();
  const xsrfToken = cookies.find(c => c.name === 'XSRF-TOKEN')?.value;
  
  // Inject token via Headers for state-level validation bypass
  await page.setExtraHTTPHeaders({
    'x-xsrf-token': xsrfToken || '',
    'referer': GOV_PORTAL_REFERER
  });
}`
        },
        {
          title: "Certificate Parameter Whitelist",
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
          title: "Modular Client with Error Fallback",
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
      impact: "Retail Empowerment",
      desc: "Personal Android project for dynamic retail poster design. Features C++ OpenCV and offline ML background removal, eliminating the need for design outsourcing.",
      stack: ["Kotlin", "OpenCV", "ML Kit", "Android Native"],
      details: {
        innovation: "On-device AI background removal and professional graphic design capabilities localized for branch-level retail operations.",
        strongPoints: ["Offline ML Segmentation", "Native C++ OpenCV Integration", "Direct Network Printing"],
        architecture: "Resource-intensive native app leveraging ML Kit for image analysis and OpenCV C++ libraries for high-fidelity graphic rendering.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Optimizing ML models and C++ image processing to run smoothly on mid-range Android tablets without UI lag.",
        topology: "Android Native -> ML Kit -> OpenCV C++ -> Network Print",
        github: "https://github.com/beehgiovani/MarketPoster"
      },
      codeSnippets: [
        {
          title: "ML Subject Segmentation",
          language: "kotlin",
          code: `segmenter.process(image).addOnSuccessListener { result ->
    val mask = result.foregroundConfidenceMask
    val processedBitmap = applyMask(original, mask)
}`
        },
        {
          title: "Native Rendering with OpenCV",
          language: "cpp",
          code: `// JNI processing for high-performance graphics
void processFrame(Mat& frame) {
    cvtColor(frame, frame, COLOR_BGR2GRAY);
    GaussianBlur(frame, frame, Size(7,7), 1.5);
    Canny(frame, frame, 0, 30, 3);
}`
        }
      ]
    },
    interactivemap: {
      title: "InteractiveMap - Jardim Acapulco",
      logo: logoAcapulco,
      impact: "High-End Visualization",
      desc: "Immersive real estate map with dynamic lot visualization and real-time administrative moderation. Delivers a flawless 60fps experience for luxury clients.",
      stack: ["React", "TypeScript", "Vite", "Firebase"],
      screenshots: [
        acapulco1,
        acapulco2,
        acapulco3
      ],
      details: {
        innovation: "Dynamic SVG-based mapping engine that replaces heavy GIS servers with lightweight reative layers for instant client feedback.",
        strongPoints: ["60fps Interaction Speed", "Real-time Lot Moderation", "Optimized CSR Performance"],
        architecture: "Client-side mapping engine built on React and Leaflet, communicating via an optimized Firebase JSON state to skip heavy map servers.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Rendering hundreds of reactive GeoJSON overlays while maintaining high scroll and zoom performance in the browser.",
        topology: "React -> SVG/Leaflet Hybrid -> Firebase Realtime",
        github: "https://github.com/beehgiovani/InteractiveMap"
      },
      codeSnippets: [
        {
          title: "Performance Lot Rendering",
          language: "typescript",
          code: `const LotPolygon = React.memo(({ lot }) => {
    const path = useMemo(() => generateSVGPath(lot.coords), [lot.coords]);
    return <path d={path} fill="transparent" stroke="rgba(0,0,0,0.1)" />
})`
        },
        {
          title: "Real-time Lot State Sync",
          language: "javascript",
          code: `onValue(ref(db, 'lots/'), (snapshot) => {
  const data = snapshot.val();
  // Updates only polygons that changed status
  updateLotLayers(data);
});`
        }
      ]
    },
    emailmonitor: {
      title: "Lead Webhook Monitor",
      logo: logoEmailMonitor,
      impact: "Automated Lead Capture",
      desc: "Personal automation project for inbound contact parsing via IMAP. Uses structured extraction rules to route messages into CRM-style webhooks.",
      stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
      details: {
        innovation: "Data routing study that converts unstructured email text into clean, structured CRM-style entries automatically.",
        strongPoints: ["Robust Regex Extractions", "Continuous IMAP Monitoring", "Supabase Webhook Integration"],
        architecture: "Independent Python watcher service processing email bodies and triggering real-time database synchronizations via Supabase.",
        businessImpact: "Project used to practice requirements analysis, data modeling, integrations, interface states, and complete flow validation without implying formal professional employment.",
        technicalChallenges: "Maintaining stable IMAP connections with legacy providers and handling wildly inconsistent email body formats through regex.",
        topology: "Python (IMAP Listener) -> Supabase Sync -> CRM Webhook",
        github: "https://github.com/beehgiovani/guaruja-email-monitor"
      },
      codeSnippets: [
        {
          title: "IMAP Lead Listener",
          language: "python",
          code: `while True:
    status, messages = mail.search(None, '(UNSEEN)')
    for num in messages[0].split():
        raw = mail.fetch(num, '(RFC822)')[1][0][1]
        lead = parse_regex(raw)
        if lead: supabase.table('leads').insert(lead).execute()`
        },
        {
          title: "Regex-based Lead Extractor",
          language: "python",
          code: `def extract_lead(body):
    patterns = {
        'name': r'Name:\\s*(.*)',
        'phone': r'Phone:\\s*(\\d+)',
        'origin': r'Source:\\s*(.*)'
    }
    return {k: re.search(v, body).group(1) for k, v in patterns.items()}`
        },
        {
          title: "Attachment Routing by CPF/CNPJ",
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
          title: "Upload + Placeholder Cleanup",
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
    java: "Reactive JVM Systems (Java/Kotlin, Spring Boot 3, Hibernate, Micronaut, Clean Architecture, Design Patterns)",
    react: "React 19 Ecosystem (TypeScript, Complex State Management, Next.js, Performance Optimization, Practical PWAs)",
    spring: "Data Engineering & DBAs (Advanced PostgreSQL, PostGIS, Spatial Indexing, Pandas, Big Data Pipelines)",
    python: "Artificial Intelligence & Automation (PyTorch, Custom OCR Models, OpenCV, Computer Vision, Headless Scrapers)",
    cloud: "Cloud & Edge Architecture (Deno Edge Functions, Supabase Realtime, AWS S3/EC2, Firebase Serverless, CI/CD)",
    gis: "Applied GIS Intelligence (GeoServer WFS/WMS, QGis Desktop/Server, GeoJSON, Leaflet Integration)",
    arch: "Design Systems & Micro-frontends (Resilience, Horizontal Scalability, Storybook, Luxury UI/UX)",
    node: "Native Mobile & Kotlin Flow (Android MVVM/MVI Architectures, Room DB, Coroutines, Jetpack Compose, BLE)",
  },
  certs: data.certifications_en,
  footer: {
    salary: data.career.salary_expectation_en,
    availability: data.career.availability_en,
    languages: data.career.languages_en
  },
  contact: {
    phone: "+55 (13) 99205-8836",
    email: "brunoadmin@guarujainterativo.com.br",
    linkedin: "https://www.linkedin.com/in/beehgiovani/",
    github: "https://github.com/beehgiovani/"
  },
  dialog: {
    title: "Professional Presentation",
    message: "I build projects with a focus on organization, security, practical learning, and continuous improvement. Select the localized professional summary for the region of interest.",
    btnEn: "Stay in English",
    btnPt: "Mudar para Português"
  }
}
