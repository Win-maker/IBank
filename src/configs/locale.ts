import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationEN from '../locales/en.json'; 
import translationMM from '../locales/mm.json'; 
import translationTH from '../locales/th.json';

const resources = {
  en: {
    translation: translationEN,
  },
  mm: {
    translation: translationMM,
  },
  th: {
	translation : translationTH,
  }
};

const savedLanguage = localStorage.getItem("language") || "en";
i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, 
  // keySeparator: false, // Allow for nested translations without using dots
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
