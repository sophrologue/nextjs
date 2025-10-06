import React from 'react';

const QuiJeSuisPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Qui je suis</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg mb-6">
            Bienvenue sur ma page de présentation. Je suis passionnée par la sophrologie 
            et j'accompagne mes clients dans leur développement personnel.
          </p>
          <p className="text-lg mb-6">
            Mon parcours et mon approche personnalisée me permettent de vous offrir 
            un suivi adapté à vos besoins spécifiques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuiJeSuisPage;