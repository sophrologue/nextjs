import React from 'react';

const TeachingBackgroundSection = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-[#005649] rounded-full flex items-center justify-center mr-4">
          <span className="text-white text-xl">📚</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Mon parcours d&apos;enseignante</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#005649]">
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          J&apos;ai été <strong className="text-[#005649]">enseignante</strong> : un métier merveilleux où, au fil des ans, j&apos;ai pu aider des centaines d&apos;enfants à acquérir leur autonomie et à prendre leur envol. J&apos;ai ainsi pu développer auprès de plusieurs générations d&apos;écoliers ma faculté à transmettre les savoirs, ma capacité à aider l&apos;autre à apprendre, connaître, ressentir et analyser.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Bref, des <strong className="text-[#007562]">compétences pédagogiques</strong> pour aider les enfants à trouver et exploiter le meilleur d&apos;eux-même... Enseigner aux petits et aux plus grands m&apos;a également appris à cultiver <strong className="text-[#005649]">patience, bienveillance et humilité</strong>.
        </p>
        <p className="mt-4 text-gray-600 text-sm">
          J&apos;ai exercé pendant plus de 15 ans dans l&apos;enseignement, auprès d&apos;enfants et d&apos;adolescents, en mettant l&apos;accent sur l&apos;écoute et l&apos;accompagnement individualisé.
        </p>
        <p className="mt-4 text-gray-600 text-sm">
          Cette expérience m&apos;a permis de développer des compétences relationnelles et pédagogiques essentielles dans mon métier de sophrologue.
        </p>
      </div>
    </div>
  );
};

export default TeachingBackgroundSection;