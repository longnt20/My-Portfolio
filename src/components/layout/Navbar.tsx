'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems, personalInfo } from '@/data/portfolio';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Escape listener for accessible drawer closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-void/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Left: Brand Monogram & Availability Pill */}
        <div className="flex items-center gap-4">
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-editorial-primary font-bold tracking-tight text-base sm:text-lg"
            onClick={closeMenu}
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-accent-violet group-hover:bg-accent-cyan group-hover:rotate-45 transition-all duration-300" />
            <span className="tracking-tighter font-mono">BTC // SYS</span>
          </Link>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-accent-cyan font-medium">{personalInfo.availabilityLabel}</span>
          </div>
        </div>

        {/* Center: Numbered Editorial Anchor Links with Hover Underline Reveal */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel border-white/[0.08]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3.5 py-1 text-xs font-mono tracking-wider text-editorial-muted hover:text-editorial-primary transition-colors group flex items-center gap-1.5"
            >
              <span className="text-accent-violet text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
                {item.index}
              </span>
              <span>{item.label}</span>
              {/* Subtle hover underline micro-interaction */}
              <span className="absolute bottom-0 left-3.5 right-3.5 h-[1px] bg-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Mobile Drawer Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="group hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-accent-violet text-editorial-primary border border-white/[0.12] hover:border-accent-violet text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-accent-violet/25"
          >
            <span>Initialize</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Accessible Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-editorial-primary hover:border-accent-violet/50 focus:outline-none focus:ring-1 focus:ring-accent-violet"
            aria-label={isOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-x-0 top-[65px] bg-void/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 z-50"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="font-mono text-xs text-editorial-dim uppercase tracking-widest">
              Directory Navigation
            </span>
            <div className="flex items-center gap-2 text-[11px] font-mono text-accent-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span>{personalInfo.availabilityLabel}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between text-sm font-mono tracking-wider text-editorial-muted hover:text-accent-cyan transition-colors py-2 border-b border-white/[0.03]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-accent-violet">[{item.index}]</span>
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              href="#contact"
              onClick={closeMenu}
              className="w-full py-3 rounded-full bg-accent-violet hover:bg-accent-violet/90 text-editorial-primary text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent-violet/25"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
