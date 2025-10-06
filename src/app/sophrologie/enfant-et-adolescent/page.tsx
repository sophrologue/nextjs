import React from 'react';

const EnfantEtAdolescentPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#005649]">
          L'Enfant et l'Adolescent &mdash; Sophrologie
        </h1>
        <div className="space-y-8">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-lg mb-4">
              Comme les adultes, les enfants et les adolescents ont besoin d'un équilibre pour être heureux et bien grandir. 
              La sophrologie leur fait découvrir les nombreuses ressources qu'ils ont en eux, et leur offre des outils pour mieux gérer leurs émotions dans un monde en constante évolution.
            </p>
            <p className="text-lg mb-2 font-semibold text-[#007562]">
              Un enfant heureux est un enfant qui s'adapte au monde qui l'entoure.
            </p>
          </div>

          {/* Enfants 6-12 ans */}
          <div className="bg-yellow-50 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3 text-yellow-800">La sophrologie ludique avec les enfants (6-12 ans)</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Découverte de ses ressources et prise de conscience du corps et des ressentis</li>
              <li>Exercices sous forme de jeux, d'histoires et d'imagination</li>
              <li>Retrouver le calme, l'attention, la concentration</li>
              <li>Équilibrer le trop-plein d'énergie, se libérer des tensions, fatigues, colères</li>
              <li>Gérer le stress lié à la scolarité, la peur de l'échec</li>
              <li>Développer la confiance en soi et apprendre à ne plus avoir peur de ses peurs</li>
              <li>Se préparer aux changements (séparation, déménagement...)</li>
              <li>Corriger un trouble émotionnel ou physique</li>
              <li>Apporter des solutions pour enfants hyperactifs, dyslexiques, ou souffrant de troubles du comportement (TDH)</li>
            </ul>
            <div className="bg-white border-l-4 border-yellow-400 p-4 rounded mb-2">
              <span className="font-medium text-yellow-700">
                Les séances sont hebdomadaires. Après un premier entretien, nous établirons ensemble un objectif selon les besoins de votre enfant. Chaque séance se déroule dans une écoute respectueuse et bienveillante, basée sur la confiance.
              </span>
            </div>
          </div>

          {/* Adolescents */}
          <div className="bg-blue-50 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-800">La sophrologie avec les adolescents</h2>
            <p className="mb-3 text-gray-700">
              L'adolescence est une période délicate, marquée par de grands changements physiques, psychiques et émotionnels. L'adolescent doit prendre son autonomie affective pour devenir adulte, ce qui n'est pas toujours simple.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Résoudre les difficultés de sommeil</li>
              <li>Préparation aux examens et gestion du stress scolaire</li>
              <li>Optimiser la concentration</li>
              <li>Développer la confiance en soi</li>
              <li>Prendre de la distance avec les addictions (tabac, drogue, alcool...)</li>
              <li>Gestion du stress lié aux études et aux changements</li>
              <li>Accompagnement pour aborder la vie plus positivement et donner du sens à son existence</li>
            </ul>
            <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-2">
              <span className="font-medium text-blue-700">
                La sophrologie aidera votre adolescent à se sentir plus épanoui et serein dans sa vie quotidienne.
              </span>
            </div>
          </div>

          {/* Bénéfices durables */}
          <div className="bg-purple-50 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-3 text-purple-800">Bénéfices durables</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Développer son autonomie émotionnelle</li>
              <li>Améliorer ses relations avec les autres</li>
              <li>Renforcer sa capacité d'adaptation</li>
              <li>Cultiver un regard positif sur la vie</li>
            </ul>
            <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
              <span className="font-medium text-purple-700">
                Les techniques apprises en sophrologie deviennent des outils précieux pour toute la vie.
                <br />
                <span className="block mt-2">Durée et méthodes ajustées selon l'âge et la maturité, dans un environnement bienveillant et sécurisé.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnfantEtAdolescentPage;