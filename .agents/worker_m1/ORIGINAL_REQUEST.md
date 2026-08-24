## 2026-08-24T21:48:16Z
You are the Worker for Milestone 1 (Design System & Core Framework) of the portfolio website redesign.
Your working directory is: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_m1/
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io
Project specifications: /Users/dluud/Desktop/anything/Hassandld.github.io/PROJECT.md
User requirements: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/ORIGINAL_REQUEST.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks for Milestone 1:
1. Update `src/app/globals.css`:
   - Keep `@import "tailwindcss";` and `:lang(ar) { font-family: var(--font-tajawal), sans-serif; }`.
   - Add modern glassmorphism utility classes (`.glass-card`, `.glass-card-hover`, `.glow-border`, `.text-gradient-emerald`, etc.).
   - Add modern dark theme custom scrollbar styling.
2. Update `src/components/Background.tsx`:
   - Create a modern, high-performance ambient dark background with subtle glowing gradient orbs (emerald, cyan, teal) with Framer Motion / CSS blur, subtle dot grid overlay, fixed position, non-blocking (`pointer-events-none`).
3. Update `src/context/LanguageContext.tsx`:
   - Redesign the floating language switcher to a high-end glassmorphic pill (`top-5 right-5` or responsive), with active state indicator, bilingual toggle (EN / العربية), icons (e.g. Globe from lucide-react), smooth hover and click animations with Framer Motion.
   - Maintain all existing Context API methods (`lang`, `toggleLanguage`, `useLanguage`, `LanguageProvider`) and RTL `dir` synchronization.
4. Update `src/app/layout.tsx` and `src/app/page.tsx`:
   - Ensure the body and main page wrapper enforce `overflow-x-hidden min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200`.
   - Maintain Inter and Tajawal fonts, metadata, and all child components in `src/app/page.tsx`.
5. Run build and lint verification:
   - Run `npm run build` and `npm run lint` in `/Users/dluud/Desktop/anything/Hassandld.github.io` to ensure 0 TypeScript, ESLint, or Next.js build errors.
6. Write a summary of changes and verification output to `.agents/worker_m1/handoff.md` and send a message to orchestrator with results.
