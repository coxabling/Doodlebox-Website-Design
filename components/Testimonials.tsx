import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, avatarUrl }) => (
  <div className="glass p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-white/20 transition-all duration-500">
    <div className="mb-10">
      <svg className="w-10 h-10 text-brand-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.9124 14 15.017 13.1046 15.017 12V10C15.017 8.89543 15.9124 8 17.017 8H19.017V6H16.017C14.3601 6 13.017 7.34315 13.017 9V12C13.017 12.5523 13.4647 13 14.017 13H15.017V14H13.017V18C13.017 19.6569 14.3601 21 16.017 21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017V14H8.017C6.91243 14 6.017 13.1046 6.017 12V10C6.017 8.89543 6.91243 8 8.017 8H10.017V6H7.017C5.36014 6 4.017 7.34315 4.017 9V12C4.017 12.5523 4.46472 13 5.017 13H6.017V14H4.017V18C4.017 19.6569 5.36014 21 7.017 21H5.017Z"/></svg>
      <p className="text-xl text-light-text font-medium leading-relaxed">"{quote}"</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="absolute inset-0 bg-brand-primary/20 blur-md rounded-full"></div>
        <img src={avatarUrl} alt={author} className="relative w-12 h-12 rounded-full object-cover border border-white/10" />
      </div>
      <div>
        <p className="font-black text-light-text tracking-tight">{author}</p>
        <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">{company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The 24-hour promise seemed impossible, but Doodlebox delivered a full-scale platform that outperformed our previous agency's 3-month project.",
      author: 'Jane Foster',
      company: 'Innovate AI',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
    },
    {
      quote: "Absolute precision. They understood our brand immediately and translated it into a design language that feels 5 years ahead of the competition.",
      author: 'Marcus Chen',
      company: 'Artisan Eats',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
    },
     {
      quote: "No fluff, no endless meetings. Just pure execution. The most efficient design experience I've had in 15 years of tech leadership.",
      author: 'Sarah Jenkins',
      company: 'NextGen Fit',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-brand-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Client Echo</p>
          <h2 className="text-4xl md:text-6xl font-black text-light-text mb-4">TRUSTED BY <span className="text-gradient">FOUNDERS.</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;