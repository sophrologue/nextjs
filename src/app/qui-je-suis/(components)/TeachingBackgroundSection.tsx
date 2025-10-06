import React from 'react';

const TeachingBackgroundSection = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-[#005649] rounded-full flex items-center justify-center mr-4">
          <span className="text-white text-xl">📚</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Mon parcours d'enseignante</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#005649]">
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          J'ai été <strong className="text-[#005649]">enseignante</strong> : un métier merveilleux où, au fil des ans, j'ai pu aider des centaines d'enfants à acquérir leur autonomie et à prendre leur envol. J'ai ainsi pu développer auprès de plusieurs générations d'écoliers ma faculté à transmettre les savoirs, ma capacité à aider l'autre à apprendre, connaître, ressentir et analyser.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Bref, des <strong className="text-[#007562]">compétences pédagogiques</strong> pour aider les enfants à trouver et exploiter le meilleur d'eux-même... Enseigner aux petits et aux plus grands m'a également appris à cultiver <strong className="text-[#005649]">patience, bienveillance et humilité</strong>.
        </p>
      </div>
    </div>
  );
};

export default TeachingBackgroundSection;