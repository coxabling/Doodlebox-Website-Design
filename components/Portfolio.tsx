
import React from 'react';

interface PortfolioItemProps {
  imageUrl: string;
  title: string;
  category: string;
  url: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imageUrl, title, category, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg block">
    <img src={imageUrl} alt={title} className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-end p-6">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-brand-primary">{category}</p>
      </div>
    </div>
  </a>
);

const Portfolio: React.FC = () => {
  const projects = [
    {
      url: 'https://tsarecords.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1619983081563-436f63e02242?q=80&w=800&auto=format&fit=crop',
      title: 'TSA Records',
      category: 'Record Label Website'
    },
    {
      url: 'https://namradiolive.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=800&auto=format&fit=crop',
      title: 'Nam Radio Live',
      category: 'Live Radio Streaming'
    },
    {
      url: 'https://aimusicstation.live/',
      imageUrl: 'https://images.unsplash.com/photo-1677442135753-194275451a89?q=80&w=800&auto=format&fit=crop',
      title: 'AI Music Station',
      category: 'AI-Generated Music Platform'
    },
    {
      url: 'https://orbit360motion.co.uk/',
      imageUrl: 'https://images.unsplash.com/photo-1510519138101-f8d68407dcc7?q=80&w=800&auto=format&fit=crop', // Placeholder image for motion graphics
      title: 'Orbit 360 Motion',
      category: 'Motion Graphics & Animation'
    },
    {
      url: 'https://musicstationradio.com/',
      imageUrl: 'https://images.unsplash.com/photo-1493225450699-b148c3479601?q=80&w=800&auto=format&fit=crop', // Image for online radio
      title: 'Music Station Radio',
      category: 'Online Radio Platform'
    },
    {
      url: 'https://shinefm.live/',
      imageUrl: 'https://images.unsplash.com/photo-1546187747-9f6e7039a7b5?q=80&w=800&auto=format&fit=crop', // Image for radio station
      title: 'Shine FM Radio',
      category: 'Online Radio Station'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text">Work We're Proud Of</h2>
          <p className="text-lg text-medium-text mt-4 max-w-2xl mx-auto">
            A glimpse into the diverse range of bespoke websites we've delivered. Click on any project to see it live.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;