# Design System & Visual Tokens: "Beyond The Code"

## 1. Color Tokens & CSS Variables

The aesthetic is **Dark Cinematic Editorial**: deep void backgrounds, subtle luminescence, precision borders, and high contrast typographic hierarchy.

```css
:root {
  /* Surface Foundations */
  --color-bg-primary: #08080D;       /* Pure void background */
  --color-bg-secondary: #0F0F17;     /* Elevated container background */
  --color-surface-glass: rgba(255, 255, 255, 0.03);  /* Frosted card fill */
  --color-surface-hover: rgba(255, 255, 255, 0.06);  /* Hover surface state */

  /* Borders & Dividers */
  --color-border-subtle: rgba(255, 255, 255, 0.08); /* Precision 1px grid borders */
  --color-border-accent: rgba(139, 92, 246, 0.35);  /* Violet glow outline */

  /* Typography Colors */
  --color-text-primary: #F5F5F7;      /* Clean off-white editorial text */
  --color-text-muted: #94A3B8;        /* Slate secondary text */
  --color-text-dim: #64748B;          /* Supporting captions & metadata */

  /* Accents & Emissives */
  --color-accent-primary: #8B5CF6;    /* Electric Violet (Focus, highlights) */
  --color-accent-secondary: #22D3EE;  /* Subtle Cyan (Secondary data, glow) */
  --color-accent-gradient: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  --color-glow-violet: rgba(139, 92, 246, 0.18);
  --color-glow-cyan: rgba(34, 211, 238, 0.15);
}
```

### Tailwind Utility Mapping
```typescript
// tailwind.config.ts token integration
export const colors = {
  void: {
    DEFAULT: '#08080D',
    elevated: '#0F0F17',
  },
  editorial: {
    primary: '#F5F5F7',
    muted: '#94A3B8',
    dim: '#64748B',
  },
  accent: {
    violet: '#8B5CF6',
    cyan: '#22D3EE',
  },
};
```

---

## 2. Typography Scale & Fluid Editorial Sizing

Typography balances editorial luxury (Geist Sans / Inter Display) with engineered technical precision (Geist Mono / JetBrains Mono).

| Token | CSS Definition / Tailwind Class | Intended Usage |
| :--- | :--- | :--- |
| **Display Mega** | `clamp(3.5rem, 8vw + 1rem, 7.5rem)` (`font-display font-bold tracking-tighter`) | Hero headline, core identity title |
| **Section Title** | `clamp(2.25rem, 4vw + 1rem, 4.5rem)` (`tracking-tight leading-[1.05]`) | Section headers (`01. ABOUT`, `03. PROJECTS`) |
| **Card Header** | `clamp(1.25rem, 1.5vw + 0.5rem, 2rem)` (`font-medium`) | Project names, role titles |
| **Body Large** | `1.125rem` (`18px`) / `leading-relaxed text-editorial-muted` | Section introductory paragraphs |
| **Body Regular** | `1.0rem` (`16px`) / `leading-normal text-editorial-muted` | Technical descriptions, bullet points |
| **Technical Mono**| `0.875rem` (`14px`) / `font-mono tracking-wider uppercase` | Metadata tags, metrics, section numbers, dates |

---

## 3. Spacing, Grid & Z-Index Layering

### Z-Index Stacking Context
```
+-------------------------------------------------------------+
| Layer 3: z-50  Fixed Header / Glass Navbar / Status Banner  |
+-------------------------------------------------------------+
| Layer 2: z-10  Scrollable Semantic DOM (Pointer Events: Auto)|
+-------------------------------------------------------------+
| Layer 1: z-0   Fixed 3D Canvas (Pointer Events: None)       |
+-------------------------------------------------------------+
| Layer 0: -z-10 Base HTML Body (#08080D)                     |
+-------------------------------------------------------------+
```

### Layout Grid & Container Rules
- **Container Max-Width**: `max-w-7xl` (`1280px`) centered with `px-6 md:px-12 lg:px-16`.
- **Vertical Section Rhythm**: Each major section is `min-h-screen` (`100vh` or `100dvh`), vertically centered with flexbox or CSS grid: `py-24 md:py-32`.
- **Glassmorphism Spec**:
  ```css
  .glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
  ```

---

## 4. 3D Material Palette (PBR & Transmission)

The central 3D artifact reflects a monolithic, high-performance distributed core. It combines dual-material rendering: an outer frosted transmission glass shell and an inner metallic crystalline core.

### Material 1: Outer Glass Shell (`MeshPhysicalMaterial` / `MeshTransmissionMaterial`)
```typescript
export const glassMaterialProps = {
  transmission: 0.92,
  opacity: 1.0,
  transparent: true,
  roughness: 0.15,
  metalness: 0.05,
  ior: 1.45,                     // Architectural glass refraction index
  thickness: 1.2,
  specularIntensity: 1.0,
  specularColor: '#F5F5F7',
  chromaticAberration: 0.04,     // Subtle cinematic dispersion
  attenuationDistance: 0.6,
  attenuationColor: '#8B5CF6',   // Soft electric violet tint inside glass
};
```

### Material 2: Inner Monolithic Lattice (`MeshStandardMaterial`)
```typescript
export const coreMetallicProps = {
  color: '#0F0F17',
  metalness: 0.95,
  roughness: 0.22,
  emissive: '#8B5CF6',
  emissiveIntensity: 0.45,
  wireframe: false,
};
```

### Lighting Environment Parameters
```typescript
export const studioLightingConfig = {
  ambient: {
    intensity: 0.4,
    color: '#08080D',
  },
  keyLight: {
    position: [6, 8, 6],
    intensity: 2.2,
    color: '#FFFFFF',
  },
  fillLight: {
    position: [-8, -3, -4],
    intensity: 1.4,
    color: '#22D3EE', // Subtle cyan rim
  },
  accentLight: {
    position: [0, -6, 4],
    intensity: 1.8,
    color: '#8B5CF6', // Electric violet underglow
  },
};
```

---

## 5. Section-by-Section UI Specifications

### Section 01: Hero (`#hero`)
- **Height**: `min-h-screen` (Centered).
- **Layout**: Two-column asymmetric desktop layout (left: bold typography & CTA actions; right: unobstructed viewport for the 3D artifact).
- **Interactive States**:
  - Primary button: Solid violet fill with subtle cyan hover glow.
  - Secondary button: Glass border with slide-up text animation on hover.
  - Scroll indicator: Floating pill with vertical line animation pulsing at 1.5s interval.

### Section 02: About (`#about`)
- **Height**: `min-h-screen` (Centered).
- **Layout**: 3-column architecture breakdown (Column 1: Section index & headline; Column 2: Narrative copy; Column 3: High-impact engineering metrics like "99.99% Uptime", "50M+ Req/day").
- **Card Styling**: 1px subtle borders with glass backing, illuminating on hover.

### Section 03: Skills (`#skills`)
- **Height**: `min-h-screen` (Centered).
- **Layout**: 4-quadrant grid grouping skills by architectural tier (Languages, Backend Systems, Storage & Messaging, Cloud & Infrastructure).
- **Card Styling**: Interactive chip clusters with hover glow reflecting the technology's core status.

### Section 04: Projects (`#projects`)
- **Height**: `min-h-[160vh]` or multi-stage editorial stack.
- **Layout**: Alternating large-format editorial case-study cards. Left card / Right space allows the 3D artifact to remain partially visible and react to scroll position.
- **Card Details**: Metric pill ("40% Latency Reduction"), role tag, GitHub/Live action links, technology chips.

### Section 05: Experience (`#experience`)
- **Height**: `min-h-screen` (Centered).
- **Layout**: Clean vertical timeline with left-aligned date markers and right-aligned responsibilities and architectural achievements.
- **Visual Anchor**: Vertical 1px line connecting timeline nodes with violet active pulse.

### Section 06: Contact (`#contact`)
- **Height**: `min-h-screen` (Centered).
- **Layout**: Centered minimal communication terminal. Display headline: "LET'S BUILD RESILIENT SYSTEMS."
- **Interactive States**: One-click email copy button with instantaneous "Copied to Clipboard" visual feedback, active social links, and current availability status.

