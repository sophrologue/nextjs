import React from 'react';

const SophrologyDiscoverySection = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-[#007562] rounded-full flex items-center justify-center mr-4">
          <span className="text-white text-xl">🔄</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">La découverte de la sophrologie</h2>
      </div>
      
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-8">
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          J&apos;ai découvert la sophrologie il y a plusieurs années, lors d&apos;une période de remise en question professionnelle et personnelle. Cette méthode m&apos;a permis de retrouver confiance, sérénité et d&apos;avancer vers de nouveaux projets. Aujourd&apos;hui, j&apos;ai à cœur de transmettre ces outils à mon tour.
        </p>
        
        <blockquote className="mt-6 text-gray-500 italic text-sm md:text-base">
          &quot;Ce n&apos;est pas le chemin qui est difficile, c&apos;est le difficile qui est chemin.&quot; – Søren Kierkegaard
        </blockquote>
        
        <p className="mt-4 text-gray-600 text-sm">
          La sophrologie s&apos;adresse à tous, quels que soient l&apos;âge et la situation.
        </p>
      </div>
    </div>
  );
};

export default SophrologyDiscoverySection;