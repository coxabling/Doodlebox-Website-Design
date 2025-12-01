
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg text-light-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
