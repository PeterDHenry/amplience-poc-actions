import React from 'react'
import styled from 'styled-components'
import { PushPanelProps } from './types'
import LazyLoadImage from '../Images/LazyLoadImage'

const Panel = styled.div`
  width: 100%;
`

const PanelLink = styled.a`
  text-decoration: none;

  .stack-true & {
    position: relative;
    font-weight: 900;

    &:hover button {
      opacity: 1;
    }
  }
`

const PanelText = styled.div`
  width: 100%;
  min-height: 100px;
  font-weight: 300;
  background: #fff;
  font-family: 'Roboto Condensed';
  padding-top: 10px;

  h2 {
    font-size: 37px;
    min-height: 88px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 25px;
    min-height: 60px;
    text-transform: uppercase;
  }
  button {
    margin-top: 10px;
    border: 1.5px solid #000;
    padding: 4px 16px;
    font-size: 20px;
    text-transform: uppercase;
  }

  .stack-true & {
    h2 {
      font-weight: 900;
      text-transform: capitalize;
      font-size: 50px;
    }

    button {
      position: absolute;
      top: -50%;
      z-index: 10000000;
      left: 40%;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0);
      font-size: 20px;
      border-color: white;
      border: 5px solid;
      color: white !important;
      font-weight: 900;
    }
  }
`
const PushPanel = ({
  height,
  width,
  mainImg,
  color,
  fontWeight,
  textAndCTA: { callToActionURL, callToActionText, headline, strapline },
}: PushPanelProps) => (
  <Panel>
    <PanelLink href={callToActionURL}>
      <LazyLoadImage
        id={mainImg.name}
        animationDuration={0.1}
        width={width}
        height={height}
        applyAspectRatio={true}
        altText={strapline}
      />
      <PanelText>
        <h2 style={{ color: color, fontWeight: fontWeight }}>{headline}</h2>
        {strapline && <h3 style={{ color: color }}>{strapline}</h3>}
        <button style={{ color: color }}>{callToActionText}</button>
      </PanelText>
    </PanelLink>
  </Panel>
)

PushPanel.defaultProps = {
  height: 1,
  width: 1,
  mainImg: {
    name: 'homepageb3d2',
  },
  headerText: 'Default header text',
  subText: '',
  calltoactiontext: 'Default CTA',
  linkURL: 'https://www.wiggle.co.uk/triathlon-2021?range=ne',
  color: 'black',
}

export default PushPanel
