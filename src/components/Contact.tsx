"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Contact = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Connect & Collaborate",
      title: "Get In Touch",
      desc: "Whether you have a strategic initiative in mind, need to secure your infrastructure, or just want to connect—I'm always open to discussing new opportunities.",
      email: "Email",
      location: "Location",
      locationText: "Makkah / Jeddah / Riyadh, Saudi Arabia",
      sendEmailPrompt: "Send an Email",
      viewProfile: "View Profile"
    },
    ar: {
      badge: "تواصل وتعاون",
      title: "تواصل معي",
      desc: "سواء كان لديك مبادرة استراتيجية، أو تحتاج إلى تأمين البنية التحتية، أو فرصة جديدة أو ترغب فقط في التواصل، فأنا دائمًا منفتح لمناقشة فرص جديدة.",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationText: "مكة المكرمة / جدة / الرياض، المملكة العربية السعودية",
      sendEmailPrompt: "إرسال بريد إلكتروني",
      viewProfile: "عرض الملف الشخصي"
    }
  };

  const t = content[lang];

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-slate-900/40 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Send size={14} />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14"
        >
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:hassan2030b@gmail.com"
            className="w-full sm:w-auto flex items-center gap-4 bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-emerald-500/50 rounded-2xl p-5 text-slate-300 hover:text-emerald-300 transition-all duration-300 shadow-lg shadow-black/20 group"
          >
            <div className="w-13 h-13 p-3 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-center">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{t.email}</div>
              <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors" dir="ltr">
                hassan2030b@gmail.com
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-auto sm:ml-2" />
          </motion.a>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="w-full sm:w-auto flex items-center gap-4 bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-5 text-slate-300 shadow-lg shadow-black/20 group"
          >
            <div className="w-13 h-13 p-3 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{t.location}</div>
              <div className="font-semibold text-white">{t.locationText}</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-6 border-t border-slate-800/80 pt-12"
        >
          <motion.a
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/bahathiq"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-14 h-14 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 shadow-xl shadow-black/30 transition-all duration-200"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Hassandld"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-14 h-14 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-emerald-500/50 shadow-xl shadow-black/30 transition-all duration-200"
          >
            <FaGithub size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
