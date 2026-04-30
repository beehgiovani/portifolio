import { useState } from 'react'
import { useI18n, type Project } from './hooks/useI18n'

// Importando nossos componentes modulares
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoMarquee } from './components/LogoMarquee'
import { ProjectGrid } from './components/ProjectGrid'
import { ProjectModal } from './components/ProjectModal'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { CertificationSection } from './components/CertificationSection'
import { LanguageDialog } from './components/LanguageDialog'

// Comportamentos visuais globais (Movidos para cá pra centralizar)
function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  useState(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  });

  return (
    <div className="ambient-glow" style={{ 
      width: '500px', height: '500px',
      transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
      transition: 'transform 0.1s ease-out'
    }}></div>
  );
}

function App() {
  const { t, setLang } = useI18n();
  const [showDialog, setShowDialog] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (showDialog) {
    return <LanguageDialog onSelect={(l) => { setLang(l); setShowDialog(false); }} />;
  }

  return (
    <div className="container" style={{ position: 'relative' }}>
      <MouseGlow />
      
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        
        <LogoMarquee />

        <ProjectGrid onSelect={(p) => setSelectedProject(p)} />

        <ExperienceTimeline />

        <CertificationSection />

        {/* Seção de Autoridade Técnica (Skills) */}
        <section id="skills" style={{ paddingBottom: '8rem' }}>
          <span className="section-label">{t.sections.skills}</span>
          <div className="grid-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '2rem' }}>
            <div className="card-masterpiece" style={{ padding: '2rem', flex: 1 }}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--primary-gold)' }}>Expert Tech Stack</h4>
              <ul style={{ listStyle: 'none', color: '#94a3b8', fontSize: '1rem' }}>
                <li style={{ marginBottom: '1rem' }}>⚡ {t.skills.java}</li>
                <li style={{ marginBottom: '1rem' }}>⚡ {t.skills.react}</li>
                <li style={{ marginBottom: '1rem' }}>⚡ {t.skills.spring}</li>
                <li style={{ marginBottom: '1rem' }}>⚡ {t.skills.python}</li>
              </ul>
            </div>
            
            <div className="card-masterpiece" style={{ padding: '2rem', flex: 1 }}>
              <h4 style={{ marginBottom: '1.5rem' }}>Ecosystem Authority</h4>
              <ul style={{ listStyle: 'none', color: '#94a3b8', fontSize: '1rem' }}>
                <li style={{ marginBottom: '1rem' }}>☁️ {t.skills.cloud}</li>
                <li style={{ marginBottom: '1rem' }}>🗺️ {t.skills.gis}</li>
                <li style={{ marginBottom: '1rem' }}>🏛️ {t.skills.arch}</li>
                <li style={{ marginBottom: '1rem' }}>🤖 AI & Computer Vision</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Rodapé principal */}
      <footer style={{ padding: '8rem 0 4rem', textAlign: 'center', borderTop: '1px solid var(--border-glass)' }}>
        <h3 className="gradient-heading" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t.sections.contact}</h3>
        <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          {t.contact.phone}
        </p>
        <p style={{ color: 'var(--primary-gold)', marginBottom: '3rem' }}>
          {t.contact.email}
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <a href={t.contact.linkedin} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
          <a href={t.contact.github} target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
        </div>
        <p style={{ color: '#4b5563', fontSize: '0.8rem' }}>
          Precision Engineering. © 2026 Bruno Giovani Pereira
        </p>
      </footer>
    </div>
  );
}

export default App

