"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export type Language = 'en' | 'ar';

export interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage?: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLanguage: () => {},
  setLanguage: () => {},
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

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {/* Floating Glassmorphic Language Switcher */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-1.5 p-1 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 shadow-xl shadow-black/40 hover:border-emerald-500/40 transition-colors select-none"
        role="region"
        aria-label="Language selector"
      >
        <div className="flex items-center pl-2 pr-1 text-emerald-400">
          <Globe size={15} className="opacity-90" />
        </div>

        <div className="flex items-center gap-0.5 bg-slate-950/60 p-0.5 rounded-full border border-slate-800/80">
          <button
            type="button"
            onClick={() => lang !== 'en' && toggleLanguage()}
            className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
              lang === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-label="Switch to English"
            aria-pressed={lang === 'en'}
          >
            {lang === 'en' && (
              <motion.div
                layoutId="activeLangPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/25"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10">EN</span>
          </button>

          <button
            type="button"
            onClick={() => lang !== 'ar' && toggleLanguage()}
            className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
              lang === 'ar' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-label="التبديل إلى العربية"
            aria-pressed={lang === 'ar'}
          >
            {lang === 'ar' && (
              <motion.div
                layoutId="activeLangPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/25"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10 font-bold">العربية</span>
          </button>
        </div>
      </motion.div>

      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
