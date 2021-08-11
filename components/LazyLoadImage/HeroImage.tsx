import React from 'react'
import { SimpleImg } from 'react-simple-img'

interface HeroImageProps {
  id: string
}

function HeroImage({ id }: HeroImageProps) {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${id}`
  return (
    <SimpleImg
      src={imageUrl}
      animationDuration={0.1}
      width={1920}
      height={650}
      applyAspectRatio={true}
    />
  )
}

HeroImage.defaultProps = {
  id: 'homepage-h-d',
}

export default HeroImage
