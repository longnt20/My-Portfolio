import React from 'react';
import { Mail, ArrowUpRight, FileDown, Terminal } from 'lucide-react';
import { MainContainer } from '@/components/layout/MainContainer';
import { personalInfo } from '@/data/portfolio';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen relative flex items-center justify-center py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Radial Backdrop Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-violet/[0.08] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <MainContainer>
        <div className="relative z-10 glass-panel p-8 sm:p-16 lg:p-20 rounded-3xl border border-white/[0.08] text-center flex flex-col items-center gap-8 max-w-4xl mx-auto shadow-2xl">
          {/* Eyebrow Terminal Coordinate */}
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-cyan">
            <Terminal className="w-3.5 h-3.5 text-accent-violet" />
            <span>DISPATCH // 05. TERMINAL_ENDPOINT</span>
          </div>

          {/* Oversized Closing Statement */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-editorial-primary max-w-3xl leading-[1.05]">
            LET&apos;S ARCHITECT <br />
            <span className="text-gradient-violet-cyan italic font-light">RESILIENT SYSTEMS.</span>
          </h2>

          <p className="text-base sm:text-lg text-editorial-muted max-w-xl leading-relaxed font-light">
            Available for principal backend architecture, distributed systems consulting, and
            high-throughput performance engineering.
          </p>

          {/* Central Actions Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            {/* Primary Email Action Button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group w-full sm:w-auto px-8 py-4 rounded-full bg-accent-violet hover:bg-accent-violet/90 text-editorial-primary text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-accent-violet/30"
            >
              <Mail className="w-4 h-4 text-accent-cyan group-hover:scale-110 transition-transform" />
              <span>Initiate Transmission</span>
            </a>

            {/* Conditional CV Download Button */}
            {personalInfo.cvUrl ? (
              <a
                href={personalInfo.cvUrl}
                download
                className="group w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-accent-violet/50 text-editorial-primary text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all"
              >
                <FileDown className="w-4 h-4 text-accent-violet group-hover:translate-y-0.5 transition-transform" />
                <span>Download Curriculum Vitae</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Curriculum Vitae available on direct request"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.02] border border-white/[0.06] text-editorial-dim text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
              >
                <FileDown className="w-4 h-4" />
                <span>CV UPON DIRECT REQUEST</span>
              </button>
            )}
          </div>

          {/* Social Network Pill Links */}
          <div className="pt-6 border-t border-white/[0.06] w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-editorial-dim">
            <span className="uppercase tracking-wider">VERIFIED NETWORK SIGNALS:</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-editorial-muted hover:text-editorial-primary transition-all"
                >
                  <span>{social.platform}</span>
                  <ArrowUpRight className="w-3 h-3 text-editorial-dim group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
