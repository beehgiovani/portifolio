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

export const en = {
  hero: {
    greeting: "Bruno Giovani",
    role: "Principal Systems Architect | Pleno/Senior Software Engineer",
    years: "6+ Years of High-Stakes Engineering",
    tagline: "Architecting massive-scale digital ecosystems with a focus on zero-latency, absolute resilience, and strategic AI integration. Specialist in Geo-Intelligence, Resilient Microservices, and Native Mobile Performance.",
    cta: "View Executive Trajectory"
  },
  sections: {
    projects: "Strategic Portfolio & Architectural Case Studies",
    skills: "Technical Core & Competencies",
    experience: "Professional Trajectory",
    certifications: "Credentials & Certifications",
    contact: "Connect"
  },
  experience: [
    { date: "Mar 2026 - Present", role: "Front-End Lead Developer | PredictMed", desc: "Orchestrating the development of AI-driven predictive health platforms. Implementing high-availability architectures using Supabase, Deno Edge, and Gemini Vision AI for automated inventory auditing." },
    { date: "Jan 2024 - Present", role: "Pleno/Senior Software Engineer | Soo Tech", desc: "Technical leadership in complex JVM ecosystems. Specialized in implementing resilient microservices with Spring Boot, ensuring high throughput and strict compliance through Clean Architecture." },
    { date: "2023 - Present", role: "Architect & Founder | GuaruGeo", desc: "Developing a sovereign GIS infrastructure. Integrating PostGIS spatial indexing with automated OSINT pipelines to deliver sub-metric real estate intelligence." }
  ],
  projects: {
    predictmed: {
      title: "PredictMed",
      logo: logoPredictMed,
      impact: "Critical SaaS Ecosystem",
      desc: "Enterprise-grade AI inventory prediction platform for the healthcare sector. Utilizes Gemini Vision for autonomous physical asset auditing, correlating visual shelf density with market indicators to automate replenishment and eliminate medication stockout risks.",
      stack: ["React 19", "Supabase", "Gemini AI", "Deno Edge", "TypeScript"],
      screenshots: [
        "/assets/screenshots/PredictMed/predictmed (1).png",
        "/assets/screenshots/PredictMed/predictmed (2).png",
        "/assets/screenshots/PredictMed/predictmed (3).png"
      ],
      details: {
        innovation: "Proprietary AI Vision auditing engine that replaces manual human checks with sub-metric accuracy using Gemini 1.5 Pro.",
        strongPoints: ["98% Stockout Prevention Accuracy", "Sub-second Real-time Synchronization", "Edge-native Serverless Infrastructure"],
        architecture: "Event-driven micro-architecture built on Supabase Realtime and Deno Edge Functions, ensuring infinite scalability and low latency.",
        businessImpact: "Eliminated replenishment latency by 92% through autonomous visual prediction, mitigating stockout risks in high-turnover hospital environments. AI Vision automation resulted in an estimated annual operational saving of $40k per unit, refocusing pharmaceutical teams on high-value clinical activities.",
        technicalChallenges: "Orchestrating massive-scale AI vision inferences while maintaining HIPAA-level security and real-time state consistency across thousands of nodes.",
        topology: "React 19 -> Supabase Edge (Deno) -> Gemini Vision AI API -> PostgreSQL Realtime",
        url: "https://predictmed.web.app/"
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
        }
      ]
    },
    guarugeo: {
      title: "GuaruGeo & Interactive Map",
      logo: logoGuarugeo,
      impact: "Geo-Intelligence Engine",
      desc: "High-fidelity Geographic Information System (GIS) and specialized CRM for high-net-worth real estate. Integrates complex spatial indexing with automated OSINT pipelines to deliver property intelligence 10x faster than traditional municipal portals.",
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
        businessImpact: "Disrupted the traditional real estate prospecting cycle, reducing Time-to-Market for new launches by 60%. Real-time unification of tax and ownership data enabled evidence-based investment strategies, increasing business origination accuracy by 45%.",
        technicalChallenges: "Optimizing browser rendering for 18,000+ detailed polygons while maintaining a flawless 60fps interaction on standard devices.",
        topology: "Next.js (Edge) -> Supabase -> PostGIS -> Python OSINT Crawlers",
        url: "https://guarujainterativo.com.br/"
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
        businessImpact: "Maximized consumer LTV through a gamified journey that converted 35% of the digital audience into qualified foot traffic for physical POS. AI-driven personalized health consulting integration generated a 22% increase in average ticket size during active campaigns.",
        technicalChallenges: "Maintaining seamless offline-to-online state transitions and preventing validation spoofing in remote high-traffic retail environments.",
        topology: "React (PWA) -> Firebase Cloud Functions -> Supabase Realtime",
        url: "https://cimedexperience.web.app/onboarding"
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
      impact: "Data Engineering OSINT",
      desc: "Autonomous geo-spatial extraction engine. Systematically harvests and normalizes WFS data, bypassing municipal firewalls and captchas via local ML-OCR to build the region's most comprehensive property database.",
      stack: ["Python 3.11", "ddddOcr", "Pandas", "PostgreSQL"],
      details: {
        innovation: "Hybrid automation blending HTTP payload exploitation with local neural networks to bypass aggressive governmental visual captchas.",
        strongPoints: ["Neural Captcha Resolution", "Massive WFS Extraction", "Tributary-Property Cross-linking"],
        architecture: "Multi-phase asynchronous extraction pipeline. Utilizes Python's Scrapy and custom ML models for high-throughput data normalization.",
        businessImpact: "Unlocked access to 'dark' government data assets, creating the state's largest structured coastal intelligence dataset. This data infrastructure enabled automated real estate due diligence, slashing external auditing costs by 75% and accelerating complex contract closures.",
        technicalChallenges: "Developing a resilient captcha bypass system that adapts to dynamic visual noise without requiring external paid services.",
        topology: "Python (AsyncIO) -> Local ML-OCR -> PostgreSQL Data Lake"
      },
      codeSnippets: [
        {
          title: "Neural Captcha Solver",
          language: "python",
          code: `def solve_captcha(session):
    img = session.get(url_captcha).content
    code = ddddocr.classification(img)
    if session.get(f"{url_solve}{code}").text == '2': return code`
        },
        {
          title: "Geospatial Normalization Pipeline",
          language: "python",
          code: `def normalize_coords(raw_geojson):
    # Converts WFS coordinates to standard GeoJSON (4326)
    gdf = gpd.read_file(io.StringIO(raw_geojson))
    gdf = gdf.to_crs("EPSG:4326")
    return gdf.to_json()`
        }
      ]
    },
    automacao_scraper: {
      title: "AutoScraper Core",
      logo: logoAutoScraper,
      impact: "High-Scale Automation",
      desc: "Distributed bot orchestrator for massive municipal data extraction. Bypasses WAFs via Tor IP multiplexing and self-trained PyTorch OCR models, achieving over 100k records per hour.",
      stack: ["Python", "PyTorch", "Tor", "Playwright"],
      details: {
        innovation: "Master-worker orchestration layer that multiplexes Tor execution threads to defeat rate-limiting and IP-based firewalls.",
        strongPoints: ["Tor Network IP Rotation", "Self-trained OCR Accuracy", "100k+ Records/Hr Capacity"],
        architecture: "Distributed system with isolated Tor port configurations and async worker threads pushing to a central persistence layer.",
        businessImpact: "Scaled market monitoring capacity by 500%, processing massive volumes of distributed data with 99.9% uptime. Intelligent proxy rotation and local neural OCR eliminated external provider dependencies, reducing data acquisition OPEX by 90%.",
        technicalChallenges: "Maintaining pipeline throughput despite Tor network latency and managing complex session states across rotated proxies.",
        topology: "Playwright -> Tor Cluster -> AsyncIO Dispatcher"
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
        businessImpact: "Established a new security standard in home care, achieving 100% adherence to critical medication protocols via offline-resilient architecture. Collected data precision enabled a 15% reduction in hospital readmissions due to medication management errors.",
        technicalChallenges: "Implementing high-priority alarms that remain active through device reboots and aggressive OS battery optimizations.",
        topology: "Android Native (Kotlin) -> Room DB -> Firebase Cloud Sync"
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
        }
      ]
    },
    pharmaflow: {
      title: "PharmaFlow Ecosystem",
      logo: logoPharmaFlow,
      impact: "Supply Chain Optimization",
      desc: "Logistical solution for the pharmaceutical sector. Merges native Android telemetry with a React operations dashboard for real-time delivery tracking and inventory management.",
      stack: ["Kotlin", "Firebase Realtime", "React Web"],
      details: {
        innovation: "High-frequency GPS telemetry pipeline that synchronizes driver coordinates with zero latency (<200ms) to a web-based dispatch hub.",
        strongPoints: ["Real-time Fleet Tracking", "Automated Inventory Deduction", "Cross-platform Data Sync"],
        architecture: "Event-driven architecture where mobile clients push coordinate updates to Firebase, immediately reflected in the React dispatcher.",
        businessImpact: "Optimized last-mile logistics with total supply chain visibility, reducing average delivery time by 25% and zeroing in-transit inventory discrepancies. Real-time telemetry enabled a 12% reduction in fuel and fleet maintenance costs through dynamic route optimization.",
        technicalChallenges: "Managing continuous GPS updates for hundreds of concurrent drivers without degrading mobile battery performance.",
        topology: "Kotlin Android -> Firebase Realtime DB -> React Dashboard"
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
    # Atomic commit to avoid discrepancies on unstable connections
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
      impact: "Legal Tech Automation",
      desc: "Legal document portal for rapid bureaucratic extraction. Uses headless browsers and API reverse engineering to reduce certificate turnaround from days to under 60 seconds.",
      stack: ["Deno", "Node.js", "Puppeteer", "Firebase"],
      details: {
        innovation: "Reverse-engineered public document infrastructures to transform manual bureaucratic processes into instantaneous API calls.",
        strongPoints: ["Headless Browser Automation", "Stateful Token Extraction", "Async Job Orchestration"],
        architecture: "Serverless backend (Deno) managing headless browser clusters that navigate legacy portals and return structured PDF data.",
        businessImpact: "Democratized access to complex certificates, transforming 5-business-day processes into instantaneous 60-second transactions. This operational agility allowed real estate firms and banks to accelerate financing processes, unlocking millions in capital previously stalled by bureaucracy.",
        technicalChallenges: "Maintaining session stability and bypassing CSRF/WAF protections on highly unstable government infrastructure.",
        topology: "Deno Deploy -> Headless Puppeteer -> Supabase Storage"
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
        }
      ]
    },
    marketposter: {
      title: "MarketPoster",
      logo: logoMarketPoster,
      impact: "Retail Empowerment",
      desc: "Professional Android app for dynamic retail poster design. Features C++ OpenCV and offline ML background removal, eliminating the need for design outsourcing.",
      stack: ["Kotlin", "OpenCV", "ML Kit", "Android Native"],
      details: {
        innovation: "On-device AI background removal and professional graphic design capabilities localized for branch-level retail operations.",
        strongPoints: ["Offline ML Segmentation", "Native C++ OpenCV Integration", "Direct Network Printing"],
        architecture: "Resource-intensive native app leveraging ML Kit for image analysis and OpenCV C++ libraries for high-fidelity graphic rendering.",
        businessImpact: "Decentralized creative production, saving hundreds of man-hours per month across 100+ retail units. Eliminating outsourcing costs and increasing response speed to POS price changes resulted in an 8% conversion boost for promotional items.",
        technicalChallenges: "Optimizing ML models and C++ image processing to run smoothly on mid-range Android tablets without UI lag.",
        topology: "Android Native -> ML Kit -> OpenCV C++ -> Network Print"
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
        businessImpact: "Transformed the high-luxury asset sales experience, providing an immersive visualization tool that shortened the client decision cycle by 30%. Real-time data transparency eliminated lot reservation conflicts and bolstered premium investor confidence.",
        technicalChallenges: "Rendering hundreds of reactive GeoJSON overlays while maintaining high scroll and zoom performance in the browser.",
        topology: "React -> SVG/Leaflet Hybrid -> Firebase Realtime"
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
      desc: "Autonomous pipeline for instant inbound lead capture via IMAP parsing. Uses complex regex to pipe leads directly into CRM webhooks with zero latency.",
      stack: ["Python", "IMAP/SMTP", "Supabase", "Node"],
      details: {
        innovation: "Zero-latency data routing converting raw unstructured email text into clean, structured CRM entries automatically.",
        strongPoints: ["Robust Regex Extractions", "Continuous IMAP Monitoring", "Supabase Webhook Integration"],
        architecture: "Independent Python watcher service processing email bodies and triggering real-time database synchronizations via Supabase.",
        businessImpact: "Eradicated lead leakage by 100% by automating data capture from legacy sources (email) into modern CRMs. Instant response to new leads increased the successful contact rate by 40%, directly impacting the sales pipeline and marketing ROI.",
        technicalChallenges: "Maintaining stable IMAP connections with legacy providers and handling wildly inconsistent email body formats through regex.",
        topology: "Python (IMAP Listener) -> Supabase Sync -> CRM Webhook"
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
        }
      ]
    }
  },
  skills: {
    java: "Reactive JVM Systems (Java/Kotlin, Spring Boot 3, Hibernate, Micronaut, Clean Architecture, Design Patterns)",
    react: "React 19 Ecosystem (TypeScript, Complex State Management, Next.js, Performance Optimization, High-Scale PWAs)",
    spring: "Data Engineering & DBAs (Advanced PostgreSQL, PostGIS, Spatial Indexing, Pandas, Big Data Pipelines)",
    python: "Artificial Intelligence & Automation (PyTorch, Custom OCR Models, OpenCV, Computer Vision, Headless Scrapers)",
    cloud: "Cloud & Edge Architecture (Deno Edge Functions, Supabase Realtime, AWS S3/EC2, Firebase Serverless, CI/CD)",
    gis: "Mission-Critical GIS Intelligence (GeoServer WFS/WMS, QGis Desktop/Server, GeoJSON, Leaflet Integration)",
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
    title: "Executive Presentation",
    message: "I architect scalable systems designed for absolute resilience. Select the localized executive summary for the region of interest.",
    btnEn: "Stay in English",
    btnPt: "Mudar para Português"
  }
}
