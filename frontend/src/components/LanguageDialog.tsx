import { useI18n } from '../hooks/useI18n'

export function LanguageDialog({ onSelect }: { onSelect: (l: 'en' | 'pt') => void }) {
  const { t } = useI18n();
  return (
    <div className="modal-overlay dialog-overlay">
      <div className="card-masterpiece animate-reveal dialog-card">
        <h2 className="gradient-heading dialog-title">{t.dialog.title}</h2>
        <p className="dialog-msg">{t.dialog.message}</p>
        <div className="dialog-btn-container">
          <button className="dialog-btn-outline" onClick={() => onSelect('en')}>
            {t.dialog.btnEn}
          </button>
          <button
            className="dialog-btn-filled"
            onClick={() => onSelect('pt')}
          >
            {t.dialog.btnPt}
          </button>
        </div>
      </div>
    </div>
  );
}
