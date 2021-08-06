import React from 'react'

import HeroImage from '../LazyLoadImage/HeroImage'

//TODO need to create border-${color} bg-${color}-hover text-${contrastColor}-hover classes

export interface HeroProps {
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  background: { name: string }
  calltoactionurl: string
  calltoactiontext: string
  color: string
  contrastColor: string
  cssClass: string
  headline: string
  strapline: string
}

export const Hero = ({
  background,
  calltoactionurl,
  calltoactiontext,
  color,
  contrastColor,
  cssClass,
  headline,
  strapline,
}: HeroProps) => (
  <a className={`d-block position-relative ${cssClass}`} href={calltoactionurl}>
    <HeroImage id={background.name} />
    <div
      className={`position-absolute bottom-0 start-0 p-5 text-uppercase text-${color}`}
    >
      <h2 className="">{headline}</h2>
      {strapline && <h3 className="">{strapline}</h3>}
      <div
        className={`btn border-${color} bg-${color}-hover text-${contrastColor}-hover`}
      >
        {calltoactiontext}
      </div>
    </div>
  </a>
)
export default Hero

Hero.defaultProps = {
  cssClass: '',
  background: { name: 'homepage-h-d' },
  calltoactionurl: 'https://www.wiggle.co.uk/discover-different',
  headline: 'Default headline',
  strapline: '',
  calltoactiontext: 'Default call to action',
  color: 'white',
  contrastColor: 'black',
}
