import React from 'react';

const AvisPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Avis Clients</h1>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="ml-2 font-semibold">Marie L.</span>
            </div>
            <p className="text-gray-700">
              "Une expérience transformatrice ! Les séances m'ont aidée à retrouver confiance 
              en moi et à mieux gérer mon stress au quotidien. Je recommande vivement."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="ml-2 font-semibold">Pierre M.</span>
            </div>
            <p className="text-gray-700">
              "Approche très professionnelle et bienveillante. Les techniques apprises 
              m'accompagnent maintenant dans ma vie professionnelle."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="ml-2 font-semibold">Sophie D.</span>
            </div>
            <p className="text-gray-700">
              "Enfin des nuits réparatrices ! Grâce aux exercices de sophrologie, 
              j'ai retrouvé un sommeil de qualité. Merci infiniment."
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">
            Vous souhaitez partager votre expérience ? 
            <a href="/contact" className="text-blue-600 hover:underline ml-1">
              Contactez-moi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvisPage;