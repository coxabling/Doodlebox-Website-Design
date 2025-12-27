import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast }) => (
  <div className="flex group relative">
    <div className="flex flex-col items-center mr-8">
      <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center font-black text-brand-primary z-10 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-dark-bg transition-all duration-500">
        {number}
      </div>
      {!isLast && <div className="flex-1 w-[2px] bg-gradient-to-b from-brand-primary/50 to-transparent my-4"></div>}
    </div>
    <div className="pb-16 pt-1">
      <h3 className="text-2xl font-black text-light-text mb-4 tracking-tight">{title}</h3>
      <p className="text-lg text-medium-text max-w-xl font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-[#0C111B] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 sticky top-32 h-fit">
            <p className="text-brand-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Our Methodology</p>
            <h2 className="text-4xl md:text-6xl font-black text-light-text mb-8">
              THE <span className="text-gradient">SPRINT.</span>
            </h2>
            <p className="text-lg text-medium-text font-medium leading-relaxed">
              Precision beats volume. Our 24-hour delivery window is made possible by a hyper-focused workflow that ignores everything but the goal.
            </p>
            
            <div className="mt-12 p-8 glass rounded-3xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-light-text">Active Sprint Window</span>
              </div>
              <p className="text-sm text-medium-text">We take on only 2 projects per week to ensure 100% focus and zero latency.</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 lg:pl-20">
            <ProcessStep 
              number="01"
              title="Strategy Injection"
              description="A 30-minute high-fidelity briefing where we download your vision. We define the core user flows and technical requirements instantly."
            />
            <ProcessStep 
              number="02"
              title="Design & Dev Fusion"
              description="Design and engineering happen in parallel. Using our proprietary library of optimized components, we build the shell while styling the brand."
            />
            <ProcessStep 
              number="03"
              title="QA & Live Deployment"
              description="Automated testing for performance and responsiveness. Final review by our lead creative. Site goes live within 24 hours of step 01."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;