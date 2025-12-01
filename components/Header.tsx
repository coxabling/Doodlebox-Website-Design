import React, { useState, useEffect } from 'react';

const DoodleboxLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 12L10 15L17 8" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="font-bold text-2xl text-light-text">Doodlebox</span>
  </div>
);

interface HeaderProps {
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close menu on link click
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetAQuoteClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    onOpenChat();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <DoodleboxLogo />
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="text-medium-text hover:text-brand-primary transition-colors">Services</a>
          <a href="#process" onClick={(e) => handleNavLinkClick(e, 'process')} className="text-medium-text hover:text-brand-primary transition-colors">Process</a>
          <a href="#portfolio" onClick={(e) => handleNavLinkClick(e, 'portfolio')} className="text-medium-text hover:text-brand-primary transition-colors">Portfolio</a>
          <a href="#testimonials" onClick={(e) => handleNavLinkClick(e, 'testimonials')} className="text-medium-text hover:text-brand-primary transition-colors">Testimonials</a>
          <button onClick={handleGetAQuoteClick} className="bg-brand-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-secondary transition-transform transform hover:scale-105">Get a Quote</button>
        </nav>
        <button
          className="md:hidden text-light-text focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-dark-bg/95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8 animate-fade-in-down md:hidden">
          <button
            className="absolute top-6 right-6 text-light-text hover:text-brand-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <nav className="flex flex-col items-center space-y-6">
            <a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="text-light-text text-3xl font-semibold hover:text-brand-primary transition-colors">Services</a>
            <a href="#process" onClick={(e) => handleNavLinkClick(e, 'process')} className="text-light-text text-3xl font-semibold hover:text-brand-primary transition-colors">Process</a>
            <a href="#portfolio" onClick={(e) => handleNavLinkClick(e, 'portfolio')} className="text-light-text text-3xl font-semibold hover:text-brand-primary transition-colors">Portfolio</a>
            <a href="#testimonials" onClick={(e) => handleNavLinkClick(e, 'testimonials')} className="text-light-text text-3xl font-semibold hover:text-brand-primary transition-colors">Testimonials</a>
            <button onClick={handleGetAQuoteClick} className="mt-8 bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-2xl hover:bg-brand-secondary transition-transform transform hover:scale-105 shadow-lg">Get a Quote</button>
          </nav>
        </div>
      )}
      <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;