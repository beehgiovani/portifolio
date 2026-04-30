import { useI18n } from '../hooks/useI18n'
import { Settings } from 'lucide-react'

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
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>

          <button 
            onClick={onShowAdmin}
            className="navbar-lang-btn"
            style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}
            title="Admin Messages"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
}
