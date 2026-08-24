"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Users, Trophy, Sparkles, GraduationCap, Globe } from 'lucide-react';
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardHoverVariants: Variants = {
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: "easeInOut" }
  }
};

const About = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Executive Profile",
      title: "About Me",
      subtitle: "Bridging technical cybersecurity excellence with strategic governance and leadership",
      p1: "I am an Entrepreneur and a results-driven Cybersecurity graduate with a strong foundation in Artificial Intelligence, Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), and Security Operations. My passion lies in aligning technical security capabilities with broader business and governance needs.",
      p2: "Through roles ranging from a Cybersecurity Engineer Intern at Salla E-Commerce to a Cyber Threat Hunter at the Makkah Municipality, I've developed hands-on expertise in conducting NCA-aligned risk assessments, developing security policies, and deploying SIEM solutions. My graduation project, the Muwahhad IAM Platform, demonstrated my ability to architect centralized identity governance and lifecycle management solutions.",
      p3: "Beyond technical cybersecurity skills, I bring extensive leadership and strategic PMO experience. As the President of the UQU Computing Club and a Planning & PMO Specialist, I've orchestrated large-scale technology events, developed operational KPIs, and managed multidisciplinary teams to drive digital transformation initiatives aligned with Saudi Vision 2030.",
      p4: "Recognized with the Jahiziyah Excellence Badge (2026) and as a BlackHat MEA CTF Finalist, I combine analytical rigor with strategic vision to deliver robust, secure, and resilient technology solutions.",
      narrativeTags: [
        "Muwahhad IAM Platform",
        "Salla E-Commerce",
        "Makkah Municipality",
        "UQU Computing Club",
        "Saudi Vision 2030",
        "NCA Compliance"
      ],
      pillarsTitle: "Core Value Drivers",
      pillars: [
        {
          icon: <ShieldCheck className="text-emerald-400" size={22} />,
          title: "Cybersecurity & IAM Governance",
          desc: "Hands-on NCA risk assessments, SIEM deployment, and centralized identity lifecycle management.",
          tags: ["IAM / CIAM", "GRC & NCA", "Threat Hunting"]
        },
        {
          icon: <Users className="text-teal-400" size={22} />,
          title: "Strategic PMO & Leadership",
          desc: "President of UQU Computing Club, managing multidisciplinary teams and operational KPIs for Vision 2030.",
          tags: ["Vision 2030", "Operational KPIs", "Tech Events"]
        },
        {
          icon: <Trophy className="text-cyan-400" size={22} />,
          title: "Elite Recognition & Honors",
          desc: "Jahiziyah Excellence Badge (2026) and 2x BlackHat MEA CTF Finalist (2024 & 2025).",
          tags: ["Jahiziyah 2026", "BlackHat MEA", "Dean's List"]
        }
      ],
      snapshotTitle: "Quick Snapshot",
      educationLabel: "Education",
      educationValue: "B.S. in Cybersecurity, Umm Al-Qura University",
      languagesLabel: "Languages",
      languagesValue: "Arabic (Native) • English (Fluent)"
    },
    ar: {
      badge: "الملف المهني",
      title: "نبذة عني",
      subtitle: "الجمع بين التميز التقني في الأمن السيبراني والحوكمة الاستراتيجية والقيادة",
      p1: "رائد أعمال وخريج أمن سيبراني شغوف بتحقيق النتائج، وأمتلك أساساً قوياً في الذكاء الاصطناعي، والحوكمة والمخاطر والالتزام (GRC)، وإدارة الهوية والوصول (IAM)، والعمليات الأمنية. يكمن شغفي في مواءمة القدرات الأمنية التقنية مع احتياجات الأعمال والحوكمة الشاملة.",
      p2: "من خلال أدوار تتراوح من متدرب كمهندس أمن سيبراني في شركة سلة للتجارة الالكترونية إلى صائد تهديدات سيبرانية في أمانة العاصمة المقدسة، اكتسبت خبرة عملية في إجراء تقييمات المخاطر المتوافقة مع الهيئة الوطنية للأمن السيبراني، وتطوير السياسات الأمنية، ونشر حلول SIEM. أظهر مشروع تخرجي، منصة موحد لإدارة الهوية، قدرتي على تصميم حلول مركزية لحوكمة الهوية وإدارة دورة الحياة.",
      p3: "إلى جانب المهارات التقنية في الأمن السيبراني، أمتلك خبرة واسعة في القيادة ومكتب إدارة المشاريع (PMO) الاستراتيجي. بصفتي رئيساً لنادي الحاسب الآلي بجامعة أم القرى وأخصائي تخطيط وPMO، قمت بتنظيم أحداث تقنية واسعة النطاق، وتطوير مؤشرات الأداء التشغيلية، وإدارة فرق متعددة التخصصات لدفع مبادرات التحول الرقمي المتوافقة مع رؤية السعودية 2030.",
      p4: "حاصل على شارة التميز من جاهزية (2026) وتأهلت لنهائيات مسابقة التقط العلم في فعالية بلاك هات الشرق الأوسط، أجمع الدقة التحليلية مع الرؤية الاستراتيجية لتقديم حلول تقنية قوية وآمنة ومرنة.",
      narrativeTags: [
        "منصة موحد لإدارة الهوية",
        "شركة سلة للتجارة الإلكترونية",
        "أمانة العاصمة المقدسة",
        "نادي الحاسب بجامعة أم القرى",
        "رؤية السعودية 2030",
        "امتثال الهيئة الوطنية للأمن السيبراني"
      ],
      pillarsTitle: "محاور القيمة الأساسية",
      pillars: [
        {
          icon: <ShieldCheck className="text-emerald-400" size={22} />,
          title: "الأمن السيبراني وحوكمة الهوية",
          desc: "إجراء تقييمات المخاطر المتوافقة مع NCA، ونشر حلول SIEM، وتصميم منصات إدارة دورة حياة الهوية.",
          tags: ["إدارة الهوية IAM", "الحوكمة والامتثال GRC", "صيد التهديدات"]
        },
        {
          icon: <Users className="text-teal-400" size={22} />,
          title: "القيادة ومكتب إدارة المشاريع PMO",
          desc: "رئاسة نادي الحاسب الآلي بجامعة أم القرى، وإدارة فرق العمل ومؤشرات الأداء التشغيلية الداعمة لرؤية 2030.",
          tags: ["رؤية 2030", "مؤشرات الأداء KPIs", "إدارة الفعاليات"]
        },
        {
          icon: <Trophy className="text-cyan-400" size={22} />,
          title: "الجوائز والاعتراف الأكاديمي",
          desc: "شارة التميز من جاهزية (2026) والوصول لنهائيات مسابقة BlackHat MEA CTF لعامين متتاليين.",
          tags: ["شارة جاهزية 2026", "بلاك هات الشرق الأوسط", "لوحة الشرف"]
        }
      ],
      snapshotTitle: "نظرة سريعة",
      educationLabel: "التعليم",
      educationValue: "بكالوريوس في الأمن السيبراني، جامعة أم القرى",
      languagesLabel: "اللغات",
      languagesValue: "العربية (اللغة الأم) • الإنجليزية (طلاقة مهنية)"
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative z-10 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-emerald-400" />
            <span>{t.badge}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            {t.title}
          </motion.h2>
          
          <motion.div 
            variants={itemVariants} 
            className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full mx-auto mt-4"
          />

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Narrative & Pillars Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card (8 cols on lg) */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-7 xl:col-span-8 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-700" />

            {/* Executive Statement (p1) */}
            <div className="relative border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-400 bg-emerald-500/5 rounded-r-2xl rtl:rounded-r-none rtl:rounded-l-2xl p-5 sm:p-6 mb-8 text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              <p>{t.p1}</p>
            </div>

            {/* Narrative Body (p2, p3, p4) */}
            <div className="space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-left rtl:text-right">
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p>{t.p4}</p>
            </div>

            {/* Narrative Highlight Chips */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {t.narrativeTags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs sm:text-sm font-medium text-emerald-300/90 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-slate-800 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pillars & Quick Snapshot Column (5 cols on lg) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-5">
            
            {/* Core Value Driver Cards */}
            {t.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 rounded-2xl p-5 sm:p-6 shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-white/10 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all duration-300 shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed text-left rtl:text-right">
                      {pillar.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pillar.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx} 
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Snapshot Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-emerald-950/30 via-slate-900/70 to-cyan-950/30 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4"
            >
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Sparkles size={14} />
                <span>{t.snapshotTitle}</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-[11px] font-medium">{t.educationLabel}</span>
                    <span className="text-gray-200 font-semibold">{t.educationValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-[11px] font-medium">{t.languagesLabel}</span>
                    <span className="text-gray-200 font-semibold">{t.languagesValue}</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
