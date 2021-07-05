import React from 'react';

function PushPanelImage( props ) {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${props.id}`;
  return (
    <img src="https://www.wigglestatic.com/images/offers/commercial/2021/week26b/homepageb3d2.jpg"
    />
  );
}

PushPanelImage.defaultProps = {
  id: "pushpanel-1"
}


export default PushPanelImage;
