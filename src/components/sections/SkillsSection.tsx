import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/portfolio';
import { Server, Monitor, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  Backend: Server,
  Frontend: Monitor,
  Database: Database,
  'Tools & Infrastructure': Wrench,
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen relative flex items-center justify-center py-28 sm:py-36 border-t border-white/[0.06]"
    >
      <MainContainer>
        <SectionHeading
          index="02"
          eyebrow="Capability Architecture"
          title="Engineered Skill Matrix & Toolchain"
          subtitle="Battle-tested production technologies organized by architectural tier. Zero arbitrary percentage meters."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Server;
            return (
              <div
                key={group.category}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-accent-violet/40 transition-all duration-500 flex flex-col justify-between gap-6 shadow-xl overflow-hidden"
              >
                {/* Left vertical accent indicator bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-violet to-accent-cyan scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                <div>
                  {/* Category Header with Index & Icon */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan group-hover:text-accent-violet transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-accent-violet uppercase tracking-widest block">
                          MODULE // {group.index}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-editorial-primary tracking-tight">
                          {group.category}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-editorial-dim px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.06]">
                      {group.skills.length} PRIMITIVES
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-light mb-6">
                    {group.description}
                  </p>

                  {/* Tactile Pill Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/pill px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide flex items-center gap-2 transition-all ${
                          skill.highlight
                            ? 'bg-accent-violet/15 text-editorial-primary border border-accent-violet/35 hover:bg-accent-violet/25'
                            : 'bg-white/[0.03] text-editorial-muted border border-white/[0.06] hover:text-editorial-primary hover:border-white/20'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            skill.highlight
                              ? 'bg-accent-cyan shadow-sm shadow-accent-cyan'
                              : 'bg-white/30 group-hover/pill:bg-accent-violet'
                          } transition-colors`}
                        />
                        <span>{skill.name}</span>
                        {skill.proficiency === 'core' && (
                          <span className="text-[9px] uppercase tracking-wider text-accent-cyan/80 font-bold ml-0.5">
                            CORE
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Micro Status */}
                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-editorial-dim">
                  <span>SPECIFICATION_STATUS</span>
                  <span className="text-accent-cyan">VERIFIED_PRODUCTION</span>
                </div>
              </div>
            );
          })}
        </div>
      </MainContainer>
    </section>
  );
}

