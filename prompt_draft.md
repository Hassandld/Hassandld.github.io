# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

Redesign the existing Next.js portfolio website to feature a more flexible, interactive, and visually stunning layout inspired by modern premium templates. Enhance animations and micro-interactions while strictly preserving all existing textual content and data.

Integrity mode: development
Working directory: /Users/dluud/Desktop/anything/Hassandld.github.io

## Requirements

### R1. Modernize Aesthetic & Layout
Revamp the UI layout and aesthetic to look highly premium and modern. Maintain the single-page dark theme but utilize advanced styling (e.g., sophisticated gradients, glassmorphism, polished typography, and interactive hover states) similar to high-end portfolio templates.

### R2. Interactive Animations
Implement smooth entry animations, micro-interactions, and scroll-based reveal animations across all sections using Framer Motion. 

### R3. Strict Content Preservation
Absolutely preserve all existing portfolio data, text content, translation dictionaries (English/Arabic keys), and project details. No existing information or component logic should be deleted.

### R4. Responsive Mobile Optimization
Ensure the redesign is fully responsive and specifically resolves current mobile layout flaws (e.g., text overflowing containers in the Experience timeline, cramped spacing in the About section).

## Acceptance Criteria

### Implementation & Code Quality
- [ ] `framer-motion` is installed and `<motion.*>` components are heavily utilized in `Hero`, `About`, `Experience`, `FeaturedProject`, `Awards`, and `Certifications`.
- [ ] Tailwind CSS is used to implement modern design patterns (e.g., `backdrop-blur`, sophisticated gradients, shadow interactions) rather than basic flat colors.

### Content Integrity
- [ ] All previous text content (English and Arabic) is intact and unmodified. 
- [ ] `npm run build` completes successfully with no TypeScript, ESLint, or Next.js build errors.

### Mobile Responsiveness
- [ ] Layout does not cause horizontal scrolling on mobile viewports (`overflow-x-hidden` on main wrapper).
- [ ] Long text fields (like dates in the Experience section) wrap gracefully on small screens without breaking out of their containers.

---
*Next: when approved → delegate via invoke_subagent*
