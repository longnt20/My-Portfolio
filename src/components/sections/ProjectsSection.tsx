import React from 'react';
import { ArrowUpRight, Code2, Layers } from 'lucide-react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectPreviewFrame } from '@/components/ui/ProjectPreviewFrame';
import { projectsData } from '@/data/portfolio';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen relative flex items-center justify-center py-28 sm:py-36 border-t border-white/[0.06]"
    >
      <MainContainer>
        <SectionHeading
          index="03"
          eyebrow="Production Implementations"
          title="Selected Architectural Case Studies"
          subtitle="Real-world distributed systems, real-time message brokers, and spatial data visualizations."
        />

        <div className="flex flex-col gap-20 sm:gap-28">
          {projectsData.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
              >
                {/* Visual Blueprint Preview Frame (lg:col-span-7) */}
                <div
                  className={`lg:col-span-7 w-full ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectPreviewFrame
                    indexNumber={project.indexNumber}
                    category={project.category}
                    title={project.title}
                    metrics={project.metricsPlaceholder}
                    techStack={project.techStack}
                  />
                </div>

                {/* Case Study Metadata & Narrative (lg:col-span-5) */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Category & Index Header */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-accent-violet">
                      [{project.indexNumber} / 04]
                    </span>
                    <span className="h-3 w-[1px] bg-white/20" />
                    <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-editorial-primary group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title.replace(/\[Placeholder:\s*/i, '').replace(/\]$/, '')}
                  </h3>

                  {/* Architectural Summary */}
                  <p className="text-sm sm:text-base text-editorial-muted leading-relaxed font-light">
                    {project.summary.replace(/\[Placeholder:\s*/i, '').replace(/\]$/, '')}
                  </p>

                  {/* Verified Metric Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-editorial-primary w-fit">
                    <Layers className="w-3.5 h-3.5 text-accent-violet" />
                    <span className="text-accent-cyan font-medium">
                      {project.metricsPlaceholder.replace(/\[Placeholder:\s*/i, '').replace(/\]$/, '')}
                    </span>
                  </div>

                  {/* Technology Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-editorial-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Triggers */}
                  <div className="flex items-center gap-3 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-accent-violet hover:bg-accent-violet/90 text-editorial-primary text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-accent-violet/20"
                      >
                        <span>Live Verification</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-editorial-muted hover:text-editorial-primary text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Inspect Repo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </MainContainer>
    </section>
  );
}
