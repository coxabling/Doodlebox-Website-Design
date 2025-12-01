
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, avatarUrl }) => (
  <div className="bg-dark-card p-8 rounded-xl border border-gray-700 space-y-6 flex flex-col justify-between">
    <p className="text-lg text-light-text italic">"{quote}"</p>
    <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
      <img src={avatarUrl} alt={author} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="font-bold text-light-text">{author}</p>
        <p className="text-medium-text text-sm">{company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I was skeptical about the 24-hour promise, but Doodlebox delivered. Our new site is fast, beautiful, and was live before I finished my coffee the next day. Unbelievable.",
      author: 'Jane Doe',
      company: 'CEO, Innovate AI',
      avatarUrl: 'https://picsum.photos/seed/avatar1/100/100'
    },
    {
      quote: "The team's attention to detail is second to none. They understood our brand perfectly and translated it into a website that truly represents us. Highly recommend!",
      author: 'John Smith',
      company: 'Founder, Artisan Eats',
      avatarUrl: 'https://picsum.photos/seed/avatar2/100/100'
    },
     {
      quote: "Working with Doodlebox was a breeze. The process was so streamlined and efficient. We went from having no online presence to a professional website in a single day.",
      author: 'Emily White',
      company: 'Manager, NextGen Fitness',
      avatarUrl: 'https://picsum.photos/seed/avatar3/100/100'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text">What Our Clients Say</h2>
          <p className="text-lg text-medium-text mt-4 max-w-2xl mx-auto">Don't just take our word for it. Here's what people are saying about us.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
