import { useI18n } from '../hooks/useI18n'

export function CertificationSection() {
  const { t } = useI18n();

  return (
    <section id="certifications" style={{ paddingBottom: '8rem' }}>
      <span className="section-label">{t.sections.certifications}</span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {t.certs.map((cert: any, idx: number) => (
          <div key={idx} className="card-masterpiece" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary-gold)' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{cert.name}</h4>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800 }}>{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
