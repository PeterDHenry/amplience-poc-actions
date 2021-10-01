import React from 'react'
import styled from 'styled-components'
import { HeroImage } from '../Images/HeroImage'
import { HeroProps, defaultProps } from './types'

const OuterLink = styled.a<any>`
  color: ${(props) => props.textColour};

  .btn {
    border-color: ${(props) => props.textColour};
    color: ${(props) => props.textColour};
  }

  &:hover {
    color: ${(props) => props.contrastColour};
  }

  &:hover .btn {
    color: ${(props) => props.contrastColour};
    border-color: ${(props) => props.contrastColour};
  }
`

export const Hero = ({
  textColour,
  contrastColour,
  cssClass,
  background,
  textAndCTA: { callToActionURL, callToActionText, headline, strapline },
}: HeroProps) => (
  <OuterLink
    textColour={textColour}
    contrastColour={contrastColour}
    className={`d-block position-relative ${cssClass}`}
    href={callToActionURL}
  >
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
  </OuterLink>
)

Hero.defaultProps = defaultProps
