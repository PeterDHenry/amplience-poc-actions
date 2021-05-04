import React from 'react';

import HeroImage from '../HeroImage/HeroImage';

const Hero = ({ content }) => (
  <a className="relative block group" href= {content.calltoactionurl}>
    <HeroImage id={content.background.name} />
    <div className="absolute bottom-40 left-20 uppercase text-white max-w-xs">
      <h3 className="text-7xl font-bold">
        {content.headline}
      </h3>
      <div className="max-w-xs border-solid border-2 border-white p-1 group-hover:bg-white group-hover:text-black">
        {content.calltoactiontext}
      </div>
    </div>
  </a>
);
export default Hero;
