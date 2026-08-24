# Portfolio Website Redesign Plan

## Objective
Modernize Hassan Ahmed Bahathiq's portfolio website into a high-end, responsive, interactive, and visually stunning dark theme experience using Next.js, Framer Motion, and Tailwind CSS, while strictly preserving 100% of the existing bilingual (EN/AR) content and ensuring zero build errors.

## Milestones & Execution Plan

### Milestone 1: Design System & Core Framework
- Scope: `src/app/globals.css`, `src/app/layout.tsx`, `src/components/Background.tsx`, `src/context/LanguageContext.tsx`, `src/app/page.tsx` wrapper.
- Focus: Modern glassmorphism utilities, sleek custom scrollbar, sophisticated dark background effects (glowing ambient orbs / subtle particle grids), elegant floating language switcher with pill design and micro-animations, global `overflow-x-hidden` container to avoid mobile horizontal scroll.

### Milestone 2: Hero & About Section Modernization
- Scope: `src/components/Hero.tsx`, `src/components/About.tsx`.
- Focus: Animated hero typography, badge status indicators, sleek CTA buttons with hover glow effects, floating avatar/card with glassmorphism, responsive stats grid, narrative card with structured pillars (Education, Languages, Key Focus Areas), full Framer Motion scroll/hover effects, 100% bilingual preservation.

### Milestone 3: Experience, Projects & Skills Modernization
- Scope: `src/components/Experience.tsx`, `src/components/FeaturedProject.tsx`, `src/components/Skills.tsx`.
- Focus: Redesigned interactive vertical timeline with responsive date/role badges (preventing mobile text overflow/wrapping issues), glassmorphic project showcase card with live demo/repo links and tech tags, categorized interactive skill badges with hover animations, 100% bilingual preservation.

### Milestone 4: Certifications, Awards, Contact & Recommendations Modernization
- Scope: `src/components/Certifications.tsx`, `src/components/Awards.tsx`, `src/components/Contact.tsx`, `src/app/recommendations/page.tsx`.
- Focus: Modern credential cards with verified badge glow, achievement cards with rich iconography, sleek contact footer with social links, polished recommendations subpage, Framer Motion transitions, 100% bilingual preservation.

### Milestone 5: Full Integration, Build & E2E Verification
- Scope: Entire codebase integration, `npm run build` execution, responsive verification across viewports, cross-language verification (EN and AR RTL), adversarial checks for content integrity.

## Iteration Protocol per Milestone
For each milestone:
1. Dispatch 3 Explorers to investigate current component state, identify styling/animation opportunities, review bilingual dictionaries, and formulate implementation plans.
2. Dispatch 1 Worker to apply the implementation with exact code changes and execute verification builds (`npm run build`).
3. Dispatch 2 Reviewers independently to audit code quality, TypeScript safety, Framer Motion best practices, and layout fidelity.
4. Dispatch 2 Challengers to perform adversarial checks on responsiveness, mobile overflow, RTL layout, and content preservation.
5. Dispatch 1 Forensic Auditor (`teamwork_preview_auditor`) to verify zero cheating, genuine implementation, and total content integrity.
6. Evaluate Gate criteria. If all pass, mark milestone DONE and proceed. If fail, loop back to Explorer.
