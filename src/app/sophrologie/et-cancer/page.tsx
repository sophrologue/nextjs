import React from 'react';

const SophrologieEtCancerPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Sophrologie et Cancer</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            La sophrologie propose un accompagnement bienveillant aux personnes touchées par le cancer, 
            à tous les stades de la maladie et des traitements.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Accompagnement pendant les traitements</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Gestion de l'anxiété liée aux traitements</li>
            <li>Préparation mentale aux interventions</li>
            <li>Diminution des effets secondaires (nausées, fatigue)</li>
            <li>Maintien d'un état d'esprit positif</li>
            <li>Amélioration de la qualité du sommeil</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Soutien pour les proches</h2>
          <p className="text-lg mb-6">
            L'accompagnement sophrologique s'étend également aux proches et aidants, 
            les aidant à gérer leur stress et leurs émotions face à la maladie.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Après la maladie</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Reconstruction de l'estime de soi</li>
            <li>Gestion de l'angoisse de récidive</li>
            <li>Réappropriation du corps</li>
            <li>Projection dans l'avenir</li>
            <li>Retour à une vie sociale et professionnelle</li>
          </ul>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-lg font-medium text-green-800 mb-2">
              Un accompagnement complémentaire
            </p>
            <p className="text-green-700">
              La sophrologie vient en complément des soins médicaux et offre des outils 
              concrets pour mieux vivre cette épreuve avec sérénité et espoir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SophrologieEtCancerPage;