# Animation Engine & Scroll Choreography: "Beyond The Code"

## 1. Lenis + GSAP ScrollTrigger + R3F Integration Architecture

To eliminate visual micro-stuttering and render tear across high-refresh-rate displays (60Hz, 120Hz, 144Hz ProMotion), the scroll loop, animation timeline, and WebGL render pass are locked to a single master clock: **`gsap.ticker`**.

```
                           +----------------------+
                           |   Window Wheel/Touch |
                           +----------+-----------+
                                      |
                                      v
                           +----------------------+
                           |  Lenis Scroll Engine |
                           |  (Smooth Momentum)   |
                           +----------+-----------+
                                      |
                   Scroll Position Update (lenis.on('scroll'))
                                      |
                                      v
    +--------------------------------------------------------------------+
    |                     GSAP TICKER MASTER LOOP                        |
    |                                                                    |
    |  gsap.ticker.add((time, deltaTime, frame) => {                     |
    |    lenis.raf(time * 1000);                                         |
    |    ScrollTrigger.update();                                         |
    |  });                                                               |
    +------------------+------------------------------+------------------+
                       |                              |
                       v                              v
    +-----------------------------------+  +-----------------------------+
    |   DOM ScrollTrigger Timelines     |  |   R3F Canvas Animation      |
    |   - Text line-by-line reveal      |  |   - Camera position lerp    |
    |   - Card glassmorphism blur-in    |  |   - Artifact rotation/scale |
    |   - Progress bar update           |  |   - Dynamic light accents   |
    +-----------------------------------+  +-----------------------------+
```

### Concrete Implementation Code Pattern

```typescript
// Inside SmoothScrollProvider.tsx
'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis with tuned inertia parameters
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });
    lenisRef.current = lenis;

    // 2. Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Drive Lenis through GSAP Ticker for frame synchronization
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    // Prevent lag spikes from triggering jarring jumps
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
```

---

## 2. Normalized Scroll Choreography Matrix (`0.00` to `1.00`)

The 3D scene responds directly to the scroll state using a single master timeline scrubbed continuously through `ScrollTrigger`.

```typescript
// Master ScrollTimeline scrubber
const masterTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#main-content',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.2, // Smooth damping scrub (1.2s lag)
  },
});
```

### Section Keyframe Choreography Table

| Scroll Range | Section Name | Camera Coordinates `[x, y, z]` | Camera LookAt `[x, y, z]` | Artifact Transform & Geometry State | Lighting & Shader Accent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`0.00 - 0.15`** | **Hero** | `[0.0, 0.0, 5.0]` | `[0.0, 0.0, 0.0]` | **State: Monolith**<br>Artifact centered. Continuous idle spin: `rotation.y += 0.003`. Mouse parallax dampens into position. | Key light high intensity (`2.2`). Violet emissive pulse at 0.45. |
| **`0.15 - 0.30`** | **About** | `[1.4, 0.3, 3.8]` | `[0.2, 0.0, 0.0]` | **State: Expansion**<br>Artifact rotates `45°` on Y, outer glass shell expands outward by `1.2x`, revealing internal lattice core. | Fill light cyan intensity increases to `1.8`. Refraction patterns become visible through glass. |
| **`0.30 - 0.50`** | **Skills** | `[-1.6, 1.2, 3.2]` | `[-0.2, 0.0, 0.0]` | **State: Segmentation**<br>Artifact breaks into 4 orbiting satellite modules arranged in an architectural cluster. | Ambient light dips (`0.2`); modular nodes illuminate with violet/cyan point lights. |
| **`0.50 - 0.75`** | **Projects** | `[2.2, -0.4, 3.6]` | `[0.5, 0.0, 0.0]` | **State: Lateral Stream**<br>Artifact shifts to screen-right, creating an editorial backdrop for project cards on screen-left. | Dynamic chromatic aberration shifts subtly (`0.04` &rarr; `0.08`) as cards scroll into focal range. |
| **`0.75 - 0.90`** | **Experience** | `[0.0, -1.8, 4.2]` | `[0.0, -0.5, 0.0]` | **State: Vertical Axis**<br>Modules assemble into a vertical pillar echoing the timeline trajectory in the DOM. | Vertical rim light sweeps along the axis, mimicking data flowing through a pipeline. |
| **`0.90 - 1.00`** | **Contact** | `[0.0, 0.0, 2.6]` | `[0.0, 0.0, 0.0]` | **State: Convergence**<br>Dramatic macro close-up. Outer and inner layers lock into unison. Fast subtle oscillation. | Full emissive bloom: violet (`#8B5CF6`) and cyan (`#22D3EE`) light flare. |

---

## 3. WebGL vs. DOM/CSS Responsibility Split

To guarantee 60fps performance and zero layout thrashing, DOM mutations and WebGL frame operations are strictly separated.

| Feature / Element | Engine / Layer | Implementation Mechanism | Performance Safeguards |
| :--- | :--- | :--- | :--- |
| **3D Camera Translation** | WebGL (R3F) | `gsap.to(camera.position, { scrub })` inside `useFrame` | Values interpolated via GSAP scalar variables; no React state re-renders. |
| **3D Mesh Rotation & Morphs** | WebGL (R3F) | Direct mutation of `meshRef.current.rotation` | Zero allocation inside render loop; reuse Vector3 and Euler objects. |
| **Mouse Hover Parallax** | WebGL (R3F) | Damped mouse delta lerping in `useFrame` | Clamped to `[-0.3, 0.3]` radians. Disabled if `isTouchDevice` is true. |
| **Editorial Typography Reveal** | DOM (HTML/CSS) | GSAP `ScrollTrigger.batch()` with `y: 40, opacity: 0` | Applied using CSS `transform` & `opacity` only; never triggers DOM reflows (`top`/`height`). |
| **Glassmorphism Blur Cards** | DOM (CSS) | `backdrop-filter: blur(16px)` with GPU acceleration | Capped to active viewports; avoid stacking more than 3 blurred surfaces. |
| **Project Card Parallax** | DOM (GSAP) | ScrollTrigger `scrub: true` transforming card Y offset | `will-change: transform` added during scroll, removed upon resting. |
| **Section Progress Bar** | DOM (CSS/GSAP) | Fixed 2px bar at page top tied to scroll progress | Hardware-accelerated `scaleX(progress)` with `transform-origin: left`. |
| **Interactive Buttons & Badges** | DOM (CSS) | Tailwind CSS pseudo-classes (`hover:`, `focus-visible:`) | Pure CSS transitions (`150ms ease-out`); zero JavaScript overhead. |

