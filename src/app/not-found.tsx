import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full glass-panel p-8 sm:p-10 rounded-2xl border border-white/[0.08] text-center flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-accent-violet/10 flex items-center justify-center text-accent-cyan">
          <Compass className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
            404 // Coordinate Out of Bounds
          </span>
          <h2 className="text-3xl font-bold text-editorial-primary mt-2">
            Route Not Found
          </h2>
          <p className="text-sm text-editorial-muted mt-2 leading-relaxed">
            The requested resource could not be resolved in this spatial namespace.
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-violet hover:bg-accent-violet/90 text-editorial-primary text-xs font-mono uppercase tracking-wider transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Origin</span>
        </Link>
      </div>
    </div>
  );
}

