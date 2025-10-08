import React from 'react';

const HeroSection = () => {
  return (
    <div className="absolute left-0 top-0 md:top-10 md:rounded-tr-lg md:rounded-tr-lg w-full md:w-[700px] h-auto md:h-[200px] bg-gradient-to-l from-[#005649] to-[#007562] shadow-2xl backdrop-blur-sm border border-white/20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-6 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] group ">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full -translate-y-4 translate-x-4 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-full translate-y-4 -translate-x-4 blur-lg"></div>
      
      {/* Main title with enhanced typography */}
      <div className="flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-[48px] font-bold tracking-wide leading-tight drop-shadow-lg group-hover:scale-105 transition-transform duration-300 text-center">
          Sophrologie
        </h1>
        <div className="w-12 md:w-16 h-0.5 bg-white/60 mt-2 rounded-full"></div>
      </div>
      
      {/* Enhanced divider - Hidden on mobile */}
      <div className="relative hidden md:block">
        <div className="border-l border-white/40 h-12 w-px"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
      </div>
      
      {/* Enhanced quote section */}
      <blockquote className="mt-10 max-w-xl mx-auto text-center text-gray-600 italic text-base md:text-lg text-white flex flex-col gap-2">
        <p>J&apos;ai décidé d&apos;être heureux.
          C&apos;est bon pour la santé !</p>
        
        <footer className="mt-2 text-sm text-white/80 not-italic">
          – Voltaire
        </footer>
      </blockquote>
    </div>
  );
};

export default HeroSection;