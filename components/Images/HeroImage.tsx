import React from 'react'
import LazyLoadImage from '../Images/LazyLoadImage'

interface HeroImageProps {
  altText: string
  id: string
}

function HeroImage({ id, altText }: HeroImageProps) {
  return (
    <LazyLoadImage
      altText={altText}
      id={id}
      animationDuration={0.1}
      width={1920}
      height={650}
      applyAspectRatio={true}
    />
  )
}

HeroImage.defaultProps = {
  altText: 'Default hero alt text',
  id: 'homepage-h-d',
}

export default HeroImage
