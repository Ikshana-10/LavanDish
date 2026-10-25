import React from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { HeroOrb } from './HeroOrb';
import { LINKEDIN_PROFILE_URL, BRAND_NAME } from '../data/content';
import { Theme } from '../types';

interface HeroProps {
  theme: Theme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient light fields - soft and soothing for human eyes */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-gradient-to-tr from-[#3b1259]/30 via-[#501c65]/20 to-[#80485b]/15'
            : 'bg-gradient-to-tr from-[#e9d5ff]/40 via-[#fce7f3]/50 to-[#fed7aa]/30'
        }`}
      />

      <div
        className={`absolute bottom-10 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
          theme === 'dark' ? 'bg-[#4c1d55]/15' : 'bg-[#f3e8ff]/50'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Labels: AI-POWERED DIGITAL SOLUTIONS & AVAILABILITY */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#1a1029] border-[#a855f7]/25 text-[#d8b4fe]'
                    : 'bg-[#f3ebfa] border-[#c084fc]/30 text-[#581c87]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#e8c9a3]" />
                <span>AI-POWERED DIGITAL SOLUTIONS</span>
              </div>

              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium border ${
                  theme === 'dark'
                    ? 'bg-[#0f1f18] border-emerald-800/40 text-emerald-300'
                    : 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>NOW OPEN FOR PROJECTS</span>
              </div>
            </div>

            {/* Wordmark kicker */}
            <div className="mb-2">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#c084fc] font-display">
                {BRAND_NAME} · <span className="italic text-[#e8c9a3]">Idea into Reality</span>
              </span>
            </div>

            {/* Main Headline with Playfair Display */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight leading-[1.12] mb-6 text-balance ${
                theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
              }`}
            >
              Your Idea.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c9a3] via-[#c084fc] to-[#e879f9]">
                Our Digital Expertise.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal ${
                theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
              }`}
            >
              Have an idea? Bring us your vision. We’ll turn it into a professional
              digital experience designed around your goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl text-white bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#be185d] hover:from-[#6d28d9] hover:via-[#7e22ce] hover:to-[#9d174d] shadow-xl shadow-purple-950/25 hover:shadow-purple-950/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer group"
              >
                <span>Let’s Build Your Idea</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium rounded-xl border transition-all duration-200 whitespace-nowrap ${
                  theme === 'dark'
                    ? 'bg-[#181026] border-[#a855f7]/25 text-[#d8b4fe] hover:bg-[#221638] hover:text-white'
                    : 'bg-white border-[#c084fc]/30 text-[#4a1d6e] hover:bg-[#f6f0fa]'
                }`}
              >
                <span>Explore Our Services</span>
                <ChevronDown className="w-4 h-4 text-[#c084fc]" />
              </a>
            </div>

            {/* Trust points bar */}
            <div
              className={`mt-10 pt-6 border-t flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm ${
                theme === 'dark'
                  ? 'border-purple-950/70 text-[#9b8eb2]'
                  : 'border-purple-200/60 text-[#67587d]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                <span>Tailored for your vision</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e8c9a3]" />
                <span>Starting from ₹1,000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e879f9]" />
                <span>Direct collaboration on LinkedIn</span>
              </div>
            </div>
          </div>

          {/* Right Column: Unique Animated Centerpiece (Digital Orb / Energy Sphere) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroOrb theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};
