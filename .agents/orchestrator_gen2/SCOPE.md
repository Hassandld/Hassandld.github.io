# Scope: Final Modernization Remediation (Gen 2)

## Objectives
1. Modernize `src/components/Certifications.tsx`:
   - Framer Motion imports and `<motion.*>` animations (container stagger, card entrance, whileInView, viewport once).
   - Modern glassmorphism styling (`bg-slate-900/60`, `backdrop-blur-xl`, `border-white/10`, hover micro-interactions).
   - Strictly preserve all 8 certification entries, links, and Arabic/English text.
2. Modernize `src/components/Awards.tsx`:
   - Framer Motion imports and `<motion.*>` animations (container stagger, card entrance, whileInView, hover lift).
   - Modern glassmorphism styling (`bg-slate-900/60`, `backdrop-blur-xl`, `border-white/10`, glowing badges).
   - Strictly preserve all 6 awards entries, links, and Arabic/English text.
3. Modernize `src/components/Contact.tsx`:
   - Modern glassmorphism styling (`bg-slate-900/60`, `backdrop-blur-xl`, `border-white/10`, modern gradient badges and icon hover effects).
   - Strictly preserve all contact text and links.
4. Update adversarial test suite if needed so `Awards` and `Certifications` Framer Motion usage is asserted.
5. Run full validation: Next.js build, ESLint, adversarial test suite.
