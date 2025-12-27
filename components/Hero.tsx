import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(#00E5FF 0.5px, transparent 0.5px)', 
            backgroundSize: '30px 30px',
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
          }}
        ></div>
        
        {/* Glow Blobs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>
        
        {/* Moving Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-bounce">
          <span className="flex h-2 w-2 rounded-full bg-brand-primary mr-3"></span>
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase">24 Hour Delivery Guarantee</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tightest leading-[0.9] text-light-text mb-8">
          BESPOKE <br />
          <span className="text-gradient">DESIGN.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-medium-text mb-12 font-medium leading-relaxed">
          Doodlebox is a small collective of elite designers obsessed with speed and beauty. We build high-conversion, award-worthy websites in a single day.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={onOpenChat}
            className="group relative px-10 py-5 bg-brand-primary text-dark-bg font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-primary/30"
          >
            <span className="relative z-10 flex items-center">
              Launch Your Site
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </span>
          </button>
          
          <a href="#portfolio" className="px-10 py-5 glass text-light-text font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center group">
            View Showreel
            <svg className="ml-2 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-30 animate-pulse">
        <span className="text-[10px] font-bold tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;