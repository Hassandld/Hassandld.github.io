# Project: Portfolio Website Redesign (Hassandld.github.io)

## Architecture
- **Framework**: Next.js (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS v4, Glassmorphism (`backdrop-blur`), Modern dark theme gradients (slate-950/gray-900 with emerald/cyan/indigo accents)
- **Animations**: Framer Motion (`<motion.*>` hooks, stagger effects, scroll-triggered reveals, interactive hover/tap states)
- **Internationalization**: Bilingual (English / Arabic RTL) managed via `LanguageContext`
- **Responsive Design**: Full mobile optimization with `overflow-x-hidden`, responsive typography, wrapping timeline badges and dates

## Code Layout
- `src/app/layout.tsx`: Root HTML layout, font setup (Inter & Tajawal), LanguageProvider, ambient dynamic background
- `src/app/globals.css`: Global styles, custom scrollbar, animations, glassmorphism utilities, RTL font overrides
- `src/app/page.tsx`: Main single-page portfolio layout integrating all modular sections
- `src/app/recommendations/page.tsx`: Dedicated recommendations showcase page
- `src/context/LanguageContext.tsx`: Client-side language state (EN/AR), RTL toggle, floating language switcher
- `src/components/Background.tsx`: Ambient dynamic grid/particle/gradient background canvas
- `src/components/Hero.tsx`: High-impact hero section with animated introduction, quick stats, CTAs
- `src/components/About.tsx`: Narrative card, key pillars, education, languages with glassmorphic cards
- `src/components/Experience.tsx`: Interactive vertical timeline with responsive date/role badges and expandable details
- `src/components/FeaturedProject.tsx`: Highlighted project showcase card with tech stack tags and impact metrics
- `src/components/Skills.tsx`: Categorized skill pills, proficiency badges, animated grid
- `src/components/Certifications.tsx`: Credential cards with issuer badges, verification links/modals
- `src/components/Awards.tsx`: Achievement showcase with glow effects and recognition badges
- `src/components/Contact.tsx`: Sleek contact footer, social links, direct email/call actions

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Design System & Core Framework | Global styles, Background, Language switcher, responsive container foundation | none | DONE |
| 2 | Hero & About Modernization | Hero & About components revamped with Framer Motion, glassmorphic cards, bilingual preservation | M1 | DONE |
| 3 | Experience, Projects & Skills Modernization | Experience timeline (mobile wrapping fix), FeaturedProject, Skills grid | M1, M2 | DONE |
| 4 | Certifications, Awards, Contact & Recommendations | Certifications, Awards, Contact, Recommendations page | M1, M2 | DONE |
| 5 | Full Integration, Build & E2E Verification | Final build pass (`npm run build`), responsive validation, adversarial coverage | M1, M2, M3, M4 | DONE |

## Interface Contracts & Invariants
- **Strict Content Invariant**: All English and Arabic text strings, dates, roles, bullet points, skills, project details, and certifications MUST be strictly preserved without omission.
- **Bilingual Contract**: Every component consumes `useLanguage()` and renders appropriate `content.en` or `content.ar` with correct RTL alignment when `lang === 'ar'`.
- **Client Component Boundary**: Any component using Framer Motion (`motion.*`) or React hooks (`useState`, `useEffect`, `useLanguage`) must include the `"use client";` directive at the top.
- **Build Verification**: `npm run build` must succeed with 0 TypeScript, ESLint, or Next.js build errors.
