import React from 'react';

const SophrologieEtDouleurPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto py-10">
        <div className="bg-gradient-to-r from-[#005649] to-[#007562] py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg text-center">
            Sophrologie et douleur
          </h1>
          
        </div>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <p className="text-lg text-gray-700 mb-6">
            La sophrologie aide à mieux vivre avec la douleur chronique et à retrouver de l'autonomie au quotidien.
          </p>
        </div>
        <div className="space-y-8">
          {/* Context */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-lg mb-4">
              La sophrologie aide les malades à remettre du confort de vie dans leur quotidien, à apprendre à repérer et anticiper la douleur, à atténuer les souffrances physiques et mentales.
            </p>
            <p className="text-lg mb-4">
              On apprend à remettre du calme dans le corps, de la détente, un sentiment positif. On travaille sur le système nerveux pour retrouver un mieux-être global.
            </p>
            <p className="text-lg">
              Le sophrologue accompagne le malade pour mieux gérer sa douleur : douleurs aiguës, douleurs chroniques, fibromyalgie, endométriose...
            </p>
          </div>

          {/* Comment la sophrologie aide-t-elle ? */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#007562]">Comment la sophrologie aide-t-elle ?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Relaxation profonde pour diminuer les tensions musculaires</li>
              <li>Techniques de respiration pour gérer les pics de douleur</li>
              <li>Visualisation positive pour modifier la perception de la douleur</li>
              <li>Renforcement des ressources personnelles</li>
              <li>Amélioration de la qualité du sommeil</li>
            </ul>
          </div>

          {/* Types de douleurs accompagnées */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#005649]">Types de douleurs accompagnées</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Douleurs chroniques (fibromyalgie, arthrose, endométriose, etc.)</li>
              <li>Migraines et céphalées</li>
              <li>Douleurs post-opératoires</li>
              <li>Douleurs liées au stress</li>
              <li>Douleurs neuropathiques</li>
            </ul>
          </div>

          {/* Déroulement d'une séance */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#007562]">Comment se déroule une séance ?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Entretien initial :</span> environ 1h à 1h30 pour définir l'objectif de votre accompagnement.
              </li>
              <li>
                <span className="font-semibold">Séances hebdomadaires :</span> d'une durée d'environ 1h, adaptées à vos besoins.
              </li>
              <li>
                <span className="font-semibold">Dialogue et orientation pédagogique :</span> chaque séance se termine par un échange pour ajuster l'accompagnement.
              </li>
              <li>
                <span className="font-semibold">Pratique quotidienne :</span> pour profiter pleinement des bénéfices de la sophrologie.
              </li>
            </ul>
          </div>

          {/* Medical disclaimer */}
          <div className="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-lg text-gray-700">
            <strong>Important :</strong> La sophrologie ne remplace pas un traitement médical mais constitue un accompagnement précieux dans la gestion globale de la douleur.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SophrologieEtDouleurPage;