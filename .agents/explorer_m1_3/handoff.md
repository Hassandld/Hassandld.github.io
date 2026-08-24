# 5-Component Handoff Report: Mobile Viewport, RTL, Safe Areas & Motion Architecture

**Agent**: Explorer 3 (Milestone 1 — Design System & Core Framework)  
**Date**: 2026-08-25  
**Working Directory**: `/Users/dluud/Desktop/anything/Hassandld.github.io/.agents/explorer_m1_3/`  
**Target Milestone**: Milestone 1

---

## 1. Observation

1. **`src/app/layout.tsx` (Lines 14-58)**:
   - Line 14: `export const metadata: Metadata = { ... }` is exported, but there is no `export const viewport: Viewport` export.
   - Line 48: `<html lang="en" className="scroll-smooth">` lacks `suppressHydrationWarning`.
   - Line 49: `<body className="${inter.className} ${tajawal.variable} text-gray-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200">` lacks `bg-gray-950`, `min-h-screen`, `overflow-x-hidden`, and `relative`.
2. **`src/app/page.tsx` (Lines 10-23)**:
   - Line 12: `<main className="min-h-screen bg-gray-900">` creates an opaque background layer covering the ambient dynamic background canvas in `Background.tsx`, and lacks `overflow-x-hidden`, `w-full`, and `relative`.
3. **`src/context/LanguageContext.tsx` (Lines 31-36)**:
   - Floating switcher button uses `fixed top-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-colors`. It lacks iOS safe area insets (`env(safe-area-inset-top)`, `env(safe-area-inset-right)`) and logical positioning (`end-6`).
4. **`src/app/recommendations/page.tsx` & Section Components (`Hero.tsx`, `Contact.tsx`, `About.tsx`)**:
   - `RecommendationsPage` line 23-25 uses physical margin `mr-2` and `ml-2`.
   - `Contact.tsx` line 55 uses dynamic string concatenation ``text-${lang === 'ar' ? 'right' : 'left'}`` instead of `text-start`.
   - Section paddings are statically `px-6 sm:px-12 lg:px-24`, which on narrow 320px-375px mobile viewports restricts horizontal content width.
5. **`package.json` (Lines 11-18)**:
   - Next.js is `^16.2.9`, React is `^19.2.4`, Framer Motion is `^12.40.0`, Tailwind CSS is `^4.3.1`.

---

## 2. Logic Chain

1. **Viewport & Safe Area Insets** (from Observation 1 & 3):
   - In Next.js 16, viewport configuration must be separated from `metadata` into an explicit `export const viewport: Viewport` object.
   - Without `viewportFit: "cover"`, mobile Safari letterboxes content instead of respecting edge-to-edge rendering.
   - Without `env(safe-area-inset-top)` / `env(safe-area-inset-right)` on fixed elements like the floating language toggle, the button may overlap with the iOS Dynamic Island, notch, or status bar.
2. **Background Canvas Visibility & Overflow Protection** (from Observation 1 & 2):
   - The `<Background />` component is mounted with `fixed inset-0 z-[-1]`.
   - Having `bg-gray-900` on `<main>` renders an opaque background in front of `Background.tsx`, blocking ambient glow effects.
   - Setting `main` to `bg-transparent relative min-h-screen w-full overflow-x-hidden` and `body` to `bg-gray-950 overflow-x-hidden` guarantees that the background is visible while eliminating mobile horizontal jitter and scrollbar pop-in from Framer Motion entry animations.
3. **RTL Logical Property Refactoring** (from Observation 4):
   - Directional classes (`mr-*`, `ml-*`, `text-left`, `text-right`, `pl-*`, `pr-*`) require manual condition checking based on `lang === 'ar'`.
   - In Tailwind CSS v4, logical properties (`me-*`, `ms-*`, `text-start`, `text-end`, `ps-*`, `pe-*`) natively mirror when `dir="rtl"` is set on `document.documentElement`, reducing code complexity and preventing layout bugs.
4. **React 19 / Next.js 16 Motion & Hydration Invariants** (from Observation 1 & 5):
   - React 19 Server Components do not support client hooks or context required by Framer Motion.
   - Client Component boundaries (`"use client"`) must be maintained on all interactive and animated components (`LanguageContext`, `Hero`, `About`, etc.).
   - Initial states for language and animations must remain deterministic during SSR to avoid React hydration mismatch errors.

---

## 3. Caveats

1. **Static Export / GitHub Pages Considerations**: The repository includes `gh-pages: ^6.3.0` in `devDependencies`. If static export is used (`output: 'export'`), all dynamic routes and image loaders must adhere to static export rules.
2. **Touch Target Size on Compact Devices**: Floating buttons on mobile must maintain a minimum 44x44px touch target for WCAG 2.1 AA accessibility compliance.
3. **Arabic Font Loading**: `Tajawal` font is loaded via `next/font/google`. In offline / restricted environments, fallback system sans-serif fonts must have adequate line-height.

---

## 4. Conclusion

1. **Immediate Implementations for Milestone 1 Worker**:
   - Update `src/app/layout.tsx` to export `viewport: Viewport` with `viewportFit: "cover"`, `width: "device-width"`, `initialScale: 1`, `themeColor: "#030712"`.
   - Update `<body>` in `src/app/layout.tsx` with `bg-gray-950 text-gray-100 min-h-screen overflow-x-hidden relative font-sans`.
   - Update `<main>` in `src/app/page.tsx` with `relative min-h-screen w-full overflow-x-hidden flex flex-col bg-transparent`.
   - Update `src/context/LanguageContext.tsx` floating button with safe-area spacing and logical positioning `top-[max(1rem,env(safe-area-inset-top))] end-[max(1rem,env(safe-area-inset-right))]`.
   - Establish shared motion animation tokens (`fadeInUp`, `fadeIn`, `staggerContainer`, `cardHover`) for subsequent component milestones.

---

## 5. Verification Method

1. **Build & Typecheck Command**:
   ```bash
   npm run build
   ```
   Must complete with 0 errors, 0 TypeScript warnings, and valid Next.js route outputs.
2. **Mobile Viewport Verification**:
   - Inspect page in Chrome DevTools Device Mode at 320px, 375px, 390px, and 412px widths.
   - Verify `document.documentElement.scrollWidth === document.documentElement.clientWidth` (zero horizontal overflow).
3. **RTL Layout Verification**:
   - Click the language toggle button to switch to `'ar'`.
   - Verify `document.documentElement.dir === "rtl"` and `document.documentElement.lang === "ar"`.
   - Confirm text aligns to the right (`text-start`), icons adjust, and font switches to `Tajawal`.
4. **Hydration Verification**:
   - Check browser console during page load in both EN and AR modes: 0 hydration warnings (`Hydration failed because the server-rendered HTML didn't match the client`).
