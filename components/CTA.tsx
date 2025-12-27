import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <h2 className="text-4xl md:text-7xl font-black text-light-text mb-8 tracking-tightest leading-tight">
            READY FOR THE <br />
            <span className="text-gradient">NEXT LEVEL?</span>
          </h2>
          <p className="text-xl text-medium-text mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Don't let another day pass with a mediocre online presence. Secure your 24-hour sprint slot today and witness the transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
             <button className="bg-brand-primary text-dark-bg font-black px-12 py-5 rounded-2xl text-lg hover:scale-105 transition-all shadow-2xl shadow-brand-primary/20">
               Claim Your Slot
             </button>
             <p className="text-medium-text text-sm font-bold uppercase tracking-widest">or chat with our AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;