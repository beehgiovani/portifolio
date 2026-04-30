import { useI18n } from '../hooks/useI18n'
import profilePic from '../assets/profile.jpg'
import { motion } from 'framer-motion'

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero-section-master">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={profilePic} alt="Bruno" className="profile-squircle" />
        <h1 className="gradient-heading" style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', lineHeight: 0.85, marginBottom: '2rem' }}>
          {t.hero.greeting}
        </h1>
        <p className="hero-tagline" style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary-gold)', marginBottom: '1.5rem' }}>
          {t.hero.role} | {t.hero.years}
        </p>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto 3rem' }}>
          {t.hero.tagline}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span className="tech-tag" style={{ border: 'none', color: 'var(--primary-gold)' }}>#SeniorFullStack</span>
          <span className="tech-tag" style={{ border: 'none', color: '#fff' }}>#AI_Solutions_Architect</span>
          <span className="tech-tag" style={{ border: 'none', color: 'var(--text-muted)' }}>#Cloud_Native</span>
          <span className="tech-tag" style={{ border: 'none', color: '#fff' }}>#Geo_Intelligence</span>
        </div>
      </motion.div>
    </section>
  );
}
