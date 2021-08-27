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
  textAndCTA: { callToActionURL, callToActionText, headline },
}: LinkBannerProps) => (
  <Banner href={callToActionURL}>
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
    callToActionURL: 'Default URL',
    callToActionText: 'Default CTA Text',
    headline: 'Default Headline',
    strapline: 'Default Strapline',
  },
}

export default LinkBanner
