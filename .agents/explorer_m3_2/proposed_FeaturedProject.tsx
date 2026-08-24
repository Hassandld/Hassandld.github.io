"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Shield, 
  Fingerprint, 
  Database, 
  Server, 
  Lock, 
  Key, 
  Users, 
  Cpu, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles,
  ExternalLink,
  Layers,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featureItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const FeaturedProject = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Flagship Capstone Project",
      title: "Featured Project",
      subtitle: "Enterprise Identity & Access Management Architecture",
      projectName: "Muwahhad IAM Platform",
      status: "Graduation Project - UQU in collaboration with SALLA E-Commerce",
      desc1: "A comprehensive Identity and Access Management platform built to centralize authentication, authorization, and user lifecycle management for enterprise applications.",
      desc2: "Muwahhad addresses the critical need for secure, scalable identity governance by implementing modern federation protocols and zero-trust principles.",
      keyFeaturesTitle: "Key Features",
      verifiedBadge: "Verified Capstone",
      enterpriseProtocolLabel: "Enterprise Security Architecture",
      features: [
        "Single Sign-On (SSO) integration across multiple services",
        "Multi-Factor Authentication (MFA) enforcement",
        "Role-Based Access Control (RBAC) & Governance",
        "Automated User Provisioning & Deprovisioning",
        "Comprehensive Usability & Functional Testing",
        "Advanced Penetration Testing & Vulnerability Assessment"
      ],
      techStackTitle: "Core Technologies & Protocols",
      techStack: ["Django", "Keycloak", "OAuth 2.0 / OIDC", "Docker", "PostgreSQL", "Tailwind CSS"],
      pillars: [
        { label: "Architecture", value: "Zero-Trust IAM" },
        { label: "Partner", value: "Salla E-Commerce" },
        { label: "Protocols", value: "OAuth 2.0 / OIDC" }
      ]
    },
    ar: {
      badge: "مشروع التخرج المميز",
      title: "مشروع مميز",
      subtitle: "هيكلية إدارة الهوية والوصول المتقدمة للمؤسسات",
      projectName: "منصة موحد لإدارة الهوية",
      status: "مشروع التخرج - جامعة أم القرى بالتعاون مع شركة سلة للتجارة الالكترونية",
      desc1: "منصة شاملة لإدارة الهوية والوصول صُممت لمركزة المصادقة والتفويض وإدارة دورة حياة المستخدم لتطبيقات المؤسسات.",
      desc2: "يعالج مشروع 'موحد' الحاجة الماسة لحوكمة الهوية الآمنة والقابلة للتوسع من خلال تنفيذ بروتوكولات الاتحاد الحديثة ومبادئ الثقة المعدومة (Zero-Trust).",
      keyFeaturesTitle: "الميزات الرئيسية",
      verifiedBadge: "مشروع معتمد",
      enterpriseProtocolLabel: "معمارية أمن المؤسسات",
      features: [
        "تكامل الدخول الموحد (SSO) عبر خدمات متعددة",
        "فرض المصادقة متعددة العوامل (MFA)",
        "التحكم في الوصول القائم على الأدوار (RBAC) والحوكمة",
        "أتمتة توفير وإلغاء حسابات المستخدمين",
        "اختبارات قابلية الاستخدام والاختبارات الوظيفية الشاملة",
        "اختبارات الاختراق وتقييم الثغرات الأمنية المتقدمة"
      ],
      techStackTitle: "التقنيات والبروتوكولات الأساسية",
      techStack: ["Django", "Keycloak", "OAuth 2.0 / OIDC", "Docker", "PostgreSQL", "Tailwind CSS"],
      pillars: [
        { label: "الهيكلية", value: "Zero-Trust IAM" },
        { label: "الشريك", value: "شركة سلة للتجارة" },
        { label: "البروتوكولات", value: "OAuth 2.0 / OIDC" }
      ]
    }
  };

  const t = content[lang];

  // Tailored cybersecurity icons mapped to the 6 feature items
  const featureIcons = [
    <Key key="0" size={18} className="text-emerald-400" />,
    <Fingerprint key="1" size={18} className="text-teal-400" />,
    <Users key="2" size={18} className="text-cyan-400" />,
    <Zap key="3" size={18} className="text-emerald-400" />,
    <CheckCircle2 key="4" size={18} className="text-teal-400" />,
    <ShieldAlert key="5" size={18} className="text-cyan-400" />
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative z-10 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

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

        {/* Main Showcase Glass Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative group hover:border-emerald-500/30 transition-all duration-500"
        >
          {/* Ambient Card Background Glows & Watermark */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-700" />
          
          <div className="absolute top-0 right-0 p-8 lg:p-12 opacity-10 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none">
            <Fingerprint size={240} className="text-emerald-400" />
          </div>
          
          <div className="p-6 sm:p-10 lg:p-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Project Identity, Narrative & Tech Stack (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
              <div>
                {/* Status / Collaboration Badge */}
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md"
                >
                  <Shield size={16} className="text-emerald-400 shrink-0" />
                  <span className="leading-snug">{t.status}</span>
                </motion.div>
                
                {/* Project Title */}
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6 group-hover:text-emerald-300/90 transition-colors"
                >
                  {t.projectName}
                </motion.h3>
                
                {/* Description 1 with stylized callout */}
                <motion.div 
                  variants={itemVariants}
                  className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-400 bg-emerald-500/5 rounded-r-2xl rtl:rounded-r-none rtl:rounded-l-2xl p-5 mb-5 text-gray-100 text-base sm:text-lg leading-relaxed font-medium"
                >
                  <p>{t.desc1}</p>
                </motion.div>

                {/* Description 2 */}
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8"
                >
                  {t.desc2}
                </motion.p>
              </div>

              {/* Tech Stack Pills & Architecture Badges */}
              <motion.div variants={itemVariants} className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  <Cpu size={14} className="text-emerald-400" />
                  <span>{t.techStackTitle}</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {t.techStack.map((tech, index) => (
                    <motion.span 
                      key={index} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="px-3.5 py-1.5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 rounded-xl text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-300 transition-all shadow-sm cursor-default" 
                      dir="ltr"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Quick Architecture Pillars */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  {t.pillars.map((pillar, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center"
                    >
                      <span className="text-[11px] text-gray-400 block font-medium">{pillar.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-300/90 truncate block mt-0.5" dir="ltr">
                        {pillar.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Features Showcase Card (5 cols) */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden"
            >
              {/* Subtle top gradient accent bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Lock size={18} />
                  </div>
                  <span>{t.keyFeaturesTitle}</span>
                </h4>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.verifiedBadge}</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {t.features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={featureItemVariants}
                    whileHover={{ x: lang === 'ar' ? -4 : 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-white/5 hover:border-emerald-500/30 transition-all duration-200 group/item"
                  >
                    <div className="p-2 rounded-lg bg-slate-800 border border-white/10 group-hover/item:border-emerald-500/30 shrink-0 mt-0.5 transition-colors">
                      {featureIcons[index % featureIcons.length]}
                    </div>
                    <span className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed group-hover/item:text-white transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom security assurance note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Layers size={14} className="text-emerald-400" />
                  <span>{t.enterpriseProtocolLabel}</span>
                </div>
                <span className="text-emerald-400 font-semibold" dir="ltr">IAM 2026</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
