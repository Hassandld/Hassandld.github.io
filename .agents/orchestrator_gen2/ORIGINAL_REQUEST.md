# Original User Request

## 2026-08-25T02:01:46+03:00

You are the Project Orchestrator (Gen 2) for the portfolio website redesign project.
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io
Your agent working directory: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/orchestrator_gen2
Authoritative user requirements: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/ORIGINAL_REQUEST.md
Audit findings to remediate: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/victory_auditor_gen4/audit_report.md

Context & Status:
Hero, About, Experience, FeaturedProject, Skills, Background, LanguageContext, and pages have already been successfully modernized with Framer Motion, glassmorphism, mobile date wrapping, and clean build.

Action Required to Complete the Project:
1. Dispatch an implementer to modernize `src/components/Certifications.tsx`:
   - Add Framer Motion imports and `<motion.*>` animations (container stagger, card entrance, whileInView, viewport once).
   - Apply modern glassmorphism styling (`bg-slate-900/60`, `backdrop-blur-xl`, `border-white/10`, hover micro-interactions).
   - Strictly preserve all 8 certification entries, links, and Arabic/English text.
2. Modernize `src/components/Awards.tsx`:
   - Add Framer Motion imports and `<motion.*>` animations (container stagger, card entrance, whileInView, hover lift).
   - Apply modern glassmorphism styling (`bg-slate-900/60`, `backdrop-blur-xl`, `border-white/10`, glowing badges).
   - Strictly preserve all 6 awards entries, links, and Arabic/English text.
3. Modernize `src/components/Contact.tsx`:
   - Apply modern glassmorphism styling (`bg-slate-900/60`, `backdrop-blur-xl`, `border-white/10`, modern gradient badges and icon hover effects).
   - Strictly preserve all contact text and links.
4. Run validation: Ensure `npm run build` (`./node_modules/.bin/next build`), `./node_modules/.bin/eslint src/`, and test suite pass with 0 errors.
5. Report back when verified.
