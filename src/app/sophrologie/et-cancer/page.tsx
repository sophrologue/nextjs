import React from 'react';

const SophrologieEtCancerPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#005649] tracking-tight">
          Sophrologie et Cancer
        </h1>
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-lg mb-4">
              Parce que <span className="font-semibold text-[#007562]">350.000 personnes</span> apprennent chaque année qu'elles souffrent d'un cancer, la sophrologie peut aider et offre un accompagnement dans le parcours des soins de support pour les malades.
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold">En aucun cas la sophrologie ne guérit le cancer, elle ne se substitue pas au protocole de soin, ni aux traitements médicaux.</span>
            </p>
            <p className="text-lg mb-4">
              Mais elle est reconnue, par le dernier <span className="font-semibold text-[#007562]">Plan Cancer</span> du ministère de la Santé, comme un soin oncologique de support.
            </p>
            <blockquote className="border-l-4 border-[#007562] pl-4 italic text-[#005649] mb-4">
              « Face au cancer, on fait confiance à son oncologue et on peut aussi être actif pendant son traitement. »
            </blockquote>
            <p className="text-lg">
              De nombreux hôpitaux ont introduit la sophrologie dans leur établissement (Nantes, Paris, etc.).
            </p>
          </div>

          {/* Atténuer les angoisses des traitements */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#007562]">Atténuer les angoisses des traitements</h2>
            <p className="text-lg mb-4">
              Les personnes souffrant de cancer appréhendent les traitements (chimiothérapie, radiothérapie), les effets secondaires très perturbants et envahissants ont des répercussions sur leur vie quotidienne.
            </p>
            <p className="text-lg mb-4">
              La sophrologie, par des exercices à base de respiration, de mouvements et d’images mentales, va permettre de remettre du mieux-être dans son quotidien, d’évacuer les angoisses, le stress, de diminuer les douleurs que génèrent les traitements.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Diminuer la fatigue : on fait le plein d’énergie, on optimise et on valorise les traitements qui deviennent des alliés contre la maladie.</li>
              <li>Améliorer la qualité du sommeil et la récupération.</li>
              <li>Maintenir un état d’esprit positif.</li>
            </ul>
          </div>

          {/* Renforcer sa combativité */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#005649]">Renforcer sa combativité</h2>
            <p className="text-lg mb-4">
              Les traitements du cancer sont longs. Si, au début, les malades sont motivés, au fil des mois, des années, l’observance des traitements diminue. La sophrologie aide aussi à retrouver une détermination pour lutter contre la maladie.
            </p>
            <p className="text-lg">
              Un travail sur la restauration de l’image de soi peut aussi être fait en sophrologie. Il s’agit d’un accompagnement en fonction des besoins de la personne et adapté à sa maladie.
            </p>
          </div>

          {/* Soutien pour les proches */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#007562]">Soutien pour les proches</h2>
            <p className="text-lg">
              L'accompagnement sophrologique s'étend également aux proches et aidants, les aidant à gérer leur stress et leurs émotions face à la maladie.
            </p>
          </div>

          {/* Après la maladie */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#005649]">Après la maladie</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Reconstruction de l'estime de soi</li>
              <li>Gestion de l'angoisse de récidive</li>
              <li>Réappropriation du corps</li>
              <li>Projection dans l'avenir</li>
              <li>Retour à une vie sociale et professionnelle</li>
            </ul>
          </div>

          {/* Accompagnement complémentaire */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
            <p className="text-lg font-medium text-green-800 mb-2">
              Un accompagnement complémentaire
            </p>
            <p className="text-green-700">
              La sophrologie vient en complément des soins médicaux et offre des outils concrets pour mieux vivre cette épreuve avec sérénité et espoir.
            </p>
            <p className="text-green-700 mt-2">
              <span className="font-semibold">J’adapte les séances aux besoins de mes clients.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SophrologieEtCancerPage;