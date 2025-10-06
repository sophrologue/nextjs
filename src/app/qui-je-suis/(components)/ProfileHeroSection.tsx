import React from 'react';
import Image from 'next/image';

interface ProfileHeroSectionProps {
  profileImage: any;
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Qui je suis ?
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-95 leading-relaxed">
              De l'enseignement à la sophrologie, un parcours guidé par la passion d'accompagner et de transmettre.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                Ancienne Enseignante
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                Centre Evolution Formation
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
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