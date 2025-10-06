import React from 'react';

const LaSocietePage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">La Société</h1>
        <div className="prose prose-lg mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p className="text-lg mb-6">
              Notre société s'engage à promouvoir le bien-être et l'épanouissement personnel 
              à travers la sophrologie. Nous croyons en l'importance de l'équilibre entre 
              le corps et l'esprit pour une vie harmonieuse.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Nos Valeurs</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Bienveillance :</strong> Accompagnement dans le respect et l'écoute</li>
              <li><strong>Professionnalisme :</strong> Formation continue et méthodes éprouvées</li>
              <li><strong>Personnalisation :</strong> Approche adaptée à chaque individu</li>
              <li><strong>Confidentialité :</strong> Respect absolu de votre intimité</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Notre Approche</h2>
            <p className="text-lg">
              Nous proposons un accompagnement holistique qui prend en compte la personne 
              dans sa globalité. Notre méthode s'appuie sur les principes fondamentaux 
              de la sophrologie pour vous aider à développer vos ressources intérieures 
              et atteindre vos objectifs de bien-être.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaSocietePage;