## 2026-08-24T23:01:30Z

You are the Dedicated Worker for `src/app/recommendations/page.tsx`.
Your working directory is: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_rec/
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

CRITICAL SINGLE-FILE TASK:
You must call `write_to_file` on `/Users/dluud/Desktop/anything/Hassandld.github.io/src/app/recommendations/page.tsx` (Overwrite: true) with the following complete, modernized Framer Motion code:

```tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function RecommendationsPage() {
  const { lang } = useLanguage();
  
  const recommendations = [
    { name: "Recommendation Dr. Ahmed Al-Hazmi", arName: "توصية د. أحمد الحازمي أستاذ مساعد", file: "ahmed-alhazmi.pdf" },
    { name: "Recommendation Dr. Ghassan Bati", arName: "توصية د. غسان باتي استاذ مساعد", file: "ghassan-bati.pdf" },
    { name: "Recommendation Dr. Ahmed Al-Aql", arName: "توصية من د. أحمد العقل رئيس قسم الأمن السيبراني", file: "ahmed-alaql.pdf" },
    { name: "Recommendation Dr. Ahad Al-Jarf", arName: "توصية من د. عهد الجرف وكيلة الكلية للتطوير والجودة", file: "ahad-aljarf.pdf" }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent text-slate-100 pt-24 pb-12 px-6 sm:px-12 lg:px-24 selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
            {lang === 'en' ? (
              <><ArrowLeft className="mr-2" size={20} /> Back to Portfolio</>
            ) : (
              <><ArrowRight className="ml-2" size={20} /> العودة للموقع</>
            )}
          </Link>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center"
        >
          {lang === 'en' ? 'Recommendations' : 'التوصيات'}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-12 shadow-sm shadow-emerald-500/30"
        ></motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {recommendations.map((rec, idx) => (
            <motion.a 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              href={`/recomendation/${rec.file}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-900/80 rounded-2xl p-6 transition-all group flex flex-col items-center text-center gap-4 shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2" dir="rtl">{lang === 'ar' ? rec.arName : rec.name}</h3>
                <p className="text-sm text-slate-400">{lang === 'ar' ? rec.name : rec.arName}</p>
              </div>
              <div className="mt-auto pt-2 flex items-center gap-1 text-xs text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <Download size={14} />
                <span>{lang === 'ar' ? 'عرض المستند' : 'View Document'}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
```

After writing the file, verify with `view_file` on `src/app/recommendations/page.tsx`, run `npm run lint`, and send a message.
