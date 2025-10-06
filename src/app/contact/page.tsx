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
              <div className="flex items-center">
                <span className="font-semibold w-20">Téléphone:</span>
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20">Email:</span>
                <span>contact@sophrologue.fr</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-20">Adresse:</span>
                <span>123 Rue de la Paix<br />75001 Paris, France</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20">Horaires:</span>
                <span>Lun-Ven: 9h-18h<br />Sam: 9h-12h</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Envoyez un Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Première Consultation Gratuite</h3>
          <p className="text-lg">
            Je vous offre un entretien de 30 minutes pour faire connaissance 
            et comprendre vos besoins. N'hésitez pas à me contacter !
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;