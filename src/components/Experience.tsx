"use client";

import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Experience = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Experience",
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
          role: "Co-Lead Project Management Team",
          company: "UQU Computing Club",
          date: "Mar 2024 - Jun 2024",
          location: "College of Computing, Makkah",
          description: [
            "Overseen the working plan, making necessary changes, and ensuring all tasks were completed effectively as a project manager."
          ]
        },
        {
          role: "Media Committee Leader",
          company: "GDSC - Umm Al-Qura University",
          date: "Aug 2023 - Jun 2024",
          location: "Makkah, Saudi Arabia",
          description: [
            "Managed all social media aspects and the public appearance of the club as the Leader of the Media Committee."
          ]
        },
        {
          role: "President",
          company: "UQU Computing Club",
          date: "Jan 2024 - Dec 2025",
          location: "College of Computing, Makkah",
          description: [
            "Led governance and strategic initiatives for the university's largest student organization.",
            "Organized flagship technology events including TechProTalk and Entrepreneurship Week.",
            "Managed multidisciplinary teams and initiatives reaching 500+ students, fostering technical growth."
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
        }
      ]
    },
    ar: {
      title: "الخبرات العملية",
      items: [
        {
          role: "أخصائي تخطيط ومكتب إدارة المشاريع",
          company: "رحلة ومنافع - إشراقات",
          date: "أبريل 2025 - يوليو 2025 ومارس 2026 - يونيو 2026",
          location: "مكة المكرمة، السعودية",
          description: [
            "دعم مبادرات إدارة المخاطر والامتثال بما يتماشى مع المتطلبات التنظيمية والمؤسسية.",
            "تطوير ومراقبة مؤشرات الأداء التشغيلية خلال موسم الحج لقياس الأداء وفعالية الخدمة.",
            "بناء لوحات معلومات تفاعلية في Power BI وتقارير تنفيذية لدعم التخطيط الاستراتيجي واتخاذ القرارات المبنية على البيانات."
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
        },
        {
          role: "متدرب - مهندس أمن سيبراني",
          company: "منصة سلة للتجارة الإلكترونية",
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
          role: "قائد مشارك لفريق إدارة المشاريع",
          company: "نادي الحاسب الآلي بجامعة أم القرى",
          date: "مارس 2024 - يونيو 2024",
          location: "كلية الحاسب، مكة المكرمة",
          description: [
            "بصفتي مدير مشروع، أشرفت على خطة العمل وإجراء التغييرات اللازمة والتأكد من إنجاز جميع المهام على الوجه المطلوب."
          ]
        },
        {
          role: "قائد اللجنة الإعلامية",
          company: "أندية الطلبة المطورين من جوجل - جامعة أم القرى",
          date: "أغسطس 2023 - يونيو 2024",
          location: "مكة المكرمة، السعودية",
          description: [
            "بصفتي قائدًا للجنة الإعلامية، قمت بإدارة جميع جوانب وسائل التواصل الاجتماعي والمظهر العام للنادي."
          ]
        },
        {
          role: "رئيس النادي",
          company: "نادي الحاسب الآلي بجامعة أم القرى",
          date: "يناير 2024 - ديسمبر 2025",
          location: "كلية الحاسب، مكة المكرمة",
          description: [
            "قيادة الحوكمة والمبادرات الاستراتيجية لأكبر منظمة طلابية في الجامعة.",
            "تنظيم الأحداث التقنية الكبرى بما في ذلك أسبوع ريادة الأعمال و TechProTalk.",
            "إدارة فرق متعددة التخصصات ومبادرات تصل إلى أكثر من 500 طالب، وتعزيز النمو التقني."
          ]
        },
        {
          role: "رئيس المجتمع التقني",
          company: "مجتمع كبتار - شركة عون التقنية",
          date: "يناير 2024 - ديسمبر 2026",
          location: "مكة المكرمة، السعودية",
          description: [
            "قيادة المبادرات التقنية المجتمعية المتوافقة مع رؤية السعودية 2030، وتعزيز الوعي الرقمي.",
            "تنظيم برامج تقنية وحملات محتوى تسلط الضوء على التقنية والابتكار وريادة الأعمال في السعودية."
          ]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="experience" className="py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">{t.title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {t.items.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 md:ml-0 z-10">
                <Briefcase size={16} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors shadow-lg ml-6 md:ml-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-emerald-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 whitespace-nowrap bg-gray-900 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} className={lang === 'ar' ? 'ml-1.5' : 'mr-1.5'} />
                    <span dir="ltr">{exp.date}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-4">{exp.location}</div>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
