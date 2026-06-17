"use client";

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Get In Touch",
      desc: "Whether you have a strategic initiative in mind, need to secure your infrastructure, or just want to connect—I'm always open to discussing new opportunities.",
      email: "Email",
      location: "Location",
      locationText: "Makkah / Jeddah, Saudi Arabia"
    },
    ar: {
      title: "تواصل معي",
      desc: "سواء كان لديك مبادرة استراتيجية، أو تحتاج إلى تأمين البنية التحتية، أو ترغب فقط في التواصل، فأنا دائمًا منفتح لمناقشة فرص جديدة.",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationText: "مكة المكرمة / جدة، المملكة العربية السعودية"
    }
  };

  const t = content[lang];

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t.title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <a href="mailto:hassan2030b@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500">{t.email}</div>
              <div className="font-medium" dir="ltr">hassan2030b@gmail.com</div>
            </div>
          </a>

          <div className="flex items-center gap-3 text-gray-300 group">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div className={`text-${lang === 'ar' ? 'right' : 'left'}`}>
              <div className="text-sm text-gray-500">{t.location}</div>
              <div className="font-medium">{t.locationText}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 border-t border-gray-800 pt-12">
          <a href="https://linkedin.com/in/bahathiq" target="_blank" rel="noreferrer" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all shadow-lg hover:-translate-y-1">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Hassandld" target="_blank" rel="noreferrer" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all shadow-lg hover:-translate-y-1">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
