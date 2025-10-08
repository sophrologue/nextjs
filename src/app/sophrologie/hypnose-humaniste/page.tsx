import React from 'react';

const themes = [
  "Stress, angoisse, anxiété, phobies, agoraphobie",
  "Addictions",
  "TOCS",
  "Arrêt tabac",
  "Bien-être et développement personnel",
  "Burnout",
  "Souffrance au travail",
  "Fatigue",
  "Troubles du sommeil",
  "Gestion des émotions, gestion de la douleur",
  "Deuil",
  "Divorce",
  "Dépression",
  "Gestion du poids",
];

const HypnoseHumanistePage = () => {
  return (
    <div className="min-h-screen pt-16 px-4 bg-white">
      <div className="bg-gradient-to-r from-[#005649] to-[#007562] py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg text-center">
          Hypnose Humaniste
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-lg text-gray-700 mb-6">
          L&apos;hypnose humaniste est une approche thérapeutique qui vise à reconnecter la personne à ses ressources profondes.
        </p>
        <div className="space-y-8">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-lg mb-4">
              <strong>L&apos;Hypnose Humaniste</strong> est une approche thérapeutique innovante qui permet d&apos;accéder à un état de conscience augmentée pour favoriser l&apos;auto-guérison et le développement personnel.
            </p>
            <p className="text-lg mb-4">
              Cette technique vous emmène, à travers votre image mentale, à résoudre votre difficulté. Vous avez les clés de la séance entre vos mains.
            </p>
            <p className="text-lg mb-4">
              Qu&apos;il s&apos;agisse de petits soucis du quotidien ou d&apos;événements de vie douloureux (deuil, traumatisme, relation professionnelle, addiction...), l&apos;hypnothérapie offre une solution rapide et efficace pour vivre mieux et se libérer.
            </p>
            <p className="text-lg">
              <span className="font-semibold text-[#007562]">Cette technique est accessible à tous : adultes, enfants et adolescents.</span>
            </p>
          </div>

          {/* Pourquoi choisir l'Hypnose Humaniste ? */}
          <div className="bg-indigo-50 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Pourquoi choisir l&apos;Hypnose Humaniste ?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Vous restez acteur de votre séance et guidez votre propre processus de changement.</li>
              <li>Permet d&apos;accéder à vos ressources intérieures et de replacer l&apos;harmonie au cœur de votre vie.</li>
              <li>Permet de contourner les blocages, croyances limitantes et d&apos;aller chercher en profondeur vos réponses.</li>
              <li>Complémentaire à la sophrologie pour un accompagnement global.</li>
            </ul>
            <div className="bg-white border-l-4 border-indigo-400 p-4 rounded mt-4 text-indigo-700">
              <span className="font-medium">
                Il est essentiel de garder à l&apos;esprit que cette pratique n&apos;est pas une formule magique, mais un procédé qui nécessite autant l&apos;investissement de la personne que celui du praticien.
              </span>
            </div>
          </div>

          {/* Thèmes d'accompagnement */}
          <div className="bg-purple-50 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-800">Thèmes pour lesquels l&apos;hypnose vous aidera particulièrement</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {themes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Déroulement d'une séance */}
          <div className="bg-teal-50 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-teal-800">Comment se passe la séance ?</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Premier rendez-vous :</strong> Expression de votre problématique et de votre objectif pour la consultation. Cela me permet de choisir la meilleure technique pour vous aider.
              </li>
              <li>
                <strong>Travail d&apos;hypnose :</strong> Je vous accompagne pour chercher en vous vos propres solutions, car tout est déjà à l&apos;intérieur de vous.
              </li>
              <li>
                <strong>Durée :</strong> Une séance dure environ 1H à 1H30, dans un esprit de bienveillance et de non-jugement.
              </li>
            </ol>
            <div className="bg-white border-l-4 border-teal-400 p-4 rounded text-teal-700">
              J&apos;allie les deux méthodes <strong>SOPHROLOGIE</strong> et <strong>HYPNOSE HUMANISTE</strong> qui sont toutes deux extrêmement complémentaires.
            </div>
          </div>

          {/* Bénéfices attendus */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-4 text-purple-800">Quels bénéfices en attendre ?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-2">
              <li>Contourner les freins conscients et travailler en profondeur avec l&apos;inconscient</li>
              <li>Modifier ou se défaire de comportements qui ne conviennent plus</li>
              <li>Atténuer certaines émotions et dépasser des situations difficiles</li>
              <li>Améliorer son état de bien-être et vivre plus heureux</li>
            </ul>
            <p className="text-purple-700">
              L&apos;Hypnose Humaniste vous permet d&apos;accéder à vos ressources intérieures et de replacer l&apos;harmonie au cœur de votre vie.
            </p>
          </div>

          {/* Tarifs */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#005649]">Tarif séance hypnose</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Séance hypnose dans le cadre d&apos;un suivi sophrologie + hypnose :</span> <span className="text-[#007562]">60&nbsp;euros</span> la séance
              </li>
              <li>
                <span className="font-semibold">Séance hypnose seule :</span> <span className="text-[#007562]">70&nbsp;euros</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            L&apos;hypnose humaniste est une approche thérapeutique qui vise à reconnecter la personne à ses ressources profondes.
          </p>
          <li>
            Développer la confiance en soi et l&apos;estime de soi
          </li>
          <li>
            Accompagner les changements de vie et l&apos;évolution personnelle
          </li>
          <span className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Catherine Fabrici Sophrologie. Tous droits réservés.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HypnoseHumanistePage;