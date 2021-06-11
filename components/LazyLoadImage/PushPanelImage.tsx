import React from 'react';
import { SimpleImg } from 'react-simple-img';

function PushPanelImage( props ) {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${props.id}`;
  return (
    <img src="https://www.wigglestatic.com/images/offers/commercial/2021/Week23/homepagemb2dx.jpg"
    />
  );
}

PushPanelImage.defaultProps = {
  id: "homepage-h-d"
}


export default PushPanelImage;
