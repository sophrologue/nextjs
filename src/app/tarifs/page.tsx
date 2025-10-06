import React from 'react';

const TarifsPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Tarifs</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Séance Individuelle</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">60€</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Durée : 1h</li>
              <li>Suivi personnalisé</li>
              <li>Techniques adaptées</li>
              <li>Exercices à pratiquer</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Forfait 5 Séances</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">275€</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Économie de 25€</li>
              <li>Suivi régulier</li>
              <li>Progression optimisée</li>
              <li>Valable 6 mois</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg mb-4">
            Première consultation : entretien de 30 minutes offert
          </p>
          <p className="text-sm text-gray-600">
            Les tarifs sont donnés à titre indicatif et peuvent être ajustés selon vos besoins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarifsPage;