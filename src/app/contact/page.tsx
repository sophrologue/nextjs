import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#005649] mb-4">
          Contactez-moi
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Je suis à votre écoute pour toute question ou prise de rendez-vous.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Informations de Contact</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-semibold text-[#005649] mb-1 sm:mb-0 sm:w-32 md:w-36">Téléphone :</span>
                <span className="break-all">06 63 33 98 90</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-semibold text-[#005649] mb-1 sm:mb-0 sm:w-32 md:w-36">Email :</span>
                <span className="break-all text-sm md:text-base">catherinefabrici.sophrologue@orange.fr</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-semibold text-[#005649] mb-1 sm:mb-0 sm:w-32 md:w-36">Adresse :</span>
                <span className="text-sm md:text-base">
                  6 rue de la Martillière<br />
                  45330 Malesherbes, France
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-semibold text-[#005649] mb-1 sm:mb-0 sm:w-32 md:w-36">Horaires :</span>
                <span className="text-sm md:text-base">
                  Lun-Ven : 10h00-20h00<br />
                  (sauf jeudi, sur rendez-vous uniquement)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-semibold text-[#005649] mb-1 sm:mb-0 sm:w-32 md:w-36">Consultations :</span>
                <span className="text-sm md:text-base">
                  Cabinet, à domicile (personnes âgées, handicapées, invalides),<br />
                  téléconsultations et séances en visio (Skype, Zoom, Discord)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-semibold text-[#005649] mb-1 sm:mb-0 sm:w-32 md:w-36">Ateliers :</span>
                <span className="text-sm md:text-base">
                  Groupes de 5 à 6 personnes sur un thème choisi
                </span>
              </div>
            </div>
          </div>
          
          {/* No Contact Form */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">Envoyez un Message</h2>
            <p className="text-gray-700 text-center text-sm md:text-base">
              Pour toute demande, contactez-moi directement par téléphone ou par email.<br />
              <span className="block mt-3 md:mt-4 font-semibold text-[#005649]">Téléphone :</span>
              <a href="tel:0663339890" className="text-[#005649] hover:underline">06 63 33 98 90</a><br />
              <span className="block mt-2 font-semibold text-[#005649]">Email :</span>
              <a href="mailto:catherinefabrici.sophrologue@orange.fr" className="text-[#005649] hover:underline break-all text-xs md:text-sm">
                catherinefabrici.sophrologue@orange.fr
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 text-center bg-blue-50 p-4 md:p-6 rounded-lg">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Je reçois à mon cabinet du lundi au vendredi de 10h00 à 20h00 (sauf jeudi sur rendez-vous uniquement).<br />
            Ateliers pour groupes de 5 à 6 personnes sur un thème choisi.<br />
            Déplacement possible à domicile pour personnes âgées, handicapées, invalides.<br />
            Téléconsultations et séances en visio (Skype, Zoom, Discord) disponibles.<br />
            <span className="text-[#005649] font-semibold">Appelez-moi pour plus d&apos;informations !</span>
          </p>
          <span className="text-gray-500 text-xs md:text-sm block mt-3">
            Je m&apos;engage à vous répondre dans les plus brefs délais.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;