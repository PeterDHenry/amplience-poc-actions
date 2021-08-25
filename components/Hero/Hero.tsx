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
  color: string
  contrastColor: string
  textAndCTA: {
    callToActionURL: string
    callToActionText: string
    headline: string
    strapline: string
  }
}

export const Hero = ({
  //contrastColor,
  background,
  color,
  cssClass,
  textAndCTA: { callToActionURL, callToActionText, headline, strapline },
}: HeroProps) => (
  <a className={`d-block position-relative ${cssClass}`} href={callToActionURL}>
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
            {callToActionText}
          </div>
        </div>
      </div>
    </div>
  </a>
)
export default Hero

Hero.defaultProps = {
  _meta: {
    name: 'string',
    schema: 'string',
    deliveryId: '1543512973',
  },
  cssClass: '',
  background: { name: 'homepage-h-d' },
  color: 'white',
  contrastColor: 'dark',
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/discover-different',
    headline: 'Default headline',
    strapline: '',
    callToActionText: 'Default call to action',
  },
}
