import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/hero-bg.webp')`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-blue-950/70 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/10 shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            WELCOME TO <span className="text-blue-400">ERIC</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            We Help You Build Your Dreams
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://forms.gle/7WViUTKmxn69TW9p8" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Join ERIC
            </a>
            <a 
              href="#about" 
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;