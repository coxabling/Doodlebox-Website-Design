
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

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <DoodleboxLogo />
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-medium-text hover:text-brand-primary transition-colors">Services</a>
          <a href="#process" className="text-medium-text hover:text-brand-primary transition-colors">Process</a>
          <a href="#portfolio" className="text-medium-text hover:text-brand-primary transition-colors">Portfolio</a>
          <a href="#contact" className="bg-brand-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-secondary transition-transform transform hover:scale-105">Get a Quote</a>
        </nav>
        <button className="md:hidden text-light-text">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
