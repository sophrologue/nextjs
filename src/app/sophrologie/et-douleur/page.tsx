import React from 'react';

const SophrologieEtDouleurPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Sophrologie et Douleur</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            La sophrologie offre des techniques efficaces pour accompagner la gestion de la douleur 
            chronique et aiguë, en complément des traitements médicaux traditionnels.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Comment la sophrologie aide-t-elle ?</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Relaxation profonde pour diminuer les tensions musculaires</li>
            <li>Techniques de respiration pour gérer les pics de douleur</li>
            <li>Visualisation positive pour modifier la perception de la douleur</li>
            <li>Renforcement des ressources personnelles</li>
            <li>Amélioration de la qualité du sommeil</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Types de douleurs accompagnées</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Douleurs chroniques (fibromyalgie, arthrose, etc.)</li>
            <li>Migraines et céphalées</li>
            <li>Douleurs post-opératoires</li>
            <li>Douleurs liées au stress</li>
            <li>Douleurs neuropathiques</li>
          </ul>
          
          <p className="text-lg bg-blue-50 p-4 rounded-lg">
            La sophrologie ne remplace pas un traitement médical mais constitue 
            un accompagnement précieux dans la gestion globale de la douleur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SophrologieEtDouleurPage;