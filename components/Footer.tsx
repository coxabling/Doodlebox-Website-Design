import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12L10 15L17 8" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-black text-lg tracking-tighter text-light-text">DOODLEBOX</span>
            </div>
            <p className="text-medium-text text-xs font-medium tracking-wide">&copy; {new Date().getFullYear()} Doodlebox Collective. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-medium-text hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-medium-text hover:text-brand-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-medium-text hover:text-brand-primary transition-colors">Careers</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black tracking-widest text-brand-primary uppercase">Status:</span>
            <div className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-light-text uppercase">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;