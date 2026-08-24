"use client";

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, FileText, ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RecommendationsPage() {
  const { lang } = useLanguage();
  
  const recommendations = [
    { name: "Recommendation Dr. Ahmed Al-Hazmi", arName: "توصية د. أحمد الحازمي أستاذ مساعد", file: "ahmed-alhazmi.pdf" },
    { name: "Recommendation Dr. Ghassan Bati", arName: "توصية د. غسان باتي استاذ مساعد", file: "ghassan-bati.pdf" },
    { name: "Recommendation Dr. Ahmed Al-Aql", arName: "توصية من د. أحمد العقل رئيس قسم الأمن السيبراني", file: "ahmed-alaql.pdf" },
    { name: "Recommendation Dr. Ahad Al-Jarf", arName: "توصية من د. عهد الجرف وكيلة الكلية للتطوير والجودة", file: "ahad-aljarf.pdf" }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-slate-950 text-slate-100 pt-24 pb-16 px-6 sm:px-12 lg:px-24 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all group shadow-sm"
          >
            {lang === 'en' ? (
              <><ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} /> Back to Portfolio</>
            ) : (
              <><ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} /> العودة للموقع</>
            )}
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award size={14} />
            <span>{lang === 'en' ? 'Academic Endorsements' : 'تزكيات أكاديمية'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            {lang === 'en' ? 'Letters of Recommendation' : 'التوصيات الأكاديمية'}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 shadow-sm shadow-emerald-500/30"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {lang === 'en' 
              ? 'Official academic endorsements and letters of recommendation from university faculty and department leadership' 
              : 'توصيات وتزكيات رسمية من أعضاء هيئة التدريس وقيادات قسم الأمن السيبراني بجامعة أم القرى'}
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {recommendations.map((rec, idx) => (
            <motion.a 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              href={`/recomendation/${rec.file}`} 
              target="_blank" 
              rel="noreferrer"
              className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-emerald-500/10 flex flex-col items-center text-center gap-4 cursor-pointer overflow-hidden"
            >
              {/* Subtle hover top border glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300 shadow-inner">
                <FileText size={32} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors" dir="rtl">
                  {lang === 'ar' ? rec.arName : rec.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-4">
                  {lang === 'ar' ? rec.name : rec.arName}
                </p>
              </div>

              <div className="mt-auto w-full pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-medium group-hover:text-emerald-300">
                <span className="text-slate-500 group-hover:text-slate-400">PDF Document</span>
                <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{lang === 'ar' ? 'عرض التوصية' : 'Open Recommendation'}</span>
                  <ExternalLink size={13} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
