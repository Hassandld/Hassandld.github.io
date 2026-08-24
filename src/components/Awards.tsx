"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Award as AwardIcon, ExternalLink } from 'lucide-react';
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Awards = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Honors & Achievements",
      title: "Awards & Honors",
      subtitle: "National and academic recognitions for cybersecurity excellence, leadership, and innovation",
      items: [
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "Dean's Honor List (Extracurricular Activities)",
          org: "Umm Al-Qura University",
          year: "2024",
          desc: "Awarded to students demonstrating exceptional academic excellence and high GPA achievement along with significant extracurricular involvement.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG4NWuUA_eRsQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1731102457690?e=1783454400&v=beta&t=kteN-RrWDuZiP03qZWwKlUomWNoWzHEsDR8HWl4H_mg"
        },
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "Dean's Honor List (Standardized Tests Excellence)",
          org: "Umm Al-Qura University",
          year: "2026",
          desc: "Awarded for excellence and outstanding achievement in standardized and professional examinations.",
          link: "https://x.com/uqu_cc/status/2071210328461824170?s=46"
        },
        {
          icon: <ShieldCheck className="text-emerald-400" size={24} />,
          title: "Jahiziyah Excellence Badge",
          org: "Education & Training Evaluation Commission & NCA",
          year: "2026",
          desc: "Recognized among the top cybersecurity graduates across universities in the Kingdom of Saudi Arabia, demonstrating mastery of the National Qualifications Framework.",
          link: "https://e-services.etec.gov.sa/Qiyas.TRAS.Web.Internet/Home/PrintCertificate?s=vdjwfLIl6en0xAsDw09ygLi0AYoaXe5qvCmo6jBBAb0%3D"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "BlackHat MEA CTF Finalist",
          org: "BlackHat MEA & SAFCSP",
          year: "2024 & 2025",
          desc: "Qualified for two consecutive years 2024-2025. Competed in the regional finals alongside top cybersecurity talent, solving advanced challenges in cryptography, reverse engineering, and web exploitation.",
          link: "https://www.linkedin.com/posts/bahathiq_%D9%85%D8%AA%D8%AD%D9%85%D8%B3-%D9%84%D9%84%D8%AA%D9%88%D8%A7%D8%AC%D8%AF-%D9%81%D9%8A-black-hat-mea-2025-%D9%87%D8%B0%D8%A7-%D8%A7%D9%84%D8%B9%D8%A7%D9%85-share-7401013818245582850-aGRM/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADvFq0QBQ92HHgQksZVoD-of4gNYTtWp0aQ"
        },
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "Certificate of Appreciation",
          org: "Tuwaiq Academy",
          year: "2025",
          desc: "Recognized for outstanding contribution and supervision in organizing the 'Smart Summer' program in partnership with the Ministry of Communications and Information Technology.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQFrvn3tTnlspw/profile-treasury-image-shrink_1920_1920/B4DZm1PdvcJMAc-/0/1759682355442?e=1783454400&v=beta&t=YYnXdtaGyPDzg3EgkrL4VzrJFd7D2inzaGXFs0w6jMI"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "Winner 4th place in Space Apps Challenge",
          org: "NASA & UQU",
          year: "2023",
          desc: "'PREDICTION OF NATURAL RESOURCES BASED ON GEOSPATIAL' project.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQFuBiPI9gujJw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1696795342882?e=1783454400&v=beta&t=uwYQgcvqHJrHuDwiNCILNevwUuFGoJSGUzhNcX7qIVQ"
        }
      ]
    },
    ar: {
      badge: "الجوائز والإنجازات",
      title: "الجوائز والتكريمات",
      subtitle: "تكريمات وطنية وأكاديمية في التميز السيبراني، القيادة، والابتكار التقني",
      items: [
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "لائحة شرف العميد (مسار التميز والأنشطة اللامنهجية)",
          org: "جامعة أم القرى",
          year: "2024",
          desc: "تُمنح للطلاب الذين يظهرون تميزاً أكاديمياً استثنائياً مع مشاركة فاعلة في الأنشطة اللامنهجية.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG4NWuUA_eRsQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1731102457690?e=1783454400&v=beta&t=kteN-RrWDuZiP03qZWwKlUomWNoWzHEsDR8HWl4H_mg"
        },
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "لائحة شرف العميد (مسار التميز في الاختبارات المعيارية)",
          org: "جامعة أم القرى",
          year: "2026",
          desc: "تُمنح للتميز والإنجاز الاستثنائي في الاختبارات المعيارية والمهنية.",
          link: "https://x.com/uqu_cc/status/2071210328461824170?s=46"
        },
        {
          icon: <ShieldCheck className="text-emerald-400" size={24} />,
          title: "شارة جاهزية للتميز",
          org: "هيئة تقويم التعليم والتدريب والهيئة الوطنية للأمن السيبراني",
          year: "2026",
          desc: "تم التكريم كأحد أفضل خريجي الأمن السيبراني على مستوى الجامعات في المملكة العربية السعودية، مما يثبت إتقان الإطار الوطني للمؤهلات.",
          link: "https://e-services.etec.gov.sa/Qiyas.TRAS.Web.Internet/Home/PrintCertificate?s=vdjwfLIl6en0xAsDw09ygLi0AYoaXe5qvCmo6jBBAb0%3D"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "متأهل لنهائيات BlackHat MEA CTF",
          org: "بلاك هات الشرق الأوسط وأفريقيا والاتحاد السعودي للأمن السيبراني والبرمجة والدرونز",
          year: "2024 و 2025",
          desc: "تأهلنا لعامين متتالين 2024-2025. المنافسة في النهائيات الإقليمية إلى جانب أفضل المواهب في الأمن السيبراني، وحل تحديات متقدمة في التشفير والهندسة العكسية واستغلال الويب.",
          link: "https://www.linkedin.com/posts/bahathiq_%D9%85%D8%AA%D8%AD%D9%85%D8%B3-%D9%84%D9%84%D8%AA%D9%88%D8%A7%D8%AC%D8%AF-%D9%81%D9%8A-black-hat-mea-2025-%D9%87%D8%B0%D8%A7-%D8%A7%D9%84%D8%B9%D8%A7%D9%85-share-7401013818245582850-aGRM/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADvFq0QBQ92HHgQksZVoD-of4gNYTtWp0aQ"
        },
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "شهادة شكر وتقدير",
          org: "أكاديمية طويق",
          year: "2025",
          desc: "تقديراً للمشاركة الفعالة والجهود المتميزة والمساهمة بالإشراف على تنظيم برنامج 'صيفك ذكي' بالشراكة مع وزارة الاتصالات وتقنية المعلومات.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQFrvn3tTnlspw/profile-treasury-image-shrink_1920_1920/B4DZm1PdvcJMAc-/0/1759682355442?e=1783454400&v=beta&t=YYnXdtaGyPDzg3EgkrL4VzrJFd7D2inzaGXFs0w6jMI"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "الفائز بالمركز الرابع في تحدي Space Apps",
          org: "ناسا وجامعة أم القرى",
          year: "2023",
          desc: "مشروع 'التنبؤ بالموارد الطبيعية بناءً على البيانات المكانية الجغرافية'.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQFuBiPI9gujJw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1696795342882?e=1783454400&v=beta&t=uwYQgcvqHJrHuDwiNCILNevwUuFGoJSGUzhNcX7qIVQ"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="awards" className="py-24 px-6 sm:px-12 lg:px-24 bg-slate-900/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <AwardIcon size={14} />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.items.map((award, index) => {
            const hasLink = Boolean(award.link);
            return (
              <motion.a
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                href={award.link || "#"}
                target={hasLink ? "_blank" : "_self"}
                rel={hasLink ? "noreferrer" : ""}
                className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-emerald-500/10 overflow-hidden flex flex-col justify-between h-full cursor-pointer"
              >
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
                
                {/* Subtle top border gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 group-hover:border-emerald-500/30 text-emerald-400 transition-colors shadow-inner">
                      {award.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800/80 text-emerald-300 border border-slate-700/60 tracking-wider" dir="ltr">
                        {award.year}
                      </span>
                      {hasLink && (
                        <div className="text-slate-500 group-hover:text-emerald-400 transition-colors">
                          <ExternalLink size={16} />
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-200">
                    {award.title}
                  </h3>
                  <p className="text-emerald-400 text-sm font-semibold mb-4">
                    {award.org}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {award.desc}
                  </p>
                </div>

                {hasLink && (
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-end">
                    <span className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>{lang === 'ar' ? 'عرض التكريم / الإثبات' : 'View Recognition'}</span>
                      <ExternalLink size={12} />
                    </span>
                  </div>
                )}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
