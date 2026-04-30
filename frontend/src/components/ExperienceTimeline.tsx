import { useI18n } from '../hooks/useI18n'
import { motion } from 'framer-motion'

export function ExperienceTimeline() {
  const { t } = useI18n();

  const journey = (t.experience as { date: string; role: string; desc: string }[]) || [];

  return (
    <section id="experience" style={{ padding: '8rem 0' }}>
      <span className="section-label">{t.sections.experience}</span>
      <div className="grid-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {journey.map((item: { date: string; role: string; desc: string }, idx: number) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="card-masterpiece" 
            style={{ padding: '2rem' }}
          >
            <span style={{ color: 'var(--primary-gold)', fontWeight: 800 }}>{item.date}</span>
            <h4 style={{ margin: '0.8rem 0 0.5rem', fontSize: '1.4rem' }}>{item.role}</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
