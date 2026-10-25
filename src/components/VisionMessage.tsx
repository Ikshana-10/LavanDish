import React from 'react';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';
import { LINKEDIN_PROFILE_URL } from '../data/content';
import { Theme } from '../types';

interface VisionMessageProps {
  theme: Theme;
}

export const VisionMessage: React.FC<VisionMessageProps> = ({ theme }) => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      {/* Dynamic flowing background gradient ribbons */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(65,19,95,0.25),rgba(12,8,20,0.98))]'
            : 'bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(235,221,248,0.7),rgba(251,249,252,0.98))]'
        }`}
      />

      {/* Decorative luminous wave lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
        <div className="w-[1200px] h-[300px] rounded-full border border-[#c084fc]/30 blur-[1px] rotate-12 scale-150 animate-pulse-glow" />
        <div className="w-[1000px] h-[240px] rounded-full border border-[#e8c9a3]/20 blur-[1px] -rotate-6 scale-125" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 border border-[#a855f7]/25 bg-[#1f1333]/40 text-[#d8b4fe]">
          <Compass className="w-3.5 h-3.5 text-[#e8c9a3]" />
          <span>Our Core Promise</span>
        </div>

        {/* Featured Big Slogan with Playfair Display */}
        <h2
          className={`font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-8 leading-[1.18] text-balance ${
            theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
          }`}
        >
          You Imagine It.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c9a3] via-[#c084fc] to-[#f472b6]">
            We Build It Around Your Vision.
          </span>
        </h2>

        {/* Supporting Paragraph */}
        <p
          className={`text-base sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-normal ${
            theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
          }`}
        >
          You know what you want to create. We’re here to understand that vision and help turn it
          into a digital experience. From the colors and layout to the way people interact with your
          product, our goal is to create something that feels true to your idea — and as
          professional as your ambition.
        </p>

        {/* Realistic commitment pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              theme === 'dark'
                ? 'bg-[#150d24]/80 border-[#a855f7]/20 text-[#c7bcd8]'
                : 'bg-white/90 border-[#c084fc]/25 text-[#48395b]'
            }`}
          >
            <HeartHandshake className="w-5 h-5 text-[#e8c9a3] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold block text-[#c084fc]">Deep Listening</span>
              We invest the time to unpack what makes your concept distinct and valuable.
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              theme === 'dark'
                ? 'bg-[#150d24]/80 border-[#a855f7]/20 text-[#c7bcd8]'
                : 'bg-white/90 border-[#c084fc]/25 text-[#48395b]'
            }`}
          >
            <ShieldCheck className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold block text-[#e8c9a3]">Practical Feasibility</span>
              Transparent guidance on what works best for your users, timeline, and budget.
            </div>
          </div>
        </div>

        {/* CTA: Let's Discuss Your Idea */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Let’s Discuss Your Idea</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
