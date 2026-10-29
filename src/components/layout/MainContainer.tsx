import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function MainContainer({ children, className = '', id }: MainContainerProps) {
  return (
    <div
      id={id}
      className={`w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10 ${className}`}
    >
      {children}
    </div>
  );
}

