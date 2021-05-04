import React from 'react';
import { SimpleImg } from 'react-simple-img';

function SpeakerImage({ id }) {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${id}`;
  return (
    <SimpleImg
      src={imageUrl}
      animationDuration="1"
      width={1920}
      height={650}
      applyAspectRatio="true"
    />
  );
}

export default SpeakerImage;
