"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function RecommendationsPage() {
  const { lang } = useLanguage();
  
  const recommendations = [
    { name: "Recommendation Dr. Ahmed Al-Hazmi", arName: "توصية د. أحمد الحازمي أستاذ مساعد", file: "توصية د. أحمد الحازمي أستاذ مساعد.pdf" },
    { name: "Recommendation Dr. Ghassan Bati", arName: "توصية د. غسان باتي استاذ مساعد", file: "توصية د. غسان باتي استاذ مساعد.pdf" },
    { name: "Recommendation Dr. Ahmed Al-Aql", arName: "توصية من د. أحمد العقل رئيس قسم الأمن السيبراني", file: "توصية من د. أحمد العقل رئيس قسم الأمن السيبراني.pdf" },
    { name: "Recommendation Dr. Ahad Al-Jarf", arName: "توصية من د. عهد الجرف وكيلة الكلية للتطوير والجودة", file: "توصية من د. عهد الجرف وكيلة الكلية للتطوير والجودة.pdf" }
  ];

  return (
    <main className="min-h-screen bg-gray-900 pt-24 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          {lang === 'en' ? (
            <><ArrowLeft className="mr-2" size={20} /> Back to Portfolio</>
          ) : (
            <><ArrowRight className="ml-2" size={20} /> العودة للموقع</>
          )}
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
          {lang === 'en' ? 'Recommendations' : 'التوصيات'}
        </h1>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, idx) => (
            <a 
              key={idx} 
              href={`/recomendation/${rec.file}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-emerald-500/50 rounded-xl p-6 transition-all group flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2" dir="rtl">{lang === 'ar' ? rec.arName : rec.name}</h3>
                <p className="text-sm text-gray-400">{lang === 'ar' ? rec.name : rec.arName}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
