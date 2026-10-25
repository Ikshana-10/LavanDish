import React, { useState, useEffect } from 'react';
import {
  Lightbulb,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Play,
  Pause
} from 'lucide-react';
import { JOURNEY_STEPS, LINKEDIN_PROFILE_URL } from '../data/content';
import { Theme } from '../types';

interface JourneyProps {
  theme: Theme;
}

export const Journey: React.FC<JourneyProps> = ({ theme }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const currentStepData = JOURNEY_STEPS.find((s) => s.stepNumber === activeStep) || JOURNEY_STEPS[0];

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
          theme === 'dark' ? 'bg-purple-950/25' : 'bg-purple-100/60'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#e8c9a3]/30 bg-[#241638]/40 text-[#e8c9a3]">
            Metamorphosis
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance ${
              theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
            }`}
          >
            From Your Mind to Reality
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
            }`}
          >
            Experience how an initial spark evolves step-by-step into a living digital product.
          </p>
        </div>

        {/* 3-Step Journey Timeline Bar */}
        <div className="relative mb-14 max-w-4xl mx-auto">
          {/* Background Connecting Line */}
          <div
            className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full ${
              theme === 'dark' ? 'bg-[#22163b]' : 'bg-[#eadaf2]'
            }`}
          />

          {/* Active Glowing Progress Track */}
          <div
            className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#9333ea] via-[#c084fc] to-[#e8c9a3] transition-all duration-700 shadow-sm"
            style={{
              width: activeStep === 1 ? '16%' : activeStep === 2 ? '50%' : '100%'
            }}
          />

          {/* Step Nodes */}
          <div className="relative flex justify-between items-center">
            {JOURNEY_STEPS.map((step) => {
              const isActive = activeStep === step.stepNumber;
              const isPast = activeStep > step.stepNumber;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => {
                    setActiveStep(step.stepNumber);
                    setAutoPlay(false);
                  }}
                  className="flex flex-col items-center group cursor-pointer focus-visible:outline-none"
                  aria-label={`Jump to step ${step.stepNumber}: ${step.title}`}
                >
                  <div
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 ${
                      isActive
                        ? 'border-[#e8c9a3] bg-gradient-to-br from-[#7c3aed] to-[#be185d] text-white shadow-lg shadow-purple-950/40 scale-110'
                        : isPast
                        ? 'border-[#a855f7] bg-[#1d1233] text-[#e8c9a3]'
                        : theme === 'dark'
                        ? 'border-[#3a2656] bg-[#140c24] text-[#8e7ea5] hover:border-[#a855f7]'
                        : 'border-[#dccce8] bg-white text-[#7d6b91] hover:border-[#a855f7]'
                    }`}
                  >
                    {getStepIcon(step.stepNumber)}

                    {/* Ping ring for active step */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-2xl border border-[#e8c9a3]/60 animate-ping opacity-60 pointer-events-none" />
                    )}
                  </div>

                  <span
                    className={`mt-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors font-sans ${
                      isActive
                        ? 'text-[#e8c9a3] font-bold'
                        : theme === 'dark'
                        ? 'text-[#9b8eb2] group-hover:text-[#f5edff]'
                        : 'text-[#67587d] group-hover:text-[#201330]'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Transformation Card */}
        <div
          className={`max-w-4xl mx-auto rounded-3xl border p-8 sm:p-12 transition-all duration-500 backdrop-blur-xl ${
            theme === 'dark'
              ? 'bg-[#100b1e]/90 border-purple-900/50 shadow-2xl shadow-purple-950/50'
              : 'bg-white/95 border-purple-200 shadow-xl shadow-purple-100'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                  {currentStepData.label} OF 3
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-medium text-pink-500 tracking-wider">
                  Transformation Phase
                </span>
              </div>

              <h3
                className={`font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                {currentStepData.title}
              </h3>

              <p
                className={`text-base sm:text-lg leading-relaxed mb-6 font-medium ${
                  theme === 'dark' ? 'text-purple-200' : 'text-purple-950'
                }`}
              >
                “{currentStepData.description}”
              </p>

              <div className="space-y-3 mb-8">
                {currentStepData.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                    <span
                      className={`text-sm ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls & LinkedIn CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-md shadow-pink-500/25 transition-all"
                >
                  <span>Start with Step 1</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Auto-play toggle */}
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    theme === 'dark'
                      ? 'border-purple-800/40 text-purple-300 hover:bg-purple-950/60'
                      : 'border-purple-200 text-purple-800 hover:bg-purple-50'
                  }`}
                >
                  {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{autoPlay ? 'Pause Timeline' : 'Auto Play'}</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Visual Stage Preview */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div
                className={`w-full max-w-[320px] aspect-square rounded-2xl p-6 border relative flex flex-col justify-between overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-[#080511] border-purple-800/40'
                    : 'bg-[#faf5ff] border-purple-200'
                }`}
              >
                {/* Visualizer header */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
                    State Simulation
                  </span>
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                </div>

                {/* Interactive Dynamic Stage Art */}
                <div className="my-auto flex flex-col items-center justify-center text-center z-10 py-4">
                  {activeStep === 1 && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
                        <div className="relative w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center">
                          <Lightbulb className="w-7 h-7 text-amber-300 animate-bounce" />
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-amber-300">Rough Thought / Spark</div>
                      <div className="text-[11px] text-slate-400 max-w-[200px] mx-auto">
                        Raw sparks, user pain-points, and initial ambitions.
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl" />
                        <div className="relative w-14 h-14 rounded-xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center">
                          <Layers className="w-7 h-7 text-purple-300" />
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-purple-300">Architecture & Vision</div>
                      <div className="text-[11px] text-slate-400 max-w-[200px] mx-auto">
                        Layout blueprints, UX paths, color harmony, and goal alignment.
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl animate-pulse" />
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 border border-pink-300 flex items-center justify-center shadow-lg shadow-pink-500/40">
                          <Sparkles className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-pink-400">Living Digital Reality</div>
                      <div className="text-[11px] text-slate-400 max-w-[200px] mx-auto">
                        Polished, responsive, ready to engage real human users.
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer simulation status */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-purple-500/20 pt-3 z-10">
                  <span>Transformation:</span>
                  <span className="font-mono text-purple-300 font-medium">
                    {activeStep === 1 ? 'Phase 1/3 (Idea)' : activeStep === 2 ? 'Phase 2/3 (Vision)' : 'Phase 3/3 (Reality)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memorable Statement Quote Box */}
        <div className="mt-14 max-w-3xl mx-auto text-center px-4">
          <div
            className={`p-7 sm:p-9 rounded-2xl border relative overflow-hidden backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-[#150d24]/90 border-[#e8c9a3]/30 text-[#f5edff] shadow-xl shadow-purple-950/20'
                : 'bg-white/90 border-[#c084fc]/30 text-[#201330] shadow-sm'
            }`}
          >
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#e8c9a3] to-transparent mx-auto mb-4" />
            <p className="font-display text-xl sm:text-2xl lg:text-[1.7rem] font-medium italic tracking-tight leading-relaxed">
              “Your idea doesn’t need to be perfect when it starts. It just needs a place to begin.”
            </p>
            <span className="block mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8c9a3] font-sans">
              — The LavanDish Philosophy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
