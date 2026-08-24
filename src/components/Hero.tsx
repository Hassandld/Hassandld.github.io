"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, ShieldCheck, Briefcase } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
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

const floatBadgeVariants1: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatBadgeVariants2: Variants = {
  initial: { y: 0 },
  animate: {
    y: [5, -5, 5],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      status: "Available for Strategic & Security Initiatives",
      subtitle: "Welcome to my space",
      title: "Hassan Bahathiq",
      headline: "Cybersecurity Graduate | GRC | IAM | Security Operations",
      description: "Experienced in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), Security Operations, Strategic Planning, and PMO initiatives.",
      contact: "Contact Me",
      recommendations: "Recommendations",
      badge1: "GRC & IAM",
      badge2: "Strategic PMO",
    },
    ar: {
      status: "متاح للمبادرات الاستراتيجية والأمنية",
      subtitle: "مرحباً بك في مساحتي",
      title: "حسن باحاذق",
      headline: "خريج أمن سيبراني | الحوكمة والمخاطر والالتزام | إدارة الهوية | العمليات الأمنية",
      description: "خبرة في الحوكمة والمخاطر والامتثال (GRC)، وإدارة الهوية والوصول (IAM)، والعمليات الأمنية، والتخطيط الاستراتيجي، ومبادرات مكتب إدارة المشاريع (PMO).",
      contact: "تواصل معي",
      recommendations: "التوصيات",
      badge1: "GRC & IAM",
      badge2: "Strategic PMO",
    }
  };

  const t = content[lang];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 sm:px-12 lg:px-24 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status Indicator Pill */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{t.status}</span>
            </div>
          </motion.div>

          {/* Typography Group */}
          <div className="space-y-4">
            <motion.p
              variants={itemVariants}
              className="text-emerald-400 font-semibold tracking-wider uppercase text-xs sm:text-sm"
            >
              {t.subtitle}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-emerald-400 leading-tight sm:leading-tight"
            >
              {t.title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-300 font-medium leading-snug"
            >
              {t.headline}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              {t.description}
            </motion.p>
          </div>

          {/* CTA & Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            {/* Primary Glassmorphic CTA Button */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 cursor-pointer"
            >
              <Mail size={18} className="shrink-0" />
              <span>{t.contact}</span>
            </motion.a>

            {/* Recommendations Glass Button */}
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/recommendations"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-900/60 border border-slate-700/60 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 backdrop-blur-xl font-medium text-sm transition-all duration-300 shadow-md hover:shadow-emerald-500/10 cursor-pointer"
            >
              <span>{t.recommendations}</span>
            </motion.a>
          </motion.div>

          {/* Action Links & Social Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2 items-center">
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/bahathiq"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3.5 bg-slate-900/60 border border-slate-700/60 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-emerald-500/10 cursor-pointer"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Hassandld"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3.5 bg-slate-900/60 border border-slate-700/60 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-emerald-500/10 cursor-pointer"
            >
              <FaGithub size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Modern Avatar Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-center justify-center mx-auto"
        >
          {/* Ambient Glowing Aura */}
          <div className="absolute w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-full bg-emerald-500/20 blur-3xl -z-10 animate-pulse pointer-events-none" />

          {/* Profile Image Encasement Ring */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-b from-slate-700/40 via-emerald-500/20 to-slate-800/40 backdrop-blur-xl border border-slate-700/60 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-700/50">
              <Image
                src="/hero-image.jpg"
                alt={t.title}
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Micro-Badge 1: GRC & IAM */}
          <motion.div
            variants={floatBadgeVariants1}
            initial="initial"
            animate="animate"
            className="absolute -top-2 -left-2 sm:top-4 sm:-left-4 bg-slate-900/85 backdrop-blur-xl border border-emerald-500/30 rounded-2xl px-3.5 py-2 shadow-xl shadow-emerald-500/10 flex items-center gap-2 z-20"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
              <ShieldCheck size={16} />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 whitespace-nowrap">
              {t.badge1}
            </span>
          </motion.div>

          {/* Floating Micro-Badge 2: Strategic PMO */}
          <motion.div
            variants={floatBadgeVariants2}
            initial="initial"
            animate="animate"
            className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-4 bg-slate-900/85 backdrop-blur-xl border border-cyan-500/30 rounded-2xl px-3.5 py-2 shadow-xl shadow-cyan-500/10 flex items-center gap-2 z-20"
          >
            <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-400">
              <Briefcase size={16} />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 whitespace-nowrap">
              {t.badge2}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
