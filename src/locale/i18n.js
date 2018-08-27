import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import * as locales from './locales';

i18next
  .use(LngDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: locales.en },
      ro: { translation: locales.ro },
    },
  });

export default i18next;
