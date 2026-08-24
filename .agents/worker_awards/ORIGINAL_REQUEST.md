## 2026-08-25T02:01:30Z
<USER_REQUEST>
You are the Dedicated Worker for `src/components/Awards.tsx`.
Your working directory is: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_awards/
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

CRITICAL SINGLE-FILE TASK:
You must call `write_to_file` on `/Users/dluud/Desktop/anything/Hassandld.github.io/src/components/Awards.tsx` (Overwrite: true) with the following complete, modernized Framer Motion code:

```tsx
"use client";

import React from 'react';
import { Trophy, Star, ShieldCheck } from 'lucide-react';
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Awards = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Awards & Honors",
      subtitle: "National and Academic Recognitions",
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
          org: "Education and Training Evaluation Commission (ETEC)",
          year: "2026",
          desc: "Honored with the Jahiziyah Excellence Badge from ETEC for ranking among the top university graduates nationwide in cybersecurity competencies and standardized assessments.",
          link: "https://www.linkedin.com/in/bahathiq/details/honors/"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "1st Place – NASA Space Apps Hackathon (Makkah)",
          org: "NASA Space Apps Challenge",
          year: "2024",
          desc: "Led the team to first place locally by developing an AI-driven educational platform analyzing satellite data and space missions.",
          link: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/space-geeks/"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "5th Place – BlackHat MEA CTF Qualifiers",
          org: "BlackHat MEA / Flagyard",
          year: "2024",
          desc: "Ranked 5th among university teams across Saudi Arabia in a national cybersecurity competition focused on web exploitation, cryptography, and reverse engineering.",
          link: "https://www.linkedin.com/posts/bahathiq_activity-7250529598285742080-kU9b"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "2nd Place – Hajj & Umrah Cybersecurity Challenge",
          org: "Umm Al-Qura University",
          year: "2023",
          desc: "Secured second place by pitching an innovative smart crowd-management and security solution tailored for Hajj and Umrah operations.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG028rV4_eCew/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1696795342882?e=1783454400&v=beta&t=uwYQgcvqHJrHuDwiNCILNevwUuFGoJSGUzhNcX7qIVQ"
        }
      ]
    },
    ar: {
      title: "الجوائز والتكريمات",
      subtitle: "التكريمات والجوائز الأكاديمية والوطنية",
      items: [
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "لوحة الشرف (الأنشطة اللاصفية)",
          org: "جامعة أم القرى",
          year: "2024",
          desc: "تُمنح للطلاب المتميزين أكاديميًا وذوي الأنشطة اللاصفية البارزة والمساهمات الفاعلة.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG4NWuUA_eRsQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1731102457690?e=1783454400&v=beta&t=kteN-RrWDuZiP03qZWwKlUomWNoWzHEsDR8HWl4H_mg"
        },
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "لوحة الشرف (التميز في الاختبارات المعيارية)",
          org: "جامعة أم القرى",
          year: "2026",
          desc: "تكريم على التميز في الاختبارات المعيارية والمهنية وتحقيق أعلى المعايير.",
          link: "https://x.com/uqu_cc/status/2071210328461824170?s=46"
        },
        {
          icon: <ShieldCheck className="text-emerald-400" size={24} />,
          title: "شارة التميز في الجاهزية",
          org: "هيئة تقويم التعليم والتدريب (ETEC)",
          year: "2026",
          desc: "الحصول على شارة التميز من هيئة تقويم التعليم والتدريب لتحقيق مراكز متقدمة بين خريجي الجامعات على مستوى المملكة في اختبارات الجاهزية للأمن السيبراني.",
          link: "https://www.linkedin.com/in/bahathiq/details/honors/"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "المركز الأول – هاكاثون ناسا لتطبيقات الفضاء (مكة)",
          org: "تحدي تطبيقات الفضاء من ناسا",
          year: "2024",
          desc: "قيادة الفريق للمركز الأول محليًا بتطوير منصة تعليمية بالذكاء الاصطناعي لتحليل بيانات الأقمار الصناعية ومهمات الفضاء.",
          link: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/space-geeks/"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "المركز الخامس – تصفيات BlackHat MEA CTF",
          org: "بلاك هات الشرق الأوسط وأفريقيا / Flagyard",
          year: "2024",
          desc: "المرتبة الخامسة بين الفرق الجامعية على مستوى السعودية في مسابقة للأمن السيبراني في استغلال الويب والتشفير والهندسة العكسية.",
          link: "https://www.linkedin.com/posts/bahathiq_activity-7250529598285742080-kU9b"
        },
        {
          icon: <Trophy className="text-emerald-400" size={24} />,
          title: "المركز الثاني – تحدي الأمن السيبراني في الحج والعمرة",
          org: "جامعة أم القرى",
          year: "2023",
          desc: "تحقيق المركز الثاني بتقديم حل أمني وإدارة حشود ذكية مصممة لخدمة ضيوف الرحمن.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG028rV4_eCew/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1696795342882?e=1783454400&v=beta&t=uwYQgcvqHJrHuDwiNCILNevwUuFGoJSGUzhNcX7qIVQ"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="awards" className="py-20 px-6 sm:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t.title}</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.items.map((award, index) => (
            <motion.a
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              href={award.link || "#"}
              target={award.link ? "_blank" : "_self"}
              rel={award.link ? "noreferrer" : ""}
              className="block bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl relative overflow-hidden group h-full cursor-pointer flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                    {award.icon}
                  </div>
                  <span className="text-2xl font-bold text-slate-700 group-hover:text-emerald-500/50 transition-colors" dir="ltr">{award.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{award.title}</h3>
                <p className="text-emerald-400 font-medium text-sm mb-4">{award.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{award.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
```

After writing the file, verify with `view_file` on `src/components/Awards.tsx`, run `npm run lint`, and send a message.
</USER_REQUEST>
