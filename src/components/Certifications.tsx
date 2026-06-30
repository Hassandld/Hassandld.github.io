"use client";

import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Certifications = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Certifications",
      items: [
        { name: "eJPTv2", desc: "Penetration Testing, Vulnerability Assessment & Ethical Hacking", issuer: "eLearnSecurity", link: "https://certs.ine.com/ef49f103-8822-4b59-af07-926ee00a3fb1" },
        { name: "ISC2 CC (Certified in Cybersecurity)", desc: "Security Architecture, GRC, Identity Management", issuer: "ISC2" },
        { name: "ISC2 Cybersecurity Specialization", desc: "Access Control, Network & Cloud Security, Cryptography & Incident Response", issuer: "ISC2 / Coursera", link: "https://www.linkedin.com/in/bahathiq/details/certifications/" },
        { name: "NCA-KAUST Cybersecurity Program", desc: "Advanced Cybersecurity Training", issuer: "NCA / KAUST", link: "https://www.linkedin.com/posts/bahathiq_its-my-pleasure-to-share-that-i-have-completed-activity-7171479785968123905-mLGi" },
        { name: "Kaspersky Cybersecurity Program", desc: "Cyber Defense, Threat Analysis & Security Practices", issuer: "Kaspersky", link: "/certs/Certificate.pdf" },
        { name: "IBM Cyber security fundamentals", desc: "Cybersecurity Basics & Threat Management", issuer: "IBM", link: "https://www.credly.com/badges/5ba4b01c-5465-41b8-acd3-59b91da16e74/linked_in_profile" },
        { name: "Misk Skills", desc: "Cybersecurity Incident Response & Nonprofit Project Management", issuer: "Misk Foundation", link: "https://www.linkedin.com/in/bahathiq/details/certifications/" },
        { name: "McKinsey Forward Program", desc: "Leadership, Problem Solving & Strategic Thinking", issuer: "McKinsey & Company", link: "https://www.credly.com/badges/367f4cc6-fe7b-4123-a81d-89112a6f2817/linked_in_profile" },
      ]
    },
    ar: {
      title: "الشهادات",
      items: [
        { name: "eJPTv2", desc: "اختبار الاختراق وتقييم الثغرات والقرصنة الأخلاقية", issuer: "eLearnSecurity", link: "https://certs.ine.com/ef49f103-8822-4b59-af07-926ee00a3fb1" },
        { name: "ISC2 CC (Certified in Cybersecurity)", desc: "الهيكلة الأمنية، GRC، إدارة الهوية", issuer: "ISC2" },
        { name: "ISC2 Cybersecurity Specialization", desc: "التحكم في الوصول، أمن الشبكات والسحابة، التشفير والاستجابة للحوادث", issuer: "ISC2 / Coursera", link: "https://www.linkedin.com/in/bahathiq/details/certifications/" },
        { name: "NCA-KAUST Cybersecurity Program", desc: "تدريب متقدم في الأمن السيبراني", issuer: "NCA / KAUST", link: "https://www.linkedin.com/posts/bahathiq_its-my-pleasure-to-share-that-i-have-completed-activity-7171479785968123905-mLGi" },
        { name: "Kaspersky Cybersecurity Program", desc: "الدفاع السيبراني وتحليل التهديدات والممارسات الأمنية", issuer: "Kaspersky", link: "/certs/Certificate.pdf" },
        { name: "IBM Cyber security fundamentals", desc: "أساسيات الأمن السيبراني وإدارة التهديدات", issuer: "IBM", link: "https://www.credly.com/badges/5ba4b01c-5465-41b8-acd3-59b91da16e74/linked_in_profile" },
        { name: "Misk Skills", desc: "الاستجابة للحوادث السيبرانية وإدارة المشاريع غير الربحية", issuer: "Misk Foundation", link: "https://www.linkedin.com/in/bahathiq/details/certifications/" },
        { name: "McKinsey Forward Program", desc: "القيادة وحل المشكلات والتفكير الاستراتيجي", issuer: "McKinsey & Company", link: "https://www.credly.com/badges/367f4cc6-fe7b-4123-a81d-89112a6f2817/linked_in_profile" },
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="certifications" className="py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">{t.title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((cert, index) => (
            <div key={index} className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-emerald-500/50 rounded-xl p-6 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <a href={cert.link || `/certs/${cert.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2" dir="ltr">{cert.name}</h3>
              <p className="text-sm text-emerald-400 mb-3">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
