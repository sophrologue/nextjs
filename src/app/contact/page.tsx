  import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Me Contacter</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Informations de Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="font-semibold w-28">Téléphone :</span>
                <span>06 63 33 98 90</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-28">Email :</span>
                <span>catherinefabrici.sophrologue@orange.fr</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-28">Adresse :</span>
                <span>
                  6 rue de la Martillière<br />
                  45330 Malesherbes, France
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-28">Horaires :</span>
                <span>
                  Lun-Ven : 10h00-20h00<br />
                  (sauf jeudi, sur rendez-vous uniquement)
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-28">Consultations :</span>
                <span>
                  Cabinet, à domicile (personnes âgées, handicapées, invalides),<br />
                  téléconsultations et séances en visio (Skype, Zoom, Discord)
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-28">Ateliers :</span>
                <span>
                  Groupes de 5 à 6 personnes sur un thème choisi
                </span>
              </div>
            </div>
          </div>
          
          {/* No Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-6">Envoyez un Message</h2>
            <p className="text-gray-700 text-center">
              Pour toute demande, contactez-moi directement par téléphone ou par email.<br />
              <span className="block mt-4 font-semibold">Téléphone :</span>
              06 63 33 98 90<br />
              <span className="block mt-2 font-semibold">Email :</span>
              catherinefabrici.sophrologue@orange.fr
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
      
          <p className="text-gray-700">
            Je reçois à mon cabinet du lundi au vendredi de 10h00 à 20h00 (sauf jeudi sur rendez-vous uniquement).<br />
            Ateliers pour groupes de 5 à 6 personnes sur un thème choisi.<br />
            Déplacement possible à domicile pour personnes âgées, handicapées, invalides.<br />
            Téléconsultations et séances en visio (Skype, Zoom, Discord) disponibles.<br />
            Appelez-moi pour plus d'informations !
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;