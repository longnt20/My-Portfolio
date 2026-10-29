# Implementation Roadmap & Verification Gates: "Beyond The Code"

## Overview of Implementation Phases

The project progresses systematically through isolated, testable milestones. Each phase builds upon the verified foundation of preceding phases, preventing integration breakage and maintaining continuous build health.

```
[ Phase 1: Planning & Architecture (Docs Only) ]  <-- CURRENT PHASE
                      |
                      v
[ Phase 2: Project Setup, Tokens & Data Layer ]
                      |
                      v
[ Phase 3: Layout Shell, Lenis & Semantic DOM Sections ]
                      |
                      v
[ Phase 4: Single-Canvas 3D Core & Hero Artifact ]
                      |
                      v
[ Phase 5: Scroll-Driven 3D Choreography (GSAP + R3F) ]
                      |
                      v
[ Phase 6: Polish, A11y, Fallbacks, SEO & Final QA ]
```

---

## Phase Breakdown & Checklists

### Phase 2: Project Setup, Tokens & Data Layer
**Scope:** Initialize the Next.js App Router workspace, install dependencies, configure Tailwind with design tokens, define TypeScript interfaces, and create the centralized static data file.

- **Dependencies to Install:**
  - `next`, `react`, `react-dom`
  - `typescript`, `@types/node`, `@types/react`, `@types/react-dom`
  - `tailwindcss`, `postcss`, `autoprefixer`
  - `lucide-react`, `clsx`, `tailwind-merge`
- **Files to Create / Configure:**
  - `package.json`
  - `tsconfig.json`
  - `tailwind.config.ts`
  - `postcss.config.mjs`
  - `next.config.ts`
  - `src/types/index.ts`
  - `src/data/portfolio.ts`
- **Acceptance Criteria:**
  - `npx tsc --noEmit` succeeds with zero type errors.
  - `src/data/portfolio.ts` conforms completely to `src/types/index.ts`.
  - Placeholder safeguards are in place (no fake biographies).
- **Verification Commands:**
  ```bash
  npx tsc --noEmit
  npm run build
  ```

---

### Phase 3: Layout Shell, Lenis & Semantic DOM Sections
**Scope:** Construct the application layout, smooth scroll engine (Lenis + GSAP integration), responsive glassmorphic Navbar, Footer, and the 6 semantic HTML sections rendered cleanly without 3D canvas yet.

- **Dependencies to Install:**
  - `lenis` (or `@studio-freight/lenis`)
  - `gsap`
- **Files to Create:**
  - `src/app/globals.css`
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
  - `src/components/layout/SmoothScroll.tsx`
  - `src/components/layout/Navbar.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/ui/SectionHeading.tsx`
  - `src/components/ui/Button.tsx`
  - `src/components/ui/ProjectCard.tsx`
  - `src/components/sections/HeroSection.tsx`
  - `src/components/sections/AboutSection.tsx`
  - `src/components/sections/SkillsSection.tsx`
  - `src/components/sections/ProjectsSection.tsx`
  - `src/components/sections/ExpSection.tsx`
  - `src/components/sections/ContactSection.tsx`
- **Acceptance Criteria:**
  - Full page scrolls with silky Lenis inertia.
  - All 6 sections display styled data from `src/data/portfolio.ts`.
  - Responsive layout verified across mobile (`375px`) and desktop (`1440px`).
  - Zero hydration mismatch errors on page refresh.
- **Verification Commands:**
  ```bash
  npm run lint
  npx tsc --noEmit
  npm run build
  ```

---

### Phase 4: Single-Canvas 3D Core & Hero Artifact
**Scope:** Embed the fixed background `<SceneCanvas>` (`z-0`, `pointer-events-none`) with React Three Fiber and Drei. Construct the procedural 3D artifact (frosted glass outer shell + dark metallic crystalline core), multi-point studio lights, and mouse-parallax interaction in the Hero section.

- **Dependencies to Install:**
  - `three`, `@types/three`
  - `@react-three/fiber`
  - `@react-three/drei`
- **Files to Create:**
  - `src/components/canvas/SceneCanvas.tsx`
  - `src/components/canvas/Experience3D.tsx`
  - `src/components/canvas/CoreArtifact.tsx`
  - `src/components/canvas/StudioLights.tsx`
  - `src/components/canvas/CanvasFallback.tsx`
  - `src/hooks/useWebGLSupport.ts`
- **Acceptance Criteria:**
  - 3D artifact renders smoothly behind the Hero section at 60fps.
  - Dynamic client-only import prevents SSR hydration crashes.
  - Subtle mouse-tracking parallax operates without frame drops.
  - Non-WebGL fallback renders gracefully if WebGL context is mocked as disabled.
- **Verification Commands:**
  ```bash
  npm run lint
  npx tsc --noEmit
  npm run build
  ```

---

### Phase 5: Scroll-Driven 3D Choreography (GSAP + R3F)
**Scope:** Connect GSAP `ScrollTrigger` to R3F's scene graph and camera. Synchronize 3D object rotation, segmentation, camera positions, and lighting shifts with section scroll positions from `0.00` to `1.00`.

- **Files to Create / Update:**
  - `src/hooks/useScrollProgress.ts`
  - `src/components/canvas/Experience3D.tsx` (scroll bindings)
  - `src/components/canvas/CoreArtifact.tsx` (scroll morphs)
- **Acceptance Criteria:**
  - Scrolling smoothly translates and rotates the 3D camera/artifact across all 6 sections.
  - Bidirectional scrub has zero jitter or popping.
  - Performance stays locked at 60fps on modern hardware.
  - `prefers-reduced-motion` halts camera scrub and maintains a legible static perspective.
- **Verification Commands:**
  ```bash
  npm run lint
  npx tsc --noEmit
  npm run build
  ```

---

### Phase 6: Polish, A11y, Fallbacks, SEO & Final QA
**Scope:** Implement editorial DOM text reveals, card hover micro-interactions, copy-to-clipboard feedback, loading states, OpenGraph metadata, structured JSON-LD schema, and full cross-browser QA.

- **Files to Create / Update:**
  - `src/hooks/useReducedMotion.ts`
  - `src/app/layout.tsx` (SEO & metadata)
  - `src/app/sitemap.ts` & `src/app/robots.ts`
  - UI micro-interactions across `src/components/`
- **Acceptance Criteria:**
  - Perfect Lighthouse / accessibility audit scores.
  - Production build generates clean static assets with zero warnings or errors.
  - Verified responsive design across all viewports.
- **Verification Commands:**
  ```bash
  npm run lint
  npx tsc --noEmit
  npm run build
  ```

