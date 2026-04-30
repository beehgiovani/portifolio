import { useI18n, type Project } from '../hooks/useI18n'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  const { lang } = useI18n();

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(2, 6, 23, 0.90)', zIndex: 9999, display: 'flex',
      alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(25px)'
    }}>
      <div className="card-masterpiece animate-reveal" onClick={(e) => e.stopPropagation()} style={{
        maxWidth: '1000px', width: '95%', maxHeight: '90vh', overflowY: 'auto',
        padding: '3rem', border: '2px solid var(--primary-gold)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {project.logo && (
              <img src={project.logo} alt={project.title} style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '16px', 
                objectFit: 'contain',
                background: 'rgba(255,255,255,0.05)',
                padding: '10px',
                border: '1px solid var(--border-glass)'
              }} />
            )}
            <div>
              <span className="section-label" style={{ marginBottom: '0.5rem' }}>{project.impact}</span>
              <h2 className="gradient-heading" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>{project.title}</h2>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px' }}>{project.desc}</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', padding: '0 1rem' }}>×</button>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {project.stack.map((s: string) => (
            <span key={s} className="tech-tag" style={{ margin: 0 }}>{s}</span>
          ))}
        </div>

        {/* Bento Grid */}
        {project.details && (
          <div className="grid-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            {/* Impacto / Business Impact */}
            {project.details.businessImpact && (
              <div className="card-masterpiece" style={{ padding: '2rem', border: '1px solid var(--primary-gold)', gridColumn: '1 / -1', justifyContent: 'flex-start' }}>
                <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🎯 {lang === 'en' ? 'Business Impact' : 'Impacto de Negócio'}
                </h4>
                <p style={{ fontSize: '1.05rem', color: '#e2e8f0', lineHeight: '1.6' }}>{project.details.businessImpact}</p>
              </div>
            )}

            {/* Inovação */}
            <div className="card-masterpiece" style={{ padding: '2rem', justifyContent: 'flex-start' }}>
              <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                💡 {lang === 'en' ? 'Core Innovation' : 'Inovação Principal'}
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.5' }}>{project.details.innovation}</p>
            </div>
            
            {/* Pontos Fortes */}
            <div className="card-masterpiece" style={{ padding: '2rem', justifyContent: 'flex-start' }}>
              <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ⚡ {lang === 'en' ? 'Strong Points' : 'Pontos Fortes'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {project.details.strongPoints.map((point: string, i: number) => (
                  <li key={i} style={{ marginBottom: '0.8rem', color: '#cbd5e1', fontSize: '0.95rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-gold)' }}>✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desafios Técnicos */}
            {project.details.technicalChallenges && (
              <div className="card-masterpiece" style={{ padding: '2rem', gridColumn: '1 / -1', justifyContent: 'flex-start' }}>
                <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ⚙️ {lang === 'en' ? 'Technical Challenges Overcome' : 'Desafios Técnicos Superados'}
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{project.details.technicalChallenges}</p>
              </div>
            )}

            {/* Arquitetura */}
            <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
              <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {lang === 'en' ? 'Architecture Topology' : 'Topologia da Arquitetura'}
              </h4>
              <div className="terminal-block" style={{ padding: '2rem', opacity: 0.9, fontSize: '1rem', lineHeight: '1.6' }}>
                {project.details.architecture}
              </div>
            </div>
            
            {/* Code Snippet Embutido */}
            {project.codeSnippet && project.codeLanguage && (
              <div className="card-masterpiece" style={{ padding: '2rem', marginTop: '2rem', gridColumn: '1 / -1', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>{'</>'}</span> 
                  {lang === 'en' ? 'Core Implementation Snapshot' : 'Trecho Principal de Implementação'}
                </h4>
                <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <SyntaxHighlighter 
                    language={project.codeLanguage} 
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.9rem' }}
                    showLineNumbers={true}
                  >
                    {project.codeSnippet}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
