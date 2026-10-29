import React from 'react';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent-cyan/90 mb-3">
        <span className="text-accent-violet font-semibold">[{index}]</span>
        <span className="inline-block w-8 h-[1px] bg-white/20" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-editorial-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

