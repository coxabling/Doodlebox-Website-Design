import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleOpenChatbot = () => {
    setIsChatbotOpen(true);
  };

  return (
    <div className="bg-dark-bg text-light-text font-sans antialiased">
      <Header onOpenChat={handleOpenChatbot} />
      <main>
        <Hero onOpenChat={handleOpenChatbot} />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className="fixed bottom-6 right-6 p-4 bg-brand-primary text-white rounded-full shadow-lg hover:bg-brand-secondary transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-75"
        aria-label={isChatbotOpen ? "Close chatbot" : "Open chatbot"}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isChatbotOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default App;