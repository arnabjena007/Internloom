import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Find your dream career</h2>
      <p className="text-xl mb-8">5000+ companies hiring for internships & jobs</p>
      <SearchBar />
    </div>
  </div>
);

export default HeroSection;
