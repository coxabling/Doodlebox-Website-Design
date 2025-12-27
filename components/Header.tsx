import React, { useState, useEffect } from 'react';

const DoodleboxLogo: React.FC = () => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className="relative">
      <div className="absolute inset-0 bg-brand-primary/20 blur-lg rounded-full group-hover:bg-brand-primary/40 transition-all"></div>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative transform group-hover:rotate-12 transition-transform">
        <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12L10 15L17 8" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="font-black text-2xl tracking-tighter text-light-text">DOODLEBOX</span>
  </div>
);

interface HeaderProps {
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-dark-bg/60 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <DoodleboxLogo />
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavLinkClick(e, link.id)}
              className="text-sm font-medium text-medium-text hover:text-brand-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onOpenChat}
            className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 font-bold py-2.5 px-6 rounded-full hover:bg-brand-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/10"
          >
            Get a Quote
          </button>
        </nav>

        <button
          className="md:hidden p-3 text-light-text focus:outline-none glass rounded-xl active:scale-90 transition-transform flex items-center space-x-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <span className="text-[10px] font-black tracking-widest uppercase opacity-50 hidden sm:inline">Menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Improved Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Background Layers */}
        <div className={`absolute inset-0 bg-dark-bg/90 backdrop-blur-[40px] transition-opacity duration-700 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.12),transparent_60%)]"></div>
        
        <div className={`relative h-full flex flex-col p-8 transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          
          {/* Header Area */}
          <div className="flex justify-between items-center mb-12">
            <DoodleboxLogo />
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-light-text transition-all border border-white/10 active:scale-90"
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links with Staggered Entrance */}
          <nav className="flex flex-col space-y-2 flex-1">
            <div className="flex justify-between items-end mb-8">
              <p className="text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase opacity-50">Navigation</p>
              <div className="text-right">
                <p className="text-[10px] font-black tracking-widest text-medium-text uppercase">Sprint Clock</p>
                <p className="text-sm font-mono text-brand-primary">{time}</p>
              </div>
            </div>

            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className={`text-5xl font-black text-light-text hover:text-brand-primary transition-all duration-700 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${150 + (index * 100)}ms` }}
              >
                {link.name}<span className="text-brand-primary opacity-0 hover:opacity-100 transition-opacity ml-2">.</span>
              </a>
            ))}
            
            <div className={`pt-12 transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenChat(); }}
                className="w-full bg-brand-primary text-dark-bg font-black py-6 rounded-3xl text-xl shadow-2xl shadow-brand-primary/30 flex items-center justify-center group active:scale-95 transition-transform"
              >
                Start A Project
                <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </nav>

          {/* Footer Section */}
          <div className={`mt-auto pt-10 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-8 transition-all duration-1000 delay-700 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="space-y-3">
              <p className="text-[10px] font-black tracking-widest text-medium-text uppercase">Direct Access</p>
              <div className="flex flex-col space-y-1">
                <a href="mailto:hello@doodlebox.io" className="text-lg font-bold text-light-text hover:text-brand-primary transition-colors">hello@doodlebox.io</a>
                <p className="text-xs text-medium-text">+1 (555) DOODLE-BOX</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] font-black tracking-widest text-medium-text uppercase">Network</p>
              <div className="flex space-x-3">
                <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:text-dark-bg transition-all cursor-pointer group">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:text-dark-bg transition-all cursor-pointer group">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;