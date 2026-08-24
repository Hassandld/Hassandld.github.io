## 2026-08-24T22:28:11Z

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

You are the Worker for Milestone 4 (Certifications, Awards, Contact & Recommendations Modernization).
Your working directory is /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_m4.

Your task:
1. Examine:
   - /Users/dluud/Desktop/anything/Hassandld.github.io/src/components/Certifications.tsx
   - /Users/dluud/Desktop/anything/Hassandld.github.io/src/components/Awards.tsx
   - /Users/dluud/Desktop/anything/Hassandld.github.io/src/components/Contact.tsx
   - /Users/dluud/Desktop/anything/Hassandld.github.io/src/app/recommendations/page.tsx
   - /Users/dluud/Desktop/anything/Hassandld.github.io/PROJECT.md
   - /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/ORIGINAL_REQUEST.md

2. Implement the modernizations:
   - `Certifications.tsx`: Luxury glassmorphism (backdrop-blur-xl, bg-slate-900/70, border-white/10, hover:border-emerald-500/40), Framer Motion staggered reveals (<motion.div>, whileInView, viewport={{ once: true }}), glowing badge icons, external link indicators, and bidirectional RTL layout. Preserve all 8 certifications verbatim in EN and AR.
   - `Awards.tsx`: Luxury glassmorphism, Framer Motion staggered reveals, distinct glowing year pills (e.g. bg-emerald-500/10 border-emerald-500/20 text-emerald-400 font-mono), verified external proof link triggers, and bidirectional RTL layout. Preserve all 6 awards verbatim in EN and AR.
   - `Contact.tsx`: Luxury glassmorphic action cards for Email and Location, interactive social link buttons with hover glow and micro-interactions, Framer Motion reveal animations. Preserve all contact details verbatim in EN and AR.
   - `recommendations/page.tsx`: Modern glassmorphic cards, Framer Motion reveals, glowing document icon, and dynamic back arrow based on lang. Preserve all 4 recommendations verbatim in EN and AR.

3. Strict Invariants:
   - Preserve 100% of all existing text, translation keys (EN and AR), descriptions, links, pdf paths, dates, titles, and org names.
   - Ensure "use client"; directive is at top of every component.
   - Ensure full RTL compatibility with `useLanguage()`.

4. Run `npm run build` in /Users/dluud/Desktop/anything/Hassandld.github.io to ensure 0 TypeScript, ESLint, or Next.js build errors.
5. Document all changes and build output in /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_m4/changes.md and /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_m4/handoff.md.
6. Send a completion message back to the orchestrator.

## 2026-08-24T23:00:30Z

You are the Worker for Milestone 4 (Certifications, Awards, Contact & Recommendations Modernization).
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io
Project specifications: /Users/dluud/Desktop/anything/Hassandld.github.io/PROJECT.md
User requirements: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/ORIGINAL_REQUEST.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

CRITICAL INSTRUCTIONS:
You MUST update the following 4 files on disk with Framer Motion animations (`motion.*`), glassmorphic design (`.glass-card`, `backdrop-blur-xl`, border glow), and strictly preserve 100% of all text strings and links in both English and Arabic:

1. `src/components/Certifications.tsx`:
   - Add `"use client";` and import `{ motion, type Variants }` from `'framer-motion'`.
   - Add container and card item variants (`staggerChildren: 0.1`, `whileInView`, `viewport={{ once: true }}`).
   - Add card hover lift (`whileHover={{ y: -4, transition: { duration: 0.2 } }}`).
   - Modern glassmorphic cards (`bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-900/80 rounded-2xl p-6 transition-all group`).
   - Strictly preserve all 8 certification items, descriptions, issuers, and links verbatim in English and Arabic.

2. `src/components/Awards.tsx`:
   - Add `"use client";` and import `{ motion, type Variants }` from `'framer-motion'`.
   - Add Framer Motion container and item scroll reveals (`staggerChildren: 0.1`, `whileInView`, `viewport={{ once: true }}`).
   - Add card hover transition (`whileHover={{ y: -4 }}`).
   - Modern glassmorphic achievement cards (`bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-8 transition-all group`).
   - Year badge, trophy/star icon with emerald glow, external proof links.
   - Strictly preserve all 6 award items, organizations, descriptions, and links verbatim in English and Arabic.

3. `src/components/Contact.tsx`:
   - Add `"use client";` and import `{ motion, type Variants }` from `'framer-motion'`.
   - Add Framer Motion scroll entrance animations (`whileInView`, `viewport={{ once: true }}`).
   - Modern glassmorphic contact cards (`mailto:hassan2030b@gmail.com`, location badge).
   - Animated social links (LinkedIn, GitHub) with hover lift (`whileHover={{ scale: 1.05 }}`) and emerald glow.
   - Strictly preserve all English and Arabic text strings.

4. `src/app/recommendations/page.tsx`:
   - Add `"use client";` and import `{ motion, type Variants }` from `'framer-motion'`.
   - Update main wrapper to `relative min-h-screen w-full overflow-x-hidden flex flex-col bg-transparent pt-24 pb-12 px-6 sm:px-12 lg:px-24`.
   - Back button with hover transition, Framer Motion staggered document cards with hover lift.
   - Strictly preserve all 4 recommendations in English and Arabic.

5. Verification:
   - Run `npm run lint` and `npm run build` using `run_command` in `/Users/dluud/Desktop/anything/Hassandld.github.io`.
   - Ensure 0 errors and 0 warnings.
   - Send a completion message when finished.
