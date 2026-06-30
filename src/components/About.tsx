"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      p1: "I am an Entrepreneur and a results-driven Cybersecurity graduate with a strong foundation in Artificial Intelligence, Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), and Security Operations. My passion lies in aligning technical security capabilities with broader business and governance needs.",
      p2: "Through roles ranging from a Cybersecurity Engineer Intern at Salla E-Commerce to a Cyber Threat Hunter at the Makkah Municipality, I've developed hands-on expertise in conducting NCA-aligned risk assessments, developing security policies, and deploying SIEM solutions. My graduation project, the Muwahhad IAM Platform, demonstrated my ability to architect centralized identity governance and lifecycle management solutions.",
      p3: "Beyond technical cybersecurity skills, I bring extensive leadership and strategic PMO experience. As the President of the UQU Computing Club and a Planning & PMO Specialist, I've orchestrated large-scale technology events, developed operational KPIs, and managed multidisciplinary teams to drive digital transformation initiatives aligned with Saudi Vision 2030.",
      p4: "Recognized with the Jahiziyah Excellence Badge (2026) and as a BlackHat MEA CTF Finalist, I combine analytical rigor with strategic vision to deliver robust, secure, and resilient technology solutions."
    },
    ar: {
      title: "نبذة عني",
      p1: "رائد أعمال وخريج أمن سيبراني شغوف بتحقيق النتائج، وأمتلك أساساً قوياً في الذكاء الاصطناعي، والحوكمة والمخاطر والالتزام (GRC)، وإدارة الهوية والوصول (IAM)، والعمليات الأمنية. يكمن شغفي في مواءمة القدرات الأمنية التقنية مع احتياجات الأعمال والحوكمة الشاملة.",
      p2: "من خلال أدوار تتراوح من متدرب كمهندس أمن سيبراني في شركة سلة للتجارة الالكترونية إلى صائد تهديدات سيبرانية في أمانة العاصمة المقدسة، اكتسبت خبرة عملية في إجراء تقييمات المخاطر المتوافقة مع الهيئة الوطنية للأمن السيبراني، وتطوير السياسات الأمنية، ونشر حلول SIEM. أظهر مشروع تخرجي، منصة موحد لإدارة الهوية، قدرتي على تصميم حلول مركزية لحوكمة الهوية وإدارة دورة الحياة.",
      p3: "إلى جانب المهارات التقنية في الأمن السيبراني، أمتلك خبرة واسعة في القيادة ومكتب إدارة المشاريع (PMO) الاستراتيجي. بصفتي رئيساً لنادي الحاسب الآلي بجامعة أم القرى وأخصائي تخطيط وPMO، قمت بتنظيم أحداث تقنية واسعة النطاق، وتطوير مؤشرات الأداء التشغيلية، وإدارة فرق متعددة التخصصات لدفع مبادرات التحول الرقمي المتوافقة مع رؤية السعودية 2030.",
      p4: "حاصل على شارة التميز من جاهزية (2026) وتأهلت لنهائيات مسابقة التقط العلم في فعالية بلاك هات الشرق الأوسط، أجمع الدقة التحليلية مع الرؤية الاستراتيجية لتقديم حلول تقنية قوية وآمنة ومرنة."
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-20 px-6 sm:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 items-center">
          <div className="text-center w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t.title}</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded mx-auto"></div>
          </div>
          <div className="space-y-6 text-gray-200 text-lg sm:text-xl leading-relaxed bg-gray-900/60 p-8 sm:p-12 rounded-3xl border border-gray-700/50 backdrop-blur-xl shadow-2xl text-justify text-justify-last-center">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
