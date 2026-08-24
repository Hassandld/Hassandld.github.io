## 2026-08-25T02:01:03Z
MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

You are the Worker (Generation 2) for Milestone 4 (Certifications, Awards, Contact & Recommendations Modernization).
Your working directory is /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_m4_gen2.

Task:
1. Review the existing files:
   - `src/components/Certifications.tsx` (8 certifications: eJPTv2, ISC2 CC, ISC2 Cybersecurity Specialization, NCA-KAUST, Kaspersky, IBM, Misk Skills, McKinsey Forward Program)
   - `src/components/Awards.tsx` (6 awards: Dean's Honor List 2024, Dean's Honor List 2026, Jahiziyah 2026, BlackHat MEA CTF 2024-2025, Tuwaiq 2025, Space Apps 2023)
   - `src/components/Contact.tsx` (Email hassan2030b@gmail.com, Location Makkah/Jeddah/Riyadh, LinkedIn, GitHub)
   - `src/app/recommendations/page.tsx` (4 recommendations: Dr. Ahmed Al-Hazmi, Dr. Ghassan Bati, Dr. Ahmed Al-Aql, Dr. Ahad Al-Jarf)
   - Inspect `src/components/Experience.tsx`, `src/components/Hero.tsx`, and `src/components/Skills.tsx` for visual and Framer Motion styling consistency (e.g. `motion.div`, `whileInView`, `viewport={{ once: true }}`, `backdrop-blur-xl`, `border-white/10`, `hover:border-emerald-500/40`, dark gradients, RTL support).

2. Implement the modernizations:
   - `src/components/Certifications.tsx`: Luxury glassmorphism, Framer Motion staggered reveals (<motion.div>), glowing issuer badges/icons, interactive external link indicators, full bidirectional RTL layout. Preserve all 8 certifications verbatim in EN and AR.
   - `src/components/Awards.tsx`: Luxury glassmorphism, Framer Motion staggered reveals, glowing year pills (e.g. font-mono, emerald badge), proof link buttons/triggers, bidirectional RTL layout. Preserve all 6 awards verbatim in EN and AR.
   - `src/components/Contact.tsx`: Modern glassmorphic action cards for Email and Location, interactive social link buttons with hover glow and elevation, Framer Motion reveals. Preserve all contact details verbatim in EN and AR.
   - `src/app/recommendations/page.tsx`: Glassmorphic cards, Framer Motion entrance animations, glowing document icon, and dynamic back arrow. Preserve all 4 recommendations verbatim in EN and AR.

3. Strict Invariants:
   - 100% verbatim preservation of all text, titles, descriptions, organizations, links, pdf names, translation keys (EN and AR).
   - "use client"; directive at top of every component.
   - Consume `useLanguage()` and handle RTL properly.

4. Run `npm run build` using run_command in /Users/dluud/Desktop/anything/Hassandld.github.io to ensure 0 TypeScript, ESLint, or Next.js errors.
5. Document all changes and build output in /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_m4_gen2/changes.md and /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_m4_gen2/handoff.md.
6. Send a completion message back to the orchestrator.
