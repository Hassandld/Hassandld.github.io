"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { UserCheck, ShieldCheck, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Professional Profile",
      title: "About Me",
      executiveSummary: "Executive Summary",
      leadershipTitle: "Strategic Leadership & PMO",
      recognitionTitle: "Excellence & Vision",
      p1: "I am an Entrepreneur and a results-driven Cybersecurity graduate with a strong foundation in Artificial Intelligence, Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), and Security Operations. My passion lies in aligning technical security capabilities with broader business and governance needs.",
      p2: "Through roles ranging from a Cybersecurity Engineer Intern at Salla E-Commerce to a Cyber Threat Hunter at the Makkah Municipality, I've developed hands-on expertise in conducting NCA-aligned risk assessments, developing security policies, and deploying SIEM solutions. My graduation project, the Muwahhad IAM Platform, demonstrated my ability to architect centralized identity governance and lifecycle management solutions.",
      p3: "Beyond technical cybersecurity skills, I bring extensive leadership and strategic PMO experience. As the President of the UQU Computing Club and a Planning & PMO Specialist, I've orchestrated large-scale technology events, developed operational KPIs, and managed multidisciplinary teams to drive digital transformation initiatives aligned with Saudi Vision 2030.",
      p4: "Recognized with the Jahiziyah Excellence Badge (2026) and as a BlackHat MEA CTF Finalist, I combine analytical rigor with strategic vision to deliver robust, secure, and resilient technology solutions."
    },
    ar: {
      badge: "الملف المهني",
      title: "نبذة عني",
      executiveSummary: "الملخص التنفيذي",
      leadershipTitle: "القيادة الاستراتيجية ومكتب إدارة المشاريع",
      recognitionTitle: "التميز والرؤية المستقبلية",
      p1: "رائد أعمال وخريج أمن سيبراني شغوف بتحقيق النتائج، وأمتلك أساساً قوياً في الذكاء الاصطناعي، والحوكمة والمخاطر والالتزام (GRC)، وإدارة الهوية والوصول (IAM)، والعمليات الأمنية. يكمن شغفي في مواءمة القدرات الأمنية التقنية مع احتياجات الأعمال والحوكمة الشاملة.",
      p2: "من خلال أدوار تتراوح من متدرب كمهندس أمن سيبراني في شركة سلة للتجارة الالكترونية إلى صائد تهديدات سيبرانية في أمانة العاصمة المقدسة، اكتسبت خبرة عملية في إجراء تقييمات المخاطر المتوافقة مع الهيئة الوطنية للأمن السيبراني، وتطوير السياسات الأمنية، ونشر حلول SIEM. أظهر مشروع تخرجي، منصة موحد لإدارة الهوية، قدرتي على تصميم حلول مركزية لحوكمة الهوية وإدارة دورة الحياة.",
      p3: "إلى جانب المهارات التقنية في الأمن السيبراني، أمتلك خبرة واسعة في القيادة ومكتب إدارة المشاريع (PMO) الاستراتيجي. بصفتي رئيساً لنادي الحاسب الآلي بجامعة أم القرى وأخصائي تخطيط وPMO، قمت بتنظيم أحداث تقنية واسعة النطاق، وتطوير مؤشرات الأداء التشغيلية، وإدارة فرق متعددة التخصصات لدفع مبادرات التحول الرقمي المتوافقة مع رؤية السعودية 2030.",
      p4: "حاصل على شارة التميز من جاهزية (2026) وتأهلت لنهائيات مسابقة التقط العلم في فعالية بلاك هات الشرق الأوسط، أجمع الدقة التحليلية مع الرؤية الاستراتيجية لتقديم حلول تقنية قوية وآمنة ومرنة."
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide">
            <UserCheck size={14} className="animate-pulse" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto shadow-sm shadow-emerald-500/50" />
        </motion.div>

        {/* Modular Glassmorphic Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {/* Executive Summary Card (p1 & p2) */}
          <motion.div
            variants={cardVariants}
            className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 p-6 sm:p-8 md:p-10 shadow-2xl hover:border-emerald-500/40 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-emerald-500/15 via-emerald-500/5 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t.executiveSummary}
                </h3>
              </div>
              <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed text-justify">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
            </div>
          </motion.div>

          {/* Dual Highlight Cards: Leadership & Recognition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Leadership & PMO Card (p3) */}
            <motion.div
              variants={cardVariants}
              className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 p-6 sm:p-8 md:p-10 shadow-2xl hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-emerald-500/15 via-emerald-500/5 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3.5 pb-4 mb-6 border-b border-white/10">
                  <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Briefcase size={22} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t.leadershipTitle}
                  </h3>
                </div>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-justify">
                  {t.p3}
                </p>
              </div>
            </motion.div>

            {/* Recognition & Vision Card (p4) */}
            <motion.div
              variants={cardVariants}
              className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 p-6 sm:p-8 md:p-10 shadow-2xl hover:border-cyan-500/40 hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3.5 pb-4 mb-6 border-b border-white/10">
                  <div className="p-3 rounded-xl border bg-cyan-500/10 border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Award size={22} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t.recognitionTitle}
                  </h3>
                </div>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-justify">
                  {t.p4}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
