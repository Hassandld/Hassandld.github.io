"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Award, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Certifications = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Credentials & Accreditations",
      title: "Certifications",
      subtitle: "Professional certifications and accredited cybersecurity programs",
      verifyText: "Verify Credential",
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
      badge: "الشهادات والاعتمادات",
      title: "الشهادات",
      subtitle: "الشهادات المهنية والبرامج التدريبية المعتمدة في الأمن السيبراني",
      verifyText: "التحقق من الشهادة",
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
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
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

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {t.items.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-900/80 rounded-2xl p-6 transition-all group relative flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Ambient Top Glow */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-2xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
                    <Award size={22} />
                  </div>

                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-200"
                      aria-label={`Verify ${cert.name}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/40 text-slate-500 cursor-default">
                      <CheckCircle2 size={16} />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors" dir="ltr">
                  {cert.name}
                </h3>
                <p className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              {cert.link && (
                <div className="relative z-10 pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    <span>{t.verifyText}</span>
                    <ExternalLink size={12} className="group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
