import { useRef } from 'react'
import { useI18n } from '../hooks/useI18n.ts'
import type { Project } from '../types/project.ts'
import { motion } from 'framer-motion'


export function ProjectCard({ project, onSelect, span = false }: { project: Project, onSelect: (p: Project) => void, span?: number | boolean }) {
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
      className={`card-masterpiece cursor-pointer ${span === 2 ? 'card-span-2' : span === 3 ? 'card-span-3' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={() => onSelect(project)}
    >
      <div className="project-card-header">
        <div>
          <span className="section-label">{project.impact}</span>
          <h3 className="project-card-title">{project.title}</h3>
        </div>
        {project.logo && (
          <img src={project.logo} alt={project.title} className="project-card-logo" />
        )}
      </div>
      <p className="project-card-desc">{project.desc}</p>
      <div className="project-card-tech-container">
        {project.stack.map((s: string) => (
          <span key={s} className="tech-tag project-card-tech-tag">{s}</span>
        ))}
      </div>

      <div className="project-card-footer">
        {useI18n().lang === 'en' ? 'Click for Strong Points →' : 'Ver Pontos Fortes →'}
      </div>
    </motion.div>
  );
}

export function ProjectGrid({ onSelect }: { onSelect: (p: Project) => void }) {
  const { t } = useI18n();
  const projectList: Project[] = Object.values(t.projects);

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="projects-title"
      >
        {t.sections.projects}
      </motion.h2>
      <div className="grid-bento">
        {projectList.map((project: Project, idx: number) => {
          // Custom Bento Layout Logic
          let span: number | boolean = false;
          
          // Lógica para 11 projetos fecharem 5 linhas perfeitas (15 slots)
          if (idx === 0) span = 3; // PredictMed (Linha 1 completa)
          if (idx === 1) span = 2; // GuaruGeo (Linha 2)
          if (idx === 2) span = 2; // Cimed Experience (Linha 3)
          // Os outros 8 projetos ocupam 1 slot cada, preenchendo os buracos
          
          return (
            <ProjectCard
              key={idx}
              project={project}
              onSelect={onSelect}
              span={span}
            />
          );
        })}
      </div>
    </section>
  );
}
