"use client";

import React from 'react';
import { Trophy, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Awards = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Awards & Honors",
      items: [
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "Dean's Honor List",
          org: "Umm Al-Qura University",
          year: "2024 & 2025",
          desc: "Awarded to students demonstrating exceptional academic excellence and high GPA achievement.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG4NWuUA_eRsQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1731102457690?e=1783454400&v=beta&t=kteN-RrWDuZiP03qZWwKlUomWNoWzHEsDR8HWl4H_mg"
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
      title: "الجوائز والتكريمات",
      items: [
        {
          icon: <Star className="text-emerald-400" size={24} />,
          title: "لائحة شرف العميد (مسار التميز والأنشطة)",
          org: "جامعة أم القرى",
          year: "2024 و 2026",
          desc: "تُمنح للطلاب الذين يظهرون تميزاً أكاديمياً استثنائياً وتحقيق معدل تراكمي عالٍ.",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG4NWuUA_eRsQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1731102457690?e=1783454400&v=beta&t=kteN-RrWDuZiP03qZWwKlUomWNoWzHEsDR8HWl4H_mg"
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
    <section id="awards" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">{t.title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((award, index) => (
            <a key={index} href={award.link || "#"} target={award.link ? "_blank" : "_self"} rel={award.link ? "noreferrer" : ""} className="block bg-gray-800/80 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all shadow-xl relative overflow-hidden group h-full cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-700">
                  {award.icon}
                </div>
                <span className="text-2xl font-bold text-gray-800/50" dir="ltr">{award.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
              <p className="text-emerald-400 font-medium mb-4">{award.org}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{award.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
