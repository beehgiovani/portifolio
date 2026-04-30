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
        <h1 className="gradient-heading hero-gradient-heading">
          {t.hero.greeting}
        </h1>
        <p className="hero-role-tagline">
          {t.hero.role} | {t.hero.years}
        </p>
        <p className="hero-description">
          {t.hero.tagline}
        </p>
        <div className="hero-tag-container">
          <span className="tech-tag tag-gold">#Pleno/SeniorFullStack</span>
          <span className="tech-tag tag-white">#AI_Solutions_Architect</span>
          <span className="tech-tag tag-muted">#Cloud_Native</span>
          <span className="tech-tag tag-white">#Geo_Intelligence</span>
        </div>
      </motion.div>
    </section>
  );
}
