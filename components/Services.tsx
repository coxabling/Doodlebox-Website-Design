import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => (
  <div className={`glass p-10 rounded-[2.5rem] transition-all duration-500 group hover:border-brand-primary/50 hover:-translate-y-3`}>
    <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-light-text mb-4 tracking-tight">{title}</h3>
    <p className="text-medium-text leading-relaxed font-medium">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: 'Next-Gen Engineering',
      description: 'Stunning, high-performance websites built with modern frameworks. We don\'t do templates; we craft bespoke engines.',
      delay: '0ms'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: 'Avant-Garde UX',
      description: 'Interfaces that feel alive. We focus on friction-less user flows that turn passive visitors into obsessed customers.',
      delay: '100ms'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'Hyper-Performance',
      description: 'Zero bloat policy. Your site will achieve perfect Lighthouse scores, ensuring lightning-fast loading and superior SEO.',
      delay: '200ms'
    }
  ];

  return (
    <section id="services" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-brand-primary font-black tracking-[0.3em] uppercase text-xs mb-4">What we do</p>
          <h2 className="text-4xl md:text-6xl font-black text-light-text mb-8">
            ELITE CRAFT FOR <br />
            <span className="text-gradient">MODERN BRANDS.</span>
          </h2>
          <p className="text-xl text-medium-text font-medium leading-relaxed">
            We've eliminated the agency bureaucracy to focus on what matters: pure, high-impact design and code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;