import { useI18n, type Project } from '../hooks/useI18n'

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
        maxWidth: '800px', width: '90%', maxHeight: '90vh', overflowY: 'auto',
        padding: '3rem', border: '2px solid var(--primary-gold)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
              <span className="section-label">{project.impact}</span>
              <h2 className="gradient-heading" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{project.title}</h2>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' }}>×</button>
        </div>

        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2.5rem' }}>{project.desc}</p>

        {project.details && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {lang === 'en' ? 'Core Innovation' : 'Inovação Principal'}
              </h4>
              <p style={{ fontSize: '0.95rem' }}>{project.details.innovation}</p>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {lang === 'en' ? 'Strong Points' : 'Pontos Fortes'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.details.strongPoints.map((point: string, i: number) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>⚡ {point}</li>
                ))}
              </ul>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {lang === 'en' ? 'Architecture' : 'Arquitetura'}
              </h4>
              <div className="terminal-block" style={{ padding: '1.5rem', opacity: 0.8 }}>
                {project.details.architecture}
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.stack.map((s: string) => (
            <span key={s} className="tech-tag">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
