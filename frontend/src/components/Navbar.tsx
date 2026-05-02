import { useI18n } from '../hooks/useI18n'
import { Settings, Globe2 } from 'lucide-react'

export function Navbar({ onShowAdmin }: { onShowAdmin: () => void }) {
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
            title={lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
          >
            <Globe2 size={16} className="mr-05" />
            <span>{lang === 'en' ? 'EN' : 'PT'}</span>
          </button>

          {window.location.hostname === 'localhost' && (
            <button 
              onClick={onShowAdmin}
              className="navbar-lang-btn navbar-admin-btn"
              title="Admin Messages"
            >
              <Settings size={16} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
