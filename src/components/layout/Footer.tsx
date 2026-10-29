import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Terminal, Globe2 } from 'lucide-react';
import { personalInfo, navItems } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-10 border-t border-white/[0.08] bg-void-elevated/70 backdrop-blur-xl py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-12">
        {/* Upper Tier: Architectural Identity & Quick Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & System Station Metadata */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan">
              <Terminal className="w-4 h-4 text-accent-violet" />
              <span>Beyond The Code // High-Throughput Node</span>
            </div>
            <p className="text-xs sm:text-sm text-editorial-muted max-w-sm leading-relaxed">
              Resilient distributed backends paired with spatial WebGL interactions. Built with
              zero runtime bloat.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-editorial-dim">
              <Globe2 className="w-3.5 h-3.5 text-accent-cyan" />
              <span>SYSTEM CLOCK: UTC-7 // STATION_SF</span>
            </div>
          </div>

          {/* Quick Navigation Directory */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-dim">
              Quick Directory
            </span>
            <ul className="space-y-1.5 font-mono text-xs">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-editorial-muted hover:text-accent-cyan transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent-violet text-[10px]">[{item.index}]</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Social Endpoints */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-dim">
              Network Channels
            </span>
            <div className="flex flex-wrap gap-2.5">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-accent-violet/40 text-xs font-mono text-editorial-muted hover:text-editorial-primary transition-all"
                >
                  <span>{social.platform}</span>
                  <ArrowUpRight className="w-3 h-3 text-editorial-dim group-hover:text-accent-cyan transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Tier: Copyright & Back to Top Anchor */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-editorial-dim">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear}</span>
            <span className="text-editorial-primary font-medium">{personalInfo.name}</span>
            <span>&bull; All architectural systems reserved.</span>
          </div>

          <Link
            href="#hero"
            aria-label="Return to top of document"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent-violet/40 text-editorial-muted hover:text-editorial-primary transition-all"
          >
            <span>TOP_OF_PAGE</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-accent-cyan" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
