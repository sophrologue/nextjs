import React from 'react';

const LaSocietePage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#005649] mb-4">
          La Société
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          La société Catherine Fabrici Sophrologie accompagne les particuliers et les entreprises dans l&rsquo;amélioration de la qualité de vie, la gestion du stress et l&rsquo;épanouissement personnel et professionnel.
        </p>
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
              <p className="text-lg text-gray-700 mb-6">
                La société Catherine Fabrici Sophrologie accompagne les particuliers et les entreprises dans l&rsquo;amélioration de la qualité de vie, la gestion du stress et l&rsquo;épanouissement personnel et professionnel.
              </p>
              <p className="text-base text-gray-600 mb-4">
                Forte d&rsquo;une expérience de plus de 10 ans dans l&rsquo;accompagnement, je propose des séances individuelles, des ateliers collectifs et des interventions en entreprise adaptées à vos besoins.
              </p>
              <p className="text-base text-gray-600 mb-8">
                N&rsquo;hésitez pas à me contacter pour toute demande d&rsquo;information ou de devis.
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
                <li><strong>Bienveillance :</strong> Accompagnement dans le respect et l&rsquo;écoute</li>
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
                En cas de litige entre le Client et l&rsquo;entreprise, ceux-ci s&rsquo;efforceront de le résoudre à l&rsquo;amiable.<br />
                (Le Client adressera une réclamation écrite auprès du professionnel ou, le cas échéant, auprès du Service Relations Clientèle du professionnel).
              </p>
              <p className="mb-3 text-gray-700">
                À défaut d&rsquo;accord amiable ou en l&rsquo;absence de réponse du professionnel dans un délai raisonnable d&rsquo;un (1) mois, le Client consommateur au sens de l&rsquo;article L.133-4 du code de la consommation a la possibilité de saisir gratuitement, si un désaccord subsiste, le médiateur compétent inscrit sur la liste des médiateurs établie par la Commission d&rsquo;évaluation et de contrôle de la médiation de la consommation en application de l&rsquo;article L.615-1 du code de la consommation, à savoir :
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
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm mb-2">
            Catherine Fabrici Sophrologie - 888 888 888 00018
          </p>
          <ul className="list-none text-gray-600 text-sm space-y-1">
            <li className="mb-2">
              <span className="font-semibold">SIRET :</span> 888 888 888 00018 (Entreprise individuelle)
            </li>
            <li className="mb-2">
              <span className="font-semibold">Adresse :</span> 12 rue de l&rsquo;Exemple, 75000 Paris
            </li>
            <li className="mb-2">
              <span className="font-semibold">Email :</span> contact@catherinefabrici.fr
            </li>
            <li className="mb-2">
              <span className="font-semibold">Téléphone :</span> 01 23 45 67 89
            </li>
          </ul>
        </div>
        <div className="mt-10 border-t pt-6 text-center">
          <span className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Catherine Fabrici Sophrologie. Tous droits réservés.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaSocietePage;