"use client";

import React from 'react';
import { Trophy, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Awards = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Awards & Honors",
      items: [
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "Dean's Honor List",
          org: "Umm Al-Qura University",
          year: "2024 & 2025",
          desc: "Awarded to students demonstrating exceptional academic excellence and high GPA achievement."
        },
        {
          icon: <ShieldCheck className="text-emerald-400" size={24} />,
          title: "Jahiziyah Excellence Badge",
          org: "Education & Training Evaluation Commission",
          year: "2026",
          desc: "Recognized among the top cybersecurity graduates across universities in the Kingdom of Saudi Arabia, demonstrating mastery of the National Qualifications Framework."
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "BlackHat MEA CTF Finalist",
          org: "BlackHat Middle East & Africa",
          year: "2024 & 2025",
          desc: "Competed in the regional finals alongside top cybersecurity talent, solving advanced challenges in cryptography, reverse engineering, and web exploitation."
        },
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "Certificate of Appreciation",
          org: "Tuwaiq Academy",
          year: "2025",
          desc: "Recognized for outstanding contribution and supervision in organizing the 'Smart Summer' program in partnership with the Ministry of Communications and Information Technology."
        }
      ]
    },
    ar: {
      title: "الجوائز والتكريمات",
      items: [
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "لائحة شرف العميد",
          org: "جامعة أم القرى",
          year: "2024 و 2025",
          desc: "تُمنح للطلاب الذين يظهرون تميزاً أكاديمياً استثنائياً وتحقيق معدل تراكمي عالٍ."
        },
        {
          icon: <ShieldCheck className="text-emerald-400" size={24} />,
          title: "شارة جاهزية للتميز",
          org: "هيئة تقويم التعليم والتدريب",
          year: "2026",
          desc: "تم التكريم كأحد أفضل خريجي الأمن السيبراني على مستوى الجامعات في المملكة العربية السعودية، مما يثبت إتقان الإطار الوطني للمؤهلات."
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "متأهل لنهائيات BlackHat MEA CTF",
          org: "بلاك هات الشرق الأوسط وأفريقيا",
          year: "2024 و 2025",
          desc: "المنافسة في النهائيات الإقليمية إلى جانب أفضل المواهب في الأمن السيبراني، وحل تحديات متقدمة في التشفير والهندسة العكسية واستغلال الويب."
        },
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "شهادة شكر وتقدير",
          org: "أكاديمية طويق",
          year: "2025",
          desc: "تقديراً للمشاركة الفعالة والجهود المتميزة والمساهمة بالإشراف على تنظيم برنامج 'صيفك ذكي' بالشراكة مع وزارة الاتصالات وتقنية المعلومات."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="awards" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">{t.title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((award, index) => (
            <div key={index} className="bg-gray-800/80 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-700">
                  {award.icon}
                </div>
                <span className="text-2xl font-bold text-gray-800/50" dir="ltr">{award.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
              <p className="text-emerald-400 font-medium mb-4">{award.org}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
