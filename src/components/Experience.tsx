"use client";

import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
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

const Experience = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Career Track",
      title: "Experience",
      subtitle: "My Professional Journey & Leadership Roles",
      items: [
        {
          role: "Planning & PMO Specialist",
          company: "Rehlat W manafe - Ashraqat",
          date: "Apr 2025 - Jul 2025 & Mar 2026 - Jun 2026",
          location: "Makkah, Saudi Arabia",
          description: [
            "Supported risk management and compliance initiatives aligned with organizational and regulatory requirements.",
            "Developed and monitored operational KPIs during the Hajj season to measure performance and service effectiveness.",
            "Built dynamic Power BI dashboards and executive reports to support strategic planning and data-driven decision-making."
          ]
        },
        {
          role: "Cybersecurity Engineer Intern",
          company: "SALLA E-Commerce",
          date: "Jun 2025 - Aug 2025",
          location: "Makkah - Jeddah, Saudi Arabia",
          description: [
            "Conducted NCA-aligned risk assessments and developed security policies, IR procedures, and BCP documentation.",
            "Deployed Wazuh SIEM and implemented Cloudflare WAF controls to strengthen security monitoring and web protection.",
            "Supported secure coding reviews and security awareness initiatives."
          ]
        },
        {
          role: "Cyber Threat Hunter - COOP",
          company: "Makkah Municipality",
          date: "Mar 2025 - Jul 2025",
          location: "Makkah, Saudi Arabia",
          description: [
            "Conducted threat hunting and security monitoring using SIEM solutions.",
            "Investigated phishing incidents and supported incident response activities.",
            "Assisted in risk assessments and awareness programs aligned with NCA requirements."
          ]
        },
        {
          role: "Associate Project Manager (Scrum Master)",
          company: "Alborhan Association",
          date: "Apr 2025 - Nov 2025",
          location: "Remote, Riyadh",
          description: [
            "Facilitated Agile workflows and project lifecycles for technology initiatives, improving team coordination.",
            "Conducted business analysis to identify operational bottlenecks and implement continuous improvement strategies."
          ]
        },
        {
          role: "Head of Technology Community",
          company: "KEPTAR - Awontech",
          date: "Jan 2024 - Dec 2026",
          location: "Makkah, Saudi Arabia",
          description: [
            "Led community-driven technology initiatives aligned with Saudi Vision 2030, driving digital awareness.",
            "Organized technical programs and content campaigns highlighting Saudi technology, innovation, and entrepreneurship."
          ]
        },
        {
          role: "President",
          company: "UQU Computing Club",
          date: "Aug 2024 - Sep 2025",
          location: "College of Computing, Makkah",
          description: [
            "Led governance and strategic initiatives for the university's largest student organization.",
            "Organized flagship technology events including TechProTalk and Entrepreneurship Week.",
            "Managed multidisciplinary teams and initiatives reaching 500+ students, fostering technical growth."
          ]
        },
        {
          role: "Vice President of Project Management Committee",
          company: "UQU Computing Club",
          date: "Mar 2024 - Jun 2024",
          location: "College of Computing, Makkah",
          description: [
            "Overseen the working plan, making necessary changes, and ensuring all tasks were completed effectively as Vice President."
          ]
        },
        {
          role: "Media Committee Leader",
          company: "GDSC - Umm Al-Qura University",
          date: "Aug 2023 - Jun 2024",
          location: "Makkah, Saudi Arabia",
          description: [
            "Managed all social media aspects and the public appearance of the club as the Leader of the Media Committee.",
            "Led a team of content creators to design and execute digital marketing campaigns, significantly increasing student engagement.",
            "Oversaw the documentation of events and the creation of promotional materials, ensuring brand consistency."
          ]
        },
        {
          role: "Lead Coordinator – Iftar Initiative for Fasting Individuals",
          company: "Princess Seetah Foundation & General Authority of Awqaf",
          date: "Ramadan 1446-1447",
          location: "Al Haram, Makkah",
          description: [
            "Led the daily operations of a large-scale Iftar initiative at Al Haram in Makkah during Ramadan 1446.",
            "Served thousands of fasting individuals daily with professional organization and a volunteer spirit.",
            "Empowered Saudi student volunteers from universities and schools by involving them in meaningful service.",
            "Contributed to preparing the official end-of-season report documenting overall impact and outcomes."
          ]
        }
      ]
    },
    ar: {
      badge: "المسار المهني",
      title: "الخبرات العملية",
      subtitle: "مسيرتي المهنية والقيادية",
      items: [
        {
          role: "أخصائي تخطيط وإدارة مشاريع",
          company: "رحلة ومنافع - أشرقت",
          date: "أبريل 2025 - يوليو 2025 ومارس 2026 - يونيو 2026",
          location: "مكة المكرمة، السعودية",
          description: [
            "دعم مبادرات إدارة المخاطر والامتثال بما يتماشى مع المتطلبات التنظيمية والمؤسسية.",
            "تطوير ومراقبة مؤشرات الأداء التشغيلية خلال موسم الحج لقياس الأداء وفعالية الخدمة.",
            "بناء لوحات معلومات تفاعلية في Power BI وتقارير تنفيذية لدعم التخطيط الاستراتيجي واتخاذ القرارات المبنية على البيانات."
          ]
        },
        {
          role: "متدرب - مهندس أمن سيبراني",
          company: "شركة سلة للتجارة الالكترونية",
          date: "يونيو 2025 - أغسطس 2025",
          location: "مكة المكرمة - جدة، السعودية",
          description: [
            "إجراء تقييمات للمخاطر متوافقة مع متطلبات الهيئة الوطنية للأمن السيبراني، وتطوير السياسات الأمنية وإجراءات الاستجابة للحوادث.",
            "نشر وتكوين نظام Wazuh SIEM وتنفيذ ضوابط Cloudflare WAF لتعزيز المراقبة الأمنية وحماية الويب.",
            "دعم مراجعات الكود الآمن ومبادرات التوعية الأمنية."
          ]
        },
        {
          role: "صائد التهديدات السيبرانية (تدريب تعاوني)",
          company: "أمانة العاصمة المقدسة",
          date: "مارس 2025 - يوليو 2025",
          location: "مكة المكرمة، السعودية",
          description: [
            "القيام بصيد التهديدات والمراقبة الأمنية باستخدام حلول SIEM.",
            "التحقيق في حوادث التصيد الاحتيالي ودعم أنشطة الاستجابة للحوادث.",
            "المساعدة في تقييم المخاطر وبرامج التوعية المتوافقة مع متطلبات الهيئة الوطنية للأمن السيبراني."
          ]
        },
        {
          role: "مساعد مدير مشروع (Scrum Master)",
          company: "جمعية البرهان",
          date: "أبريل 2025 - نوفمبر 2025",
          location: "عن بعد، الرياض",
          description: [
            "تسهيل سير عمل تقنية أجايل وإدارة دورة حياة مشاريع التقنية، مما أدى إلى تحسين تنسيق الفريق.",
            "إجراء تحليلات الأعمال لتحديد معوقات التشغيل وتنفيذ استراتيجيات التحسين المستمر."
          ]
        },
        {
          role: "رئيس مجتمع كِبتار التقني",
          company: "مجتمع كبتار - جمعية عون التقنية",
          date: "يناير 2024 - ديسمبر 2026",
          location: "مكة المكرمة، السعودية",
          description: [
            "قيادة المبادرات التقنية المجتمعية المتوافقة مع رؤية السعودية 2030، وتعزيز الوعي الرقمي.",
            "تنظيم برامج تقنية وحملات محتوى تسلط الضوء على التقنية والابتكار وريادة الأعمال في السعودية."
          ]
        },
        {
          role: "رئيس النادي",
          company: "نادي الحاسبات بجامعة أم القرى",
          date: "أغسطس 2024 - سبتمبر 2025",
          location: "كلية الحاسب، مكة المكرمة",
          description: [
            "قيادة الحوكمة والمبادرات الاستراتيجية لأكبر منظمة طلابية في الجامعة.",
            "تنظيم الأحداث التقنية الكبرى بما في ذلك أسبوع ريادة الأعمال و TechProTalk.",
            "إدارة فرق متعددة التخصصات ومبادرات تصل إلى أكثر من 500 طالب، وتعزيز النمو التقني."
          ]
        },
        {
          role: "نائب رئيس لجنة إدارة المشاريع",
          company: "نادي الحاسبات بجامعة أم القرى",
          date: "مارس 2024 - يونيو 2024",
          location: "كلية الحاسب، مكة المكرمة",
          description: [
            "بصفتي نائب رئيس لجنة إدارة المشاريع، أشرفت على خطة العمل وإجراء التغييرات اللازمة والتأكد من إنجاز جميع المهام على الوجه المطلوب."
          ]
        },
        {
          role: "قائد اللجنة الإعلامية",
          company: "أندية الطلبة المطورين من جوجل - جامعة أم القرى",
          date: "أغسطس 2023 - يونيو 2024",
          location: "مكة المكرمة، السعودية",
          description: [
            "بصفتي قائدًا للجنة الإعلامية، قمت بإدارة جميع جوانب وسائل التواصل الاجتماعي والمظهر العام للنادي.",
            "قيادة فريق من صناع المحتوى لتصميم وتنفيذ حملات التسويق الرقمي، مما زاد بشكل كبير من تفاعل الطلاب.",
            "الإشراف على توثيق الفعاليات وإنشاء المواد الترويجية، مع ضمان اتساق الهوية البصرية."
          ]
        },
        {
          role: "مشرف مبادرة إفطار الصائمين",
          company: "بالتعاون مع وقف الأميرة صيتة والهيئة العامة للأوقاف",
          date: "رمضان ١٤٤٦-١٤٤٧",
          location: "المسجد الحرام، مكة المكرمة",
          description: [
            "أشرفت على تنفيذ مبادرة إفطار الصائمين في المسجد الحرام خلال شهر رمضان.",
            "خدمة آلاف الصائمين يوميًا بتنظيم احترافي وروح تطوعية.",
            "تمكين المتطوعين من طلاب الجامعات والمدارس السعودية من خلال إشراكهم في خدمة ذات معنى خلال الشهر الفضيل.",
            "المساهمة في إعداد التقرير الرسمي لنهاية الموسم وتوثيق الأثر العام ونتائج البرامج الخيرية."
          ]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 backdrop-blur-md">
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

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Spine */}
          <div 
            className="absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent
                       left-5 sm:left-6 md:left-1/2 md:-translate-x-1/2
                       rtl:left-auto rtl:right-5 sm:rtl:right-6 md:rtl:right-auto md:rtl:left-1/2"
            aria-hidden="true"
          />

          <motion.div 
            className="space-y-10 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {t.items.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex items-start md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } group`}
                >
                  {/* Timeline Glowing Node Indicator */}
                  <div 
                    className="absolute top-6 z-20 flex items-center justify-center w-10 h-10 rounded-full
                               bg-slate-900 border-2 border-emerald-500 text-white shadow-lg shadow-emerald-500/30
                               left-0 sm:left-1 md:left-1/2 md:-translate-x-1/2
                               rtl:left-auto rtl:right-0 sm:rtl:right-1 md:rtl:right-auto md:rtl:left-1/2
                               group-hover:scale-110 group-hover:border-emerald-400 group-hover:shadow-emerald-500/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Briefcase size={16} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  </div>

                  {/* Card Container */}
                  <div 
                    className={`w-full pl-14 sm:pl-16 rtl:pl-0 rtl:pr-14 sm:rtl:pr-16 md:pl-0 md:pr-0 md:rtl:pl-0 md:rtl:pr-0
                               md:w-[calc(50%-2.5rem)] lg:md:w-[calc(50%-3rem)]
                               ${isEven ? 'md:mr-auto md:rtl:mr-0 md:rtl:ml-auto' : 'md:ml-auto md:rtl:ml-0 md:rtl:mr-auto'}`}
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="bg-slate-900/70 hover:bg-slate-900/90 backdrop-blur-xl p-5 sm:p-7 rounded-2xl
                                 border border-white/10 hover:border-emerald-500/40 shadow-xl shadow-black/20
                                 hover:shadow-emerald-500/5 transition-all duration-300"
                    >
                      {/* Role & Date Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 mb-3">
                        <div className="space-y-1 min-w-0 flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                            {exp.role}
                          </h3>
                          <div className="text-emerald-400 font-medium text-sm sm:text-base">
                            {exp.company}
                          </div>
                        </div>

                        {/* Responsive Date Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 shrink-0 self-start max-w-full flex-wrap">
                          <Calendar size={13} className="text-emerald-400 shrink-0" />
                          <span className="leading-tight break-words">{exp.date}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 mb-4">
                        <MapPin size={13} className="text-emerald-500/80 shrink-0" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Description Bullet List */}
                      <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base leading-relaxed text-left rtl:text-right">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
