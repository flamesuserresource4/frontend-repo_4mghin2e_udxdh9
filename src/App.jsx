import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Highlights />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
