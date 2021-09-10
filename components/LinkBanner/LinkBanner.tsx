import React from 'react'
import styled from 'styled-components'
import { LinkBannerProps } from './types'

const Banner = styled.a<any>`
  padding: 10px 5px;
  margin: 10px 0;
  background-color: ${(props) => props.backgroundColour};
  color: ${(props) => props.fontColour};
  text-decoration: none;
  font-family: 'Roboto Condensed';
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  &:hover > .cta-btn {
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
    border: 2px solid #3c3c3b;
    background: ${(props) => props.fontColour};
    color: #fff;
  }
  &:hover {
    color: ${(props) => props.fontColour};
  }
  p {
    margin: 0;
  }
`

const BannerText = styled.div<any>`
  margin-right: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const BannerCTA = styled.button<any>`
  border: 2px solid ${(props) => props.fontColour};
  padding: 2px 16px;
  text-align: center;
  background: none;
  font-size: 16px;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
`

const LinkBanner = ({
  textAndCTA: { callToActionURL, callToActionText, headline },
  backgroundColour,
  fontColour,
}: LinkBannerProps) => (
  <Banner
    href={callToActionURL}
    backgroundColour={backgroundColour}
    fontColour={fontColour}
    className="link-banner"
  >
    <BannerText>
      <p>{headline.toUpperCase()}</p>
    </BannerText>
    <BannerCTA className="cta-btn">
      <p>{callToActionText.toUpperCase()}</p>
    </BannerCTA>
  </Banner>
)

LinkBanner.defaultProps = {
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/',
    callToActionText: 'Test CTA Text',
    headline: 'Test Headline',
    strapline: 'Test Strapline',
  },
  backgroundColour: '#F7F7F7',
  fontColour: '#3C3C3B',
}

export default LinkBanner
