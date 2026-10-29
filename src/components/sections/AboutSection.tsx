import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/portfolio';
import { Cpu, ShieldCheck, Zap, Network } from 'lucide-react';

const architecturalTenets = [
  {
    index: '01',
    icon: ShieldCheck,
    title: 'Failure Domain Isolation',
    description: 'Bulkheads and proactive backpressure preventing cascading outages in distributed topologies.',
  },
  {
    index: '02',
    icon: Network,
    title: 'Deterministic State Engines',
    description: 'Append-only event streaming with strict idempotency and consensus primitives.',
  },
  {
    index: '03',
    icon: Zap,
    title: 'Zero-Allocation Hotpaths',
    description: 'Memory layout optimization, pooling, and cache-conscious data access patterns.',
  },
  {
    index: '04',
    icon: Cpu,
    title: 'Real-Time Observability',
    description: 'Microsecond distributed tracing, automated SLA breach alerts, and metric cardinality control.',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center justify-center py-28 sm:py-36 border-t border-white/[0.06]"
    >
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column (lg:col-span-4): Sticky Section Header & Engineering Metadata */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
            <SectionHeading
              index="01"
              eyebrow="Architectural Ethos"
              title="Systems Built on First Principles"
              subtitle="Engineering for extreme concurrency, strict data guarantees, and operational simplicity."
            />

            {/* Quick Metrics Spec Box */}
            <div className="glass-panel p-5 rounded-2xl border-white/[0.06] flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                CORE METRICS SUMMARY
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {personalInfo.metrics.map((metric) => (
                  <div key={metric.label} className="border-b border-white/[0.04] pb-2 last:border-0 last:pb-0">
                    <span className="font-mono text-lg font-bold text-accent-violet">{metric.value}</span>
                    <p className="font-mono text-[11px] text-editorial-dim uppercase">{metric.label} &bull; {metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-7 lg:col-start-6): Editorial Narrative & Bento Grid */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-10">
            {/* Oversized Lead Statement */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-editorial-primary leading-snug tracking-tight">
              Software is not just lines of code; it is an active mechanical balance between
              <span className="text-gradient-violet-cyan font-normal"> network constraints, storage latency, and human intuition.</span>
            </p>

            {/* Editorial Body Narrative */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-editorial-muted leading-relaxed font-light">
              <div className="flex flex-col gap-4">
                <p>{personalInfo.bio[0]}</p>
                <p>{personalInfo.bio[1]}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>{personalInfo.bio[2]}</p>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-accent-cyan leading-relaxed">
                  {'// Focus: Scalable event brokers, lock-free concurrency, and WebGPU compute shaders.'}
                </div>
              </div>
            </div>

            {/* Highlighted Technical Interests Bento Grid */}
            <div className="pt-4 flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-editorial-dim">
                Architectural Tenets // Bento Framework
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {architecturalTenets.map((tenet) => {
                  const Icon = tenet.icon;
                  return (
                    <div
                      key={tenet.index}
                      className="group relative p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-accent-violet/40 transition-all duration-500 flex flex-col justify-between gap-3 overflow-hidden shadow-lg"
                    >
                      {/* Subtle hover radial glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-violet/10 rounded-full blur-2xl group-hover:bg-accent-violet/20 transition-all pointer-events-none" />

                      <div className="flex items-center justify-between relative z-10">
                        <span className="font-mono text-xs text-accent-violet font-semibold">
                          [{tenet.index}]
                        </span>
                        <Icon className="w-4 h-4 text-accent-cyan group-hover:scale-110 transition-transform" />
                      </div>

                      <div className="relative z-10">
                        <h4 className="text-sm font-semibold text-editorial-primary mb-1">
                          {tenet.title}
                        </h4>
                        <p className="text-xs text-editorial-muted leading-relaxed">
                          {tenet.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
