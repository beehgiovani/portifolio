import { useI18n } from '../hooks/useI18n'
import { motion } from 'framer-motion'

export function CertificationSection() {
  const { t } = useI18n();

  return (
    <section id="certifications" style={{ paddingBottom: '8rem' }}>
      <span className="section-label">{t.sections.certifications}</span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {t.certs.map((cert: { name: string; date: string }, idx: number) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="card-masterpiece" 
            style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary-gold)' }}
          >
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{cert.name}</h4>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800 }}>{cert.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
