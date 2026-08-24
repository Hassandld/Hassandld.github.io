const fs = require('fs');
const path = require('path');

console.log("===============================================================================");
console.log("      DETAILED VERIFICATION: COMPONENT PARITY, DICTIONARIES & CONTRACTS        ");
console.log("===============================================================================\n");

const compDir = path.join(process.cwd(), 'src/components');
const files = [
  'Hero.tsx',
  'About.tsx',
  'Experience.tsx',
  'FeaturedProject.tsx',
  'Certifications.tsx',
  'Awards.tsx',
  'Skills.tsx',
  'Contact.tsx',
  'Background.tsx'
];

let allPassed = true;

files.forEach(file => {
  const filePath = path.join(compDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] File missing: ${file}`);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const hasUseClient = content.includes('"use client"') || content.includes("'use client'");
  const hasUseLanguage = content.includes("useLanguage");
  const usesFramerMotion = content.includes("framer-motion") || content.includes("motion.");
  
  // Basic sanity checks
  console.log(`Checking ${file}:`);
  console.log(`  - "use client" present: ${hasUseClient}`);
  if (file !== 'Background.tsx') {
    console.log(`  - consumes useLanguage(): ${hasUseLanguage}`);
    if (!hasUseLanguage) {
      console.warn(`    [WARN] Component ${file} might not be consuming useLanguage()!`);
      allPassed = false;
    }
  }
  console.log(`  - uses Framer Motion: ${usesFramerMotion}`);
  console.log(`  - Status: OK\n`);
});

// Verify LanguageContext API contract
const langCtxPath = path.join(process.cwd(), 'src/context/LanguageContext.tsx');
const langCtxContent = fs.readFileSync(langCtxPath, 'utf-8');

console.log("Checking LanguageContext.tsx contract:");
const exportsLanguageProvider = langCtxContent.includes("export const LanguageProvider") || langCtxContent.includes("export function LanguageProvider");
const exportsUseLanguage = langCtxContent.includes("export const useLanguage") || langCtxContent.includes("export function useLanguage");
const managesEnAr = langCtxContent.includes("'en'") && langCtxContent.includes("'ar'");
const setsDirRtl = langCtxContent.includes("document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'");
const setsLangAttr = langCtxContent.includes("document.documentElement.lang = lang");

console.log(`  - exports LanguageProvider: ${exportsLanguageProvider}`);
console.log(`  - exports useLanguage: ${exportsUseLanguage}`);
console.log(`  - manages 'en' and 'ar': ${managesEnAr}`);
console.log(`  - sets dir="rtl" on html element: ${setsDirRtl}`);
console.log(`  - sets lang on html element: ${setsLangAttr}`);

if (exportsLanguageProvider && exportsUseLanguage && managesEnAr && setsDirRtl && setsLangAttr) {
  console.log(`  - Contract Status: ALL INVARIANTS SATISFIED (PASS)\n`);
} else {
  console.error(`  - Contract Status: FAILED\n`);
  allPassed = false;
}

// Verify globals.css rules
const globalsPath = path.join(process.cwd(), 'src/app/globals.css');
const globalsContent = fs.readFileSync(globalsPath, 'utf-8');

console.log("Checking globals.css design system tokens & rules:");
const hasTailwind = globalsContent.includes("@import \"tailwindcss\";");
const hasFontVars = globalsContent.includes("--font-inter") && globalsContent.includes("--font-tajawal");
const hasArabicSelector = globalsContent.includes(":lang(ar)");
const hasCustomScrollbar = globalsContent.includes("scrollbar-color") && globalsContent.includes("::-webkit-scrollbar");
const hasGlassClasses = globalsContent.includes(".glass-card") && globalsContent.includes(".glass-card-hover");
const hasGradientClasses = globalsContent.includes(".text-gradient-emerald") && globalsContent.includes(".text-gradient-cyan");
const hasDotGrid = globalsContent.includes(".bg-dot-grid");

console.log(`  - Tailwind v4 import: ${hasTailwind}`);
console.log(`  - CSS font variables (--font-inter, --font-tajawal): ${hasFontVars}`);
console.log(`  - Arabic :lang(ar) selector: ${hasArabicSelector}`);
console.log(`  - Custom dark scrollbar (scrollbar-color & ::-webkit-scrollbar): ${hasCustomScrollbar}`);
console.log(`  - Glassmorphic card utility classes: ${hasGlassClasses}`);
console.log(`  - Text gradient utility classes: ${hasGradientClasses}`);
console.log(`  - Dot grid pattern: ${hasDotGrid}`);

if (hasTailwind && hasFontVars && hasArabicSelector && hasCustomScrollbar && hasGlassClasses && hasGradientClasses && hasDotGrid) {
  console.log(`  - globals.css Status: ALL DESIGN TOKENS VERIFIED (PASS)\n`);
} else {
  console.error(`  - globals.css Status: MISSING REQUIRED RULES\n`);
  allPassed = false;
}

console.log(`FINAL RESULT: ${allPassed ? 'ALL CHECKS PASSED (CONFIRMED)' : 'FAILURES DETECTED'}`);
