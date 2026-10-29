import React from 'react';
import { Activity, Cpu, Layers } from 'lucide-react';

interface ProjectPreviewFrameProps {
  indexNumber: string;
  category: string;
  title: string;
  metrics: string;
  techStack: ReadonlyArray<string>;
}

export function ProjectPreviewFrame({
  indexNumber,
  category,
  title,
  metrics,
  techStack,
}: ProjectPreviewFrameProps) {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-void-elevated border border-white/[0.08] group-hover:border-accent-violet/40 transition-all duration-500 shadow-2xl flex flex-col justify-between p-5 sm:p-6 select-none">
      {/* Dynamic SVG Blueprint Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id={`grid-${indexNumber}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id={`grad-${indexNumber}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${indexNumber})`} />
        <rect width="100%" height="100%" fill={`url(#grad-${indexNumber})`} />
      </svg>

      {/* Decorative Blueprint Technical Nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-dashed border-white/[0.08] group-hover:border-accent-violet/30 group-hover:scale-105 transition-all duration-700 flex items-center justify-center">
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-white/[0.06] flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-accent-violet/10 blur-xl group-hover:bg-accent-violet/20 transition-all" />
          </div>
        </div>
      </div>

      {/* Top Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-editorial-dim">
          <Activity className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="tracking-wider">SYS.SPEC // {indexNumber}</span>
        </div>
        <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] text-accent-violet">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase tracking-widest">{category}</span>
        </div>
      </div>

      {/* Center Architectural Identity Block */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4">
        <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-accent-cyan mb-3 group-hover:scale-110 transition-transform duration-300">
          <Cpu className="w-5 h-5 text-accent-violet" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-editorial-dim mb-1">
          Architectural Schematic Blueprint
        </span>
        <h4 className="text-base sm:text-lg font-bold text-editorial-primary max-w-sm line-clamp-1">
          {title.replace(/\[Placeholder:\s*/i, '').replace(/\]$/, '')}
        </h4>
      </div>

      {/* Bottom Metrics & Stack Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
        <div className="flex items-center gap-2 text-[11px] font-mono text-accent-cyan bg-white/[0.03] px-3 py-1 rounded-md border border-white/[0.06] w-fit">
          <Layers className="w-3 h-3 text-accent-violet" />
          <span className="truncate max-w-[240px]">{metrics}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-editorial-dim">
          <span>PRIMARY ENGINE:</span>
          <span className="text-editorial-primary font-semibold">{techStack[0] || 'Go'}</span>
        </div>
      </div>
    </div>
  );
}

