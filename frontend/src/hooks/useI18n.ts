import { createContext, useContext } from 'react'
import { en } from '../locales/en.ts'
import { pt } from '../locales/pt.ts'
import type { Language } from '../types/project.ts'

const translations = { en, pt };

interface I18nContextProps {
  t: typeof translations['en'];
  lang: Language;
  setLang: (lang: Language) => void;
}

export const I18nContext = createContext<I18nContextProps | undefined>(undefined);
export const translationsMap = translations;

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
