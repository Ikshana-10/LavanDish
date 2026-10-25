import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  decay: number;
  orbitRadius: number;
  angle: number;
  speed: number;
}

interface HeroOrbProps {
  theme: 'dark' | 'light';
}

export const HeroOrb: React.FC<HeroOrbProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);
  const [burstCount, setBurstCount] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 440);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 440);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Palette based on theme - lavish champagne, velvet plum, muted rose, and royal lavender
    const colors =
      theme === 'dark'
        ? ['#e8c9a3', '#c084fc', '#d8b4fe', '#f2b5c7', '#a855f7', '#fdf6eb']
        : ['#6b21a8', '#9333ea', '#a16207', '#be185d', '#7c3aed', '#4c1d95'];

    // Generate orbiting particles
    const particleCount = 42;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 60 + Math.random() * 110;
      particles.push({
        x: width / 2,
        y: height / 2,
        vx: 0,
        vy: 0,
        size: 1.4 + Math.random() * 2.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.25 + Math.random() * 0.65,
        maxAlpha: 0.75,
        decay: 0.005 + Math.random() * 0.01,
        orbitRadius: radius,
        angle: Math.random() * Math.PI * 2,
        speed: (0.007 + Math.random() * 0.013) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    let globalTick = 0;

    const render = () => {
      globalTick += 0.016;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Soft, eye-friendly ambient glow (neither too bright nor dull)
      const ambientGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        25,
        centerX,
        centerY,
        width * 0.48
      );
      if (theme === 'dark') {
        ambientGrad.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
        ambientGrad.addColorStop(0.45, 'rgba(232, 201, 163, 0.10)');
        ambientGrad.addColorStop(0.8, 'rgba(88, 28, 135, 0.04)');
        ambientGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        ambientGrad.addColorStop(0, 'rgba(192, 132, 252, 0.22)');
        ambientGrad.addColorStop(0.45, 'rgba(244, 166, 184, 0.12)');
        ambientGrad.addColorStop(0.8, 'rgba(232, 201, 163, 0.05)');
        ambientGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Flowing orbital ellipses (representing the mind & idea transformation)
      ctx.save();
      ctx.translate(centerX, centerY);

      // Ring 1 (tilted 25 deg)
      ctx.save();
      ctx.rotate(0.35 + Math.sin(globalTick * 0.4) * 0.05);
      ctx.beginPath();
      ctx.ellipse(0, 0, 140, 52, 0, 0, Math.PI * 2);
      ctx.strokeStyle = theme === 'dark' ? 'rgba(232, 201, 163, 0.22)' : 'rgba(161, 98, 7, 0.22)';
      ctx.lineWidth = 1.3;
      ctx.setLineDash([6, 8]);
      ctx.lineDashOffset = -globalTick * 12;
      ctx.stroke();
      ctx.restore();

      // Ring 2 (tilted -38 deg)
      ctx.save();
      ctx.rotate(-0.55 + Math.cos(globalTick * 0.3) * 0.06);
      ctx.beginPath();
      ctx.ellipse(0, 0, 165, 68, 0, 0, Math.PI * 2);
      ctx.strokeStyle = theme === 'dark' ? 'rgba(216, 180, 254, 0.24)' : 'rgba(147, 51, 234, 0.22)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 10]);
      ctx.lineDashOffset = globalTick * 16;
      ctx.stroke();
      ctx.restore();

      // Ring 3 (tilted 70 deg)
      ctx.save();
      ctx.rotate(1.15 + Math.sin(globalTick * 0.2) * 0.04);
      ctx.beginPath();
      ctx.ellipse(0, 0, 125, 45, 0, 0, Math.PI * 2);
      ctx.strokeStyle = theme === 'dark' ? 'rgba(242, 181, 199, 0.22)' : 'rgba(190, 24, 93, 0.20)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      ctx.restore();

      // 3. Central Core Energy Sphere (The "Idea Core") - Lavish jewel-like finish
      const corePulse = Math.sin(globalTick * 2) * 3.5;
      const coreRadius = 54 + corePulse;

      const sphereGrad = ctx.createRadialGradient(
        centerX - coreRadius * 0.3,
        centerY - coreRadius * 0.35,
        coreRadius * 0.1,
        centerX,
        centerY,
        coreRadius
      );

      if (theme === 'dark') {
        sphereGrad.addColorStop(0, '#fef9f2');
        sphereGrad.addColorStop(0.25, '#e8c9a3');
        sphereGrad.addColorStop(0.55, '#c084fc');
        sphereGrad.addColorStop(0.85, '#6b21a8');
        sphereGrad.addColorStop(1, '#2c0e44');
      } else {
        sphereGrad.addColorStop(0, '#ffffff');
        sphereGrad.addColorStop(0.25, '#fde68a');
        sphereGrad.addColorStop(0.55, '#a855f7');
        sphereGrad.addColorStop(0.85, '#581c87');
        sphereGrad.addColorStop(1, '#3b0764');
      }

      ctx.save();
      ctx.shadowColor = theme === 'dark' ? 'rgba(232, 201, 163, 0.5)' : 'rgba(168, 85, 247, 0.45)';
      ctx.shadowBlur = 28;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();
      ctx.restore();

      // Core interior glass reflection highlight
      ctx.beginPath();
      ctx.ellipse(
        centerX - coreRadius * 0.25,
        centerY - coreRadius * 0.3,
        coreRadius * 0.45,
        coreRadius * 0.2,
        -0.4,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fill();

      // 4. Orbiting and converging particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const currentR = p.orbitRadius + Math.sin(globalTick * 3 + p.angle) * 8;
        p.x = centerX + Math.cos(p.angle) * currentR;
        p.y = centerY + Math.sin(p.angle) * (currentR * 0.55);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [theme, burstCount]);

  const handleSparkIdea = () => {
    setInteractiveMode(true);
    setBurstCount((prev) => prev + 1);
    setTimeout(() => setInteractiveMode(false), 2400);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[460px] aspect-square mx-auto select-none"
    >
      {/* Background radial gradient mesh */}
      <div
        className={`absolute inset-0 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-gradient-to-tr from-purple-900/30 via-pink-600/20 to-indigo-900/30'
            : 'bg-gradient-to-tr from-purple-300/40 via-pink-200/50 to-indigo-200/40'
        } ${interactiveMode ? 'opacity-100 scale-110' : 'opacity-70 scale-100'}`}
      />

      {/* Main interactive canvas rendering the glowing digital orb & orbits */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
        onClick={handleSparkIdea}
        title="Click to spark an idea!"
      />

      {/* Interactive floating label indicator */}
      <div className="absolute -bottom-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border shadow-lg backdrop-blur-md transition-all duration-300 pointer-events-auto">
        <button
          onClick={handleSparkIdea}
          className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
            theme === 'dark'
              ? 'text-purple-300 hover:text-white bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full'
              : 'text-purple-900 hover:text-purple-950 bg-white/90 border border-purple-200 px-3 py-1 rounded-full'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{interactiveMode ? 'Idea Transforming…' : 'Interactive Idea Orb'}</span>
        </button>
      </div>
    </div>
  );
};
