# Architecture & Technical Specification: "Beyond The Code"

## 1. System Overview & Static Deployment Constraints

"Beyond The Code" is an interactive personal portfolio built for a Fullstack/Backend Developer. It marries editorial editorial-grade typography with an active, persistent WebGL/3D scene fixed in the background that reacts to smooth scrolling and viewport dynamics.

```
+-------------------------------------------------------------------------+
|                               Window Viewport                           |
|                                                                         |
|  [ z-50 ] Fixed Overlay / Glassmorphism Navbar                          |
|  +-------------------------------------------------------------------+  |
|  | [Logo: Beyond The Code]                 [Nav Links] [Resume/Status]|  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  [ z-10 ] Scrollable Semantic DOM Wrapper (Lenis Smooth Scroll)         |
|  +-------------------------------------------------------------------+  |
|  | <section id="hero"       className="min-h-screen"> ... </section> |  |
|  | <section id="about"      className="min-h-screen"> ... </section> |  |
|  | <section id="skills"     className="min-h-screen"> ... </section> |  |
|  | <section id="projects"   className="min-h-[150vh]"> ... </section>|  |
|  | <section id="experience" className="min-h-screen"> ... </section> |  |
|  | <section id="contact"    className="min-h-screen"> ... </section> |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  [ z-0 ] Fixed Fullscreen 3D SceneCanvas (pointer-events-none)          |
|  +-------------------------------------------------------------------+  |
|  | Three.js Canvas / R3F Tree: Camera + Studio Lights + Core Artifact|  |
|  | Driven by GSAP ScrollTrigger timeline keyed to DOM sections       |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
```

### Static Generation & SSR Compatibility (`output: 'export'`)
- **Zero Node.js Runtime Requirement**: The application supports full static HTML export (`next build` with `output: 'export'`) or hybrid deployment (Vercel, Cloudflare Pages, GitHub Pages).
- **Client-Side Canvas Isolation**: The 3D Canvas depends strictly on browser WebGL contexts and window events (`ResizeObserver`, `requestAnimationFrame`). It is dynamically mounted using Next.js `dynamic(() => import(...), { ssr: false })` or rendered inside an explicit client wrapper with a mounted lifecycle check.
- **Hydration Safety**:
  - The DOM structure rendered by the server matches the client initial render exactly.
  - Interactive elements and canvas initialization fire after DOM mount (`useEffect` / `useIsomorphicLayoutEffect`), eliminating React Hydration Mismatch errors (`#418`, `#423`).

---

## 2. Information Architecture & User Journey

The portfolio unfolds as a continuous narrative driven by scroll progress normalized from `0.00` (initial hero state) to `1.00` (contact/footer termination).

| Section Index | Normalized Scroll Progress | Primary Narrative & Content | 3D Camera & Artifact Behavior |
| :--- | :--- | :--- | :--- |
| **01. Hero** | `0.00 - 0.15` | Identity statement, role badge, quick elevator pitch, primary CTAs, scroll indicator. | Centered camera `[0, 0, 5]`. Monolithic core artifact idling with subtle float and mouse-pointer tilt. |
| **02. About** | `0.15 - 0.30` | Core engineering philosophy, distributed systems mindset, architectural principles. | Camera dollies inward to `[1.2, 0.4, 3.8]`. Artifact expands/rotates, exposing internal crystalline geometry. |
| **03. Skills** | `0.30 - 0.50` | Categorized tech stack (Languages, Backend & Cloud, Storage & Queues, DevOps & Tooling). | Camera orbits to top-angle `[-1.5, 1.2, 3.2]`. Artifact fragments into orbiting modular nodes symbolizing services. |
| **04. Projects** | `0.50 - 0.75` | Production case studies, metrics-driven achievements, system architecture tags. | Lateral camera tracking `[2.0, -0.5, 3.5]`. Light refractions and material transmission shift with active project cards. |
| **05. Experience**| `0.75 - 0.90` | Engineering career timeline, infrastructure scale, operational highlights. | Camera descends vertically `[0.0, -2.0, 4.0]`. Artifact aligns vertically as an architectural backbone. |
| **06. Contact** | `0.90 - 1.00` | Collaboration invite, email copy button, social links, PGP/status indicators. | Dramatic frontal convergence `[0, 0, 2.5]`. Emissive edge pulse glowing electric violet (`#8B5CF6`). |

---

## 3. Modular Folder Tree & Component Boundaries

Every component has a strictly delineated execution boundary to maximize static generation efficiency and minimize client bundle sizes.

```text
src/
├── app/
│   ├── layout.tsx             # [Server Component] HTML shell, Font configuration, SEO metadata
│   ├── page.tsx               # [Server Component] Root page assembling sections & client canvas
│   └── globals.css            # Global CSS variables, Tailwind directives, Lenis scroll resets
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # ["use client"] Glassmorphism header, active section spy, mobile drawer
│   │   ├── Footer.tsx         # [Server Component] Semantic footer, copyright, system status
│   │   └── SmoothScroll.tsx   # ["use client"] Lenis instance synchronized with GSAP ticker
│   ├── sections/
│   │   ├── HeroSection.tsx    # [Server Component] Editorial header, semantic H1, action links
│   │   ├── AboutSection.tsx   # [Server Component] Philosophy prose, key technical metrics
│   │   ├── SkillsSection.tsx  # [Server Component] Categorized technical skill matrices
│   │   ├── ProjectsSection.tsx# [Server Component] Featured project cards with tech tags
│   │   ├── ExpSection.tsx     # [Server Component] Career history and timeline layout
│   │   └── ContactSection.tsx # [Server Component] Semantic contact CTA with client interactive actions
│   ├── canvas/
│   │   ├── SceneCanvas.tsx    # ["use client"] Fixed R3F Canvas container with Suspense & Fallback
│   │   ├── Experience3D.tsx   # ["use client"] R3F scene graph root, camera control, GSAP bindings
│   │   ├── CoreArtifact.tsx   # ["use client"] Procedural geometry, PBR physical/transmission materials
│   │   ├── StudioLights.tsx   # ["use client"] Multi-point key, fill, rim, and ambient illumination
│   │   └── CanvasFallback.tsx # [Server Component / "use client"] CSS radial/mesh fallback when WebGL is absent
│   └── ui/
│       ├── Button.tsx         # [Server Component / "use client"] Editorial CTA with magnetic hover
│       ├── SectionHeading.tsx # [Server Component] Standardized editorial section header with index
│       ├── ProjectCard.tsx    # [Server Component] Glassmorphism project presentation card
│       ├── SkillBadge.tsx     # [Server Component] Monospace badge for technologies
│       └── StatusBadge.tsx    # [Server Component] Live availability pill indicator
├── data/
│   └── portfolio.ts           # Centralized static content repository with labeled placeholders
├── hooks/
│   ├── useScrollProgress.ts   # ["use client"] Hook exposing normalized and section-specific scroll progress
│   ├── useReducedMotion.ts    # ["use client"] Media query hook for accessibility preference
│   └── useWebGLSupport.ts     # ["use client"] WebGL capability & context availability probe
└── types/
    └── index.ts               # Core TypeScript definitions and data schemas
```

---

## 4. Data Schema Definitions (`src/types/index.ts`)

All content displayed in the application is strictly typed. No dummy copy or hallucinated biographies are permitted; clearly identified placeholders are used where live content will be injected.

```typescript
/**
 * Personal & Brand Identity
 */
export interface PersonalInfo {
  readonly name: string;
  readonly role: string;
  readonly tagline: string;
  readonly location: string;
  readonly availability: 'available' | 'contract' | 'unavailable';
  readonly bioSummary: string[];
  readonly metrics: ReadonlyArray<{
    readonly label: string;
    readonly value: string;
    readonly description: string;
  }>;
}

/**
 * Skill Classification Matrix
 */
export type SkillCategory = 
  | 'Languages' 
  | 'Backend & Architecture' 
  | 'Databases & Storage' 
  | 'Cloud & DevOps' 
  | 'Tools & Standards';

export interface SkillItem {
  readonly name: string;
  readonly proficiency: 'core' | 'proficient' | 'exploring';
  readonly highlight?: boolean;
}

export interface SkillGroup {
  readonly category: SkillCategory;
  readonly skills: ReadonlyArray<SkillItem>;
}

/**
 * Project Portfolio Item
 */
export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly summary: string;
  readonly description: string;
  readonly metrics: string;
  readonly role: string;
  readonly technologies: ReadonlyArray<string>;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly featured: boolean;
  readonly themeColor?: string;
}

/**
 * Professional Experience Timeline Item
 */
export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly current: boolean;
  readonly description: string;
  readonly highlights: ReadonlyArray<string>;
  readonly technologies: ReadonlyArray<string>;
}

/**
 * Navigation & External Links
 */
export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly sectionId: string;
}

export interface SocialLink {
  readonly platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Email' | 'Resume';
  readonly url: string;
  readonly handle: string;
}

/**
 * Aggregate Portfolio Data Bundle
 */
export interface PortfolioData {
  readonly personal: PersonalInfo;
  readonly navItems: ReadonlyArray<NavItem>;
  readonly skillGroups: ReadonlyArray<SkillGroup>;
  readonly projects: ReadonlyArray<ProjectItem>;
  readonly experiences: ReadonlyArray<ExperienceItem>;
  readonly socials: ReadonlyArray<SocialLink>;
}
```

---

## 5. Risk Matrix & Fallback Architecture

| Failure Mode / Edge Case | Likelihood & Severity | Technical Mitigation Strategy |
| :--- | :--- | :--- |
| **Low-End Mobile GPUs & Overheating** | High / Medium | 1. Cap `dpr` dynamically to `[1, 1.5]` via R3F Canvas config.<br>2. Reduce geometry subdivision levels on mobile viewports (`window.innerWidth < 768`).<br>3. Pause continuous render loop when canvas is stationary; only render on scroll tick or user interaction. |
| **WebGL Context Lost / Unsupported** | Low / High | 1. Implement `useWebGLSupport()` checking `HTMLCanvasElement.getContext('webgl2')`.<br>2. Gracefully unmount `<SceneCanvas>` and render `<CanvasFallback>` with an animated, GPU-accelerated CSS radial mesh background.<br>3. Ensure all text and layout remain 100% readable with high contrast. |
| **`prefers-reduced-motion: reduce`** | Medium / High | 1. Disable Lenis smooth inertia and snap to native instant scroll.<br>2. GSAP ScrollTrigger eliminates 3D camera travel and dampens 3D object movement to static keyframe transforms.<br>3. Eliminate continuous parallax and idle floating oscillations. |
| **DOM / Canvas Z-Index Collision** | Medium / Medium | 1. Canvas is pinned at `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.<br>2. Scrolling DOM sections sit in a wrapper with `position: relative; z-index: 10; pointer-events: auto;`.<br>3. Interactive 3D triggers use invisible CSS bounding boxes or raycaster relays without trapping document clicks. |
| **SEO & Screen Reader Invisibility** | High / High | 1. WebGL contains zero critical text.<br>2. Semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<time>`, `<footer>`) contain complete readable copy.<br>3. Skip-to-content links and ARIA labels are baked into interactive triggers. |

