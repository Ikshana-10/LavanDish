import React from 'react';
import { ArrowUpRight, Linkedin, Heart } from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  LINKEDIN_PROFILE_URL
} from '../data/content';
import { Theme } from '../types';

interface FooterProps {
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const currentYear = 2026;

  const footerLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Mind to Reality', href: '#journey' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Vision', href: '#vision' }
  ];

  return (
    <footer
      className={`border-t transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-[#090510] border-[#a855f7]/15 text-[#9b8eb2]'
          : 'bg-[#f6f2f9] border-[#c084fc]/25 text-[#5e5073]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#e8c9a3] p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#0c0814] rounded-[7px] flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#e8c9a3] to-[#c084fc] font-bold text-xs">
                    LD
                  </span>
                </div>
              </div>
              <span
                className={`font-display font-bold text-2xl tracking-tight ${
                  theme === 'dark' ? 'text-[#f5edff]' : 'text-[#201330]'
                }`}
              >
                {BRAND_NAME}
              </span>
            </div>

            <p className="text-sm font-semibold text-[#c084fc] italic font-display">
              “{BRAND_TAGLINE}”
            </p>

            <p className="text-xs text-[#e8c9a3] font-medium tracking-wider font-display uppercase">
              “Your Vision. Our Code.”
            </p>

            <p className="text-xs text-[#9b8eb2] max-w-sm leading-relaxed font-sans">
              Tailored digital solutions, website prototypes, and modern web applications built
              around your vision and goals.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-pink-400 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3">
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 shadow-lg shadow-purple-600/25 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-[11px] text-slate-500">
              Direct founder dialogue · Zero intermediaries
            </span>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-xs gap-4 ${
            theme === 'dark' ? 'border-purple-950/80 text-slate-500' : 'border-purple-200 text-slate-500'
          }`}
        >
          <div>
            © {currentYear} {BRAND_NAME}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with passion & precision for digital pioneers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
