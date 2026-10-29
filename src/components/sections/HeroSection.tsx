import React from 'react';
import Link from 'next/link';
import { ArrowDownRight, Terminal } from 'lucide-react';
import { MainContainer } from '@/components/layout/MainContainer';
import { personalInfo } from '@/data/portfolio';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden"
    >
      <MainContainer className="flex-1 flex flex-col justify-between">
        {/* Upper Zone: Monospace Technical Coordinates & System Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-cyan">
            <Terminal className="w-3.5 h-3.5 text-accent-violet" />
            <span>LOC: {personalInfo.location}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-editorial-dim">
            <span>SPEC: DISTRIBUTED_CORE</span>
            <span>&bull;</span>
            <span className="text-accent-cyan">STABLE_CHANNEL</span>
          </div>
        </div>

        {/* Central Asymmetric Zone: 12-Column Grid with Center/Right Negative Space for 3D */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-12 items-center">
          {/* Left Column: Editorial Display Typography (Occupies 8 cols, leaving cols 9-12 completely unobstructed) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit">
              <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-editorial-muted">
                {personalInfo.role}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-bold tracking-tighter leading-[0.95] text-editorial-primary">
              BEYOND THE <br />
              <span className="italic font-light text-gradient-violet-cyan">
                CODE ARCHITECTURE.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-editorial-muted max-w-xl font-light leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Right Column: Intentionally open for 3D Canvas spatial integration */}
          <div className="hidden lg:block lg:col-span-4 pointer-events-none" aria-hidden="true">
            <div className="w-full aspect-square flex items-center justify-center opacity-30">
              <div className="w-48 h-48 rounded-full border border-dashed border-white/[0.1] animate-spin [animation-duration:40s]" />
            </div>
          </div>
        </div>

        {/* Lower Zone: Metrics Pill Row, Actions, and Animated CSS Scroll Indicator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-8 border-t border-white/[0.06]">
          {/* Actions & Metrics (cols 1-9) */}
          <div className="lg:col-span-9 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group px-6 py-3 rounded-full bg-accent-violet hover:bg-accent-violet/90 text-editorial-primary text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-accent-violet/25"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-editorial-primary text-xs font-mono uppercase tracking-wider transition-all"
              >
                Contact Endpoint
              </Link>
            </div>

            {/* Quick Micro Metric Indicator */}
            <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-editorial-muted pl-2 sm:border-l sm:border-white/[0.1]">
              <div>
                <span className="text-accent-violet font-semibold">{personalInfo.metrics[0].value}</span>
                <span className="text-editorial-dim ml-1.5 uppercase">{personalInfo.metrics[0].label}</span>
              </div>
              <div>
                <span className="text-accent-cyan font-semibold">{personalInfo.metrics[1].value}</span>
                <span className="text-editorial-dim ml-1.5 uppercase">{personalInfo.metrics[1].label}</span>
              </div>
            </div>
          </div>

          {/* Bottom-Right: Animated CSS Scroll Indicator (cols 10-12) */}
          <div className="lg:col-span-3 flex lg:justify-end items-center gap-3">
            <div className="flex flex-col items-start lg:items-end">
              <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim">
                SCROLL_DOWN
              </span>
              <span className="font-mono text-[9px] text-accent-cyan tracking-wider">
                CHOREOGRAPHY // 01
              </span>
            </div>
            {/* Vertical Hairline Track with Sliding Light Pulse */}
            <div className="relative w-[2px] h-12 bg-white/[0.1] rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-accent-violet to-accent-cyan rounded-full animate-bounce [animation-duration:2s]" />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
