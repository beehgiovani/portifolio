import { useState, useMemo, type ReactNode } from 'react'
import { I18nContext, translationsMap } from './useI18n.ts'
import type { Language } from '../types/project.ts'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const t = useMemo(() => translationsMap[lang] as unknown as typeof translationsMap['en'], [lang]);

  return (
    <I18nContext.Provider value={{
      t, lang, setLang
    }}>
      {children}
    </I18nContext.Provider>
  );
}
