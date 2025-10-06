import React from 'react';

const TarifsPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#005649] tracking-tight">
          Tarifs
        </h1>

        {/* Premier rendez-vous */}
        <div className="bg-gradient-to-r from-[#e6f4ef] to-[#f8fafc] rounded-2xl shadow-xl p-8 mb-10 border-l-8 border-[#007562] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#007562]">Premier rendez-vous</h2>
            <p className="text-gray-700 mb-2">
              1h30 pour adulte, enfant, adolescent.<br />
              Objectif du programme défini ensemble.
            </p>
          </div>
          <div className="text-4xl font-extrabold text-[#005649] bg-white/80 px-8 py-4 rounded-xl shadow-md">
            60&nbsp;€
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Enfant / Adolescent jusqu'à 12 ans */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#005649] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Enfant / Adolescent jusqu'à 12 ans</h3>
              <p className="text-gray-700 mb-2">Séance de 30 à 40 minutes</p>
            </div>
            <div className="text-2xl font-bold text-[#005649] mt-2">50&nbsp;€</div>
          </div>
          {/* Adolescent 13-17 ans */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#005649] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Adolescent 13 à 17 ans</h3>
              <p className="text-gray-700 mb-2">Séance d'1h</p>
            </div>
            <div className="text-2xl font-bold text-[#005649] mt-2">55&nbsp;€</div>
          </div>
          {/* Adultes */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#005649] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Adultes</h3>
              <p className="text-gray-700 mb-2">Séance d'1h</p>
            </div>
            <div className="text-2xl font-bold text-[#005649] mt-2">55&nbsp;€</div>
          </div>
          {/* Entreprises et groupes */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#007562] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Entreprises &amp; Groupes</h3>
              <p className="text-gray-700 mb-2">
                15 à 25&nbsp;€ par personne<br />
                <span className="text-sm text-gray-500">Selon le nombre de participants</span>
              </p>
            </div>
            <div className="text-2xl font-bold text-[#007562] mt-2">15 ~ 25&nbsp;€</div>
          </div>
          {/* Séance Hypnose */}
          <div className="bg-gradient-to-r from-[#e6f4ef] to-[#f8fafc] rounded-xl shadow-md p-6 border-l-4 border-[#005649] md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Séance Hypnose</h3>
              <p className="text-gray-700 mb-2">
                70&nbsp;€ la séance<br />
                <span className="text-sm text-gray-500">2 séances à prévoir au minimum</span><br />
                <span className="text-sm text-gray-500">Dans le cadre d'un programme combiné, la séance est à 60&nbsp;€</span>
              </p>
            </div>
            <div className="text-2xl font-bold text-[#005649] bg-white/80 px-8 py-4 rounded-xl shadow-md">
              60 ~ 70&nbsp;€
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-2 font-medium text-[#005649]">
            Première consultation : entretien de 30 minutes offert
          </p>
          <p className="text-sm text-gray-600">
            Les tarifs sont donnés à titre indicatif et peuvent être ajustés selon vos besoins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarifsPage;