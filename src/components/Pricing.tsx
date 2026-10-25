import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Clock, HelpCircle } from 'lucide-react';
import { SERVICES, LINKEDIN_PROFILE_URL } from '../data/content';
import { Theme } from '../types';

interface PricingProps {
  theme: Theme;
}

export const Pricing: React.FC<PricingProps> = ({ theme }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('website-prototype');

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-[150px] pointer-events-none ${
          theme === 'dark' ? 'bg-purple-950/30' : 'bg-purple-100/60'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#e8c9a3]/30 bg-[#241638]/40 text-[#e8c9a3]">
            Investment & Possibilities
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance ${
              theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
            }`}
          >
            Simple Starting Prices. Clear Possibilities.
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
            }`}
          >
            Clear starting price ranges designed to help you plan your prototype or digital build
            with confidence.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? theme === 'dark'
                      ? 'bg-gradient-to-b from-[#1b112e] to-[#120b22] border-[#e8c9a3]/50 shadow-xl shadow-purple-950/40 -translate-y-1'
                      : 'bg-gradient-to-b from-[#f9f3fc] to-white border-[#a855f7]/40 shadow-xl shadow-purple-100/70 -translate-y-1'
                    : theme === 'dark'
                    ? 'bg-[#140e24]/70 border-[#a855f7]/20 hover:border-[#a855f7]/40'
                    : 'bg-white border-[#c084fc]/25 hover:border-[#a855f7]/35'
                }`}
              >
                {/* Popular or Highlight Indicator */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#7c3aed] to-[#be185d] text-white shadow-md font-sans">
                    Most Requested
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#c084fc]">
                      SERVICE {service.number}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#9b8eb2]">
                      <Clock className="w-3 h-3 text-[#e8c9a3]" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  <h3
                    className={`font-display text-xl font-bold tracking-tight mb-2 ${
                      theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-6 line-clamp-3 font-normal ${
                      theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Starting Price Box */}
                  <div
                    className={`p-3.5 rounded-2xl border mb-6 text-center ${
                      theme === 'dark'
                        ? 'bg-[#1d1233]/70 border-[#a855f7]/25'
                        : 'bg-[#f8f2fb] border-[#c084fc]/25'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider block text-[#9b8eb2] font-medium font-sans">
                      Starting Range
                    </span>
                    <span className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#e8c9a3] via-[#c084fc] to-[#f472b6]">
                      {service.priceRange}
                    </span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#e8c9a3] shrink-0 mt-0.5" />
                        <span className={theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA button to Discuss on LinkedIn */}
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all text-center ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#7c3aed] to-[#be185d] hover:from-[#6d28d9] hover:to-[#9d174d] text-white shadow-md shadow-purple-950/30'
                      : theme === 'dark'
                      ? 'bg-[#201438] hover:bg-[#2b1b4a] text-[#f5edff] border border-[#a855f7]/30'
                      : 'bg-[#f3eaf8] hover:bg-[#ebdcf2] text-[#3b1259] border border-[#c084fc]/30'
                  }`}
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e8c9a3]" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Mandatory Note Box */}
        <div
          className={`max-w-3xl mx-auto p-6 rounded-2xl border text-center relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-[#120b22]/80 border-purple-800/40 text-slate-300'
              : 'bg-purple-50/90 border-purple-200 text-slate-800'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-pink-400" />
            <span className="font-semibold text-sm text-purple-400">Pricing Transparency</span>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            “Every project is different. Final pricing depends on your requirements, features,
            complexity, and timeline. Contact us to discuss your idea and receive a suitable quote.”
          </p>

          <div className="mt-4">
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
            >
              <span>Have questions about your project scope? Ask directly on LinkedIn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
