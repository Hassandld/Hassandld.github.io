"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Lock, Cpu, Sparkles } from 'lucide-react';
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

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const categoryConfigs = [
  {
    icon: ShieldCheck,
    accentText: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    gradientHeader: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    glowBorder: "hover:border-emerald-500/40",
    dotColor: "bg-emerald-400 group-hover/pill:bg-emerald-300",
    pillHover: "hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-200 hover:shadow-emerald-500/10",
  },
  {
    icon: Lock,
    accentText: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    gradientHeader: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    glowBorder: "hover:border-cyan-500/40",
    dotColor: "bg-cyan-400 group-hover/pill:bg-cyan-300",
    pillHover: "hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-cyan-500/10",
  },
  {
    icon: Cpu,
    accentText: "text-indigo-400",
    badgeBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    gradientHeader: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    glowBorder: "hover:border-indigo-500/40",
    dotColor: "bg-indigo-400 group-hover/pill:bg-indigo-300",
    pillHover: "hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-200 hover:shadow-indigo-500/10",
  },
];

const Skills = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Expertise & Capabilities",
      title: "Core Competencies",
      subtitle: "Technical proficiency and strategic cybersecurity domain mastery",
      categories: [
        {
          title: "Governance & Strategic",
          skills: [
            "Strategic Planning",
            "PMO Operations",
            "KPI Development",
            "Executive Reporting",
            "National Cybersecurity Authority (NCA) Compliance",
            "Risk Management"
          ]
        },
        {
          title: "Cybersecurity & Identity",
          skills: [
            "Identity & Access Management (IAM)",
            "Security Information & Event Management (SIEM)",
            "Cyber Threat Hunting",
            "Vulnerability Assessment",
            "Web Application Security",
            "Cloudflare WAF"
          ]
        },
        {
          title: "Technical & Analysis",
          skills: [
            "Artificial Intelligence",
            "Data Visualization (Power BI)",
            "Python",
            "Linux / Bash",
            "Agile / Scrum Methodologies",
            "Business Analysis"
          ]
        }
      ]
    },
    ar: {
      badge: "المهارات والخبرات",
      title: "الكفاءات الأساسية",
      subtitle: "الكفاءة التقنية والإتقان في مجالات الأمن السيبراني والحوكمة",
      categories: [
        {
          title: "الحوكمة والاستراتيجية",
          skills: [
            "التخطيط الاستراتيجي",
            "عمليات مكتب إدارة المشاريع (PMO)",
            "تطوير مؤشرات الأداء",
            "إعداد التقارير التنفيذية",
            "الامتثال للهيئة الوطنية للأمن السيبراني (NCA)",
            "إدارة المخاطر"
          ]
        },
        {
          title: "الأمن السيبراني والهوية",
          skills: [
            "إدارة الهوية والوصول (IAM)",
            "إدارة المعلومات والأحداث الأمنية (SIEM)",
            "صيد التهديدات السيبرانية",
            "تقييم الثغرات",
            "أمن تطبيقات الويب",
            "Cloudflare WAF"
          ]
        },
        {
          title: "التقنية والتحليل",
          skills: [
            "الذكاء الاصطناعي",
            "تصور البيانات (Power BI)",
            "بايثون (Python)",
            "لينكس / باش",
            "منهجيات أجايل / سكروم",
            "تحليل الأعمال"
          ]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase backdrop-blur-md">
            <Sparkles size={14} className="text-emerald-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full mx-auto mt-4" />

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {t.categories.map((category, index) => {
            const config = categoryConfigs[index] || categoryConfigs[0];
            const Icon = config.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative rounded-2xl sm:rounded-3xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl ${config.glowBorder} overflow-hidden`}
              >
                {/* Ambient Top Glow Gradient */}
                <div
                  className={`absolute top-0 inset-x-0 h-28 bg-gradient-to-b ${config.gradientHeader} opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                    <div
                      className={`p-3 rounded-xl border ${config.badgeBg} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon size={22} className={config.accentText} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                        {category.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {category.skills.length} {lang === 'ar' ? 'مهارات' : 'Skills'}
                      </span>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <motion.div
                    className="flex flex-wrap gap-2.5 sm:gap-3"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        variants={pillVariants}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group/pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-800/70 border border-slate-700/70 text-slate-200 transition-all duration-200 cursor-default select-none shadow-sm ${config.pillHover}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-200 group-hover/pill:scale-125 ${config.dotColor}`}
                        />
                        <span className="leading-snug">{skill}</span>
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
