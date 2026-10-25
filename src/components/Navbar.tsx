import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import { LINKEDIN_PROFILE_URL, BRAND_NAME } from '../data/content';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Mind to Reality', href: '#journey' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Vision', href: '#vision' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#0c0814]/90 backdrop-blur-md border-b border-[#a855f7]/15 shadow-lg shadow-purple-950/20'
            : 'bg-[#fbf9fc]/90 backdrop-blur-md border-b border-[#c084fc]/20 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-[#9333ea] via-[#c084fc] to-[#e8c9a3] transition-all duration-75 origin-left"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#e8c9a3] flex items-center justify-center p-[1px] shadow-sm">
              <div className="w-full h-full bg-[#0c0814] rounded-[7px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#e8c9a3] to-[#c084fc] font-bold text-xs tracking-wider">
                  LD
                </span>
              </div>
            </div>
            <span
              className={`font-display text-2xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                theme === 'dark'
                  ? 'text-[#f5edff] group-hover:text-[#e8c9a3]'
                  : 'text-[#231535] group-hover:text-[#6b21a8]'
              }`}
            >
              {BRAND_NAME}
            </span>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-[#c084fc]/50 ${
                  theme === 'dark'
                    ? 'text-[#b8accb] hover:text-[#f5edff]'
                    : 'text-[#564968] hover:text-[#231535]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Theme Toggle & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-xl transition-all duration-200 border cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#181026] border-[#a855f7]/25 text-[#e8c9a3] hover:bg-[#201534] hover:border-[#a855f7]/40'
                  : 'bg-[#f0eaf7] border-[#c084fc]/30 text-[#4a1d6e] hover:bg-[#e8def2]'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#be185d] hover:from-[#6d28d9] hover:via-[#7e22ce] hover:to-[#9d174d] shadow-md shadow-purple-900/20 hover:shadow-purple-900/35 transition-all duration-200 whitespace-nowrap shrink-0 transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`md:hidden p-2 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-[#181026] border-purple-900/40 text-[#ede8f5]'
                  : 'bg-white border-purple-200 text-[#231535]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
            theme === 'dark'
              ? 'bg-[#0d0918] border-purple-900/40 text-slate-200'
              : 'bg-[#faf5ff] border-purple-200 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-purple-950/60 hover:text-white'
                    : 'hover:bg-purple-100 hover:text-purple-950'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-purple-500/20">
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-md shadow-purple-600/30"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
