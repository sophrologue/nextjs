import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <div className=" bg-white bg-opacity-95 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#005649] mb-8">
          AMÉLIORER SON QUOTIDIEN
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Daily Life */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Vie Quotidienne</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Gestion du stress, de l&apos;anxiété, des émotions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Burn-out, Concentration, Mémoire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Sommeil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Confiance en soi, estime de soi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Relation à soi et aux autres</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-medium text-gray-800 mt-6 mb-3">Préparations</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Examens, concours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Permis de conduire, permis moto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Scolarité difficile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Accompagnement sportif et artistique</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Health & Wellbeing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Santé & Bien-être</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Accompagnement maladie (fibromyalgie, cancer...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Gestion de la douleur, douleurs post-opératoires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Gestion des phobies, des peurs, des colères</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Troubles alimentaires, pulsions alimentaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Accompagnement vers un changement important</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Life Transitions */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Transitions de Vie</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Futurs parents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Départ à la retraite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Déménagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Projets professionnels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Deuil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#005649] text-lg">•</span>
                <span>Divorce</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-4">
            Des solutions personnalisées pour chaque étape de votre vie
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#005649] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#004440] transition-colors shadow-lg"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;