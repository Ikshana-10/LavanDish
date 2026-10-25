import React, { useState } from 'react';
import {
  Linkedin,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
  Send,
  MessageSquare
} from 'lucide-react';
import { LINKEDIN_PROFILE_URL, BRAND_NAME } from '../data/content';
import { Theme } from '../types';

interface ContactProps {
  theme: Theme;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [projectCategory, setProjectCategory] = useState<string>('Simple Landing Page');
  const [ideaNotes, setIdeaNotes] = useState<string>('');
  const [preferredStyle, setPreferredStyle] = useState<string>('Futuristic & Modern (Dark / Lavender)');
  const [copied, setCopied] = useState<boolean>(false);

  const formattedBrief = `Hi Ikshana,\n\nI visited LavanDish and would like to discuss my project:\n1. Idea / Project: ${
    ideaNotes.trim() || 'A new digital concept I want to bring to life.'
  }\n2. What I want to build: ${projectCategory}\n3. Preferred Style / Features: ${preferredStyle}\n\nLet’s discuss what’s possible!`;

  const handleCopyAndOpenLinkedIn = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedBrief).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
    }
    window.open(LINKEDIN_PROFILE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none ${
          theme === 'dark' ? 'bg-[#37134d]/25' : 'bg-[#eedcf7]/40'
        }`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#e8c9a3]/30 bg-[#241638]/40 text-[#e8c9a3]">
            <Linkedin className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance ${
              theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
            }`}
          >
            Bring Your Idea to Life
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
            }`}
          >
            Ready to start? Message me directly on LinkedIn. We’ll discuss what you imagine and how
            to make it a reality.
          </p>
        </div>

        {/* LinkedIn Connection Card & Interactive Brief Helper */}
        <div
          className={`rounded-3xl border p-8 sm:p-12 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#140e24]/90 border-[#a855f7]/25 shadow-purple-950/40'
              : 'bg-white/95 border-[#c084fc]/25 shadow-purple-100/60'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Direct Invitation & Steps */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#a855f7] to-[#e8c9a3] p-[2px] shadow-lg shadow-purple-950/30">
                    <div className="w-full h-full bg-[#0c0814] rounded-[14px] flex items-center justify-center">
                      <span className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-[#e8c9a3] to-[#c084fc]">
                        IS
                      </span>
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#0077b5] text-white shadow">
                    <Linkedin className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <h3
                    className={`font-display text-2xl font-bold tracking-tight ${
                      theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
                    }`}
                  >
                    Ikshana Sherin
                  </h3>
                  <p className="text-xs text-[#c084fc] font-medium font-sans">
                    Founder & Digital Craftsman · {BRAND_NAME}
                  </p>
                  <p className="text-xs text-[#9b8eb2]">Available for select client projects</p>
                </div>
              </div>

              <div
                className={`p-5 rounded-2xl border space-y-3 ${
                  theme === 'dark'
                    ? 'bg-[#1c122e]/60 border-[#a855f7]/20 text-[#c7bcd8]'
                    : 'bg-[#f8f2fb] border-[#c084fc]/25 text-[#48395b]'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8c9a3] font-sans">
                  <MessageSquare className="w-4 h-4" />
                  <span>When you message on LinkedIn, please include:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#c084fc]">1.</span>
                    <span>Your idea or project concept.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#c084fc]">2.</span>
                    <span>What you want to build (landing page, prototype, web app).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#c084fc]">3.</span>
                    <span>Any preferred design style, colors, or specific features.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Link buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm border transition-colors ${
                    theme === 'dark'
                      ? 'border-purple-800/40 text-purple-200 hover:bg-purple-900/40'
                      : 'border-purple-200 text-purple-900 hover:bg-purple-50'
                  }`}
                >
                  <span>Discuss Your Project</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Quick Brief Generator */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-[#0b0816] border-purple-800/40'
                  : 'bg-[#faf7ff] border-purple-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-purple-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Prepare Your LinkedIn Note</span>
                </span>
                <span className="text-[10px] text-slate-400">Optional Helper</span>
              </div>

              <div className="space-y-4 text-xs">
                {/* 1. What do you want to build */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1.5">
                    1. What would you like to create?
                  </label>
                  <select
                    value={projectCategory}
                    onChange={(e) => setProjectCategory(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border text-xs focus:outline-none focus:border-purple-400 ${
                      theme === 'dark'
                        ? 'bg-purple-950/40 border-purple-800/50 text-white'
                        : 'bg-white border-purple-200 text-slate-800'
                    }`}
                  >
                    <option value="Simple Landing Page (₹1,000–₹2,500)">
                      Simple Landing Page (₹1,000–₹2,500)
                    </option>
                    <option value="Website Prototype (₹2,000–₹5,000)">
                      Website Prototype (₹2,000–₹5,000)
                    </option>
                    <option value="Mobile App UI Prototype (₹1,500–₹4,000)">
                      Mobile App UI Prototype (₹1,500–₹4,000)
                    </option>
                    <option value="Basic Functional Web Application (₹3,000–₹8,000)">
                      Basic Functional Web Application (₹3,000–₹8,000)
                    </option>
                    <option value="Custom Vision or Unsure Yet">Custom Vision or Unsure Yet</option>
                  </select>
                </div>

                {/* 2. Idea or project details */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1.5">
                    2. Brief summary of your idea
                  </label>
                  <textarea
                    rows={2}
                    value={ideaNotes}
                    onChange={(e) => setIdeaNotes(e.target.value)}
                    placeholder="e.g., A minimalist portfolio for my photography agency with dark luxury mood..."
                    className={`w-full p-2.5 rounded-xl border text-xs focus:outline-none focus:border-purple-400 resize-none ${
                      theme === 'dark'
                        ? 'bg-purple-950/40 border-purple-800/50 text-white placeholder-slate-500'
                        : 'bg-white border-purple-200 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* 3. Style preference */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1.5">
                    3. Preferred design feel
                  </label>
                  <input
                    type="text"
                    value={preferredStyle}
                    onChange={(e) => setPreferredStyle(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border text-xs focus:outline-none focus:border-purple-400 ${
                      theme === 'dark'
                        ? 'bg-purple-950/40 border-purple-800/50 text-white'
                        : 'bg-white border-purple-200 text-slate-800'
                    }`}
                  />
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={handleCopyAndOpenLinkedIn}
                  className="w-full mt-2 py-3 px-4 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-md shadow-pink-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied Note! Opening LinkedIn...</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Note & Message on LinkedIn</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
