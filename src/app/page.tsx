import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      {/* 
        Fixed Canvas Stage Placeholder 
        Layer: z-0, pointer-events-none
        In Phase 4, the interactive WebGL <SceneCanvas> will hydrate here.
      */}
      <div
        id="canvas-stage-placeholder"
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-violet/[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent-cyan/[0.03] blur-[130px] rounded-full" />
      </div>

      {/* Semantic Scrolling DOM Sections (z-10) */}
      <div className="relative z-10 w-full flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}
