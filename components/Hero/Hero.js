import React from 'react';

import HeroImage from '../LazyLoadImage/HeroImage'

//need to create border-${color} bg-${color}-hover text-${contrastColor}-hover classes

const Hero = ( {cssClass, content, color, contrastColor} ) => (
  <a className={`d-block position-relative ${cssClass}`} href={content.calltoactionurl}>
    <HeroImage id={content.background.name} />
    <div className={`position-absolute bottom-0 start-0 p-5 text-uppercase text-${color}`}>
      <h2 className="">
        {content.headline}
      </h2>
      {content.strapline && (
          <h3 className="">
            {content.strapline}
          </h3>
        )
      }
      <div className={`btn border-${color} bg-${color}-hover text-${contrastColor}-hover`}>
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
