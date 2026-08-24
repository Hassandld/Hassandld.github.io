## 2026-08-25T00:54:13Z
You are the Code Implementer Worker for Hassan's portfolio modernization.
Your working directory is: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_master/
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io
Project specifications: /Users/dluud/Desktop/anything/Hassandld.github.io/PROJECT.md
User requirements: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/ORIGINAL_REQUEST.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

CRITICAL INSTRUCTIONS:
You MUST update each of the following components in `/Users/dluud/Desktop/anything/Hassandld.github.io/src/` using `run_command` (e.g. bash scripts / cp / node / cat) or `write_to_file`:

1. `src/components/About.tsx`:
   Copy `/Users/dluud/Desktop/anything/Hassandld.github.io/.agents/explorer_m2_2/proposed_About.tsx` to `/Users/dluud/Desktop/anything/Hassandld.github.io/src/components/About.tsx`.

2. `src/components/FeaturedProject.tsx`:
   Copy `/Users/dluud/Desktop/anything/Hassandld.github.io/.agents/explorer_m3_2/proposed_FeaturedProject.tsx` to `/Users/dluud/Desktop/anything/Hassandld.github.io/src/components/FeaturedProject.tsx`.

3. `src/components/Hero.tsx`:
   Update with Framer Motion `<motion.section>`, `<motion.div>`, `staggerChildren`, status pill ("Available for Strategic & Security Initiatives" / "متاح للمبادرات الاستراتيجية والأمنية" with pulsating emerald dot), gradient typography, glowing avatar aura, floating micro-badges, and glassmorphic CTA buttons. Strictly preserve all bilingual content.

4. `src/components/Experience.tsx`:
   Update with Framer Motion scroll reveals, glassmorphism (`.glass-card`), glowing timeline nodes, and responsive mobile date wrapping (`flex-col sm:flex-row sm:items-center sm:justify-between gap-2`, `min-w-0`, `break-words`). Strictly preserve all 9 experience items in English and Arabic.

5. `src/components/Skills.tsx`:
   Update with Framer Motion stagger animations and glassmorphic category cards with interactive skill pills. Strictly preserve all content in English and Arabic.

6. `src/components/Certifications.tsx`:
   Update with Framer Motion staggered cards, glassmorphic credential cards with issuer badges, and external links. Strictly preserve all content in English and Arabic.

7. `src/components/Awards.tsx`:
   Update with Framer Motion scroll reveals and glassmorphic achievement cards. Strictly preserve all content in English and Arabic.

8. `src/components/Contact.tsx`:
   Update with Framer Motion animations and glassmorphic contact cards. Strictly preserve all content in English and Arabic.

9. `src/app/page.tsx`:
   Ensure `<main>` is `relative min-h-screen w-full overflow-x-hidden flex flex-col bg-transparent`.

VERIFICATION:
Run `npm run lint` and `npm run build` using `run_command` in `/Users/dluud/Desktop/anything/Hassandld.github.io`.
Ensure build exits with 0 errors.
Verify that `git diff` or file views show the actual updated files on disk!
Send a message with full verification output when finished.
