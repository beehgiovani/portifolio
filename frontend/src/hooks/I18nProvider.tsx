import { useState, useMemo, type ReactNode } from 'react'
import { I18nContext, translationsMap } from './useI18n.ts'
import type { Language } from '../types/project.ts'

export function I18nProvider({ children }: { children: ReactNode }) {
  const getInitialLanguage = (): Language => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'en' || saved === 'pt') return saved;
    
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'pt' ? 'pt' : 'en';
  };

  const [lang, setLang] = useState<Language>(getInitialLanguage());
  
  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = useMemo(() => translationsMap[lang] as unknown as typeof translationsMap['en'], [lang]);

  return (
    <I18nContext.Provider value={{
      t, lang, setLang: changeLang
    }}>
      {children}
    </I18nContext.Provider>
  );
}
