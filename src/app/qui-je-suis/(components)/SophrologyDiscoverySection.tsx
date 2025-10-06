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
          Puis, une épreuve personnelle m'a amenée à me questionner sur les nouveaux chapitres que je voulais ajouter à mon existence. C'est à ce moment-là, que j'ai découvert la <strong className="text-[#005649]">sophrologie</strong>, une discipline qui m'a aidée à me reconnecter avec moi-même, à prendre conscience de l'urgence de prendre soin de moi.
        </p>
        
        <blockquote className="border-l-4 border-[#007562] bg-[#007562]/5 p-6 rounded-r-lg mb-6">
          <p className="text-xl italic text-[#005649] font-semibold">
            "Prends soin de toi et apprends aux autres à prendre soin d'eux."
          </p>
        </blockquote>
        
        <p className="text-lg leading-relaxed text-gray-700">
          Le message était clair. J'avais besoin à mon tour de faire découvrir et transmettre au plus grand nombre tous les bienfaits quotidiens de cette pédagogie, de cet <strong className="text-[#007562]">apprentissage dynamique du bien-être</strong>.
        </p>
      </div>
    </div>
  );
};

export default SophrologyDiscoverySection;