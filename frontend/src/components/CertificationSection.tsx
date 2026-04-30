import { useI18n } from '../hooks/useI18n'
import { motion } from 'framer-motion'

export function CertificationSection() {
  const { t } = useI18n();

  return (
    <section id="certifications" className="cert-section">
      <span className="section-label">{t.sections.certifications}</span>
      <div className="cert-grid mt-2">
        {t.certs.map((cert: { name: string; date: string }, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="card-masterpiece cert-card"
          >
            <h4 className="cert-name mb-1">{cert.name}</h4>
            <span className="cert-date">{cert.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
