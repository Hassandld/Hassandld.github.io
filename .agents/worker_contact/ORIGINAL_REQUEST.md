## 2026-08-25T02:01:30Z

You are the Dedicated Worker for `src/components/Contact.tsx`.
Your working directory is: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_contact/
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

CRITICAL SINGLE-FILE TASK:
You must call `write_to_file` on `/Users/dluud/Desktop/anything/Hassandld.github.io/src/components/Contact.tsx` (Overwrite: true) with the following complete, modernized Framer Motion code:

```tsx
"use client";

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's Connect & Collaborate",
      desc: "Whether you have a strategic initiative in mind, need to secure your infrastructure, or just want to connect—I'm always open to discussing new opportunities.",
      email: "Email",
      location: "Location",
      locationText: "Makkah / Jeddah / Riyadh, Saudi Arabia"
    },
    ar: {
      title: "تواصل معي",
      subtitle: "لنتواصل ونتعاون معاً",
      desc: "سواء كان لديك مبادرة استراتيجية، أو تحتاج إلى تأمين البنية التحتية، أو فرصة جديدة أو ترغب فقط في التواصل، فأنا دائمًا منفتح لمناقشة فرص جديدة.",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationText: "مكة المكرمة / جدة / الرياض، المملكة العربية السعودية"
    }
  };

  const t = content[lang];

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t.title}</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
        >
          <motion.a
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            href="mailto:hassan2030b@gmail.com"
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-900/80 rounded-2xl p-6 flex items-center gap-4 text-gray-300 hover:text-emerald-300 transition-all duration-300 group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <Mail size={22} />
            </div>
            <div className="text-left rtl:text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wider">{t.email}</div>
              <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-sm sm:text-base" dir="ltr">
                hassan2030b@gmail.com
              </div>
            </div>
          </motion.a>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-6 flex items-center gap-4 text-gray-300 group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-all">
              <MapPin size={22} />
            </div>
            <div className={`text-${lang === 'ar' ? 'right' : 'left'}`}>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{t.location}</div>
              <div className="font-semibold text-white text-sm sm:text-base">{t.locationText}</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-6 border-t border-slate-800/80 pt-10"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/bahathiq"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-slate-900/80 border border-slate-700/60 rounded-2xl flex items-center justify-center text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all shadow-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Hassandld"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-slate-900/80 border border-slate-700/60 rounded-2xl flex items-center justify-center text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all shadow-xl"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
```
