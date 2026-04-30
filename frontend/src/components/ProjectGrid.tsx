import { useRef } from 'react'
import { useI18n, type Project } from '../hooks/useI18n'
import { motion } from 'framer-motion'

export function ProjectCard({ project, onSelect, span = false }: { project: Project, onSelect: (p: Project) => void, span?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${y * -12}deg) translateY(-8px)`;
  };

  const reset = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
  };

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`card-masterpiece ${span ? 'card-span-2' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={() => onSelect(project)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span className="section-label">{project.impact}</span>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--primary-gold)' }}>{project.title}</h3>
        </div>
        {project.logo && (
          <img src={project.logo} alt={project.title} style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '8px', 
            objectFit: 'contain',
            background: 'rgba(255,255,255,0.03)',
            padding: '4px',
            border: '1px solid var(--border-glass)'
          }} />
        )}
      </div>
      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '2rem' }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {project.stack.map((s: string) => (
          <span key={s} className="tech-tag" style={{ margin: 0 }}>{s}</span>
        ))}
      </div>
      
      <div style={{ marginTop: '1.5rem', color: 'var(--primary-gold)', fontSize: '0.75rem', fontWeight: 800 }}>
        {useI18n().lang === 'en' ? 'Click for Strong Points →' : 'Ver Pontos Fortes →'}
      </div>
    </motion.div>
  );
}

export function ProjectGrid({ onSelect }: { onSelect: (p: Project) => void }) {
  const { t } = useI18n();
  const projectList: Project[] = Object.values(t.projects);

  return (
    <section id="projects" style={{ marginTop: '5rem' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.5rem', marginBottom: '4rem' }}
      >
        {t.sections.projects}
      </motion.h2>
      <div className="grid-bento">
        {projectList.map((project: Project, idx: number) => (
          <ProjectCard 
            key={idx} 
            project={project} 
            onSelect={onSelect} 
            span={idx === 0 || idx === 3} 
          />
        ))}
      </div>
    </section>
  );
}
