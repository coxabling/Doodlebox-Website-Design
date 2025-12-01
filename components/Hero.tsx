
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-dark-bg z-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-transparent to-dark-bg opacity-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-light-text mb-4">
          Your Bespoke Website.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Delivered in 24 Hours.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-medium-text mb-8">
          Doodlebox is your go-to place for all things design. (Well, most things). We are a small group of designers that specialise in making beautiful, bespoke websites, incredibly fast.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-brand-primary text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-brand-secondary transition-transform transform hover:scale-105 shadow-lg shadow-brand-primary/20">
            Start Your Project
          </a>
          <a href="#portfolio" className="bg-dark-card text-light-text font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-700 transition-colors">
            See Our Work
          </a>
        </div>
      </div>
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
