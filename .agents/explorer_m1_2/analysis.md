# Milestone 1 Architectural Analysis: Ambient Background & Floating Language Switcher

**Explorer**: Explorer 2 (Milestone 1 — Design System & Core Framework)  
**Date**: 2026-08-25  
**Project**: Hassandld.github.io (Hassan Ahmed Bahathiq Portfolio Redesign)  
**Target Files**:
- `src/components/Background.tsx`
- `src/context/LanguageContext.tsx`
- `src/app/layout.tsx`
- Related: `src/app/globals.css`, `src/app/page.tsx`, `src/app/recommendations/page.tsx`

---

## 1. Executive Summary

This investigation provides a comprehensive architectural blueprint for modernizing the core foundation of Hassan Bahathiq's portfolio. The redesign addresses two critical foundational components:

1. **Ambient Background Architecture (`Background.tsx`)**: Replaces an inefficient, static, blurred raster image (`/about-image.png` with heavy `backdrop-blur-[60px]`) with a zero-asset, high-performance, GPU-accelerated multi-layered dark canvas featuring animated emerald/cyan/indigo ambient gradient orbs, a refined cybersecurity micro-grid overlay with radial vignette masking, and full `prefers-reduced-motion` accessibility.
2. **Premium Floating Language Switcher (`LanguageContext.tsx`)**: Upgrades a primitive single solid-green button into a glassmorphic segmented dual-pill controller (`EN` | `عربي`) powered by Framer Motion spring physics, integrated Lucide globe iconography, persistent client-side `localStorage` caching, robust hydration safety, and isolated `dir="ltr"` structure for flawless behavior in both LTR and RTL modes.

Both systems are engineered for 60fps mobile and desktop performance, zero TypeScript/Next.js build errors, and 100% backward compatibility with all portfolio sections.

---

## 2. Current State Audit & Problem Identification

### 2.1 `src/components/Background.tsx`
```tsx
// Current Implementation
"use client";
import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="absolute inset-0 bg-gray-950"></div>
      <div className="absolute inset-0">
        <Image 
          src="/about-image.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-60" 
          priority
        />
        <div className="absolute inset-0 bg-gray-950/50 backdrop-blur-[60px]"></div>
      </div>
    </div>
  );
}
```

#### Defects & Bottlenecks:
- **Heavy Asset Load & FCP Drag**: Preloading `/about-image.png` with Next.js `priority` for a full-screen background wastes bandwidth and delays First Contentful Paint.
- **GPU Fill-Rate Exhaustion**: Applying `backdrop-blur-[60px]` over a full-screen active viewport creates heavy rasterization bottlenecks, especially on mobile devices during scrolling.
- **Visual Aesthetic Deficit**: A heavily blurred portrait image looks murky and outdated rather than reflecting a high-caliber Cybersecurity, GRC, and PMO professional.
- **Occlusion Issue**: In `src/app/page.tsx`, `<main className="min-h-screen bg-gray-900">` uses an opaque `bg-gray-900` background, which unintentionally masks the background canvas.

---

### 2.2 `src/context/LanguageContext.tsx`
```tsx
// Current Implementation
"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <button 
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-colors"
      >
        {lang === 'en' ? 'العربية' : 'English'}
      </button>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
```

#### Defects & Bottlenecks:
- **Primitive UI**: Flat solid green button with zero glassmorphism, no indicator of current state vs alternate state, and no micro-animations.
- **Lack of Persistence**: When a user switches to Arabic and navigates to `/recommendations` or refreshes the page, their preference is lost and resets to `'en'`.
- **RTL Positional & Visual Inversion**: Fixed `right-6` without `dir="ltr"` wrapper causes inconsistent visual layout between languages.
- **Accessibility & Feedback Deficit**: Missing `aria-label`, active state indicators, and keyboard focus outlines.

---

### 2.3 `src/app/layout.tsx`
```tsx
// Current Implementation
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${tajawal.variable} text-gray-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <LanguageProvider>
          <Background />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

#### Enhancement Needs:
- Add `bg-slate-950` to root body to establish dark baseline.
- Ensure `overflow-x-hidden` on the body/main wrapper to guarantee no horizontal scroll jitter on mobile viewports.
- Support smooth font transitions between `Inter` and `Tajawal`.

---

## 3. Proposed Ambient Background Architecture

### 3.1 Design Philosophy: The "Cybersecurity Ambient Mesh"
The background should communicate trust, security, and analytical precision through:
- **Deep Obsidian Baseline (`#020617` / Slate-950)**: Provides high-contrast readability for glassmorphic cards and typography.
- **Emerald Accent Orbs (`#10b981`)**: Reflects Saudi tech identity, GRC, and security operational green.
- **Cyan & Indigo Secondary Orbs (`#06b6d4`, `#6366f1`)**: Adds multi-dimensional depth, IAM governance, and modern cloud security nuance.
- **Cyber Micro-Grid with Radial Vignette**: Fine vector grid lines (48px spacing) masked by an elliptical radial gradient that concentrates structure in the upper viewport and softly fades towards the edges.

### 3.2 Multi-Layer Composition
```
┌────────────────────────────────────────────────────────┐
│  Layer 4: Foreground Content (Cards, Text, Glass)      │  z-10
├────────────────────────────────────────────────────────┤
│  Layer 3: Soft Radial Vignette Mask                    │  -z-10
├────────────────────────────────────────────────────────┤
│  Layer 2: Cyber Micro-Grid / Dot Mesh (SVG pattern)    │  -z-10
├────────────────────────────────────────────────────────┤
│  Layer 1: Floating Gradient Mesh Orbs (CSS Keyframes)  │  -z-10
├────────────────────────────────────────────────────────┤
│  Layer 0: Deep Obsidian Canvas (bg-slate-950)          │  -z-10
└────────────────────────────────────────────────────────┘
```

### 3.3 Performance Engineering
- **0 KB Raster Payloads**: Eliminates heavy PNG images.
- **Off-Main-Thread CSS Animations**: Uses CSS keyframe animations with `transform: translate3d(...)` and `opacity` properties, fully executed on the GPU compositor thread with `will-change: transform`.
- **Media Query Accessibility**: Detects `@media (prefers-reduced-motion: reduce)` to disable orb translations, preserving static ambient gradients for sensitive users.
- **Pointer Events**: Strict `pointer-events-none` prevents any interference with user interactions.

### 3.4 Proposed Code: `src/components/Background.tsx`
```tsx
"use client";

import React from "react";

export default function Background() {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-slate-950 select-none"
    >
      {/* Layer 1: Ambient Glowing Gradient Orbs */}
      <div className="absolute inset-0 opacity-40 sm:opacity-50">
        {/* Top-Right Emerald/Teal Glow Orb */}
        <div 
          className="absolute -top-[10%] -right-[5%] w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent blur-[80px] sm:blur-[120px] animate-ambient-pulse"
        />

        {/* Mid-Left Cyan/Indigo Glow Orb */}
        <div 
          className="absolute top-[35%] -left-[10%] w-[340px] h-[340px] sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent blur-[90px] sm:blur-[140px] animate-ambient-float"
        />

        {/* Bottom-Center Emerald/Mint Glow Orb */}
        <div 
          className="absolute -bottom-[10%] left-[20%] sm:left-[30%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full bg-gradient-to-t from-emerald-600/15 via-emerald-400/5 to-transparent blur-[80px] sm:blur-[110px] animate-ambient-drift"
        />
      </div>

      {/* Layer 2: Subtle Cyber Micro-Grid with Radial Fade */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_20%,transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_20%,transparent_85%)] opacity-70"
      />

      {/* Layer 3: Tech Dot Constellation Accent Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_15%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_15%,transparent_75%)] opacity-50"
      />

      {/* Layer 4: Vignette Edge Darkening */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80" />
    </div>
  );
}
```

---

## 4. Proposed Floating Language Switcher Architecture

### 4.1 Design Philosophy: "Glassmorphic Segmented Pill"
- **Dual-State Capsule**: Presents both `EN` and `عربي` in a sleek horizontal capsule.
- **Framer Motion Sliding Pill**: The active language is highlighted by a spring-animated backdrop pill (`layoutId="activeLangIndicator"`).
- **Glassmorphism & Depth**: Translucent slate backdrop (`bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-xl shadow-black/40 hover:border-emerald-500/40`).
- **Interactive Feedback**: Micro-scale animations on hover (`scale: 1.04`) and tap (`scale: 0.96`), with an emerald globe icon.
- **Bidirectional Safety**: Wrapped in `dir="ltr"` so the physical structure of the segmented switcher remains stable and intuitive regardless of the active root document direction.

### 4.2 State Management & Persistence Flow
1. **Initial Mount**: Check `localStorage.getItem('portfolio_lang')`. If valid ('en' or 'ar'), synchronize state.
2. **HTML Update**: Synchronize `document.documentElement.lang` and `document.documentElement.dir`.
3. **Change Handler**: Set state and save to `localStorage.setItem('portfolio_lang', newLang)`.
4. **Hydration Protection**: Render cleanly without layout shifts or SSR mismatches.

### 4.3 Proposed Code: `src/context/LanguageContext.tsx`
```tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useTransition } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLanguage: () => {},
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  // Initialize from localStorage safely on client mount
  useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
      if (savedLang === "en" || savedLang === "ar") {
        setLangState(savedLang);
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
      }
    } catch {
      // Graceful fallback if localStorage is blocked
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    startTransition(() => {
      setLangState(newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      try {
        localStorage.setItem("portfolio_lang", newLang);
      } catch {
        // Fallback for private browsing
      }
    });
  };

  const toggleLanguage = () => {
    setLanguage(lang === "en" ? "ar" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      <LanguageSwitcher lang={lang} setLanguage={setLanguage} mounted={mounted} />
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

/**
 * Modern Glassmorphic Floating Language Switcher
 */
export function LanguageSwitcher({
  lang,
  setLanguage,
  mounted = true,
}: {
  lang: Language;
  setLanguage: (lang: Language) => void;
  mounted?: boolean;
}) {
  return (
    <aside 
      aria-label="Language selection"
      className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50 select-none"
      dir="ltr"
    >
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/70 shadow-lg shadow-black/40 hover:border-emerald-500/40 transition-all duration-300">
        <div className="flex items-center justify-center pl-2 pr-1 text-emerald-400">
          <Globe size={15} className="animate-pulse" />
        </div>

        {/* English Option */}
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={lang === "en"}
          aria-label="Switch to English"
          className={`relative px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
            lang === "en"
              ? "text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          {lang === "en" && (
            <motion.div
              layoutId="activeLanguageIndicator"
              className="absolute inset-0 bg-emerald-500/90 rounded-full shadow-md shadow-emerald-500/30 -z-10"
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
            />
          )}
          <span>EN</span>
        </button>

        {/* Arabic Option */}
        <button
          type="button"
          onClick={() => setLanguage("ar")}
          aria-pressed={lang === "ar"}
          aria-label="التبديل إلى العربية"
          className={`relative px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
            lang === "ar"
              ? "text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          {lang === "ar" && (
            <motion.div
              layoutId="activeLanguageIndicator"
              className="absolute inset-0 bg-emerald-500/90 rounded-full shadow-md shadow-emerald-500/30 -z-10"
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
            />
          )}
          <span>عربي</span>
        </button>
      </div>
    </aside>
  );
}
```

---

## 5. Global Styles & Layout Integration (`globals.css`, `layout.tsx`, `page.tsx`)

### 5.1 CSS Animations in `src/app/globals.css`
Tailwind v4 allows seamless definition of keyframe animations and utility classes:
```css
@import "tailwindcss";

:lang(ar) {
  font-family: var(--font-tajawal), system-ui, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Ambient Background Animations */
@keyframes ambientPulse {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.35;
  }
  50% {
    transform: translate3d(20px, -20px, 0) scale(1.08);
    opacity: 0.55;
  }
}

@keyframes ambientFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate3d(-25px, 25px, 0) scale(1.05);
    opacity: 0.5;
  }
}

@keyframes ambientDrift {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.25;
  }
  50% {
    transform: translate3d(15px, -15px, 0) scale(1.1);
    opacity: 0.45;
  }
}

.animate-ambient-pulse {
  animation: ambientPulse 14s ease-in-out infinite alternate;
  will-change: transform, opacity;
}

.animate-ambient-float {
  animation: ambientFloat 18s ease-in-out infinite alternate;
  will-change: transform, opacity;
}

.animate-ambient-drift {
  animation: ambientDrift 16s ease-in-out infinite alternate;
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .animate-ambient-pulse,
  .animate-ambient-float,
  .animate-ambient-drift {
    animation: none !important;
  }
}

/* Custom Sleek Dark/Emerald Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #020617;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 9999px;
  border: 2px solid #020617;
}

::-webkit-scrollbar-thumb:hover {
  background: #10b981;
}
```

### 5.2 Root Layout Update (`src/app/layout.tsx`)
```tsx
import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });
const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
  description: "Portfolio of Hassan Ahmed Bahathiq, Cybersecurity Graduate experienced in GRC, IAM, Security Operations, Strategic Planning, and PMO initiatives.",
  keywords: ["Hassan Bahathiq", "Hassan Ahmed Bahathiq", "Cybersecurity Saudi Arabia", "IAM", "GRC", "Security Operations"],
  openGraph: {
    title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
    description: "Experienced in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), Security Operations, Strategic Planning, and PMO initiatives.",
    url: "https://hassandld.github.io",
    siteName: "Hassan Bahathiq Portfolio",
    images: [
      {
        url: "https://hassandld.github.io/about-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Bahathiq Professional Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
    description: "Experienced in GRC, IAM, Security Operations, Strategic Planning, and PMO initiatives.",
    images: ["https://hassandld.github.io/about-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${tajawal.variable} bg-slate-950 text-gray-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen overflow-x-hidden`}>
        <LanguageProvider>
          <Background />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

### 5.3 Transparent Page Wrapper (`src/app/page.tsx`)
In `src/app/page.tsx`, change:
```tsx
// Before:
<main className="min-h-screen bg-gray-900">
// After:
<main className="relative min-h-screen bg-transparent overflow-x-hidden">
```
Similarly in `src/app/recommendations/page.tsx`:
```tsx
// Before:
<main className="min-h-screen bg-gray-900 pt-24 pb-12 px-6 sm:px-12 lg:px-24">
// After:
<main className="relative min-h-screen bg-transparent pt-24 pb-12 px-6 sm:px-12 lg:px-24 overflow-x-hidden">
```

---

## 6. Comparison Matrix: Current vs Proposed

| Feature | Current State | Proposed Modern State |
|---|---|---|
| **Background Payload** | ~600KB raster image (`/about-image.png`) with `backdrop-blur-[60px]` | 0KB asset payload, pure CSS/SVG vectors |
| **GPU & Scrolling** | Heavy full-screen backdrop-filter recalculations on scroll | Hardware-accelerated compositor keyframes (`translate3d`, `will-change`) |
| **Theme & Aesthetic** | Murky blurred portrait photo | Ambient emerald/cyan/indigo mesh + cyber micro-grid with radial vignette |
| **Motion Accessibility** | No `prefers-reduced-motion` handling | Fully disabled animations when reduced motion is preferred |
| **Language Switcher UI** | Basic solid green button (`English`/`العربية`) | Glassmorphic dual-pill segmented controller (`EN` \| `عربي`) |
| **Micro-Interactions** | Instant text toggle, no physics | Framer Motion spring sliding pill + Globe icon |
| **Language Persistence** | None (resets to English on reload/subpage) | LocalStorage caching with hydration protection |
| **RTL Consistency** | Button shifts or misaligns with document direction | `dir="ltr"` isolation ensures stable pill layout |
| **Build & Dependencies** | Existing setup | Seamless integration with React 19, Next.js 16, Framer Motion 12 |

---

## 7. Actionable Implementation Steps for Worker

1. **Update `src/app/globals.css`**:
   - Insert keyframe animations (`@keyframes ambientPulse`, `@keyframes ambientFloat`, `@keyframes ambientDrift`).
   - Add animation utility classes and `@media (prefers-reduced-motion: reduce)`.
   - Add custom dark/emerald scrollbar rules.
2. **Update `src/components/Background.tsx`**:
   - Replace image-based markup with the multi-layered CSS ambient gradient mesh, cyber micro-grid, and vignette overlay.
3. **Update `src/context/LanguageContext.tsx`**:
   - Implement `LanguageSwitcher` glassmorphic component with Framer Motion spring pill indicator.
   - Add `setLanguage` to context, integrate `localStorage` caching with hydration safety.
4. **Update `src/app/layout.tsx`**:
   - Add `bg-slate-950 min-h-screen overflow-x-hidden` to `<body>`.
5. **Update `src/app/page.tsx` & `src/app/recommendations/page.tsx`**:
   - Switch `<main className="min-h-screen bg-gray-900">` to `<main className="relative min-h-screen bg-transparent overflow-x-hidden">`.
6. **Verify Build**:
   - Run `npm run build` to confirm 0 TypeScript, ESLint, or Next.js build errors.

---

## 8. Verification Protocol

- **Build Check**: `npm run build` must output static pages with zero errors.
- **RTL & Switcher Check**: Clicking `EN` and `عربي` toggles language, updates `dir="rtl"` / `dir="ltr"`, persists in `localStorage`, and animates the active pill smoothly.
- **Responsive Check**: Test viewports from 320px (mobile) to 2560px (ultra-wide); ensure zero horizontal overflow (`scrollWidth === clientWidth`).
- **Performance Check**: Background renders with 0 network image requests and 60fps frame rate during fast scrolling.
