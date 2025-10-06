import React from 'react';
import profileImage from '../(assets)/catherine-fabrici.png';

// Import components
import ProfileHeroSection from './(components)/ProfileHeroSection';
import TeachingBackgroundSection from './(components)/TeachingBackgroundSection';
import SophrologyDiscoverySection from './(components)/SophrologyDiscoverySection';
import ProfessionalTransitionSection from './(components)/ProfessionalTransitionSection';
import CallToActionSection from './(components)/CallToActionSection';

const QuiJeSuisPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Profile */}
      <ProfileHeroSection profileImage={profileImage} />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <TeachingBackgroundSection />
        <SophrologyDiscoverySection />
        <ProfessionalTransitionSection />
        <CallToActionSection />
      </div>
    </div>
  );
};

export default QuiJeSuisPage;