## 2026-08-25T00:48:52Z
You are the Worker for Milestone 2 (Hero & About Modernization).
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io
Project specifications: /Users/dluud/Desktop/anything/Hassandld.github.io/PROJECT.md
User requirements: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/ORIGINAL_REQUEST.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks for Milestone 2:
1. Update `src/components/Hero.tsx`:
   - Use Framer Motion (`motion.*`) for staggered entrance animations (`staggerChildren`, `y: 20 -> 0`, `opacity: 0 -> 1`).
   - Add a sleek status indicator pill: "Available for Strategic & Security Initiatives" / "متاح للمبادرات الاستراتيجية والأمنية" with an animated pulsing emerald dot.
   - Modernize the title with high-end typography and gradient effects (`text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-emerald-400`).
   - Enhance the CTA buttons (Contact Me with hover glow, LinkedIn/GitHub/Recommendations links with sleek glassmorphism `bg-slate-900/60 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-emerald-500/10`).
   - Modernize the profile image container with glowing ambient aura (`bg-emerald-500/20 blur-3xl`), glassmorphic border ring, and floating micro-badges (e.g., GRC & IAM, Cybersecurity).
   - STRICTLY preserve all existing bilingual content and data (subtitle, title, headline, description, contact, recommendations link, social links).
2. Update `src/components/About.tsx`:
   - Use Framer Motion for scroll-revealed entrance animations (`whileInView`, `viewport={{ once: true }}`).
   - Redesign into a modern modular glassmorphic layout: an executive summary card for p1 and p2, and structured highlight cards for p3 (PMO & Leadership) and p4 (Recognition & Vision).
   - Ensure responsive padding and spacing on mobile (`p-6 sm:p-8 md:p-10`) preventing any text cramping or awkward overflow.
   - STRICTLY preserve all 4 paragraphs (p1, p2, p3, p4) verbatim in both English and Arabic with full RTL support.
3. Run verification:
   - Run `npm run lint` and `npm run build` in `/Users/dluud/Desktop/anything/Hassandld.github.io` to ensure 0 TypeScript, ESLint, or Next.js build errors.
4. Send a completion message to the orchestrator with your results and verification output.

## 2026-08-25T00:52:24+03:00
You are the Remediation Worker for Milestone 2 (Hero & About Modernization).
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io
Project specifications: /Users/dluud/Desktop/anything/Hassandld.github.io/PROJECT.md
User requirements: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/ORIGINAL_REQUEST.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

FORENSIC AUDIT EVIDENCE TO REMEDIATE:
- `src/components/Hero.tsx` and `src/components/About.tsx` currently lack Framer Motion `<motion.*>` animations, modern glassmorphic layouts, and status indicator pills.
- `src/components/About.tsx` has an unused `Image` import.

TASKS:
1. Update `src/components/Hero.tsx`:
   - Add `"use client";` at the top.
   - Import `{ motion }` from `'framer-motion'`.
   - Add Framer Motion staggered entrance animations (`variants`, `initial="hidden"`, `animate="visible"`, `transition={{ staggerChildren: 0.15 }}`).
   - Add a high-end status indicator pill:
     `● Available for Strategic & Security Initiatives` (EN) / `● متاح للمبادرات الاستراتيجية والأمنية` (AR) with an animated pulsing emerald dot.
   - Upgrade typography with gradient text (`text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-emerald-400`).
   - Modernize CTA button: Contact Me with sleek emerald gradient and hover glow (`shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5`).
   - Modernize action buttons: LinkedIn, GitHub, and Recommendations button with glassmorphic styling (`bg-slate-900/60 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-emerald-500/10`).
   - Modernize avatar presentation: encase `/hero-image.jpg` in a glowing aura ring (`bg-emerald-500/20 blur-3xl`), glassmorphic border, and floating micro-badges (`GRC & IAM`, `Strategic PMO`).
   - STRICTLY preserve all original bilingual keys, strings, and links in `content.en` and `content.ar`.

2. Update `src/components/About.tsx`:
   - Add `"use client";` at the top.
   - Import `{ motion }` from `'framer-motion'`.
   - Remove unused `Image` import.
   - Restructure layout into modern modular glassmorphic cards (`.glass-card` / `bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl`):
     - Executive Summary card (p1 & p2).
     - Responsive dual cards for Leadership & Impact (p3) and Recognition & Vision (p4) with icons and hover glow.
   - Implement Framer Motion scroll entrance (`whileInView`, `viewport={{ once: true, margin: "-50px" }}`).
   - Ensure clean responsive mobile spacing and RTL alignment.
   - STRICTLY preserve all 4 paragraphs (`p1`, `p2`, `p3`, `p4`) verbatim in both English and Arabic.

3. Verification:
   - Run `npm run lint` and `npm run build` in `/Users/dluud/Desktop/anything/Hassandld.github.io`.
   - Verify that there are 0 TypeScript, ESLint, or Next.js build errors.
4. Send a completion message with full verification details to the orchestrator.

