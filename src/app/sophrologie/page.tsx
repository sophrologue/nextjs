import React from 'react';

const SophrologiePage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Sophrologie</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            Découvrez les bienfaits de la sophrologie, une méthode de relaxation dynamique 
            qui allie respiration, détente musculaire et visualisation positive.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Mes Services</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Séances individuelles personnalisées</li>
            <li>Accompagnement pour la gestion du stress</li>
            <li>Préparation mentale</li>
            <li>Amélioration du sommeil</li>
            <li>Développement de la confiance en soi</li>
          </ul>
          <p className="text-lg">
            Chaque séance est adaptée à vos besoins spécifiques pour vous aider 
            à retrouver équilibre et bien-être.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SophrologiePage;