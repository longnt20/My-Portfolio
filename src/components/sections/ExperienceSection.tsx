import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceData } from '@/data/portfolio';
import { ChevronRight } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen relative flex items-center justify-center py-28 sm:py-36 border-t border-white/[0.06]"
    >
      <MainContainer>
        <SectionHeading
          index="04"
          eyebrow="Chronological Trajectory"
          title="Engineering Experience & Systems Leadership"
          subtitle="A track record of designing high-throughput backends and driving distributed infrastructure reliability."
        />

        <div className="relative ml-3 sm:ml-8 pl-6 sm:pl-12">
          {/* Fine continuous vertical axis line with gradient */}
          <div
            className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent-violet via-accent-cyan/50 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {experienceData.map((item) => (
              <div key={item.id} className="group relative">
                {/* Glowing Marker Dot on Axis */}
                <div
                  className={`absolute -left-[31px] sm:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    item.current
                      ? 'bg-accent-violet border-accent-cyan shadow-lg shadow-accent-violet/60 scale-110'
                      : 'bg-void border-white/30 group-hover:border-accent-violet group-hover:scale-125'
                  }`}
                  aria-hidden="true"
                />

                {/* Experience Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] group-hover:bg-white/[0.04] border border-white/[0.08] group-hover:border-accent-violet/30 transition-all duration-500 shadow-xl flex flex-col gap-5">
                  {/* Top Metadata Row: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan block mb-1">
                        {item.company} &bull; {item.location}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-editorial-primary tracking-tight">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      {item.current && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-editorial-muted">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="text-sm sm:text-base text-editorial-muted leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Impact Bullets */}
                  <ul className="space-y-2.5 pt-1">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-editorial-primary/85 leading-relaxed"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-accent-violet shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Associated Technologies */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.04]">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] text-[11px] font-mono text-editorial-dim border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
