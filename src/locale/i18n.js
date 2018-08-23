import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import * as locales from './locales';

i18next
  .use(LngDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: locales.en },
      de: { translation: locales.de },
      ro: { translation: locales.ro },
    },
  });

export default i18next;
