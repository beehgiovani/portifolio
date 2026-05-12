import { useI18n } from '../hooks/useI18n.ts'
import { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { Project } from '../types/project.ts'
import { 
  Network, Target, Lightbulb, Zap, Settings, Camera, CheckCircle2
} from 'lucide-react'
import { AnimatedIcon } from './AnimatedIcon'

const codeCustomStyle = { margin: 0, padding: '1.5rem', fontSize: '0.9rem' };

export function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  const { lang } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!project) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null && project.screenshots) {
      setActiveIndex((activeIndex + 1) % project.screenshots.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null && project.screenshots) {
      setActiveIndex((activeIndex - 1 + project.screenshots.length) % project.screenshots.length);
    }
  };

  return (
    <>
      <div className="modal-overlay pm-overlay" onClick={onClose}>
        <div className={`card-masterpiece animate-reveal pm-card ${isMobile ? 'pm-mobile' : ''}`} onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="pm-header">
            <div className="pm-logo-wrapper">
              {project.logo && (
                <img src={project.logo} alt={project.title} className="pm-logo" loading="lazy" />
              )}
              <div>
                <span className="section-label pm-label">{project.impact}</span>
                <h2 className="gradient-heading pm-title">{project.title}</h2>
                <p className="pm-desc">{project.desc}</p>
              </div>
            </div>
            <button onClick={onClose} className="pm-close-btn">×</button>
          </div>

          {/* Tags */}
          <div className="pm-tags-container">
            {project.stack.map((s: string) => (
              <span key={s} className="tech-tag pm-tech-tag">{s}</span>
            ))}
          </div>

          {/* Bento Grid */}
          {project.details && (
            <div className="grid-bento pm-bento-grid">

              {/* Topologia da Arquitetura */}
              <div className="card-masterpiece pm-bento-full pm-arch-section">
                <div className="pm-arch-header">
                  <h4 className="pm-h4">
                    <AnimatedIcon icon={Network} size={20} animation="float" />
                    {lang === 'en' ? 'Architecture Topology' : 'Topologia da Arquitetura'}
                  </h4>
                  {project.details.url && (
                    <a href={project.details.url} target="_blank" rel="noopener noreferrer" className="pm-live-btn">
                      {lang === 'en' ? 'Live Project' : 'Ver Online'} ↗
                    </a>
                  )}
                  {project.details.github && (
                    <a href={project.details.github} target="_blank" rel="noopener noreferrer" className="pm-live-btn github-btn">
                      GitHub ↗
                    </a>
                  )}
                </div>
                <div className="terminal-block pm-arch-block">
                  {project.details.topology || project.details.architecture}
                </div>
              </div>

              {/* Impacto / Business Impact */}
              {project.details.businessImpact && (
                <div className="card-masterpiece pm-bento-full">
                  <h4 className="pm-h4">
                    <AnimatedIcon icon={Target} size={20} animation="pulse" />
                    {lang === 'en' ? 'Business Impact' : 'Impacto de Negócio'}
                  </h4>
                  <p className="pm-p">{project.details.businessImpact}</p>
                </div>
              )}

              {/* Inovação */}
              <div className="card-masterpiece pm-bento-item">
                <h4 className="pm-h4">
                  <AnimatedIcon icon={Lightbulb} size={20} animation="float" />
                  {lang === 'en' ? 'Core Innovation' : 'Inovação Principal'}
                </h4>
                <p className="pm-p-sm">{project.details.innovation}</p>
              </div>

              {/* Pontos Fortes */}
              <div className="card-masterpiece pm-bento-item">
                <h4 className="pm-h4">
                  <AnimatedIcon icon={Zap} size={20} animation="pulse" />
                  {lang === 'en' ? 'Strong Points' : 'Pontos Fortes'}
                </h4>
                <ul className="pm-ul">
                  {project.details.strongPoints.map((point: string, i: number) => (
                    <li key={i} className="pm-li">
                      <AnimatedIcon icon={CheckCircle2} size={14} color="var(--primary-gold)" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desafios Técnicos */}
              {project.details.technicalChallenges && (
                <div className="card-masterpiece pm-bento-item">
                  <h4 className="pm-h4">
                    <AnimatedIcon icon={Settings} size={20} animation="spin" />
                    {lang === 'en' ? 'Technical Challenges Overcome' : 'Desafios Técnicos Superados'}
                  </h4>
                  <p className="pm-p-sm">{project.details.technicalChallenges}</p>
                </div>
              )}

              {/* Trechos de Código */}
              {(project.codeSnippets || (project.codeSnippet && project.codeLanguage)) && (
                <div className="card-masterpiece pm-code-container">
                  <h4 className="pm-h4">
                    <span className="mr-05">{'</>'}</span>
                    {lang === 'en' ? 'Technical Authority Snippets' : 'Trechos de Autoridade Técnica'}
                  </h4>

                  {project.codeSnippets ? (
                    <div className="pm-snippets-stack">
                      {project.codeSnippets.map((snippet, idx) => (
                        <div key={idx} className="pm-snippet-item">
                          <h5 className="pm-snippet-title">{snippet.title}</h5>
                          <div className="pm-code-wrapper">
                            <SyntaxHighlighter
                              language={snippet.language}
                              style={vscDarkPlus}
                              customStyle={codeCustomStyle}
                              showLineNumbers={true}
                            >
                              {snippet.code}
                            </SyntaxHighlighter>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pm-code-wrapper">
                      <SyntaxHighlighter
                        language={project.codeLanguage!}
                        style={vscDarkPlus}
                        customStyle={codeCustomStyle}
                        showLineNumbers={true}
                      >
                        {project.codeSnippet!}
                      </SyntaxHighlighter>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="pm-screenshots-container">
              <h4 className="pm-h4">
                <AnimatedIcon icon={Camera} size={20} animation="float" />
                {lang === 'en' ? 'Project Screenshots' : 'Telas do Sistema'}
              </h4>
              <div className="pm-screenshots-grid">
                {project.screenshots.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="pm-screenshot-img"
                    loading="lazy"
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && project.screenshots && (
        <div className="pm-lightbox-overlay" onClick={() => setActiveIndex(null)}>
          <div className="pm-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="pm-lightbox-close" onClick={() => setActiveIndex(null)}>×</button>
            
            {project.screenshots.length > 1 && (
              <>
                <button className="pm-lightbox-nav prev" onClick={handlePrev}>‹</button>
                <button className="pm-lightbox-nav next" onClick={handleNext}>›</button>
              </>
            )}

            <img 
              src={project.screenshots[activeIndex]} 
              alt="Enlarged screenshot" 
              className="pm-lightbox-img" 
            />
          </div>
        </div>
      )}
    </>
  );
}
