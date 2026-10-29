'use client';

import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Non-blocking quick release for DOM readiness
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (isLoaded) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void transition-opacity duration-500 pointer-events-none"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-accent-violet animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-editorial-dim">
          Initializing Engine...
        </span>
      </div>
    </div>
  );
}

