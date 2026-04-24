import { useI18n } from '../hooks/useI18n'

export function LanguageDialog({ onSelect }: { onSelect: (l: 'en' | 'pt') => void }) {
  const { t } = useI18n();
  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.98)', zIndex: 9999, display: 'flex',
      alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(30px)'
    }}>
      <div className="card-masterpiece animate-reveal" style={{ maxWidth: '550px', textAlign: 'center', padding: '3.5rem', border: '1px solid var(--primary-gold-dim)' }}>
        <h2 className="gradient-heading" style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>{t.dialog.title}</h2>
        <p style={{ color: '#94a3b8', marginBottom: '3rem', fontSize: '1.05rem' }}>{t.dialog.message}</p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <button className="nav-link" onClick={() => onSelect('en')} style={{ padding: '1rem 2rem', border: '1px solid var(--border-glass)', borderRadius: '15px' }}>
            {t.dialog.btnEn}
          </button>
          <button 
            className="nav-link" 
            onClick={() => onSelect('pt')} 
            style={{ 
              padding: '1rem 2rem', 
              background: 'var(--primary-gold)', 
              color: '#000', 
              borderRadius: '15px',
              border: 'none',
              fontWeight: 800,
              boxShadow: '0 0 30px var(--primary-gold-dim)'
            }}
          >
            {t.dialog.btnPt}
          </button>
        </div>
      </div>
    </div>
  );
}
