import { useState, useEffect, useRef } from 'react'
import { useI18n } from './hooks/useI18n.ts'
import type { Project } from './types/project.ts'
import { motion } from 'framer-motion'
import {
  Zap, Code2, Atom, Database, Brain,
  Cloud, Map, Layers, Smartphone,
  Network, Banknote, Globe2, Languages
} from 'lucide-react'
import { AnimatedIcon } from './components/AnimatedIcon'
import { ContactForm } from './components/ContactForm'

// Importando nossos componentes modulares
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoMarquee } from './components/LogoMarquee'
import { ProjectGrid } from './components/ProjectGrid'
import { ProjectModal } from './components/ProjectModal'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { CertificationSection } from './components/CertificationSection'
import { TechMarquee } from './components/TechMarquee'
import { AdminMessages } from './components/AdminMessages'
import { ResumeManager } from './components/ResumeManager'

// Comportamentos visuais globais (Movidos para cá pra centralizar)
function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div ref={glowRef} className="ambient-glow"></div>
  );
}

function App() {
  const { t, lang } = useI18n();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isAdminAuthorized, setIsAdminAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isLocal = window.location.hostname === 'localhost';
      const hasStoredToken = localStorage.getItem('admin_authorized') === 'true';

      const urlParams = new URLSearchParams(window.location.search);
      const accessKey = urlParams.get('access_key');

      const ADMIN_HASH = 'fc79fc22787172c45089fdfec21c03161980c8ccbc2979ca24bcfaaf607d3349';

      const hashKey = async (key: string) => {
        try {
          const encoder = new TextEncoder();
          const data = encoder.encode(key);
          const hashBuffer = await crypto.subtle.digest('SHA-256', data);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (e) {
          console.error('Hash error:', e);
          return '';
        }
      };

      if (accessKey) {
        const hashedInput = await hashKey(accessKey);
        if (hashedInput === ADMIN_HASH) {
          localStorage.setItem('admin_authorized', 'true');
          setIsAdminAuthorized(true);
          window.history.replaceState({}, document.title, window.location.pathname);
          return;
        }
      }

      if (isLocal || hasStoredToken) {
        setIsAdminAuthorized(true);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="container app-container">
      <MouseGlow />

      <Navbar
        onShowAdmin={() => setShowAdmin(true)}
        onShowResume={() => setShowResume(true)}
        isAdmin={isAdminAuthorized}
      />

      <main className="app-main">
        <Hero />

        <TechMarquee />

        <LogoMarquee />

        <ProjectGrid onSelect={(p) => setSelectedProject(p)} />

        <ExperienceTimeline />

        <CertificationSection />

        {/* Seção de Autoridade Técnica (Skills) */}
        <section id="skills" className="skills-section">
          <span className="section-label">{t.sections.skills}</span>
          <div className="grid-bento skills-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-masterpiece skills-card"
            >
              <h4 className="skills-h4">
                <AnimatedIcon icon={Code2} />
                Expert Tech Stack
              </h4>
              <ul className="skills-ul">
                <li className="skills-li">
                  <AnimatedIcon icon={Zap} animation="pulse" />
                  {t.skills.java}
                </li>
                <li className="skills-li">
                  <AnimatedIcon icon={Atom} animation="spin" />
                  {t.skills.react}
                </li>
                <li className="skills-li">
                  <AnimatedIcon icon={Database} animation="pulse" />
                  {t.skills.spring}
                </li>
                <li className="skills-li">
                  <AnimatedIcon icon={Brain} animation="float" />
                  {t.skills.python}
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-masterpiece skills-card"
            >
              <h4 className="skills-h4-white">
                <AnimatedIcon icon={Network} color="#fff" />
                Ecosystem Authority
              </h4>
              <ul className="skills-ul">
                <li className="skills-li">
                  <AnimatedIcon icon={Cloud} animation="float" />
                  {t.skills.cloud}
                </li>
                <li className="skills-li">
                  <AnimatedIcon icon={Map} animation="bounce" />
                  {t.skills.gis}
                </li>
                <li className="skills-li">
                  <AnimatedIcon icon={Layers} animation="float" />
                  {t.skills.arch}
                </li>
                <li className="skills-li">
                  <AnimatedIcon icon={Smartphone} animation="pulse" />
                  {t.skills.node}
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Rodapé principal */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="app-footer"
      >
        <h3 className="gradient-heading footer-title">{t.sections.contact}</h3>
        <p className="footer-phone">
          {t.contact.phone}
        </p>
        <p className="footer-email">
          {t.contact.email}
        </p>
        <div className="footer-social">
          <a href={t.contact.linkedin} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
          <a href={t.contact.github} target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
        </div>

        <ContactForm />

        <div className="footer-details-box">
          <h4 className="footer-details-title">{lang === 'en' ? 'Professional Details (Mid/Senior)' : 'Detalhes Profissionais (Pleno/Sênior)'}</h4>
          <div className="footer-details-grid">
            <div className="footer-detail-item">
              <AnimatedIcon icon={Banknote} animation="pulse" />
              <div className="footer-detail-content">
                <div className="footer-topic">
                  <span className="topic-label">PJ (B2B):</span>
                  <div className="topic-group">
                    <span className="topic-value">$ 4,000 - 6,500 USD</span>
                    <span className="topic-subvalue">($ 25 - 45/h)</span>
                  </div>
                  <div className="topic-group">
                    <span className="topic-value">R$ 10.000 - 12.000</span>
                    <span className="topic-subvalue">(R$ 60 - 75/h)</span>
                  </div>
                </div>
                <div className="footer-topic">
                  <span className="topic-label">CLT:</span>
                  <div className="topic-group">
                    <span className="topic-value">R$ 8,000 - 9,500</span>
                    <span className="topic-subvalue">(+ Benefícios)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-detail-item">
              <AnimatedIcon icon={Globe2} animation="spin" />
              <div className="footer-detail-content">
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'MODEL' : 'MODELO'}:</span>
                  <span className="topic-value">{lang === 'en' ? 'Remote, Hybrid or On-site' : 'Remoto, Híbrido ou Presencial'}</span>
                </div>
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'MOBILITY' : 'MOBILIDADE'}:</span>
                  <span className="topic-value">{lang === 'en' ? 'Fully available for travel' : 'Total disponibilidade para viagens'}</span>
                </div>
              </div>
            </div>

            <div className="footer-detail-item">
              <AnimatedIcon icon={Languages} animation="float" />
              <div className="footer-detail-content">
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'NATIVE' : 'NATIVO'}:</span>
                  <span className="topic-value">{lang === 'en' ? 'Portuguese (Native)' : 'Português (Nativo)'}</span>
                </div>
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'SECOND' : 'SEGUNDO'}:</span>
                  <span className="topic-value">{lang === 'en' ? 'English (Intermediate B2)' : 'Inglês (Intermediário B2)'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>

      {showAdmin && isAdminAuthorized && (
        <AdminMessages onClose={() => setShowAdmin(false)} />
      )}

      {showResume && isAdminAuthorized && (
        <ResumeManager onClose={() => setShowResume(false)} />
      )}
    </div>
  );
}

export default App
