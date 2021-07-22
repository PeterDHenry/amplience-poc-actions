import React from 'react'
import styled from 'styled-components'

const PanelImg = styled.img`
  width: 100%;
  height: auto;
`

function PushPanelImage(props) {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${props.id}`
  return <PanelImg src={imageUrl} />
}

PushPanelImage.defaultProps = {
  id: 'pushpanel-1',
}

export default PushPanelImage
