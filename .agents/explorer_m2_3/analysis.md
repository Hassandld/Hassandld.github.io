# Comprehensive Text & Bilingual Analysis for Milestone 2 (Hero & About)

## 1. Executive Summary
This document provides the complete forensic inspection, verbatim bilingual dictionary mapping, link verification, and RTL design recommendations for `src/components/Hero.tsx` and `src/components/About.tsx`.

The primary mandate is **100% strict content preservation** of all English and Arabic text strings, acronyms, entity names, links, and attributes, while enabling modern Framer Motion animations and glassmorphism styling.

---

## 2. Full Verbatim Text & Entity Mapping

### 2.1 Hero Section (`src/components/Hero.tsx`)

| Key / Element | English Text (`content.en`) | Arabic Text (`content.ar`) | Notes & Invariants |
| :--- | :--- | :--- | :--- |
| **`subtitle`** (`<h2>`) | `"Welcome to my space"` | `"مرحباً بك في مساحتي"` | Pre-heading greeting/badge. |
| **`title`** (`<h1>`) | `"Hassan Bahathiq"` | `"حسن باحاذق"` | Full name heading. Also used as `alt` text for `/hero-image.jpg`. |
| **`headline`** (`<p>`) | `"Cybersecurity Graduate \| GRC \| IAM \| Security Operations"` | `"خريج أمن سيبراني \| الحوكمة والمخاطر والالتزام \| إدارة الهوية \| العمليات الأمنية"` | Role and domains list separated by pipes. |
| **`description`** (`<p>`) | `"Experienced in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), Security Operations, Strategic Planning, and PMO initiatives."` | `"خبرة في الحوكمة والمخاطر والامتثال (GRC)، وإدارة الهوية والوصول (IAM)، والعمليات الأمنية، والتخطيط الاستراتيجي، ومبادرات مكتب إدارة المشاريع (PMO)."` | Main career summary text. Contains parenthetical acronyms. |
| **`contact`** (`<a>` CTA) | `"Contact Me"` | `"تواصل معي"` | Direct CTA button targeting anchor `#contact`. Accompanied by `<Mail size={20} />`. |
| **`recommendations`** (`<a>`) | `"Recommendations"` | `"التوصيات"` | Secondary pill button targeting route `/recommendations`. |

#### Hero Interactive Links & Assets:
- **Contact Button**:
  - Target: `#contact`
  - Text: `{t.contact}` ("Contact Me" / "تواصل معي")
  - Icon: `<Mail size={20} />`
- **LinkedIn Link**:
  - Target: `https://linkedin.com/in/bahathiq`
  - Attributes: `target="_blank" rel="noreferrer"`
  - Icon: `<FaLinkedin size={24} />`
- **GitHub Link**:
  - Target: `https://github.com/Hassandld`
  - Attributes: `target="_blank" rel="noreferrer"`
  - Icon: `<FaGithub size={24} />`
- **Recommendations Link**:
  - Target: `/recommendations`
  - Text: `{lang === 'ar' ? 'التوصيات' : 'Recommendations'}`
- **Hero Image**:
  - File: `/hero-image.jpg`
  - Alt: `{t.title}`
  - Optimization recommendation: Add `priority` property for LCP performance in Next.js.

---

### 2.2 About Section (`src/components/About.tsx`)

| Key / Element | English Text (`content.en`) | Arabic Text (`content.ar`) |
| :--- | :--- | :--- |
| **`title`** (`<h2>`) | `"About Me"` | `"نبذة عني"` |
| **`p1`** (`<p>`) | `"I am an Entrepreneur and a results-driven Cybersecurity graduate with a strong foundation in Artificial Intelligence, Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), and Security Operations. My passion lies in aligning technical security capabilities with broader business and governance needs."` | `"رائد أعمال وخريج أمن سيبراني شغوف بتحقيق النتائج، وأمتلك أساساً قوياً في الذكاء الاصطناعي، والحوكمة والمخاطر والالتزام (GRC)، وإدارة الهوية والوصول (IAM)، والعمليات الأمنية. يكمن شغفي في مواءمة القدرات الأمنية التقنية مع احتياجات الأعمال والحوكمة الشاملة."` |
| **`p2`** (`<p>`) | `"Through roles ranging from a Cybersecurity Engineer Intern at Salla E-Commerce to a Cyber Threat Hunter at the Makkah Municipality, I've developed hands-on expertise in conducting NCA-aligned risk assessments, developing security policies, and deploying SIEM solutions. My graduation project, the Muwahhad IAM Platform, demonstrated my ability to architect centralized identity governance and lifecycle management solutions."` | `"من خلال أدوار تتراوح من متدرب كمهندس أمن سيبراني في شركة سلة للتجارة الالكترونية إلى صائد تهديدات سيبرانية في أمانة العاصمة المقدسة، اكتسبت خبرة عملية في إجراء تقييمات المخاطر المتوافقة مع الهيئة الوطنية للأمن السيبراني، وتطوير السياسات الأمنية، ونشر حلول SIEM. أظهر مشروع تخرجي، منصة موحد لإدارة الهوية، قدرتي على تصميم حلول مركزية لحوكمة الهوية وإدارة دورة الحياة."` |
| **`p3`** (`<p>`) | `"Beyond technical cybersecurity skills, I bring extensive leadership and strategic PMO experience. As the President of the UQU Computing Club and a Planning & PMO Specialist, I've orchestrated large-scale technology events, developed operational KPIs, and managed multidisciplinary teams to drive digital transformation initiatives aligned with Saudi Vision 2030."` | `"إلى جانب المهارات التقنية في الأمن السيبراني، أمتلك خبرة واسعة في القيادة ومكتب إدارة المشاريع (PMO) الاستراتيجي. بصفتي رئيساً لنادي الحاسب الآلي بجامعة أم القرى وأخصائي تخطيط وPMO، قمت بتنظيم أحداث تقنية واسعة النطاق، وتطوير مؤشرات الأداء التشغيلية، وإدارة فرق متعددة التخصصات لدفع مبادرات التحول الرقمي المتوافقة مع رؤية السعودية 2030."` |
| **`p4`** (`<p>`) | `"Recognized with the Jahiziyah Excellence Badge (2026) and as a BlackHat MEA CTF Finalist, I combine analytical rigor with strategic vision to deliver robust, secure, and resilient technology solutions."` | `"حاصل على شارة التميز من جاهزية (2026) وتأهلت لنهائيات مسابقة التقط العلم في فعالية بلاك هات الشرق الأوسط، أجمع الدقة التحليلية مع الرؤية الاستراتيجية لتقديم حلول تقنية قوية وآمنة ومرنة."` |

---

## 3. Entity & Keyword Preservation Matrix

| English Term / Entity | Arabic Equivalent | Domain / Context | Invariant Rule |
| :--- | :--- | :--- | :--- |
| **Governance, Risk & Compliance (GRC)** | الحوكمة والمخاطر والالتزام (GRC) / الحوكمة والمخاطر والامتثال (GRC) | Core Competency | Retain full English acronym inside Arabic parentheses |
| **Identity & Access Management (IAM)** | إدارة الهوية والوصول (IAM) | Core Competency | Retain full English acronym inside Arabic parentheses |
| **Security Operations** | العمليات الأمنية | Core Competency | Exact phrase |
| **PMO (Project Management Office)** | مكتب إدارة المشاريع (PMO) | Leadership / PMO | Retain full English acronym inside Arabic parentheses |
| **Salla E-Commerce** | شركة سلة للتجارة الالكترونية | Experience | Exact entity name |
| **Makkah Municipality** | أمانة العاصمة المقدسة | Experience | Exact government entity name |
| **NCA (National Cybersecurity Authority)** | الهيئة الوطنية للأمن السيبراني | Compliance | Exact regulatory body name |
| **SIEM** | حلول SIEM | Technical Operations | Exact acronym |
| **Muwahhad IAM Platform** | منصة موحد لإدارة الهوية | Capstone Project | Exact project name |
| **UQU Computing Club** | نادي الحاسب الآلي بجامعة أم القرى | Leadership / University | Exact club & university name |
| **Saudi Vision 2030** | رؤية السعودية 2030 | Strategy / Alignment | Exact vision title |
| **Jahiziyah Excellence Badge (2026)** | شارة التميز من جاهزية (2026) | Honor / Award | Exact award title & year |
| **BlackHat MEA CTF Finalist** | نهائيات مسابقة التقط العلم في فعالية بلاك هات الشرق الأوسط | Cybersecurity Honor | Exact competition & finalist status |

---

## 4. RTL & Typography Verification Protocol

1. **Directional Layout & Flow**:
   - `dir="rtl"` is applied globally to `<html>` via `LanguageContext`.
   - Grid and Flexbox layouts should rely on bidirectional properties (`gap-4`, `justify-between`, `items-center`) rather than hardcoded directional margins (`ml-*`, `mr-*`).
   - For text alignment, use `text-start` or responsive conditional classes (`lang === 'ar' ? 'text-right' : 'text-left'`).
   
2. **Tajawal Arabic Font Rendering**:
   - Arabic text uses `--font-tajawal` (Tajawal font from Google Fonts), configured in `globals.css` (`:lang(ar) { font-family: var(--font-tajawal), sans-serif; }`).
   - Line height for Arabic paragraphs should be `leading-relaxed` or `leading-[1.8]` to ensure Tashkeel/diacritics and ascenders/descenders are not clipped.
   - Avoid aggressive word-breaking (`break-all`) on Arabic text; use `break-words` or `text-wrap: pretty`.

3. **BiDi Text Integrity (Mixed Arabic & Latin/Numbers)**:
   - Acronyms (GRC, IAM, SIEM, PMO, CTF) and numbers (2026, 2030) inside Arabic strings naturally format in LTR within RTL flow.
   - External links and email addresses must retain `dir="ltr"` if displayed standalone.

---

## 5. Verification Checklist for Worker & Reviewers

- [ ] `src/components/Hero.tsx` contains `"use client";` at line 1.
- [ ] `src/components/About.tsx` contains `"use client";` at line 1.
- [ ] Section ID `id="home"` is preserved on the root Hero `<section>`.
- [ ] Section ID `id="about"` is preserved on the root About `<section>`.
- [ ] All 6 bilingual dictionary keys in `Hero.tsx` (`subtitle`, `title`, `headline`, `description`, `contact`, `recommendations`) match the exact strings verbatim.
- [ ] All 5 bilingual dictionary keys in `About.tsx` (`title`, `p1`, `p2`, `p3`, `p4`) match the exact strings verbatim.
- [ ] LinkedIn link target is exactly `https://linkedin.com/in/bahathiq` with `target="_blank"` and `rel="noreferrer"`.
- [ ] GitHub link target is exactly `https://github.com/Hassandld` with `target="_blank"` and `rel="noreferrer"`.
- [ ] Contact button target is `#contact`.
- [ ] Recommendations link target is `/recommendations`.
- [ ] Image source is `/hero-image.jpg` with `alt={t.title}`.
- [ ] Framer Motion components (`motion.div`, `motion.section`, `motion.h1`, `motion.p`, `motion.a`) render smoothly without hydration errors.
- [ ] `npm run build` succeeds with 0 errors.
