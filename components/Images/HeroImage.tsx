import React from 'react'
import { LazyLoadImage } from '../Images/LazyLoadImage'
import { defaultHeroImageProps, HeroImageProps } from './types'

export const HeroImage = ({ id, altText }: HeroImageProps) => {
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

HeroImage.defaultProps = defaultHeroImageProps
