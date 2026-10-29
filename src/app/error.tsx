'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected runtime errors
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full glass-panel p-8 rounded-2xl border border-rose-500/20 text-center flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-rose-400">
            Runtime Fault Detected
          </span>
          <h2 className="text-2xl font-bold text-editorial-primary mt-2">
            System Interrupt
          </h2>
          <p className="text-sm text-editorial-muted mt-2">
            An unexpected error occurred while rendering the interface pipeline.
          </p>
        </div>
        <button
          type="button"
          onClick={() => reset()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-editorial-primary text-xs font-mono uppercase tracking-wider transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Re-initialize State</span>
        </button>
      </div>
    </div>
  );
}

