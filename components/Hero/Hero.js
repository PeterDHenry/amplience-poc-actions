import React from 'react';

import HeroImage from '../LazyLoadImage/LazyLoadImage'

const Hero = ( {cssClass, content, color, contrastColor} ) => (
  <a className={`block group ${cssClass}`} href={content.calltoactionurl}>
    <HeroImage id={content.background.name} />
    <div className={`absolute bottom-40 left-20 uppercase text-${color} max-w-md`}>
      <h3 className="text-7xl font-bold">
        {content.headline}
      </h3>
      <h2 className="text-3xl font-bold">
        {content.strapline}
      </h2>
      <div className={`max-w-xs border-solid border-2 border-${color} p-1 group-hover:bg-${color} group-hover:text-${contrastColor}`}>
        {content.calltoactiontext}
      </div>
    </div>
  </a>
);

Hero.defaultProps = {
  cssClass: "",
  content: {
    background: {name: "homepage-h-d"},
    calltoactionurl: "https://www.wiggle.co.uk/discover-different",
    headline: "Discover different",
    calltoactiontext: "Find out more"
  },
  color: "white",
  contrastColor: "black"
}

export default Hero;
