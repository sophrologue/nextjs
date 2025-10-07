import React from 'react';

const StressAuTravailPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="bg-gradient-to-r from-[#005649] to-[#007562] py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg text-center">
          Stress au travail
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-lg text-gray-700 mb-6">
          La sophrologie aide à prévenir et à gérer le stress au travail, pour retrouver bien-être et efficacité.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Identifier les sources de stress</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Charge de travail excessive</li>
          <li>Pression temporelle et deadlines</li>
          <li>Relations difficiles avec les collègues</li>
          <li>Manque de reconnaissance</li>
          <li>Changements organisationnels</li>
          <li>Équilibre vie privée/vie professionnelle</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Techniques sophrologiques applicables</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Au bureau</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Exercices de respiration rapides</li>
              <li>Détente express entre deux réunions</li>
              <li>Visualisation positive avant un entretien</li>
              <li>Pause sophro de 5 minutes</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">À la maison</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Décompression en fin de journée</li>
              <li>Préparation mentale pour le lendemain</li>
              <li>Amélioration de la qualité du sommeil</li>
              <li>Renforcement de la confiance en soi</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Prévention du burn-out</h2>
        <p className="text-lg mb-6">
          La sophrologie aide à reconnaître les signaux d&apos;alarme et à mettre en place 
          des stratégies préventives pour éviter l&apos;épuisement professionnel.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Accompagnement personnalisé</h2>
        <div className="bg-orange-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Analyse de votre situation professionnelle</li>
            <li>Techniques adaptées à votre environnement de travail</li>
            <li>Exercices pratiques facilement intégrables</li>
            <li>Suivi régulier et ajustement des méthodes</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-red-50 p-6 rounded-lg">
          <p className="text-lg font-medium text-red-800 mb-2">
            Retrouvez votre sérénité professionnelle
          </p>
          <p className="text-red-700">
            Investir dans votre bien-être au travail, c&apos;est investir dans votre performance 
            et votre épanouissement personnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StressAuTravailPage;