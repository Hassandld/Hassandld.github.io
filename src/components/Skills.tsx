"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Skills = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Core Competencies",
      categories: [
        {
          title: "Governance & Strategic",
          skills: ["Strategic Planning", "PMO Operations", "KPI Development", "Executive Reporting", "National Cybersecurity Authority (NCA) Compliance", "Risk Management"]
        },
        {
          title: "Cybersecurity & Identity",
          skills: ["Identity & Access Management (IAM)", "Security Information & Event Management (SIEM)", "Cyber Threat Hunting", "Vulnerability Assessment", "Web Application Security", "Cloudflare WAF"]
        },
        {
          title: "Technical & Analysis",
          skills: ["Artificial Intelligence", "Data Visualization (Power BI)", "Python", "Linux / Bash", "Agile / Scrum Methodologies", "Business Analysis"]
        }
      ]
    },
    ar: {
      title: "الكفاءات الأساسية",
      categories: [
        {
          title: "الحوكمة والاستراتيجية",
          skills: ["التخطيط الاستراتيجي", "عمليات مكتب إدارة المشاريع (PMO)", "تطوير مؤشرات الأداء", "إعداد التقارير التنفيذية", "الامتثال للهيئة الوطنية للأمن السيبراني (NCA)", "إدارة المخاطر"]
        },
        {
          title: "الأمن السيبراني والهوية",
          skills: ["إدارة الهوية والوصول (IAM)", "إدارة المعلومات والأحداث الأمنية (SIEM)", "صيد التهديدات السيبرانية", "تقييم الثغرات", "أمن تطبيقات الويب", "Cloudflare WAF"]
        },
        {
          title: "التقنية والتحليل",
          skills: ["الذكاء الاصطناعي", "تصور البيانات (Power BI)", "بايثون (Python)", "لينكس / باش", "منهجيات أجايل / سكروم", "تحليل الأعمال"]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="skills" className="py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">{t.title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {t.categories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-400 border-b border-gray-700 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
