import React from 'react';
import Image from 'next/image';
import sophrologySocietyMark from '../../(assets)/society_mark.jpeg';

const SocietyMark = () => {
  return (
    <div className="flex items-center md:w-full justify-center bg-white  p-4 shadow-lg">
      <Image 
        src={sophrologySocietyMark} 
        alt="Sophrologie Society Member" 
        className="h-40 w-auto" 
      />
    </div>
  );
};

export default SocietyMark;