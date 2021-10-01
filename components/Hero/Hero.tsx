import React from 'react'
import { HeroImage } from '../Images/HeroImage'
import { HeroProps, defaultProps } from './types'

export const Hero = ({
  //background,
  //color,
  cssClass,
  background,
  textAndCTA: { callToActionURL, callToActionText, headline, strapline },
}: HeroProps) => (
  <a className={`d-block position-relative ${cssClass}`} href={callToActionURL}>
    <HeroImage id={background.name} />
    <div className="container">
      <div className="position-relative">
        <div
          // className={`position-absolute bottom-0 pb-5 mb-5 text-uppercase text-${color}`}
          className={`position-absolute bottom-0 pb-5 mb-5 text-uppercase`}
        >
          <h2 className="">{headline}</h2>
          {strapline && <h3 className="">{strapline}</h3>}
          <div
            className="btn"
            // className={`btn border-${color} bg-${color}-hover text-${color}`}
          >
            {callToActionText}
          </div>
        </div>
      </div>
    </div>
  </a>
)

Hero.defaultProps = defaultProps
