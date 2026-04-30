import { useI18n } from '../hooks/useI18n'
import { motion } from 'framer-motion'

export function ExperienceTimeline() {
  const { t } = useI18n();

  const journey = (t.experience as { date: string; role: string; desc: string }[]) || [];

  return (
    <section id="experience" className="experience-section">
      <span className="section-label">{t.sections.experience}</span>
      <div className="grid-bento experience-grid">
        {journey.map((item: { date: string; role: string; desc: string }, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="card-masterpiece experience-card"
          >
            <span className="experience-date">{item.date}</span>
            <h4 className="experience-role">{item.role}</h4>
            <p className="experience-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
