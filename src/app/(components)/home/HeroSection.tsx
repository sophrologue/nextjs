import React from 'react';

const HeroSection = () => {
  return (
    <div className="absolute right-0 md:right-0 top-0 md:top-24 md:rounded-tl-lg md:rounded-bl-lg w-full md:w-[700px] h-auto md:h-[200px] bg-gradient-to-l from-[#005649] to-[#007562] shadow-2xl backdrop-blur-sm border border-white/20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-6 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] group ">
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
      <blockquote className="text-white max-w-xs relative w-full md:w-auto">
        {/* Quote background accent */}
        <div className="absolute -inset-2 md:-inset-4 bg-white/5 rounded-lg backdrop-blur-sm"></div>
        
        <div className="relative z-10 p-3 md:p-4">
          {/* Opening quote mark */}
          <div className="text-2xl md:text-3xl font-serif text-white/40 leading-none mb-1">"</div>
          
          <p className="text-base md:text-lg font-medium leading-relaxed mb-3 text-white/95 text-center md:text-left">
            J'ai décidé d'être heureux. C'est bon pour la santé !
          </p>
          
          <cite className="text-sm font-light opacity-80 tracking-wide flex items-center justify-center md:justify-start gap-2">
            <div className="w-4 md:w-6 h-px bg-white/40"></div>
            <span>Voltaire</span>
          </cite>
          
          {/* Closing quote mark */}
          <div className="text-2xl md:text-3xl font-serif text-white/40 leading-none float-right -mt-4">"</div>
        </div>
      </blockquote>
    </div>
  );
};

export default HeroSection;