
import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center bg-dark-card border-2 border-brand-primary text-brand-primary font-bold text-xl rounded-full">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-light-text mb-2">{title}</h3>
    <p className="text-medium-text">{description}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text">Our 24-Hour Process</h2>
          <p className="text-lg text-medium-text mt-4 max-w-2xl mx-auto">Fast doesn't mean skipping steps. It means being efficient.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-5 top-5 bottom-5 w-0.5 bg-gray-700"></div>
          <div className="grid grid-cols-1 md:gap-y-24 gap-y-12">
            <ProcessStep 
              number="1"
              title="Discovery & Strategy"
              description="We start with a quick call to understand your vision, goals, and brand. You provide the content, and we map out the blueprint."
            />
            <ProcessStep 
              number="2"
              title="Design & Development"
              description="This is where the magic happens. Our team gets to work, crafting a beautiful design and writing clean code to bring it to life."
            />
            <ProcessStep 
              number="3"
              title="Review & Launch"
              description="We present the website for your review. After any final tweaks, we deploy it to the world, all within 24 hours of starting."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
