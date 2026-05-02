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

  return (
    <div className="container app-container">
      <MouseGlow />

      <Navbar onShowAdmin={() => setShowAdmin(true)} />

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

      {showAdmin && window.location.hostname === 'localhost' && (
        <AdminMessages onClose={() => setShowAdmin(false)} />
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
          <h4 className="footer-details-title">{lang === 'en' ? 'Professional Details' : 'Detalhes Profissionais'}</h4>
          <div className="footer-details-grid">
            <div className="footer-detail-item">
              <AnimatedIcon icon={Banknote} animation="pulse" />
              <div className="footer-detail-content">
                <div className="footer-topic">
                  <span className="topic-label">PJ (B2B):</span>
                  <span className="topic-value">R$ 10k - 12k (R$ 60-75/h)</span>
                </div>
                <div className="footer-topic">
                  <span className="topic-label">CLT (Full-Time):</span>
                  <span className="topic-value">R$ 8k - 9.5k (+ Ben.)</span>
                </div>
              </div>
            </div>

            <div className="footer-detail-item">
              <AnimatedIcon icon={Globe2} animation="spin" />
              <div className="footer-detail-content">
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'MODEL' : 'MODELO'}:</span>
                  <span className="topic-value">Remoto, Híbrido ou Presencial</span>
                </div>
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'MOBILITY' : 'MOBILIDADE'}:</span>
                  <span className="topic-value">Disponível para viagens</span>
                </div>
              </div>
            </div>

            <div className="footer-detail-item">
              <AnimatedIcon icon={Languages} animation="float" />
              <div className="footer-detail-content">
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'NATIVE' : 'NATIVO'}:</span>
                  <span className="topic-value">Português (Nativo)</span>
                </div>
                <div className="footer-topic">
                  <span className="topic-label">{lang === 'en' ? 'SECOND' : 'SEGUNDO'}:</span>
                  <span className="topic-value">Inglês (Intermediário B1/B2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Precision Engineering. © 2026 Bruno Giovani Pereira
        </p>
      </motion.footer>
    </div>
  );
}

export default App

