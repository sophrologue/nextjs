import React from 'react';

const faussesIdees = [
  "Ce n&rsquo;est pas de la psychologie.",
  "Ce n&rsquo;est pas de l&rsquo;hypnose.",
  "Elle n&rsquo;est pas réservée uniquement aux personnes malades.",
];

const verites = [
  "Elle vous permettra de voir la vie de façon plus positive.",
  "Les séances sont adaptées à votre personnalité et à vos besoins.",
  "L&rsquo;efficacité est prouvée scientifiquement.",
  "Les exercices de respiration amènent calme et détente.",
  "La sophrologie est une pédagogie positive, elle vous permettra de retrouver le bonheur de vivre avec légèreté tout simplement.",
  "Elle peut être un complément d&rsquo;une thérapie avec un psychologue ou psychanalyste.",
  "Elle est prise en charge par certaines mutuelles.",
];

const applications = [
  "La gestion du stress et des émotions.",
  "Le burn-out ou le bore-out.",
  "Apprendre à lâcher prise.",
  "Retrouver un sommeil réparateur, la confiance en soi, la concentration.",
  "Accompagnement de la grossesse jusqu&rsquo;à l&rsquo;accouchement.",
  "Se donner de l&rsquo;énergie pour lutter contre la fatigue.",
  "Pour la femme, vivre avec plus de sérénité la période de la ménopause.",
  "La préparation mentale aux examens, compétitions sportives, entretiens professionnels.",
  "Certaines maladies graves comme le cancer.",
  "L&rsquo;angoisse et l&rsquo;anxiété, la dépression.",
  "Les douleurs, les migraines, l&rsquo;urticaire.",
  "Stress lié aux changements : mariage, déménagement, décès.",
];

const bienfaits = [
  "Une meilleure connaissance de soi",
  "Un bien-être, une détente profonde",
  "Une harmonie entre le corps et l'esprit",
  "Un renforcement de ses capacités corporelles",
  "De la confiance en soi",
  "Une authenticité avec soi et les autres",
  "Une meilleure relation avec les autres",
  "Un renforcement du positif dans sa vie",
  "Une plus grande conscience de soi-même et de son existence",
];

const SophrologiePage = () => {
  return (
    <div className="min-h-screen pt-16 px-4 ">
      <div className="bg-gradient-to-r from-[#005649] to-[#007562] py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg text-center">
          La Sophrologie
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-lg text-gray-700 mb-6">
          La sophrologie est une méthode psycho-corporelle qui vise à retrouver un équilibre entre le corps et l&rsquo;esprit.
        </p>
        <div className="max-w-4xl mx-auto py-10">
          <h1 className="text-4xl font-bold mb-8 text-center text-[#005649] tracking-tight">
            Qu&rsquo;est-ce que la sophrologie ?
          </h1>
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-8">
              <p className="text-lg mb-4">
                <strong>La sophrologie</strong>, c&rsquo;est avant tout une technique simple, une méthode de développement personnel. Ce sont des exercices à base de respiration qui vont vous permettre dans un premier temps une reconnexion au corps et vous amener vers une détente musculaire et mentale.
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold text-[#007562]">La sophrologie est une pédagogie, un apprentissage dont vous êtes le principal acteur.</span>
              </p>
              <p className="text-lg mb-4">
                En pratiquant, vous deviendrez autonome et serez capable de répondre à vos besoins concrets dans votre vie quotidienne. À chaque séance, différentes capacités en vous sont travaillées.
              </p>
              <p className="text-lg mb-4">
                Elle permet d&rsquo;établir un équilibre, une harmonie entre le corps et l&rsquo;esprit afin d&rsquo;augmenter tous vos potentiels. Vous prendrez conscience de vos propres ressources.
              </p>
              <p className="text-lg">
                La pratique des exercices de sophrologie vous permettra de trouver un bien-être au quotidien selon l&rsquo;objectif que nous aurons défini ensemble.
              </p>
            </div>

            {/* Vrai/Faux */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[#f8fafc] to-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#d97706] flex items-center gap-2">
                  <span className="text-2xl">❌</span> Les idées fausses
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {faussesIdees.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#e6f4ef] to-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#007562] flex items-center gap-2">
                  <span className="text-2xl">✔️</span> Ce qui est vrai
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {verites.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#005649]">Pour quoi pratiquer la sophrologie ?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {applications.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Bienfaits */}
            <div className="bg-gradient-to-r from-[#e6f4ef] to-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#007562]">Les bienfaits de la sophrologie</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {bienfaits.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#005649]">Mes Services</h2>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                <li>Séances individuelles personnalisées</li>
                <li>Accompagnement pour la gestion du stress</li>
                <li>Préparation mentale</li>
                <li>Amélioration du sommeil</li>
                <li>Développement de la confiance en soi</li>
              </ul>
              <p className="text-lg">
                Chaque séance est adaptée à vos besoins spécifiques pour vous aider à retrouver équilibre et bien-être.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SophrologiePage;