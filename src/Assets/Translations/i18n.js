import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATIONS_EN } from './en';
import { TRANSLATIONS_ID } from './id';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      id: {
        translation: TRANSLATIONS_ID
      }
    }
  });

i18n.changeLanguage('id');

export default i18n;
