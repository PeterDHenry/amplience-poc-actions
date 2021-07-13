import React from 'react';
import styled from 'styled-components';
import PushPanelImage from '../LazyLoadImage/PushPanelImage';

const Panel = styled.div`
  max-width: 360px;
`

const PanelText = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  font-weight: 300;
  background: #FFF;
  font-family: "Roboto Condensed";
  padding-top: 10px;
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 26px;
  }
  button {
    margin-top: 10px;
    border: 1.5px solid #000;
    padding: 4px 16px;
    font-size: 20px;
  }
`

const PushPanel = ( {color, fontWeight, content} ) => (

  <Panel>
  <a href={content.calltoactionurl}>
    <PushPanelImage id={content.background.name} />
    <PanelText>
      <h2 style={{color: color, fontWeight: fontWeight}}>
        {content.headline.toUpperCase()}
      </h2>
      <h3 style={{color: color}}>
        {content.strapline.toUpperCase()}
      </h3>
      <button style={{color: color}}>{content.calltoactiontext.toUpperCase()}</button>
    </PanelText>
    </a>
  </Panel>
);

PushPanel.defaultProps = {
  content: {
    background: {
      name: "pushpanel-1"
    },
    headline: "Latest Triathlon Kit",
    strapline: "Prepare for your next event",
    calltoactiontext: "Shop now",
    calltoactionurl: "https://www.wiggle.co.uk/triathlon-2021?range=ne"
  },
  color: "black"
}

export default PushPanel;
