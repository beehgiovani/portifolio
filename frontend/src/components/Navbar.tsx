import { useI18n } from '../hooks/useI18n'

export function Navbar() {
  const { lang, setLang, t } = useI18n();

  return (
    <nav className="nav-masterpiece">
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', width: '100%' }}>
        <div style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary-gold)', letterSpacing: '-0.05em' }}>
          BRUNO.DEV
        </div>
        
        <div className="nav-links" style={{ marginLeft: 'auto' }}>
          <a href="#projects" className="nav-link">{t.sections.projects}</a>
          <a href="#skills" className="nav-link">{t.sections.skills}</a>
          <a href="#experience" className="nav-link">{lang === 'en' ? 'Journey' : 'Jornada'}</a>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            className="nav-link"
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid var(--border-glass)', 
              padding: '0.5rem 1rem', 
              borderRadius: '10px', 
              color: '#fff', 
              cursor: 'pointer' 
            }}
          >
            {lang === 'en' ? 'Português' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}
