import React from 'react';

import HeroImage from '../LazyLoadImage/LazyLoadImage'

const Hero = ( {content} ) => (
  <a className="relative block group" href={content.calltoactionurl}>
    <HeroImage id={content.background.name} />
    <div className="absolute bottom-40 left-20 uppercase text-white max-w-md">
      <h3 className="text-7xl font-bold">
        {content.headline}
      </h3>
      <h2 className="text-3xl font-bold">
        {content.strapline}
      </h2>
      <div className="max-w-xs border-solid border-2 border-white p-1 group-hover:bg-white group-hover:text-black">
        {content.calltoactiontext}
      </div>
    </div>
  </a>
);

Hero.defaultProps = {
  content: {
    background: {name: "homepage-h-d"},
    calltoactionurl: "https://www.wiggle.co.uk/discover-different",
    headline: "Discover different",
    calltoactiontext: "Find out more"
  }
}

export default Hero;
