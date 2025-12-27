import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    // Reveal animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-bg text-light-text font-sans antialiased selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header onOpenChat={() => setIsChatbotOpen(true)} />
      
      <main>
        <Hero onOpenChat={() => setIsChatbotOpen(true)} />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

      {/* Floating Chat Trigger */}
      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className={`fixed bottom-8 right-8 p-5 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 group z-[60] ${
          isChatbotOpen ? 'bg-white text-dark-bg rotate-90' : 'bg-brand-primary text-dark-bg'
        }`}
        aria-label="Toggle AI Assistant"
      >
        {isChatbotOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <div className="absolute inset-0 bg-white/40 blur-md rounded-full group-hover:bg-white/60 transition-all"></div>
            <svg className="w-7 h-7 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </div>
        )}
      </button>

      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          animation: reveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .tracking-tightest { letter-spacing: -0.05em; }
        ::selection {
          background-color: #00E5FF;
          color: #0B0F1A;
        }
      `}</style>
    </div>
  );
};

export default App;