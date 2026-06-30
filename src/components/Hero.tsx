"use client";

import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      subtitle: "Welcome to my space",
      title: "Hassan Bahathiq",
      headline: "Cybersecurity Graduate | GRC | IAM | Security Operations",
      description: "Experienced in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), Security Operations, Strategic Planning, and PMO initiatives.",
      contact: "Contact Me"
    },
    ar: {
      subtitle: "مرحباً بك في مساحتي",
      title: "حسن باحاذق",
      headline: "خريج أمن سيبراني | الحوكمة والمخاطر والالتزام | إدارة الهوية | العمليات الأمنية",
      description: "خبرة في الحوكمة والمخاطر والامتثال (GRC)، وإدارة الهوية والوصول (IAM)، والعمليات الأمنية، والتخطيط الاستراتيجي، ومبادرات مكتب إدارة المشاريع (PMO).",
      contact: "تواصل معي"
    }
  };

  const t = content[lang];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">{t.subtitle}</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-medium">
              {t.headline}
            </p>
            <p className="text-lg text-gray-400 max-w-xl">
              {t.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <Mail size={20} />
              {t.contact}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 items-center">
            <a href="https://linkedin.com/in/bahathiq" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800/50 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Hassandld" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800/50 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400">
              <FaGithub size={24} />
            </a>
            <a href="/recommendations" className="text-gray-400 hover:text-white transition-colors px-4 py-2 bg-gray-800/50 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 font-medium text-sm border border-gray-700/50 flex items-center gap-2">
              <span>{lang === 'ar' ? 'التوصيات' : 'Recommendations'}</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
            <Image src="/hero-image.jpg" alt={t.title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
