import React from 'react';
import {
  Layout,
  Compass,
  Smartphone,
  Code2,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES, LINKEDIN_PROFILE_URL } from '../data/content';
import { Theme } from '../types';

interface ServicesProps {
  theme: Theme;
}

export const Services: React.FC<ServicesProps> = ({ theme }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-purple-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-pink-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-violet-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className={`absolute top-1/2 left-0 w-80 h-80 rounded-full blur-[140px] pointer-events-none ${
          theme === 'dark' ? 'bg-purple-900/15' : 'bg-purple-100/50'
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
          theme === 'dark' ? 'bg-pink-900/15' : 'bg-pink-100/40'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#a855f7]/25 bg-[#1f1333]/40 text-[#d8b4fe]">
            Bespoke Craftsmanship
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance ${
              theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
            }`}
          >
            What Can We Bring to Life?
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
            }`}
          >
            From your first idea to a polished digital experience, let’s create something meaningful.
          </p>
        </div>

        {/* 4 Animated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-[#140e24]/90 border-[#a855f7]/20 hover:border-[#e8c9a3]/40 hover:shadow-xl hover:shadow-purple-950/30'
                  : 'bg-white border-[#c084fc]/25 hover:border-[#a855f7]/40 hover:shadow-xl hover:shadow-purple-100/70'
              }`}
            >
              {/* Subtle top card glow line on hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#e8c9a3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                        theme === 'dark'
                          ? 'bg-[#1d1233] border-[#a855f7]/30 group-hover:bg-[#281845]'
                          : 'bg-[#f5effa] border-[#c084fc]/30 group-hover:bg-[#ede1f5]'
                      }`}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-medium text-[#c084fc]">
                      {service.number}
                    </span>
                  </div>

                  {/* Starting Price Range Badge */}
                  <div className="text-right">
                    <span
                      className={`text-xs block ${
                        theme === 'dark' ? 'text-[#9b8eb2]' : 'text-[#67587d]'
                      }`}
                    >
                      Starting from
                    </span>
                    <span className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#e8c9a3] via-[#c084fc] to-[#f472b6]">
                      {service.priceRange}
                    </span>
                  </div>
                </div>

                {/* Service Title & Subtitle */}
                <div className="mb-3">
                  <h3
                    className={`font-display text-2xl font-bold tracking-tight mb-1.5 ${
                      theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <span className="text-xs font-medium text-[#e8c9a3] tracking-wider uppercase font-sans">
                    {service.subtitle}
                  </span>
                </div>

                {/* Service Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                    theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
                  }`}
                >
                  {service.description}
                </p>

                {/* What's included checklist */}
                <div className="space-y-2.5 mb-8">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#c084fc] shrink-0 mt-0.5" />
                      <span className={theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Timeline & Discuss Your Project Button */}
              <div
                className={`pt-5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  theme === 'dark' ? 'border-[#a855f7]/15' : 'border-purple-100'
                }`}
              >
                <div
                  className={`flex items-center gap-1.5 text-xs ${
                    theme === 'dark' ? 'text-[#9b8eb2]' : 'text-[#67587d]'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 text-[#e8c9a3]" />
                  <span>Est. turnaround: {service.timeline}</span>
                </div>

                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 w-full sm:w-auto ${
                    theme === 'dark'
                      ? 'bg-[#201438] hover:bg-[#2b1b4a] text-[#f5edff] hover:text-[#e8c9a3] border border-[#a855f7]/30'
                      : 'bg-[#f3eaf8] hover:bg-[#ebdcf2] text-[#3b1259] border border-[#c084fc]/30'
                  }`}
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#e8c9a3]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing disclaimer note */}
        <div
          className={`p-4 rounded-xl border text-center text-xs sm:text-sm max-w-2xl mx-auto ${
            theme === 'dark'
              ? 'bg-purple-950/30 border-purple-900/40 text-slate-300'
              : 'bg-purple-50/70 border-purple-200 text-slate-700'
          }`}
        >
          <span className="font-semibold text-purple-400">Transparent Pricing Note: </span>
          Listed prices are starting price ranges. Final pricing depends on project requirements,
          features, complexity, and timeline.
        </div>
      </div>
    </section>
  );
};
