import React from 'react'
import styled from 'styled-components'
import { PushPanelProps } from './types'
import PushPanelImage from '../LazyLoadImage/PushPanelImage'

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
  mainImg,
  calltoactiontext,
  linkURL,
  color,
  fontWeight,
  headerText,
  subText,
}: PushPanelProps) => (
  <Panel>
    <PanelLink href={linkURL}>
      <PushPanelImage id={mainImg.name} />
      <PanelText>
        <h2 style={{ color: color, fontWeight: fontWeight }}>{headerText}</h2>
        {subText && <h3 style={{ color: color }}>{subText}</h3>}
        <button style={{ color: color }}>{calltoactiontext}</button>
      </PanelText>
    </PanelLink>
  </Panel>
)

PushPanel.defaultProps = {
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
