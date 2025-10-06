import React from 'react';

const LaSocietePage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#005649] tracking-tight">
          La Société
        </h1>
        <div className="space-y-8">
          {/* Mission */}
          <div className="bg-gradient-to-r from-white to-[#f8fafc] p-8 rounded-2xl shadow-lg flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#007562]/10 text-[#007562] text-2xl">
                🌱
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#007562]">Notre Mission</h2>
              <p className="text-lg text-gray-700">
                Notre société s'engage à promouvoir le bien-être et l'épanouissement personnel 
                à travers la sophrologie. Nous croyons en l'importance de l'équilibre entre 
                le corps et l'esprit pour une vie harmonieuse.
              </p>
            </div>
          </div>
          {/* Valeurs */}
          <div className="bg-gradient-to-r from-white to-[#f8fafc] p-8 rounded-2xl shadow-lg flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#005649]/10 text-[#005649] text-2xl">
                💎
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#005649]">Nos Valeurs</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Bienveillance :</strong> Accompagnement dans le respect et l'écoute</li>
                <li><strong>Professionnalisme :</strong> Formation continue et méthodes éprouvées</li>
                <li><strong>Personnalisation :</strong> Approche adaptée à chaque individu</li>
                <li><strong>Confidentialité :</strong> Respect absolu de votre intimité</li>
              </ul>
            </div>
          </div>
          {/* Approche */}
          <div className="bg-gradient-to-r from-white to-[#f8fafc] p-8 rounded-2xl shadow-lg flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#007562]/10 text-[#007562] text-2xl">
                🤝
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#007562]">Notre Approche</h2>
              <p className="text-lg text-gray-700">
                Nous proposons un accompagnement holistique qui prend en compte la personne 
                dans sa globalité. Notre méthode s'appuie sur les principes fondamentaux 
                de la sophrologie pour vous aider à développer vos ressources intérieures 
                et atteindre vos objectifs de bien-être.
              </p>
            </div>
          </div>
          {/* Litige – Médiation */}
          <div className="bg-gradient-to-r from-[#f8fafc] to-white border-l-8 border-[#007562] p-8 rounded-2xl shadow-lg flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#007562]/10 text-[#007562] text-2xl">
                ⚖️
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#005649]">Litige – Médiation de la consommation</h2>
              <p className="mb-3 text-gray-700">
                En cas de litige entre le Client et l’entreprise, ceux-ci s’efforceront de le résoudre à l’amiable.<br />
                (Le Client adressera une réclamation écrite auprès du professionnel ou, le cas échéant, auprès du Service Relations Clientèle du professionnel).
              </p>
              <p className="mb-3 text-gray-700">
                À défaut d’accord amiable ou en l’absence de réponse du professionnel dans un délai raisonnable d’un (1) mois, le Client consommateur au sens de l’article L.133-4 du code de la consommation a la possibilité de saisir gratuitement, si un désaccord subsiste, le médiateur compétent inscrit sur la liste des médiateurs établie par la Commission d’évaluation et de contrôle de la médiation de la consommation en application de l’article L.615-1 du code de la consommation, à savoir :
              </p>
              <div className="bg-white border border-[#007562] rounded p-4 mb-2">
                <strong>La Société Médiation Professionnelle</strong>
                <br />
                <a
                  href="https://www.mediateur-consommation-smp.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  www.mediateur-consommation-smp.fr
                </a>
                <br />
                24 rue Albert de Mun - 33000 Bordeaux
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaSocietePage;