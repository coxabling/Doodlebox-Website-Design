
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg p-12 text-center shadow-2xl shadow-brand-primary/20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Launch Your Website Tomorrow?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Stop waiting and start building. Let's talk about your project and get your brand online in the next 24 hours.
          </p>
          {/* The chat button in App.tsx now handles contact initiatives */}
          <p className="text-white/90 text-sm mt-4">Click the chat icon at the bottom right to get a free quote!</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;