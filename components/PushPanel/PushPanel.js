import React from 'react'
import styled from 'styled-components'
import PushPanelImage from '../LazyLoadImage/PushPanelImage'

const Panel = styled.div`
  max-width: 360px;
`

const PanelLink = styled.a`
  text-decoration: none;
`

const PanelText = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  font-weight: 300;
  background: #fff;
  font-family: 'Roboto Condensed';
  padding-top: 10px;
  h2 {
    font-size: 37px;
    min-height: 88px;
  }
  h3 {
    font-size: 25px;
    min-height: 60px;
  }
  button {
    margin-top: 10px;
    border: 1.5px solid #000;
    padding: 4px 16px;
    font-size: 20px;
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
}) => (
  <Panel>
    <PanelLink href={linkURL}>
      <PushPanelImage id={mainImg.name} />
      <PanelText>
        <h2 style={{ color: color, fontWeight: fontWeight }}>
          {headerText.toUpperCase()}
        </h2>
        <h3 style={{ color: color }}>{subText.toUpperCase()}</h3>
        <button style={{ color: color }}>
          {calltoactiontext.toUpperCase()}
        </button>
      </PanelText>
    </PanelLink>
  </Panel>
)

PushPanel.defaultProps = {
  mainImg: {
    name: 'homepageb3d2',
  },
  headerText: 'Test header text',
  subText: 'Test Sub text',
  calltoactiontext: 'Test CTA',
  linkURL: 'https://www.wiggle.co.uk/triathlon-2021?range=ne',
  color: 'black',
}

export default PushPanel