import React from 'react';

const ProfessionalTransitionSection = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-[#005649] rounded-full flex items-center justify-center mr-4">
          <span className="text-white text-xl">🌱</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Ma nouvelle vocation</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          C'est dans cette suite logique, que j'ai quitté sans nostalgie mais avec fierté les cours de récré, les cartables, pour devenir à mon tour <strong className="text-[#005649]">sophrologue</strong>.
        </p>
        
        <p className="text-gray-700 text-base md:text-lg">
          J'ai choisi de me reconvertir dans l'accompagnement humain après une carrière dans l'enseignement.
        </p>
        
        <p className="mt-4 text-gray-600 text-sm">
          Cette transition m'a permis d'allier mes valeurs humaines et mon envie d'accompagner chacun vers un mieux-être.
        </p>
        
        {/* Credentials */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#005649]/5 rounded-lg p-6">
            <h3 className="font-semibold text-[#005649] mb-3 flex items-center">
              <span className="mr-2">🎓</span>
              Formation
            </h3>
            <p className="text-gray-700">
              Je suis diplômée du <strong>Centre Evolution Formation</strong> (Montereau).
            </p>
          </div>
          
          <div className="bg-[#007562]/5 rounded-lg p-6">
            <h3 className="font-semibold text-[#007562] mb-3 flex items-center">
              <span className="mr-2">🏛️</span>
              Appartenance Professionnelle
            </h3>
            <p className="text-gray-700">
              Membre de la <strong>Société Française de Sophrologie</strong>, je respecte le code de déontologie de la profession qui vous assure confidentialité et intégrité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTransitionSection;