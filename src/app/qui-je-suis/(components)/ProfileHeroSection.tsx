import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProfileHeroSectionProps {
  profileImage: StaticImageData;
}

const ProfileHeroSection: React.FC<ProfileHeroSectionProps> = ({ profileImage }) => {
  return (
    <div className="bg-gradient-to-r from-[#005649] to-[#007562] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl backdrop-blur-sm">
              <Image 
                src={profileImage} 
                alt="Catherine Fabrici - Sophrologue" 
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white text-[#005649] px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
              Sophrologue Certifiée
            </div>
          </div>

          {/* Introduction */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Mon parcours, ma passion pour l&apos;accompagnement
            </h1>
            <p className="text-lg text-white/90 mb-6">
              J&apos;ai à cœur de vous accompagner avec bienveillance et professionnalisme.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white">
                Ancienne Enseignante
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white">
                Centre Evolution Formation
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white">
                Société Française de Sophrologie
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroSection;