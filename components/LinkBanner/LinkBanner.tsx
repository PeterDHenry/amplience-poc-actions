import React from 'react'
import styled from 'styled-components'
import { LinkBannerProps } from './types'

const Banner = styled.a<any>`
  padding: 10px 5px;
  margin: 10px 0;
  background-color: ${(props) => props.background};
  color: ${(props) => props.colour};
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
    background: ${(props) => props.colour};
    color: #fff;
  }
  &:hover {
    color: ${(props) => props.colour};
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
  border: 2px solid ${(props) => props.colour};
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
  mainText,
  ctaText,
  backgroundColour,
  fontColour,
  link,
}: //showOnMobile
LinkBannerProps) => (
  <Banner href={link} background={backgroundColour} colour={fontColour}>
    <BannerText>
      <p>{mainText.toUpperCase()}</p>
    </BannerText>
    <BannerCTA
      className="cta-btn"
      colour={fontColour}
      backgroundColour={backgroundColour}
    >
      <p>{ctaText.toUpperCase()}</p>
    </BannerCTA>
  </Banner>
)

LinkBanner.defaultProps = {
  mainText: 'Default Text',
  ctaText: 'Default CTA Text',
  backgroundColour: '#F7F7F7',
  fontColour: '#000',
  link: 'https://www.wiggle.co.uk/sc/wiggle-plus',
  showOnMobile: true,
}

export default LinkBanner
