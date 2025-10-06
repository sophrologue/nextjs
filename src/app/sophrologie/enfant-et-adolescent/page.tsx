import React from 'react';

const EnfantEtAdolescentPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">L'Enfant et l'Adolescent</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            La sophrologie adaptée aux enfants et adolescents les aide à développer leurs ressources 
            intérieures et à mieux gérer leurs émotions dans un monde en constante évolution.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Pour les enfants (6-12 ans)</h2>
          <div className="bg-yellow-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium mb-3">Approche ludique et créative</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Exercices sous forme de jeux et d'histoires</li>
              <li>Développement de la confiance en soi</li>
              <li>Gestion des peurs et des angoisses</li>
              <li>Amélioration de la concentration</li>
              <li>Meilleur sommeil et détente</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Pour les adolescents (13-18 ans)</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium mb-3">Accompagnement de la croissance</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Gestion du stress scolaire et des examens</li>
              <li>Acceptation des changements corporels</li>
              <li>Renforcement de l'estime de soi</li>
              <li>Gestion des émotions intenses</li>
              <li>Préparation aux défis futurs</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Bénéfices durables</h2>
          <p className="text-lg mb-6">
            Les techniques apprises en sophrologie deviennent des outils précieux que l'enfant 
            ou l'adolescent peut utiliser tout au long de sa vie pour :
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Développer son autonomie émotionnelle</li>
            <li>Améliorer ses relations avec les autres</li>
            <li>Renforcer sa capacité d'adaptation</li>
            <li>Cultiver un regard positif sur la vie</li>
          </ul>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-lg font-medium text-purple-800 mb-2">
              Séances adaptées à chaque âge
            </p>
            <p className="text-purple-700">
              Durée et méthodes ajustées selon l'âge et la maturité de l'enfant, 
              dans un environnement bienveillant et sécurisé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnfantEtAdolescentPage;