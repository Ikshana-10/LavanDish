import React, { useState } from 'react';
import {
  Monitor,
  Smartphone,
  Bot,
  BarChart3,
  CheckCircle,
  Sparkles,
  Send,
  Zap,
  TrendingUp,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { SHOWCASE_PROJECTS, LINKEDIN_PROFILE_URL } from '../data/content';
import { Theme } from '../types';

interface ShowcaseProps {
  theme: Theme;
}

export const Showcase: React.FC<ShowcaseProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<string>('business-landing');

  // Interactive state for Mobile App Prototype demo
  const [completedHabits, setCompletedHabits] = useState<{ [key: string]: boolean }>({
    'deep-work': true,
    'hydration': false,
    'evening-walk': false
  });

  // Interactive state for AI Assistant demo
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I am Aura. How can I assist with your digital product architecture today?'
    }
  ]);
  const [chatInput, setChatInput] = useState<string>('');

  // Interactive state for Analytics Dashboard demo
  const [analyticsPeriod, setAnalyticsPeriod] = useState<'7D' | '30D' | '90D'>('30D');

  const toggleHabit = (id: string) => {
    setCompletedHabits((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSendPrompt = (promptText: string) => {
    if (!promptText.trim()) return;
    const newMsgs = [...chatMessages, { role: 'user' as const, text: promptText }];
    setChatMessages(newMsgs);
    setChatInput('');

    setTimeout(() => {
      let reply = 'Translating concept into wireframe components with high usability metrics.';
      if (promptText.toLowerCase().includes('color')) {
        reply = 'Generated palette: Midnight Purple (#090611), Lavender Glow (#c084fc), and Blush Rose (#f472b6).';
      } else if (promptText.toLowerCase().includes('roadmap') || promptText.toLowerCase().includes('launch')) {
        reply = 'Roadmap drafted: 1. Core user journey map -> 2. Prototype validation -> 3. Responsive deployment.';
      }
      setChatMessages((curr) => [...curr, { role: 'assistant', text: reply }]);
    }, 600);
  };

  const currentProject = SHOWCASE_PROJECTS.find((p) => p.id === activeTab) || SHOWCASE_PROJECTS[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'business-landing':
        return <Monitor className="w-4 h-4" />;
      case 'mobile-app':
        return <Smartphone className="w-4 h-4" />;
      case 'ai-assistant':
        return <Bot className="w-4 h-4" />;
      case 'analytics-dashboard':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#e8c9a3]/30 bg-[#241638]/40 text-[#e8c9a3]">
            Curated Portfolio
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance ${
              theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
            }`}
          >
            Live Project Showcase
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
            }`}
          >
            Explore sample digital experiences crafted with attention to responsive design,
            interactivity, and purpose.
          </p>
        </div>

        {/* Interactive Showcase Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 rounded-2xl max-w-2xl mx-auto border transition-colors bg-[#181028]/60 border-[#a855f7]/20">
          {SHOWCASE_PROJECTS.map((project) => {
            const isActive = project.id === activeTab;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap font-sans ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7c3aed] to-[#be185d] text-white shadow-md shadow-purple-950/30'
                    : theme === 'dark'
                    ? 'text-[#b8accb] hover:text-[#f5edff] hover:bg-[#25183d]'
                    : 'text-[#67587d] hover:text-[#201330] hover:bg-[#ebdcf2]'
                }`}
              >
                {getTabIcon(project.id)}
                <span>{project.category.replace(' Concept', '').replace(' Prototype', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Project Frame & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#2a1738] text-[#e8c9a3] border border-[#e8c9a3]/30 mb-4 font-sans">
              {currentProject.badge}
            </div>

            <h3
              className={`font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
              }`}
            >
              {currentProject.title}
            </h3>

            <p className="text-sm font-medium text-[#c084fc] mb-4">
              {currentProject.tagline}
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                theme === 'dark' ? 'text-[#c7bcd8]' : 'text-[#48395b]'
              }`}
            >
              {currentProject.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentProject.techHighlights.map((tech, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                    theme === 'dark'
                      ? 'bg-[#1b122c] border-[#a855f7]/25 text-[#d8b4fe]'
                      : 'bg-[#f5effa] border-[#c084fc]/30 text-[#4a1d6e]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#be185d] hover:from-[#6d28d9] hover:to-[#9d174d] transition-all shadow-md shadow-purple-950/30"
              >
                <span>Discuss Similar Concept</span>
                <ArrowUpRight className="w-4 h-4 text-[#e8c9a3]" />
              </a>

              <span className="text-xs text-[#9b8eb2] italic font-serif">
                *Illustrative prototype mockup
              </span>
            </div>
          </div>

          {/* Right Column: Interactive HTML/CSS Mockup Screen */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Desktop Browser Mockup Frame */}
            {currentProject.deviceType === 'desktop' && (
              <div
                className={`rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
                  theme === 'dark'
                    ? 'bg-[#0f0b1c] border-purple-900/50 shadow-purple-950/40'
                    : 'bg-white border-purple-200 shadow-purple-100'
                }`}
              >
                {/* Browser top chrome */}
                <div
                  className={`px-4 py-3 border-b flex items-center justify-between text-xs ${
                    theme === 'dark' ? 'bg-[#0a0714] border-purple-900/40' : 'bg-slate-100 border-purple-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div
                    className={`px-6 py-1 rounded-md text-[11px] font-mono max-w-xs truncate ${
                      theme === 'dark' ? 'bg-[#150f28] text-purple-300' : 'bg-white text-slate-600'
                    }`}
                  >
                    https://preview.LavanDish.studio/{currentProject.id}
                  </div>
                  <span className="text-[10px] text-pink-400 font-semibold uppercase">
                    Sample Design
                  </span>
                </div>

                {/* Inner Content for Desktop 1: Business Landing */}
                {activeTab === 'business-landing' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-purple-500/10 pb-4">
                      <span className="font-display font-bold text-lg text-purple-400">
                        Lumina Studio
                      </span>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span>Work</span>
                        <span>Expertise</span>
                        <span className="px-3 py-1 rounded-lg bg-purple-600 text-white font-medium">
                          Contact
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-pink-400 uppercase">
                        Digital Strategy & Experience
                      </span>
                      <h4 className="font-display text-2xl font-bold mt-1 mb-2">
                        Crafting Digital Presence for Tomorrow’s Brands
                      </h4>
                      <p className="text-xs text-slate-400 max-w-md">
                        We blend narrative design with modern web engineering to build brand
                        foundations that convert.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                        <div className="text-base font-bold text-purple-300">99.8%</div>
                        <div className="text-[10px] text-slate-400">Performance</div>
                      </div>
                      <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-center">
                        <div className="text-base font-bold text-pink-300">&lt; 1.2s</div>
                        <div className="text-[10px] text-slate-400">Load Time</div>
                      </div>
                      <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                        <div className="text-base font-bold text-indigo-300">100%</div>
                        <div className="text-[10px] text-slate-400">Responsive</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Inner Content for Desktop 2: AI Assistant */}
                {activeTab === 'ai-assistant' && (
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-purple-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-display font-bold text-sm">Aura Workspace Co-pilot</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Active Simulation
                      </span>
                    </div>

                    {/* Chat stream */}
                    <div className="space-y-3 min-h-[160px] max-h-[220px] overflow-y-auto pr-1">
                      {chatMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] text-xs p-3 rounded-2xl ${
                              msg.role === 'user'
                                ? 'bg-purple-600 text-white rounded-br-none'
                                : 'bg-purple-950/40 text-purple-200 border border-purple-800/40 rounded-bl-none'
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick prompt suggestions */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <button
                        onClick={() => handleSendPrompt('Recommend a color system for modern AI')}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 transition-colors"
                      >
                        + Suggest Color System
                      </button>
                      <button
                        onClick={() => handleSendPrompt('Draft a 3-phase prototype launch roadmap')}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/20 transition-colors"
                      >
                        + Prototype Roadmap
                      </button>
                    </div>

                    {/* Chat Input form */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt(chatInput)}
                        placeholder="Ask Aura or test an interactive response..."
                        className="flex-1 bg-purple-950/30 border border-purple-800/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-400"
                      />
                      <button
                        onClick={() => handleSendPrompt(chatInput)}
                        className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                        aria-label="Send message"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Inner Content for Desktop 3: Analytics Dashboard */}
                {activeTab === 'analytics-dashboard' && (
                  <div className="p-6 sm:p-8 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-purple-500/10">
                      <div>
                        <h4 className="font-display font-bold text-base">MetricFlow Telemetry</h4>
                        <span className="text-[10px] text-slate-400">Live Workspace Monitoring</span>
                      </div>
                      <div className="flex items-center gap-1 bg-purple-950/50 p-1 rounded-lg border border-purple-800/40 text-xs">
                        {(['7D', '30D', '90D'] as const).map((period) => (
                          <button
                            key={period}
                            onClick={() => setAnalyticsPeriod(period)}
                            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                              analyticsPeriod === period
                                ? 'bg-purple-600 text-white'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {period}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/30">
                        <span className="text-[10px] text-slate-400 block">Total Inbound</span>
                        <span className="text-lg font-bold font-mono text-purple-300">
                          {analyticsPeriod === '7D' ? '1,420' : analyticsPeriod === '30D' ? '6,840' : '21,390'}
                        </span>
                        <span className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-2.5 h-2.5" /> +18.4%
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/30">
                        <span className="text-[10px] text-slate-400 block">Avg. Session</span>
                        <span className="text-lg font-bold font-mono text-pink-300">3m 42s</span>
                        <span className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <Zap className="w-2.5 h-2.5" /> Top tier
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/30">
                        <span className="text-[10px] text-slate-400 block">Conversion</span>
                        <span className="text-lg font-bold font-mono text-indigo-300">5.82%</span>
                        <span className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-2.5 h-2.5" /> +2.1%
                        </span>
                      </div>
                    </div>

                    {/* Bar visualization */}
                    <div className="pt-2">
                      <div className="text-[10px] text-slate-400 mb-2">Weekly Interaction Volume</div>
                      <div className="flex items-end justify-between h-20 gap-2 px-2 pt-2 bg-purple-950/20 rounded-xl border border-purple-900/30">
                        {[45, 60, 35, 75, 90, 65, 85].map((val, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                            <div
                              className="w-full bg-gradient-to-t from-purple-600 to-pink-500 rounded-t transition-all duration-300 hover:brightness-125"
                              style={{ height: `${val}%` }}
                            />
                            <span className="text-[8px] text-slate-400 font-mono">D{i + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mobile App Mockup Screen */}
            {currentProject.deviceType === 'mobile' && (
              <div className="flex justify-center">
                <div
                  className={`w-full max-w-[290px] rounded-[36px] border-[6px] shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                    theme === 'dark'
                      ? 'bg-[#0f0b1c] border-purple-900/60 shadow-purple-950/50'
                      : 'bg-white border-purple-300 shadow-purple-200'
                  }`}
                >
                  {/* Phone Notch/Dynamic Island */}
                  <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="font-semibold font-mono">09:41</span>
                    <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
                    <span>5G · 100%</span>
                  </div>

                  {/* App Screen Content */}
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400">Good morning</span>
                        <h5 className="font-display font-bold text-sm text-purple-300">Pulse Daily Focus</h5>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] border border-amber-500/20">
                        <Flame className="w-3 h-3" />
                        <span>14 Days</span>
                      </div>
                    </div>

                    {/* Progress Circle Card */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-semibold text-white">Daily Target</div>
                        <div className="text-[10px] text-purple-200">2 of 3 completed</div>
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-pink-400 flex items-center justify-center font-bold text-xs text-white">
                        67%
                      </div>
                    </div>

                    {/* Interactive Habit Checklist */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Today's Focus
                      </div>

                      {[
                        { id: 'deep-work', title: 'Deep Work Session (90m)', category: 'Focus' },
                        { id: 'hydration', title: 'Mindful Hydration (2.5L)', category: 'Health' },
                        { id: 'evening-walk', title: 'Sunset Movement Walk', category: 'Energy' }
                      ].map((habit) => (
                        <button
                          key={habit.id}
                          onClick={() => toggleHabit(habit.id)}
                          className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                            completedHabits[habit.id]
                              ? 'bg-purple-950/60 border-purple-600/50 text-purple-200'
                              : 'bg-purple-950/20 border-purple-900/30 text-slate-400 hover:border-purple-700'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-medium text-white">{habit.title}</div>
                            <div className="text-[9px] text-slate-400">{habit.category}</div>
                          </div>
                          <CheckCircle
                            className={`w-4 h-4 transition-colors ${
                              completedHabits[habit.id] ? 'text-pink-400' : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <div className="text-[9px] text-center text-slate-500 pt-1">
                      Tap any habit to toggle interactive completion!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
