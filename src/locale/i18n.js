import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import en from './en';
import ro from './ro';

i18next
  .use(LngDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ro: { translation: ro },
    },
  });

export default i18next;
