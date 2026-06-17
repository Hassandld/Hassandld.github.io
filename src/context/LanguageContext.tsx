"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <button 
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-colors"
      >
        {lang === 'en' ? 'العربية' : 'English'}
      </button>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
