import { useI18n } from '../hooks/useI18n'

export function Navbar() {
  const { lang, setLang, t } = useI18n();

  return (
    <nav className="nav-masterpiece">
      <div className="navbar-container">
        <div className="navbar-brand">
          BRUNO.DEV
        </div>
        
        <div className="nav-links ml-auto">
          <a href="#projects" className="nav-link">{t.sections.projects}</a>
          <a href="#skills" className="nav-link">{t.sections.skills}</a>
          <a href="#experience" className="nav-link">{lang === 'en' ? 'Journey' : 'Jornada'}</a>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            className="navbar-lang-btn"
          >
            {lang === 'en' ? 'Português' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}
