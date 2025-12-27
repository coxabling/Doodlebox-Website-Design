import React from 'react';

interface PortfolioItemProps {
  imageUrl: string;
  title: string;
  category: string;
  url: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imageUrl, title, category, url }) => (
  <div className="group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-brand-primary/50 transition-all duration-500 hover:-translate-y-2">
    <div className="aspect-[4/3] overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
      <p className="text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase mb-2">{category}</p>
      <h3 className="text-2xl font-black text-light-text mb-4">{title}</h3>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center text-sm font-bold text-light-text opacity-0 group-hover:opacity-100 transition-all hover:text-brand-primary"
      >
        Explore Project
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    {
      url: 'https://herriseafrica.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
      title: 'HER RISE AFRICA',
      category: 'Social Impact'
    },
    {
      url: 'https://highgraderadio.com/',
      imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
      title: 'HIGH GRADE RADIO',
      category: 'Broadcasting'
    },
    {
      url: 'https://tsarecords.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1619983081563-436f63e02242?auto=format&fit=crop&q=80&w=800',
      title: 'TSA RECORDS',
      category: 'Label Identity'
    },
    {
      url: 'https://namradiolive.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=800',
      title: 'NAM RADIO',
      category: 'Audio Streaming'
    },
    {
      url: 'https://aimusicstation.live/',
      imageUrl: 'https://images.unsplash.com/photo-1677442135753-194275451a89?auto=format&fit=crop&q=80&w=800',
      title: 'DESIGN AI',
      category: 'Platform Design'
    },
    {
      url: 'https://orbit360motion.co.uk/',
      imageUrl: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=800',
      title: 'ORBIT MOTION',
      category: '3D Visuals'
    },
    {
      url: 'https://musicstationradio.com/',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
      title: 'SOUND STATION',
      category: 'Creative Hub'
    },
    {
      url: 'https://shinefm.live/',
      imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800',
      title: 'SHINE DIGITAL',
      category: 'Agency Site'
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-light-text mb-6">
              LATEST <span className="text-gradient">DROP.</span>
            </h2>
            <p className="text-lg text-medium-text font-medium leading-relaxed">
              We don't just build sites; we craft digital identities. Each project below was delivered within a 24-hour design sprint.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <button className="text-brand-primary font-bold border-b-2 border-brand-primary/30 hover:border-brand-primary transition-all pb-1">
               Browse All Experiments
             </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;