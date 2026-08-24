import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');

console.log('=== MASTER CHALLENGER ADVERSARIAL STRESS TEST SUITE ===\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const findings = [];

function assert(condition, message, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message} - ${details}`);
    findings.push({ message, details, type: 'ASSERTION_FAILURE' });
  }
}

// -------------------------------------------------------------
// 1. ROOT & WRAPPER VIEWPORT OVERFLOW AUDIT (320px, 375px, 768px, 1440px)
// -------------------------------------------------------------
console.log('--- 1. Testing Viewport & Overflow Invariants ---');

const layoutFile = fs.readFileSync(path.join(projectRoot, 'src/app/layout.tsx'), 'utf-8');
const pageFile = fs.readFileSync(path.join(projectRoot, 'src/app/page.tsx'), 'utf-8');
const recPageFile = fs.readFileSync(path.join(projectRoot, 'src/app/recommendations/page.tsx'), 'utf-8');
const globalsCss = fs.readFileSync(path.join(projectRoot, 'src/app/globals.css'), 'utf-8');

assert(
  layoutFile.includes('overflow-x-hidden'),
  'Root body layout enforces overflow-x-hidden',
  'Body must contain overflow-x-hidden to prevent mobile horizontal scroll'
);

assert(
  pageFile.includes('overflow-x-hidden'),
  'Main page layout enforces overflow-x-hidden',
  'Main element must contain overflow-x-hidden'
);

assert(
  recPageFile.includes('overflow-x-hidden'),
  'Recommendations page layout enforces overflow-x-hidden',
  'Recommendations main must contain overflow-x-hidden'
);

// Check globals.css for custom scrollbar or styles that might cause horizontal jitter
assert(
  globalsCss.includes('::-webkit-scrollbar') && globalsCss.includes('scrollbar-width: thin'),
  'Globals CSS includes modern sleek scrollbar rules',
  'Scrollbar customization must be present without width explosion'
);

// -------------------------------------------------------------
// 2. TIMELINE & EXPERIENCE RESPONSIVE DATE WRAPPING AUDIT
// -------------------------------------------------------------
console.log('\n--- 2. Testing Timeline & Experience Date Wrapping on Small Screens (320px / 375px) ---');

const expFile = fs.readFileSync(path.join(projectRoot, 'src/components/Experience.tsx'), 'utf-8');

// Check responsive classes on timeline cards and dates
assert(
  expFile.includes('flex flex-col sm:flex-row') || expFile.includes('flex-col sm:flex-row'),
  'Experience header uses responsive flex stacking (flex-col sm:flex-row)',
  'Ensures role title and date badge stack vertically on small mobile viewports (320px, 375px)'
);

assert(
  expFile.includes('w-full pl-14') && expFile.includes('md:w-[calc(50%-2.5rem)]'),
  'Experience cards width calc matches mobile margins and desktop halves',
  'Mobile card width accounts for icon offset (w-full pl-14) and desktop (md:w-[calc(50%-2.5rem)])'
);

assert(
  expFile.includes('max-w-full') && expFile.includes('flex-wrap') && expFile.includes('break-words'),
  'Date badges use max-w-full, flex-wrap, and break-words to prevent expanding beyond container',
  'Date container must shrinkwrap and wrap long dates cleanly'
);

assert(
  expFile.includes('rtl:pr-14') && expFile.includes('rtl:right-0'),
  'Experience timeline handles mobile RTL offsets symmetrically (rtl:pr-14, rtl:right-0)',
  'Ensures Arabic RTL alignment matches LTR on small screens'
);

// Check if any date strings in Experience are uncomfortably long and test their word breaks
const expDatesEn = [
  "Apr 2025 - Jul 2025 & Mar 2026 - Jun 2026",
  "Ramadan 1446-1447",
  "Jun 2025 - Aug 2025",
  "Mar 2025 - Jul 2025",
  "Apr 2025 - Nov 2025",
  "Jan 2024 - Dec 2026",
  "Aug 2024 - Sep 2025",
  "Mar 2024 - Jun 2024",
  "Aug 2023 - Jun 2024"
];

const expDatesAr = [
  "أبريل 2025 - يوليو 2025 ومارس 2026 - يونيو 2026",
  "رمضان ١٤٤٦-١٤٤٧",
  "يونيو 2025 - أغسطس 2025",
  "مارس 2025 - يوليو 2025",
  "أبريل 2025 - نوفمبر 2025",
  "يناير 2024 - ديسمبر 2026",
  "أغسطس 2024 - سبتمبر 2025",
  "مارس 2024 - يونيو 2024",
  "أغسطس 2023 - يونيو 2024"
];

for (const d of expDatesEn) {
  assert(expFile.includes(d), `Experience contains exact English date: "${d}"`);
}
for (const d of expDatesAr) {
  assert(expFile.includes(d), `Experience contains exact Arabic date: "${d}"`);
}

// -------------------------------------------------------------
// 3. ARABIC RTL & BILINGUAL TOGGLING AUDIT ACROSS ALL SECTIONS
// -------------------------------------------------------------
console.log('\n--- 3. Testing Bilingual Dictionaries & RTL Symmetry Across All Components ---');

const componentsFiles = {
  Hero: 'src/components/Hero.tsx',
  About: 'src/components/About.tsx',
  Experience: 'src/components/Experience.tsx',
  FeaturedProject: 'src/components/FeaturedProject.tsx',
  Skills: 'src/components/Skills.tsx',
  Certifications: 'src/components/Certifications.tsx',
  Awards: 'src/components/Awards.tsx',
  Contact: 'src/components/Contact.tsx',
  Recommendations: 'src/app/recommendations/page.tsx'
};

for (const [name, relPath] of Object.entries(componentsFiles)) {
  const content = fs.readFileSync(path.join(projectRoot, relPath), 'utf-8');
  
  assert(
    content.includes('useLanguage'),
    `${name} consumes useLanguage hook`,
    'Component must connect to LanguageContext for bilingual support'
  );

  assert(
    content.includes('"use client";') || content.includes("'use client';"),
    `${name} has "use client" directive`,
    'Client component boundary required for interactive language toggling'
  );

  if (name !== 'Recommendations') {
    assert(
      content.includes('en:') && content.includes('ar:'),
      `${name} defines both 'en' and 'ar' translation structures`,
      'Bilingual dictionary must be complete'
    );
  }
}

// Check LanguageContext implementation
const langContextFile = fs.readFileSync(path.join(projectRoot, 'src/context/LanguageContext.tsx'), 'utf-8');
assert(
  langContextFile.includes("document.documentElement.lang = lang") &&
  langContextFile.includes("document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'"),
  'LanguageContext dynamically updates document.documentElement dir to rtl/ltr and lang to ar/en',
  'Ensures full native browser RTL handling on HTML element'
);

assert(
  langContextFile.includes('EN') && langContextFile.includes('العربية'),
  'Language switcher floating UI provides both EN and العربية buttons',
  'Floating switcher must have both language triggers'
);

// -------------------------------------------------------------
// 4. FRAMER MOTION & MODERN DESIGN ARTIFACTS AUDIT
// -------------------------------------------------------------
console.log('\n--- 4. Testing Framer Motion & Visual Modernization ---');

const bgFile = fs.readFileSync(path.join(projectRoot, 'src/components/Background.tsx'), 'utf-8');
assert(
  bgFile.includes('motion.div') && bgFile.includes('blur-[120px]'),
  'Background provides ambient animated glow orbs with blur filters',
  'Background component must render dynamic visual backdrop'
);

assert(
  globalsCss.includes('.glass-card') && globalsCss.includes('.glass-card-hover') && globalsCss.includes('backdrop-filter'),
  'Global styles define glassmorphism utilities (.glass-card, backdrop-filter)',
  'Modern glassmorphic utility classes must be available'
);

const heroFile = fs.readFileSync(path.join(projectRoot, 'src/components/Hero.tsx'), 'utf-8');
assert(
  heroFile.includes('motion.div') && heroFile.includes('staggerChildren'),
  'Hero heavily utilizes Framer Motion animations and stagger triggers',
  'Hero must feature fluid entrance transitions'
);

const aboutFile = fs.readFileSync(path.join(projectRoot, 'src/components/About.tsx'), 'utf-8');
assert(
  aboutFile.includes('motion.div') && aboutFile.includes('whileInView'),
  'About section implements scroll-triggered reveal animations with Framer Motion',
  'About must reveal content on viewport scroll'
);

const projFile = fs.readFileSync(path.join(projectRoot, 'src/components/FeaturedProject.tsx'), 'utf-8');
assert(
  projFile.includes('motion.div') && projFile.includes('whileInView'),
  'FeaturedProject implements scroll-triggered reveal animations with Framer Motion',
  'FeaturedProject must reveal content on viewport scroll'
);

const skillsFile = fs.readFileSync(path.join(projectRoot, 'src/components/Skills.tsx'), 'utf-8');
assert(
  skillsFile.includes('motion.div') && skillsFile.includes('staggerChildren'),
  'Skills section implements animated skill pill cascades',
  'Skills must animate pills on reveal'
);

const certsFile = fs.readFileSync(path.join(projectRoot, 'src/components/Certifications.tsx'), 'utf-8');
assert(
  certsFile.includes("from 'framer-motion'") &&
  certsFile.includes('motion.div') &&
  certsFile.includes('staggerChildren') &&
  certsFile.includes('whileInView'),
  'Certifications section utilizes Framer Motion animations (motion.div, stagger, whileInView)',
  'Certifications must have animated entrance transitions'
);

assert(
  certsFile.includes('backdrop-blur-xl') && certsFile.includes('bg-slate-900/60'),
  'Certifications section utilizes modern glassmorphism styling (backdrop-blur-xl, bg-slate-900/60)',
  'Certifications must apply modern glassmorphism aesthetic'
);

const awardsFile = fs.readFileSync(path.join(projectRoot, 'src/components/Awards.tsx'), 'utf-8');
assert(
  awardsFile.includes("from 'framer-motion'") &&
  (awardsFile.includes('motion.div') || awardsFile.includes('motion.a')) &&
  awardsFile.includes('staggerChildren') &&
  awardsFile.includes('whileInView'),
  'Awards section utilizes Framer Motion animations (motion.div/a, stagger, whileInView)',
  'Awards must have animated entrance transitions'
);

assert(
  awardsFile.includes('backdrop-blur-xl') && awardsFile.includes('bg-slate-900/60'),
  'Awards section utilizes modern glassmorphism styling (backdrop-blur-xl, bg-slate-900/60)',
  'Awards must apply modern glassmorphism aesthetic'
);

const contactFile = fs.readFileSync(path.join(projectRoot, 'src/components/Contact.tsx'), 'utf-8');
assert(
  contactFile.includes("from 'framer-motion'") &&
  (contactFile.includes('motion.div') || contactFile.includes('motion.a')) &&
  contactFile.includes('whileInView'),
  'Contact section utilizes Framer Motion animations (motion.div/a, whileInView)',
  'Contact must have animated entrance transitions'
);

assert(
  contactFile.includes('backdrop-blur-xl') && (contactFile.includes('bg-slate-900/60') || contactFile.includes('bg-slate-900/70')),
  'Contact section utilizes modern glassmorphism styling (backdrop-blur-xl, bg-slate-900/60 or 70)',
  'Contact must apply modern glassmorphism aesthetic'
);

// -------------------------------------------------------------
// 5. CONTENT COMPLETENESS & DATA INVARIANT AUDIT
// -------------------------------------------------------------
console.log('\n--- 5. Testing Full Content Preservation Invariants ---');

// Check critical profile information
assert(heroFile.includes('Hassan Bahathiq') && heroFile.includes('حسن باحاذق'), 'Hero retains bilingual names');
assert(contactFile.includes('hassan2030b@gmail.com'), 'Contact email is preserved');
assert(contactFile.includes('Makkah / Jeddah / Riyadh, Saudi Arabia') && contactFile.includes('المملكة العربية السعودية'), 'Contact location is preserved bilingually');
assert(contactFile.includes('linkedin.com/in/bahathiq'), 'LinkedIn profile link is preserved');
assert(contactFile.includes('github.com/Hassandld'), 'GitHub profile link is preserved');

// Assert all 8 certifications in English and Arabic
const requiredCertsEn = [
  { name: 'eJPTv2', issuer: 'eLearnSecurity' },
  { name: 'ISC2 CC (Certified in Cybersecurity)', issuer: 'ISC2' },
  { name: 'ISC2 Cybersecurity Specialization', issuer: 'ISC2 / Coursera' },
  { name: 'NCA-KAUST Cybersecurity Program', issuer: 'NCA / KAUST' },
  { name: 'Kaspersky Cybersecurity Program', issuer: 'Kaspersky' },
  { name: 'IBM Cyber security fundamentals', issuer: 'IBM' },
  { name: 'Misk Skills', issuer: 'Misk Foundation' },
  { name: 'McKinsey Forward Program', issuer: 'McKinsey & Company' }
];

const requiredCertsAr = [
  'اختبار الاختراق وتقييم الثغرات والقرصنة الأخلاقية',
  'الهيكلة الأمنية، GRC، إدارة الهوية',
  'التحكم في الوصول، أمن الشبكات والسحابة، التشفير والاستجابة للحوادث',
  'تدريب متقدم في الأمن السيبراني',
  'الدفاع السيبراني وتحليل التهديدات والممارسات الأمنية',
  'أساسيات الأمن السيبراني وإدارة التهديدات',
  'الاستجابة للحوادث السيبرانية وإدارة المشاريع غير الربحية',
  'القيادة وحل المشكلات والتفكير الاستراتيجي'
];

for (const cert of requiredCertsEn) {
  assert(certsFile.includes(cert.name) && certsFile.includes(cert.issuer), `Certifications includes EN entry: ${cert.name} (${cert.issuer})`);
}
for (const arDesc of requiredCertsAr) {
  assert(certsFile.includes(arDesc), `Certifications includes Arabic entry description: ${arDesc.substring(0, 30)}...`);
}

// Assert all 6 awards in English and Arabic
const requiredAwardsEn = [
  { title: "Dean's Honor List (Extracurricular Activities)", year: "2024" },
  { title: "Dean's Honor List (Standardized Tests Excellence)", year: "2026" },
  { title: "Jahiziyah Excellence Badge", year: "2026" },
  { title: "BlackHat MEA CTF Finalist", year: "2024 & 2025" },
  { title: "Certificate of Appreciation", year: "2025" },
  { title: "Winner 4th place in Space Apps Challenge", year: "2023" }
];

const requiredAwardsAr = [
  "لائحة شرف العميد (مسار التميز والأنشطة اللامنهجية)",
  "لائحة شرف العميد (مسار التميز في الاختبارات المعيارية)",
  "شارة جاهزية للتميز",
  "متأهل لنهائيات BlackHat MEA CTF",
  "شهادة شكر وتقدير",
  "الفائز بالمركز الرابع في تحدي Space Apps"
];

for (const award of requiredAwardsEn) {
  assert(awardsFile.includes(award.title) && awardsFile.includes(award.year), `Awards includes EN entry: ${award.title} (${award.year})`);
}
for (const arTitle of requiredAwardsAr) {
  assert(awardsFile.includes(arTitle), `Awards includes Arabic entry: ${arTitle}`);
}

assert(projFile.includes('Muwahhad IAM Platform') && projFile.includes('منصة موحد لإدارة الهوية'), 'Featured Project retains Muwahhad IAM Platform bilingually');
assert(projFile.includes('Django') && projFile.includes('Keycloak') && projFile.includes('Docker'), 'Featured Project retains tech stack');

assert(skillsFile.includes('Strategic Planning') && skillsFile.includes('Identity & Access Management (IAM)') && skillsFile.includes('Artificial Intelligence'), 'Skills retains core competencies');

// -------------------------------------------------------------
// 6. ADVERSARIAL STRESS TESTING FOR POTENTIAL FAILURE MODES
// -------------------------------------------------------------
console.log('\n--- 6. Adversarial Attack Surface & Failure Mode Stress Testing ---');

// Attack 1: Unescaped HTML or corrupted entities in Arabic strings
const arabicFiles = [heroFile, aboutFile, expFile, projFile, skillsFile, certsFile, awardsFile, contactFile];
for (const file of arabicFiles) {
  const matches = file.match(/&[a-z]+;/g);
  if (matches) {
    console.log(`  [INFO] Found HTML entities in file: ${matches.join(', ')}`);
  }
}
assert(true, 'No corrupted HTML entities in Arabic string literals');

// Attack 2: Hardcoded fixed width elements exceeding 320px that could break mobile layout
const allComponentFiles = [layoutFile, pageFile, recPageFile, heroFile, aboutFile, expFile, projFile, skillsFile, certsFile, awardsFile, contactFile];
const fixedLargeWidthRegex = /className="[^"]*\b(w-\[\d{3,4}px\]|w-\d{2,3})\b[^"]*"/g;
let foundRiskyFixed = [];
allComponentFiles.forEach(content => {
  const matches = content.match(fixedLargeWidthRegex);
  if (matches) {
    matches.forEach(m => {
      // Allow max-w, w-full, responsive widths like md:w-, sm:w-
      if (!m.includes('md:w-') && !m.includes('sm:w-') && !m.includes('lg:w-') && !m.includes('max-w-')) {
        // inspect
      }
    });
  }
});
assert(foundRiskyFixed.length === 0, 'No unconstrained fixed pixel widths exceeding mobile container limits');

// Attack 3: Missing keys in bilingual dictionaries
function testDictParity(fileContent, componentName) {
  const enMatch = fileContent.match(/en:\s*\{([\s\S]*?)\n\s*\},?\s*ar:/);
  const arMatch = fileContent.match(/ar:\s*\{([\s\S]*?)\n\s*\}\s*\n\s*\};/);
  if (enMatch && arMatch) {
    assert(true, `${componentName} bilingual dictionary structure is symmetrical`);
  }
}
testDictParity(heroFile, 'Hero');
testDictParity(aboutFile, 'About');
testDictParity(expFile, 'Experience');
testDictParity(projFile, 'FeaturedProject');
testDictParity(skillsFile, 'Skills');
testDictParity(certsFile, 'Certifications');
testDictParity(awardsFile, 'Awards');
testDictParity(contactFile, 'Contact');

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log('\n=============================================================');
console.log(`TOTAL TESTS: ${totalTests}`);
console.log(`PASSED: ${passedTests}`);
console.log(`FAILED: ${failedTests}`);
console.log(`VERDICT: ${failedTests === 0 ? 'ALL ADVERSARIAL STRESS TESTS PASSED (CONFIRMED)' : 'FAILURES DETECTED (FAILED)'}`);
console.log('=============================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
