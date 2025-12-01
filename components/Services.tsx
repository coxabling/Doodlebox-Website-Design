
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-card p-8 rounded-xl border border-gray-700 hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2">
    <div className="mb-4 text-brand-primary">{icon}</div>
    <h3 className="text-2xl font-bold text-light-text mb-2">{title}</h3>
    <p className="text-medium-text">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: 'Web Design & Development',
      description: 'Stunning, responsive websites crafted to represent your brand and engage your audience, built from scratch in record time.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: 'UI/UX Design',
      description: 'Intuitive and user-friendly interfaces that provide a seamless experience, ensuring your visitors convert into customers.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'Performance Optimization',
      description: 'We build for speed. Your website will be optimized for lightning-fast load times, improving user experience and SEO.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text">Our Specialities</h2>
          <p className="text-lg text-medium-text mt-4 max-w-2xl mx-auto">From concept to launch, we cover the essential ground to get you online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
