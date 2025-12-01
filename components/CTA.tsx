
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
          <a
            href="mailto:hello@doodlebox.design"
            className="bg-white text-brand-secondary font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 inline-block"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
