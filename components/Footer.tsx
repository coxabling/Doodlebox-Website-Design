
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-700">
      <div className="container mx-auto px-6 py-6 text-center text-medium-text">
        <p>&copy; {new Date().getFullYear()} Doodlebox. All rights reserved. Let's build something amazing.</p>
      </div>
    </footer>
  );
};

export default Footer;
