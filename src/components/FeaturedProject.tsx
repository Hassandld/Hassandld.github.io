"use client";

import React from 'react';
import { Shield, Fingerprint, Database, Server, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const FeaturedProject = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Featured Project",
      projectName: "Muwahhad IAM Platform",
      status: "Graduation Project - UQU in collaboration with SALLA E-Commerce",
      desc1: "A comprehensive Identity and Access Management platform built to centralize authentication, authorization, and user lifecycle management for enterprise applications.",
      desc2: "Muwahhad addresses the critical need for secure, scalable identity governance by implementing modern federation protocols and zero-trust principles.",
      keyFeaturesTitle: "Key Features",
      features: [
        "Single Sign-On (SSO) integration across multiple services",
        "Multi-Factor Authentication (MFA) enforcement",
        "Role-Based Access Control (RBAC) & Governance",
        "Automated User Provisioning & Deprovisioning",
        "Comprehensive Usability & Functional Testing",
        "Advanced Penetration Testing & Vulnerability Assessment"
      ],
      techStack: ["Django", "Keycloak", "OAuth 2.0 / OIDC", "Docker", "PostgreSQL", "Tailwind CSS"]
    },
    ar: {
      title: "مشروع مميز",
      projectName: "منصة موحد لإدارة الهوية",
      status: "مشروع التخرج - جامعة أم القرى بالتعاون مع شركة سلة للتجارة الالكترونية",
      desc1: "منصة شاملة لإدارة الهوية والوصول صُممت لمركزة المصادقة والتفويض وإدارة دورة حياة المستخدم لتطبيقات المؤسسات.",
      desc2: "يعالج مشروع 'موحد' الحاجة الماسة لحوكمة الهوية الآمنة والقابلة للتوسع من خلال تنفيذ بروتوكولات الاتحاد الحديثة ومبادئ الثقة المعدومة (Zero-Trust).",
      keyFeaturesTitle: "الميزات الرئيسية",
      features: [
        "تكامل الدخول الموحد (SSO) عبر خدمات متعددة",
        "فرض المصادقة متعددة العوامل (MFA)",
        "التحكم في الوصول القائم على الأدوار (RBAC) والحوكمة",
        "أتمتة توفير وإلغاء حسابات المستخدمين",
        "اختبارات قابلية الاستخدام والاختبارات الوظيفية الشاملة",
        "اختبارات الاختراق وتقييم الثغرات الأمنية المتقدمة"
      ],
      techStack: ["Django", "Keycloak", "OAuth 2.0 / OIDC", "Docker", "PostgreSQL", "Tailwind CSS"]
    }
  };

  const t = content[lang];

  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">{t.title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Fingerprint size={200} className="text-emerald-500" />
          </div>
          
          <div className="p-8 lg:p-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                <Shield size={16} />
                <span>{t.status}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">{t.projectName}</h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                <p>{t.desc1}</p>
                <p>{t.desc2}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {t.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-sm text-gray-400" dir="ltr">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Lock className="text-emerald-400" size={20} />
                {t.keyFeaturesTitle}
              </h4>
              <ul className="space-y-4">
                {t.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Server className="text-emerald-500 shrink-0 mt-1" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
