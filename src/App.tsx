import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Journey } from './components/Journey';
import { VisionMessage } from './components/VisionMessage';
import { Showcase } from './components/Showcase';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Theme } from './types';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('LavanDish_theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('LavanDish_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.className =
        'bg-[#0c0814] text-[#ede8f5] antialiased selection:bg-[#c084fc]/30 selection:text-[#fbf7ff] transition-colors duration-500';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.className =
        'bg-[#fbf9fc] text-[#1c1427] antialiased selection:bg-[#c084fc]/20 selection:text-[#4a1d6e] transition-colors duration-500';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#0c0814] text-[#ede8f5]' : 'bg-[#fbf9fc] text-[#1c1427]'
      }`}
    >
      {/* Top Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <main id="main-content">
        <Hero theme={theme} />

        {/* Services Section */}
        <Services theme={theme} />

        {/* Interactive "From Your Mind to Reality" Section */}
        <Journey theme={theme} />

        {/* Vision-First Brand Message */}
        <VisionMessage theme={theme} />

        {/* Live Project Showcase */}
        <Showcase theme={theme} />

        {/* Pricing Section */}
        <Pricing theme={theme} />

        {/* Contact and LinkedIn Section */}
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
