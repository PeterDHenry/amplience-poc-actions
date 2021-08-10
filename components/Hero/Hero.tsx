import React from 'react'

import HeroImage from '../LazyLoadImage/HeroImage'

export interface HeroProps {
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  cssClass?: string
  background: { name: string }
  calltoactionurl: string
  calltoactiontext: string
  color: string
  contrastColor: string
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
    <div className="container">
      <div className="position-relative">
        <div
          className={`position-absolute bottom-0 pb-5 mb-5 text-uppercase text-${color}`}
        >
          <h2 className="">{headline}</h2>
          {strapline && <h3 className="">{strapline}</h3>}
          <div
            className={`btn border-${color} bg-${color}-hover text-${color}`}
          >
            {calltoactiontext}
          </div>
        </div>
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
  contrastColor: 'dark',
}
