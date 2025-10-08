import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#005649] to-[#007562] rounded-xl text-white p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Prêt(e) à découvrir la sophrologie ?
      </h2>
      <p className="text-lg mb-8 opacity-95 max-w-3xl mx-auto">
        Vous souhaitez prendre du recul, gagner en qualité de vie personnelle et professionnelle ? 
        Je vous propose un <strong>accompagnement personnalisé en sophrologie</strong> afin de créer un nouvel état de bien-être mental et corporel.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" className="bg-white text-[#005649] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
          Contactez-moi pour prendre rendez-vous
        </a>
        <a href="/tarifs" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#005649] transition-all duration-300">
          Voir les tarifs
        </a>
      </div>
    </div>
  );
};

export default CallToActionSection;