import React from 'react';

const HypnoseHumanistePage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Hypnose Humaniste</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            L'Hypnose Humaniste est une approche thérapeutique innovante qui permet d'accéder 
            à un état de conscience augmentée pour favoriser l'auto-guérison et le développement personnel.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Qu'est-ce que l'Hypnose Humaniste ?</h2>
          <p className="text-lg mb-6">
            Contrairement à l'hypnose classique, l'Hypnose Humaniste ne plonge pas dans l'inconscient 
            mais élargit la conscience. La personne reste actrice de sa séance et guide son propre processus de changement.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Principes fondamentaux</h2>
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Conscience augmentée :</strong> Expansion de la perception habituelle</li>
              <li><strong>Autonomie :</strong> La personne reste maître de son processus</li>
              <li><strong>Respect :</strong> Approche bienveillante et non-directive</li>
              <li><strong>Globalité :</strong> Prise en compte de l'être humain dans sa totalité</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Domaines d'application</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Développement personnel</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Confiance en soi</li>
                <li>Estime de soi</li>
                <li>Créativité</li>
                <li>Intuition</li>
                <li>Spiritualité</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Accompagnement thérapeutique</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Phobies et angoisses</li>
                <li>Traumatismes</li>
                <li>Deuils</li>
                <li>Addictions</li>
                <li>Troubles du sommeil</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Déroulement d'une séance</h2>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li><strong>Entretien :</strong> Écoute et définition des objectifs</li>
            <li><strong>Induction :</strong> Accès à l'état de conscience modifiée</li>
            <li><strong>Travail thérapeutique :</strong> Exploration et transformation</li>
            <li><strong>Retour :</strong> Intégration des découvertes</li>
            <li><strong>Échange :</strong> Partage et conseils personnalisés</li>
          </ol>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
            <p className="text-lg font-medium text-purple-800 mb-2">
              Une approche respectueuse de votre être
            </p>
            <p className="text-purple-700">
              L'Hypnose Humaniste vous accompagne vers une meilleure connaissance de vous-même 
              et vers l'épanouissement de votre potentiel authentique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HypnoseHumanistePage;