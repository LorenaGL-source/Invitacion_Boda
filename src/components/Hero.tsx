import { useState, useEffect } from 'react';

interface HeroProps {
  names?: string;
}

const Hero = ({ names = "Ana & Carlos" }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/37a2f5903b6647fd867874a5e80fc0c3.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-soft" />
      <div className="absolute top-20 right-20 w-20 h-20 border border-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/15 rounded-full animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        {/* Pre-title */}
        <p className={`text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-0 ${loaded ? 'animate-fade-in-up' : ''}`}>
          Nos casamos
        </p>

        {/* Names */}
        <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 opacity-0 ${loaded ? 'animate-fade-in-up delay-200' : ''}`}>
          {names}
        </h1>

        {/* Decorative line */}
        <div className={`flex items-center justify-center gap-4 mb-6 opacity-0 ${loaded ? 'animate-fade-in-up delay-300' : ''}`}>
          <div className="w-16 h-px bg-white/50" />
          <span className="text-2xl">♥</span>
          <div className="w-16 h-px bg-white/50" />
        </div>

        {/* Date */}
        <p className={`text-lg md:text-xl font-light tracking-wider opacity-0 ${loaded ? 'animate-fade-in-up delay-400' : ''}`}>
          15 de Agosto, 2026
        </p>

        {/* Location */}
        <p className={`text-sm md:text-base mt-2 opacity-80 opacity-0 ${loaded ? 'animate-fade-in-up delay-500' : ''}`}>
          Hacienda El Oasis, Cieneguilla
        </p>

        {/* Scroll indicator */}
        <div className={`mt-16 opacity-0 ${loaded ? 'animate-fade-in-up delay-700' : ''}`}>
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-xs tracking-widest uppercase opacity-70">Descubre más</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
